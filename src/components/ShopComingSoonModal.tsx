import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ShoppingCart, Gift, Tag, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const ShopComingSoonModal = ({ floating }: { floating?: boolean }) => {
  const trigger = floating ? (
    <motion.button
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-elevated ring-2 ring-gold/30 text-openblue-dark"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.12, rotate: 5, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.92 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 500, damping: 20 }}
      aria-label="Tienda"
    >
      <ShoppingCart className="w-7 h-7" />
    </motion.button>
  ) : null;

  if (!trigger) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-center">
            🛒 ¡Tienda en línea próximamente!
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-5 py-4">
          <p className="text-muted-foreground leading-relaxed">
            Muy pronto podrás gestionar tus lavados y secados de forma fácil, rápida y sin complicaciones directamente desde nuestra página web. Olvídate de las colas y los cambios — con unos pocos clics podrás comprar y pagar tus ciclos de lavado y secado cuando quieras, donde quieras.
          </p>

          <p className="text-foreground font-medium">
            Además, si te registras e inicias sesión con tus datos, accederás a un mundo de ventajas exclusivas:
          </p>

          <div className="space-y-4">
            {[
              { icon: Gift, text: "Regalos y sorpresas para nuestros clientes más fieles", color: "text-gold" },
              { icon: Tag, text: "Promociones y descuentos especiales disponibles solo para usuarios registrados", color: "text-primary" },
              { icon: Smartphone, text: "Gestión cómoda de tus pagos e historial de uso", color: "text-primary" },
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
              ¡Muy pronto podrás crear tu cuenta e iniciar sesión para ser el primero en disfrutar de todas las novedades cuando lancemos la tienda!
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopComingSoonModal;
