import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { WashingMachine, Wifi, Coffee, Sparkles, Shield, Factory } from "lucide-react";

interface AutoservicioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AutoservicioModal = ({ open, onOpenChange }: AutoservicioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-gradient-openblue">
            Lavandería Autoservicio en Fuengirola
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Una experiencia completa pensada para tu comodidad
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Intro Section */}
          <p className="text-foreground leading-relaxed">
            En nuestra lavandería autoservicio no solo te ayudamos a tener la ropa impecable, 
            también te ofrecemos un espacio cómodo para que aproveches tu tiempo al máximo.
          </p>

          {/* Amenities */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <Coffee className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Zona de Descanso</h4>
              <p className="text-sm text-muted-foreground">Café, refrescos y snacks</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <Wifi className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">WiFi Gratis</h4>
              <p className="text-sm text-muted-foreground">Navega o trabaja mientras esperas</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground">Espacio Moderno</h4>
              <p className="text-sm text-muted-foreground">Limpio y de fácil acceso</p>
            </div>
          </div>

          {/* Machines Section */}
          <div className="bg-gradient-openblue rounded-2xl p-6 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-8 h-8" />
              <h3 className="font-display text-xl font-bold">
                Maquinaria de Primera Línea Mundial
              </h3>
            </div>
            <p className="mb-4 opacity-90">
              Contamos con lavadoras y secadoras industriales <strong>fabricadas en España</strong>, 
              reconocidas internacionalmente por su eficiencia, durabilidad y resultados excepcionales.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                <WashingMachine className="w-6 h-6 mb-2" />
                <h4 className="font-bold">Lavadoras Industriales</h4>
                <ul className="text-sm opacity-90 mt-2 space-y-1">
                  <li>• <strong>19 kg de capacidad</strong> → 8€</li>
                  <li>• <strong>15 kg de capacidad</strong> → 6€</li>
                  <li>• Ideales para mantas, edredones y grandes volúmenes</li>
                </ul>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                <Shield className="w-6 h-6 mb-2" />
                <h4 className="font-bold">Secadoras de Alta Capacidad</h4>
                <ul className="text-sm opacity-90 mt-2 space-y-1">
                  <li>• <strong>19 kg de capacidad</strong> → 3€/20min</li>
                  <li>• +5 minutos adicionales por solo 0,50€</li>
                  <li>• Ampliable las veces que necesites</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Oxygen Technology */}
          <div className="border border-primary/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Tecnología de Oxígeno Activo
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos <strong className="text-foreground">oxígeno activo</strong> en cada lavado, 
                  un potente agente que elimina manchas difíciles, blanquea y desinfecta en profundidad 
                  sin dañar los tejidos. Perfecto para cuidar tu ropa y proteger la salud de tu familia.
                </p>
              </div>
            </div>
          </div>

          {/* Seasonal tip */}
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <p className="text-foreground">
              <strong className="text-gold">💡 Consejo:</strong> ¿Haces cambio de temporada? 
              Ven a conocernos. Guarda tu ropa limpia y desinfectada con nuestras lavadoras 
              de gran capacidad, ideales para mantas, edredones y toda la ropa de invierno.
            </p>
          </div>

          {/* CTA */}
          <p className="text-center text-muted-foreground">
            Te esperamos en un espacio limpio, moderno y de fácil acceso, con todos los servicios que necesitas.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutoservicioModal;
