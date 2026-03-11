import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart, Gift, Tag, Bell } from "lucide-react";
import { motion } from "framer-motion";
import centralPagoImg from "@/assets/central-pago.png";

const ShopComingSoonModal = ({ floating }: { floating?: boolean }) => {
  const trigger = floating ? (
    <motion.button
      className="fixed bottom-24 right-6 z-50 w-16 h-16 bg-gold rounded-full flex items-center justify-center text-openblue-dark"
      style={{
        boxShadow: "0 0 20px rgba(255,193,7,0.5), 0 0 40px rgba(255,193,7,0.25), 0 4px 15px rgba(0,0,0,0.2)",
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [1, 1.12, 1],
        opacity: 1,
        boxShadow: [
          "0 0 20px rgba(255,193,7,0.5), 0 0 40px rgba(255,193,7,0.25), 0 4px 15px rgba(0,0,0,0.2)",
          "0 0 30px rgba(255,193,7,0.7), 0 0 60px rgba(255,193,7,0.4), 0 4px 20px rgba(0,0,0,0.3)",
          "0 0 20px rgba(255,193,7,0.5), 0 0 40px rgba(255,193,7,0.25), 0 4px 15px rgba(0,0,0,0.2)",
        ],
      }}
      whileHover={{ scale: 1.2, rotate: -10 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 500,
        damping: 20,
        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut" },
      }}
      aria-label="Tienda"
    >
      <ShoppingCart className="w-8 h-8" />
    </motion.button>
  ) : null;

  if (!trigger) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0">
        {/* Hero image */}
        <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-lg">
          <img
            src={centralPagoImg}
            alt="Central de pago OpenBlue"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white drop-shadow-lg">
              🛒 ¡Tienda en línea próximamente!
            </h2>
          </div>
        </div>

        <div className="space-y-5 px-6 pb-6 pt-2">
          <p className="text-muted-foreground leading-relaxed">
            Muy pronto llevarás la central de pagos en la palma de tu mano. Desde nuestra página web podrás comprar y pagar tus ciclos de lavado y secado cuando quieras, sin necesidad de desplazarte ni llevar efectivo — todo a golpe de clic, desde donde estés.
          </p>

          <p className="text-foreground font-medium">
            Para disfrutar de la experiencia completa, solo necesitas crear tu cuenta en nuestra web. Una vez registrado, además de gestionar tus pagos cómodamente, podrás acceder a:
          </p>

          <div className="space-y-3">
            {[
              { icon: Gift, text: "Sorpresas y regalos pensados para nuestros clientes", color: "text-gold" },
              { icon: Tag, text: "Promociones y descuentos exclusivos para usuarios registrados", color: "text-primary" },
              { icon: Bell, text: "Novedades y ofertas antes que nadie", color: "text-primary" },
            ].map(({ icon: Icon, text, color }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * i }}
                className="flex items-start gap-3 p-3 rounded-lg bg-accent/50"
              >
                <Icon className={`w-6 h-6 ${color} shrink-0 mt-0.5`} />
                <span className="text-foreground text-sm">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-openblue rounded-xl p-5 text-center text-primary-foreground">
            <p className="font-semibold text-lg">
              ¡Regístrate ahora y prepárate para una nueva forma de hacer la colada!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopComingSoonModal;
