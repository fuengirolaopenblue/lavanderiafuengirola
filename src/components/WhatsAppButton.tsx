import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300"
      style={{ background: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 39 39" className="w-[36px] h-[36px]">
        <path
          fill="#fff"
          d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.5 5.5 5.4-1.5z"
        />
        <path
          fill="#25D366"
          d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5 1.5-5.7-.4-.6c-1.6-2.5-2.3-5.3-2.3-8.2C4.4 11 11.2 4.2 19.5 4.2c4 0 7.8 1.6 10.6 4.4 2.8 2.8 4.4 6.6 4.4 10.6-.1 8.5-6.9 14.8-15 14.8z"
        />
        <path
          fill="#fff"
          d="M28.3 23.5c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.8-.2-1.1.2-.3.5-1.2 1.5-1.5 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1 .2-.2.5-.5.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-1.1-2.6-1.5-3.5-.4-1-.8-1-1.1-1h-1c-.3 0-.8.1-1.2.6s-1.6 1.5-1.6 3.8c0 2.2 1.6 4.4 1.9 4.7.2.3 3.2 5 7.9 6.9 1.1.5 2 .7 2.6.9 1.1.4 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z"
        />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
