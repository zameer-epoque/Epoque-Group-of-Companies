import {
  ShieldCheck,
  Building2,
  Trees,
  Sparkles,
  Trophy,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Premium Architecture",
    description:
      "Modern design with luxurious residences and iconic towers.",
  },
  {
    icon: Trees,
    title: "Landscaped Living",
    description:
      "Beautiful green spaces, gardens and outdoor recreation zones.",
  },
  {
    icon: Trophy,
    title: "World-Class Amenities",
    description:
      "40,000 Sq.ft clubhouse and premium lifestyle facilities.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Community",
    description:
      "24/7 security surveillance and gated community living.",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description:
      "Excellent connectivity to schools, hospitals and business hubs.",
  },
  {
    icon: Sparkles,
    title: "Luxury Lifestyle",
    description:
      "Experience comfort, elegance and convenience every day.",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
            WHY CHOOSE MK ONE
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Crafted For Modern Luxury
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Discover a lifestyle that combines elegance,
            comfort and world-class amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111] border border-[#222222] rounded-[30px] p-8 hover:border-[#C38762] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C38762]/10 flex items-center justify-center mb-6">
                <item.icon
                  size={32}
                  className="text-[#C38762]"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#C38762] transition">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-[#C38762] rounded-[30px] p-10 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Experience Luxury Beyond Expectations
          </h3>

          <p className="mt-4 text-white/90 max-w-3xl mx-auto">
            MK One brings together architectural excellence,
            world-class amenities, premium location advantages
            and a lifestyle crafted for modern families.
          </p>
        </div>

      </div>
    </section>
  );
}