import { Facebook, Instagram } from "lucide-react";
import logoOpenblue from "@/assets/logo-openblue.jpg";

const Footer = () => {
  return (
    <footer className="bg-openblue-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoOpenblue} 
                alt="OpenBlue Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <span className="font-display text-xl font-bold">
                  OPEN<span className="text-gold">BLUE</span>
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md">
              Tu lavandería de confianza en Fuengirola. Servicios de lavandería autoservicio 
              y gestión de propiedades vacacionales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {["Inicio", "Servicios", "Sobre Nosotros", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {[
                "Lavandería Autoservicio",
                "Lavandería Vacacional",
                "Gestión de Pisos",
                "Limpieza Profesional",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} OpenBlue Fuengirola. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
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
