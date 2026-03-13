import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <ShopComingSoonModal floating />
      <WhatsAppButton />
      <SocialFloatingButtons />
      <WifiModal />
    </div>
  );
};

export default Index;
