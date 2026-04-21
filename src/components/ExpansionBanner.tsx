import { motion } from "framer-motion";
import { Sparkles, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const zoneKeys = ["fuengirola", "mijas", "benalmadena"] as const;

const ExpansionBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-openblue p-8 md:p-12 shadow-elevated"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-primary-foreground/10 blur-3xl" />

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold text-openblue-dark text-xs font-bold mb-5 uppercase tracking-wide">
                <Sparkles className="w-4 h-4" />
                {t("expansion.badge")}
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                {t("expansion.title")}{" "}
                <span className="text-gold">{t("expansion.titleHighlight")}</span>
              </h2>
              <p className="text-primary-foreground/85 text-base md:text-lg max-w-md">
                {t("expansion.subtitle")}
              </p>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider mb-4">
                {t("expansion.zonesTitle")}
              </h3>
              <div className="grid gap-3">
                {zoneKeys.map((key, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-start gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/15"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/90 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-openblue-dark" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-primary-foreground">
                        {t(`expansion.zones.${key}.name`)}
                      </div>
                      <div className="text-sm text-primary-foreground/70">
                        {t(`expansion.zones.${key}.areas`)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpansionBanner;
