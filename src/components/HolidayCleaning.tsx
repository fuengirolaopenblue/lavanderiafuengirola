import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HolidayCleaning = () => {
  const { t } = useTranslation();

  return (
    <section id="limpieza" className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-card rounded-2xl border border-border/50 shadow-card p-8 md:p-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            {t("cleaning.badge", "Limpieza + Lavandería")}
          </span>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
            {t("cleaning.title")}
          </h2>
          <p className="text-muted-foreground mt-5 text-base md:text-lg">
            {t("cleaning.subtitle")}
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to={t("cleaning.detailPath", "/limpieza-viviendas-vacacionales")}>
                {t("cleaning.detailCta", "Ver todos los detalles")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HolidayCleaning;
