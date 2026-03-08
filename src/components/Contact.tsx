import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

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

    try {
      const response = await fetch("https://formspree.io/f/xnjbndyz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast.success(t("contact.successToast"));
        form.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        toast.error(t("contact.errorToast"));
      }
    } catch {
      toast.error(t("contact.connectionError"));
    } finally {
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
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              {t("contact.formTitle")}
            </h3>
            <div className="w-full overflow-hidden rounded-xl">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdR9taQm-0Rfl-7oBGXIAweeVnQ7iJRNpmb5GCXlvUmm9kuQw/viewform?embedded=true"
                width="100%"
                height="600"
                className="border-0 w-full"
                title="Formulario de contacto OpenBlue"
                loading="lazy"
              >
                Cargando…
              </iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">{t("contact.infoTitle")}</h3>
              <p className="text-muted-foreground">{t("contact.infoSubtitle")}</p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link?.startsWith('http') ? '_blank' : undefined}
                rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors duration-300 ${info.link ? 'cursor-pointer hover:bg-secondary/80' : ''}`}
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
                style={{ border: 0, pointerEvents: 'none' }}
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
