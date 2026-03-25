import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const ComparisonTable = () => {
  const { t } = useTranslation();
  const homeItems = t("comparison.home.items", { returnObjects: true }) as string[];
  const openblueItems = t("comparison.openblue.items", { returnObjects: true }) as string[];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("comparison.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
            {t("comparison.title")}{" "}
            <span className="text-gradient-openblue">{t("comparison.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Home Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
          >
            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              {t("comparison.home.title")}
            </h3>
            <ul className="space-y-4">
              {homeItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* OpenBlue Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-8 shadow-card"
          >
            <h3 className="font-display text-xl font-bold text-primary mb-6 text-center">
              {t("comparison.openblue.title")}
            </h3>
            <ul className="space-y-4">
              {openblueItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
