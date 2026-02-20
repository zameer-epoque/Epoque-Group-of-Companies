import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Real Estate Lead Generation Company in Hyderabad | High-Intent Property Leads",
    description:
        "Top real estate lead generation company in Hyderabad helping builders generate high-quality property leads through Google Ads, Meta Ads and SEO-driven funnels.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/property-lead-generation",
    },
    openGraph: {
        title:
            "Real Estate Lead Generation in Hyderabad",
        description:
            "Generate high-intent real estate leads in Hyderabad with performance-driven marketing systems.",
        url:
            "https://epoquegroup.in/realty/property-lead-generation",
        type: "website",
    },
}

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* HERO */}
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Real Estate Lead Generation Company in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed">
                    Generating high-quality real estate leads in Hyderabad requires
                    precision targeting, buyer psychology mapping and structured
                    funnel optimization. We help builders and developers in
                    Gachibowli, Kokapet, Financial District, Narsingi, Tellapur,
                    Kompally and Shamshabad generate verified property inquiries
                    that convert into serious site visits and confirmed bookings.
                </p>

                {/* AUTHORITY SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        High-Intent Lead Generation for Competitive Markets
                    </h2>

                    <p>
                        Hyderabad’s real estate landscape is highly competitive.
                        Running generic ads leads to inflated cost-per-lead (CPL)
                        and low-quality inquiries. Our structured system focuses
                        on buyer qualification, intent signals and location-based
                        segmentation to attract serious prospects.
                    </p>

                    <p>
                        Instead of volume-driven marketing, we engineer campaigns
                        that prioritize quality, site visit potential and booking
                        probability.
                    </p>
                </section>

                {/* STRATEGY */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Our Real Estate Lead Generation Framework
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Google Search Ads for high-intent property keywords</li>
                        <li>Meta Ads targeting villa & apartment buyers</li>
                        <li>Landing page funnel optimization</li>
                        <li>Luxury copywriting & value positioning</li>
                        <li>CRM integration & lead qualification</li>
                        <li>Retargeting campaigns for serious buyers</li>
                        <li>Cost-per-lead optimization models</li>
                    </ul>
                </section>

                {/* PERFORMANCE SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Optimized Cost Per Lead & Booking Growth
                    </h2>

                    <p>
                        Many developers struggle with high ad budgets and
                        inconsistent bookings. Our system reduces wasted spend
                        by filtering low-intent traffic and prioritizing
                        conversion-ready buyers.
                    </p>

                    <p>
                        Through behavioral retargeting, segmented audience
                        targeting and structured follow-up automation,
                        we increase site visit ratios and accelerate
                        booking velocity.
                    </p>
                </section>

                {/* LOCATION TARGETING */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Prime Hyderabad Micro-Markets We Target
                    </h2>

                    <p>
                        Gachibowli • Kokapet • Financial District • Narsingi •
                        Tellapur • Kompally • Shamshabad • Neopolis
                    </p>

                    <p>
                        These high-growth zones attract IT professionals,
                        CXOs, investors and premium lifestyle buyers.
                        Our geo-targeted campaigns ensure your project
                        reaches the right segment.
                    </p>
                </section>

                {/* INTERNAL LINKING */}
                <div className="pt-12 border-t border-white/10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                        Related Real Estate Services
                    </h3>

                    <div className="flex flex-wrap gap-6 text-orange-400">
                        <Link href="/realty/project-launch-marketing">
                            Project Launch Marketing
                        </Link>
                        <Link href="/realty/real-estate-sales-strategy">
                            Real Estate Sales Strategy
                        </Link>
                        <Link href="/realty/luxury-villa-marketing">
                            Luxury Villa Marketing
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
                                How do you generate property leads in Hyderabad?
                            </h3>
                            <p>
                                We use Google Search Ads, Meta Ads, SEO,
                                landing page funnels and CRM automation
                                to capture and qualify high-intent buyers.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                What is the average cost per lead?
                            </h3>
                            <p>
                                CPL varies depending on project type,
                                competition and location. Our focus
                                is on improving quality and booking ratio
                                rather than just reducing cost.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you target NRI buyers?
                            </h3>
                            <p>
                                Yes. We design campaigns targeting NRI
                                investors in UAE, USA, UK and Australia.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <div className="pt-20 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to Generate High-Intent Property Leads?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s design a structured lead system
                        that increases site visits and bookings.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Lead Generation Proposal
                    </Link>
                </div>

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="lead-generation-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Lead Generation Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

            {/* FAQ SCHEMA */}
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
                                name: "How do you generate property leads in Hyderabad?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We use Google Ads, Meta Ads, SEO and optimized landing pages to generate high-intent real estate leads."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "What is the average cost per lead?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Cost per lead depends on project competition and targeting strategy. We focus on improving booking quality rather than just lowering cost."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}