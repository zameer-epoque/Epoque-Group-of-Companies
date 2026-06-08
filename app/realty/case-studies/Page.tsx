import Link from "next/link";

export default function RealtyCaseStudiesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Real Estate Marketing Case Studies
        </h1>

        <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
          Discover how our real estate marketing strategies have helped
          developers, builders, and property consultants generate qualified
          leads, increase project visibility, improve sales performance, and
          achieve measurable business growth.
        </p>
      </section>

      {/* Case Studies */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold mb-4">
            Luxury Villa Campaign
          </h2>

          <p className="text-[#C79A3B] font-semibold mb-4">
            1,200+ Qualified Leads
          </p>

          <p className="text-gray-400 leading-relaxed">
            Executed a comprehensive digital marketing campaign using Meta Ads,
            Google Ads, and high-converting landing pages to generate premium
            buyer enquiries for a luxury villa project.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold mb-4">
            Premium Apartment Launch
          </h2>

          <p className="text-[#C79A3B] font-semibold mb-4">
            300% Increase in Site Visits
          </p>

          <p className="text-gray-400 leading-relaxed">
            Increased project visibility through SEO, paid advertising, content
            marketing, and conversion-focused campaign optimization.
          </p>
        </div>

        <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
          <h2 className="text-2xl font-semibold mb-4">
            Gated Community Project
          </h2>

          <p className="text-[#C79A3B] font-semibold mb-4">
            45% Lower Cost Per Lead
          </p>

          <p className="text-gray-400 leading-relaxed">
            Improved lead quality and reduced advertising costs through audience
            segmentation, remarketing campaigns, and optimized creative
            strategies.
          </p>
        </div>
      </section>

      {/* Why Case Studies Matter */}
      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-6">
          Proven Results That Drive Property Sales
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Every real estate project is unique. Our marketing approach combines
          strategic planning, performance advertising, SEO, lead nurturing, and
          analytics to help developers achieve measurable business outcomes.
          These case studies demonstrate how effective marketing can accelerate
          project awareness, generate qualified enquiries, and improve sales
          performance.
        </p>
      </section>

      {/* Internal Links */}
      <section className="mt-20 border-t border-white/10 pt-12">
        <h2 className="text-2xl font-semibold mb-6">
          Explore Related Real Estate Services
        </h2>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/realty"
            className="px-6 py-3 rounded-full bg-[#C79A3B] text-black font-medium hover:bg-white transition"
          >
            Real Estate Marketing
          </Link>

          <Link
            href="/realty/real-estate-sales-strategy"
            className="px-6 py-3 rounded-full bg-[#C79A3B] text-black font-medium hover:bg-white transition"
          >
            Real Estate Sales Strategy
          </Link>

          <Link
            href="/digital/best-digital-marketing-agency-in-hyderabad"
            className="px-6 py-3 rounded-full bg-[#C79A3B] text-black font-medium hover:bg-white transition"
          >
            Digital Marketing Services
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-[#C79A3B] text-[#C79A3B] hover:bg-[#C79A3B] hover:text-black transition"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}