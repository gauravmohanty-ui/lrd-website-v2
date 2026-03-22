import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is record retrieval for law firms?",
    a: "Record retrieval for law firms is the process of requesting, tracking, and securing protected documents — including medical records, court filings, billing records, employment files, and other legal evidence — from providers, custodians, and agencies on behalf of attorneys. LRD manages the entire lifecycle: generating HIPAA authorizations, routing requests, following up with providers, performing quality checks, and delivering verified records to your firm's portal.",
  },
  {
    q: "How long does record retrieval take?",
    a: "The industry average for record retrieval is 30 to 60 days — largely due to passive follow-up models. At LRD, provider contact begins within 24 hours of case submission. Donna's AI quality check runs the moment records arrive. Human review is completed same day. Delivery follows immediately after verification.",
  },
  {
    q: "How much does record retrieval cost for attorneys?",
    a: "LRD charges a single flat fee per record request. This includes Donna's AI quality pipeline, human QC review on every case, missing records detection, the SHA-256 Verified Certificate, and a named point of contact. There are no per-page fees, no setup fees, no monthly fees, and no minimum volume commitments. The optional Donna Summary add-on is an additional $15.",
  },
  {
    q: "Is it legal for law firms to outsource record retrieval?",
    a: "Yes. Law firms routinely outsource record retrieval to HIPAA-compliant Business Associates. LRD executes a signed Business Associate Agreement with every law firm before any case begins. All records are stored on 100% U.S.-based AWS infrastructure and PHI never leaves U.S. borders.",
  },
  {
    q: "What is a SHA-256 Verified Certificate for medical records?",
    a: "A SHA-256 Verified Certificate is a cryptographic document that proves the integrity of your record delivery — that nothing was altered between receipt and delivery. LRD generates a unique SHA-256 hash for every complete record package and permanently locks it in AWS S3 Object Lock in COMPLIANCE mode.",
  },
  {
    q: "Why are my medical records incomplete after retrieval?",
    a: "Incomplete records are one of the most common failure points in record retrieval. Providers often send medical and billing records from separate departments. Authorizations expire without notice. LRD's Donna AI reads the entire treatment timeline and flags gaps before the records are delivered to your firm.",
  },
  {
    q: "What does HIPAA-compliant record retrieval mean?",
    a: "HIPAA-compliant record retrieval means the entire process — from authorization to delivery — follows the requirements of the Health Insurance Portability and Accountability Act. At LRD, all records are handled within encrypted U.S.-based infrastructure with full audit trails.",
  },
  {
    q: "How do I know if my records are trial-ready?",
    a: "Trial-ready records require three things: completeness, integrity, and organization. LRD addresses all three: Donna's six-check AI pipeline verifies completeness, the SHA-256 Verified Certificate establishes chain of custody, and every production is delivered as an organized, searchable PDF.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-gray py-20 lg:py-28" ref={ref}>
      <div className="container max-w-3xl">
        <h2
          className={`text-3xl md:text-4xl font-bold text-navy text-center mb-12 text-balance ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          Questions we hear most.
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white border border-border rounded-lg overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-navy font-semibold text-sm pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-body-text/40 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-0">
                  <p className="text-body-text text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
          <p className="text-body-text mb-4">Still have questions?</p>
          <a href="tel:+13079395655" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
