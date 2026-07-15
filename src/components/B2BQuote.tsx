import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Building2, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const FORMSPREE_URL = "https://formspree.io/f/xnjbndyz";
const CALLMEBOT_PHONE = "34641819577";
const CALLMEBOT_APIKEY = "5478565";

const ZONE_KEYS = [
  "benalmadena",
  "fuengirola",
  "boliches",
  "mijas",
  "calahonda",
  "elviria",
  "marbella",
] as const;

const TURNOVER_OPTIONS = ["1-5", "5-15", "15+"] as const;
const SERVICE_KEYS = ["laundry", "cleaning", "full"] as const;

const B2BQuote = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const data = {
      tipo: "B2B Quote Request",
      nombre: fd.get("name"),
      empresa: fd.get("company"),
      email: fd.get("email"),
      telefono: fd.get("phone"),
      servicio: fd.get("service"),
      zona: fd.get("zone"),
      turnovers: fd.get("turnovers"),
    };

    try {
      const formspreePromise = fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      const waMessage = `🏢 *NUEVO PRESUPUESTO B2B*
━━━━━━━━━━━━━━━━━━
👤 ${data.nombre}
🏛️ ${data.empresa}
📧 ${data.email}
📱 ${data.telefono}
🧺 Servicio: ${data.servicio}
📍 Zona: ${data.zona}
🔁 Rotaciones/semana: ${data.turnovers}
━━━━━━━━━━━━━━━━━━
✅ _lavanderiafuengirola.com_`;

      try {
        const url = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encodeURIComponent(waMessage)}&apikey=${CALLMEBOT_APIKEY}`;
        const img = new Image();
        img.src = url;
      } catch {
        // non-blocking
      }

      const res = await formspreePromise;
      if (!res.ok) throw new Error("Formspree failed");

      try { form.reset(); } catch { /* ignore */ }
      setIsSubmitted(true);
      toast.success(t("b2b.successToast", "¡Solicitud enviada! Te contactaremos muy pronto."));
    } catch (err) {
      console.error(err);
      toast.error(t("b2b.errorToast", "No se pudo enviar. Inténtalo de nuevo."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="b2b" className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            {t("b2b.sectionLabel", "B2B · Property Managers")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("b2b.title", "Solicita tu presupuesto")}{" "}
            <span className="text-primary">
              {t("b2b.titleHighlight", "personalizado")}
            </span>
          </h2>
          <p className="text-muted-foreground mt-4">
            {t(
              "b2b.subtitle",
              "Diseñamos un plan a medida según tu volumen semanal y zona. Respuesta en menos de 24h.",
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-6 md:p-10 shadow-elevated border border-border/50"
        >
          {isSubmitted && (
            <div className="rounded-xl border border-border/50 bg-secondary/40 p-5 mb-6 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">
                  {t("b2b.thankYouTitle", "¡Solicitud recibida!")}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {t("b2b.thankYouMessage", "Nuestro equipo B2B te contactará en menos de 24h con una propuesta personalizada.")}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  {t("b2b.sendAnother", "Enviar otra solicitud")}
                </Button>
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className={`space-y-5 ${isSubmitted ? "pointer-events-none opacity-60" : ""}`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.name", "Nombre")} *
                </label>
                <Input name="name" required maxLength={100} placeholder={t("b2b.namePlaceholder", "Tu nombre")} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.company", "Empresa")} *
                </label>
                <Input name="company" required maxLength={100} placeholder={t("b2b.companyPlaceholder", "Nombre de tu empresa")} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.email", "Email")} *
                </label>
                <Input name="email" type="email" required maxLength={255} placeholder="tu@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.phone", "Teléfono")} *
                </label>
                <Input name="phone" type="tel" required maxLength={20} placeholder="+34 ..." />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.zone", "Zona de cobertura")} *
                </label>
                <select
                  name="zone"
                  required
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>
                    {t("b2b.zonePlaceholder", "Selecciona zona")}
                  </option>
                  {ZONE_KEYS.map((k) => (
                    <option key={k} value={t(`coverage.areas.${k}.name`)}>
                      {t(`coverage.areas.${k}.name`)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("b2b.turnovers", "Rotaciones semanales estimadas")} *
                </label>
                <select
                  name="turnovers"
                  required
                  defaultValue=""
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="" disabled>
                    {t("b2b.turnoversPlaceholder", "Selecciona rango")}
                  </option>
                  {TURNOVER_OPTIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full group" disabled={isSubmitting || isSubmitted}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("b2b.sending", "Enviando...")}
                </>
              ) : (
                <>
                  {t("b2b.submit", "Solicitar Presupuesto B2B")}
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default B2BQuote;
