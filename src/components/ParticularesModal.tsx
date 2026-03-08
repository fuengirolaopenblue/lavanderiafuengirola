import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Shirt, Droplets, Wind, PackageCheck, Truck, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface ParticularesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ParticularesModal = ({ open, onOpenChange }: ParticularesModalProps) => {
  const { t } = useTranslation();

  const services = [
    { icon: Shirt, titleKey: "particularesModal.washTitle", descKey: "particularesModal.washDesc" },
    { icon: Droplets, titleKey: "particularesModal.stainTitle", descKey: "particularesModal.stainDesc" },
    { icon: Wind, titleKey: "particularesModal.dryTitle", descKey: "particularesModal.dryDesc" },
    { icon: PackageCheck, titleKey: "particularesModal.bagTitle", descKey: "particularesModal.bagDesc" },
    { icon: Truck, titleKey: "particularesModal.pickupTitle", descKey: "particularesModal.pickupDesc" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-gradient-openblue">
            {t("particularesModal.title")}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {t("particularesModal.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-4">
          <p className="text-muted-foreground leading-relaxed">
            {t("particularesModal.intro")}
          </p>

          {/* Qué incluye */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-4">
              {t("particularesModal.whatTitle")}
            </h3>
            <div className="space-y-4">
              {services.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="flex gap-4 bg-accent/10 rounded-xl p-5 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t(titleKey)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flexibilidad */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">
              {t("particularesModal.flexTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("particularesModal.flexDesc")}
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed italic">
            {t("particularesModal.experience")}
          </p>

          {/* CTA */}
          <div className="bg-gradient-openblue rounded-xl p-6 text-center">
            <p className="text-primary-foreground/90 mb-4">
              {t("particularesModal.ctaText")}
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20lavander%C3%ADa%20para%20particulares."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("particularesModal.ctaWhatsApp")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ParticularesModal;
