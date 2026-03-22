import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Button } from "@/components/ui/button";

const TrialSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    firstName: "",
    firmName: "",
    email: "",
    state: "",
    volume: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section className="section-gray py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left: Copy */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse-dot" />
              <span className="text-copper text-xs font-bold tracking-wider uppercase">
                LIMITED AVAILABILITY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-balance">
              Run your first three cases through LRD at no cost.
            </h2>
            <p className="text-body-text leading-relaxed mb-8">
              We believe the best way to evaluate LRD is to use it on real
              cases from your firm — with Donna's complete pipeline, human QC,
              the SHA-256 certificate, and a named point of contact from day
              one. No credit card. No contract. Three real cases.
            </p>
            <div className="space-y-3">
              {[
                "Three complete cases — full LRD pipeline, no cost",
                "Locked pricing for the first 12 months",
                "Named LRD contact from day one",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                  <span className="text-body-text text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white border border-border rounded-xl p-8 shadow-lg shadow-navy/5 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <div className="space-y-4">
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">
                  Firm Name
                </label>
                <input
                  type="text"
                  value={formData.firmName}
                  onChange={(e) =>
                    setFormData({ ...formData, firmName: e.target.value })
                  }
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                />
              </div>
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">
                  State
                </label>
                <select
                  value={formData.state}
                  onChange={(e) =>
                    setFormData({ ...formData, state: e.target.value })
                  }
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all bg-white"
                >
                  <option value="">Select State</option>
                  {["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-navy text-sm font-semibold block mb-1.5">
                  Monthly cases (approx.)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["1-10", "11-30", "31-75", "75+"].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setFormData({ ...formData, volume: v })}
                      className={`border rounded-lg py-2 text-sm font-semibold transition-all ${
                        formData.volume === v
                          ? "border-teal bg-teal/10 text-teal"
                          : "border-border text-body-text hover:border-teal/40"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="teal" size="lg" className="w-full mt-6">
              Request Access
            </Button>
            <p className="text-center text-body-text/50 text-xs mt-3">
              We respond within one business day.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrialSection;
