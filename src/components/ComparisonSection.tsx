import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "AI quality check on every case", industry: "Not offered by any traditional provider", lrd: "Donna. Six checks. Every case." },
  { feature: "Human QC on every production", industry: "Flagged cases only, if at all", lrd: "Every case. Firm rule. No exceptions." },
  { feature: "Court-verified certificate", industry: "Not available in this market", lrd: "SHA-256. Locked. Cannot be altered." },
  { feature: "Missing records detection", industry: "You find out at deposition", lrd: "Donna flags gaps before delivery" },
  { feature: "HIPAA authorization generation", industry: "Manual preparation. Days of back-and-forth", lrd: "90 seconds. Donna-built. State-specific." },
  { feature: "Electronic signatures", industry: "DocuSign required. PDFs emailed.", lrd: "Built in. No third-party account needed." },
  { feature: "Named POC for your firm", industry: "Support tickets and rotating contacts", lrd: "Standard. Every firm. Day one." },
  { feature: "No-records-found fee", industry: "Charged regardless of result", lrd: "$25. Industry-low. Transparent." },
];

const ComparisonSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-gray py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            The standard in record retrieval has been set.
          </h2>
        </div>

        <div
          className={`overflow-x-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.1s" }}
        >
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-navy/10">
                <th className="text-left py-4 px-4 text-navy font-bold text-sm w-1/3">
                  Feature
                </th>
                <th className="text-left py-4 px-4 text-body-text/60 font-semibold text-sm w-1/3">
                  THE INDUSTRY STANDARD
                </th>
                <th className="text-left py-4 px-4 text-teal font-bold text-sm w-1/3">
                  LEGAL RECORD DESK
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-navy/5 hover:bg-white transition-colors"
                >
                  <td className="py-4 px-4 text-navy font-semibold text-sm">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-body-text/60 text-sm flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {row.industry}
                  </td>
                  <td className="py-4 px-4 text-navy text-sm">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      {row.lrd}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-navy text-lg font-semibold">
            All of this. <span className="text-copper font-bold text-2xl">$40 flat fee</span> per request. Everything included.
          </p>
          <div className="mt-6">
            <a href="#pricing" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
