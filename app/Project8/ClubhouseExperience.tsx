
import {
  Waves,
  Dumbbell,
  Theater,
  BookOpen,
  Coffee,
  Gamepad2,
  Briefcase,
  Trees,
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
    title: "Business Lounge",
    icon: Briefcase,
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    title: "Indoor Games",
    icon: Gamepad2,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Cafe Lounge",
    icon: Coffee,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Landscaped Gardens",
    icon: Trees,
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function ClubhouseExperience() {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-[#EF3B2D]/10 text-[#EF3B2D] font-semibold tracking-widest uppercase text-sm">
            Clubhouse Experience
          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-[#003D7A]">
            70,000+ Sq.ft Of
            <span className="block text-[#EF3B2D]">
              Lifestyle Luxury
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            One of the largest clubhouses in the region,
            designed to bring wellness, recreation,
            entertainment and community together.
          </p>
        </div>

        {/* Premium Banner */}
        <div className="mt-20 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A] p-12 md:p-16 shadow-2xl">

          <div className="grid lg:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-6xl font-black text-white">
                70K+
              </h3>
              <p className="mt-3 text-blue-100">
                Sq.ft Clubhouse
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-white">
                7
              </h3>
              <p className="mt-3 text-blue-100">
                Levels Of Amenities
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-white">
                100+
              </h3>
              <p className="mt-3 text-blue-100">
                Lifestyle Experiences
              </p>
            </div>

          </div>

        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {amenities.map((item) => {
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
                  className={`relative mx-auto w-20 h-20 rounded-3xl flex items-center justify-center ${item.color} group-hover:scale-110 transition duration-500`}
                >
                  <Icon size={38} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-[#003D7A]">
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

      </div>
    </section>
  );
}

