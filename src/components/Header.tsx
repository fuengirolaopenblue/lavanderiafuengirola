import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import logoOpenblue from "@/assets/logo-ob.png";
import LanguageSelector from "./LanguageSelector";
import ShopComingSoonModal from "./ShopComingSoonModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  const navItems = [
    { name: t("nav.home"), href: getHref("#inicio") },
    { name: t("nav.services"), href: getHref("#servicios") },
    { name: t("nav.about"), href: getHref("#nosotros") },
    { name: t("nav.contact"), href: getHref("#contacto") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href={isHome ? "#inicio" : "/"}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logoOpenblue} 
              alt="OpenBlue Logo" 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-primary">
                OPEN<span className="text-foreground">BLUE</span>
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {t("nav.subtitle")}
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex items-center gap-3"
          >
            <LanguageSelector />
            <ShopComingSoonModal />
            <Button variant="hero" size="lg" asChild>
              <a href={getHref("#contacto")}>{t("nav.contactBtn")}</a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-border"
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-2">
            <ShopComingSoonModal />
          </div>
          <Button variant="hero" size="lg" className="mt-2" asChild>
            <a href={getHref("#contacto")} onClick={() => setIsOpen(false)}>{t("nav.contactBtn")}</a>
          </Button>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
