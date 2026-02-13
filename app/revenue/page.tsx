"use client"

import { motion, Variants } from "framer-motion"
import { Landmark, TrendingUp, Settings, Brain } from "lucide-react"
import Link from "next/link"
import PremiumCTA from "../components/PremiumCTA"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
}

export default function RevenuePage() {
    return (
        <section
            className="relative bg-black text-white overflow-hidden"
            aria-label="Business Consulting and Revenue Growth Services in Hyderabad"
        >

            {/* Background */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,orange_1px,transparent_1px),linear-gradient(to_bottom,orange_1px,transparent_1px)] bg-[size:90px_90px]" />
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-[160px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 blur-[160px]" />

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HERO */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-orange-400">
                        Business & Revenue Consulting in Hyderabad
                    </span>

                    <h1 className="font-heading text-5xl md:text-6xl font-semibold mt-6 leading-tight">
                        Revenue Growth &{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Business Consulting
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300">
                        DPR Consulting • Financial Modeling • Profit Optimization
                    </p>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Revenue Architects is a strategic consulting division specializing in
                        Detailed Project Reports (DPR), financial modeling, government advisory,
                        profitability systems, and scalable business frameworks.
                        We support enterprises, startups, institutions, and government projects
                        across Hyderabad and India with structured, data-driven growth systems.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Request Business Consultation
                        </Link>
                    </div>
                </motion.div>

                {/* CORE SERVICES */}
                <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        {
                            icon: <Landmark size={28} />,
                            title: "DPR & Government Consulting",
                            desc: "Preparation of Detailed Project Reports (DPR), feasibility studies, PPP frameworks, and institutional compliance documentation."
                        },
                        {
                            icon: <TrendingUp size={28} />,
                            title: "Revenue & Profitability Engineering",
                            desc: "Revenue modeling, pricing strategy, cost optimization, and scalable financial architecture for sustainable growth."
                        },
                        {
                            icon: <Settings size={28} />,
                            title: "Process & Operations Optimization",
                            desc: "KPI systems, workflow restructuring, automation frameworks, and operational efficiency consulting."
                        },
                        {
                            icon: <Brain size={28} />,
                            title: "Leadership & Strategic Advisory",
                            desc: "Executive alignment, strategic planning workshops, and decision-making frameworks for high-growth organizations."
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
                                ease: [0.16, 1, 0.3, 1] as const
                            }}
                            className="group relative h-full"
                        >

                            <div className="relative p-[1.5px] rounded-3xl
                                bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500
                                transition-all duration-500
                                group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                                h-full">

                                <div className="relative h-full rounded-3xl p-8
                                    bg-gradient-to-br from-[#121212] to-[#1c1c1c]
                                    border border-orange-500/20
                                    transition-all duration-500
                                    group-hover:-translate-y-3
                                    group-hover:scale-[1.03]">

                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/15 to-transparent blur-2xl" />

                                    <div className="relative z-10">

                                        <div className="text-orange-400 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition">
                                            {item.title}
                                        </h3>

                                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-500 mb-5 rounded-full group-hover:w-20 transition-all duration-500" />

                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>

                                    </div>

                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* AUTHORITY SEO SECTION */}
                <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent"
                    >
                        Business Consulting & DPR Services Across India
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed"
                    >
                        We help organizations design revenue systems, optimize
                        financial performance, and prepare investor-ready documentation
                        with clarity and compliance.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-500 leading-relaxed"
                    >
                        From government project DPR preparation to private enterprise
                        profitability consulting, our approach replaces reactive management
                        with structured, predictable growth architecture.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-xl italic text-orange-400"
                    >
                        We don’t just advise — we architect sustainable revenue systems.
                    </motion.p>
                </div>

            </div>
            <PremiumCTA/>
        </section>
    )
}
