import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Open Lands in Hyderabad | Farm Lands & Agricultural Land for Sale",
  description:
    "Explore open lands, farm lands, and agricultural land for sale in Hyderabad. High appreciation investment zones near ORR, Shadnagar, Tukkuguda & emerging corridors.",
  keywords: [
    "Open lands in Hyderabad",
    "Farm lands near Hyderabad",
    "Agricultural land for sale Hyderabad",
    "Land investment Hyderabad",
    "Weekend farmhouse plots Hyderabad",
  ],
}

export default function OpenLandsHyderabadPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HERO SECTION */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Open Lands & Farm Lands in{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Hyderabad
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Invest in open lands, agricultural plots, and farmhouse lands in Hyderabad’s
          fast-growing corridors. Époque Realty offers legally verified land
          investment opportunities designed for long-term capital appreciation,
          land banking, and sustainable wealth creation.
        </p>

        {/* WHY LAND INVESTMENT */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Why Invest in Open Lands in Hyderabad?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Land remains one of the most stable and appreciating asset classes.
            Unlike apartments, open lands offer complete ownership of the
            underlying land, ensuring higher long-term appreciation potential.
            With infrastructure expansion such as ORR, Regional Ring Road (RRR),
            and IT corridor growth, land investments in Hyderabad continue to
            attract investors.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "High Long-Term Capital Appreciation",
              "Low Maintenance Asset",
              "Ideal for Land Banking",
              "Future Development Potential",
              "Suitable for Farmhouses & Weekend Homes",
              "Better Control Over Asset",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20 hover:border-orange-400 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* TYPES OF LANDS */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Types of Land Available
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Agricultural Lands",
                desc: "Ideal for farming, long-term holding, or conversion potential in high-growth zones.",
              },
              {
                title: "Farmhouse Lands",
                desc: "Perfect for weekend homes and lifestyle investments near Hyderabad outskirts.",
              },
              {
                title: "Land Banking Parcels",
                desc: "Strategic land holdings in early-growth corridors for maximum ROI.",
              },
              {
                title: "Conversion-Ready Lands",
                desc: "Lands positioned for future residential or commercial development.",
              },
            ].map((type, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-400">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TOP LOCATIONS */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Prime Locations for Open Land Investment
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Shadnagar",
                desc: "High potential growth zone near Pharma City and infrastructure expansion.",
              },
              {
                title: "Tukkuguda",
                desc: "Strategic belt near ORR and airport corridor with strong appreciation trends.",
              },
              {
                title: "Yacharam",
                desc: "Emerging corridor for agricultural and land banking investments.",
              },
              {
                title: "Ibrahimpatnam",
                desc: "Affordable land investment destination with long-term growth prospects.",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {location.title}
                </h3>
                <p className="text-gray-400">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INVESTMENT STRATEGY */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Strategic Land Investment Approach
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Successful land investment requires location analysis, legal due
            diligence, and future infrastructure tracking. Époque Realty
            provides data-driven insights and verified documentation to ensure
            secure and profitable land acquisitions.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Early-stage land acquisition in developing corridors can generate
              exponential appreciation over 5–10 years.
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Is land investment better than apartments?
              </h3>
              <p className="text-gray-400 mt-2">
                Land typically offers higher appreciation over time due to
                scarcity and full ownership advantages.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Can I build a farmhouse on agricultural land?
              </h3>
              <p className="text-gray-400 mt-2">
                Construction permissions depend on local zoning regulations.
                Legal verification is essential before development.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                What are the best areas for open land investment?
              </h3>
              <p className="text-gray-400 mt-2">
                Shadnagar, Tukkuguda, Yacharam, and Ibrahimpatnam are strong
                emerging investment corridors.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Explore Verified Open Land Opportunities
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with Époque Realty for secure land investments and strategic advisory.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:scale-105 transition"
          >
            Schedule Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}
