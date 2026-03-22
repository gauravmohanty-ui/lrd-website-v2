import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Lock, Scale, HardDrive, Gift } from "lucide-react";

const features = [
  { icon: Scale, title: "Court Ready", desc: "Full chain of custody. Timestamp. Provider source. Hash. All in one document." },
  { icon: Lock, title: "Deposition Proof", desc: "If authenticity is challenged, the hash resolves it in seconds." },
  { icon: HardDrive, title: "Permanently Locked", desc: "AWS Object Lock, COMPLIANCE mode. No one overrides it. Including LRD." },
  { icon: Gift, title: "In Every Delivery", desc: "Not a premium add-on. Part of every case from day one." },
];

const CertificateSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-dark py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <p className="text-teal text-xs font-bold tracking-wider uppercase mb-4">
              THE LRD VERIFIED CERTIFICATE
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance leading-tight">
              The only proof that nothing was altered. Ever.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Every LRD delivery includes a SHA-256 Verified Certificate — a
              cryptographic fingerprint of your complete record package,
              permanently locked in AWS S3 Object Lock. The hash either matches
              the delivered records or it doesn't. No ambiguity.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`bg-white/5 border border-white/10 rounded-lg p-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                >
                  <f.icon className="w-5 h-5 text-teal mb-2" />
                  <p className="text-white font-semibold text-sm">{f.title}</p>
                  <p className="text-white/50 text-xs mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Certificate mockup */}
          <div
            className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-teal" />
                <span className="text-white font-bold text-sm">
                  Legal Record Desk
                </span>
                <span className="text-white/40 text-xs ml-auto">
                  Verified Delivery Certificate
                </span>
              </div>
              <div className="space-y-4 text-sm">
                {[
                  ["Case ID:", "LRD-2026-00847"],
                  ["Patient Reference:", "[Protected — HIPAA]"],
                  ["Record Types:", "Medical Records, Billing Records"],
                  ["SHA-256 Hash:", "3a7f9c2b1d4e8f6a..."],
                  ["Timestamp:", "2026-03-15 14:32:07 UTC"],
                  ["Provider:", "Memorial Regional Medical Center"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between border-b border-white/5 pb-3"
                  >
                    <span className="text-white/50">{label}</span>
                    <span className="text-white font-medium text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <span className="text-teal text-xs font-semibold">
                  ✓ Verified by LRD
                </span>
                <p className="text-white/30 text-xs mt-2">
                  Permanently locked · AWS S3 Object Lock · COMPLIANCE mode
                </p>
              </div>
            </div>
          </div>

          {/* CTA below certificate */}
          <div className={`text-center mt-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
            <a href="#services" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline transition-colors">
              See all services →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
