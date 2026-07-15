import { motion } from "framer-motion";
import { Search, Sparkles, Cpu } from "lucide-react";
import { useTranslation } from "react-i18next";

const HybridLaundry = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Search, key: "inspect" },
    { icon: Sparkles, key: "spot" },
    { icon: Cpu, key: "wash" },
  ];

  return (
    <section id="hybrid" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("hybrid.badge", "Servicio Puerta a Puerta")}
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t("hybrid.title", "Cuidado Artesanal,")}{" "}
            <span className="text-primary">{t("hybrid.titleHighlight", "Potencia Industrial")}</span>
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg">
            {t(
              "hybrid.subtitle",
              "No procesamos tu ropa en masa de forma automática. Nuestro 'Servicio Puerta a Puerta' analiza cada prenda individualmente: aplicamos desmanchado artesanal a mano para protectores, sábanas y toallas antes de su lavado industrial con oxígeno activo.",
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-4 left-8 w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-soft">
                  {idx + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {t(`hybrid.steps.${step.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`hybrid.steps.${step.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HybridLaundry;
