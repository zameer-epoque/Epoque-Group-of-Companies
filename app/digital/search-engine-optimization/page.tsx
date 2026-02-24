import { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
    title:
        "SEO Services in Hyderabad | Best Search Engine Optimization Company India",
    description:
        "Top-rated SEO company in Hyderabad offering technical SEO, local SEO, on-page optimization and Google ranking services across India.",
    keywords: [
        "SEO services in Hyderabad",
        "Best SEO company Hyderabad",
        "Search Engine Optimization India",
        "Local SEO Hyderabad",
        "Technical SEO experts India",
        "Google ranking services Hyderabad",
    ],
    alternates: {
        canonical: "https://epoquegroup.in/search-engine-optimization",
    },
    openGraph: {
        title: "Professional SEO Services in Hyderabad & India",
        description:
            "Rank higher on Google with our data-driven SEO strategies tailored for Hyderabad and Indian businesses.",
        url: "https://epoquegroup.in/search-engine-optimization",
        type: "website",
    },
}

export default function SEOPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-28 px-6 text-center">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        SEO Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We help businesses rank on Page #1 of Google through structured,
                        white-hat SEO strategies. From local SEO in Hyderabad to
                        national-level organic campaigns across India, our data-driven
                        approach increases traffic, leads and revenue.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-block px-10 py-4 rounded-full font-semibold
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
            text-black hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Free SEO Audit
                    </Link>
                </div>
            </section>

            {/* ================= AUTHORITY CONTENT ================= */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-5xl mx-auto text-gray-400 space-y-8 leading-relaxed">

                    <h2 className="text-3xl font-semibold text-white">
                        Why SEO is Critical for Hyderabad Businesses
                    </h2>

                    <p>
                        Hyderabad is one of India’s fastest-growing business hubs.
                        Whether you operate in Gachibowli, Financial District,
                        Hitech City or Banjara Hills, ranking on Google determines
                        your visibility and credibility. Without strong SEO,
                        businesses lose qualified organic traffic to competitors.
                    </p>

                    <p>
                        Our SEO services combine technical optimization,
                        strategic content development, authority link building,
                        and local search optimization to create sustainable
                        long-term ranking growth.
                    </p>

                </div>
            </section>

            {/* ================= SERVICES GRID ================= */}
            <section className="py-28 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                        Our Comprehensive SEO Solutions
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "On-Page SEO",
                                desc: "Keyword optimization, content structure, meta tags, schema implementation and internal linking strategies."
                            },
                            {
                                title: "Technical SEO",
                                desc: "Website speed optimization, mobile responsiveness, crawlability, indexing improvements and structured data setup."
                            },
                            {
                                title: "Local SEO Hyderabad",
                                desc: "Google Business Profile optimization, map ranking strategies and geo-targeted local search visibility."
                            },
                            {
                                title: "Link Building & Authority",
                                desc: "White-hat backlink acquisition and digital PR campaigns to increase domain authority."
                            },
                            {
                                title: "E-Commerce SEO",
                                desc: "Category optimization, product SEO, structured navigation and conversion-driven content."
                            },
                            {
                                title: "SEO Reporting & Analytics",
                                desc: "Monthly ranking reports, keyword tracking, traffic analysis and ROI-focused performance insights."
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative p-[1.5px] rounded-3xl
                bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                hover:shadow-[0_0_50px_rgba(199,154,59,0.6)]
                transition-all duration-500"
                            >
                                <div className="rounded-3xl p-10
                bg-gradient-to-br from-[#111111] to-[#1a1a1a]
                border border-white/5
                group-hover:-translate-y-3
                group-hover:scale-[1.04]
                transition-all duration-500">

                                    <h3 className="text-xl font-semibold mb-6 group-hover:text-[#C79A3B] transition">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <ul className="space-y-6 text-gray-400 text-lg">
                        <li>✔ 100% White Hat SEO Techniques</li>
                        <li>✔ Hyderabad & India Market Expertise</li>
                        <li>✔ Dedicated SEO Specialists</li>
                        <li>✔ Transparent Monthly Reporting</li>
                        <li>✔ Sustainable Organic Growth</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Unlike short-term tactics, our SEO strategies focus on
                        building authority, content depth and technical excellence.
                        We aim for stable, long-term rankings rather than temporary spikes.
                    </p>

                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="py-24 border-t border-white/5 px-6">
  <div className="max-w-4xl mx-auto">

    <h2 className="text-3xl font-semibold text-center mb-14">
      Frequently Asked Questions
    </h2>

    <div className="space-y-10 text-gray-400">

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          How long does SEO take?
        </h3>
        <p className="mt-3">
          SEO typically takes 3–6 months to show measurable improvements,
          depending on industry competition and website authority.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          Why is Local SEO important in Hyderabad?
        </h3>
        <p className="mt-3">
          Local SEO increases visibility in Google Maps and helps
          businesses attract nearby customers actively searching for services.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          What is the difference between SEO and PPC?
        </h3>
        <p className="mt-3">
          SEO focuses on organic rankings and long-term growth,
          while PPC provides immediate paid visibility on search engines.
          A combined strategy delivers the best digital results.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          Do you provide technical SEO services?
        </h3>
        <p className="mt-3">
          Yes, we handle technical SEO including site audits,
          page speed optimization, schema implementation,
          indexing fixes, and crawl error resolution.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          How do you choose keywords for SEO campaigns?
        </h3>
        <p className="mt-3">
          We perform detailed keyword research based on search intent,
          competition level, and business goals to target high-converting
          and relevant keywords.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-orange-400">
          Do you provide monthly SEO reports?
        </h3>
        <p className="mt-3">
          Yes, we provide transparent monthly reports including keyword rankings,
          traffic growth, backlinks, and performance insights.
        </p>
      </div>

    </div>
  </div>
</section>

            {/* ================= CTA ================= */}
            <section className="py-24 text-center border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Rank #1 on Google?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let’s build a powerful organic growth strategy for your business.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-12 py-4 rounded-full font-semibold
          bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
          text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Contact SEO Experts
                </Link>
            </section>

            {/* ================= SCHEMA ================= */}
            <Script
                id="seo-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "SEO Services",
                        areaServed: "Hyderabad & India",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

        </div>
    )
}