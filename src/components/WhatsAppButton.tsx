import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20vuestros%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:scale-110 transition-transform duration-300 ring-2 ring-[#25D366]/30"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 .004 7.176.004 16c0 3.5 1.132 6.744 3.052 9.38L1.06 31.496l6.332-1.966C9.952 31.076 12.872 32 16.004 32 24.832 32 32 24.824 32 16S24.832 0 16.004 0zm9.316 22.612c-.396 1.116-1.956 2.04-3.216 2.312-.864.184-1.992.332-5.792-1.244-4.86-2.016-7.984-6.94-8.228-7.26-.232-.32-1.96-2.612-1.96-4.984 0-2.372 1.24-3.54 1.68-4.024.396-.432 1.04-.624 1.656-.624.2 0 .38.02.54.036.476.02.716.048 1.028.796.396.936 1.36 3.308 1.48 3.548.12.24.24.56.08.876-.148.32-.28.52-.52.8-.24.28-.5.496-.74.796-.22.26-.468.54-.188 1.02.28.476 1.244 2.052 2.672 3.324 1.836 1.636 3.384 2.144 3.864 2.38.48.236.76.196 1.04-.12.28-.316 1.2-1.396 1.52-1.876.316-.48.636-.396 1.076-.236.44.156 2.808 1.324 3.288 1.564.48.24.8.36.916.556.12.196.12 1.132-.276 2.248z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
