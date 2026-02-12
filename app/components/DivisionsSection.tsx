"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const divisions = [
    {
        title: "Digital",
        subtitle: "Innovation & Technology",
        href: "/digital",
        gradient:
            "bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]",
    },
    {
        title: "Realty",
        subtitle: "Premium Real Estate",
        href: "/realty",
        gradient:
            "bg-gradient-to-br from-[#7A2E63] via-[#D45B5B] to-[#C79A3B]",
    },
    {
        title: "Interiors",
        subtitle: "Architecture & Design",
        href: "/interiors",
        gradient:
            "bg-gradient-to-br from-[#1F4D4D] via-[#7A2E63] to-[#C79A3B]",
    },
]

export default function EpoqueDivisions() {
    return (
        <section className="relative min-h-screen bg-[#0B0B0F] flex items-center justify-center overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-[1000px] h-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#7A2E63]/10 to-[#1F4D4D]/10 blur-[200px]" />

            <div className="relative flex flex-col md:flex-row items-center gap-10 perspective-[2000px]">

                {divisions.map((item, index) => (
                    <Link key={index} href={item.href}>

                        <motion.div
                            initial={{
                                rotateY: index === 1 ? 0 : index === 0 ? 25 : -25,
                                scale: index === 1 ? 1 : 0.9,
                            }}
                            whileHover={{
                                rotateY: 0,
                                scale: 1.08,
                                y: -10,
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                            className={`relative w-[260px] md:w-[320px] h-[420px] md:h-[500px] rounded-xl shadow-2xl cursor-pointer ${item.gradient}`}
                            style={{ transformStyle: "preserve-3d" }}
                        >

                            {/* Book Spine Effect */}
                            <div className="absolute left-0 top-0 h-full w-4 bg-black/20" />

                            {/* Halftone Texture Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.15),transparent_40%)] opacity-60" />

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-between text-white">

                                <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
                                    {item.title}
                                </h2>

                                <div>
                                    <p className="text-sm md:text-base opacity-80 mb-6">
                                        {item.subtitle}
                                    </p>

                                    <span className="text-sm uppercase tracking-wider border-b border-white/50 pb-1">
                                        Explore Division →
                                    </span>
                                </div>

                            </div>

                            {/* Shadow Depth */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/40 blur-xl rounded-full" />

                        </motion.div>

                    </Link>
                ))}

            </div>
        </section>
    )
}
