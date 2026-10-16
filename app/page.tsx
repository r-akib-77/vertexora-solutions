import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import CapabilityStrip from "@/src/components/CapabilityStrip";
import ServicesSection from "@/src/components/ServicesSection";
import ProjectsSection from "@/src/components/ProjectsSection";
import WhyVertexoraSection from "@/src/components/WhyVertexoraSection";
import ProcessSection from "@/src/components/ProcessSection";
import TechnologySection from "@/src/components/TechnologySection";
import TestimonialsSection from "@/src/components/TestimonialsSection";
import ContactSection from "@/src/components/ContactSection";
import FinalCTASection from "@/src/components/FinalCTASection";
import Footer from "@/src/components/Footer";
import BackToTop from "@/src/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <CapabilityStrip />
        <ServicesSection />
        <ProjectsSection />
        <WhyVertexoraSection />
        <ProcessSection />
        <TechnologySection />
        <TestimonialsSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
