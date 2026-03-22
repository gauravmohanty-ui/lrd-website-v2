import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-20 lg:py-28" ref={ref}>
      <div className="container text-center max-w-2xl mx-auto">
        <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance leading-tight">
            Run a case. See Donna work.
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Three cases at no cost. Named contact from day one. No commitment
            beyond that.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="teal" size="lg">
              Get Started
            </Button>
            <Button variant="hero-outline" size="lg">
              Schedule a Call
            </Button>
          </div>
          <a
            href="tel:+13079395655"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            +1 (307) 939-5655
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
