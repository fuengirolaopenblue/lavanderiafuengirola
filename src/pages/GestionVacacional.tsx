import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import {
  Globe,
  MessageSquare,
  Sparkles,
  Wrench,
  BarChart3,
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

const WA = "https://wa.me/34641819577?text=";

const content = {
  es: {
    metaTitle: "Gestión Integral de Alquiler Vacacional en Fuengirola | OpenBlue",
    metaDesc:
      "Administración completa de tu vivienda vacacional en Fuengirola y Costa del Sol: publicación en Airbnb/Booking, atención a huéspedes, limpieza, lavandería y mantenimiento. Estudio gratuito.",
    h1: "Gestión Integral de Alquiler Vacacional en Fuengirola y Costa del Sol",
    sub: "Despreocúpate por completo. Nosotros nos encargamos de todo.",
    intro:
      "En OpenBlue Fuengirola convertimos tu propiedad en una fuente de ingresos constante, sin que tengas que ocuparte de nada. Ofrecemos gestión integral de alquiler vacacional para propietarios en Fuengirola, Mijas Costa, Benalmádena, Torremolinos y Málaga capital — con especial experiencia en propietarios extranjeros (escandinavos, británicos, alemanes y holandeses) que gestionan su vivienda a distancia. Un único proveedor se encarga de la publicación, los huéspedes, la limpieza, la lavandería y el mantenimiento.",
    includesTitle: "Qué incluye nuestra gestión integral de alquiler vacacional",
    includes: [
      {
        icon: Globe,
        title: "Publicación y visibilidad",
        desc: "Creamos y gestionamos anuncios profesionales en Airbnb, Booking, Vrbo y más. Optimizamos descripciones, fotos y precios para atraer más reservas y aumentar tu ocupación.",
      },
      {
        icon: MessageSquare,
        title: "Atención al huésped 24/7",
        desc: "Gestionamos todas las comunicaciones, consultas y reservas. Desde el primer contacto hasta la despedida, tus huéspedes reciben atención personalizada que se traduce en valoraciones de 5 estrellas.",
      },
      {
        icon: Sparkles,
        title: "Limpieza y lavandería integral",
        desc: "Limpieza profunda entre estancias y textil siempre impecable con nuestra propia lavandería — sin coordinar proveedores externos.",
        linkText: "Ver detalle del servicio de limpieza",
        linkTo: "/limpieza-viviendas-vacacionales",
      },
      {
        icon: Wrench,
        title: "Mantenimiento y supervisión",
        desc: "Inspecciones periódicas y coordinación de reparaciones para proteger el valor de tu inversión. Detectamos problemas antes de que se conviertan en inconvenientes mayores.",
      },
      {
        icon: BarChart3,
        title: "Informes y rentabilidad",
        desc: "Reportes mensuales transparentes de ingresos, ocupación y gastos. Tú solo cobras.",
      },
    ],
    processTitle: "Cómo funciona el proceso de alta",
    process: [
      {
        title: "Estudio gratuito de tu propiedad",
        desc: "Visitamos tu vivienda y analizamos su potencial de ingresos según ubicación, capacidad y temporada.",
      },
      {
        title: "Firma del contrato de gestión",
        desc: "Formalizamos el acuerdo con condiciones claras, sin letra pequeña.",
      },
      {
        title: "Publicación y puesta en marcha",
        desc: "Creamos el anuncio, lo publicamos en las plataformas y activamos el calendario de reservas.",
      },
      {
        title: "Gestión activa e informe mensual",
        desc: "Atendemos huéspedes, coordinamos limpieza y mantenimiento, y te enviamos la liquidación económica cada mes.",
      },
    ],
    modelTitle: "Un modelo claro, sin sorpresas",
    modelDesc:
      "Trabajamos con una comisión sobre los ingresos que genera tu propiedad, que ya incluye limpieza y lavandería entre estancias — sin cuotas fijas mensuales ni permanencia obligatoria. Solo ganamos si tu propiedad gana. En el estudio gratuito te presentamos una propuesta de honorarios adaptada a tu vivienda, su zona y su potencial de ocupación.",
    legalTitle: "Cumplimiento normativo y tranquilidad legal",
    legalDesc:
      "Gestionamos tu propiedad conforme al Decreto 28/2016 de Andalucía, que regula las Viviendas con Fines Turísticos (VFT). Te acompañamos en la verificación de tu licencia turística y en su correcta publicación en las plataformas, para que alquilar tu vivienda sea, además de rentable, completamente legal.",
    faqTitle: "Preguntas frecuentes sobre gestión integral",
    faqs: [
      {
        q: "¿Qué comisión cobran por la gestión?",
        a: "Depende de la propiedad, su zona y su potencial de ocupación. En el estudio gratuito te damos una propuesta de honorarios concreta y sin compromiso — sin cuotas fijas ni permanencia mínima.",
      },
      {
        q: "¿Quién fija el precio del alquiler por noche?",
        a: "Nosotros proponemos una estrategia de precios dinámicos basada en demanda y temporada, pero la decisión final siempre es tuya.",
      },
      {
        q: "¿Puedo seguir usando mi vivienda algunos días al año?",
        a: "Sí. Coordinamos el calendario para bloquear las fechas que necesites sin afectar tus reservas confirmadas.",
      },
      {
        q: "¿Qué pasa si quiero cancelar el servicio?",
        a: "No exigimos permanencia mínima. Puedes finalizar el contrato de gestión con el preaviso acordado, sin penalización.",
      },
      {
        q: "¿Necesito licencia turística (VFT) para alquilar mi vivienda?",
        a: "Sí, es obligatoria en Andalucía según el Decreto 28/2016. Te ayudamos a verificarla o tramitarla antes de publicar tu anuncio.",
      },
      {
        q: "¿Qué zonas cubren?",
        a: "Fuengirola, Mijas Costa, Benalmádena, Torremolinos y Málaga capital.",
      },
    ],
    trustTitle: "Propietarios que ya confían en nuestra gestión",
    trustPoints: [
      "Gestionamos propiedades vacacionales en Fuengirola, Mijas Costa y Benalmádena con un único equipo de confianza.",
      "Trabajamos con propietarios particulares y con gestoras que administran carteras de más de 20 apartamentos.",
      "El mismo equipo que gestiona tu lavandería y limpieza gestiona también tus huéspedes, tu calendario y tus informes — sin subcontrataciones ni intermediarios.",
      "Comisión clara desde el primer estudio, sin cuotas fijas ni permanencia mínima: solo ganamos si tu propiedad gana.",
      "Propietarios que llevan más de una temporada completa con nosotros siguen renovando su contrato de gestión.",
    ],
    ctaBtn: "Solicitar Estudio Personalizado",
    ctaMsg: "Hola, me interesa el servicio de administración de mi propiedad vacacional en Fuengirola",
    back: "Volver al inicio",
  },
  en: {
    metaTitle: "Vacation Rental Property Management in Fuengirola | OpenBlue",
    metaDesc:
      "Full-service property management for vacation rentals in Fuengirola & Costa del Sol: Airbnb/Booking listing, guest care, cleaning, laundry and maintenance. Free property study.",
    h1: "Vacation Rental Property Management in Fuengirola & Costa del Sol",
    sub: "Stop worrying completely. We take care of everything.",
    intro:
      "At OpenBlue Fuengirola we turn your property into a steady income source, without you having to lift a finger. We offer full-service vacation rental management for owners in Fuengirola, Mijas Costa, Benalmádena, Torremolinos and Málaga city — with particular experience helping international owners (Scandinavian, British, German and Dutch) who manage their property remotely. One single provider handles listing, guests, cleaning, laundry and maintenance.",
    includesTitle: "What's included in our full-service management",
    includes: [
      {
        icon: Globe,
        title: "Listing & visibility",
        desc: "We create and manage professional listings on Airbnb, Booking, Vrbo and more, optimising descriptions, photos and pricing to drive more bookings and occupancy.",
      },
      {
        icon: MessageSquare,
        title: "24/7 guest care",
        desc: "We handle all communications, questions and bookings. From first contact to check-out, your guests get personalised, professional attention that turns into 5-star reviews.",
      },
      {
        icon: Sparkles,
        title: "Full cleaning & laundry",
        desc: "Deep cleaning between stays and always-spotless linen from our own in-house laundry — no need to coordinate outside vendors.",
        linkText: "See our cleaning service in detail",
        linkTo: "/vacation-rental-cleaning",
      },
      {
        icon: Wrench,
        title: "Maintenance & oversight",
        desc: "Regular inspections and repair coordination to protect the value of your investment. We catch issues before they become real problems.",
      },
      {
        icon: BarChart3,
        title: "Reporting & profitability",
        desc: "Transparent monthly reports on income, occupancy and expenses. You just collect the payout.",
      },
    ],
    processTitle: "How onboarding works",
    process: [
      {
        title: "Free property study",
        desc: "We visit your property and assess its income potential based on location, capacity and season.",
      },
      {
        title: "Sign the management agreement",
        desc: "We formalise the agreement with clear terms, no fine print.",
      },
      {
        title: "Listing & launch",
        desc: "We create the listing, publish it across platforms and activate the booking calendar.",
      },
      {
        title: "Active management & monthly report",
        desc: "We handle guests, coordinate cleaning and maintenance, and send you a clear payout report every month.",
      },
    ],
    modelTitle: "A clear model, no surprises",
    modelDesc:
      "We work on a commission over the income your property generates, which already includes cleaning and laundry between stays — no fixed monthly fees, no minimum commitment. We only earn when your property earns. In your free property study, we'll present a fee proposal tailored to your property, its area and its occupancy potential.",
    legalTitle: "Regulatory compliance & legal peace of mind",
    legalDesc:
      "We manage your property in line with Andalusia's Decree 28/2016, which regulates Vacation Rental Properties (VFT). We help you verify your tourist licence and ensure it's correctly displayed across platforms, so renting your property is not just profitable but fully legal.",
    faqTitle: "Frequently asked questions about full-service management",
    faqs: [
      {
        q: "What commission do you charge?",
        a: "It depends on the property, its area and its occupancy potential. In your free property study, we give you a concrete, no-obligation fee proposal — no fixed fees, no minimum commitment.",
      },
      {
        q: "Who sets the nightly rate?",
        a: "We propose a dynamic pricing strategy based on demand and season, but the final call is always yours.",
      },
      {
        q: "Can I still use my property for a few days a year?",
        a: "Yes. We block the calendar for the dates you need without affecting confirmed bookings.",
      },
      {
        q: "What if I want to cancel the service?",
        a: "There's no minimum commitment. You can end the management agreement with the agreed notice period, no penalty.",
      },
      {
        q: "Do I need a tourist licence (VFT) to rent out my property?",
        a: "Yes, it's mandatory in Andalusia under Decree 28/2016. We help you verify or apply for it before your listing goes live.",
      },
      {
        q: "Which areas do you cover?",
        a: "Fuengirola, Mijas Costa, Benalmádena, Torremolinos and Málaga city.",
      },
    ],
    trustTitle: "Owners who already trust our management",
    trustPoints: [
      "We manage vacation properties across Fuengirola, Mijas Costa and Benalmádena with one single trusted team.",
      "We work with individual owners as well as agencies managing portfolios of 20+ apartments.",
      "The same team that handles your laundry and cleaning also handles your guests, your calendar and your reports — no subcontractors, no middlemen.",
      "Clear commission from the very first study, no fixed fees and no minimum commitment: we only earn if your property earns.",
      "Owners who have been with us for more than a full season keep renewing their management agreement.",
    ],
    ctaBtn: "Request a Personalised Study",
    ctaMsg: "Hi, I'm interested in your vacation rental management service in Fuengirola",
    back: "Back to home",
  },
};

const GestionVacacional = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const isEn = location.pathname.startsWith("/vacation-rental-management");

  useEffect(() => {
    if (isEn && i18n.language !== "en") i18n.changeLanguage("en");
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [isEn, i18n]);

  const c = isEn ? content.en : content.es;
  const canonical = `https://www.lavanderiafuengirola.com${isEn ? "/vacation-rental-management" : "/gestion-vacacional"}`;

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
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              {c.includesTitle}
            </h2>
            <div className="space-y-5">
              {c.includes.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-card"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-lg">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      {item.linkText && item.linkTo && (
                        <Link to={item.linkTo} className="inline-block mt-2 text-primary font-semibold hover:underline">
                          {item.linkText} →
                        </Link>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pb-16 md:pb-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              {c.processTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {c.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 shadow-card"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Model + Legal */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl space-y-6">
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">{c.modelTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{c.modelDesc}</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border/50 shadow-card">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{c.legalTitle}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{c.legalDesc}</p>
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

        {/* Trust */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl py-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              {c.trustTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {c.trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3 p-5 rounded-xl bg-card border border-border/50 shadow-card"
                >
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href={`${WA}${encodeURIComponent(c.ctaMsg)}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  {c.ctaBtn}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
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

export default GestionVacacional;
