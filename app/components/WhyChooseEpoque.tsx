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
    },
    {
        icon: Target,
        title: "Strategic Expertise",
        desc: "We combine market insight, data-driven strategy, and creative foresight to architect solutions that accelerate growth and long-term success.",
    },
    {
        icon: Layers,
        title: "End-to-End Solutions",
        desc: "From ideation to execution, we manage every layer of the process—ensuring clarity, quality, and cohesion across all touchpoints.",
    },
    {
        icon: Handshake,
        title: "Trusted Partnerships",
        desc: "We believe true success is built through long-term partnerships—working as collaborators invested in your vision, growth, and legacy.",
    },
]

export default function WhyChooseEpoque() {
    return (
        <section className="relative py-24 px-6 bg-[#0E0E0E] text-white overflow-hidden">

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
                        <span className="bg-gradient-to-r 
                             from-yellow-400 
                             via-yellow-500 
                             to-yellow-600 
                             bg-clip-text text-transparent">
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
                                className="group relative h-full"
                            >

                                {/* OUTER GRADIENT BORDER */}
                                <div className="
                  relative p-[1.5px] rounded-3xl h-full
                  bg-gradient-to-br 
                  from-yellow-400 
                  via-yellow-500 
                  to-yellow-600
                  transition-all duration-500

                  shadow-lg shadow-yellow-500/10
                  group-hover:shadow-[0_0_45px_rgba(250,204,21,0.6)]
                ">

                                    {/* INNER CARD */}
                                    <div className="
                    relative flex flex-col h-full
                    rounded-3xl p-8 sm:p-10
                    bg-gradient-to-br from-[#141414] to-[#1c1c1c]
                    border border-yellow-500/20
                    backdrop-blur-xl
                    transition-all duration-500

                    group-hover:-translate-y-3
                    group-hover:border-yellow-400/60
                  ">

                                        {/* Glow Spread Layer */}
                                        <div className="
                      absolute inset-0 rounded-3xl
                      opacity-0 group-hover:opacity-100
                      transition duration-700 blur-3xl
                      bg-yellow-400/30
                    " />

                                        {/* CONTENT */}
                                        <div className="relative z-10">

                                            {/* ICON */}
                                            <div className="
  mb-6 
  flex justify-center
">
                                                <div className="
    flex items-center justify-center
    w-16 h-16
    rounded-full
    bg-yellow-400/10
    border border-yellow-400/30
    text-yellow-400
    transition-all duration-500
    group-hover:scale-125
    group-hover:bg-yellow-400/20
    group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
  ">
                                                    <Icon size={36} />
                                                </div>
                                            </div>


                                            <h3 className="font-heading text-[36px] font-semibold mb-4 tracking-wide text-white flex justify-center">
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
