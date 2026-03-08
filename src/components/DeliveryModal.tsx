import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MapPin, Truck, PackageCheck, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface DeliveryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DeliveryModal = ({ open, onOpenChange }: DeliveryModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-gradient-openblue">
            {t("deliveryModal.title")}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {t("deliveryModal.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 mt-4">
          {/* Intro */}
          <p className="text-muted-foreground leading-relaxed">
            {t("deliveryModal.intro")}
          </p>

          {/* Cómo funciona */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <PackageCheck className="w-5 h-5 text-primary" />
              {t("deliveryModal.howTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("deliveryModal.howDesc")}
            </p>
          </div>

          {/* Zona de cobertura */}
          <div className="bg-accent/10 rounded-xl p-6 border border-border/50">
            <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              {t("deliveryModal.coverageTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("deliveryModal.coverageDesc")}
            </p>
          </div>

          {/* Coste del servicio */}
          <div className="bg-accent/10 rounded-xl p-6 border border-border/50">
            <h3 className="font-display text-lg font-bold text-foreground mb-2 flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              {t("deliveryModal.costTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("deliveryModal.costDesc")}
            </p>
          </div>

          {/* Comodidad y calidad */}
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-3">
              {t("deliveryModal.comfortTitle")}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("deliveryModal.comfortDesc")}
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-openblue rounded-xl p-6 text-center">
            <p className="text-primary-foreground/90 mb-4">
              {t("deliveryModal.ctaText")}
            </p>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20servicio%20puerta%20a%20puerta."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("deliveryModal.ctaWhatsApp")}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeliveryModal;
