import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const included = [
  "Donna's 6-check quality pipeline",
  "Human QC review — every case",
  "Missing records detection and report",
  "SHA-256 Verified Certificate",
  "Smart routing to fastest provider path",
  "Electronic signatures built in",
  "Named point of contact for your firm",
  "No setup fee · No monthly fee · No minimum",
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="section-light py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2 text-balance">
            Transparent pricing
          </h2>
          <p className="text-body-text text-lg">Nothing hidden.</p>
        </div>

        <div
          className={`max-w-lg mx-auto bg-white border-2 border-teal/20 rounded-2xl p-8 lg:p-10 shadow-xl shadow-teal/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <div className="text-center mb-8">
            <span className="text-6xl font-bold text-navy">$40</span>
            <span className="text-body-text text-lg ml-2">/ request</span>
            <p className="text-body-text/60 text-sm mt-2">One flat fee. Everything included. No per-page fees. No surprises.</p>
          </div>
          <div className="space-y-3 mb-8">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-teal shrink-0 mt-1" />
                <span className="text-body-text text-sm">{item}</span>
              </div>
            ))}
          </div>
          <Button variant="teal" size="lg" className="w-full">
            Get Started
          </Button>
          <p className="text-center text-body-text/60 text-xs mt-4">
            Sending 30+ cases monthly?{" "}
            <a href="#contact" className="text-teal hover:underline">
              Volume plans available
            </a>
          </p>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <a href="#donna" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline transition-colors">
            See how Donna works →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
