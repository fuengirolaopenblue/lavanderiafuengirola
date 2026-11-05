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
      "Lavandería Fuengirola OpenBlue | Autoservicio e industrial · 7–23h, 365 días",
    description:
      "Lavandería autoservicio en Fuengirola abierta de 7:00 a 23:00 todos los días. Desinfección con oxígeno activo, zona de espera y servicio especial de lavandería para Airbnb y alquiler vacacional.",
  },
  // Gestión y limpieza de viviendas: trasladadas a Detalia Homes (detaliahomes.com).
  // El prerender genera para estas rutas una página que redirige y apunta su canonical a Detalia.
  { path: "/limpieza-viviendas-vacacionales", lang: "es", redirect: "https://detaliahomes.com/limpieza.html" },
  { path: "/vacation-rental-cleaning", lang: "en", redirect: "https://detaliahomes.com/limpieza.html" },
  { path: "/gestion-vacacional", lang: "es", redirect: "https://detaliahomes.com/" },
  { path: "/vacation-rental-management", lang: "en", redirect: "https://detaliahomes.com/" },
  {
    path: "/privacidad",
    lang: "es",
    locale: "es_ES",
    title: "Política de Privacidad y Protección de Datos | Lavandería Fuengirola OpenBlue",
    description:
      "Información sobre el tratamiento de datos personales, cookies y derechos RGPD en lavanderiafuengirola.com.",
  },
];

/** ES/EN page pairs, used for hreflang tags. */
export const hreflangPairs = routes.filter((r) => r.alternates);
