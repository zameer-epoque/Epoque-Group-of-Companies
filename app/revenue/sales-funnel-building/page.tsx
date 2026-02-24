"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function SalesFunnelClient() {
    return (
        <section className="bg-black text-white">

            {/* HERO SECTION */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Sales Funnel Building Services for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Predictable Revenue Growth
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design high-converting sales funnels that transform traffic
                        into qualified leads and long-term customers.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Build My Funnel
                        </Link>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-gray-400 space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                    Strategic Funnel Systems That Convert
                </h2>

                <p>
                    Our funnel strategy combines consumer psychology, automation
                    and performance tracking to increase conversions at every stage
                    of the customer journey.
                </p>

                <p>
                    From awareness to purchase, we build structured funnels that
                    generate consistent leads and scalable revenue.
                </p>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "Lead Generation Funnels",
                        desc: "Capture and nurture qualified prospects automatically."
                    },
                    {
                        title: "Automation & CRM Setup",
                        desc: "Integrated email workflows and CRM systems."
                    },
                    {
                        title: "Conversion Optimization",
                        desc: "Continuous testing to improve funnel performance."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-purple-500/20">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* WHY CHOOSE US */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-gray-400 space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                    Why Choose Our Funnel Experts?
                </h2>

                <p>
                    We don’t just build pages — we engineer revenue systems.
                    Every funnel is optimized using data insights, A/B testing,
                    and performance metrics.
                </p>

                <p>
                    Our approach ensures measurable ROI, improved lead quality,
                    and predictable business growth.
                </p>
            </div>

            {/* CTA SECTION */}
            <div className="text-center py-20 px-6 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10">
                <h2 className="text-3xl font-semibold mb-6">
                    Ready to Scale Your Revenue?
                </h2>
                <Link
                    href="/contact"
                    className="inline-block px-10 py-4 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
          hover:scale-105 transition duration-300 shadow-xl">
                    Start Your Funnel Project
                </Link>
            </div>

            {/* FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        What is a sales funnel?
                    </h3>
                    <p className="text-gray-400">
                        A sales funnel is a structured marketing process that guides
                        prospects from awareness to conversion.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide complete funnel automation?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we provide end-to-end funnel systems including strategy,
                        landing pages, email automation and CRM integration.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Which tools do you use for funnel building?
                    </h3>
                    <p className="text-gray-400">
                        We use high-converting landing page builders, CRM platforms,
                        email automation tools, and analytics tracking systems
                        to create optimized funnel ecosystems.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How long does it take to build a sales funnel?
                    </h3>
                    <p className="text-gray-400">
                        A complete funnel system typically takes 1–3 weeks
                        depending on complexity, automation layers,
                        and integration requirements.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Can sales funnels improve conversion rates?
                    </h3>
                    <p className="text-gray-400">
                        Yes, structured funnels increase lead nurturing efficiency,
                        reduce drop-offs, and significantly improve
                        overall conversion ratios.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide performance tracking and analytics?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we implement tracking systems to monitor
                        user behavior, conversions, cost-per-lead,
                        and ROI performance metrics.
                    </p>
                </div>
            </div>

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
                                name: "What is a sales funnel?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A sales funnel is a structured marketing system that guides prospects toward purchase."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide complete funnel automation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we build end-to-end funnel systems including automation and CRM integration."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Sales Funnel Building Service",
                        description: "Professional sales funnel strategy, automation and conversion optimization services.",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group Of Companies"
                        }
                    })
                }}
            />

        </section>
    )
}