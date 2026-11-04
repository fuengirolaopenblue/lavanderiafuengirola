// Build-time only: renders each route to static HTML for crawlers (see scripts/prerender.mjs).
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import i18n from "./i18n";
import AppRoutes from "./AppRoutes";

export async function render(url: string, lang: string) {
  await i18n.changeLanguage(lang);
  const queryClient = new QueryClient();
  return renderToString(
    <HelmetProvider context={{}}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
