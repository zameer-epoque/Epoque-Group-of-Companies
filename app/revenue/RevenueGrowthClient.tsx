"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function RevenueGrowthClient() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* HERO */}
            <div className="relative py-32 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-500/20 blur-[180px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Revenue Growth Consulting for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Scalable Business Expansion
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We help businesses unlock new revenue streams,
                        optimize sales systems and build predictable growth engines.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Scale My Business
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "Revenue Audits",
                        desc: "Identify growth gaps and revenue leakage."
                    },
                    {
                        title: "Sales Funnel Optimization",
                        desc: "Increase conversion rates and deal velocity."
                    },
                    {
                        title: "Pricing Strategy",
                        desc: "Optimize pricing models for higher profitability."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#111111] border border-white/5">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        What is revenue growth consulting?
                    </h3>
                    <p className="text-gray-400">
                        Revenue growth consulting focuses on identifying
                        opportunities to increase sales, improve margins
                        and build scalable growth systems within a business.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How do you identify revenue gaps?
                    </h3>
                    <p className="text-gray-400">
                        We conduct detailed audits of marketing channels,
                        sales funnels, pricing models and customer journeys
                        to uncover bottlenecks and revenue leakage points.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Can you help increase profit margins?
                    </h3>
                    <p className="text-gray-400">
                        Yes, by optimizing pricing strategy, reducing
                        acquisition costs and improving conversion rates,
                        we help businesses enhance overall profitability.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How long does it take to see measurable growth?
                    </h3>
                    <p className="text-gray-400">
                        Initial improvements can be visible within 30–60 days,
                        while structured growth systems typically show
                        consistent scaling over 3–6 months.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you work with startups and established companies?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we tailor strategies for startups, SMEs
                        and enterprise businesses depending on
                        growth stage and revenue goals.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide ongoing performance tracking?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we implement reporting dashboards
                        and KPI tracking systems to monitor
                        revenue performance and growth metrics.
                    </p>
                </div>
            </div>
            {/* SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Revenue Growth Consulting Service",
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