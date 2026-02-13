"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const divisions = [
    {
        id: "01",
        title: "Époque Digital",
        description:
            "Crafting digital experiences that captivate, convert, and inspire. From web platforms to immersive applications, we build the future of your online presence.",
        image: "/tech.jpg",
        href: "/digital",
        cta: "Explore Digital Division",
    },
    {
        id: "02",
        title: "Époque Realty",
        description:
            "Redefining real estate through innovation and insight. We connect vision with value, transforming properties into legacies.",
        image: "/reality.jpg",
        href: "/realty",
        cta: "Get More Realty Services",
    },
    {
        id: "03",
        title: "Époque Interiors",
        description:
            "Where spaces become stories. Our designs blend aesthetics with functionality, creating environments that elevate life and work.",
        image: "/interior.jpg",
        href: "/interiors",
        cta: "View Creative Portfolio",
    },
    {
        id: "04",
        title: "Revenue Architects",
        description:
            "Engineering growth through strategic frameworks. We design revenue models and operational systems that scale with precision and purpose.",
        image: "/architecture.jpg",
        href: "/revenue",
        cta: "Discover Our Strategy",
    },
]

export default function OurDivisions() {
    const router = useRouter()

    return (
        <section className="relative py-20 px-6 bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION TITLE */}
                <div className="text-center mb-16">
                    <h2 className="relative inline-block text-4xl md:text-5xl font-semibold tracking-wide">
                        Our{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Divisions
                        </span>

                        <span
                            className="
                absolute left-0 -bottom-3 h-[3px] w-full
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                bg-[length:200%_100%]
                animate-gradientMove
                rounded-full
              "
                        />
                    </h2>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {divisions.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="group perspective"
                        >
                            <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-600">

                                <Link
                                    href={item.href}
                                    className="relative block h-[460px] sm:h-[500px] rounded-xl overflow-hidden bg-black transform-style-3d transition-all duration-700 hover:rotate-y-2 hover:-translate-y-2"
                                >

                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">

                                        {/* ID */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur rounded-full"
                                        >
                                            <span className="text-yellow-400 text-sm font-semibold">
                                                {item.id}
                                            </span>
                                        </motion.div>

                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        {/* Progress Bars */}
                                        <div className="mt-2 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden"
                                                >
                                                    <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 w-full transition-all duration-700" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA FIXED FOR MOBILE */}
                                        <div
                                            onClick={(e) => {
                                                e.preventDefault()
                                                e.stopPropagation()
                                                router.push(item.href)
                                            }}
                                            className="
                        mt-6 inline-flex items-center gap-3
                        px-5 py-2.5 rounded-full
                        bg-gradient-to-r from-yellow-400/20 to-red-400/20
                        border border-red-400/40
                        backdrop-blur-md
                        text-red-400
                        hover:from-yellow-400/40 hover:to-red-500/40
                        hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]
                        hover:scale-105
                        transition-all duration-300
                        cursor-pointer
                      "
                                        >
                                            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
                                                {item.cta}
                                            </span>

                                            <svg
                                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>

                                    </div>

                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition duration-700" />

                                </Link>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
