import { useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, MessageSquare, KeyRound, SprayCan, WashingMachine, Wrench, BarChart3, ShieldCheck, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const stepIcons = [Globe, MessageSquare, KeyRound, SprayCan, WashingMachine, Wrench, BarChart3];
const stepKeys = ["visibility", "guests", "checkin", "cleaning", "laundry", "maintenance", "financial"];

const GestionVacacional = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div id="inicio" className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        <section className="py-16 md:py-24 bg-gradient-openblue">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {t("gestion.heroTitle")}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
                {t("gestion.heroSubtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed text-center"
            >
              {t("gestion.intro")}
            </motion.p>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
              {t("gestion.whatIncluded")}
            </motion.h2>
            <div className="space-y-5">
              {stepKeys.map((key, index) => {
                const Icon = stepIcons[index];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-card"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-lg">{t(`gestion.steps.${key}.title`)}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t(`gestion.steps.${key}.description`)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">{t("gestion.trustTitle")}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t("gestion.trustDesc")}</p>
            </div>
            <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-card">
              <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t("gestion.experienceDesc") }} />
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <p className="text-muted-foreground font-medium text-lg">{t("gestion.ctaText")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20gesti%C3%B3n%20integral%20de%20pisos%20vacacionales."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("gestion.ctaWhatsApp")}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  {t("gestion.backHome")}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default GestionVacacional;
