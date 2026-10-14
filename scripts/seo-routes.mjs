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
      "Lavandería Autoservicio e Industrial en Fuengirola | OpenBlue 7-23h, 365 días",
    description:
      "Lavandería autoservicio en Fuengirola abierta de 7:00 a 23:00 todos los días. Desinfección con oxígeno activo, zona de espera y servicio especial de lavandería para Airbnb y alquiler vacacional.",
  },
  {
    path: "/limpieza-viviendas-vacacionales",
    alternates: { es: "/limpieza-viviendas-vacacionales", en: "/vacation-rental-cleaning" },
    lang: "es",
    locale: "es_ES",
    title:
      "Limpieza de Viviendas Vacacionales en Fuengirola, Mijas y Benalmádena",
    description:
      "Limpieza profesional de pisos turísticos con checklist fotográfico, ropa de cama incluida y rotaciones el mismo día para Airbnb, Booking y Vrbo.",
  },
  {
    path: "/vacation-rental-cleaning",
    alternates: { es: "/limpieza-viviendas-vacacionales", en: "/vacation-rental-cleaning" },
    lang: "en",
    locale: "en_GB",
    title:
      "Vacation Rental Cleaning in Fuengirola, Mijas & Benalmádena | OpenBlue",
    description:
      "Professional holiday home cleaning with photo checklists, linen included and same-day turnarounds for Airbnb, Booking and Vrbo hosts.",
  },
  {
    path: "/gestion-vacacional",
    alternates: { es: "/gestion-vacacional", en: "/vacation-rental-management" },
    lang: "es",
    locale: "es_ES",
    title:
      "Gestión Integral de Alquiler Vacacional en Fuengirola | OpenBlue",
    description:
      "Gestión 360º de tu vivienda turística en Fuengirola: limpieza, lavandería, check-in/out, mantenimiento y cumplimiento normativo.",
  },
  {
    path: "/vacation-rental-management",
    alternates: { es: "/gestion-vacacional", en: "/vacation-rental-management" },
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

/** ES/EN page pairs, used for hreflang tags. */
export const hreflangPairs = routes.filter((r) => r.alternates);
