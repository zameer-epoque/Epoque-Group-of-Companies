import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Real Estate Investment Advisory in Hyderabad | High ROI Property Guidance",
  description:
    "Expert real estate investment advisory in Hyderabad. Discover high ROI villas, HMDA plots, land banking & pre-launch property opportunities with data-driven investment strategies.",
  keywords: [
    "Real estate investment in Hyderabad",
    "Property investment advisory Hyderabad",
    "High ROI property Hyderabad",
    "Land banking Hyderabad",
    "Pre-launch property investment",
    "NRI property investment Hyderabad",
  ],
}

export default function InvestmentAdvisoryPage() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* HERO SECTION */}
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
          Real Estate Investment Advisory in{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Hyderabad
          </span>
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-4xl">
          Strategic real estate investment advisory services focused on
          high ROI property opportunities in Hyderabad. Époque Realty
          provides data-driven insights across luxury villas, HMDA plots,
          gated community projects, and land banking corridors.
        </p>

        {/* WHY HYDERABAD INVESTMENT */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Why Invest in Hyderabad Real Estate?
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Hyderabad continues to emerge as one of India’s most stable and
            high-growth real estate markets. Strong IT expansion, infrastructure
            development, ORR & RRR connectivity, and business-friendly policies
            drive consistent property appreciation across residential corridors.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Consistent Property Appreciation",
              "Growing IT & Financial District Expansion",
              "Affordable Entry Compared to Tier-1 Cities",
              "Strong Rental Yield Potential",
              "Infrastructure Growth (ORR, RRR, Metro)",
              "Stable Political & Economic Environment",
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

        {/* INVESTMENT STRATEGIES */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Our Investment Strategies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Luxury Villa Investment",
                desc: "Targeting limited inventory gated community villas in prime corridors for long-term capital appreciation.",
              },
              {
                title: "HMDA Plot Investments",
                desc: "Securing legally approved plots in early-growth zones for land banking and future development gains.",
              },
              {
                title: "Pre-Launch Opportunities",
                desc: "Identifying discounted pre-launch projects with strong builder credibility and upside potential.",
              },
              {
                title: "Land Banking Strategy",
                desc: "Acquiring strategic land parcels in infrastructure-driven corridors for exponential long-term ROI.",
              },
            ].map((strategy, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-xl border border-orange-500/20"
              >
                <h3 className="text-lg font-semibold text-orange-400 mb-3">
                  {strategy.title}
                </h3>
                <p className="text-gray-400">{strategy.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ROI ANALYSIS SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Data-Driven ROI Analysis
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6">
            We evaluate location growth, infrastructure development, builder
            credibility, pricing trends, and demand cycles before recommending
            any property investment. Our advisory approach minimizes risk and
            maximizes long-term returns.
          </p>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-orange-500/20">
            <p className="text-gray-300 text-lg">
              Smart investment decisions are built on data, not speculation.
            </p>
          </div>
        </div>

        {/* NRI SERVICES */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            NRI Property Investment Services
          </h2>

          <p className="text-gray-400 leading-relaxed">
            We assist NRIs in secure property investments across Hyderabad.
            From virtual site tours and documentation verification to
            transaction support, Époque Realty ensures seamless investment
            experiences for overseas buyers.
          </p>
        </div>

        {/* FAQ SECTION */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                What is the best real estate investment in Hyderabad?
              </h3>
              <p className="text-gray-400 mt-2">
                Luxury villas and HMDA plots in infrastructure-driven corridors
                offer strong appreciation and high resale demand.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Is land banking profitable in Hyderabad?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. Strategic land banking in emerging zones can deliver
                significant capital gains over 5–10 years.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-400">
                Do you provide ROI projections?
              </h3>
              <p className="text-gray-400 mt-2">
                Yes. We provide structured ROI analysis based on market data,
                location trends, and growth forecasts.
              </p>
            </div>

          </div>
        </div>

        {/* STRONG CTA */}
        <div className="text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Start Your High ROI Property Investment Journey
          </h3>
          <p className="text-gray-400 mb-6">
            Schedule a strategic consultation with Époque Realty today.
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium hover:scale-105 transition"
          >
            Book Investment Consultation
          </Link>
        </div>

      </div>
    </section>
  )
}
