"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const divisions = [
    {
        id: "01",
        title: "Époque Digital",
        description:
            "Crafting digital experiences that captivate, convert, and inspire. From web platforms to immersive applications, we build the future of your online presence.",
        image: "/tech.jpg",
        href: "/digital",
    },
    {
        id: "02",
        title: "Époque Realty",
        description:
            "Redefining real estate through innovation and insight. We connect vision with value, transforming properties into legacies.",
        image: "/reality.jpg",
        href: "/Realty",
    },
    {
        id: "03",
        title: "Époque Interiors",
        description:
            "Where spaces become stories. Our designs blend aesthetics with functionality, creating environments that elevate life and work.",
        image: "/interior.jpg",
        href: "/interiors",
    },
    {
        id: "04",
        title: "Revenue Architects",
        description:
            "Engineering growth through strategic frameworks. We design revenue models and operational systems that scale with precision and purpose.",
        image: "/architecture.jpg",
        href: "/revenue",
    },
]

export default function OurDivisions() {
    return (
        <section className="relative py-12 px-6 bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[1200px] h-[1200px] bg-blue-500/10 blur-[250px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">

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

                            {/* GRADIENT BORDER WRAPPER */}
                            <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-blue-500 group-hover:to-purple-500">

                                <Link
                                    href={item.href}
                                    className="relative block h-[420px] sm:h-[480px] rounded-xl overflow-hidden bg-black transform-style-3d transition-all duration-700 hover:rotate-y-2 hover:-translate-y-2"
                                >

                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">

                                        {/* ID Badge */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur rounded-full"
                                        >
                                            <span className="text-blue-400 text-sm font-semibold">
                                                {item.id}
                                            </span>
                                        </motion.div>

                                        <h3 className="text-3xl sm:text-4xl font-semibold mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed overflow-hidden max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                                            {item.description}
                                        </p>

                                        {/* Progress Bars */}
                                        <div className="mt-6 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="h-1 flex-1 rounded-full bg-white/20 overflow-hidden"
                                                >
                                                    <div className="h-full bg-gradient-to-r from-blue-400 to-yellow-400 w-0 group-hover:w-full transition-all duration-700" />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Explore */}
                                        <div className="mt-5 inline-flex items-center gap-2 text-blue-400 opacity-0 translate-x-[-10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                                            <span className="text-sm font-medium">
                                                Explore More
                                            </span>
                                            <svg
                                                className="w-4 h-4"
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
