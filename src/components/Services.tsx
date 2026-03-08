import { useState } from "react";
import { motion } from "framer-motion";
import { WashingMachine, Home, ArrowRight, Shirt, Truck, Building2, PackageCheck } from "lucide-react";
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

  const services = [
    {
      icon: WashingMachine,
      title: t("services.selfService.title"),
      description: t("services.selfService.description"),
      features: t("services.selfService.features", { returnObjects: true }) as string[],
    },
    {
      icon: Home,
      title: t("services.vacation.title"),
      description: t("services.vacation.description"),
      features: t("services.vacation.features", { returnObjects: true }) as string[],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const openModals = [
    () => setAutoservicioModalOpen(true),
    () => setPisosModalOpen(true),
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

        {/* Autoservicio Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-primary p-8 md:p-10 shadow-elevated"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
              <WashingMachine className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                {t("services.selfService.title")}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("services.selfService.description")}
              </p>
            </div>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex-shrink-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => setAutoservicioModalOpen(true)}
            >
              {t("services.moreInfo")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Pisos Vacacionales Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-openblue p-8 md:p-10 shadow-elevated"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center flex-shrink-0">
              <Home className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                {t("services.vacation.title")}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("services.vacation.description")}
              </p>
            </div>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex-shrink-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => setPisosModalOpen(true)}
            >
              {t("services.moreInfo")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Delivery / Puerta a Puerta Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent to-primary p-8 md:p-10 shadow-elevated"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <PackageCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                {t("services.delivery.title")}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("services.delivery.description")} <strong className="text-primary-foreground">{t("services.delivery.descriptionBold")}</strong>{t("services.delivery.descriptionEnd")}
              </p>
            </div>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex-shrink-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => setDeliveryModalOpen(true)}
            >
              {t("services.moreInfo")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Particulares Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-openblue p-8 md:p-10 shadow-elevated"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <Shirt className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                {t("services.individuals.title")}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {t("services.individuals.description")} <strong className="text-primary-foreground">{t("services.individuals.descriptionBold")}</strong>{t("services.individuals.descriptionEnd")}
              </p>
            </div>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex-shrink-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => setParticularesModalOpen(true)}
            >
              {t("services.moreInfo")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        {/* Gestión Vacacional Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 relative overflow-hidden rounded-2xl bg-card p-8 md:p-10 shadow-card border border-border/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="w-14 h-14 rounded-xl bg-gradient-openblue flex items-center justify-center flex-shrink-0">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                {t("services.management.title")}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("services.management.description")}
              </p>
            </div>
            <Button variant="outline" size="lg" className="flex-shrink-0" asChild>
              <Link to="/gestion-vacacional">
                {t("services.moreInfo")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <AutoservicioModal open={autoservicioModalOpen} onOpenChange={setAutoservicioModalOpen} />
      <PisosVacacionalModal open={pisosModalOpen} onOpenChange={setPisosModalOpen} />
      <DeliveryModal open={deliveryModalOpen} onOpenChange={setDeliveryModalOpen} />
      <ParticularesModal open={particularesModalOpen} onOpenChange={setParticularesModalOpen} />
    </section>
  );
};

export default Services;
