import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  to: string;
  lang?: "es" | "en";
}

/** Página puente: este contenido se ha trasladado a Detalia Homes. */
const MovedToDetalia = ({ to, lang = "es" }: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") window.location.replace(to);
  }, [to]);

  const en = lang === "en";
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <Helmet>
        <link rel="canonical" href={to} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="max-w-lg text-center">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          {en ? "This service is now part of Detalia Homes" : "Este servicio está ahora en Detalia Homes"}
        </h1>
        <p className="text-muted-foreground mb-8">
          {en
            ? "Detalia Homes is our family company in Fuengirola for holiday home management and cleaning."
            : "Detalia Homes es nuestra empresa familiar en Fuengirola para la gestión y la limpieza de viviendas."}
        </p>
        <a
          href={to}
          className="inline-flex items-center justify-center rounded-lg bg-gradient-openblue text-primary-foreground font-semibold h-12 px-8"
        >
          {en ? "Go to Detalia Homes" : "Ir a Detalia Homes"}
        </a>
      </div>
    </main>
  );
};

export default MovedToDetalia;
