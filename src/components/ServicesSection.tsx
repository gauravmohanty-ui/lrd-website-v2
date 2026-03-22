import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  FileText, Receipt, Scale, Briefcase, Sparkles, Building,
} from "lucide-react";

const services = [
  { icon: FileText, title: "Medical Records", desc: "Complete medical files — ER records, physician notes, radiology and imaging, pharmacy records, EMS reports. Every format, every provider." },
  { icon: Receipt, title: "Billing & Lien Documentation", desc: "Itemized billing statements, CPT codes, out-of-pocket expenses, and lien documentation for demand packages and settlement negotiations." },
  { icon: Scale, title: "Court & Public Records", desc: "Certified court filings, judgments, police and accident reports, government agency records, and third-party custodian discovery across all jurisdictions." },
  { icon: Briefcase, title: "Employment & Economic Records", desc: "Payroll records, wage statements, HR personnel files, and occupational documentation for lost wage calculations and economic damages." },
  { icon: Sparkles, title: "Donna Summary", desc: "Medical Chronology, Billing Summary, and Key Case Events — built from the actual records by Donna. Delivered 3-4 hours after verification. Add-on: +$15." },
  { icon: Building, title: "High-Volume & Enterprise", desc: "Bulk request support, dedicated account management, priority routing, and custom workflows for firms with high case volume or mass tort practices." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="section-light py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            Every type of record. One firm. One system.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:shadow-navy/5 transition-shadow duration-300 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <s.icon className="w-8 h-8 text-teal mb-4" strokeWidth={1.5} />
              <h3 className="text-navy font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-body-text text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <a href="#process" className="inline-flex items-center gap-2 text-teal font-semibold text-sm hover:underline transition-colors">
            See how it works →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
