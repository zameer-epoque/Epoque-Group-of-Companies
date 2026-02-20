import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Real Estate Project Launch Marketing in Hyderabad | Pre-Launch & Booking Campaign Experts",
    description:
        "Expert real estate project launch marketing agency in Hyderabad helping builders generate pre-launch buzz, site visits and early bookings through strategic digital campaigns.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/project-launch-marketing",
    },
    openGraph: {
        title:
            "Project Launch Marketing Agency in Hyderabad",
        description:
            "Strategic pre-launch and launch marketing for real estate projects across Kokapet, Gachibowli, Financial District & Narsingi.",
        url:
            "https://epoquegroup.in/realty/project-launch-marketing",
        type: "website",
    },
}

export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* HERO */}
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                    Real Estate Project Launch Marketing in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg leading-relaxed">
                    Launching a real estate project in Hyderabad requires structured
                    momentum, urgency creation and high-intent buyer targeting.
                    Whether your project is in Kokapet, Gachibowli,
                    Financial District, Narsingi or Tellapur, we design
                    strategic pre-launch and launch marketing campaigns
                    that generate site visits, investor traction and early bookings.
                </p>

                {/* AUTHORITY SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Why Project Launch Marketing is Critical in Hyderabad
                    </h2>

                    <p>
                        Hyderabad’s property market is highly competitive.
                        Buyers compare multiple projects before making decisions.
                        A powerful launch phase creates urgency, brand trust
                        and booking velocity during the first 30–90 days.
                    </p>

                    <p>
                        Without structured launch campaigns, developers risk
                        slow absorption rates and higher inventory holding costs.
                        Our launch framework ensures maximum traction
                        during the most important sales window.
                    </p>
                </section>

                {/* STRATEGY */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Our Pre-Launch & Launch Marketing Framework
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Market research & competitor analysis</li>
                        <li>Pre-launch buzz & investor teaser campaigns</li>
                        <li>Luxury landing page funnel development</li>
                        <li>Google Ads & Meta Ads aggressive scaling</li>
                        <li>High-intent buyer audience segmentation</li>
                        <li>CRM automation & follow-up systems</li>
                        <li>Retargeting campaigns for booking acceleration</li>
                    </ul>
                </section>

                {/* PERFORMANCE SECTION */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        Revenue-Focused Campaign Execution
                    </h2>

                    <p>
                        Our campaigns are engineered to reduce cost-per-lead
                        while improving site visit quality. We focus on serious
                        buyers and NRI investors rather than volume-based
                        low-intent inquiries.
                    </p>

                    <p>
                        By combining performance marketing, persuasive
                        copywriting and behavioral retargeting, we increase
                        booking probability and project momentum.
                    </p>
                </section>

                {/* LOCATION TARGETING */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-2xl font-semibold text-white">
                        High-Growth Micro-Markets We Focus On
                    </h2>

                    <p>
                        Kokapet • Gachibowli • Financial District • Narsingi •
                        Tellapur • Kompally • Shamshabad • Neopolis
                    </p>

                    <p>
                        These prime zones attract IT professionals,
                        CXOs, investors and premium lifestyle buyers.
                        Our targeting strategy ensures your project
                        reaches the right audience at the right time.
                    </p>
                </section>

                {/* INTERNAL LINKING */}
                <div className="pt-12 border-t border-white/10 space-y-4">
                    <h3 className="text-xl font-semibold text-white">
                        Related Real Estate Services
                    </h3>

                    <div className="flex flex-wrap gap-6 text-orange-400">
                        <Link href="/realty/property-lead-generation">
                            Property Lead Generation
                        </Link>
                        <Link href="/realty/real-estate-sales-strategy">
                            Real Estate Sales Strategy
                        </Link>
                        <Link href="/realty/real-estate-branding">
                            Real Estate Branding
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
                                What is real estate project launch marketing?
                            </h3>
                            <p>
                                It is a structured campaign strategy designed to
                                generate awareness, site visits and early bookings
                                during the initial launch phase of a project.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you handle pre-launch campaigns in Hyderabad?
                            </h3>
                            <p>
                                Yes. We build pre-launch buzz campaigns that
                                create demand before the official booking
                                window opens.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                How quickly can we expect bookings?
                            </h3>
                            <p>
                                With structured launch campaigns, developers
                                typically see strong site visit traction
                                within the first 30–60 days.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <div className="pt-20 text-center">
                    <h2 className="text-3xl font-semibold">
                        Ready to Launch Your Real Estate Project?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s build a high-impact launch campaign
                        that generates bookings and sales momentum.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Launch Your Project With Us
                    </Link>
                </div>

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="project-launch-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Project Launch Marketing",
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
                                name: "What is real estate project launch marketing?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "It is a strategic campaign designed to generate awareness, site visits and bookings during the initial launch phase of a real estate project."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you handle pre-launch campaigns?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. We create structured pre-launch campaigns to build demand before official bookings open."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}