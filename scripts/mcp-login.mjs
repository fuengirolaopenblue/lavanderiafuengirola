/**
 * Login inicial contra Supabase → obtiene access_token y refresh_token
 * para inicializar el cliente MCP (scripts/mcp-client.mjs).
 *
 * Uso (Node 18+):
 *
 *   node scripts/mcp-login.mjs
 *
 * Variables de entorno requeridas:
 *   SUPABASE_URL              (ej. https://<ref>.supabase.co)
 *   SUPABASE_PUBLISHABLE_KEY  (anon/publishable key)
 *   MCP_USER_EMAIL
 *   MCP_USER_PASSWORD
 *
 * Opcional:
 *   MCP_TOKENS_FILE           ruta donde guardar los tokens (default: .mcp-tokens.json)
 *
 * Como módulo:
 *
 *   import { loginSupabase, loadTokens, saveTokens } from "./scripts/mcp-login.mjs";
 *   const tokens = await loginSupabase({ email, password, supabaseUrl, anonKey });
 *   await saveTokens(tokens);
 */

import { readFile, writeFile, chmod } from "node:fs/promises";
import { resolve } from "node:path";

const DEFAULT_TOKENS_FILE = process.env.MCP_TOKENS_FILE || ".mcp-tokens.json";

export async function loginSupabase({
  email,
  password,
  supabaseUrl,
  anonKey,
  fetchImpl = globalThis.fetch,
}) {
  if (!email || !password) throw new Error("email and password are required");
  if (!supabaseUrl) throw new Error("supabaseUrl is required");
  if (!anonKey) throw new Error("anonKey (publishable key) is required");

  const res = await fetchImpl(
    `${supabaseUrl.replace(/\/$/, "")}/auth/v1/token?grant_type=password`,
    {
      method: "POST",
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    const msg =
      data.error_description ||
      data.msg ||
      data.error ||
      `Login failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    token_type: data.token_type,
    expires_in: data.expires_in,
    expires_at: data.expires_at,
    user: data.user ? { id: data.user.id, email: data.user.email } : undefined,
  };
}

export async function saveTokens(tokens, file = DEFAULT_TOKENS_FILE) {
  const path = resolve(process.cwd(), file);
  await writeFile(path, JSON.stringify(tokens, null, 2), "utf8");
  // Permisos restrictivos (best-effort, no falla en Windows).
  try {
    await chmod(path, 0o600);
  } catch {}
  return path;
}

export async function loadTokens(file = DEFAULT_TOKENS_FILE) {
  const path = resolve(process.cwd(), file);
  try {
    const raw = await readFile(path, "utf8");
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === "ENOENT") return null;
    throw err;
  }
}

// --- CLI ---------------------------------------------------------------
const isMain =
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith(process.argv[1] ?? "");

if (isMain) {
  const {
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    MCP_USER_EMAIL,
    MCP_USER_PASSWORD,
  } = process.env;

  const missing = [
    ["SUPABASE_URL", SUPABASE_URL],
    ["SUPABASE_PUBLISHABLE_KEY", SUPABASE_PUBLISHABLE_KEY],
    ["MCP_USER_EMAIL", MCP_USER_EMAIL],
    ["MCP_USER_PASSWORD", MCP_USER_PASSWORD],
  ]
    .filter(([, v]) => !v)
    .map(([k]) => k);

  if (missing.length) {
    console.error(
      `Missing env vars: ${missing.join(", ")}\n` +
        `Set them and re-run:  node scripts/mcp-login.mjs`,
    );
    process.exit(1);
  }

  try {
    const tokens = await loginSupabase({
      email: MCP_USER_EMAIL,
      password: MCP_USER_PASSWORD,
      supabaseUrl: SUPABASE_URL,
      anonKey: SUPABASE_PUBLISHABLE_KEY,
    });
    const path = await saveTokens(tokens);
    // No imprimimos el token completo; solo confirmación + metadatos.
    console.log(
      JSON.stringify(
        {
          ok: true,
          saved_to: path,
          user: tokens.user,
          expires_at: tokens.expires_at,
          expires_in: tokens.expires_in,
          access_token_preview: tokens.access_token.slice(0, 12) + "…",
        },
        null,
        2,
      ),
    );
  } catch (err) {
    console.error("Login failed:", err.message);
    process.exit(1);
  }
}
