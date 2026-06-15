import {
  Waves,
  Dumbbell,
  Trophy,
  Coffee,
  Film,
  Building,
  Trees,
  Tent,
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Infinity Pool" },
  { icon: Dumbbell, title: "Premium Gym" },
  { icon: Trophy, title: "Golf Simulator" },
  { icon: Coffee, title: "Sky Bar" },
  { icon: Film, title: "Preview Theatre" },
  { icon: Building, title: "Co-working Space" },
  { icon: Trees, title: "Landscaped Gardens" },
  { icon: Tent, title: "Sky Camping" },
];

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-[#C38762] uppercase tracking-[5px] text-sm">
            LIFESTYLE AMENITIES
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Extraordinary Amenities
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            Experience luxury with world-class facilities designed
            for recreation, wellness, entertainment and community living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
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

              <h3 className="text-xl font-semibold group-hover:text-[#C38762] transition duration-300">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Premium lifestyle experience with thoughtfully
                curated spaces and modern conveniences.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}