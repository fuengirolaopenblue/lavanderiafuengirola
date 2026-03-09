import { Facebook, Instagram, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import logoOpenblue from "@/assets/logo-ob.png";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  const quickLinks = [
    { label: t("nav.home"), href: getHref("#inicio") },
    { label: t("nav.services"), href: getHref("#servicios") },
    { label: t("nav.about"), href: getHref("#nosotros") },
    { label: t("nav.contact"), href: getHref("#contacto") },
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
                  <a href={getHref("#servicios")} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social & Review - Prominent Section */}
        <div className="flex flex-col items-center gap-4 mb-10 pt-8 border-t border-primary-foreground/20">
          <h4 className="font-display text-lg font-semibold text-primary-foreground">{t("footer.followUs", "Síguenos y déjanos tu opinión")}</h4>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <a
              href="https://maps.app.goo.gl/hAr6kkbGsWDwadLE9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-openblue-dark hover:bg-gold/80 transition-colors duration-300 text-sm font-bold shadow-elevated"
            >
              <Star className="w-5 h-5 fill-current" />
              {t("footer.leaveReview")}
            </a>
            <a
              href="https://maps.app.goo.gl/bu8z2BPR11gnGxpe6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors duration-300 text-sm font-bold shadow-elevated"
            >
              <MapPin className="w-5 h-5" />
              {t("footer.location", "Ubicación")}
            </a>
            <a href="https://www.facebook.com/profile.php?id=61575797150377" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-gold hover:text-openblue-dark transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/openblue_fuengirola/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/15 flex items-center justify-center hover:bg-gold hover:text-openblue-dark transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OpenBlue Fuengirola. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
