"use client"

import { motion, Variants } from "framer-motion"
import { Sparkles, Sofa, ScanLine, LayoutGrid } from "lucide-react"
import Link from "next/link"
import PremiumCTA from "../components/PremiumCTA"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
}

export default function InteriorsPage() {
    return (
        <section
            className="relative bg-black text-white overflow-hidden"
            aria-label="Luxury Interior Designers in Hyderabad - Home and Villa Interior Design"
        >

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-orange-500/25 to-red-500/25 blur-[180px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 blur-[180px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HERO */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-orange-400">
                        Luxury Interior Designers in Hyderabad
                    </span>

                    <h1 className="font-heading text-5xl md:text-6xl font-semibold mt-6 leading-tight">
                        Premium Home & Villa{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Interior Design
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300">
                        Modular Kitchens • Custom Furniture • Office Interiors
                    </p>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-3xl mx-auto">
                        Époque Interiors is a luxury interior design company in Hyderabad
                        specializing in villa interiors, apartment interiors, modular kitchen design,
                        custom furniture solutions, and office space optimization.
                        We blend aesthetics, functionality, and intelligent planning
                        to create timeless living and working environments.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Book Interior Consultation
                        </Link>
                    </div>
                </motion.div>

                {/* CORE SERVICES */}
                <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        {
                            icon: <Sparkles size={28} />,
                            title: "Home & Villa Interiors",
                            desc: "Luxury interior design for villas, gated community homes, and premium apartments across Hyderabad."
                        },
                        {
                            icon: <ScanLine size={28} />,
                            title: "3D & AR Visualization",
                            desc: "Advanced 3D interior visualization and walkthroughs to preview your design before execution."
                        },
                        {
                            icon: <Sofa size={28} />,
                            title: "Modular Kitchen & Furniture",
                            desc: "Custom modular kitchens, wardrobes, and bespoke furniture crafted for elegance and durability."
                        },
                        {
                            icon: <LayoutGrid size={28} />,
                            title: "Office & Commercial Design",
                            desc: "Modern office interior design focused on productivity, branding, and ergonomic excellence."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1] as const
                            }}
                            className="group relative h-full"
                        >

                            <div className="relative p-[1.5px] rounded-3xl
                                bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500
                                transition-all duration-500
                                group-hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]
                                h-full">

                                <div className="relative h-full rounded-3xl p-8
                                    bg-gradient-to-br from-[#121212] to-[#1c1c1c]
                                    border border-orange-500/20
                                    transition-all duration-500
                                    group-hover:-translate-y-3
                                    group-hover:scale-[1.03]">

                                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/15 to-transparent blur-2xl" />

                                    <div className="relative z-10">

                                        <div className="text-orange-400 mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                            {item.icon}
                                        </div>

                                        <h3 className="text-lg font-semibold mb-3 group-hover:text-orange-400 transition">
                                            {item.title}
                                        </h3>

                                        <div className="w-12 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-500 mb-5 rounded-full group-hover:w-20 transition-all duration-500" />

                                        <p className="text-sm text-gray-400 leading-relaxed">
                                            {item.desc}
                                        </p>

                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* SEO CONTENT BLOCK */}
                <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-4xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent"
                    >
                        Best Interior Designers in Hyderabad for Luxury Living
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed"
                    >
                        Whether you are designing a new villa, renovating an apartment,
                        or building a premium office, our interior design solutions
                        combine creativity with technical precision.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-500 leading-relaxed"
                    >
                        We specialize in modular kitchen design, custom wardrobes,
                        living room interiors, false ceiling design, lighting layouts,
                        and complete turnkey interior execution across Hyderabad.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed italic"
                    >
                        Transform your house into a personalized masterpiece with Époque Interiors.
                    </motion.p>
                </div>

            </div>
            <PremiumCTA/>
        </section>
    )
}
