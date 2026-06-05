import { useState } from "react";
import { ChevronDown, HelpCircle, WashingMachine, Home, Truck, Building2, MessageCircle } from "lucide-react";

type FaqItem = { question: string; answer: string };
type Category = {
  id: string;
  label: string;
  Icon: typeof WashingMachine;
  faqs: FaqItem[];
};

const categories: Category[] = [
  {
    id: "autoservicio",
    label: "Autoservicio",
    Icon: WashingMachine,
    faqs: [
      {
        question: "¿Cuánto cuesta usar una lavadora autoservicio?",
        answer:
          "Desde 6 € la lavadora de 8 kg y 4 € la secadora. Disponemos también de cargas grandes de 14 kg para edredones y mantas. Pago con tarjeta, efectivo o app.",
      },
      {
        question: "¿Necesito traer mi propio detergente?",
        answer:
          "No. Disponemos de dosificador automático de detergente y suavizante incluido en el precio, además de venta de monodosis si prefieres traerlo aparte.",
      },
      {
        question: "¿Cuál es el horario del autoservicio?",
        answer:
          "Abrimos 24/7, los 365 días del año. Puedes lavar de madrugada, en festivos o en plena temporada alta sin esperas.",
      },
      {
        question: "¿Cuánto tarda un ciclo completo?",
        answer:
          "Un lavado dura 30 minutos y el secado entre 20 y 40 minutos según el tejido. En menos de 1 hora tienes la ropa lista para llevar.",
      },
    ],
  },
  {
    id: "viviendas",
    label: "Viviendas Vacacionales",
    Icon: Home,
    faqs: [
      {
        question: "¿Cómo coordináis la recogida con el check-out de los huéspedes?",
        answer:
          "Nos adaptamos a tu calendario de reservas. Recogemos el mismo día del check-out sin necesidad de que tú estés presente y coordinamos con tu equipo de limpieza.",
      },
      {
        question: "¿Cuál es el plazo de entrega entre check-out y check-in?",
        answer:
          "Garantizamos entrega en menos de 24 horas en Fuengirola. Disponemos de servicio express prioritario para check-ins el mismo día.",
      },
      {
        question: "¿Podéis gestionar varias propiedades a la vez?",
        answer:
          "Sí. Asignamos un código por vivienda, etiquetamos lotes individualmente y emitimos informes mensuales de consumo y rotación por propiedad.",
      },
      {
        question: "¿Emitís factura para desgravar como gasto?",
        answer:
          "Por supuesto. Facturamos a empresa o autónomo con todos los datos fiscales y desglose por propiedad para tu contabilidad.",
      },
    ],
  },
  {
    id: "particulares",
    label: "Particulares",
    Icon: Truck,
    faqs: [
      {
        question: "¿Ofrecéis recogida y entrega a domicilio?",
        answer:
          "Sí, en Fuengirola y Los Boliches. Pasamos a recoger en la franja horaria que elijas y te devolvemos la ropa lavada, planchada y doblada en 24-48 horas.",
      },
      {
        question: "¿Qué tipo de prendas aceptáis?",
        answer:
          "Ropa de cama, toallas, ropa de uso diario, edredones, mantas, alfombras pequeñas y prendas delicadas. Para tintorería de trajes y vestidos consulta nuestro servicio especializado.",
      },
      {
        question: "¿Cómo se calcula el precio?",
        answer:
          "Por kilos o por carga completa, según te convenga. Tenemos tarifas reducidas para suscripciones mensuales y familias numerosas.",
      },
      {
        question: "¿Y si tengo una mancha difícil?",
        answer:
          "Avísanos al recoger la prenda. Nuestro personal aplica tratamientos previos con oxígeno activo y, si la mancha es irreversible, te lo comunicamos antes de proceder.",
      },
    ],
  },
  {
    id: "empresas",
    label: "Empresas & B2B",
    Icon: Building2,
    faqs: [
      {
        question: "¿Trabajáis con hoteles, restaurantes y clínicas?",
        answer:
          "Sí. Damos servicio a hoteles boutique, restaurantes, clínicas estéticas, peluquerías, gimnasios y centros wellness con rutas diarias y tarifas corporativas.",
      },
      {
        question: "¿Cuál es el volumen mínimo para contratar B2B?",
        answer:
          "No exigimos mínimos rígidos. Adaptamos el contrato a tu volumen real, con tarifas escalonadas que mejoran a partir de 50 kg semanales.",
      },
      {
        question: "¿Qué garantías de calidad y plazos ofrecéis?",
        answer:
          "Lavado con maquinaria Girbau industrial, desinfección con oxígeno activo y SLA de entrega contractual. Sustituimos sin coste cualquier prenda dañada por nuestro proceso.",
      },
      {
        question: "¿Podemos personalizar etiquetado o packaging?",
        answer:
          "Sí. Ofrecemos etiquetado con tu logo, packaging neutro o premium y separación por departamentos o categorías según tu operativa.",
      },
    ],
  },
];

const GeneralFaq = () => {
  const [activeCat, setActiveCat] = useState(categories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const current = categories.find((c) => c.id === activeCat)!;

  const handleCat = (id: string) => {
    setActiveCat(id);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-wider text-sm">
            Resolvemos tus dudas
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Encuentra respuestas rápidas sobre cada uno de nuestros servicios. ¿No ves tu pregunta? Escríbenos por WhatsApp.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.Icon;
            const active = cat.id === activeCat;
            return (
              <button
                key={cat.id}
                onClick={() => handleCat(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-elevated"
                    : "bg-white text-foreground border border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {current.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={`${current.id}-${i}`}
                className={`bg-card rounded-2xl border border-border shadow-soft transition-all duration-300 ${
                  isOpen ? "shadow-elevated ring-1 ring-primary/10" : "hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 transition-colors ${
                        isOpen ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
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
                  <div className="px-5 md:px-6 pb-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-openblue rounded-3xl p-8 md:p-10 text-primary-foreground">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            ¿Tu duda no aparece aquí?
          </h3>
          <p className="opacity-90 max-w-xl mx-auto mb-6">
            Escríbenos directamente por WhatsApp y te respondemos en minutos, sin compromiso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-openblue-dark font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default GeneralFaq;
