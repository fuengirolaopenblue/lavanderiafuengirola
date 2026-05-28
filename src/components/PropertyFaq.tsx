import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Cómo coordináis la recogida con el check-out de los huéspedes?",
    answer:
      "Nos adaptamos a tu calendario de reservas. Indícanos la hora de salida del huésped y pasamos a recoger la ropa de cama y baño ese mismo día, sin que tú tengas que estar presente. Coordinamos con tu equipo de limpieza para que todo fluya sin interrupciones.",
  },
  {
    question: "¿Qué pasa si hay roturas o desgaste en las sábanas o toallas?",
    answer:
      "Revisamos cada pieza en recepción. Si detectamos roturas, manchas permanentes o desgaste excesivo, te lo notificamos inmediatamente con fotos para que puedas reponer stock a tiempo y mantener la calidad de tus valoraciones.",
  },
  {
    question: "¿Emitís factura para desgravar como gasto de la propiedad?",
    answer:
      "Sí, facturamos a nombre de tu empresa o como particular con todos los datos fiscales. Si gestionas varias viviendas, emitimos facturas desglosadas por propiedad para facilitar tu contabilidad y optimizar tu fiscalidad.",
  },
  {
    question: "¿Cuál es el plazo de entrega entre el check-out y el check-in?",
    answer:
      "Garantizamos entrega en menos de 24 horas para propiedades en Fuengirola. Para check-ins express el mismo día, disponemos de servicio prioritario: recogemos por la mañana y entregamos la ropa lista antes de la llegada del nuevo huésped.",
  },
  {
    question: "¿Podéis gestionar el stock de varias propiedades a la vez?",
    answer:
      "Absolutamente. Si eres Property Manager o agencia con múltiples apartamentos, te asignamos un código por propiedad, etiquetamos cada lote individualmente y te entregamos informes mensuales de consumo, rotación y reposición de stock por vivienda.",
  },
  {
    question: "¿Qué diferencia vuestra desinfección de una lavandería normal?",
    answer:
      "Usamos oxígeno activo a alta temperatura en ciclo industrial, eliminando bacterias, ácaros y olores que una lavadora doméstica no logra. Tus huéspedes notan la diferencia en las reseñas: menciones constantes a 'olor a limpio' y 'camas impecables'.",
  },
];

const PropertyFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq-viviendas" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Resolvemos tus dudas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Preguntas Frecuentes sobre Gestión de Viviendas Vacacionales
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Todo lo que necesitas saber sobre check-ins, stock, facturación y plazos. ¿No encuentras tu respuesta? Escríbenos directamente.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-card rounded-2xl border border-border shadow-soft transition-all duration-300 ${
                  isOpen ? "shadow-elevated ring-1 ring-primary/10" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="font-semibold text-foreground text-base md:text-lg leading-snug">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA final orientado a conversión */}
        <div className="mt-12 text-center bg-gradient-openblue rounded-3xl p-8 md:p-10 text-primary-foreground">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            ¿Tienes una propiedad en Fuengirola y aún no trabajas con nosotros?
          </h3>
          <p className="opacity-90 max-w-xl mx-auto mb-6">
            Cada día que tu ropa de cama no esté en manos de profesionales es una reseña que se escapa. Solicita tu presupuesto corporativo sin compromiso y empieza a notar la diferencia desde el primer cambio de huésped.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-openblue-dark font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Solicitar Presupuesto Corporativo
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyFaq;
