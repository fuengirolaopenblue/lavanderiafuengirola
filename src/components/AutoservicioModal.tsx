import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Wifi, Coffee, Sparkles, Factory } from "lucide-react";
import lavadora19kg from "@/assets/lavadora-19kg.jpg";
import lavadora15kg from "@/assets/lavadora-15kg.jpg";
import maquinasVending from "@/assets/maquinas-vending.jpg";

interface AutoservicioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AutoservicioModal = ({ open, onOpenChange }: AutoservicioModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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

          {/* Machines Section with Photos */}
          <div className="bg-gradient-openblue rounded-2xl p-6 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-8 h-8" />
              <h3 className="font-display text-xl font-bold">
                Maquinaria de Primera Línea Mundial
              </h3>
            </div>
            <p className="mb-6 opacity-90">
              Contamos con lavadoras y secadoras industriales <strong>GIRBAU, fabricadas en España</strong>, 
              reconocidas internacionalmente por su eficiencia, durabilidad y resultados excepcionales.
            </p>
            
            {/* Washing Machines Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* 19kg Washer */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <img 
                  src={lavadora19kg} 
                  alt="Lavadora industrial GIRBAU de 19kg" 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">Lavadora 19 kg</h4>
                  <p className="text-2xl font-bold mb-2">8€</p>
                  <p className="text-sm opacity-90">
                    Ideal para mantas, edredones y grandes volúmenes de ropa
                  </p>
                </div>
              </div>
              
              {/* 15kg Washer */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <img 
                  src={lavadora15kg} 
                  alt="Lavadora industrial GIRBAU de 15kg" 
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">Lavadora 15 kg</h4>
                  <p className="text-2xl font-bold mb-2">6€</p>
                  <p className="text-sm opacity-90">
                    Perfecta para coladas medianas y ropa del día a día
                  </p>
                </div>
              </div>
            </div>

            {/* Dryers Info */}
            <div className="mt-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-bold text-lg mb-2">Secadoras de Alta Capacidad</h4>
              <ul className="text-sm opacity-90 space-y-1">
                <li>• <strong>19 kg de capacidad</strong> → 3€/20min</li>
                <li>• +5 minutos adicionales por solo 0,50€</li>
                <li>• Ampliable las veces que necesites antes de finalizar</li>
              </ul>
            </div>
          </div>

          {/* Amenities Section with Vending Photo */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vending Machines */}
            <div className="rounded-2xl overflow-hidden border border-border">
              <img 
                src={maquinasVending} 
                alt="Máquinas de vending y café OpenBlue" 
                className="w-full h-56 object-cover object-center"
              />
              <div className="p-4 bg-secondary/50">
                <h4 className="font-semibold text-foreground text-lg mb-2">Zona de Vending 24h</h4>
                <p className="text-sm text-muted-foreground">
                  Máquina de café con amplia variedad de opciones calientes, 
                  refrescos, snacks y golosinas para hacer tu espera más agradable.
                </p>
              </div>
            </div>

            {/* Other Amenities */}
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-4">
                <Coffee className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Máquina de Café</h4>
                  <p className="text-sm text-muted-foreground">
                    Café con leche, cortado, cappuccino, chocolate caliente y muchas más opciones
                  </p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-4">
                <Wifi className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">WiFi Gratis</h4>
                  <p className="text-sm text-muted-foreground">
                    Navega, trabaja o entretenete mientras esperas tu colada
                  </p>
                </div>
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
