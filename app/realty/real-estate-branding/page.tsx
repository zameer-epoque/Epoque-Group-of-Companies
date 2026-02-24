import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Real Estate Branding Agency in Hyderabad | Premium Project Identity Experts",
    description:
        "Leading real estate branding agency in Hyderabad helping developers build luxury project identity, positioning strategy, brochures and premium marketing systems.",
    keywords: [
        "Real estate branding Hyderabad",
        "Property branding agency Hyderabad",
        "Luxury project branding Hyderabad",
        "Real estate marketing identity",
        "Villa project branding Hyderabad"
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/real-estate-branding"
    },
    openGraph: {
        title:
            "Real Estate Branding Agency in Hyderabad",
        description:
            "Luxury real estate branding services for developers in Kokapet, Gachibowli, Financial District and Narsingi.",
        url:
            "https://epoquegroup.in/realty/real-estate-branding",
        type: "website"
    }
}

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">

            <div className="max-w-5xl mx-auto space-y-14">

                {/* HERO */}
                <section className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Real Estate Branding Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        In Hyderabad’s competitive real estate market, branding is the
                        difference between a project that gets noticed and one that gets booked.
                        We help developers build powerful project identities, luxury positioning
                        systems and premium communication frameworks that increase trust,
                        premium perception and booking velocity.
                    </p>
                </section>

                {/* AUTHORITY SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Branding is Strategic Positioning — Not Just Design
                    </h2>

                    <p>
                        Buyers in Kokapet, Financial District, Gachibowli and Narsingi
                        compare multiple projects before making a decision. Projects with
                        strong identity systems command higher perceived value and close
                        bookings faster.
                    </p>

                    <p>
                        Our real estate branding approach integrates buyer psychology,
                        competitor mapping, micro-market positioning and premium storytelling
                        to create long-term brand authority.
                    </p>
                </section>

                {/* SERVICES */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Our Real Estate Branding Services in Hyderabad
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Project Naming Strategy & Identity Architecture</li>
                        <li>Luxury Logo Design & Brand Guidelines</li>
                        <li>Premium Brochure & Sales Deck Design</li>
                        <li>Luxury Villa & Apartment Positioning Frameworks</li>
                        <li>Marketing Communication Systems</li>
                        <li>Investor & NRI Trust Positioning</li>
                        <li>Pre-Launch & Launch Brand Alignment</li>
                    </ul>
                </section>

                {/* WHY BRANDING MATTERS */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Why Branding Matters in Hyderabad Real Estate
                    </h2>

                    <p>
                        Hyderabad’s premium micro-markets attract IT professionals,
                        global investors and high-net-worth buyers. These segments
                        value credibility, aesthetics and trust signals.
                    </p>

                    <p>
                        Strong branding increases:
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>Perceived project value</li>
                        <li>Premium pricing power</li>
                        <li>Buyer recall & referrals</li>
                        <li>Shorter sales cycles</li>
                    </ul>
                </section>

                {/* MICRO MARKETS */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Premium Micro-Markets We Specialize In
                    </h2>

                    <p>
                        Kokapet • Narsingi • Financial District • Gachibowli • Tellapur •
                        Neopolis • Gandipet • Shamshabad
                    </p>

                    <p>
                        We design branding systems tailored to each micro-market’s
                        buyer expectations and lifestyle positioning.
                    </p>
                </section>

                {/* INTERNAL LINKS */}
                <section className="pt-10 border-t border-white/10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                        Related Real Estate Services
                    </h3>

                    <div className="flex flex-wrap gap-6 text-orange-400">
                        <Link href="/realty/luxury-villa-marketing">
                            Luxury Villa Marketing
                        </Link>
                        <Link href="/realty/project-launch-marketing">
                            Project Launch Marketing
                        </Link>
                        <Link href="/realty/property-lead-generation">
                            Property Lead Generation
                        </Link>
                        <Link href="/realty/real-estate-sales-strategy">
                            Real Estate Sales Strategy
                        </Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="pt-16 space-y-8">
                    <h2 className="text-2xl font-semibold text-white">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6 text-gray-400">

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Why is branding important for real estate projects?
                            </h3>
                            <p>
                                Branding builds trust, improves premium perception
                                and increases booking conversions in competitive markets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you provide branding for villa projects?
                            </h3>
                            <p>
                                Yes. We specialize in luxury villa and premium apartment
                                branding across Hyderabad’s key growth corridors.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you handle complete project identity systems?
                            </h3>
                            <p>
                                Yes. From naming and logo creation to brochures,
                                website identity and launch creative systems,
                                we build complete branding ecosystems.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                How long does a real estate branding project take?
                            </h3>
                            <p>
                                Typically, a complete branding project takes 2–4 weeks
                                depending on project scale, revisions and launch timelines.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you provide marketing creatives for project launches?
                            </h3>
                            <p>
                                Yes. We design brochures, hoardings, digital ads,
                                landing pages and launch creatives aligned with
                                the project’s positioning strategy.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Can branding improve booking conversions?
                            </h3>
                            <p>
                                Absolutely. Strong branding enhances buyer confidence,
                                differentiates the project from competitors,
                                and improves overall conversion rates.
                            </p>
                        </div>

                    </div>
                </section>
                {/* CTA */}
                <section className="pt-20 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to Build a Premium Real Estate Brand?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s craft a powerful branding system that attracts
                        serious buyers and investors in Hyderabad.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Start Your Branding Strategy
                    </Link>
                </section>

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="branding-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Branding Services",
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
                id="branding-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Why is branding important for real estate projects?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Branding increases trust, improves premium perception and strengthens booking conversions."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide branding for villa projects?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we specialize in luxury villa and premium apartment branding across Hyderabad."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}