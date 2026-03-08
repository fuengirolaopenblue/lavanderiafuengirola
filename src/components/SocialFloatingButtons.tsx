import { motion } from "framer-motion";
import { Facebook, Instagram, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const SocialFloatingButtons = () => {
  const { t } = useTranslation();

  const buttons = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61575797150377",
      label: "Facebook",
      bg: "bg-[#1877F2]",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/openblue_fuengirola/",
      label: "Instagram",
      bg: "bg-[#E4405F]",
    },
    {
      Icon: Star,
      href: "https://maps.app.goo.gl/hAr6kkbGsWDwadLE9",
      label: t("footer.leaveReview"),
      bg: "bg-gold",
      fill: true,
    },
  ];

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {buttons.map(({ Icon, href, label, bg, fill }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 ${bg} rounded-full flex items-center justify-center shadow-elevated text-white`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.2, rotate: 8, boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ delay: 1.2 + index * 0.15, type: "spring", stiffness: 300, damping: 15 }}
          aria-label={label}
        >
          <Icon className={`w-5 h-5 ${fill ? "fill-current" : ""}`} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialFloatingButtons;
