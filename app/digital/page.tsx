"use client"

import { motion, Variants } from "framer-motion"
import PremiumCTA from "../components/PremiumCTA"

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
        <main className="overflow-hidden bg-black text-white">

            {/* HERO SECTION */}
            <section
                className="relative flex items-center justify-center px-6 py-28 overflow-hidden"
                aria-label="Digital Marketing Agency in Hyderabad - SEO, Performance Marketing and Lead Generation"
            >

                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[200px]" />
                </div>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="relative max-w-5xl text-center"
                >
                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
                        Digital Marketing Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mt-4">
                        SEO • Google Ads • Performance Marketing • Lead Generation
                    </p>

                    <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Scalable Business Growth Through{" "}
                        <span className="text-white font-medium">
                            Search Engine Optimization, Paid Advertising & Conversion Funnels
                        </span>
                    </p>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
                        Époque Digital is a performance-driven digital marketing agency in Hyderabad
                        delivering professional SEO services, Google Ads management, Meta advertising,
                        and high-converting funnel systems designed to generate qualified leads,
                        increase brand authority, and maximize return on investment.
                    </p>
                </motion.div>
            </section>

            {/* CORE SERVICES */}
            <section className="py-4 px-6 bg-[#0E0E0E] relative overflow-hidden">

                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[180px]" />
                </div>

                <div className="relative max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="font-heading text-4xl md:text-6xl font-semibold relative inline-block">
                            Our Digital Marketing Services
                            <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500" />
                        </h2>

                        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
                            Conversion-focused digital frameworks built for predictable,
                            scalable business growth.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch">
                        {[
                            {
                                icon: "🔍",
                                title: "SEO Services",
                                desc: "Technical SEO audits, keyword research, on-page optimization, and authority building strategies that help businesses rank on Google and dominate organic search.",
                            },
                            {
                                icon: "📈",
                                title: "Google & Meta Ads",
                                desc: "Performance marketing campaigns across Google Ads and Meta platforms engineered for scalable lead generation and measurable ROI.",
                            },
                            {
                                icon: "⚙️",
                                title: "Funnel & Landing Pages",
                                desc: "High-converting landing pages, automation workflows, and CRM integration systems that convert traffic into sales-ready leads.",
                            },
                            {
                                icon: "🎯",
                                title: "Brand Positioning",
                                desc: "Strategic brand messaging, creative direction, and premium digital storytelling to establish authority and long-term market positioning.",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                }}
                                className="group relative h-full"
                            >

                                <div className="relative p-[1.5px] rounded-3xl
                                    bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500
                                    transition-all duration-500
                                    group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                                    h-full">

                                    <div className="relative flex flex-col h-full
                                        rounded-3xl p-8
                                        bg-gradient-to-br from-[#121212] to-[#1c1c1c]
                                        border border-orange-500/20
                                        backdrop-blur-xl
                                        transition-all duration-500
                                        group-hover:-translate-y-3
                                        group-hover:scale-[1.03]">

                                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-transparent blur-2xl" />

                                        <div className="relative z-10 flex flex-col h-full">

                                            <div className="text-5xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                                {service.icon}
                                            </div>

                                            <h3 className="font-heading text-xl font-semibold mb-4 group-hover:text-orange-400 transition">
                                                {service.title}
                                            </h3>

                                            <div className="w-12 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-500 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />

                                            <p className="text-gray-400 text-sm leading-relaxed mt-auto">
                                                {service.desc}
                                            </p>

                                        </div>

                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />

                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <PremiumCTA />
        </main>
    )
}