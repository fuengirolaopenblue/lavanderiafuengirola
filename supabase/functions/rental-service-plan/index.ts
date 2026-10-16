import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3";

const Body = z.object({
  lang: z.enum(["es", "en"]).default("es"),
  propertyType: z.string().min(1).max(100),
  location: z.string().min(1).max(100),
  bedrooms: z.number().int().min(0).max(50),
  bathrooms: z.number().int().min(0).max(50),
  guests: z.number().int().min(1).max(100),
  turnoversPerMonth: z.number().int().min(0).max(62),
  needs: z.array(z.string().max(60)).max(10),
  notes: z.string().max(1500).default(""),
});

const SYSTEM = `You are the service planner for OpenBlue Fuengirola (Lavandería Fuengirola), Av. de Mijas 5, Bajo 3, Edif. Guadalupe IV, 29640 Fuengirola. Open 07:00-23:00, 365 days (never say 24h).
Services you can recommend (only these):
- Self-service laundry: Girbau professional machines 9-19 kg, active oxygen disinfection, 07:00-23:00.
- Vacation rental / Airbnb laundry (B2B): pickup & delivery, linen and towel washing/ironing, Linen Custody (we store the owner's linen sets), Scheduled Delivery aligned to check-ins, monthly invoicing.
- Door-to-door laundry for individuals, bulky items (duvets, curtains).
- Vacation rental cleaning: check-out/check-in cleaning, bed making, amenity restock, inspection report.
- 360° vacation rental management: listing on Airbnb/Booking/Vrbo, guest communication, cleaning, laundry, maintenance.
Coverage: Fuengirola, Mijas Costa, Benalmádena, Torremolinos, Málaga.
Do NOT invent prices; say a tailored quote is given via WhatsApp or the quote form.
Write a concise, practical plan in Markdown with sections: Summary, Recommended services, Linen & laundry estimate (sets needed per bed/bath, suggested par level e.g. 3 sets, approx kg per turnover), Turnover workflow, Next steps. Max ~300 words.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (b: unknown, status: number) =>
    new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: "Invalid input" }, 400);
  const d = parsed.data;
  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) return json({ error: "AI not configured" }, 500);

  const user = `Answer in ${d.lang === "es" ? "Spanish" : "English"}.
Property: ${d.propertyType} in ${d.location}. Bedrooms: ${d.bedrooms}, bathrooms: ${d.bathrooms}, max guests: ${d.guests}, turnovers/month: ${d.turnoversPerMonth}.
Needs: ${d.needs.join(", ") || "not specified"}.
Notes: ${d.notes || "-"}`;

  try {
    const upstream = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      signal: req.signal,
      headers: { "Content-Type": "application/json", "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "fetch" },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        instructions: SYSTEM,
        input: user,
        stream: true,
        store: false,
        reasoning: { effort: "low", summary: "auto" },
        include: ["reasoning.encrypted_content"],
      }),
    });
    if (!upstream.ok) {
      const text = await upstream.text();
      let message = "AI error";
      try { message = JSON.parse(text)?.error?.message ?? JSON.parse(text)?.message ?? message; } catch { /* */ }
      return json({ error: message }, upstream.status);
    }
    const headers = new Headers(corsHeaders);
    headers.set("Content-Type", "text/event-stream");
    upstream.headers.forEach((v, k) => { if (k.toLowerCase().startsWith("x-lovable-aig-")) headers.set(k, v); });
    return new Response(upstream.body, { status: 200, headers });
  } catch (e) {
    if (req.signal.aborted) return new Response(null, { status: 499, headers: corsHeaders });
    return json({ error: e instanceof Error ? e.message : "Error" }, 500);
  }
});
