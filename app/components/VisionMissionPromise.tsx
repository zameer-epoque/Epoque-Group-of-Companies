"use client"

import { motion } from "framer-motion"

export default function VisionMissionPromise() {
    return (
        <section
            className="
        relative py-8 px-6 overflow-hidden
        bg-[#0E0E0E] text-white
      "
            aria-label="Our Vision, Mission and Promise - Époque Group"
        >
            {/* PREMIUM BACKGROUND GLOW */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div
                    className="
            w-[1000px] h-[1000px]
            bg-gradient-to-r
            from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10
            blur-[220px]
          "
                />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-6xl font-semibold leading-tight tracking-tight">

                        Our{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Vision, Mission & Promise
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

                        {/* GLOW LINE */}
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
                        The principles that guide how we think, create, and deliver enduring
                        value across every space we shape.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid gap-10 md:grid-cols-3">

                    {[
                        {
                            icon: "🚀",
                            title: "Our Vision",
                            subtitle: "Shaping Tomorrow's Landscape",
                            desc: "To be the catalyst that transforms ambition into achievement, where creativity fuels commerce and culture defines legacy. We envision a world where every space—digital or physical—becomes a masterpiece of innovation.",
                            color: "#C79A3B",
                        },
                        {
                            icon: "⭐",
                            title: "Our Mission",
                            subtitle: "Excellence Without Boundaries",
                            desc: "We architect experiences that transcend expectations. Through strategic insight, creative prowess, and unwavering commitment, we deliver solutions that don’t just meet today’s needs—they anticipate tomorrow’s possibilities.",
                            color: "#D45B5B",
                        },
                        {
                            icon: "🤝",
                            title: "Our Promise",
                            subtitle: "Your Success, Our Legacy",
                            desc: "Every partnership is a journey of transformation. We invest not just our expertise, but our passion—ensuring your vision becomes a reality that inspires, endures, and evolves with you.",
                            color: "#7A2E63",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="
                group relative rounded-2xl p-10
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

                                <h3 className="font-heading text-2xl font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p
                                    className="font-medium mb-6"
                                    style={{ color: item.color }}
                                >
                                    {item.subtitle}
                                </p>

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
