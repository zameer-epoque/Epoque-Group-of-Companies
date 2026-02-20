import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Hyderabad Real Estate Market Insights 2026 | Price Trends & Investment Growth",
  description:
    "Explore Hyderabad real estate market trends, land rates, villa pricing insights, and high-growth investment corridors. Data-driven property insights for smart investors.",
  keywords: [
    "Hyderabad real estate market trends",
    "Property price trends Hyderabad",
    "Land rates in Hyderabad 2026",
    "Best areas to invest in Hyderabad",
    "Hyderabad property growth forecast",
    "ORR impact real estate Hyderabad", 
  ],
}

export default function MarketInsightsPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HERO */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Hyderabad Real Estate{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Market Insights 2026
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Stay ahead with data-driven insights into Hyderabad’s real estate
          market. Explore property price trends, land appreciation patterns,
          villa growth corridors, and investment forecasts shaping the future
          of residential and land investments.
        </p>

        {/* MARKET OVERVIEW */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Hyderabad Real Estate Market Overview
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Hyderabad continues to demonstrate stable and consistent real estate
            growth compared to other metropolitan cities. Infrastructure
            expansion, IT corridor development, and business-friendly policies
            contribute to steady demand across villas, HMDA plots, and gated
            community projects.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Limited land supply combined with increasing demand is driving
              long-term capital appreciation across key micro-markets.
            </p>
          </div>
        </div>

        {/* PRICE TRENDS */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Property Price Trends in Hyderabad
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Over the past few years, property prices in prime corridors such as
            Kokapet, Narsingi, Financial District, and Tellapur have seen steady
            upward movement. Land rates in emerging corridors near ORR and RRR
            are also witnessing early-stage appreciation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Villa Segment",
                desc: "Premium gated community villas are experiencing strong price growth due to limited inventory.",
              },
              {
                title: "HMDA Plots",
                desc: "Approved layout plots in growth corridors show consistent appreciation patterns.",
              },
              {
                title: "Open Lands",
                desc: "Strategic land banking near infrastructure expansion zones offers high upside potential.",
              },
              {
                title: "Rental Yield Zones",
                desc: "IT corridor proximity drives rental demand for premium residential properties.",
              },
            ].map((trend, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {trend.title}
                </h3>
                <p className="text-gray-400">{trend.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* HIGH GROWTH AREAS */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Best Areas to Invest in Hyderabad
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Kokapet & Financial District",
                desc: "High-end luxury investment zone driven by IT and commercial expansion.",
              },
              {
                title: "Narsingi & Tellapur",
                desc: "Rapidly developing residential villa corridors with strong demand.",
              },
              {
                title: "Shadnagar & Tukkuguda",
                desc: "Emerging land banking destinations influenced by RRR and airport growth.",
              },
              {
                title: "Adibatla & Pharma City Belt",
                desc: "Long-term industrial and IT-driven appreciation potential.",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FUTURE FORECAST */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Hyderabad Property Growth Forecast
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            Infrastructure investments such as the Regional Ring Road,
            metro expansion, and commercial corridor growth are expected to
            drive sustained property appreciation. Luxury villa supply remains
            limited, creating favorable conditions for price escalation.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Investors focusing on long-term 5–10 year horizons are positioned
              to benefit from Hyderabad’s structural growth story.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Is Hyderabad real estate still growing?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. Consistent infrastructure development and IT sector
                expansion continue to drive demand and appreciation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Which segment is best for long-term investment?
              </h3>
              <p className="text-gray-400 mt-2">
                Luxury villas and strategically located HMDA plots show strong
                long-term appreciation trends.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                How does ORR impact real estate growth?
              </h3>
              <p className="text-gray-400 mt-2">
                ORR connectivity improves accessibility and boosts land and
                residential demand in surrounding micro-markets.
              </p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Get Strategic Real Estate Insights
          </h3>
          <p className="text-gray-400 mb-6">
            Connect with Époque Realty for data-driven property investment guidance.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:scale-105 transition"
          >
            Speak With Our Experts
          </Link>
        </div>

      </div>
    </section>
  )
}
