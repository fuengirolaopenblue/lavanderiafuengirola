import { motion } from "framer-motion";
import { CheckCircle, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Utilizamos productos premium y técnicas profesionales para resultados impecables.",
  },
  {
    icon: Clock,
    title: "Abierto 24/7",
    description: "Nuestras instalaciones están disponibles todos los días del año, las 24 horas.",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description: "Personal cualificado y comprometido con la excelencia en cada detalle.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
              Tu lavandería de confianza en{" "}
              <span className="text-gradient-openblue">Fuengirola</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En OpenBlue nos dedicamos a ofrecer servicios de lavandería y gestión de propiedades 
              de alta calidad. Entendemos las exigencias del sector vacacional y nos adaptamos 
              a las necesidades de cada cliente, ya sea particular o profesional.
            </p>

            {/* Checklist */}
            <ul className="space-y-4">
              {[
                "Lavadoras y secadoras de última generación",
                "Productos ecológicos y de alta calidad",
                "Servicio integral para pisos turísticos",
                "Atención personalizada y profesional",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
