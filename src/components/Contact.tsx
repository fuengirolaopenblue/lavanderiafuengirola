import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const FORMSPREE_URL = "https://formspree.io/f/xnjbndyz";
const CALLMEBOT_PHONE = "34641819577";
const CALLMEBOT_APIKEY = "5478565";

const SERVICE_OPTIONS = [
  "Gestión de Pisos Vacacionales",
  "Lavandería Autoservicio",
  "Recogida y Entrega a domicilio",
  "Presupuesto para Hoteles/Apartamentos",
  "Objeto perdido / Incidencia",
  "Otros",
];

const CONTACT_METHOD_OPTIONS = [
  "Llamada telefónica",
  "WhatsApp",
  "Telegram",
  "Correo electrónico",
];

const SCHEDULE_OPTIONS = [
  "Mañana (9:00 a 12:00)",
  "Medio día (12:00 a 16:00)",
  "Tarde (16:00 a 21:00)",
  "Cualquier momento",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.location"),
      content: "Av. de Mijas nº5, Local 2, 29640 Fuengirola",
      link: "https://maps.app.goo.gl/bu8z2BPR11gnGxpe6",
    },
    {
      icon: Phone,
      title: t("contact.whatsapp"),
      content: "+34 641 819 577",
      link: "https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios.",
    },
    {
      icon: Mail,
      title: t("contact.email"),
      content: "fuengirolaopenblue@gmail.com",
      link: "mailto:fuengirolaopenblue@gmail.com",
    },
    {
      icon: Clock,
      title: t("contact.laundryHours"),
      content: t("contact.laundryHoursValue"),
    },
  ];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Build readable data for Formspree
    const formspreeData = {
      nombre: formData.get("entry.1995408903"),
      telefono: formData.get("entry.1016629774"),
      email: formData.get("entry.1140865917"),
      metodo_contacto: formData.get("entry.1674464117"),
      horario: formData.get("entry.583902354"),
      servicio: formData.get("entry.800696523"),
      mensaje: formData.get("entry.274402304"),
    };

    try {
      console.log("Iniciando envío del formulario...");
      
      // Enviar a Formspree (backup)
      const formspreePromise = fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formspreeData),
      });

      // Generar link de contacto según el método preferido
      const getContactLink = () => {
        const phone = String(formspreeData.telefono).replace(/\s+/g, '');
        const phoneClean = phone.startsWith('+') ? phone.slice(1) : (phone.startsWith('34') ? phone : `34${phone}`);
        
        switch (formspreeData.metodo_contacto) {
          case "Llamada telefónica":
            return `📞 Llamar: tel:+${phoneClean}`;
          case "WhatsApp":
            return `💬 WhatsApp: https://wa.me/${phoneClean}`;
          case "Telegram":
            return `✈️ Telegram: https://t.me/+${phoneClean}`;
          case "Correo electrónico":
            return `✉️ Email: mailto:${formspreeData.email}`;
          default:
            return "";
        }
      };

      // Construir mensaje para WhatsApp con formato mejorado
      const whatsappMessage = `🔔 *NUEVO CONTACTO WEB*
━━━━━━━━━━━━━━━━━━

👤 *NOMBRE*
${formspreeData.nombre}

📱 *TELÉFONO*
${formspreeData.telefono}

📧 *EMAIL*
${formspreeData.email}

━━━━━━━━━━━━━━━━━━

💬 *PREFIERE CONTACTO POR*
${formspreeData.metodo_contacto}

👉 *LINK DIRECTO*
${getContactLink()}

🕐 *HORARIO PREFERIDO*
${formspreeData.horario}

━━━━━━━━━━━━━━━━━━

🧺 *SERVICIO SOLICITADO*
${formspreeData.servicio}

━━━━━━━━━━━━━━━━━━

📝 *MENSAJE DEL CLIENTE*
${formspreeData.mensaje}

━━━━━━━━━━━━━━━━━━
✅ _Enviado desde lavanderiafuengirola.com_`;

      // Enviar a CallMeBot via img tag (evita CORS)
      try {
        const callmebotUrl = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encodeURIComponent(whatsappMessage)}&apikey=${CALLMEBOT_APIKEY}`;
        const img = new Image();
        img.onerror = () => console.log("CallMeBot request sent (expected error due to CORS)");
        img.src = callmebotUrl;
      } catch (e) {
        console.log("CallMeBot error (non-blocking):", e);
      }

      console.log("Esperando respuesta de Formspree...");
      const formspreeResponse = await formspreePromise;
      console.log("Respuesta Formspree:", formspreeResponse.ok);
      if (!formspreeResponse.ok) throw new Error("Formspree submission failed");

      console.log("Formulario enviado correctamente");
      toast.success("¡Mensaje enviado correctamente!");
      
      // Reset form before changing state to avoid DOM conflicts
      try { 
        form.reset(); 
        console.log("Form reset OK");
      } catch (resetErr) { 
        console.log("Form reset skipped:", resetErr);
      }
      
      // Use setTimeout to avoid potential race conditions with DOM updates
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        console.log("State updated to submitted");
      }, 100);
      return; // Exit early, setIsSubmitting handled in setTimeout
    } catch (error) {
      console.error("Error en envío:", error);
      toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("contact.sectionLabel")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            {t("contact.title")}{" "}
            <span className="text-gradient-openblue">{t("contact.titleHighlight")}</span>?
          </h2>
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50 min-h-[400px] flex flex-col"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center flex-1 gap-6 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {t("contact.thankYouTitle", "¡Gracias por contactarnos!")}
                </h3>
                <p className="text-muted-foreground text-lg max-w-md">
                  {t("contact.thankYouMessage", "Hemos recibido tu mensaje. Te responderemos a la mayor brevedad posible.")}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  {t("contact.sendAnother", "Enviar otro mensaje")}
                </Button>
              </motion.div>
            ) : (
            <>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {t("contact.formTitle")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.name")} *
                  </label>
                  <Input
                    name="entry.1995408903"
                    placeholder={t("contact.namePlaceholder")}
                    required
                    maxLength={100}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.phone")} *
                  </label>
                  <Input
                    name="entry.1016629774"
                    type="tel"
                    placeholder={t("contact.phonePlaceholder")}
                    required
                    maxLength={20}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.email")} *
                </label>
                <Input
                  name="entry.1140865917"
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  maxLength={255}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.contactMethod", "¿Cómo prefieres que te contactemos?")} *
                  </label>
                  <select
                    name="entry.1674464117"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t("contact.contactMethodPlaceholder", "Selecciona una opción")}
                    </option>
                    {CONTACT_METHOD_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.schedule", "¿En qué horario prefieres?")} *
                  </label>
                  <select
                    name="entry.583902354"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t("contact.schedulePlaceholder", "Selecciona un horario")}
                    </option>
                    {SCHEDULE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.serviceLabel")} *
                </label>
                <select
                  name="entry.800696523"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {t("contact.servicePlaceholder")}
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")} *
                </label>
                <Textarea
                  name="entry.274402304"
                  placeholder={t("contact.messagePlaceholder")}
                  rows={5}
                  required
                  maxLength={1000}
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t("contact.sending")}
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    {t("contact.sent")}
                  </>
                ) : (
                  <>
                    {t("contact.sendMessage")}
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
            </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {t("contact.infoTitle")}
              </h3>
              <p className="text-muted-foreground">{t("contact.infoSubtitle")}</p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link?.startsWith("http") ? "_blank" : undefined}
                rel={info.link?.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors duration-300 ${info.link ? "cursor-pointer hover:bg-secondary/80" : ""}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.title}</div>
                  <div className="font-medium text-foreground">{info.content}</div>
                </div>
              </motion.a>
            ))}

            <a
              href="https://maps.app.goo.gl/bu8z2BPR11gnGxpe6"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 rounded-2xl overflow-hidden h-48 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.8!2d-4.625!3d36.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f77a7a7a7a7a%3A0x0!2sAv.%20de%20Mijas%2C%205%2C%20Fuengirola!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación OpenBlue Lavandería"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
