import { Key, Sparkles, Calendar, TrendingUp, Headphones, Wrench, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: Key,
    title: "Check-in y Check-out",
    description: "Entrega y recogida de llaves, recepción de huéspedes y revisión completa de la propiedad.",
  },
  {
    icon: Sparkles,
    title: "Limpieza y Lavandería Integral",
    description: "Limpieza profunda tras cada estancia y textil siempre impecable con nuestro servicio propio de lavandería.",
  },
  {
    icon: Calendar,
    title: "Gestión de Reservas",
    description: "Publicación y optimización en Airbnb, Booking y Vrbo. Calendarios sincronizados y precios dinámicos.",
  },
  {
    icon: Headphones,
    title: "Atención al Huésped 24/7",
    description: "Comunicación profesional antes, durante y después de la estancia para conseguir reseñas de 5 estrellas.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Supervisión",
    description: "Inspecciones periódicas y coordinación de reparaciones para proteger el valor de tu inversión.",
  },
  {
    icon: TrendingUp,
    title: "Informes y Rentabilidad",
    description: "Reportes mensuales transparentes de ingresos, ocupación y gastos. Tú solo cobras.",
  },
];

const benefits = [
  "Sin preocupaciones: nos encargamos del 100% de la operativa",
  "Maximizamos tu ocupación y precio por noche",
  "Más de 4 años gestionando propiedades en Fuengirola",
  "Equipo local con respuesta inmediata",
];

const PropertyManagement = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Administración de Propiedades Vacacionales
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mt-2 max-w-3xl mx-auto">
            Gestionamos tu Airbnb en Fuengirola de principio a fin
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Convertimos tu propiedad en una fuente constante de ingresos sin que tengas que preocuparte por nada.
            Un único partner local para huéspedes, limpieza, lavandería y mantenimiento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/40 hover:shadow-elevated transition-all duration-300"
            >
              <div className="bg-primary/10 p-3 rounded-xl w-12 h-12 flex items-center justify-center text-primary mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-openblue text-primary-foreground rounded-3xl p-8 md:p-12 shadow-elevated grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Tu propiedad rentable, tú con cero preocupaciones
            </h3>
            <p className="opacity-90 mb-6">
              Un servicio 360° pensado para propietarios que quieren maximizar su rentabilidad sin complicaciones,
              estrés ni pérdida de tiempo.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 rounded-full font-bold"
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20administraci%C3%B3n%20de%20mi%20propiedad%20vacacional%20en%20Fuengirola"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar estudio personalizado
              </a>
            </Button>
          </div>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
