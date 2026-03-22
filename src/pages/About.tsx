import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[68px]">
        <TeamSection />
        <FAQSection />
        <FinalCTA />
      </div>
      <Footer />
    </>
  );
};

export default About;
