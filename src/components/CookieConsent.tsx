import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const STORAGE_KEY = "cookie-consent-openblue";

type Consent = "accepted" | "rejected";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    localStorage.setItem(`${STORAGE_KEY}-date`, new Date().toISOString());
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        role="dialog"
        aria-live="polite"
        aria-label="Aviso de cookies"
        className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 sm:px-6 sm:pb-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/15 bg-background/95 backdrop-blur-md shadow-2xl ring-1 ring-black/5">
          <div className="flex flex-col gap-4 p-5 sm:p-6 md:flex-row md:items-center">
            <div className="flex items-start gap-3 flex-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="text-sm leading-relaxed text-foreground/90">
                <p className="font-semibold text-foreground mb-1">
                  Usamos cookies para mejorar tu experiencia
                </p>
                <p className="text-muted-foreground">
                  Utilizamos cookies propias y de terceros para análisis y para
                  ofrecerte un mejor servicio. Puedes aceptar, rechazar o{" "}
                  <button
                    type="button"
                    onClick={() => setShowDetails(true)}
                    className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
                  >
                    ver más información
                  </button>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 sm:flex-row md:shrink-0">
              <Button
                variant="outline"
                onClick={() => save("rejected")}
                className="sm:min-w-[120px]"
              >
                Rechazar
              </Button>
              <Button
                onClick={() => save("accepted")}
                className="sm:min-w-[120px] bg-primary hover:bg-primary/90"
              >
                Aceptar todas
              </Button>
            </div>
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => save("rejected")}
              className="absolute right-3 top-3 md:hidden text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-primary" />
              Política de Cookies y Términos
            </DialogTitle>
            <DialogDescription>
              Información sobre el uso de cookies en lavanderiafuengirola.com
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 text-sm leading-relaxed text-foreground/90 py-2">
            <section>
              <h3 className="font-semibold text-foreground mb-1">¿Qué son las cookies?</h3>
              <p className="text-muted-foreground">
                Las cookies son pequeños archivos que se almacenan en tu dispositivo
                al visitar nuestro sitio web. Nos ayudan a recordar tus preferencias
                y a entender cómo usas la web para mejorarla.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-1">Tipos de cookies que utilizamos</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Técnicas (necesarias):</strong>{" "}
                  imprescindibles para el funcionamiento del sitio (idioma, sesión).
                </li>
                <li>
                  <strong className="text-foreground">Analíticas:</strong> Google
                  Analytics 4 para medir visitas y mejorar contenidos de forma anónima.
                </li>
                <li>
                  <strong className="text-foreground">Terceros:</strong> Formspree,
                  WhatsApp y Google Maps para formularios, contacto y localización.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-1">Tus opciones</h3>
              <p className="text-muted-foreground">
                Puedes aceptar todas las cookies, rechazar las no esenciales o
                configurar tu navegador para bloquearlas. Rechazar las analíticas
                no afecta al uso del sitio.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-foreground mb-1">Responsable</h3>
              <p className="text-muted-foreground">
                Open Blue Lavandería — Fuengirola (Málaga). Para cualquier consulta
                sobre privacidad y cookies escríbenos desde la sección de contacto.
              </p>
            </section>
          </div>

          <DialogFooter className="flex-col-reverse sm:flex-row gap-2">
            <Button variant="outline" onClick={() => save("rejected")}>
              Rechazar no esenciales
            </Button>
            <Button onClick={() => save("accepted")} className="bg-primary hover:bg-primary/90">
              Aceptar todas
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
