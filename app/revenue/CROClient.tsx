"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function CROClient() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* GLOBAL BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 pointer-events-none"></div>

            {/* HERO SECTION */}
            <div className="relative overflow-hidden py-32 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 blur-[180px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
                        Conversion Rate Optimization for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Higher Conversions & Revenue
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                        We help businesses turn website traffic into paying customers
                        through advanced A/B testing, UX refinement and structured funnel optimization.
                    </p>

                    <div className="mt-12">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 hover:shadow-[0_0_40px_rgba(56,189,248,0.6)]
              transition-all duration-300 shadow-xl">
                            Optimize My Website
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="relative max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "A/B Testing",
                        desc: "Experiment-driven optimization to maximize conversion performance."
                    },
                    {
                        title: "UX & UI Improvements",
                        desc: "Refined layouts, messaging clarity and seamless user journeys."
                    },
                    {
                        title: "Funnel Optimization",
                        desc: "Reduce drop-offs and increase checkout or form completion rates."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#111111] backdrop-blur-xl border border-white/5 hover:border-blue-400/40 transition-all duration-300">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Conversion Rate Optimization Service",
                        description:
                            "Professional CRO services including A/B testing, UX optimization and funnel performance improvement.",
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