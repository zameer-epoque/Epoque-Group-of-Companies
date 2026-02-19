import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Luxury Villas in Hyderabad | Gated Community Villas for Sale",
  description:
    "Explore luxury villas for sale in Hyderabad including gated community villas, ready to move properties, and premium villa projects in Kokapet, Narsingi & Financial District.",
  keywords: [
    "Luxury villas in Hyderabad",
    "Villas for sale in Hyderabad",
    "Gated community villas Hyderabad",
    "Villas in Kokapet",
    "Villas in Narsingi",
  ],
}

export default function LuxuryVillasPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* H1 */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Luxury Villas for Sale in{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Hyderabad
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Discover premium gated community villas in Kokapet, Narsingi,
          Financial District, and Gachibowli. Époque Realty offers verified
          luxury villa projects designed for long-term appreciation,
          independent living, and high ROI investment potential.
        </p>

        {/* Why Invest Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Why Invest in Luxury Villas in Hyderabad?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-400">
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Strong IT & Financial District growth driving demand
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Limited villa inventory increases appreciation value
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              Land ownership advantage compared to apartments
            </li>
            <li className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20">
              High resale value and premium rental demand
            </li>
          </ul>
        </div>

        {/* Locations Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Prime Locations for Villas in Hyderabad
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Kokapet",
                desc: "High-end luxury villa projects near Financial District with strong ROI potential.",
              },
              {
                title: "Narsingi",
                desc: "Premium gated communities with ORR connectivity and IT corridor access.",
              },
              {
                title: "Gachibowli",
                desc: "Established IT hub with consistent demand for villas.",
              },
              {
                title: "Financial District",
                desc: "Ultra-premium segment villas with strong long-term appreciation.",
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

        {/* Amenities Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Amenities in Gated Community Villas
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-400">
            {[
              "Clubhouse",
              "Swimming Pool",
              "24/7 Security",
              "Landscaped Parks",
              "Gym & Sports Courts",
              "CCTV Surveillance",
              "Power Backup",
              "Underground Utilities",
            ].map((amenity, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-4 rounded-lg border border-orange-500/20 text-center"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Are villas in Hyderabad a good investment?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. Due to land appreciation, infrastructure expansion,
                and limited villa supply, luxury villas in Hyderabad offer
                strong long-term returns.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                What is the price range of luxury villas?
              </h3>
              <p className="text-gray-400 mt-2">
                Pricing varies by location and amenities. Kokapet and
                Financial District fall under the premium segment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Are HMDA approved villas safe?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. HMDA approval ensures regulatory compliance and legal
                layout permissions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Looking to Buy Luxury Villas in Hyderabad?
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with Époque Realty for verified projects and transparent pricing.
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
