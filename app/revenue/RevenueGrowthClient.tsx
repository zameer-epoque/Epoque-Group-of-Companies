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