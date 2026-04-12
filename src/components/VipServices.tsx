import { motion } from "framer-motion";
import { Truck, Warehouse, CalendarClock, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Truck, Warehouse, CalendarClock, ShieldCheck];
const keys = ["pickup", "storage", "delivery", "disinfection"];

const VipServices = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("vip.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {t("vip.title")}{" "}
            <span className="text-primary">{t("vip.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            {t("vip.subtitle")}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover:shadow-elevated transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {t(`vip.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(`vip.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VipServices;
