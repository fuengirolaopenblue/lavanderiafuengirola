/**
 * Tests unitarios y de integración para scripts/mcp-client.mjs
 *
 * Cubre:
 *  - Request feliz (adjunta Authorization Bearer)
 *  - Reintento tras HTTP 401
 *  - Reintento tras error JSON-RPC "unauthorized" (code -32001)
 *  - Rotación del refresh_token y callback onTokensRefreshed
 *  - Coalescing: refrescos concurrentes → una sola llamada a refreshUrl
 *  - Refresh proactivo previo a la request cuando exp está cerca
 *  - Refresh proactivo por timer en background
 *  - Propagación de error si el refresh falla
 */

import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { createMcpClient } from "./mcp-client.mjs";

const MCP_URL = "https://example.test/functions/v1/mcp";
const REFRESH_URL = "https://example.test/functions/v1/mcp-refresh-token";

// Helper: crea un JWT firmado "de mentira" con `exp` en segundos unix.
function makeJwt(expSeconds) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({ exp: expSeconds })).toString("base64url");
  return `${header}.${payload}.sig`;
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function makeFetchMock(handlers) {
  // handlers: { mcp: [fn, fn, ...], refresh: [fn, fn, ...] } — se consumen en orden.
  const state = {
    mcpCalls: [],
    refreshCalls: [],
    mcpQueue: [...(handlers.mcp || [])],
    refreshQueue: [...(handlers.refresh || [])],
  };
  const fetchImpl = vi.fn(async (url, init) => {
    if (url === MCP_URL) {
      state.mcpCalls.push({ url, init });
      const handler = state.mcpQueue.shift();
      if (!handler) throw new Error(`Unexpected extra MCP call #${state.mcpCalls.length}`);
      return handler(init);
    }
    if (url === REFRESH_URL) {
      state.refreshCalls.push({ url, init });
      const handler = state.refreshQueue.shift();
      if (!handler) throw new Error(`Unexpected extra refresh call #${state.refreshCalls.length}`);
      return handler(init);
    }
    throw new Error(`Unexpected fetch to ${url}`);
  });
  return { fetchImpl, state };
}

describe("mcp-client — request feliz", () => {
  it("adjunta Authorization Bearer y devuelve result", async () => {
    const { fetchImpl, state } = makeFetchMock({
      mcp: [() => jsonResponse({ jsonrpc: "2.0", id: 1, result: { ok: true } })],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(Math.floor(Date.now() / 1000) + 3600),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
    });

    const result = await client.request({ method: "tools/list" });
    expect(result).toEqual({ ok: true });
    expect(state.mcpCalls).toHaveLength(1);
    expect(state.mcpCalls[0].init.headers.Authorization).toMatch(/^Bearer /);
    expect(state.refreshCalls).toHaveLength(0);
    client.stop();
  });
});

describe("mcp-client — reintento en 401", () => {
  it("refresca y reintenta cuando el HTTP responde 401", async () => {
    const { fetchImpl, state } = makeFetchMock({
      mcp: [
        () => new Response("unauthorized", { status: 401 }),
        () => jsonResponse({ jsonrpc: "2.0", id: 1, result: { ok: true } }),
      ],
      refresh: [
        () =>
          jsonResponse({
            access_token: makeJwt(Math.floor(Date.now() / 1000) + 3600),
            refresh_token: "rt-2",
            expires_in: 3600,
          }),
      ],
    });

    const onRefresh = vi.fn();
    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(Math.floor(Date.now() / 1000) + 3600),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
      onTokensRefreshed: onRefresh,
    });

    const result = await client.request({ method: "tools/list" });
    expect(result).toEqual({ ok: true });
    expect(state.mcpCalls).toHaveLength(2);
    expect(state.refreshCalls).toHaveLength(1);
    // El segundo intento usa el nuevo access_token
    expect(state.mcpCalls[1].init.headers.Authorization).not.toEqual(
      state.mcpCalls[0].init.headers.Authorization,
    );
    // Rotación de refresh_token
    expect(client.getRefreshToken()).toBe("rt-2");
    expect(onRefresh).toHaveBeenCalledOnce();
    client.stop();
  });

  it("refresca y reintenta cuando la respuesta JSON-RPC es unauthorized (-32001)", async () => {
    const { fetchImpl, state } = makeFetchMock({
      mcp: [
        () => jsonResponse({ jsonrpc: "2.0", id: 1, error: { code: -32001, message: "Unauthorized" } }),
        () => jsonResponse({ jsonrpc: "2.0", id: 1, result: { ok: true } }),
      ],
      refresh: [
        () =>
          jsonResponse({
            access_token: makeJwt(Math.floor(Date.now() / 1000) + 3600),
            refresh_token: "rt-2",
            expires_in: 3600,
          }),
      ],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(Math.floor(Date.now() / 1000) + 3600),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
    });

    const result = await client.request({ method: "tools/call" });
    expect(result).toEqual({ ok: true });
    expect(state.mcpCalls).toHaveLength(2);
    expect(state.refreshCalls).toHaveLength(1);
    client.stop();
  });

  it("propaga el error si el refresh falla", async () => {
    const { fetchImpl } = makeFetchMock({
      mcp: [() => new Response("unauthorized", { status: 401 })],
      refresh: [() => jsonResponse({ error: "invalid_grant" }, 400)],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(Math.floor(Date.now() / 1000) + 3600),
      refreshToken: "rt-bad",
      fetchImpl,
      autoScheduleRefresh: false,
    });

    await expect(client.request({ method: "tools/list" })).rejects.toThrow(/invalid_grant/);
    client.stop();
  });
});

describe("mcp-client — coalescing de refresh concurrentes", () => {
  it("varias requests con 401 simultáneas disparan UN solo refresh", async () => {
    let resolveRefresh;
    const refreshPromise = new Promise((r) => (resolveRefresh = r));

    const { fetchImpl, state } = makeFetchMock({
      mcp: [
        () => new Response("unauthorized", { status: 401 }),
        () => new Response("unauthorized", { status: 401 }),
        () => new Response("unauthorized", { status: 401 }),
        () => jsonResponse({ jsonrpc: "2.0", id: 1, result: { n: 1 } }),
        () => jsonResponse({ jsonrpc: "2.0", id: 2, result: { n: 2 } }),
        () => jsonResponse({ jsonrpc: "2.0", id: 3, result: { n: 3 } }),
      ],
      refresh: [
        async () => {
          await refreshPromise;
          return jsonResponse({
            access_token: makeJwt(Math.floor(Date.now() / 1000) + 3600),
            refresh_token: "rt-2",
            expires_in: 3600,
          });
        },
      ],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(Math.floor(Date.now() / 1000) + 3600),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
    });

    const p1 = client.request({ method: "a" });
    const p2 = client.request({ method: "b" });
    const p3 = client.request({ method: "c" });

    // Deja que las 3 lleguen al primer fetch antes de resolver el refresh.
    await new Promise((r) => setTimeout(r, 10));
    resolveRefresh();

    const results = await Promise.all([p1, p2, p3]);
    expect(results.map((r) => r.n).sort()).toEqual([1, 2, 3]);
    // Un único refresh a pesar de los 3 fallos concurrentes.
    expect(state.refreshCalls).toHaveLength(1);
    client.stop();
  });
});

describe("mcp-client — refresh proactivo previo a la request", () => {
  it("si el token expira en < skew, refresca ANTES de la request", async () => {
    // Token que expira en 30s con skew=120 → debe refrescar antes.
    const nowSec = Math.floor(Date.now() / 1000);
    const { fetchImpl, state } = makeFetchMock({
      mcp: [() => jsonResponse({ jsonrpc: "2.0", id: 1, result: "ok" })],
      refresh: [
        () =>
          jsonResponse({
            access_token: makeJwt(nowSec + 3600),
            refresh_token: "rt-2",
            expires_in: 3600,
          }),
      ],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(nowSec + 30),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
      proactiveSkewSeconds: 120,
    });

    await client.request({ method: "tools/list" });
    // Refresh antes de la request (1 refresh + 1 mcp call, sin reintento).
    expect(state.refreshCalls).toHaveLength(1);
    expect(state.mcpCalls).toHaveLength(1);
    client.stop();
  });

  it("si el token está fresco, NO refresca antes de la request", async () => {
    const nowSec = Math.floor(Date.now() / 1000);
    const { fetchImpl, state } = makeFetchMock({
      mcp: [() => jsonResponse({ jsonrpc: "2.0", id: 1, result: "ok" })],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      accessToken: makeJwt(nowSec + 3600),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: false,
      proactiveSkewSeconds: 120,
    });

    await client.request({ method: "tools/list" });
    expect(state.refreshCalls).toHaveLength(0);
    expect(state.mcpCalls).toHaveLength(1);
    client.stop();
  });
});

describe("mcp-client — refresh proactivo por timer en background", () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("programa un timer que refresca antes de expirar", async () => {
    const nowSec = Math.floor(Date.now() / 1000);
    const { fetchImpl, state } = makeFetchMock({
      refresh: [
        () =>
          jsonResponse({
            access_token: makeJwt(nowSec + 3600),
            refresh_token: "rt-2",
            expires_in: 3600,
          }),
      ],
    });

    const client = createMcpClient({
      mcpUrl: MCP_URL,
      refreshUrl: REFRESH_URL,
      // exp en 200s, skew 120s → timer debe disparar en ~80s
      accessToken: makeJwt(nowSec + 200),
      refreshToken: "rt-1",
      fetchImpl,
      autoScheduleRefresh: true,
      proactiveSkewSeconds: 120,
    });

    expect(state.refreshCalls).toHaveLength(0);
    // Avanza el reloj 90s para cruzar el disparador.
    await vi.advanceTimersByTimeAsync(90_000);
    expect(state.refreshCalls).toHaveLength(1);
    expect(client.getRefreshToken()).toBe("rt-2");
    client.stop();
  });
});
