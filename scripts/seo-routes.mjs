// Single source of truth for per-route head metadata used by the prerender step.
// Keep these in sync with the <Helmet> tags inside each page component.

export const SITE_URL = "https://www.lavanderiafuengirola.com";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const routes = [
  {
    path: "/",
    lang: "es",
    locale: "es_ES",
    title:
      "Lavandería Industrial y Autoservicio en Fuengirola | OpenBlue 7-23h",
    description:
      "Lavandería en Fuengirola de 7:00 a 23:00, los 365 días. Desinfección con oxígeno activo, custodia de ropa y entrega programada para Airbnb y viviendas turísticas.",
  },
  {
    path: "/limpieza-viviendas-vacacionales",
    lang: "es",
    locale: "es_ES",
    title:
      "Limpieza de Viviendas Vacacionales en Fuengirola, Mijas y Benalmádena",
    description:
      "Limpieza profesional de pisos turísticos con checklist fotográfico, ropa de cama incluida y rotaciones el mismo día para Airbnb, Booking y Vrbo.",
  },
  {
    path: "/vacation-rental-cleaning",
    lang: "en",
    locale: "en_GB",
    title:
      "Vacation Rental Cleaning in Fuengirola, Mijas & Benalmádena | OpenBlue",
    description:
      "Professional holiday home cleaning with photo checklists, linen included and same-day turnarounds for Airbnb, Booking and Vrbo hosts.",
  },
  {
    path: "/gestion-vacacional",
    lang: "es",
    locale: "es_ES",
    title:
      "Gestión Integral de Alquiler Vacacional en Fuengirola | OpenBlue",
    description:
      "Gestión 360º de tu vivienda turística en Fuengirola: limpieza, lavandería, check-in/out, mantenimiento y cumplimiento normativo.",
  },
  {
    path: "/vacation-rental-management",
    lang: "en",
    locale: "en_GB",
    title: "Full Vacation Rental Management in Fuengirola | OpenBlue",
    description:
      "End-to-end holiday rental management in Fuengirola: cleaning, laundry, check-in/out, maintenance and legal compliance.",
  },
  {
    path: "/privacidad",
    lang: "es",
    locale: "es_ES",
    title: "Política de Privacidad y Protección de Datos | OpenBlue Fuengirola",
    description:
      "Información sobre el tratamiento de datos personales, cookies y derechos RGPD en lavanderiafuengirola.com.",
  },
];
