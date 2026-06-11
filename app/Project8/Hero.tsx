
import {
  Plane,
  Building2,
  Landmark,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-20 md:pb-24">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 h-[300px] md:h-[500px] w-[300px] md:w-[500px] rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 h-[300px] md:h-[500px] w-[300px] md:w-[500px] rounded-full bg-red-100 blur-3xl opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs md:text-sm font-semibold text-[#0057A8]">
              Premium High-Rise Community • Tukkuguda
            </div>

            <h1 className="mt-6 md:mt-8 text-4xl sm:text-5xl md:text-7xl font-black leading-[1] text-[#003D7A]">
              Everything
              <span className="block bg-gradient-to-r from-[#EF3B2D] to-[#ff6b5e] bg-clip-text text-transparent">
                Within
              </span>
            </h1>

            <h2 className="mt-4 md:mt-5 text-xl sm:text-2xl md:text-3xl font-bold text-slate-700">
              Luxury 3 BHK Residences

              <span className="block text-[#0057A8] mt-2 text-base md:text-2xl">
                Possession by 2028 • Near Airport & Future City
              </span>
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Discover premium lake-view residences with a dedicated
              70,000+ Sq.ft clubhouse, double-height parking,
              wide balconies, privacy-focused design and seamless
              connectivity to Airport, ORR, Electronic City,
              Hardware Park and Future City.
            </p>

            {/* CTA */}
            <div className="mt-8 md:mt-10">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#EF3B2D] text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all"
              >
                Schedule Site Visit
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5 bg-white shadow-sm">
                <h3 className="text-2xl md:text-3xl font-black text-[#003D7A]">
                  70K+
                </h3>
                <p className="text-slate-500 text-sm">
                  Sq.ft Clubhouse
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5 bg-white shadow-sm">
                <h3 className="text-2xl md:text-3xl font-black text-[#003D7A]">
                  100 Ft
                </h3>
                <p className="text-slate-500 text-sm">
                  Main Road
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5 bg-white shadow-sm">
                <h3 className="text-2xl md:text-3xl font-black text-[#003D7A]">
                  8 Min
                </h3>
                <p className="text-slate-500 text-sm">
                  Airport
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-4 md:p-5 bg-white shadow-sm">
                <h3 className="text-2xl md:text-3xl font-black text-[#003D7A]">
                  2028
                </h3>
                <p className="text-slate-500 text-sm">
                  Possession
                </p>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm text-slate-500">
              <span>✓ RERA Approved</span>
              <span>✓ Lake View Homes</span>
              <span>✓ 70K+ Clubhouse</span>
              <span>✓ Future City Corridor</span>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            <img
              src="/Urbanads/image1.png"
              alt="Urbanyards Shangrila"
              className="w-full rounded-[24px] md:rounded-[40px] shadow-2xl"
            />

            {/* Mobile Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6 lg:hidden">

              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <h3 className="text-xl font-black text-[#003D7A]">
                  6 Acres
                </h3>
                <p className="text-sm text-slate-500">
                  Development
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <h3 className="text-xl font-black text-[#003D7A]">
                  8 Min
                </h3>
                <p className="text-sm text-slate-500">
                  Airport
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <h3 className="text-xl font-black text-[#003D7A]">
                  70K+
                </h3>
                <p className="text-sm text-slate-500">
                  Clubhouse
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg text-center">
                <h3 className="text-xl font-black text-[#003D7A]">
                  2028
                </h3>
                <p className="text-sm text-slate-500">
                  Possession
                </p>
              </div>

            </div>

            {/* Desktop Floating Cards */}

            <div className="hidden lg:block absolute -left-8 top-8 bg-white rounded-3xl p-5 shadow-2xl">
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

            <div className="hidden lg:block absolute -right-6 top-1/2 bg-white rounded-3xl p-5 shadow-2xl">
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

            <div className="hidden lg:block absolute left-12 bottom-0 bg-[#0057A8] rounded-3xl px-6 py-5 shadow-2xl text-white">
              <div className="flex items-center gap-3">
                <Landmark />
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

            <div className="hidden lg:block absolute right-6 bottom-0 bg-gradient-to-r from-[#EF3B2D] to-[#ff6b5e] rounded-3xl px-6 py-5 shadow-2xl text-white">
              <div>
                <p className="text-sm opacity-90">
                  Possession
                </p>

                <h3 className="text-3xl font-black">
                  2028
                </h3>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

