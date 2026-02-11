import { useState } from "react";
import { motion } from "framer-motion";
import { WashingMachine, Home, ArrowRight, Shirt, Truck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AutoservicioModal from "./AutoservicioModal";
import PisosVacacionalModal from "./PisosVacacionalModal";

const services = [
  {
    icon: WashingMachine,
    title: "Lavandería Autoservicio",
    description:
      "Máquinas de última generación disponibles las 24 horas. Paga cómodamente con monedas, billetes o tarjetas de débito/crédito.",
    features: [
      "Lavadora 19kg → 8€ | 15kg → 6€",
      "Secadora 19kg → 3€/20min",
      "+5 min por 0,50€ (ampliable)",
      "Productos incluidos",
      "Abierto 24h / 365 días",
    ],
  },
  {
    icon: Home,
    title: "Lavandería para Pisos Vacacionales",
    description:
      "Servicio especializado para propietarios y gestores de alojamientos turísticos. Ropa de cama, toallas y textiles siempre impecables.",
    features: ["Recogida y entrega", "Tratamiento profesional", "Desinfección completa", "Tarifas para empresas"],
  },
];

const Services = () => {
  const [autoservicioModalOpen, setAutoservicioModalOpen] = useState(false);
  const [pisosModalOpen, setPisosModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Soluciones completas para tu{" "}
            <span className="text-gradient-openblue">comodidad</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde lavandería de autoservicio hasta la gestión integral de tu propiedad,
            ofrecemos servicios profesionales adaptados a tus necesidades.
          </p>
        </motion.div>

        {/* Services Grid - 3 main areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-openblue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full group/btn"
                onClick={openModals[index]}
              >
                Más información
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Particulares Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 relative overflow-hidden rounded-2xl bg-gradient-openblue p-8 md:p-10 shadow-elevated"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <Shirt className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <Truck className="w-7 h-7 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                Lavandería para Particulares
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                ¿No tienes tiempo para lavar? Nosotros lo hacemos por ti. Servicio de lavandería completo para particulares con <strong className="text-primary-foreground">recogida y entrega a domicilio</strong>. Cuéntanos qué necesitas y nos encargamos de todo.
              </p>
            </div>
            <Button
              variant="heroOutline"
              size="lg"
              className="flex-shrink-0 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20lavander%C3%ADa%20para%20particulares."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar
                <ArrowRight className="w-4 h-4" />
              </a>
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
                Gestión de Pisos Vacacionales
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Gestionamos tu propiedad de principio a fin. Check-in/out, limpieza, mantenimiento y atención al huésped para maximizar tu rentabilidad.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="flex-shrink-0"
              asChild
            >
              <Link to="/gestion-vacacional">
                Más información
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      <AutoservicioModal 
        open={autoservicioModalOpen} 
        onOpenChange={setAutoservicioModalOpen} 
      />
      <PisosVacacionalModal
        open={pisosModalOpen}
        onOpenChange={setPisosModalOpen}
      />
    </section>
  );
};

export default Services;
