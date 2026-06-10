
import { BedDouble, Ruler, Download } from "lucide-react";

const plans = [
  {
    title: "Premium 3 BHK",
    size: "1997 - 2168 Sq.ft",
    image: "/floor-plan-3bhk.webp",
  },
  {
    title: "Luxury 4 BHK",
    size: "2434 - 2900 Sq.ft",
    image: "/floor-plan-4bhk.webp",
  },
];

export default function FloorPlans() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span className="uppercase tracking-[4px] text-[#EF3B2D] font-semibold">
            Floor Plans
          </span>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-[#003D7A]">
            Spacious Homes
            <span className="block text-[#EF3B2D]">
              Designed For Modern Living
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Thoughtfully planned residences with wide balconies,
            maximum ventilation and privacy-focused layouts.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {plans.map((plan) => (
            <div
              key={plan.title}
              className="group rounded-[40px] overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-black text-[#003D7A]">
                  {plan.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-slate-600">
                  <BedDouble size={18} />
                  Premium Residence
                </div>

                <div className="flex items-center gap-2 mt-3 text-slate-600">
                  <Ruler size={18} />
                  {plan.size}
                </div>

                <div className="flex gap-4 mt-8">

                  <button className="bg-[#EF3B2D] text-white px-6 py-3 rounded-xl font-semibold">
                    View Plan
                  </button>

                  <button className="border border-[#0057A8] text-[#0057A8] px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
                    <Download size={18} />
                    Download
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Stats */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-[#003D7A] via-[#0057A8] to-[#003D7A] p-12">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-5xl font-black text-white">
                3 BHK
              </h3>
              <p className="text-blue-100">
                1997 - 2168 Sq.ft
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                4 BHK
              </h3>
              <p className="text-blue-100">
                2434 - 2900 Sq.ft
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Wide
              </h3>
              <p className="text-blue-100">
                Balconies
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black text-white">
                Smart
              </h3>
              <p className="text-blue-100">
                Layout Design
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

