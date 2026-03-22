import { useState, useEffect } from "react";
import logo from "@/assets/LRD_logo.png";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"center" | "shrink" | "done">("center");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("shrink"), 1400);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        backgroundColor: "hsl(var(--navy))",
        transition: "opacity 0.5s ease-out",
        opacity: phase === "shrink" ? 0 : 1,
        pointerEvents: phase === "shrink" ? "none" : "auto",
      }}
    >
      <img
        src={logo}
        alt="Legal Record Desk"
        className="select-none"
        style={{
          height: phase === "center" ? "80px" : "40px",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          transform:
            phase === "center"
              ? "scale(1) translate(0, 0)"
              : "scale(0.5) translate(-50vw, -45vh)",
          opacity: phase === "center" ? 1 : 0,
          filter:
            phase === "center"
              ? "drop-shadow(0 0 40px rgba(31,110,140,0.5)) drop-shadow(0 0 80px rgba(31,110,140,0.25))"
              : "none",
        }}
      />
      {/* Subtle pulse ring behind logo */}
      {phase === "center" && (
        <div
          className="absolute rounded-full"
          style={{
            width: 200,
            height: 200,
            border: "1px solid rgba(31,110,140,0.2)",
            animation: "splash-pulse 1.5s ease-out infinite",
          }}
        />
      )}
    </div>
  );
};

export default SplashScreen;
