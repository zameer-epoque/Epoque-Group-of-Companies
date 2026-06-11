
import {
  Waves,
  Dumbbell,
  Building2,
  Theater,
  BookOpen,
  Briefcase,
  Gamepad2,
  HeartPulse,
  Trees,
  Users,
  Baby,
  Coffee,
} from "lucide-react";

const amenities = [
  {
    title: "Swimming Pool",
    icon: Waves,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Fitness Center",
    icon: Dumbbell,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Banquet Hall",
    icon: Building2,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Mini Theatre",
    icon: Theater,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Library",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Co-Working Space",
    icon: Briefcase,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Indoor Games",
    icon: Gamepad2,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Spa & Wellness",
    icon: HeartPulse,
    color: "bg-pink-50 text-pink-600",
  },
  {
    title: "Aroma Garden",
    icon: Trees,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Community Lounge",
    icon: Users,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Kids Play Area",
    icon: Baby,
    color: "bg-sky-50 text-sky-600",
  },
  {
    title: "Cafe & Social Hub",
    icon: Coffee,
    color: "bg-yellow-50 text-yellow-600",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-28 bg-gradient-to-b from-white to-slate-50  ">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF3B2D]/10 text-[#EF3B2D] font-semibold tracking-widest uppercase text-sm">
            Luxury Lifestyle
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#003D7A] leading-tight">
            World-Class Amenities
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Experience luxury living with thoughtfully curated
            amenities designed for wellness, recreation,
            productivity, and family enjoyment.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EF3B2D]/5 to-[#003D7A]/5" />

                {/* Icon */}
                <div
                  className={`relative mx-auto w-20 h-20 rounded-3xl flex items-center justify-center ${item.color} group-hover:scale-110 transition duration-500`}
                >
                  <Icon size={38} />
                </div>

                {/* Title */}
                <h3 className="relative mt-6 text-xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

                {/* Decorative Line */}
                <div className="mt-5 flex justify-center">
                  <span className="h-1 w-12 rounded-full bg-[#EF3B2D] group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
       
      </div>
    </section>
  );
}

