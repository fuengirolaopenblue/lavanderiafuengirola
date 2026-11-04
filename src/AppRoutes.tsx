import { Routes, Route } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import GestionVacacional from "./pages/GestionVacacional";
import LimpiezaViviendas from "./pages/LimpiezaViviendas";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gestion-vacacional" element={<GestionVacacional />} />
      <Route path="/vacation-rental-management" element={<GestionVacacional />} />
      <Route path="/limpieza-viviendas-vacacionales" element={<LimpiezaViviendas />} />
      <Route path="/vacation-rental-cleaning" element={<LimpiezaViviendas />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieConsent />
  </>
);

export default AppRoutes;
