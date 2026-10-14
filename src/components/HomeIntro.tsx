import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const content = {
  es: {
    intro:
      "OpenBlue Fuengirola es una lavandería autoservicio e industrial en Av. de Mijas 5, Fuengirola, abierta los 365 días del año de 7:00 a 23:00. Lavamos y secamos tu ropa con máquinas de gran capacidad y desinfección por oxígeno activo, y además ofrecemos un servicio especializado de lavandería, limpieza y gestión para viviendas de alquiler vacacional en Fuengirola, Mijas Costa, Benalmádena y Torremolinos.",
    title: "Qué puedes hacer en OpenBlue Fuengirola",
    items: [
      "Lavar y secar tu propia ropa, sin cita previa, con máquinas de gran capacidad",
      "Dejar tu colada y volver a recogerla lista (servicio de custodia)",
      "Pedir recogida y entrega programada, sin tener que venir al local",
      "Esperar cómodamente en nuestra zona con vending mientras se lava tu ropa",
      "Lavar ropa de cama y toallas con desinfección por oxígeno activo, ideal para Airbnb y alojamientos turísticos",
    ],
  },
  en: {
    intro:
      "OpenBlue Fuengirola is a self-service and industrial laundromat at Av. de Mijas 5, Fuengirola, open every day of the year from 7:00 to 23:00. We wash and dry your clothes with large-capacity machines and active oxygen disinfection, and we also run a dedicated laundry, cleaning and management service for vacation rental properties across Fuengirola, Mijas Costa, Benalmádena and Torremolinos.",
    title: "What you can do at OpenBlue Fuengirola",
    items: [
      "Wash and dry your own laundry, no appointment needed, with large-capacity machines",
      "Drop off your laundry and pick it up ready later (storage service)",
      "Book scheduled pickup and delivery, with no need to visit the shop",
      "Wait comfortably in our vending area while your laundry runs",
      "Wash bed linen and towels with active oxygen disinfection, ideal for Airbnb and holiday lets",
    ],
  },
};

export const homeFaqs = {
  es: {
    title: "Preguntas frecuentes",
    items: [
      ["¿Necesito reservar para usar la lavandería autoservicio?", "No, la lavandería autoservicio funciona sin reserva, de 7:00 a 23:00 los 365 días del año. Vienes con tu ropa y usas las máquinas disponibles."],
      ["¿Qué diferencia hay entre la lavandería autoservicio y el servicio para Airbnb?", "La lavandería autoservicio es para que cualquier persona lave su propia ropa con nuestras máquinas. El servicio para Airbnb es de recogida y entrega: nosotros lavamos, secamos y devolvemos la ropa de cama y toallas de tu vivienda vacacional, sin que tengas que venir al local."],
      ["¿Abren domingos y festivos?", "Sí, abrimos los 365 días del año, de 7:00 a 23:00, incluidos domingos y festivos."],
      ["¿Qué es la desinfección con oxígeno activo?", "Es un sistema de lavado que elimina bacterias, virus y olores sin usar cloro ni químicos agresivos — especialmente recomendado para ropa de cama y toallas de uso compartido, como las de alquiler vacacional."],
      ["¿Puedo dejar mi ropa y volver más tarde a recogerla?", "Sí, ofrecemos servicio de custodia: dejas tu colada y la recoges lista cuando te venga bien, dentro de nuestro horario de 7:00 a 23:00."],
      ["¿Tienen zona de espera?", "Sí, contamos con una zona de espera con vending para que esperes cómodamente mientras se lava o seca tu ropa."],
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    items: [
      ["Do I need to book to use the self-service laundry?", "No, the self-service laundry works without a booking, from 7:00 to 23:00, 365 days a year. Just bring your laundry and use whichever machine is free."],
      ["What's the difference between the self-service laundry and the Airbnb service?", "The self-service laundry is for anyone to wash their own clothes on our machines. The Airbnb service is pickup and delivery: we wash, dry and return your vacation rental's bed linen and towels, so you never have to visit the shop."],
      ["Are you open on Sundays and holidays?", "Yes, we're open 365 days a year, from 7:00 to 23:00, Sundays and holidays included."],
      ["What is active oxygen disinfection?", "It's a washing system that removes bacteria, viruses and odours without chlorine or harsh chemicals — especially recommended for shared-use linen and towels, like those in vacation rentals."],
      ["Can I drop off my laundry and pick it up later?", "Yes, we offer a storage service: drop off your laundry and collect it whenever suits you, within our 7:00–23:00 hours."],
      ["Do you have a waiting area?", "Yes, we have a waiting area with vending machines so you can wait comfortably while your laundry washes or dries."],
    ],
  },
};

const HomeIntro = () => {
  const { i18n } = useTranslation();
  const c = i18n.language === "en" ? content.en : content.es;
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{c.intro}</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">{c.title}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {c.items.map((x) => (
            <li key={x} className="flex gap-3 bg-card border border-border/50 rounded-xl p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const HomeFaq = () => {
  const { i18n } = useTranslation();
  const c = i18n.language === "en" ? homeFaqs.en : homeFaqs.es;
  return (
    <section id="preguntas-frecuentes" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">{c.title}</h2>
        <div className="space-y-3">
          {c.items.map(([q, a]) => (
            <details key={q} className="group bg-card border border-border/50 rounded-xl p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{q}</summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
