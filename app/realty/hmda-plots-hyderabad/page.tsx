import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "HMDA Plots in Hyderabad | HMDA Approved Open Plots for Sale",
  description:
    "Explore HMDA approved plots in Hyderabad including open plots near ORR, Kokapet, Shadnagar & emerging investment zones. Secure and legally verified plot investments with high ROI potential.",
  keywords: [
    "HMDA plots in Hyderabad",
    "HMDA approved plots Hyderabad",
    "Open plots for sale in Hyderabad",
    "HMDA layout plots",
    "Plots near ORR Hyderabad",
  ],
}

export default function HMDAPlotsPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          HMDA Approved Plots in{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Hyderabad
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Invest in legally verified HMDA approved plots in Hyderabad across
          high-growth corridors near ORR, Shadnagar, Tukkuguda, and emerging
          residential zones. Époque Realty provides secure, transparent,
          and ROI-focused plot investment opportunities.
        </p>

        {/* WHY HMDA SECTION */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose HMDA Approved Plots?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-400">
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Legal layout approval from HMDA authority
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Clear documentation & secure registration
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Higher resale value compared to non-approved layouts
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Strong long-term land appreciation potential
            </li>
          </ul>
        </div>

        {/* INVESTMENT HOTSPOTS */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Top Investment Locations for HMDA Plots
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Shadnagar",
                desc: "Rapidly growing corridor near Pharma City and Regional Ring Road expansion.",
              },
              {
                title: "Tukkuguda",
                desc: "Strategic location near ORR and airport zone with strong appreciation.",
              },
              {
                title: "Kokapet Extension",
                desc: "Premium investment belt near Financial District.",
              },
              {
                title: "Adibatla",
                desc: "Emerging IT and aerospace hub with long-term growth potential.",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20 hover:border-orange-400 transition"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {location.title}
                </h3>
                <p className="text-gray-400">{location.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI SECTION */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            ROI Potential of HMDA Layout Plots
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Land investment in Hyderabad has historically delivered strong
            appreciation returns. HMDA approved plots benefit from infrastructure
            expansion such as ORR connectivity, IT corridor growth, and upcoming
            government development projects.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Strategic land banking in early growth zones can generate
              significant long-term capital appreciation.
            </p>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                What is HMDA approval?
              </h3>
              <p className="text-gray-400 mt-2">
                HMDA approval ensures the layout is legally approved by the
                Hyderabad Metropolitan Development Authority, confirming proper
                planning and compliance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Are HMDA plots safe to invest in?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. HMDA plots provide higher legal security and resale value
                compared to unapproved layouts.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Which area is best for plot investment in Hyderabad?
              </h3>
              <p className="text-gray-400 mt-2">
                Emerging corridors like Shadnagar, Tukkuguda, and Adibatla
                show strong growth potential due to infrastructure expansion.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Looking to Invest in HMDA Approved Plots?
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with Époque Realty for verified layout plots and secure land investments.
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
