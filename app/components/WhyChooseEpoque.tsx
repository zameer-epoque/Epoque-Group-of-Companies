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
        title: "Design-Led Thinking",
        desc: "Every solution begins with design intelligence—where aesthetics, functionality, and human experience align to create timeless outcomes.",
        color: "#C79A3B",
    },
    {
        icon: Target,
        title: "Strategic Expertise",
        desc: "We combine market insight, data-driven strategy, and creative foresight to architect solutions that accelerate growth and long-term success.",
        color: "#D45B5B",
    },
    {
        icon: Layers,
        title: "End-to-End Solutions",
        desc: "From ideation to execution, we manage every layer of the process—ensuring clarity, quality, and cohesion across all touchpoints.",
        color: "#7A2E63",
    },
    {
        icon: Handshake,
        title: "Trusted Partnerships",
        desc: "We believe true success is built through long-term partnerships—working as collaborators invested in your vision, growth, and legacy.",
        color: "#2E5A57",
    },
]

export default function WhyChooseEpoque() {
    return (
        <section className="relative py-4 px-6 bg-[#0E0E0E] text-white overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[1100px] h-[1100px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
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

                        {/* Animated Gradient Line */}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute left-1/2 -bottom-6 h-[3px] w-full -translate-x-1/2 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] rounded-full origin-center"
                        />
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed">
                        Where strategic insight, creative excellence, and executional
                        precision come together to deliver enduring value.
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
                                className="group relative rounded-3xl p-10 bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-700 hover:-translate-y-5"
                            >
                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700 blur-3xl"
                                    style={{
                                        background: `radial-gradient(circle at top left, ${item.color}50, transparent 60%)`,
                                    }}
                                />

                                {/* Animated Border */}
                                <div
                                    className="absolute inset-0 rounded-3xl border opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{
                                        borderColor: item.color,
                                    }}
                                />

                                <div className="relative z-10">

                                    {/* ICON */}
                                    <div
                                        className="mb-6 transition-all duration-500 group-hover:scale-125"
                                        style={{ color: item.color }}
                                    >
                                        <Icon size={34} />
                                    </div>

                                    <h3 className="font-heading text-2xl font-semibold mb-4 tracking-wide">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        {item.desc}
                                    </p>

                                </div>
                            </motion.div>
                        )
                    })}

                </div>
            </div>
        </section>
    )
}
