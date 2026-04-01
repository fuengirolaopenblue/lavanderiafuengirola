import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
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
