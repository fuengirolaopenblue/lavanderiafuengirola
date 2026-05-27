import { Shield, Sparkles, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Sparkles,
    title: "Lavado Profesional de Ropa de Cama y Toallas",
    description:
      "Limpieza profunda e higienización de sábanas, fundas, edredones y toallas para garantizar que tus huéspedes disfruten de una estancia de 5 estrellas en Fuengirola.",
  },
  {
    icon: Clock,
    title: "Recogida y Entrega en Menos de 24 Horas",
    description:
      'Sabemos que el "turnover" (cambio de huéspedes) es rápido. Recogemos los textiles sucios en la propiedad y los devolvemos listos, doblados y empaquetados para el siguiente check-in.',
  },
  {
    icon: Shield,
    title: "Control de Stock y Custodia de Textiles",
    description:
      "Ayudamos a los administradores a llevar un conteo estricto de las piezas. Avisamos en caso de manchas imposibles o desgastes para evitar que afecte a las valoraciones en Airbnb.",
  },
  {
    icon: FileText,
    title: "Planes Mensuales y Facturación Unificada",
    description:
      "Facilitamos la contabilidad de tu agencia de administración de propiedades con facturación mensual simplificada por volumen de lavado o por propiedad gestionada.",
  },
];

const PropertyServices = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Soluciones Profesionales en Fuengirola y Costa del Sol
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2">
            Servicio de Lavandería para Administradores de Propiedades y Airbnb
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Optimizamos la gestión de textil para Property Managers, villas de lujo y apartamentos turísticos.
            Garantizamos un servicio rápido, impecable y con la máxima comodidad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-2xl border border-border hover:shadow-elevated transition-all duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-openblue text-primary-foreground p-8 rounded-3xl text-center shadow-elevated">
          <h3 className="text-2xl font-bold mb-2">¿Gestionas propiedades en la Costa del Sol?</h3>
          <p className="opacity-90 max-w-xl mx-auto mb-6">
            Olvídate del estrés de la lavandería en los días de cambio de inquilinos. Déjalo en manos de profesionales locales.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-background text-primary hover:bg-background/90 rounded-full font-bold"
          >
            <a
              href="https://wa.me/34641819577?text=Hola%2C%20gestiono%20propiedades%20y%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto%20corporativo%20de%20lavander%C3%ADa%20en%20Fuengirola"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Presupuesto Corporativo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyServices;
