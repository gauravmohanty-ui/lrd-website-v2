import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Eye, FileCheck, Server } from "lucide-react";

const cards = [
  { icon: Eye, title: "PHI Never Leaves the Server", desc: "Records are opened in a secure browser via a time-limited encrypted link. Download disabled. Print disabled. Enforced at system level — by architecture." },
  { icon: Shield, title: "Permanent Audit Trail", desc: "Every action on every case logged: agent ID, timestamp, IP address. Cannot be edited or deleted." },
  { icon: FileCheck, title: "BAA Before Case One", desc: "A Business Associate Agreement is executed before any case is submitted. Not on request. Before the first record is ever touched." },
  { icon: Server, title: "AWS Enterprise Infrastructure", desc: "Three separate encrypted S3 buckets. AWS KMS encryption at rest. CloudTrail access logging. The same infrastructure used by regulated financial institutions." },
];

const SecuritySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-light py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Your client's PHI is handled like it's already under subpoena.
          </h2>
          <p className="text-body-text text-lg">
            Every access logged. Every session tracked. PHI never on any agent machine. By architecture.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className={`bg-light-gray border border-border rounded-xl p-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <c.icon className="w-8 h-8 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="text-navy font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-body-text text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <p
          className={`text-center text-body-text/60 text-sm mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.4s" }}
        >
          1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801 — U.S.-registered company. 100% U.S.-based infrastructure. Your PHI never leaves U.S. borders.
        </p>

        {/* CTA */}
        <div className={`text-center mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors">
            View pricing
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
