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
              Pasión por el detalle, compromiso con tu{" "}
              <span className="text-gradient-openblue">tranquilidad</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                En OpenBlue Fuengirola comenzamos hace 4 años con una misión clara: ofrecer un servicio de lavandería profesional que marcara la diferencia. Nos especializamos en el cuidado de ropa blanca para pisos vacacionales y particulares, porque sabemos que la frescura y la presentación impecable son fundamentales.
              </p>
              <p>
                Nos mueve la pasión por el trabajo bien hecho, por esos pequeños detalles que transforman una simple ropa de cama en una experiencia acogedora para tus huéspedes. Cada prenda que tratamos, cada mancha que eliminamos y cada entrega puntual que cumplimos nos impulsa a ser mejores.
              </p>
              <p>
                Trabajamos con productos de primera línea y respetuosos con el medio ambiente, porque cuidar tu ropa y nuestro planeta van de la mano. Ya sea que gestiones varios pisos vacacionales o simplemente necesites un servicio de lavandería confiable para tu hogar, estamos aquí para facilitarte la vida.
              </p>
              <p>
                Estamos en constante crecimiento, ampliando nuestra capacidad y mejorando nuestros procesos porque creemos que siempre podemos ofrecerte más. Tu confianza es nuestro mayor impulso.
              </p>
              <p className="font-semibold text-foreground italic">
                Bienvenido a OpenBlue Fuengirola. Donde cada prenda recibe el cuidado que merece.
              </p>
            </div>
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
