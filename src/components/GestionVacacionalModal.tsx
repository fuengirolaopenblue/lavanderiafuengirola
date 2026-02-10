import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Globe, MessageSquare, KeyRound, SprayCan, WashingMachine, Wrench, BarChart3, ShieldCheck, Star } from "lucide-react";

interface GestionVacacionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

const GestionVacacionalModal = ({ open, onOpenChange }: GestionVacacionalModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
            Gestión Integral de tu{" "}
            <span className="text-gradient-openblue">Piso Vacacional</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Intro */}
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">
              Despreocúpate por completo. Nosotros nos encargamos de todo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En OpenBlue Fuengirola convertimos tu propiedad en una fuente de ingresos constante, sin que tengas que ocuparte de nada. Ofrecemos un servicio de gestión 360° diseñado para propietarios que buscan maximizar su rentabilidad sin complicaciones, estrés ni pérdidas de tiempo.
            </p>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              ¿Qué incluye nuestra gestión integral?
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust section */}
          <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">
                Tu propiedad en las mejores manos
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sabemos que tu piso vacacional es una inversión importante. Por eso trabajamos cada día para que genere los máximos ingresos posibles, manteniendo su valor y garantizando experiencias excepcionales a tus huéspedes. Tú solo tienes que disfrutar de los beneficios.
            </p>
          </div>

          {/* Experience badge */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
            <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Con <strong className="text-foreground">OpenBlue Fuengirola</strong>, alquilar tu propiedad es realmente rentable y sin complicaciones. Más de 4 años de experiencia gestionando propiedades vacacionales en Fuengirola nos avalan.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-muted-foreground font-medium">
              ¿Quieres saber cuánto puedes ganar con tu propiedad? Contáctanos para un estudio personalizado y sin compromiso.
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20gesti%C3%B3n%20integral%20de%20pisos%20vacacionales."
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GestionVacacionalModal;
