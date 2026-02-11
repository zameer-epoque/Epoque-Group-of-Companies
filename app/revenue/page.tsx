"use client"

import { motion } from "framer-motion"
import { Landmark, TrendingUp, Settings, Brain } from "lucide-react"
import Link from "next/link"

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
}

export default function RevenuePage(): JSX.Element {
    return (
        <section className="relative bg-black text-white overflow-hidden">

            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#C79A3B_1px,transparent_1px),linear-gradient(to_bottom,#C79A3B_1px,transparent_1px)] bg-[size:80px_80px]" />
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#C79A3B]/20 to-[#D45B5B]/20 blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7A2E63]/20 to-[#C79A3B]/20 blur-[150px]" />

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HERO (Centered Like Interiors) */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#C79A3B]">
                        Strategic Growth Division
                    </span>

                    <h1 className="font-heading text-5xl md:text-6xl font-semibold mt-6 leading-tight">
                        Revenue{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Architects
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300">
                        Architecting Structured Growth Systems
                    </p>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        Enterprise-grade consulting for governments, institutions,
                        startups, and scalable organizations seeking structured,
                        compliant, and predictable growth.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Request Consultation
                        </Link>

                        <Link
                            href="/projects"
                            className="px-8 py-4 rounded-full border border-white/20 hover:border-[#C79A3B] hover:text-[#C79A3B] transition duration-300"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </motion.div>

                {/* CORE SERVICES GRID */}
                <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        {
                            icon: <Landmark size={26} />,
                            title: "DPR & Government Consulting",
                            desc: "Feasibility analysis, compliance documentation, PPP frameworks, and institutional financial modeling."
                        },
                        {
                            icon: <TrendingUp size={26} />,
                            title: "Profitability Engineering",
                            desc: "Revenue modeling, cost architecture, and scalable financial systems."
                        },
                        {
                            icon: <Settings size={26} />,
                            title: "Process Optimization",
                            desc: "Workflow redesign, KPI tracking, and operational efficiency frameworks."
                        },
                        {
                            icon: <Brain size={26} />,
                            title: "Leadership Development",
                            desc: "Executive alignment programs and structured decision-making systems."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C79A3B] hover:-translate-y-3 transition-all duration-300"
                        >
                            <div className="text-[#C79A3B] mb-5">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#C79A3B] transition">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] group-hover:w-full transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* AUTHORITY SECTION (Like Interiors SEO Block) */}
                <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-4xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent"
                    >
                        Strategic Consulting Across India
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed"
                    >
                        Revenue Architects specialize in government DPR preparation,
                        enterprise profitability systems, and scalable operational design.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-500 leading-relaxed"
                    >
                        Our consulting replaces reactive management with predictive,
                        data-driven architecture for sustainable financial performance.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-xl italic text-[#D45B5B]"
                    >
                        We don’t build businesses — we architect structured growth.
                    </motion.p>
                </div>

            </div>
        </section>
    )
}
