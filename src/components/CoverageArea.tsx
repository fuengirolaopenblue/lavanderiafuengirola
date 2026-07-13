import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const areaKeys = ["centro", "boliches", "torreblanca", "mijas"] as const;

const CoverageArea = () => {
  const { t } = useTranslation();

  return (
    <section id="cobertura" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("coverage.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("coverage.title")}{" "}
            <span className="text-primary">{t("coverage.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground mt-4">{t("coverage.intro")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areaKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {t(`coverage.areas.${key}.name`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`coverage.areas.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
