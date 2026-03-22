import { useState } from "react";
import { Shield, FileCheck, Lock, Users, Server, Calculator, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import logo from "@/assets/LRD_logo.png";

const trustBadges = [
  { icon: Shield, label: "HIPAA Compliant" },
  { icon: FileCheck, label: "BAA With Every Firm" },
  { icon: Lock, label: "SHA-256 Verified" },
  { icon: Users, label: "Human QC Every Case" },
  { icon: Server, label: "U.S. Infrastructure" },
];

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="section-dark min-h-screen flex items-center pt-[68px]" ref={ref}>
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div
            className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <div>
              <p className="text-teal font-semibold text-sm tracking-wider uppercase mb-4">
                Record Retrieval. Reimagined.
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-white text-balance">
                We retrieve your records.{" "}
                <span className="text-teal">Donna verifies them.</span>
              </h1>
            </div>
            <p className="text-white/70 text-lg max-w-lg leading-relaxed">
              Six quality checks. Missing records flagged before delivery.
              State-specific authorizations in 90 seconds. A cryptographic
              certificate with every case. A named person who knows your firm.
            </p>
            <div className="copper-highlight inline-block rounded-lg px-5 py-3">
              <span className="text-copper font-bold text-4xl">$40</span>
              <span className="text-white/80 text-sm ml-2">
                flat fee per request
              </span>
              <span className="text-white/50 text-xs block mt-1">
                Donna QC · Human Review · SHA-256 Certificate · All included
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button variant="teal" size="lg">
                Get Started
              </Button>
              <Button variant="hero-outline" size="lg">
                Meet Donna
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-white/60 text-xs"
                >
                  <badge.icon className="w-3.5 h-3.5 text-teal" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calculators */}
          <div
            className={`${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <HeroCalculators />
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroCalculators = () => {
  const [activeTab, setActiveTab] = useState<"cost" | "time">("cost");

  // Cost calculator state
  const [currentRate, setCurrentRate] = useState("");
  const [perPageFee, setPerPageFee] = useState("");
  const [avgPages, setAvgPages] = useState("");
  const [monthlyRequests, setMonthlyRequests] = useState("");

  // Time calculator state
  const [paralegalRate, setParalegalRate] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");

  const LRD_RATE = 40; // internal calculation only

  // Cost calculations
  const currentRateNum = parseFloat(currentRate) || 0;
  const perPageFeeNum = parseFloat(perPageFee) || 0;
  const avgPagesNum = parseFloat(avgPages) || 0;
  const monthlyRequestsNum = parseFloat(monthlyRequests) || 0;
  const trueCostPerRecord = currentRateNum + perPageFeeNum * avgPagesNum;
  const monthlySpendCurrent = trueCostPerRecord * monthlyRequestsNum;
  const monthlySpendLRD = LRD_RATE * monthlyRequestsNum;
  const monthlySavings = monthlySpendCurrent - monthlySpendLRD;
  const annualSavings = monthlySavings * 12;
  const hasCostInput = currentRateNum > 0 && monthlyRequestsNum > 0;

  // Time calculations
  const paralegalRateNum = parseFloat(paralegalRate) || 0;
  const hoursPerWeekNum = parseFloat(hoursPerWeek) || 0;
  const monthlyHours = hoursPerWeekNum * 4.33;
  const monthlyCost = monthlyHours * paralegalRateNum;
  const donnaHandles = monthlyHours * 0.8;
  const recoveredValue = donnaHandles * paralegalRateNum;
  const hasTimeInput = paralegalRateNum > 0 && hoursPerWeekNum > 0;

  const inputClass =
    "w-full bg-white/[0.06] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/20 transition-colors tabular-nums";

  const labelClass = "block text-white/50 text-[11px] font-semibold mb-1 tracking-wide uppercase";

  const fmt = (n: number) =>
    n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bg-[#030a14] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
      {/* Calculator header */}
      <div className="bg-[#020810] px-5 py-4 flex items-center justify-between border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <img src={logo} alt="LRD" className="h-6 w-auto opacity-90" />
          <span className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">
            Savings Calculator
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-teal/60" />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/[0.06]">
        <button
          onClick={() => setActiveTab("cost")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold transition-colors ${
            activeTab === "cost"
              ? "text-teal bg-teal/[0.06] border-b-2 border-teal"
              : "text-white/40 hover:text-white/60"
          }`}
        >
          <Calculator className="w-3.5 h-3.5" />
          Cost Calculator
        </button>
        <button
          onClick={() => setActiveTab("time")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold transition-colors ${
            activeTab === "time"
              ? "text-copper bg-copper/[0.06] border-b-2 border-copper"
              : "text-white/40 hover:text-white/60"
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          Time Calculator
        </button>
      </div>

      {/* Body */}
      <div className="p-5">
        {activeTab === "cost" ? (
          <>
            <div className="space-y-3 mb-5">
              <div>
                <label className={labelClass}>Current rate per record ($)</label>
                <input type="number" placeholder="e.g. 65" className={inputClass} value={currentRate} onChange={(e) => setCurrentRate(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Per-page fee ($) — if any</label>
                <input type="number" placeholder="e.g. 0.50" className={inputClass} value={perPageFee} onChange={(e) => setPerPageFee(e.target.value)} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Avg. pages / record</label>
                  <input type="number" placeholder="200" className={inputClass} value={avgPages} onChange={(e) => setAvgPages(e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Monthly requests</label>
                  <input type="number" placeholder="25" className={inputClass} value={monthlyRequests} onChange={(e) => setMonthlyRequests(e.target.value)} />
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
              {hasCostInput ? (
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">True cost/record</span>
                    <span className="text-white font-bold tabular-nums">${fmt(trueCostPerRecord)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Monthly spend</span>
                    <span className="text-white/70 tabular-nums">${fmt(monthlySpendCurrent)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">With LRD (flat rate)</span>
                    <span className="text-teal font-semibold tabular-nums">${fmt(monthlySpendLRD)}</span>
                  </div>
                  <div className="border-t border-white/[0.08] pt-2.5 mt-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Monthly savings</span>
                      <span className={`font-bold tabular-nums ${monthlySavings > 0 ? "text-teal" : "text-copper"}`}>${fmt(monthlySavings)}</span>
                    </div>
                  </div>
                  <div className="bg-teal/[0.08] rounded-lg px-4 py-3 flex justify-between items-center mt-1">
                    <span className="text-white font-semibold text-sm">Annual savings</span>
                    <span className={`font-bold text-lg tabular-nums ${annualSavings > 0 ? "text-teal" : "text-copper"}`}>
                      ${annualSavings.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-white/25 text-sm text-center py-3">
                  Enter your current pricing above
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="space-y-3 mb-5">
              <div>
                <label className={labelClass}>Paralegal hourly rate ($)</label>
                <input type="number" placeholder="e.g. 35" className={inputClass} value={paralegalRate} onChange={(e) => setParalegalRate(e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Hours per week chasing records</label>
                <input type="number" placeholder="e.g. 12" className={inputClass} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)} />
              </div>
            </div>

            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/[0.06]">
              {hasTimeInput ? (
                <div className="space-y-2.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Monthly hours on admin</span>
                    <span className="text-white font-bold tabular-nums">{monthlyHours.toFixed(1)} hrs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Cost to the firm</span>
                    <span className="text-white/70 tabular-nums">${fmt(monthlyCost)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Hours Donna handles</span>
                    <span className="text-teal font-semibold tabular-nums">{donnaHandles.toFixed(1)} hrs</span>
                  </div>
                  <div className="border-t border-white/[0.08] pt-2.5 mt-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/50">Time recovered</span>
                      <span className="text-teal font-bold tabular-nums">{donnaHandles.toFixed(1)} hrs/mo</span>
                    </div>
                  </div>
                  <div className="bg-copper/[0.08] rounded-lg px-4 py-3 flex justify-between items-center mt-1">
                    <span className="text-white font-semibold text-sm">Value recovered</span>
                    <span className="text-copper font-bold text-lg tabular-nums">
                      ${recoveredValue.toLocaleString("en-US", { maximumFractionDigits: 0 })}/mo
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-white/25 text-sm text-center py-3">
                  Enter your paralegal details above
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
