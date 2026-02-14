import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Wifi, Coffee, Sparkles, Factory } from "lucide-react";
import { useTranslation } from "react-i18next";
import lavadora19kg from "@/assets/lavadora-19kg.jpg";
import lavadora15kg from "@/assets/lavadora-15kg.jpg";
import secadora19kg from "@/assets/secadora-19kg.jpg";
import maquinasVending from "@/assets/maquinas-vending.jpg";

interface AutoservicioModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AutoservicioModal = ({ open, onOpenChange }: AutoservicioModalProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-gradient-openblue">
            {t("autoservicioModal.title")}
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {t("autoservicioModal.subtitle")}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <p className="text-foreground leading-relaxed">{t("autoservicioModal.intro")}</p>

          <div className="bg-gradient-openblue rounded-2xl p-6 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Factory className="w-8 h-8" />
              <h3 className="font-display text-xl font-bold">{t("autoservicioModal.machinesTitle")}</h3>
            </div>
            <p className="mb-6 opacity-90" dangerouslySetInnerHTML={{ __html: t("autoservicioModal.machinesDesc") }} />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <img src={lavadora19kg} alt={t("autoservicioModal.washer19")} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{t("autoservicioModal.washer19")}</h4>
                  <p className="text-2xl font-bold mb-2">8€</p>
                  <p className="text-sm opacity-90">{t("autoservicioModal.washer19Desc")}</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <img src={lavadora15kg} alt={t("autoservicioModal.washer15")} className="w-full h-48 object-cover object-center" />
                <div className="p-4">
                  <h4 className="font-bold text-lg mb-2">{t("autoservicioModal.washer15")}</h4>
                  <p className="text-2xl font-bold mb-2">6€</p>
                  <p className="text-sm opacity-90">{t("autoservicioModal.washer15Desc")}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <img src={secadora19kg} alt={t("autoservicioModal.dryer19")} className="w-full h-48 object-cover object-center" />
                <div className="p-4 flex flex-col justify-center">
                  <h4 className="font-bold text-lg mb-2">{t("autoservicioModal.dryer19")}</h4>
                  <p className="text-2xl font-bold mb-2">3€/20min</p>
                  <ul className="text-sm opacity-90 space-y-1">
                    <li>• {t("autoservicioModal.dryer19Extra")}</li>
                    <li>• {t("autoservicioModal.dryer19Extra2")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={maquinasVending} alt={t("autoservicioModal.vendingTitle")} className="w-full h-56 object-cover object-center" />
              <div className="p-4 bg-secondary/50">
                <h4 className="font-semibold text-foreground text-lg mb-2">{t("autoservicioModal.vendingTitle")}</h4>
                <p className="text-sm text-muted-foreground">{t("autoservicioModal.vendingDesc")}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-4">
                <Coffee className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{t("autoservicioModal.coffeeTitle")}</h4>
                  <p className="text-sm text-muted-foreground">{t("autoservicioModal.coffeeDesc")}</p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-4 flex items-start gap-4">
                <Wifi className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">{t("autoservicioModal.wifiTitle")}</h4>
                  <p className="text-sm text-muted-foreground">{t("autoservicioModal.wifiDesc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-primary/30 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{t("autoservicioModal.oxygenTitle")}</h3>
                <p className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t("autoservicioModal.oxygenDesc") }} />
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <p className="text-foreground">
              <strong className="text-gold">{t("autoservicioModal.tipLabel")}</strong> {t("autoservicioModal.tip")}
            </p>
          </div>

          <p className="text-center text-muted-foreground">{t("autoservicioModal.closing")}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutoservicioModal;
