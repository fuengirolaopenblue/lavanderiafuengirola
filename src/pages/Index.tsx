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
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

import ShopComingSoonModal from "@/components/ShopComingSoonModal";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ExpansionBanner />
        <VipServices />
        <PropertyServices />
        <PropertyManagement />
        <VacationRentalLaundry />
        <Testimonials />
        <Services />
        <ComparisonTable />
        <About />
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
