
import {
  Plane,
  Building2,
  Trees,
  GraduationCap,
  HeartPulse,
  Landmark,
} from "lucide-react";

const lifestyle = [
  {
    icon: Plane,
    title: "Airport",
    value: "8 Min",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Building2,
    title: "Electronic City",
    value: "7 Min",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "Top Schools",
    value: "9-15 Min",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: HeartPulse,
    title: "Hospitals",
    value: "12 Min",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Trees,
    title: "Lake & Greenery",
    value: "360°",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Landmark,
    title: "Clubhouse",
    value: "70K+",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function LifestyleSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF3B2D]/10 text-[#EF3B2D] font-semibold tracking-widest uppercase text-sm">
            Lifestyle Advantage
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#003D7A] leading-tight">
            Live Close To
            <span className="block text-[#EF3B2D]">
              Everything Important
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Work, education, healthcare, recreation and connectivity —
            everything you need is just minutes away.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {lifestyle.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-100 p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#EF3B2D]/5 to-[#003D7A]/5" />

                {/* Icon */}
                <div
                  className={`relative mx-auto h-20 w-20 rounded-3xl flex items-center justify-center ${item.color} group-hover:scale-110 transition duration-500`}
                >
                  <Icon size={38} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

                {/* Value */}
                <div className="mt-4 text-6xl font-black text-[#EF3B2D]">
                  {item.value}
                </div>

                {/* Decorative Line */}
                <div className="mt-5 flex justify-center">
                  <span className="h-1 w-12 rounded-full bg-[#EF3B2D] group-hover:w-24 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Premium Banner */}
       

      </div>
    </section>
  );
}

