"use client"

import { motion } from "framer-motion"

export default function WhoWeAre() {
    return (
        <section
            className="
        relative py-20 px-6 overflow-hidden
        bg-[#0E0E0E] text-white
      "
            aria-label="Who We Are - Époque Group"
        >
            {/* PREMIUM BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="
          w-[1000px] h-[1000px]
          bg-gradient-to-r
          from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10
          blur-[220px]
        " />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center mb-24"
                >
                    <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight tracking-tight">

                        Who{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            We Are
                        </span>

                        {/* GRADIENT UNDERLINE */}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="
                absolute left-1/2 -bottom-6 h-[3px] w-full
                -translate-x-1/2
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                origin-center rounded-full
              "
                        />

                        {/* SOFT GLOW */}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="
                absolute left-1/2 -bottom-6 h-[8px] w-full
                -translate-x-1/2
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                blur-md opacity-40
                origin-center rounded-full
              "
                        />
                    </h2>

                    <p className="mt-12 text-xl md:text-2xl leading-relaxed text-gray-400">
                        <span className="font-semibold text-white">
                            Époque Group
                        </span>{" "}
                        is a collective of visionaries, creators, and strategists united by one
                        mission — to transform ideas into{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent font-semibold">
                            iconic realities
                        </span>{" "}
                        through innovation, design, and strategic excellence.
                    </p>
                </motion.div>

                {/* VALUES GRID */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {[
                        {
                            icon: "✨",
                            title: "Innovation First",
                            desc: "We push boundaries with forward-thinking solutions that redefine industries and create lasting global impact.",
                            color: "#C79A3B",
                        },
                        {
                            icon: "🎨",
                            title: "Creative Excellence",
                            desc: "Every project is crafted where artistry meets strategy, delivering experiences that captivate, inspire, and endure.",
                            color: "#D45B5B",
                        },
                        {
                            icon: "🎯",
                            title: "Strategic Vision",
                            desc: "We see beyond the present, shaping intelligent strategies that help businesses grow, scale, and thrive.",
                            color: "#7A2E63",
                        },
                        {
                            icon: "🌍",
                            title: "Global Impact",
                            desc: "From local communities to international markets, we bridge culture, commerce, and creativity with precision.",
                            color: "#2E5A57",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.7 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl p-10
                bg-white/5 backdrop-blur-xl
                border border-white/10
                transition-all duration-500
                hover:-translate-y-5
              "
                        >
                            {/* HOVER GLOW */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                                style={{
                                    background: `radial-gradient(circle at top left, ${item.color}40, transparent 60%)`,
                                }}
                            />

                            <div className="relative z-10">
                                <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-125">
                                    {item.icon}
                                </div>

                                <h3 className="font-heading text-2xl font-semibold mb-4">
                                    {item.title}
                                </h3>

                                <p className="leading-relaxed text-sm text-gray-400">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
