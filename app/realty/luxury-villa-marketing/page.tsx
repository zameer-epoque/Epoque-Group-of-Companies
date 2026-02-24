import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Luxury Villa Marketing in Hyderabad | High-End Real Estate Marketing Agency",
    description:
        "Premium luxury villa marketing agency in Hyderabad targeting HNI buyers and NRI investors in Kokapet, Narsingi, Tellapur & Financial District.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/luxury-villa-marketing",
    },
    openGraph: {
        title:
            "Luxury Villa Marketing Agency in Hyderabad",
        description:
            "Specialized marketing solutions for premium villa projects targeting high-net-worth buyers and global NRI investors.",
        url:
            "https://epoquegroup.in/realty/luxury-villa-marketing",
        type: "website",
    },
}

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* HERO */}
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Luxury Villa Marketing Agency in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed">
                    We specialize in marketing ultra-luxury villa projects in
                    Kokapet, Narsingi, Tellapur, Gandipet and Financial District.
                    Our strategies are designed to attract high-net-worth individuals (HNIs),
                    CXOs, entrepreneurs and global NRI investors looking for
                    premium gated communities in Hyderabad.
                </p>

                {/* AUTHORITY CONTENT */}
                <section className="space-y-6 text-gray-400 leading-relaxed">

                    <h2 className="text-2xl font-semibold text-white">
                        Marketing Luxury Real Estate Requires Precision
                    </h2>

                    <p>
                        Luxury villa buyers are not typical property buyers.
                        They expect exclusivity, premium branding, curated experiences,
                        and refined communication. Generic marketing campaigns fail
                        in high-ticket segments.
                    </p>

                    <p>
                        Our approach combines luxury brand positioning,
                        investor psychology, data-driven paid campaigns,
                        and international audience targeting to generate
                        serious site visits and booking-ready leads.
                    </p>

                </section>

                {/* STRATEGY SECTION */}
                <section className="space-y-6">

                    <h2 className="text-2xl font-semibold text-white">
                        Our Premium Villa Marketing Framework
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Luxury brand positioning & identity development</li>
                        <li>High-converting villa landing pages</li>
                        <li>NRI & international investor targeting</li>
                        <li>Google Ads + Meta Ads high-budget optimization</li>
                        <li>Video walkthrough & drone campaign strategy</li>
                        <li>Retargeting funnels for serious buyers</li>
                    </ul>

                </section>

                {/* LOCATION TARGETING */}
                <section className="space-y-6 text-gray-400 leading-relaxed">

                    <h2 className="text-2xl font-semibold text-white">
                        Targeting Prime Villa Investment Zones in Hyderabad
                    </h2>

                    <p>
                        We actively promote luxury villas in high-growth
                        investment corridors including Kokapet SEZ,
                        Neopolis, Narsingi, Tellapur, Osman Nagar,
                        Gandipet and Financial District.
                    </p>

                    <p>
                        These zones attract global NRIs, IT professionals,
                        founders and premium lifestyle buyers.
                    </p>

                </section>

                {/* RESULTS SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">

                    <h2 className="text-2xl font-semibold text-white">
                        Revenue-Focused Campaign Execution
                    </h2>

                    <p>
                        Our campaigns are structured to reduce cost-per-lead,
                        improve lead qualification and increase booking conversion rate.
                        We focus on quality over quantity.
                    </p>

                    <p>
                        Through audience segmentation, luxury copywriting,
                        remarketing and CRM automation, we ensure that
                        every serious prospect is nurtured until site visit
                        and final booking.
                    </p>

                </section>

                {/* INTERNAL LINKING */}
                <div className="pt-10 border-t border-white/10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                        Related Real Estate Services
                    </h3>

                    <div className="flex flex-wrap gap-6 text-orange-400">
                        <Link href="/realty/real-estate-branding">
                            Real Estate Branding
                        </Link>

                        <Link href="/realty/property-lead-generation">
                            Property Lead Generation
                        </Link>

                        <Link href="/realty/project-launch-marketing">
                            Project Launch Marketing
                        </Link>
                    </div>
                </div>

                {/* FAQ */}
                <section className="pt-16 space-y-8">
                    <h2 className="text-2xl font-semibold text-white">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6 text-gray-400">

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                How is luxury villa marketing different?
                            </h3>
                            <p>
                                Luxury marketing requires premium branding,
                                high-budget paid campaigns, international targeting,
                                and exclusive positioning strategies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you target NRI investors?
                            </h3>
                            <p>
                                Yes. We run dedicated campaigns in UAE, USA,
                                UK and Australia targeting NRI villa buyers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Which platforms work best for villa lead generation?
                            </h3>
                            <p>
                                Google Ads, Meta Ads, YouTube campaigns,
                                and high-converting landing pages perform best
                                for luxury villa and gated community projects.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                How do you attract high-net-worth buyers?
                            </h3>
                            <p>
                                We use premium creatives, strategic audience targeting,
                                lookalike campaigns, and advanced remarketing funnels
                                to attract serious high-value investors.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you provide complete campaign management?
                            </h3>
                            <p>
                                Yes. We handle ad creation, targeting, landing page optimization,
                                CRM integration, and full funnel performance tracking.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                How quickly can villa campaigns generate leads?
                            </h3>
                            <p>
                                Paid campaigns can start generating qualified leads
                                within a few days, depending on targeting strategy
                                and project positioning.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <div className="pt-20 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to Market Your Luxury Villa Project?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s design a premium marketing strategy that
                        attracts high-value buyers and serious investors.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Schedule Strategy Call
                    </Link>
                </div>

            </div>

            {/* SCHEMA */}
            <Script
                id="luxury-villa-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Luxury Villa Marketing Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How is luxury villa marketing different?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Luxury villa marketing focuses on premium branding, international targeting and high-net-worth audience positioning."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you target NRI investors?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. We run global campaigns targeting NRI villa buyers in UAE, USA, UK and Australia."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}