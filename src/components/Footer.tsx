import { Facebook, Instagram, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoOpenblue from "@/assets/logo-openblue.jpg";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { label: t("nav.home"), href: "#inicio" },
    { label: t("nav.services"), href: "#servicios" },
    { label: t("nav.about"), href: "#nosotros" },
    { label: t("nav.contact"), href: "#contacto" },
  ];

  const serviceLinks = [
    t("footer.selfService"),
    t("footer.vacationLaundry"),
    t("footer.propertyMgmt"),
    t("footer.profCleaning"),
  ];

  return (
    <footer className="bg-openblue-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoOpenblue} alt="OpenBlue Logo" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <span className="font-display text-xl font-bold">
                  OPEN<span className="text-gold">BLUE</span>
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.servicesTitle")}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OpenBlue Fuengirola. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/hAr6kkbGsWDwadLE9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-300 text-sm font-medium"
            >
              <Star className="w-4 h-4 fill-current" />
              {t("footer.leaveReview")}
            </a>
            {[
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575797150377" },
              { Icon: Instagram, href: "https://www.instagram.com/openblue_fuengirola/" },
            ].map(({ Icon, href }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors duration-300">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
