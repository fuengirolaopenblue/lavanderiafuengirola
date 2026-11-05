import { Routes, Route } from "react-router-dom";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import MovedToDetalia from "./pages/MovedToDetalia";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { DETALIA } from "./lib/detalia";

const AppRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Index />} />
      {/* La gestión y la limpieza de viviendas se han trasladado a Detalia Homes */}
      <Route path="/gestion-vacacional" element={<MovedToDetalia to={DETALIA.home} />} />
      <Route path="/vacation-rental-management" element={<MovedToDetalia to={DETALIA.home} lang="en" />} />
      <Route path="/limpieza-viviendas-vacacionales" element={<MovedToDetalia to={DETALIA.cleaning} />} />
      <Route path="/vacation-rental-cleaning" element={<MovedToDetalia to={DETALIA.cleaning} lang="en" />} />
      <Route path="/privacidad" element={<PrivacyPolicy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieConsent />
  </>
);

export default AppRoutes;
