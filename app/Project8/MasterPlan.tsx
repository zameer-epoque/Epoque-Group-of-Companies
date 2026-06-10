
import {
  Building2,
  Trees,
  Trophy,
  MapPin,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "2 Premium Towers",
    desc: "Modern high-rise towers with luxury residences.",
  },
  {
    icon: Trees,
    title: "Open Green Spaces",
    desc: "Landscaped gardens and natural ecosystem.",
  },
  {
    icon: Trophy,
    title: "70K+ Clubhouse",
    desc: "Dedicated lifestyle and wellness destination.",
  },
  {
    icon: MapPin,
    title: "100 Ft Road Frontage",
    desc: "Excellent visibility and connectivity.",
  },
];

export default function MasterPlan() {
  return (
    <section className="py-32 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Master Plan
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
            Thoughtfully Planned
            <span className="block text-[#EF3B2D]">
              For Better Living
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Every corner of Urbanyards Shangrila has been designed
            to maximize space, greenery, privacy and lifestyle.
          </p>

        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">

          {/* Master Plan Image */}

          <div className="relative">

            <img
              src="/master-plan.webp"
              alt="Master Plan"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl px-6 py-5 shadow-xl">
              <h3 className="text-3xl font-black text-[#003D7A]">
                6 Acres
              </h3>

              <p className="text-slate-500">
                Premium Development
              </p>
            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-4xl font-black text-[#003D7A]">
              Designed Around Nature,
              Lifestyle & Connectivity
            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Spread across 6 acres, Urbanyards Shangrila
              combines premium residences, landscaped open spaces,
              luxury amenities and future-ready infrastructure.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon
                        size={26}
                        className="text-[#0057A8]"
                      />
                    </div>

                    <h4 className="mt-4 text-xl font-bold text-[#003D7A]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-slate-600 text-sm">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  2
                </h3>
                <p className="text-slate-500 text-sm">
                  Towers
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  20
                </h3>
                <p className="text-slate-500 text-sm">
                  Floors
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  70K+
                </h3>
                <p className="text-slate-500 text-sm">
                  Clubhouse
                </p>
              </div>

            </div>

            {/* CTA */}

            <button className="mt-10 bg-[#EF3B2D] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition">
              Download Master Plan
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

