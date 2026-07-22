/**
 * Almacén de tokens MCP respaldado por Supabase.
 *
 * Guarda y lee `access_token` / `refresh_token` desde la tabla
 * `public.mcp_tokens`, protegida por RLS: cada usuario solo ve sus
 * propios tokens. El token en memoria se usa como Authorization para que
 * RLS resuelva `auth.uid()` = dueño de la fila.
 *
 * Uso combinado con scripts/mcp-login.mjs y scripts/mcp-client.mjs:
 *
 *   import { loginSupabase } from "./scripts/mcp-login.mjs";
 *   import { createSupabaseTokenStore } from "./scripts/mcp-token-store.mjs";
 *   import { createMcpClient } from "./scripts/mcp-client.mjs";
 *
 *   const store = createSupabaseTokenStore({
 *     supabaseUrl: process.env.SUPABASE_URL,
 *     anonKey:     process.env.SUPABASE_PUBLISHABLE_KEY,
 *   });
 *
 *   let tokens = await store.load();          // usa el token en memoria si lo hay
 *   if (!tokens) {
 *     tokens = await loginSupabase({ ... });
 *     store.setSession(tokens.access_token, tokens.user?.id);
 *     await store.save(tokens);
 *   } else {
 *     store.setSession(tokens.access_token);
 *   }
 *
 *   const client = createMcpClient({
 *     mcpUrl:       "https://<ref>.supabase.co/functions/v1/mcp",
 *     refreshUrl:   "https://<ref>.supabase.co/functions/v1/mcp-refresh-token",
 *     accessToken:  tokens.access_token,
 *     refreshToken: tokens.refresh_token,
 *     onTokensRefreshed: async (t) => {
 *       store.setSession(t.access_token);      // el nuevo JWT sigue siendo del mismo user
 *       await store.save(t);
 *     },
 *   });
 */

function decodeJwtSub(jwt) {
  try {
    const [, payload] = jwt.split(".");
    const json = JSON.parse(
      Buffer.from(payload.replace(/-/g, "+").replace(/_/g, "/"), "base64").toString("utf8"),
    );
    return json.sub || null;
  } catch {
    return null;
  }
}

export function createSupabaseTokenStore({
  supabaseUrl,
  anonKey,
  fetchImpl = globalThis.fetch,
}) {
  if (!supabaseUrl) throw new Error("supabaseUrl is required");
  if (!anonKey) throw new Error("anonKey is required");

  const base = supabaseUrl.replace(/\/$/, "");
  let accessToken = null;
  let userId = null;

  function assertSession() {
    if (!accessToken) {
      throw new Error(
        "Token store has no session. Call setSession(accessToken) after login before load()/save().",
      );
    }
  }

  function headers(extra = {}) {
    return {
      apikey: anonKey,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
      ...extra,
    };
  }

  return {
    /** Registra el JWT del usuario autenticado (necesario para que RLS acepte la consulta). */
    setSession(token, uid) {
      accessToken = token || null;
      userId = uid || (token ? decodeJwtSub(token) : null);
    },
    getUserId: () => userId,

    /** Devuelve la fila de tokens del usuario actual, o null si no existe. */
    async load() {
      assertSession();
      const res = await fetchImpl(
        `${base}/rest/v1/mcp_tokens?select=access_token,refresh_token,token_type,expires_at,expires_in&limit=1`,
        { headers: headers() },
      );
      if (!res.ok) {
        throw new Error(`Failed to load MCP tokens (${res.status}): ${await res.text()}`);
      }
      const rows = await res.json();
      return rows?.[0] ?? null;
    },

    /** Upsert de la fila del usuario actual. */
    async save(tokens) {
      assertSession();
      if (!tokens?.access_token || !tokens?.refresh_token) {
        throw new Error("save() requires access_token and refresh_token");
      }
      if (!userId) userId = decodeJwtSub(accessToken);
      if (!userId) throw new Error("Could not determine user_id from JWT");

      const row = {
        user_id: userId,
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        token_type: tokens.token_type ?? null,
        expires_at: tokens.expires_at ?? null,
        expires_in: tokens.expires_in ?? null,
      };

      const res = await fetchImpl(
        `${base}/rest/v1/mcp_tokens?on_conflict=user_id`,
        {
          method: "POST",
          headers: headers({
            Prefer: "resolution=merge-duplicates,return=minimal",
          }),
          body: JSON.stringify(row),
        },
      );
      if (!res.ok) {
        throw new Error(`Failed to save MCP tokens (${res.status}): ${await res.text()}`);
      }
    },

    async clear() {
      assertSession();
      const res = await fetchImpl(
        `${base}/rest/v1/mcp_tokens?user_id=eq.${userId ?? decodeJwtSub(accessToken)}`,
        { method: "DELETE", headers: headers() },
      );
      if (!res.ok && res.status !== 404) {
        throw new Error(`Failed to clear MCP tokens (${res.status}): ${await res.text()}`);
      }
    },
  };
}
