import { motion } from "framer-motion";
import { Truck, ClipboardCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HolidayCleaning = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Truck,
      key: "logistics",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: ClipboardCheck,
      key: "checklist",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    },
    {
      icon: Clock,
      key: "time",
      img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section id="limpieza" className="py-20 md:py-28 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("cleaning.badge", "360° · Cleaning + Laundry")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t("cleaning.title")}
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg">
            {t("cleaning.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={f.img}
                    alt={t(`cleaning.features.${f.key}.title`)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-soft">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {t(`cleaning.features.${f.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`cleaning.features.${f.key}.desc`)}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <a href="#b2b">{t("cleaning.cta", "Solicitar Pack Limpieza + Lavandería")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HolidayCleaning;
