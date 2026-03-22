import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/LRD_logo.png";

const Footer = () => {
  return (
    <footer className="section-dark border-t border-white/10 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Legal Record Desk" className="h-10 w-auto mb-4" />
            <p className="text-white/50 text-xs mb-2">
              1309 Coffeen Avenue STE 1200
              <br />
              Sheridan, Wyoming 82801
            </p>
            <p className="text-white/50 text-sm italic mb-4">
              Record retrieval with integrity.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+13079395655"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                +1 (307) 939-5655
              </a>
              <a
                href="mailto:info@legalrecorddesk.com"
                className="flex items-center gap-2 text-white/50 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                info@legalrecorddesk.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <div className="space-y-2">
              {["Medical Records", "Billing & Liens", "Court Records", "Employment Records", "Donna Summary", "Enterprise"].map(
                (link) => (
                  <a
                    key={link}
                    href="#services"
                    className="block text-white/40 text-sm hover:text-teal transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <div className="space-y-2">
              {[
                { label: "How It Works", href: "#process" },
                { label: "Pricing", href: "/pricing" },
                { label: "Donna", href: "/donna" },
                { label: "Security", href: "/security" },
                { label: "About", href: "/about" },
              ].map((link) =>
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-white/40 text-sm hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block text-white/40 text-sm hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Compliance
            </h4>
            <div className="space-y-2">
              {["HIPAA Compliant", "BAA Available", "SHA-256 Verified", "AWS Infrastructure", "U.S.-Registered"].map(
                (item) => (
                  <span key={item} className="block text-white/40 text-sm">
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Legal Record Desk Inc
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              BAA Request
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
