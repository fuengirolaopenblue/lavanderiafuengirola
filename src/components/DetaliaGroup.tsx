import { motion } from "framer-motion";
import { Building2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { DETALIA } from "@/lib/detalia";

const TEXT = {
  es: {
    badge: "Parte de Detalia",
    title: "¿Buscas quien gestione o limpie tu piso turístico?",
    sub: "Lavandería Fuengirola OpenBlue forma parte de Detalia, nuestra empresa familiar en Fuengirola. La gestión integral y la limpieza de viviendas las hacemos desde Detalia Homes, con la ropa de cama de esta lavandería.",
    mgmtTitle: "Gestión de viviendas vacacionales",
    mgmtText: "Anuncios en Airbnb y Booking, precios, check-in 24/7, atención al huésped, limpieza y lavandería. Comisión fija del 20 % sobre el ingreso neto.",
    mgmtCta: "Conoce Detalia Homes",
    cleanTitle: "Limpieza de pisos turísticos",
    cleanText: "Limpieza entre huéspedes con ropa de cama y toallas incluidas, desde 70 € + IVA. También limpieza a fondo, fin de obra y mudanza.",
    cleanCta: "Ver precios de limpieza",
  },
  en: {
    badge: "Part of Detalia",
    title: "Looking for someone to manage or clean your holiday home?",
    sub: "Lavandería Fuengirola OpenBlue is part of Detalia, our family company in Fuengirola. Full property management and cleaning are provided by Detalia Homes, with linen from this laundry.",
    mgmtTitle: "Holiday home management",
    mgmtText: "Airbnb and Booking listings, pricing, 24/7 check-in, guest care, cleaning and laundry. A fixed 20% of net income.",
    mgmtCta: "Discover Detalia Homes",
    cleanTitle: "Holiday rental cleaning",
    cleanText: "Turnover cleaning with bed linen and towels included, from €70 + VAT. Deep, after-works and moving cleans too.",
    cleanCta: "See cleaning prices",
  },
};

const DetaliaGroup = () => {
  const { i18n } = useTranslation();
  const t = i18n.language === "es" ? TEXT.es : TEXT.en;

  const cards = [
    { icon: Building2, title: t.mgmtTitle, text: t.mgmtText, cta: t.mgmtCta, href: DETALIA.home },
    { icon: Sparkles, title: t.cleanTitle, text: t.cleanText, cta: t.cleanCta, href: DETALIA.cleaning },
  ];

  return (
    <section id="detalia" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t.badge}
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">{t.title}</h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg">{t.sub}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-card rounded-2xl border border-border/50 shadow-card p-8 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{c.text}</p>
                <Button variant="hero" size="lg" asChild>
                  <a href={c.href}>
                    {c.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetaliaGroup;
