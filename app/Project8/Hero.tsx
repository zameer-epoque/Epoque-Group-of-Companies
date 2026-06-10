
import {
  Plane,
  Building2,
  Trophy,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-24">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-100 blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-[#0057A8]">
              Premium High-Rise Community • Tukkuguda
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-[0.95] text-[#003D7A]">
              Everything
              <span className="block bg-gradient-to-r from-[#EF3B2D] to-[#ff6b5e] bg-clip-text text-transparent">
                Within
              </span>
            </h1>

            <h2 className="mt-5 text-2xl md:text-3xl font-bold text-slate-700">
              Luxury 3  BHK Residences
              <span className="block text-[#0057A8] mt-2">
                Possession by 2028 • Near Airport & Future City
              </span>
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Discover premium lake-view residences with a dedicated
              70,000+ Sq.ft clubhouse, double-height parking,
              wide balconies, privacy-focused design and
              seamless connectivity to Airport, ORR, Electronic City,
              Hardware Park and Future City.
            </p>

            {/* Location Chips */}
          

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <button className="group bg-[#EF3B2D] text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl hover:scale-105 transition-all">
                Schedule Site Visit
                <ArrowRight size={18} />
              </button>

            

            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  70K+
                </h3>
                <p className="text-slate-500 text-sm">
                  Sq.ft Clubhouse
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  100 Ft
                </h3>
                <p className="text-slate-500 text-sm">
                  Main Road
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  8 Min
                </h3>
                <p className="text-slate-500 text-sm">
                  Airport
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
                <h3 className="text-3xl font-black text-[#003D7A]">
                  2028
                </h3>
                <p className="text-slate-500 text-sm">
                  Possession
                </p>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
              <span>✓ RERA Approved</span>
              <span>✓ Lake View Homes</span>
              <span>✓ 70K+ Clubhouse</span>
              <span>✓ Future City Corridor</span>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <img
              src="/Urbanads/image1.png"
              alt="Urbanyards Shangrila"
              className="rounded-[40px] shadow-2xl"
            />

            {/* 6 Acres */}
            <div className="absolute -left-8 top-8 bg-white rounded-3xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Building2 className="text-[#EF3B2D]" />
                <div>
                  <h3 className="text-2xl font-black text-[#003D7A]">
                    6 Acres
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Premium Development
                  </p>
                </div>
              </div>
            </div>

            {/* Airport */}
            <div className="absolute -right-6 top-1/2 bg-white rounded-3xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Plane className="text-[#0057A8]" />
                <div>
                  <h3 className="text-2xl font-black text-[#003D7A]">
                    8 Min
                  </h3>
                  <p className="text-slate-500 text-sm">
                    To Airport
                  </p>
                </div>
              </div>
            </div>

            {/* Clubhouse */}
            <div className="absolute left-12 bottom-0 bg-[#0057A8] rounded-3xl px-6 py-5 shadow-2xl text-white">
              <div className="flex items-center gap-3">
                <Trophy />
                <div>
                  <p className="text-sm opacity-80">
                    Dedicated
                  </p>

                  <h3 className="text-2xl font-bold">
                    70K+ Clubhouse
                  </h3>
                </div>
              </div>
            </div>

            {/* Possession */}
            <div className="absolute right-6 bottom-0 bg-gradient-to-r from-[#EF3B2D] to-[#ff6b5e] rounded-3xl px-6 py-5 shadow-2xl text-white">
              <div>
                <p className="text-sm opacity-90">
                  Possession
                </p>

                <h3 className="text-3xl font-black">
                  2028
                </h3>

                <p className="text-xs opacity-90">
                  Second Half
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

