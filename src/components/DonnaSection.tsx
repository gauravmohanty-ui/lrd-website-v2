import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonnaPersona from "@/components/DonnaPersona";

const checks = [
  { num: "1", title: "Patient Identity", desc: "Name, DOB, record number matched exactly" },
  { num: "2", title: "Authorization Valid", desc: "Present, dated, not expired" },
  { num: "3", title: "Completeness", desc: "Every date range covered" },
  { num: "4", title: "Correct Provider", desc: "Right facility, no wrong-provider mix" },
  { num: "5", title: "Duplicates", desc: "Repeated pages flagged and removed" },
  { num: "6", title: "Billing Present", desc: "Itemized billing confirmed" },
];

/* ─── Main Section ─── */
const DonnaSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: vis2 } = useScrollReveal();

  return (
    <section id="donna" className="section-dark py-20 lg:py-28 overflow-hidden" ref={ref}>
      <div className="container">
        {/* Orb + Intro combined */}
        <div className={`text-center max-w-3xl mx-auto mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Sparkles className="w-4 h-4" />
            DONNA
          </div>
        </div>

        {/* AI Persona */}
        <div
          className={`mb-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.05s" }}
        >
          <DonnaPersona />
        </div>

        <div className={`text-center max-w-3xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance leading-tight">
            LRD's AI System
          </h2>
          <p className="text-2xl text-white/80 font-semibold mb-2">She works every case.</p>
          <p className="text-white/50 text-lg">Silently. Completely. Without exception.</p>
        </div>

        {/* Quote */}
        <div className={`max-w-3xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          <blockquote className="border-l-4 border-teal pl-6 py-2">
            <p className="text-white/70 text-base leading-relaxed italic">
              "Donna is not a chatbot. She's LRD's AI system embedded across the entire retrieval workflow — generating
              authorizations, routing cases, running quality checks, and building your medical summaries. Before any
              record reaches you, Donna has already reviewed it."
            </p>
          </blockquote>
        </div>

        {/* Six checks */}
        <div ref={ref2}>
          <h3 className={`text-center text-white font-bold text-xl mb-10 ${vis2 ? "animate-fade-up" : "opacity-0"}`}>
            Six checks. Every case.
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checks.map((check, i) => (
              <div
                key={check.num}
                className={`bg-white/5 border border-white/10 rounded-lg p-5 ${vis2 ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-teal font-bold text-2xl shrink-0">{check.num}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{check.title}</p>
                    <p className="text-white/50 text-sm mt-1">{check.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Donna handles your admin */}
        <div className={`mt-16 max-w-3xl mx-auto text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.25s" }}>
          <h3 className="text-white font-bold text-2xl mb-4">Donna handles your admin. You handle your cases.</h3>
          <p className="text-white/50 text-base leading-relaxed">
            The hours your team spends on hold, following up, preparing authorizations, and chasing completeness — that's
            not legal work. That's admin. Donna takes it. What stays with your team: case strategy, client relationships,
            demand packages, courtroom preparation. That's the work.
          </p>
        </div>

        {/* PHI & Human QC guarantee */}
        <div className={`mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-teal text-xs font-bold tracking-wider uppercase mb-2">PHI PROTECTION</p>
            <p className="text-white font-semibold mb-2">Donna never sees real PHI.</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Donna operates on de-identified and abstracted data only. Actual protected health information never enters
              the AI pipeline — by architecture, not policy.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <p className="text-teal text-xs font-bold tracking-wider uppercase mb-2">HUMAN OVERSIGHT</p>
            <p className="text-white font-semibold mb-2">Every Donna result is human-approved.</p>
            <p className="text-white/50 text-sm leading-relaxed">
              No AI output is ever delivered without a human QC agent reviewing and approving it first. Every case. No
              exceptions.
            </p>
          </div>
        </div>

        {/* Summary add-on */}
        <div
          className={`mt-10 copper-highlight border border-copper/20 rounded-xl p-8 max-w-2xl mx-auto text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.35s" }}
        >
          <p className="text-copper text-xs font-bold tracking-wider uppercase mb-2">OPTIONAL ADD-ON</p>
          <h3 className="text-white text-2xl font-bold mb-3">
            Donna Summary · <span className="text-copper">+$15</span>
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            After records are verified, Donna reads the complete record set and delivers Medical Chronology, Billing
            Summary, and Key Case Events — in 3 to 4 hours. Built from the actual records. Not a template.
          </p>
          <Button variant="copper" size="default">
            Learn everything Donna does
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonnaSection;
