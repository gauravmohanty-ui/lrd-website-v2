import Navbar from "@/components/Navbar";
import SecuritySection from "@/components/SecuritySection";
import CertificateSection from "@/components/CertificateSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Security = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        <SecuritySection />
        <CertificateSection />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
};

export default Security;
