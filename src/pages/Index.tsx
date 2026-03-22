import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DonnaSection from "@/components/DonnaSection";
import ProcessSection from "@/components/ProcessSection";
import CertificateSection from "@/components/CertificateSection";
import ComparisonSection from "@/components/ComparisonSection";
import ServicesSection from "@/components/ServicesSection";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import TrialSection from "@/components/TrialSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);
  const handleSplashComplete = useCallback(() => setSplashDone(true), []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <DonnaSection />
      <CertificateSection />
      <ComparisonSection />
      <SecuritySection />
      <PricingSection />
      <TrialSection />
      <TeamSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
};

export default Index;
