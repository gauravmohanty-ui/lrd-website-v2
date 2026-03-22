import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TrialSection from "@/components/TrialSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        <PricingSection />
        <ComparisonSection />
        <TrialSection />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
