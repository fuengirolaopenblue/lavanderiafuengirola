/**
 * Cliente MCP con auto-refresh de access_token.
 *
 * Uso rápido (Node 18+):
 *
 *   import { createMcpClient } from "./scripts/mcp-client.mjs";
 *
 *   const client = createMcpClient({
 *     mcpUrl: "https://lysfvsgmlgciucleaecz.supabase.co/functions/v1/mcp",
 *     refreshUrl: "https://lysfvsgmlgciucleaecz.supabase.co/functions/v1/mcp-refresh-token",
 *     accessToken: process.env.MCP_ACCESS_TOKEN,
 *     refreshToken: process.env.MCP_REFRESH_TOKEN,
 *     // Opcional: persistir tokens rotados en disco / secret manager
 *     onTokensRefreshed: async ({ access_token, refresh_token, expires_at }) => {
 *       // guardar en tu almacén
 *     },
 *   });
 *
 *   // JSON-RPC directo contra el endpoint MCP:
 *   const tools = await client.request({ method: "tools/list" });
 *   const res = await client.request({
 *     method: "tools/call",
 *     params: { name: "get_business_info", arguments: {} },
 *   });
 *
 * El middleware detecta 401 (y JSON-RPC error code -32001/"unauthorized"),
 * llama al endpoint mcp-refresh-token, rota el refresh_token y reintenta
 * la petición original UNA vez. Si el refresh falla, propaga el error.
 */

export function createMcpClient({
  mcpUrl,
  refreshUrl,
  accessToken,
  refreshToken,
  expiresAt,
  onTokensRefreshed,
  fetchImpl = globalThis.fetch,
  // Segundos antes de la expiración en los que forzamos un refresh proactivo.
  // Por defecto 120s (Supabase da tokens de ~1h).
  proactiveSkewSeconds = 120,
  // Activar/desactivar el timer en segundo plano. En procesos cortos (CLI/serverless)
  // puedes desactivarlo y confiar solo en el chequeo previo a cada request.
  autoScheduleRefresh = true,
}) {
  if (!mcpUrl) throw new Error("mcpUrl is required");
  if (!refreshUrl) throw new Error("refreshUrl is required");

  let currentAccess = accessToken ?? null;
  let currentRefresh = refreshToken ?? null;
  let currentExpiresAt = normalizeExpiresAt(expiresAt) ?? decodeJwtExp(currentAccess);
  let refreshPromise = null;
  let refreshTimer = null;
  let rpcId = 0;

  function normalizeExpiresAt(value) {
    if (value == null) return null;
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return null;
    // Acepta segundos (unix) o milisegundos; normaliza a segundos.
    return n > 1e12 ? Math.floor(n / 1000) : Math.floor(n);
  }

  function decodeJwtExp(jwt) {
    if (!jwt || typeof jwt !== "string") return null;
    const parts = jwt.split(".");
    if (parts.length < 2) return null;
    try {
      const payload = parts[1].replace(/-/g, "+").replace(/_/g, "/");
      const pad = payload.length % 4 ? 4 - (payload.length % 4) : 0;
      const b64 = payload + "=".repeat(pad);
      const json = typeof atob === "function"
        ? atob(b64)
        : Buffer.from(b64, "base64").toString("utf8");
      const parsed = JSON.parse(json);
      return typeof parsed.exp === "number" ? parsed.exp : null;
    } catch {
      return null;
    }
  }

  function secondsUntilExpiry() {
    if (!currentExpiresAt) return null;
    return currentExpiresAt - Math.floor(Date.now() / 1000);
  }

  function scheduleProactiveRefresh() {
    if (!autoScheduleRefresh) return;
    if (refreshTimer) {
      clearTimeout(refreshTimer);
      refreshTimer = null;
    }
    if (!currentRefresh || !currentExpiresAt) return;
    const secsLeft = secondsUntilExpiry();
    // Refrescar `proactiveSkewSeconds` antes de expirar; mínimo 1s, máximo ~24d (limit de setTimeout).
    const delayMs = Math.max(1, (secsLeft - proactiveSkewSeconds)) * 1000;
    const capped = Math.min(delayMs, 2_147_000_000);
    refreshTimer = setTimeout(() => {
      refreshTimer = null;
      refreshAccessToken().catch(() => {
        // Reintenta en 30s si el refresh proactivo falla (red caída, etc.).
        refreshTimer = setTimeout(scheduleProactiveRefresh, 30_000);
        if (typeof refreshTimer.unref === "function") refreshTimer.unref();
      });
    }, capped);
    if (typeof refreshTimer.unref === "function") refreshTimer.unref();
  }


  async function refreshAccessToken() {
    if (!currentRefresh) throw new Error("No refresh_token available");
    // Coalescer refrescos concurrentes en una sola llamada.
    if (refreshPromise) return refreshPromise;

    refreshPromise = (async () => {
      const res = await fetchImpl(refreshUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: currentRefresh }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.access_token) {
        const err = new Error(data.error || `Refresh failed (${res.status})`);
        err.status = res.status;
        throw err;
      }
      currentAccess = data.access_token;
      // Supabase rota el refresh_token — actualiza SIEMPRE.
      if (data.refresh_token) currentRefresh = data.refresh_token;
      if (typeof onTokensRefreshed === "function") {
        try {
          await onTokensRefreshed({
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            expires_in: data.expires_in,
            expires_at: data.expires_at,
          });
        } catch {
          // no bloquear la request por un fallo de persistencia
        }
      }
      return data.access_token;
    })().finally(() => {
      refreshPromise = null;
    });

    return refreshPromise;
  }

  function isUnauthorizedJsonRpc(payload) {
    // MCP devuelve errores JSON-RPC con http 200; detectamos "unauthorized".
    if (!payload || typeof payload !== "object") return false;
    const e = payload.error;
    if (!e) return false;
    if (e.code === 401 || e.code === -32001) return true;
    const msg = String(e.message || "").toLowerCase();
    return msg.includes("unauthorized") || msg.includes("invalid token") || msg.includes("expired");
  }

  async function rawFetch(body) {
    return fetchImpl(mcpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/event-stream",
        ...(currentAccess ? { Authorization: `Bearer ${currentAccess}` } : {}),
      },
      body: JSON.stringify(body),
    });
  }

  /**
   * Envía un mensaje JSON-RPC al endpoint MCP.
   * Si recibe 401 (HTTP o JSON-RPC), refresca el token y reintenta una vez.
   */
  async function request({ method, params }) {
    const message = { jsonrpc: "2.0", id: ++rpcId, method, params };

    let res = await rawFetch(message);
    let payload = null;

    if (res.status === 401) {
      await refreshAccessToken();
      res = await rawFetch(message);
    }

    // Puede venir como SSE; leemos texto y parseamos si es JSON.
    const text = await res.text();
    try {
      payload = JSON.parse(text);
    } catch {
      // SSE / streaming — devolver crudo al llamador.
      if (!res.ok) {
        const err = new Error(`MCP HTTP ${res.status}: ${text.slice(0, 200)}`);
        err.status = res.status;
        throw err;
      }
      return { raw: text, status: res.status };
    }

    if (isUnauthorizedJsonRpc(payload)) {
      await refreshAccessToken();
      res = await rawFetch(message);
      const text2 = await res.text();
      try {
        payload = JSON.parse(text2);
      } catch {
        return { raw: text2, status: res.status };
      }
    }

    if (payload.error) {
      const err = new Error(payload.error.message || "MCP error");
      err.code = payload.error.code;
      err.data = payload.error.data;
      throw err;
    }
    return payload.result;
  }

  return {
    request,
    getAccessToken: () => currentAccess,
    getRefreshToken: () => currentRefresh,
    refreshAccessToken,
  };
}
