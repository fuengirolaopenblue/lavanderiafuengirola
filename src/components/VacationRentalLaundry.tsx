import { Sparkles, Calendar, Truck, Building, ShieldCheck, Star } from "lucide-react";

const VacationRentalLaundry = () => {
  return (
    <>
      {/* Especialistas en Apartamentos Turísticos */}
      <section id="viviendas-vacacionales" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Especialistas en Lavandería para Apartamentos Turísticos
            </h2>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto text-lg">
              Sabemos que el "turnover" (cambio de huéspedes) en Fuengirola exige velocidad y perfección. Nos
              encargamos de todo el textil de tus propiedades para que tus valoraciones en Booking y Airbnb sean
              siempre de 5 estrellas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Sincronización con tus Check-ins",
                description:
                  "Recogemos las sábanas y toallas sucias el día de la salida y te las entregamos perfectamente higienizadas, planchadas y empaquetadas antes de la entrada del siguiente huésped.",
              },
              {
                icon: ShieldCheck,
                title: "Control de Calidad y Stock",
                description:
                  "Revisamos cada prenda minuciosamente. Detectamos manchas difíciles, roturas o desgastes y te informamos en tiempo real para mantener el inventario de tu vivienda vacacional impecable.",
              },
              {
                icon: Building,
                title: "Facturación Unificada para Agencias",
                description:
                  "Si eres administrador de fincas o Property Manager con múltiples propiedades en Fuengirola, centralizamos tus consumos con tarifas corporativas y facturación mensual detallada por propiedad.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-elevated transition-all"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recogida a Domicilio + Testimonio */}
      <section className="bg-gradient-openblue text-primary-foreground py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="opacity-80 font-bold uppercase tracking-wider text-xs">Comodidad Absoluta</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              ¿No tienes tiempo? Nosotros vamos, lo lavamos y te lo llevamos
            </h2>
            <p className="opacity-90 mb-6 leading-relaxed">
              Nuestro servicio de lavandería a domicilio en Fuengirola cubre edredones, mantas, coladas diarias y
              ropa delicada. Ideal para particulares, residentes extranjeros y negocios locales que buscan un acabado
              profesional sin salir de casa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-background/15 p-2 rounded-lg">
                  <Truck className="w-5 h-5" />
                </div>
                <span>Recogida y entrega rápida en tu ubicación en Fuengirola.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-background/15 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span>Maquinaria industrial con desinfección avanzada.</span>
              </div>
            </div>
          </div>

          <div className="bg-background/10 p-8 rounded-3xl border border-background/20 backdrop-blur-sm text-center">
            <Star className="w-12 h-12 text-yellow-300 mx-auto mb-4 fill-yellow-300" />
            <p className="text-xl italic opacity-95">
              "El mejor aliado para nuestra agencia de alquiler vacacional en Los Boliches. Puntuales, profesionales
              y la ropa huele increíble."
            </p>
            <span className="block mt-4 font-bold">— Clean & Stay Fuengirola Property Management</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default VacationRentalLaundry;
