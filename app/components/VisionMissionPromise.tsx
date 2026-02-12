"use client"

import { motion } from "framer-motion"

export default function VisionMissionPromise() {
    return (



        <section className=" relative py-8 px-6 overflow-hidden bg-[#0E0E0E] text-white " aria-label="Our Vision, Mission and Promise - Époque Group" > {/* PREMIUM BACKGROUND GLOW */} <div className="pointer-events-none absolute inset-0 flex justify-center"> <div className=" w-[1000px] h-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px] " /> </div> <div className="relative max-w-7xl mx-auto"> {/* SECTION HEADER */} <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center mb-24" > <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-6xl font-semibold leading-tight tracking-tight"> Our{" "} <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent"> Vision, Mission & Promise </span> {/* Main Animated Line */} <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} className=" absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] " /> {/* Glow Layer */} <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.15, ease: "easeOut" }} viewport={{ once: true }} className=" absolute left-1/2 -bottom-5 h-[10px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] blur-md opacity-50 " /> {/* Subtle Shimmer Animation */} <span className=" absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 " /> </h2> <p className="mt-12 text-xl md:text-2xl leading-relaxed text-gray-400"> The principles that guide how we think, create, and deliver enduring value across every space we shape. </p> </motion.div>


            {/* GRID */}
            <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-3 items-stretch">

                {[
                    {
                        icon: "🚀",
                        title: "Our Vision",
                        subtitle: "Shaping Tomorrow's Landscape",
                        desc: "To be the catalyst that transforms ambition into achievement, where creativity fuels commerce and culture defines legacy. We envision a world where every space—digital or physical—becomes a masterpiece of innovation.",
                        color: "#facc15",
                    },
                    {
                        icon: "⭐",
                        title: "Our Mission",
                        subtitle: "Excellence Without Boundaries",
                        desc: "We architect experiences that transcend expectations. Through strategic insight, creative prowess, and unwavering commitment, we deliver solutions that anticipate tomorrow’s possibilities.",
                        color: "#eab308",
                    },
                    {
                        icon: "🤝",
                        title: "Our Promise",
                        subtitle: "Your Success, Our Legacy",
                        desc: "Every partnership is a journey of transformation. We invest not just our expertise, but our passion—ensuring your vision becomes a reality that inspires and evolves with you.",
                        color: "#eab308",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group relative h-full"
                    >

                        {/* Elegant Gold Border */}
                        <div className="
                                relative p-[1px] rounded-3xl
                                bg-gradient-to-br from-yellow-400/80 via-yellow-500 to-yellow-600/80
                                transition-all duration-500
                                group-hover:shadow-[0_0_35px_rgba(250,204,21,0.4)]
                                h-full
                            ">

                            {/* Card */}
                            <div className="
                                    relative flex flex-col h-full
                                    rounded-3xl p-8 sm:p-10
                                    bg-gradient-to-br from-[#141414] to-[#1c1c1c]
                                    border border-yellow-500/15
                                    backdrop-blur-xl
                                    transition-all duration-500
                                    group-hover:-translate-y-2
                                ">

                                {/* Soft Inner Glow */}
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 20% 10%, ${item.color}15, transparent 60%)`,
                                    }}
                                />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Icon */}
                                    <div className="text-5xl mb-6 transition-all duration-500 group-hover:scale-105">
                                        {item.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-2 tracking-tight">
                                        {item.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p
                                        className="text-base sm:text-lg font-medium mb-5 tracking-wide"
                                        style={{ color: item.color }}
                                    >
                                        {item.subtitle}
                                    </p>

                                    {/* Minimal Divider */}
                                    <div className="w-10 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 rounded-full transition-all duration-500 group-hover:w-16" />

                                    {/* Description */}
                                    <p className="text-base sm:text-lg leading-relaxed text-gray-400 mt-auto">
                                        {item.desc}
                                    </p>

                                </div>

                            </div>
                        </div>

                    </motion.div>
                ))}

            </div>

        </div>
        </section>
    )
}
