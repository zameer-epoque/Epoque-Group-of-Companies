"use client"

import { motion, Variants } from "framer-motion"
import PremiumCTA from "../../components/PremiumCTA"
import FAQSection from "./FAQSection"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
}

export default function DigitalClient() {
    return (
        <main className="relative overflow-hidden bg-[#050505] text-white">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[200px] rounded-full" />
            <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[200px] rounded-full" />

            {/* ================= HERO ================= */}
            <section className="relative px-6 py-36 text-center">

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="max-w-6xl mx-auto"
                >

                    <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                        Digital Marketing Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mt-6">
                        SEO • Google Ads • Performance Marketing • Lead Generation
                    </p>

                    <p className="mt-10 text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Helping Businesses Scale with{" "}
                        <span className="text-white font-medium">
                            Data-Driven SEO, Paid Advertising & Conversion Systems
                        </span>
                    </p>

                    <p className="mt-10 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We design and execute high-performance digital marketing strategies
                        that increase rankings, generate qualified leads, and build long-term
                        brand authority. Our structured growth frameworks ensure measurable
                        ROI and scalable business expansion.
                    </p>

                </motion.div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            <section className="relative py-4 px-6 bg-[#0B0B0B]">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent inline-block">
                            Our Digital Marketing Services
                        </h2>

                        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
                            Structured digital growth systems built for predictable,
                            measurable, and scalable business performance.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                icon: "🔎",
                                title: "Search Engine Optimization",
                                desc: "Comprehensive technical SEO, keyword strategy, content optimization, and authority building frameworks designed to dominate competitive search results.",
                            },
                            {
                                icon: "📊",
                                title: "Google & Meta Advertising",
                                desc: "Performance-driven paid advertising campaigns engineered to generate consistent high-quality leads at optimized acquisition costs.",
                            },
                            {
                                icon: "🚀",
                                title: "Conversion Funnels",
                                desc: "High-converting landing pages, automation workflows, and CRM systems that turn traffic into revenue with predictable scalability.",
                            },
                            {
                                icon: "🏆",
                                title: "Brand Positioning",
                                desc: "Strategic brand messaging and creative direction to build authority, increase visibility, and elevate long-term market positioning.",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                }}
                                className="group relative"
                            >

                                <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(199,154,59,0.4)]">

                                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.04]">

                                        <div className="text-5xl mb-6 transition-all duration-500 group-hover:scale-110">
                                            {service.icon}
                                        </div>

                                        <h3 className="text-xl font-semibold mb-4 group-hover:text-[#C79A3B] transition">
                                            {service.title}
                                        </h3>

                                        <div className="w-14 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mb-6 rounded-full group-hover:w-24 transition-all duration-500" />

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.desc}
                                        </p>

                                    </div>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ================= SEO SERVICES ================= */}
            {/* ================= DIGITAL MARKETING SERVICES ================= */}
            <section className="relative py-12 px-6 bg-[#080808] overflow-hidden">

                {/* Soft Background Glow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px]" />
                </div>

                <div className="relative max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent inline-block">
                            Digital Marketing Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital growth solutions designed to increase visibility,
                            generate qualified leads, and drive measurable revenue growth across
                            search engines, social media platforms, and paid advertising channels.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "Search Engine Optimization (SEO)",
                                desc: "Technical optimization, keyword strategy, and authority-building frameworks to dominate organic search rankings.",
                            },
                            {
                                title: "Google Ads Management",
                                desc: "High-performance search, display, and remarketing campaigns focused on maximizing ROI and lowering acquisition costs.",
                            },
                            {
                                title: "Social Media Marketing",
                                desc: "Meta, Instagram, and LinkedIn campaigns engineered to increase engagement, brand awareness, and qualified leads.",
                            },
                            {
                                title: "Performance Marketing",
                                desc: "Data-driven advertising systems designed to scale revenue predictably through optimized targeting and conversion tracking.",
                            },
                            {
                                title: "Landing Pages & Funnels",
                                desc: "Conversion-optimized landing pages and automated sales funnels built to turn traffic into revenue.",
                            },
                            {
                                title: "Analytics & Reporting",
                                desc: "Advanced tracking, performance dashboards, and data insights to measure growth and optimize campaigns.",
                            },
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                {/* Gradient Border */}
                                <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.4)]">

                                    {/* Card */}
                                    <div className="rounded-2xl p-8 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">

                                        {/* Number */}
                                        <span className="text-sm text-[#C79A3B] tracking-widest uppercase font-medium">
                                            0{index + 1}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold mt-6 mb-4 group-hover:text-[#C79A3B] transition duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {service.desc}
                                        </p>

                                        {/* Animated Line */}
                                        <div className="mt-8 h-[3px] w-14 bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] rounded-full group-hover:w-full transition-all duration-500"></div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <FAQSection />
            <PremiumCTA />

        </main>
    )
}