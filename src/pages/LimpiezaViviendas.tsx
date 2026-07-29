import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Sparkles, BedDouble, Camera, PackageOpen, AlertTriangle, CalendarClock, ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

const WA = "https://wa.me/34641819577?text=";

const content = {
  es: {
    metaTitle: "Limpieza de Apartamentos Turísticos en Fuengirola | OpenBlue",
    metaDesc:
      "Limpieza profesional de viviendas vacacionales en Fuengirola, Mijas y Benalmádena. Checklist fotográfico, ropa de cama incluida y rotaciones el mismo día. Presupuesto en 24h.",
    h1: "Limpieza de Apartamentos Turísticos y Viviendas Vacacionales en Fuengirola",
    sub: "El mismo estándar de tu lavandería industrial, ahora para cada rincón de tu propiedad.",
    intro:
      "En OpenBlue Fuengirola limpiamos tu vivienda vacacional con el mismo rigor con el que tratamos su ropa de cama: protocolo fijo, checklist verificable y cero improvisación. Trabajamos rotaciones entre huéspedes en Fuengirola, Los Boliches, Mijas Costa y Benalmádena, adaptándonos a los horarios de check-in y check-out de Airbnb, Booking y Vrbo — incluso cuando la salida y la entrada son el mismo día.",
    includesTitle: "Qué incluye nuestro servicio de limpieza para Airbnb, Booking y Vrbo",
    includes: [
      { icon: Sparkles, text: "Limpieza profunda de check-out: cocina, baños, suelos, cristales y superficies altas" },
      { icon: BedDouble, text: "Cambio completo de ropa de cama y toallas, con nuestra propia lavandería industrial integrada" },
      { icon: Camera, text: "Checklist fotográfico de cada limpieza, enviado al propietario o a la gestora" },
      { icon: PackageOpen, text: "Reposición de amenities básicos (papel higiénico, jabón, cápsulas de lavavajillas)" },
      { icon: AlertTriangle, text: "Aviso inmediato de cualquier incidencia, rotura o desperfecto detectado" },
      { icon: CalendarClock, text: "Disponibilidad para rotaciones el mismo día, incluida temporada alta y fines de semana" },
    ],
    profilesTitle: "Un servicio pensado para tres perfiles distintos",
    profiles: [
      {
        title: "Superhosts y propietarios particulares",
        desc: "Si gestionas tu propio anuncio, te damos la tranquilidad de que cada huésped entra a una vivienda impecable — sin que tengas que estar tú detrás.",
      },
      {
        title: "Gestoras y agencias de alquiler vacacional",
        desc: "Si administras varias propiedades, te ofrecemos facturación unificada, disponibilidad para múltiples rotaciones el mismo día y reporte fotográfico por vivienda, para que puedas subcontratar sin perder el control de calidad.",
      },
      {
        title: "Propietarios que empiezan ahora en Airbnb",
        desc: "Si es tu primera vivienda en plataformas, te ayudamos a definir el protocolo de limpieza correcto desde el primer huésped, para no arriesgar tus primeras reseñas.",
      },
    ],
    zonesTitle: "Zonas donde ofrecemos limpieza de viviendas vacacionales",
    zones: [
      "Fuengirola (Centro y Los Boliches)",
      "Mijas Costa (La Cala y Riviera)",
      "Benalmádena (Puerto Marina)",
      "Torremolinos",
      "Málaga capital",
    ],
    faqTitle: "Preguntas frecuentes sobre limpieza de apartamentos turísticos",
    faqs: [
      {
        q: "¿Con cuánta antelación debo avisar una limpieza?",
        a: "Recomendamos avisar el check-out en cuanto lo confirme el huésped, pero trabajamos también con avisos de última hora siempre que haya disponibilidad — algo habitual en temporada alta.",
      },
      {
        q: "¿La limpieza incluye ropa de cama y toallas?",
        a: "Sí, si contratas el Pack Completo (limpieza + lavandería) el textil se lava, seca y repone en la misma visita. También puedes contratar solo limpieza si ya gestionas tu ropa de cama por otro medio.",
      },
      {
        q: "¿Trabajan fines de semana y festivos?",
        a: "Sí, 365 días al año — los check-in y check-out de Airbnb no respetan calendario, y nosotros tampoco.",
      },
      {
        q: "¿Qué pasa si un huésped se retrasa y el check-in es el mismo día?",
        a: "Coordinamos contigo o con la plataforma para ajustar el horario de limpieza y garantizar que la vivienda esté lista antes de la llegada del siguiente huésped.",
      },
      {
        q: "¿Puedo contratar limpieza para una sola propiedad o solo para varias?",
        a: "Ambas opciones. Trabajamos tanto con particulares de una vivienda como con gestoras que administran carteras completas.",
      },
    ],
    ctaText: "¿Listo para dejar la limpieza en manos de un partner que la trata como un servicio industrial?",
    ctaBtn: "Solicitar Presupuesto de Limpieza",
    ctaMsg: "Hola, me interesa el servicio de limpieza para mi vivienda vacacional en Fuengirola",
    back: "Volver al inicio",
  },
  en: {
    metaTitle: "Airbnb & Vacation Rental Cleaning in Fuengirola | OpenBlue",
    metaDesc:
      "Professional turnover cleaning for vacation rentals in Fuengirola, Mijas and Benalmádena. Photo checklist, fresh linen included, same-day turnarounds. Get a quote within 24h.",
    h1: "Vacation Rental & Airbnb Cleaning Services in Fuengirola",
    sub: "The same industrial-grade standard as our laundry, now for every corner of your property.",
    intro:
      "At OpenBlue Fuengirola we clean your vacation rental with the same rigour we apply to your bed linen: a fixed protocol, a verifiable checklist, and zero guesswork. We handle guest turnovers across Fuengirola, Los Boliches, Mijas Costa and Benalmádena, working around your Airbnb, Booking.com and Vrbo check-in/check-out times — even on same-day turnarounds.",
    includesTitle: "What's included in our cleaning service for Airbnb, Booking and Vrbo",
    includes: [
      { icon: Sparkles, text: "Deep check-out clean: kitchen, bathrooms, floors, glass and high surfaces" },
      { icon: BedDouble, text: "Full linen and towel change, with our own in-house industrial laundry" },
      { icon: Camera, text: "Photo checklist for every clean, sent directly to the owner or property manager" },
      { icon: PackageOpen, text: "Restocking of basic amenities (toilet paper, soap, dishwasher pods)" },
      { icon: AlertTriangle, text: "Immediate notice of any damage or issue found on-site" },
      { icon: CalendarClock, text: "Availability for same-day turnovers, including peak season and weekends" },
    ],
    profilesTitle: "Built for three types of clients",
    profiles: [
      {
        title: "Superhosts and individual owners",
        desc: "If you manage your own listing, we give you the peace of mind that every guest walks into a spotless home — without you having to be there.",
      },
      {
        title: "Property managers and rental agencies",
        desc: "If you manage several properties, we offer consolidated billing, availability for multiple same-day turnovers, and a photo report per property, so you can outsource without losing quality control.",
      },
      {
        title: "First-time Airbnb hosts",
        desc: "If this is your first property on the platforms, we help you set the right cleaning protocol from guest one, so your early reviews aren't put at risk.",
      },
    ],
    zonesTitle: "Areas we cover for vacation rental cleaning",
    zones: [
      "Fuengirola (Centre & Los Boliches)",
      "Mijas Costa (La Cala & Riviera)",
      "Benalmádena (Puerto Marina)",
      "Torremolinos",
      "Málaga city",
    ],
    faqTitle: "Frequently asked questions about vacation rental cleaning",
    faqs: [
      {
        q: "How much notice do you need for a cleaning?",
        a: "We recommend booking as soon as the guest confirms check-out, but we also take last-minute requests when availability allows — common during peak season.",
      },
      {
        q: "Does cleaning include bed linen and towels?",
        a: "Yes, with our Full Package (cleaning + laundry) linen is washed, dried and restocked in the same visit. You can also book cleaning only if you already manage your own linen.",
      },
      {
        q: "Do you work weekends and holidays?",
        a: "Yes, 365 days a year — Airbnb check-ins don't follow a calendar, and neither do we.",
      },
      {
        q: "What if a guest is late and check-in is the same day?",
        a: "We coordinate with you or the platform to adjust the cleaning time and make sure the property is ready before the next guest arrives.",
      },
      {
        q: "Can I book cleaning for just one property, or for a whole portfolio?",
        a: "Both. We work with individual hosts as well as agencies managing full property portfolios.",
      },
    ],
    ctaText: "Ready to hand cleaning over to a partner that treats it like an industrial service?",
    ctaBtn: "Request a Cleaning Quote",
    ctaMsg: "Hi, I'm interested in your cleaning service for my vacation rental in Fuengirola",
    back: "Back to home",
  },
};

const LimpiezaViviendas = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isEn = location.pathname.startsWith("/vacation-rental-cleaning");

  useEffect(() => {
    if (isEn && i18n.language !== "en") i18n.changeLanguage("en");
    if (!isEn && !["es", "fi", "fr", "pt", "ar"].includes(i18n.language)) i18n.changeLanguage("es");
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [isEn, i18n]);

  const c = isEn ? content.en : content.es;
  const canonical = `https://lavanderiafuengirola.lovable.app${isEn ? "/vacation-rental-cleaning" : "/limpieza-viviendas-vacacionales"}`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div id="inicio" className="min-h-screen bg-background">
      <Helmet>
        <html lang={isEn ? "en" : "es"} />
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.metaDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.metaDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Helmet>

      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-openblue">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {c.h1}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">{c.sub}</p>
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">{c.intro}</p>
          </div>
        </section>

        {/* Includes */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {c.includesTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {c.includes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-card"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="pb-16 md:pb-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              {c.profilesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.profiles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-card"
                >
                  <h3 className="font-display text-lg font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zones */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {c.zonesTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {c.zones.map((z, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  {z}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16 md:pb-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-3xl py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {c.faqTitle}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {c.faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center space-y-6">
            <p className="text-foreground font-medium text-lg">{c.ctaText}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={`${WA}${encodeURIComponent(c.ctaMsg)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  {c.ctaBtn}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to={isEn ? "/" : "/"}>
                  <ArrowLeft className="w-4 h-4" />
                  {c.back}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialFloatingButtons />
    </div>
  );
};

export default LimpiezaViviendas;
