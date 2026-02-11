import { motion } from "framer-motion";
import { Globe, MessageSquare, KeyRound, SprayCan, WashingMachine, Wrench, BarChart3, ShieldCheck, Star, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const steps = [
  {
    icon: Globe,
    title: "Publicación y visibilidad",
    description:
      "Creamos y gestionamos anuncios profesionales en las principales plataformas de alquiler vacacional (Airbnb, Booking, Vrbo y más). Optimizamos descripciones, fotos y precios para atraer más reservas y aumentar tu ocupación.",
  },
  {
    icon: MessageSquare,
    title: "Atención a huéspedes",
    description:
      "Gestionamos todas las comunicaciones, consultas y reservas. Desde el primer contacto hasta la despedida, tus huéspedes reciben atención personalizada y profesional que se traduce en valoraciones excelentes.",
  },
  {
    icon: KeyRound,
    title: "Check-in y check-out",
    description:
      "Nos encargamos de la entrega y recogida de llaves en los horarios acordados, dando la bienvenida a tus huéspedes y asegurándonos de que todo esté perfecto a su llegada y salida.",
  },
  {
    icon: SprayCan,
    title: "Limpieza profesional",
    description:
      "Después de cada estancia, realizamos una limpieza profunda y exhaustiva. Tu propiedad siempre estará impecable, lista para recibir a los próximos huéspedes con los más altos estándares de higiene y presentación.",
  },
  {
    icon: WashingMachine,
    title: "Servicio de lavandería",
    description:
      "Recogemos, desmanchamos, lavamos, secamos y embolsamos toda la ropa de cama y toallas. Las devolvemos listas para usar, con productos de primera línea y respetuosos con el medio ambiente.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y supervisión",
    description:
      "Realizamos inspecciones periódicas y coordinamos cualquier reparación o mantenimiento necesario. Detectamos problemas antes de que se conviertan en inconvenientes mayores, protegiendo tu inversión.",
  },
  {
    icon: BarChart3,
    title: "Gestión económica transparente",
    description:
      "Recibirás informes detallados de ingresos, gastos y ocupación. Total transparencia para que siempre sepas cómo está funcionando tu propiedad.",
  },
];

const GestionVacacional = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-openblue">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Gestión Integral de tu Piso Vacacional
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
                Despreocúpate por completo. Nosotros nos encargamos de todo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed text-center"
            >
              En OpenBlue Fuengirola convertimos tu propiedad en una fuente de ingresos constante, sin que tengas que ocuparte de nada. Ofrecemos un servicio de gestión 360° diseñado para propietarios que buscan maximizar su rentabilidad sin complicaciones, estrés ni pérdidas de tiempo.
            </motion.p>
          </div>
        </section>

        {/* Steps */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
            >
              ¿Qué incluye nuestra gestión integral?
            </motion.h2>
            <div className="space-y-5">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-lg">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust + Experience */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Tu propiedad en las mejores manos
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Sabemos que tu piso vacacional es una inversión importante. Por eso trabajamos cada día para que genere los máximos ingresos posibles, manteniendo su valor y garantizando experiencias excepcionales a tus huéspedes. Tú solo tienes que disfrutar de los beneficios.
              </p>
            </div>

            <div className="flex items-start gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-card">
              <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">
                Con <strong className="text-foreground">OpenBlue Fuengirola</strong>, alquilar tu propiedad es realmente rentable y sin complicaciones. Más de 4 años de experiencia gestionando propiedades vacacionales en Fuengirola nos avalan.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-4">
            <p className="text-muted-foreground font-medium text-lg">
              ¿Quieres saber cuánto puedes ganar con tu propiedad? Contáctanos para un estudio personalizado y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a
                  href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20gesti%C3%B3n%20integral%20de%20pisos%20vacacionales."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Volver al inicio
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
