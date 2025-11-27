import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import VideoShowcaseSection from "@/components/video-showcase-section";
import IntroSection from "@/components/intro-section";
import ServiceButtonsSection from "@/components/service-buttons-section";
import NewServiceBanner from "@/components/new-service-banner";

import AboutSection from "@/components/about-section";
import AdminPanelSection from "@/components/admin-panel-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import FloatingWhatsApp from "@/components/floating-whatsapp";
import ConfidencePopup from "@/components/confidence-popup";
import DemosBanner from "@/components/demos-banner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DemosBanner />
      <Navigation />
      <HeroSection />
      <NewServiceBanner />
      <ServiceButtonsSection />
      <VideoShowcaseSection />
      <IntroSection />

      <AboutSection />
      <AdminPanelSection />
      <FAQSection />
      <Footer />
      <FloatingWhatsApp />
      <ConfidencePopup />
    </div>
  );
}
