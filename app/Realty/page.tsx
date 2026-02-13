"use client"

import { motion, Variants } from "framer-motion"
import { Building2, Users, TrendingUp, BarChart3 } from "lucide-react"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export default function EpoqueRealtySection() {
    return (
        <section className="relative bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-orange-500/20 via-yellow-500/20 to-red-500/20 blur-[160px]" />
            </div>

            {/* HERO */}
            <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <span className="text-xs tracking-[0.4em] uppercase text-orange-400">
                        Real Estate Collaboration Platform
                    </span>

                    <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-semibold mt-6 leading-tight">
                        Époque{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Realty
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        A structured channel partner ecosystem empowering builders,
                        brokers, and investors through intelligence-driven distribution,
                        pricing analytics, and high-performance sales enablement.
                    </p>
                </motion.div>
            </div>

            {/* CORE GRID */}
            <div className="relative border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        {
                            icon: <Users size={26} />,
                            title: "Channel Partner Network",
                            desc: "Structured partner alignment, trust-driven collaboration, and transparent distribution systems."
                        },
                        {
                            icon: <TrendingUp size={26} />,
                            title: "Conversion Optimization",
                            desc: "Lead scoring, buyer intelligence, and deal acceleration frameworks."
                        },
                        {
                            icon: <Building2 size={26} />,
                            title: "Builder Representation",
                            desc: "Inventory positioning, pricing advisory, and strategic market absorption models."
                        },
                        {
                            icon: <BarChart3 size={26} />,
                            title: "Market Intelligence",
                            desc: "Demand forecasting, pricing benchmarks, and analytics-backed investment insights."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group relative h-full"
                        >

                            {/* Orange Gradient Border */}
                            <div className="
                relative p-[1.5px] rounded-2xl
                bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500
                transition-all duration-500
                group-hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]
                h-full
              ">

                                <div className="
                  relative h-full rounded-2xl p-6
                  bg-gradient-to-br from-[#121212] to-[#1c1c1c]
                  border border-orange-500/20
                  transition-all duration-500
                  group-hover:-translate-y-3
                  group-hover:scale-[1.03]
                ">

                                    {/* Glow */}
                                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/15 to-transparent blur-2xl" />

                                    <div className="relative z-10">

                                        <div className="text-orange-400 mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-base font-semibold mb-3 group-hover:text-orange-400 transition">
                                            {item.title}
                                        </h3>

                                        <div className="w-10 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-500 mb-4 rounded-full group-hover:w-16 transition-all duration-500" />

                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>

            {/* WHY SECTION */}
            <div className="relative border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        <h2 className="text-3xl font-semibold mb-6">
                            Why Époque Realty?
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            We move beyond traditional brokerage models. Our framework
                            aligns builders, channel partners, and analytics into a
                            single performance-driven ecosystem.
                        </p>

                        <p className="text-gray-500 leading-relaxed">
                            This structured approach ensures faster project absorption,
                            optimized pricing strategy, and higher partner confidence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="grid grid-cols-2 gap-6"
                    >
                        {[
                            { stat: "200+", label: "Channel Partners" },
                            { stat: "₹500Cr+", label: "Transaction Value Enabled" },
                            { stat: "50+", label: "Builder Alliances" },
                            { stat: "98%", label: "Partner Satisfaction Index" }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="
                  group p-6 rounded-2xl
                  bg-gradient-to-br from-[#121212] to-[#1c1c1c]
                  border border-orange-500/20
                  transition-all duration-500
                  hover:border-orange-400
                  hover:-translate-y-2
                  hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]
                "
                            >
                                <h3 className="text-3xl font-bold text-orange-400 transition group-hover:scale-105">
                                    {item.stat}
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* FINAL STATEMENT */}
            <div className="text-center py-20 border-t border-white/10">
                <p className="text-lg text-gray-400 italic">
                    “We don’t just distribute inventory — we engineer structured real estate growth.”
                </p>
            </div>

        </section>
    )
}
