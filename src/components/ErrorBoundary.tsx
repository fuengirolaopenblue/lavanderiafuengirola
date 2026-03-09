import React from "react";
import { Button } from "@/components/ui/button";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // Keep a log for debugging; users can still continue using the site.
    // eslint-disable-next-line no-console
    console.error("App crashed:", error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-card">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Algo ha fallado
            </h1>
            <p className="mt-3 text-muted-foreground">
              Recarga la página y vuelve a intentarlo; si ocurre solo en un navegador, prueba a desactivar la
              traducción automática.
            </p>
            <Button variant="hero" className="mt-6" onClick={this.handleReload}>
              Recargar
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
