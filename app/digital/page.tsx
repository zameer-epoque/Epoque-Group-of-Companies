"use client"

import { motion, Variants } from "framer-motion"

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
    },
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
            <section className="relative flex items-center justify-center px-6 py-28 overflow-hidden">

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
                        Époque{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Digital
                        </span>
                    </h1>

                    <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mt-4">
                        Performance Marketing Agency
                    </p>

                    <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Scalable Growth Through{" "}
                        <span className="text-white font-medium">
                            SEO, Paid Advertising & Funnel Engineering
                        </span>
                    </p>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
                        We architect high-performance digital ecosystems that generate
                        qualified leads, strengthen brand authority, and deliver measurable ROI
                        for ambitious businesses across India.
                    </p>
                </motion.div>
            </section>

            {/* CORE SERVICES */}
            <section className="py-4 px-6 bg-[#0E0E0E] relative overflow-hidden">

                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[700px] h-[700px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[180px]" />
                </div>

                <div className="relative max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-10"
                    >
                        <h2 className="font-heading text-4xl md:text-6xl font-semibold relative inline-block">
                            Our Core Services
                            <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]" />
                        </h2>

                        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
                            Conversion-focused digital frameworks built for sustainable,
                            predictable growth.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: "🔍",
                                title: "Search Engine Optimization",
                                desc: "Technical SEO, keyword strategy, authority building, and structured content systems that dominate search rankings.",
                            },
                            {
                                icon: "📈",
                                title: "Performance Advertising",
                                desc: "Meta Ads & Google Ads campaigns engineered for scalable lead acquisition and maximum profitability.",
                            },
                            {
                                icon: "⚙️",
                                title: "Funnel Engineering",
                                desc: "High-converting landing pages and automation systems that transform traffic into qualified opportunities.",
                            },
                            {
                                icon: "🎯",
                                title: "Brand Strategy & Positioning",
                                desc: "Premium storytelling frameworks and creative direction that elevate authority and trust.",
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
                                className="group relative rounded-2xl border border-white/10 p-8 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-2xl" />

                                <div className="relative">
                                    <div className="text-4xl mb-6">{service.icon}</div>

                                    <h3 className="font-heading text-xl font-semibold mb-4 group-hover:text-[#C79A3B] transition">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center relative overflow-hidden">

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-semibold mb-8">
                        Ready to Build a{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                            High-Performance Digital Engine?
                        </span>
                    </h2>

                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Let’s transform your marketing into a scalable, predictable revenue
                        system powered by strategy and innovation.
                    </p>

                    <a
                        href="/contact"
                        className="inline-block px-14 py-5 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Start Your Growth Journey
                    </a>
                </motion.div>
            </section>

        </main>
    )
}
