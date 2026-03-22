import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ClipboardCheck, Zap, Download } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: ClipboardCheck,
    title: "Submit in under five minutes",
    desc: "Patient name, date of birth, provider, date range. Donna generates your state-specific HIPAA authorization in 90 seconds. Returning patient on the same case? Donna pre-fills everything automatically. Electronic signatures built in.",
  },
  {
    num: "02",
    icon: Zap,
    title: "We handle the pursuit",
    desc: "Donna contacts the provider within 24 hours. Smart Routing identifies the fastest path — digital API, EHR direct, automated fax, or direct outreach. Every contact logged with timestamp and summary. Sent to you.",
  },
  {
    num: "03",
    icon: Download,
    title: "Download everything",
    desc: "Donna runs six quality checks the moment records arrive. A named LRD QC agent reviews every page. You download: organized searchable PDF, QC verification report, missing records report, and the SHA-256 Verified Certificate.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="process" className="section-gray py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            You submit. Donna takes it from there.
          </h2>
          <p className="text-body-text text-lg">
            Three things from your team. Everything else is handled.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-white rounded-xl p-8 shadow-lg shadow-navy/5 border border-border ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-teal font-bold text-sm tracking-wider">
                  STEP {step.num}
                </span>
              </div>
              <step.icon className="w-10 h-10 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="text-navy font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-body-text text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#donna" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors">
              See how Donna works
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline transition-colors">
              View pricing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
