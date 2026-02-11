"use client"

import { motion, Variants } from "framer-motion"
import { Sparkles, Sofa, ScanLine, LayoutGrid } from "lucide-react"
import Link from "next/link"

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
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
        <section className="relative bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#C79A3B]/20 to-[#7A2E63]/30 blur-[160px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#D45B5B]/20 to-[#C79A3B]/20 blur-[160px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HERO */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="text-xs uppercase tracking-[0.4em] text-[#C79A3B]">
                        Luxury Interior Innovation
                    </span>

                    <h1 className="font-heading text-5xl md:text-6xl font-semibold mt-6 leading-tight">
                        Époque{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Interiors
                        </span>
                    </h1>

                    <p className="mt-6 text-xl text-gray-300">
                        Design It Yourself — Curate • Create • Customize
                    </p>

                    <p className="mt-6 text-gray-400 leading-relaxed max-w-2xl mx-auto">
                        A next-generation interior design ecosystem blending digital visualization,
                        modular engineering, and personalized material intelligence.
                    </p>

                    <div className="mt-10 flex justify-center gap-6 flex-wrap">
                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Start Designing
                        </Link>


                    </div>
                </motion.div>

                {/* CORE SERVICES */}
                <div className="mt-28 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {[
                        {
                            icon: <Sparkles size={26} />,
                            title: "DIY Design Frameworks",
                            desc: "Interactive tools empowering clients to co-create layouts, themes, and curated aesthetics."
                        },
                        {
                            icon: <ScanLine size={26} />,
                            title: "AR/VR Visualization",
                            desc: "Immersive previews enabling accurate spatial decisions before execution begins."
                        },
                        {
                            icon: <Sofa size={26} />,
                            title: "Modular & Custom Furniture",
                            desc: "Precision-crafted furniture systems balancing elegance and functionality."
                        },
                        {
                            icon: <LayoutGrid size={26} />,
                            title: "Ergonomic Space Optimization",
                            desc: "Scientific workflow mapping and spatial intelligence for modern lifestyles."
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
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C79A3B] hover:-translate-y-3 transition-all duration-300"
                        >
                            <div className="text-[#C79A3B] mb-5">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-3 group-hover:text-[#C79A3B] transition">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] group-hover:w-full transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>

                {/* SEO SECTION */}
                <div className="mt-32 text-center max-w-4xl mx-auto space-y-8">

                    <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-4xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent"
                    >
                        Redefining Luxury Interior Design in India
                    </motion.h2>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed"
                    >
                        Modern interior design is no longer passive — it is collaborative,
                        data-driven, and deeply personal.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-500 leading-relaxed"
                    >
                        Époque Interiors integrates digital visualization, material
                        intelligence, and ergonomic science to craft environments
                        that inspire productivity, elegance, and identity.
                    </motion.p>

                    <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-gray-400 leading-relaxed italic"
                    >
                        Don’t just live in a space — design it your way.
                    </motion.p>
                </div>

            </div>
        </section>
    )
}
