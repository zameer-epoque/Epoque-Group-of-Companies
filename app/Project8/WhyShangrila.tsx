
import {
  Trees,
  Plane,
  Building2,
  Waves,
  Trophy,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Dual Lake Views",
    description:
      "Wake up to breathtaking lake views and open landscapes.",
    icon: Waves,
  },
  {
    title: "Airport Connectivity",
    description:
      "Just 8 minutes from RGIA Airport and 3 minutes to ORR Exit 14.",
    icon: Plane,
  },
  {
    title: "Future City Growth Zone",
    description:
      "Located near Bharath Future City and Hyderabad's next growth corridor.",
    icon: Building2,
  },
  {
    title: "Natural Ecosystem",
    description:
      "Surrounded by greenery, fresh air and protected green belts.",
    icon: Trees,
  },
  {
    title: "70,000+ Sq.ft Clubhouse",
    description:
      "Luxury clubhouse designed for wellness, leisure and lifestyle.",
    icon: Trophy,
  },
  {
    title: "Privacy Focused Design",
    description:
      "Wide balconies, staggered windows and dedicated AC utility zones.",
    icon: ShieldCheck,
  },
];

export default function WhyShangrila() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="relative">

            <img
           src="/Urbanads/image1.png"
              alt="Why Shangrila"
              className="rounded-[40px] shadow-2xl"
            />

            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-xl">

              <div className="grid grid-cols-3 gap-6 text-center">

                <div>
                  <h3 className="text-3xl font-black text-[#003D7A]">
                    6
                  </h3>
                  <p className="text-sm text-slate-500">
                    Acres
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#003D7A]">
                    20
                  </h3>
                  <p className="text-sm text-slate-500">
                    Floors
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black text-[#003D7A]">
                    70K+
                  </h3>
                  <p className="text-sm text-slate-500">
                    Clubhouse
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
              Why Choose Urbanyards Shangrila
            </span>

            <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
              Designed For
              <span className="block text-[#EF3B2D]">
                Exceptional Living
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              A premium high-rise community crafted for modern
              families seeking connectivity, luxury, privacy and
              nature in one destination.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-5 rounded-2xl border border-slate-200 p-5 hover:border-[#0057A8] transition-all"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                      <Icon
                        size={28}
                        className="text-[#0057A8]"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-xl text-[#003D7A]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

        

          </div>

        </div>

        {/* Bottom Luxury Banner */}

        <div className="mt-24 rounded-[40px] overflow-hidden bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A] p-12">

          <div className="grid md:grid-cols-5 gap-8 text-center">

            <div>
              <h3 className="text-4xl font-black text-white">
                100 Ft
              </h3>
              <p className="text-blue-100">
                Road Frontage
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                8 Min
              </h3>
              <p className="text-blue-100">
                Airport Access
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                3 Min
              </h3>
              <p className="text-blue-100">
                To ORR
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                2028
              </h3>
              <p className="text-blue-100">
                Handover
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                Lake
              </h3>
              <p className="text-blue-100">
                View Homes
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

