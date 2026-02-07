import { useState } from "react";
import { motion } from "framer-motion";
import { WashingMachine, Home, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutoservicioModal from "./AutoservicioModal";
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
    features: ["Recogida y entrega", "Planchado profesional", "Desinfección completa", "Tarifas para empresas"],
  },
  {
    icon: Building2,
    title: "Gestión de Pisos Vacacionales",
    description:
      "Gestionamos tu propiedad de principio a fin. Check-in/out, limpieza, mantenimiento y atención al huésped para maximizar tu rentabilidad.",
    features: ["Check-in/out 24h", "Limpieza profesional", "Gestión de reservas", "Mantenimiento preventivo"],
  },
];

const Services = () => {
  const [autoservicioModalOpen, setAutoservicioModalOpen] = useState(false);

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

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
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
                onClick={() => {
                  if (index === 0) {
                    setAutoservicioModalOpen(true);
                  }
                }}
              >
                Más información
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Autoservicio */}
      <AutoservicioModal 
        open={autoservicioModalOpen} 
        onOpenChange={setAutoservicioModalOpen} 
      />
    </section>
  );
};

export default Services;
