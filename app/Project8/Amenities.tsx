import {
  Waves,
  Dumbbell,
  Building2,
  Theater,
  BookOpen,
  Briefcase,
  Trophy,
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
    icon: Trophy,
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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#EF3B2D] font-semibold tracking-widest uppercase">
            Luxury Lifestyle
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
            World-Class Amenities
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A dedicated 70,000+ Sq.ft clubhouse designed for
            wellness, recreation, productivity and unforgettable
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-20">
          {amenities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  Premium lifestyle amenities designed to elevate
                  your everyday living experience.
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#EF3B2D] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-[#0057A8] to-[#003D7A] p-10 md:p-14 text-center">
          <h3 className="text-4xl font-bold text-white">
            70,000+ Sq.ft Dedicated Clubhouse
          </h3>

          <p className="mt-4 text-blue-100 text-lg">
            Swimming Pool • Theatre • Business Lounge • Gym •
            Spa • Library • Guest Suites • Indoor Games • Kids Zone
          </p>
        </div>

      </div>
    </section>
  );
}