import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Linkedin } from "lucide-react";
import andreImg from "@/assets/andre-jones.jpeg";
import vishvaImg from "@/assets/vishva-mehta.jpeg";
import gauravImg from "@/assets/gaurav-mohanty.jpeg";

const team = [
  {
    image: gauravImg,
    name: "Gaurav Mohanty",
    title: "CEO & Founder",
    bio: "LRD was built on a single observation: record retrieval was consuming time it shouldn't, costing more than it needed to, and delivering less than it promised. Gaurav built the follow-up engine this industry was missing.",
    linkedin: "https://linkedin.com/in/gaurav-mohanty-6b649a214",
  },
  {
    image: andreImg,
    name: "Andre Jones",
    title: "COO & Co-Founder",
    bio: "With deep experience scaling operations across complex B2B service environments, Andre ensures LRD's delivery engine runs with the precision and accountability law firms require.",
    linkedin: "https://linkedin.com/in/andreojones",
  },
  {
    image: vishvaImg,
    name: "Vishva Mehta",
    title: "CMO",
    bio: "Vishva leads LRD's go-to-market strategy, brand, and growth. She built the language, positioning, and product narrative that communicates what LRD actually does — and why it matters.",
    linkedin: "https://linkedin.com/in/vishva-mehta-51346b193",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-light py-20 lg:py-28" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-balance">
            The people who built this.
          </h2>
          <p className="text-body-text text-lg">
            LRD was founded by people who saw exactly what was broken in record
            retrieval — and decided to fix it with infrastructure, not
            workarounds.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <h3 className="text-navy font-bold text-lg">{member.name}</h3>
              <p className="text-teal text-sm font-semibold mb-3">
                {member.title}
              </p>
              <p className="text-body-text text-sm leading-relaxed mb-3">
                {member.bio}
              </p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener"
                className="inline-flex text-body-text/40 hover:text-teal transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-teal/90 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
