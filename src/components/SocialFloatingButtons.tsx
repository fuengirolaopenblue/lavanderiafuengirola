import { motion } from "framer-motion";
import { Facebook, Instagram, Star, MapPin } from "lucide-react";
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
      href: "https://search.google.com/local/writereview?placeid=ChIJBQS-udV7aCURPAuhZ0N7dgI",
      label: t("footer.leaveReview"),
      bg: "bg-gold",
      fill: true,
    },
    {
      Icon: MapPin,
      href: "https://maps.app.goo.gl/bu8z2BPR11gnGxpe6",
      label: t("footer.location", "Ubicación"),
      bg: "bg-primary",
      fill: false,
    },
  ];

  return (
    <div className="fixed left-6 bottom-6 z-50 flex flex-row gap-3">
      {buttons.map(({ Icon, href, label, bg, fill }, index) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-11 h-11 ${bg} rounded-full flex items-center justify-center shadow-elevated text-white`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ delay: 0.3 + index * 0.08, type: "spring", stiffness: 500, damping: 20 }}
          aria-label={label}
        >
          <Icon className={`w-5 h-5 ${fill ? "fill-current" : ""}`} />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialFloatingButtons;
