import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/LRD_logo.png";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Donna", href: "#donna" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-[#030a14]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/[0.05]"
            : "bg-[#030a14]"
        }`}
      >
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="Legal Record Desk" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 text-[13px] font-montserrat hover:text-teal transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13079395655"
              className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +1 (307) 939-5655
            </a>
            <Button variant="teal" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-navy flex flex-col items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white text-xl font-montserrat font-semibold hover:text-teal transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+13079395655"
              className="text-white/70 text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +1 (307) 939-5655
            </a>
            <Button variant="teal" size="lg" className="w-full max-w-xs">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
