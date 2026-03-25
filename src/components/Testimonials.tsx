import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Array<{
    name: string;
    role: string;
    text: string;
  }>;

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("testimonials.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4">
            {t("testimonials.title")}{" "}
            <span className="text-gradient-openblue">{t("testimonials.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border/50 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
