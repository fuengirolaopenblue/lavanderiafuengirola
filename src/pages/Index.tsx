import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExpansionBanner from "@/components/ExpansionBanner";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import VipServices from "@/components/VipServices";
import ComparisonTable from "@/components/ComparisonTable";
import PropertyServices from "@/components/PropertyServices";
import PropertyManagement from "@/components/PropertyManagement";
import VacationRentalLaundry from "@/components/VacationRentalLaundry";
import PropertyFaq from "@/components/PropertyFaq";
import GeneralFaq from "@/components/GeneralFaq";
import CoverageArea from "@/components/CoverageArea";
import B2BQuote from "@/components/B2BQuote";
import HybridLaundry from "@/components/HybridLaundry";
import HolidayCleaning from "@/components/HolidayCleaning";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import ShopComingSoonModal from "@/components/ShopComingSoonModal";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href="https://www.lavanderiafuengirola.com/" />
        <meta property="og:url" content="https://www.lavanderiafuengirola.com/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <ExpansionBanner />
        <CoverageArea />
        <HybridLaundry />
        <HolidayCleaning />
        <VipServices />
        <PropertyServices />
        <PropertyManagement />
        <VacationRentalLaundry />
        <PropertyFaq />
        <Testimonials />
        <Services />
        <ComparisonTable />
        <GeneralFaq />
        <About />
        <B2BQuote />
        <Contact />
      </main>
      <Footer />
      <ShopComingSoonModal floating />
      <WhatsAppButton />
      
      <SocialFloatingButtons />
    </div>
  );
};

export default Index;
