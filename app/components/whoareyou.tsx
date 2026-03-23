"use client"

import { motion } from "framer-motion"
import {
    Building2,
    Megaphone,
    Palette,
    TrendingUp
} from "lucide-react"

export default function WhoWeAre() {
    return (
        <section
            className="relative py-14 px-6 overflow-hidden bg-black text-white"
            aria-label="Who We Are - Époque Group Real Estate, Digital, Interiors and Revenue Experts in Hyderabad"
        >

            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 blur-[220px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* Header (UNCHANGED) */}
                {/* Your header code remains exactly same */}

                {/* Cards Grid */}
                <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">

                    {[
                        {
                            icon: Building2,
                            title: "Real Estate Excellence",
                            desc: "Delivering premium villas, gated community, and investment-driven real estate opportunities across Hyderabad’s fastest growing corridors.",
                            color: "#facc15",
                        },
                        {
                            icon: Megaphone,
                            title: "Digital Marketing",
                            desc: "Performance-driven SEO, paid advertising, and brand growth strategies engineered to scale modern businesses and digital-first enterprises.",
                            color: "#eab308",
                        },
                        {
                            icon: Palette,
                            title: "Interior Design",
                            desc: "Luxury residential and commercial interior solutions crafted to elevate lifestyle, workspace functionality, and design identity.",
                            color: "#ca8a04",
                        },
                        {
                            icon: TrendingUp,
                            title: "Revenue Growth",
                            desc: "Strategic revenue consulting frameworks designed to optimize sales systems, scale operations, and accelerate sustainable business growth.",
                            color: "#a16207",
                        },
                    ].map((item, index) => {
                        const Icon = item.icon

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.15, duration: 0.7 }}
                                viewport={{ once: true }}
                                className="group relative h-full"
                            >

                                {/* Gradient Border */}
                                <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] transition-all duration-500 h-full">

                                    {/* Card */}
                                    <div className="relative flex flex-col justify-between h-full rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-yellow-500/20 transition-all duration-500 group-hover:-translate-y-3">

                                        {/* Glow */}
                                        <div
                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                                            style={{
                                                background: `radial-gradient(circle at top left, ${item.color}30, transparent 70%)`,
                                            }}
                                        />

                                        <div className="relative z-10">

                                            {/* NEW ICON */}
                                            <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                                                <Icon
                                                    size={48}
                                                    strokeWidth={1.5}
                                                    className="text-yellow-400"
                                                />
                                            </div>

                                            <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-4">
                                                {item.title}
                                            </h2>

                                            <p className="text-base sm:text-lg leading-relaxed text-gray-400">
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