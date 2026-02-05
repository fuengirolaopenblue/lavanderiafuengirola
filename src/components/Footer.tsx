import { Waves, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center">
                <Waves className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                CleanWave
              </span>
            </div>
            <p className="text-background/70 max-w-md">
              Tu socio de confianza en servicios de lavandería y gestión de 
              propiedades vacacionales en la costa.
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
                    className="text-background/70 hover:text-background transition-colors"
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
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} CleanWave. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
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
