import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import lavanderiaFachada from "@/assets/lavanderia-fachada.jpg";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={lavanderiaFachada}
          alt="OpenBlue Lavandería"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-openblue-dark/90 via-openblue-dark/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 mb-8"
          >
            <Clock className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            OPEN<span className="text-gold">BLUE</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-normal">
              {t("hero.subtitle")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10"
          >
            {t("hero.description")}
          </motion.p>

          {/* Prices */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold">6,00€</div>
              <div className="text-sm text-primary-foreground/70">{t("hero.washFrom")}</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold">3,00€</div>
              <div className="text-sm text-primary-foreground/70">{t("hero.dryFrom")}</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-gold">50'</div>
              <div className="text-sm text-primary-foreground/70">{t("hero.washAndDry")}</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.viewServices")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-openblue-dark"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("hero.contactNow")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
