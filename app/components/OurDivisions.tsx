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
            "SEO-driven digital marketing, performance advertising, and web development solutions designed to scale brands and businesses in Hyderabad and beyond.",
        image: "/tech.jpg",
        href: "/digital/best-digital-marketing-agency-in-hyderabad",
        cta: "Explore Digital Marketing Services",
        alt: "Digital marketing and SEO services in Hyderabad",
    },
    {
        id: "02",
        title: "Époque Realty",
        description:
            "Luxury villas, gated community , HMDA approved lands, and premium real estate opportunities across Hyderabad’s fastest growing investment corridors.",
        image: "/reality.jpg",
        href: "/realty",
        cta: "Get More Villas ",
        alt: "Luxury villas and apartments for sale in Hyderabad",
    },
    {
        id: "03",
        title: "Époque Interiors",
        description:
            "Premium residential and commercial interior design solutions crafted to elevate lifestyle spaces and modern work environments.",
        image: "/interior.jpg",
        href: "/interiors",
        cta: "View Interior Projects",
        alt: "Luxury interior design services in Hyderabad",
    },
    {
        id: "04",
        title: "Revenue Architects",
        description:
            "Strategic revenue growth consulting, sales optimization frameworks, and business scaling systems built for sustainable enterprise expansion.",
        image: "/architecture.jpg",
        href: "/revenue",
        cta: "Discover Revenue Strategy",
        alt: "Revenue growth consulting and business scaling solutions",
    },
]

export default function OurDivisions() {
    const router = useRouter()

    return (
        <section
            className="relative py-20 px-6 bg-black text-white overflow-hidden"
            aria-label="Our Business Divisions - Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
        >

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

                    {/* SEO Supporting Line */}
                    <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
                        From luxury villas and plots in Hyderabad to digital marketing,
                        interior design execution, and revenue growth consulting —
                        Époque Group delivers integrated business and property solutions.
                    </p>
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
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">

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

                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                                            {item.title}
                                        </h3>

                                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                                            {item.description}
                                        </p>

                                        {/* CTA */}
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
