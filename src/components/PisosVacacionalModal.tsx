import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Truck, Sparkles, Wind, Clock, ShieldCheck, Star } from "lucide-react";

interface PisosVacacionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const steps = [
  {
    icon: Truck,
    title: "Recogida a domicilio",
    description:
      "Pasamos por tu propiedad y retiramos toda la ropa de cama y baño tras cada check-out. Tú no mueves un dedo.",
  },
  {
    icon: Sparkles,
    title: "Tratamiento profesional",
    description:
      "Aplicamos tratamientos específicos de desmanchado cuando es necesario, asegurando que cada pieza recupere su blancura y frescura original. Lavamos con productos de primera línea que cuidan el medio ambiente, protegen las fibras y alargan la vida útil de tus textiles.",
  },
  {
    icon: Wind,
    title: "Secado y preparación",
    description:
      "Secamos y embolsamos cada juego de forma individual, listo para usar en el próximo check-in. Todo perfectamente ordenado y protegido.",
  },
  {
    icon: Clock,
    title: "Entrega puntual",
    description:
      "Devolvemos la ropa limpia y lista en los plazos acordados, para que tu propiedad esté siempre preparada para recibir a los siguientes huéspedes sin demoras.",
  },
];

const PisosVacacionalModal = ({ open, onOpenChange }: PisosVacacionalModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
            Servicio de Lavandería Profesional para tu{" "}
            <span className="text-gradient-openblue">Alquiler Vacacional</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Intro */}
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">
              Olvídate de las preocupaciones. Nosotros cuidamos cada detalle de tu ropa blanca.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              En OpenBlue Fuengirola entendemos que la ropa de cama y las toallas son el corazón de la experiencia de tus huéspedes. Por eso hemos diseñado un servicio de lavandería integral que te libera completamente de esta tarea, garantizando siempre la máxima calidad y presentación impecable.
            </p>
          </div>

          {/* Steps */}
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              ¿Cómo funciona nuestro servicio?
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
                Tu tranquilidad, nuestra prioridad
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sabemos que la gestión de un alquiler vacacional implica estar atento a mil detalles. Con nuestro servicio de lavandería, eliminas una de las tareas más repetitivas y críticas. Tus huéspedes disfrutarán siempre de ropa impecable, fresca y acogedora, y tú ganarás tiempo para enfocarte en lo que realmente importa: maximizar tu rentabilidad y ofrecer experiencias memorables.
            </p>
          </div>

          {/* Experience badge */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
            <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Confía en <strong className="text-foreground">OpenBlue Fuengirola</strong>. Más de 4 años de experiencia nos avalan como el aliado perfecto para propietarios que buscan profesionalidad, puntualidad y resultados impecables.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3 pt-2">
            <p className="text-muted-foreground font-medium">
              ¿Quieres saber más? Contáctanos y te preparamos un plan a medida para tu propiedad.
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20lavander%C3%ADa%20para%20pisos%20vacacionales."
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

export default PisosVacacionalModal;
