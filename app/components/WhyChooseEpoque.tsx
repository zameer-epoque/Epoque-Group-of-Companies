"use client"

import { motion } from "framer-motion"
import {
    Palette,
    Target,
    Layers,
    Handshake,
} from "lucide-react"

const items = [
    {
        icon: Palette,
        title: "Conversion-Led Strategy",
        desc: "Every campaign begins with structured lead generation architecture—designed to attract high-intent audiences, capture qualified enquiries, and transform traffic into sales-ready prospects."
    },
    {
        icon: Target,
        title: "Precision Targeting",
        desc: "We leverage data-driven advertising, audience segmentation, and performance analytics to generate highly qualified leads that strengthen booking pipelines and reduce cost-per-acquisition."
    },
    {
        icon: Layers,
        title: "End-to-End Lead Systems",
        desc: "From targeted ad campaigns and SEO funnels to conversion-optimized landing pages and CRM workflows, we build complete lead generation ecosystems that deliver measurable results."
    },
    {
        icon: Handshake,
        title: "Sales-Ready Partnerships",
        desc: "We partner with developers and growth-focused businesses to deliver verified, high-intent qualified enquiries that convert into consistent revenue growth."
    }
]

export default function WhyChooseEpoque() {
    return (
        <section
            className="relative py-24 px-6 bg-[#0E0E0E] text-white overflow-hidden"
            aria-label="Why Choose Époque - Real Estate, Digital Marketing, Interior Design and Revenue Consulting Experts in Hyderabad"
        >

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[1100px] h-[1100px] 
                    bg-gradient-to-r 
                    from-yellow-400/10 
                    via-yellow-500/10 
                    to-yellow-600/10 
                    blur-[220px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
                        Why{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Choose Époque
                        </span>

                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 -bottom-6 h-[3px] w-full 
                                -translate-x-1/2 
                                bg-gradient-to-r 
                                from-yellow-400 
                                via-yellow-500 
                                to-yellow-600 
                                rounded-full origin-center"
                        />
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed">
                        A performance-driven growth platform specializing in structured lead generation and qualified buyer acquisition, delivering high-intent enquiries that convert into measurable revenue across Hyderabad.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    {items.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group relative h-full"
                            >

                                {/* OUTER GRADIENT BORDER */}
                                <div className="relative p-[1.5px] rounded-3xl h-full
                                    bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600
                                    transition-all duration-500
                                    shadow-lg shadow-yellow-500/10
                                    group-hover:shadow-[0_0_45px_rgba(250,204,21,0.6)]">

                                    {/* INNER CARD */}
                                    <div className="relative flex flex-col h-full
                                        rounded-3xl p-8 sm:p-10
                                        bg-gradient-to-br from-[#141414] to-[#1c1c1c]
                                        border border-yellow-500/20
                                        backdrop-blur-xl
                                        transition-all duration-500
                                        group-hover:-translate-y-3
                                        group-hover:border-yellow-400/60">

                                        {/* Glow */}
                                        <div className="absolute inset-0 rounded-3xl
                                            opacity-0 group-hover:opacity-100
                                            transition duration-700 blur-3xl
                                            bg-yellow-400/30" />

                                        <div className="relative z-10">

                                            {/* ICON */}
                                            <div className="mb-6 flex justify-center">
                                                <div className="flex items-center justify-center
                                                    w-16 h-16 rounded-full
                                                    bg-yellow-400/10
                                                    border border-yellow-400/30
                                                    text-yellow-400
                                                    transition-all duration-500
                                                    group-hover:scale-125
                                                    group-hover:bg-yellow-400/20
                                                    group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]">
                                                    <Icon size={36} />
                                                </div>
                                            </div>

                                            <h3 className="font-heading text-[28px] font-semibold mb-4 tracking-wide text-white flex justify-center">
                                                {item.title}
                                            </h3>

                                            <p className="text-gray-400 leading-relaxed text-base">
                                                {item.desc}
                                            </p>

                                        </div>

                                    </div>
                                </div>

                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}
