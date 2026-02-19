import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gated Community Projects in Hyderabad | Luxury Villas & Premium Living",
  description:
    "Explore luxury gated community villas in Hyderabad across Kokapet, Narsingi, Financial District & ORR zones. Secure, premium residential communities with high ROI potential.",
  keywords: [
    "Gated community villas in Hyderabad",
    "Gated community projects Hyderabad",
    "Luxury gated communities Hyderabad",
    "Premium villas Hyderabad",
    "Secure residential communities Hyderabad",
  ],
}

export default function GatedCommunityProjectsPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Gated Community Villas in{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Hyderabad
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Discover premium gated community projects in Hyderabad offering
          luxury villas, secure infrastructure, modern amenities, and long-term
          investment growth. Époque Realty connects buyers and investors with
          high-demand residential communities in Kokapet, Narsingi,
          Financial District, and ORR growth corridors.
        </p>

        {/* WHY GATED COMMUNITIES */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Why Choose Gated Community Projects in Hyderabad?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Gated community villas provide a secure, well-planned lifestyle
            environment with enhanced property value appreciation. As Hyderabad
            expands its IT and infrastructure network, premium residential
            communities continue to see rising demand among professionals,
            NRIs, and investors.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "24/7 Security & CCTV Surveillance",
              "Premium Clubhouse & Lifestyle Amenities",
              "Land Ownership with Independent Living",
              "Higher Resale & Rental Demand",
              "Structured Layout & Underground Utilities",
              "Community Living with Privacy",
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

        {/* PRIME LOCATIONS */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Prime Locations for Gated Community Villas
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Kokapet",
                desc: "Premium villa communities near Financial District with ultra luxury segment growth.",
              },
              {
                title: "Narsingi",
                desc: "High-demand residential belt with ORR access and IT proximity.",
              },
              {
                title: "Financial District",
                desc: "Top-tier luxury gated communities serving high-income professionals.",
              },
              {
                title: "Tellapur & Osman Nagar",
                desc: "Emerging villa corridors with long-term capital appreciation potential.",
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

        {/* AMENITIES SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Lifestyle Amenities in Luxury Gated Communities
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Grand Clubhouse",
              "Swimming Pool & Spa",
              "Gym & Fitness Center",
              "Indoor & Outdoor Sports Courts",
              "Landscaped Parks",
              "Children’s Play Areas",
              "Jogging Tracks",
              "Power Backup & Water Management",
              "Dedicated Visitor Parking",
            ].map((amenity, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-5 rounded-lg border border-orange-500/20 text-center text-gray-400"
              >
                {amenity}
              </div>
            ))}
          </div>
        </div>

        {/* INVESTMENT POTENTIAL */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Investment Potential of Gated Community Villas
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Luxury gated community projects in Hyderabad have consistently
            shown higher appreciation compared to standalone houses and
            apartments. Limited villa supply combined with growing IT
            infrastructure creates strong long-term capital growth.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Strategic villa investments in prime corridors can deliver
              superior ROI through both appreciation and rental income.
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
                Are gated community villas a good investment?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. Due to limited supply, land ownership benefits, and high
                lifestyle demand, gated villas offer strong appreciation and
                resale value.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Which areas are best for gated community projects?
              </h3>
              <p className="text-gray-400 mt-2">
                Kokapet, Narsingi, Financial District, and Tellapur are among
                the top high-growth villa corridors in Hyderabad.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Do gated communities provide better security?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. Most projects offer 24/7 security, CCTV monitoring,
                controlled access gates, and community management systems.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Explore Premium Gated Community Projects Today
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with Époque Realty for verified luxury villa projects and secure investments.
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
