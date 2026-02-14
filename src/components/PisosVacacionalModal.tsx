import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Truck, Sparkles, Wind, Clock, ShieldCheck, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

interface PisosVacacionalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PisosVacacionalModal = ({ open, onOpenChange }: PisosVacacionalModalProps) => {
  const { t } = useTranslation();

  const steps = [
    { icon: Truck, key: "pickup" },
    { icon: Sparkles, key: "treatment" },
    { icon: Wind, key: "drying" },
    { icon: Clock, key: "delivery" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {t("pisosModal.title")}{" "}
            <span className="text-gradient-openblue">{t("pisosModal.titleHighlight")}</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">{t("pisosModal.introTitle")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("pisosModal.introDesc")}</p>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">{t("pisosModal.howTitle")}</h3>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.key} className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-gradient-openblue flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t(`pisosModal.steps.${step.key}.title`)}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(`pisosModal.steps.${step.key}.description`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">{t("pisosModal.trustTitle")}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t("pisosModal.trustDesc")}</p>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
            <Star className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t("pisosModal.experienceDesc") }} />
          </div>

          <div className="text-center space-y-3 pt-2">
            <p className="text-muted-foreground font-medium">{t("pisosModal.ctaText")}</p>
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://wa.me/34641819577?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20lavander%C3%ADa%20para%20pisos%20vacacionales."
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("pisosModal.ctaWhatsApp")}
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PisosVacacionalModal;
