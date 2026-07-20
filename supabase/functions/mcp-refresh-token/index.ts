import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!
const SUPABASE_PUBLISHABLE_KEY =
  Deno.env.get('SUPABASE_PUBLISHABLE_KEY') ??
  Deno.env.get('SUPABASE_ANON_KEY')!

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const jsonHeaders = { ...corsHeaders, 'Content-Type': 'application/json' }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: jsonHeaders,
    })
  }

  let payload: { refresh_token?: unknown }
  try {
    payload = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: jsonHeaders,
    })
  }

  const refreshToken = payload.refresh_token
  if (typeof refreshToken !== 'string' || refreshToken.length < 10 || refreshToken.length > 4096) {
    return new Response(
      JSON.stringify({ error: 'refresh_token (string) is required' }),
      { status: 400, headers: jsonHeaders },
    )
  }

  // Proxy to Supabase GoTrue token endpoint with grant_type=refresh_token.
  const tokenRes = await fetch(
    `${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`,
    {
      method: 'POST',
      headers: {
        apikey: SUPABASE_PUBLISHABLE_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    },
  )

  const data = await tokenRes.json().catch(() => ({}))

  if (!tokenRes.ok) {
    return new Response(
      JSON.stringify({
        error: data?.error_description ?? data?.msg ?? 'Failed to refresh token',
      }),
      { status: tokenRes.status, headers: jsonHeaders },
    )
  }

  // Return only what the MCP client needs.
  return new Response(
    JSON.stringify({
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      token_type: data.token_type,
      expires_in: data.expires_in,
      expires_at: data.expires_at,
    }),
    { status: 200, headers: jsonHeaders },
  )
})
