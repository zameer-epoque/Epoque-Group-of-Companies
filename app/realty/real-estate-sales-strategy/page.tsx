import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Real Estate Branding Agency in Hyderabad | Premium Project Identity Experts",
    description:
        "Professional real estate branding agency in Hyderabad helping developers build premium project identity, positioning and marketing systems.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/real-estate-branding",
    },
    openGraph: {
        title:
            "Real Estate Branding Agency in Hyderabad",
        description:
            "Luxury real estate branding services for developers in Kokapet, Gachibowli and Financial District.",
        url:
            "https://epoquegroup.in/realty/real-estate-branding",
        type: "website",
    },
}

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* HERO */}
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Real Estate Branding Agency in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed">
                    Strong branding differentiates real estate projects in
                    Hyderabad’s competitive markets like Kokapet,
                    Gachibowli, Financial District, Narsingi and Tellapur.
                    We help developers create premium brand positioning,
                    compelling visual identity and long-term market authority
                    that accelerates buyer trust and booking velocity.
                </p>

                {/* AUTHORITY SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Branding is More Than a Logo — It’s Market Positioning
                    </h2>

                    <p>
                        In Hyderabad’s growing real estate ecosystem, buyers
                        compare multiple projects before making a booking decision.
                        Projects with stronger branding command higher perceived value
                        and experience faster absorption rates.
                    </p>

                    <p>
                        Our branding strategy combines buyer psychology,
                        competitor research, location mapping and premium
                        communication frameworks to create long-term brand recall.
                    </p>
                </section>

                {/* SERVICES */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Our Real Estate Branding Services
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Project naming & identity architecture</li>
                        <li>Logo design & brand guidelines</li>
                        <li>Luxury brochure & marketing collateral strategy</li>
                        <li>High-end visual positioning frameworks</li>
                        <li>Marketing communication systems</li>
                        <li>Investor & buyer trust positioning</li>
                        <li>Premium launch brand alignment</li>
                    </ul>
                </section>

                {/* MARKET SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Why Branding Matters in Hyderabad Real Estate
                    </h2>

                    <p>
                        Buyers in micro-markets like Kokapet and Financial District
                        are increasingly brand-conscious. A well-positioned project
                        signals quality, credibility and long-term appreciation potential.
                    </p>

                    <p>
                        Strong branding reduces buyer hesitation,
                        increases referral potential and strengthens
                        premium pricing power.
                    </p>
                </section>

                {/* LOCATION TARGETING */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Premium Micro-Markets We Focus On
                    </h2>

                    <p>
                        Kokapet • Narsingi • Financial District • Gachibowli •
                        Tellapur • Neopolis • Gandipet
                    </p>

                    <p>
                        These fast-growing zones attract IT professionals,
                        entrepreneurs, CXOs and global investors.
                        Our branding systems align with these premium
                        buyer expectations.
                    </p>
                </section>

                {/* INTERNAL LINKS */}
                <div className="pt-12 border-t border-white/10 space-y-4">
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
                                Why is branding important for real estate projects?
                            </h3>
                            <p>
                                Branding increases trust, improves premium perception
                                and shortens buyer decision cycles in competitive markets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you provide branding for villa projects?
                            </h3>
                            <p>
                                Yes. We specialize in luxury villa and premium
                                apartment branding across Hyderabad’s key micro-markets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you handle complete project identity?
                            </h3>
                            <p>
                                Yes. From naming to brochures, digital creatives
                                and positioning frameworks, we build complete
                                branding ecosystems.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <div className="pt-20 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to Build a Premium Real Estate Brand?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s design a high-authority branding system
                        that attracts serious buyers and investors.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Start Your Branding Strategy
                    </Link>
                </div>

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="branding-schema"
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
                id="faq-schema"
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
                                    text: "Branding increases trust, premium perception and improves booking conversions."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide branding for villa projects?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. We specialize in luxury villa and premium apartment branding across Hyderabad."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}