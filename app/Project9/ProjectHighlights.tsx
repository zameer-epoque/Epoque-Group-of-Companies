import {
  Building2,
  Trees,
  Dumbbell,
  ShieldCheck,
  Waves,
  Car,
} from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "800+ Premium Residences",
    description: "Luxury apartments designed for modern families.",
  },
  {
    icon: Trees,
    title: "8 Acres Development",
    description: "Vast landscaped spaces and green living zones.",
  },
  {
    icon: Dumbbell,
    title: "40,000 Sq.ft Clubhouse",
    description: "Premium lifestyle amenities and recreation spaces.",
  },
  {
    icon: Waves,
    title: "Sky & Water Amenities",
    description: "Infinity pool, sky lounge and entertainment decks.",
  },
  {
    icon: Car,
    title: "EV Charging Stations",
    description: "Future-ready electric vehicle infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Advanced surveillance and gated community living.",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="highlights"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
            PROJECT HIGHLIGHTS
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Crafted For Luxury Living
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Discover an unmatched lifestyle with premium residences,
            world-class amenities and thoughtfully designed spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111] border border-[#222222] rounded-[30px] p-8 hover:border-[#C38762] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C38762]/10 flex items-center justify-center">
                <item.icon
                  size={32}
                  className="text-[#C38762]"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold group-hover:text-[#C38762] transition">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}