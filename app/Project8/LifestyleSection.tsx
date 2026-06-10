
import {
  Plane,
  Building2,
  Trees,
  GraduationCap,
  HeartPulse,
  Trophy,
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
    icon: Trophy,
    title: "Clubhouse",
    value: "70K+",
    color: "bg-amber-50 text-amber-600",
  },
];

export default function LifestyleSection() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Lifestyle Advantage
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {lifestyle.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-200 rounded-[32px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

                <div className="mt-4 text-5xl font-black text-[#EF3B2D]">
                  {item.value}
                </div>

                <p className="mt-3 text-slate-500">
                  Strategic connectivity for effortless living.
                </p>

              </div>
            );
          })}

        </div>

        {/* Luxury Banner */}

        <div className="mt-24 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A] p-12">

          <div className="grid md:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-black text-white">
                Future City
              </h3>

              <p className="text-blue-100 mt-2">
                Growth Corridor
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Airport
              </h3>

              <p className="text-blue-100 mt-2">
                Business Hub Access
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Lake View
              </h3>

              <p className="text-blue-100 mt-2">
                Premium Residences
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
