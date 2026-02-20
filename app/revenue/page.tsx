"use client"

import { motion, Variants } from "framer-motion"
import { Landmark, TrendingUp, Settings, Brain } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
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
                        Business Consulting & DPR Services in Hyderabad
                    </span>

                    <h1 className="font-heading text-5xl md:text-6xl font-semibold mt-6 leading-tight">
                        Revenue Growth &{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Business Consulting
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300">
                        DPR Preparation • Financial Modeling • Profit Optimization • Strategic Advisory
                    </p>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Revenue Architects is a strategic consulting division offering Detailed Project Report (DPR) preparation,
                        financial feasibility analysis, investor documentation, profitability systems,
                        and structured revenue growth frameworks for startups, enterprises,
                        real estate developers and government institutions across Hyderabad and India.
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
                            icon: <TrendingUp size={28} />,
                            title: "Revenue & Financial Engineering",
                            desc: "Revenue modeling, pricing strategy, financial forecasting, break-even analysis and scalable profitability systems."
                        },
                        {
                            icon: <Settings size={28} />,
                            title: "Process & Operations Optimization",
                            desc: "KPI frameworks, operational restructuring, automation systems and cost optimization consulting."
                        },
                        {
                            icon: <Brain size={28} />,
                            title: "Strategic Advisory & Leadership Consulting",
                            desc: "Executive alignment, long-term strategy design and structured decision-making frameworks."
                        },
                        {
                            icon: <Landmark size={28} />,
                            title: "DPR & Government Project Consulting",
                            desc: "Detailed Project Report preparation, feasibility studies, compliance documentation and funding advisory."
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

                                    <div className="text-orange-400 mb-6">
                                        {item.icon}
                                    </div>

                                    <h3 className="text-lg font-semibold mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* SEO AUTHORITY CONTENT */}
                <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Business Consulting Services Across Hyderabad & India
                    </h2>

                    <p className="text-gray-400 leading-relaxed">
                        We assist startups, MSMEs, real estate companies, educational institutions,
                        healthcare organizations and government-backed projects with structured
                        revenue frameworks and investor-ready financial documentation.
                    </p>

                    <p className="text-gray-500 leading-relaxed">
                        Our consulting approach integrates financial analytics,
                        profitability optimization, compliance clarity and long-term
                        scalable architecture — ensuring predictable growth instead of reactive management.
                    </p>
                </div>

                {/* FAQ SECTION */}
                <div className="mt-32 max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6 text-gray-400">
                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                What is a Detailed Project Report (DPR)?
                            </h3>
                            <p>
                                A DPR is a structured document outlining project feasibility,
                                financial projections, cost analysis, revenue forecasting and
                                compliance requirements for funding or approvals.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you provide DPR services in Hyderabad?
                            </h3>
                            <p>
                                Yes, we provide DPR preparation, feasibility studies and
                                financial modeling services for businesses and institutions
                                across Hyderabad and India.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {/* SCHEMA FOR SEO */}
            <Script
                id="consulting-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ConsultingService",
                        name: "Revenue Architects - Business Consulting",
                        areaServed: "Hyderabad, India",
                        serviceType: "Business Consulting, DPR Preparation, Financial Modeling",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group"
                        }
                    })
                }}
            />

            <PremiumCTA />
        </section>
    )
}