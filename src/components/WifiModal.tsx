import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Copy, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WIFI_SSID = "Lavandería Openblue Fuengirola";
const WIFI_PASSWORD = "OpenblueFuengirola";
const WIFI_QR_STRING = `WIFI:T:WPA;S:${WIFI_SSID};P:${WIFI_PASSWORD};;`;

const WifiModal = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(WIFI_PASSWORD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          className="fixed bottom-24 left-6 z-50 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-elevated text-primary-foreground"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0 6px 20px rgba(0,0,0,0.25)" }}
          whileTap={{ scale: 0.92 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 500, damping: 20 }}
          aria-label="WiFi gratis"
        >
          <Wifi className="w-6 h-6" />
        </motion.button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-openblue p-6 text-center text-primary-foreground">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Wifi className="w-12 h-12 mx-auto mb-3" />
          </motion.div>
          <h2 className="text-2xl font-bold">WiFi Gratis</h2>
          <p className="text-sm opacity-90 mt-1">Conéctate a nuestra red mientras esperas</p>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center px-6 pt-6 pb-4">
          <div className="bg-white p-4 rounded-xl shadow-soft">
            <QRCodeSVG
              value={WIFI_QR_STRING}
              size={200}
              level="M"
              includeMargin={false}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Escanea el código QR con la cámara de tu móvil para conectarte automáticamente
          </p>
        </div>

        {/* Credentials */}
        <div className="px-6 pb-6 space-y-3">
          <div className="bg-muted rounded-lg p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Red WiFi</p>
                <p className="font-semibold text-foreground text-sm">{WIFI_SSID}</p>
              </div>
            </div>
            <div className="border-t border-border" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium">Contraseña</p>
                <p className="font-semibold text-foreground text-sm font-mono">{WIFI_PASSWORD}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="shrink-0 ml-3"
              >
                {copied ? (
                  <><Check className="w-4 h-4 text-green-500" /> Copiada</>
                ) : (
                  <><Copy className="w-4 h-4" /> Copiar</>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WifiModal;
