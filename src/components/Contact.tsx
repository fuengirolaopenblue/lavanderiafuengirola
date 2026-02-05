import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Fuengirola, Costa del Sol",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+34 600 123 456",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@openblue.es",
  },
  {
    icon: Clock,
    title: "Horario Lavandería",
    content: "24 horas / 365 días",
  },
];

const Contact = () => {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
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
            Contacto
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            ¿Tienes alguna{" "}
            <span className="text-gradient-openblue">pregunta</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Servicio de interés
                </label>
                <Input placeholder="Ej: Lavandería para pisos vacacionales" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensaje
                </label>
                <Textarea
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={5}
                />
              </div>
              <Button variant="hero" size="lg" className="w-full group">
                Enviar Mensaje
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Información de contacto
              </h3>
              <p className="text-muted-foreground">
                Visítanos en nuestras instalaciones o ponte en contacto a través 
                de cualquiera de los siguientes medios.
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.title}</div>
                  <div className="font-medium text-foreground">{info.content}</div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-gradient-openblue/10 border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <span className="text-muted-foreground text-sm">
                  Fuengirola, Costa del Sol
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
