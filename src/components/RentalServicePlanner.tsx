import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Loader2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const URL_FN = `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/rental-service-plan`;
const KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const T = {
  es: {
    title: "Plan de servicio a medida para tu alquiler vacacional",
    sub: "Cuéntanos tu vivienda y te proponemos al instante un plan de lavandería y limpieza.",
    type: "Tipo de vivienda", loc: "Zona", beds: "Dormitorios", baths: "Baños", guests: "Huéspedes máx.",
    turn: "Cambios de huésped / mes", needs: "¿Qué necesitas?", notes: "Detalles adicionales (opcional)",
    go: "Crear mi plan", loading: "Creando tu plan…", wa: "Pedir presupuesto por WhatsApp",
    opts: ["Lavado de sábanas y toallas", "Recogida y entrega", "Custodia de ropa de cama", "Limpieza check-out", "Gestión integral 360°", "Edredones y cortinas"],
    placeholderType: "Apartamento, villa…", placeholderLoc: "Fuengirola, Mijas…",
  },
  en: {
    title: "Tailored service plan for your vacation rental",
    sub: "Tell us about your property and get an instant laundry & cleaning plan.",
    type: "Property type", loc: "Area", beds: "Bedrooms", baths: "Bathrooms", guests: "Max guests",
    turn: "Guest turnovers / month", needs: "What do you need?", notes: "Extra details (optional)",
    go: "Create my plan", loading: "Creating your plan…", wa: "Get a quote on WhatsApp",
    opts: ["Sheets & towels washing", "Pickup & delivery", "Linen custody", "Check-out cleaning", "360° management", "Duvets & curtains"],
    placeholderType: "Apartment, villa…", placeholderLoc: "Fuengirola, Mijas…",
  },
};

const RentalServicePlanner = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("es") ? "es" : "en";
  const t = T[lang];
  const [f, setF] = useState({ propertyType: "", location: "", bedrooms: 2, bathrooms: 1, guests: 4, turnoversPerMonth: 6, notes: "" });
  const [needs, setNeeds] = useState<string[]>([]);
  const [plan, setPlan] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    abortRef.current?.abort();
    const ac = new AbortController(); abortRef.current = ac;
    setPlan(""); setError(""); setLoading(true);
    try {
      const res = await fetch(URL_FN, {
        method: "POST", signal: ac.signal,
        headers: { "Content-Type": "application/json", apikey: KEY, Authorization: `Bearer ${KEY}` },
        body: JSON.stringify({ ...f, needs, lang }),
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `Error ${res.status}`);
      }
      const reader = res.body.getReader(); const dec = new TextDecoder(); let buf = "";
      for (;;) {
        const { done, value } = await reader.read(); if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split("\n"); buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          try {
            const ev = JSON.parse(line.slice(5).trim());
            if (ev.type === "response.output_text.delta") setPlan((p) => p + ev.delta);
            if (ev.type === "error" || ev.type === "response.failed") throw new Error(ev.error?.message || ev.response?.error?.message || "AI error");
          } catch (err) { if (err instanceof Error && !(err instanceof SyntaxError)) throw err; }
        }
      }
    } catch (err) {
      if (!(err instanceof DOMException && err.name === "AbortError")) setError(err instanceof Error ? err.message : "Error");
    } finally { setLoading(false); }
  };

  const toggle = (o: string) => setNeeds((n) => (n.includes(o) ? n.filter((x) => x !== o) : [...n, o]));
  const num = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: Math.max(0, parseInt(e.target.value) || 0) });
  const wa = `https://wa.me/34641819577?text=${encodeURIComponent((lang === "es" ? "Hola, quiero presupuesto para este plan:\n\n" : "Hi, I'd like a quote for this plan:\n\n") + plan.slice(0, 1200))}`;

  return (
    <section id="plan-alquiler" className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <Sparkles className="mx-auto h-8 w-8 text-primary mb-2" />
          <h2 className="text-3xl font-bold font-serif text-foreground">{t.title}</h2>
          <p className="text-muted-foreground mt-2">{t.sub}</p>
        </div>
        <form onSubmit={submit} className="bg-card rounded-xl border p-6 shadow-sm space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="text-sm font-medium">{t.type}<Input required maxLength={100} placeholder={t.placeholderType} value={f.propertyType} onChange={(e) => setF({ ...f, propertyType: e.target.value })} /></label>
            <label className="text-sm font-medium">{t.loc}<Input required maxLength={100} placeholder={t.placeholderLoc} value={f.location} onChange={(e) => setF({ ...f, location: e.target.value })} /></label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <label className="text-sm font-medium">{t.beds}<Input type="number" min={0} max={50} value={f.bedrooms} onChange={num("bedrooms")} /></label>
            <label className="text-sm font-medium">{t.baths}<Input type="number" min={0} max={50} value={f.bathrooms} onChange={num("bathrooms")} /></label>
            <label className="text-sm font-medium">{t.guests}<Input type="number" min={1} max={100} value={f.guests} onChange={num("guests")} /></label>
            <label className="text-sm font-medium">{t.turn}<Input type="number" min={0} max={62} value={f.turnoversPerMonth} onChange={num("turnoversPerMonth")} /></label>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">{t.needs}</p>
            <div className="flex flex-wrap gap-2">
              {t.opts.map((o) => (
                <Button key={o} type="button" size="sm" variant={needs.includes(o) ? "default" : "outline"} onClick={() => toggle(o)}>{o}</Button>
              ))}
            </div>
          </div>
          <label className="text-sm font-medium block">{t.notes}<Textarea maxLength={1500} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} /></label>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />{t.loading}</> : t.go}
          </Button>
        </form>
        <div aria-live="polite" className={plan || error ? "mt-6 bg-card rounded-xl border p-6" : "hidden"}>
          {error && <p className="text-destructive">{error}</p>}
          <div className="whitespace-pre-wrap text-sm text-foreground leading-relaxed">{plan.replace(/\*\*/g, "")}</div>
          {plan && !loading && (
            <Button asChild className="mt-4"><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4 mr-2" />{t.wa}</a></Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RentalServicePlanner;
