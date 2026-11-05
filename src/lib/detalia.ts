// Enlaces a Detalia Homes, la empresa del grupo que hace la gestión y la limpieza de viviendas.
export const DETALIA = {
  home: "https://detaliahomes.com/",
  cleaning: "https://detaliahomes.com/limpieza.html",
  jobs: "https://detaliahomes.com/trabaja-con-nosotros.html",
};

// Rutas antiguas de esta web que ahora viven en Detalia.
export const MOVED_ROUTES: Record<string, string> = {
  "/gestion-vacacional": DETALIA.home,
  "/vacation-rental-management": DETALIA.home,
  "/limpieza-viviendas-vacacionales": DETALIA.cleaning,
  "/vacation-rental-cleaning": DETALIA.cleaning,
};
