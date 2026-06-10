
import {
  Waves,
  Dumbbell,
  Theater,
  BookOpen,
  Coffee,
  Trophy,
  Briefcase,
  Trees,
} from "lucide-react";

const amenities = [
  {
    title: "Swimming Pool",
    icon: Waves,
  },
  {
    title: "Fitness Center",
    icon: Dumbbell,
  },
  {
    title: "Mini Theatre",
    icon: Theater,
  },
  {
    title: "Library",
    icon: BookOpen,
  },
  {
    title: "Business Lounge",
    icon: Briefcase,
  },
  {
    title: "Indoor Games",
    icon: Trophy,
  },
  {
    title: "Cafe Lounge",
    icon: Coffee,
  },
  {
    title: "Landscaped Gardens",
    icon: Trees,
  },
];

export default function ClubhouseExperience() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Clubhouse Experience
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
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

        {/* Main Banner */}

        <div className="mt-20 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A] p-12">

          <div className="grid lg:grid-cols-3 gap-10 text-center">

            <div>
              <h3 className="text-6xl font-black text-white">
                70K+
              </h3>

              <p className="text-blue-100 mt-3">
                Sq.ft Clubhouse
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-white">
                7
              </h3>

              <p className="text-blue-100 mt-3">
                Levels Of Amenities
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black text-white">
                100+
              </h3>

              <p className="text-blue-100 mt-3">
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
                className="group rounded-[32px] bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="h-16 w-16 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-[#EF3B2D] transition">

                  <Icon
                    size={30}
                    className="text-[#0057A8] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-6 text-xl font-bold text-[#003D7A]">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  Designed for everyday luxury and comfort.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

