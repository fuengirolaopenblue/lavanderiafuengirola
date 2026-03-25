import { useState } from "react";
import { motion } from "framer-motion";
import { WashingMachine, Home, Truck, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AutoservicioModal from "./AutoservicioModal";
import PisosVacacionalModal from "./PisosVacacionalModal";
import DeliveryModal from "./DeliveryModal";
import ParticularesModal from "./ParticularesModal";

const Services = () => {
  const [autoservicioModalOpen, setAutoservicioModalOpen] = useState(false);
  const [pisosModalOpen, setPisosModalOpen] = useState(false);
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
  const [particularesModalOpen, setParticularesModalOpen] = useState(false);
  const { t } = useTranslation();

  const cards = [
    {
      icon: WashingMachine,
      title: t("services.selfService.title"),
      description: t("services.selfService.description"),
      onClick: () => setAutoservicioModalOpen(true),
      gradient: false,
    },
    {
      icon: Home,
      title: t("services.vacation.title"),
      description: t("services.vacation.description"),
      onClick: () => setPisosModalOpen(true),
      gradient: true,
    },
    {
      icon: Truck,
      title: t("services.individuals.title"),
      description: t("services.individuals.description"),
      onClick: () => setParticularesModalOpen(true),
      gradient: false,
    },
    {
      icon: Building2,
      title: t("services.management.title"),
      description: t("services.management.description"),
      isLink: true,
      gradient: true,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("services.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            {t("services.title")}{" "}
            <span className="text-gradient-openblue">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const inner = (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl p-8 border cursor-pointer transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${
                  card.gradient
                    ? "bg-gradient-openblue text-primary-foreground border-transparent"
                    : "bg-card text-foreground border-border/50 hover:border-primary/50"
                }`}
                onClick={card.isLink ? undefined : card.onClick}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  card.gradient ? "bg-primary-foreground/15" : "bg-primary/10"
                }`}>
                  <Icon className={`w-7 h-7 ${card.gradient ? "text-primary-foreground" : "text-primary"}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
                <p className={`leading-relaxed mb-6 ${card.gradient ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {card.description}
                </p>
                <div className={`inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all ${
                  card.gradient ? "text-primary-foreground" : "text-primary"
                }`}>
                  {t("services.moreInfo")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );

            if (card.isLink) {
              return (
                <Link to="/gestion-vacacional" key={i} className="block">
                  {inner}
                </Link>
              );
            }
            return inner;
          })}
        </div>
      </div>

      <AutoservicioModal open={autoservicioModalOpen} onOpenChange={setAutoservicioModalOpen} />
      <PisosVacacionalModal open={pisosModalOpen} onOpenChange={setPisosModalOpen} />
      <DeliveryModal open={deliveryModalOpen} onOpenChange={setDeliveryModalOpen} />
      <ParticularesModal open={particularesModalOpen} onOpenChange={setParticularesModalOpen} />
    </section>
  );
};

export default Services;
