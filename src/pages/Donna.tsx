import Navbar from "@/components/Navbar";
import DonnaSection from "@/components/DonnaSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Donna = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        <DonnaSection />
        <ProcessSection />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
};

export default Donna;
