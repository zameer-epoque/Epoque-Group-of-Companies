"use client";

import { motion } from "framer-motion";
import { CheckCircle, Crown } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0F172A] text-white border-t border-[#D4AF37]/20 overflow-hidden">

            {/* Subtle Gold Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 blur-[180px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold  bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Why Choose Epoque Group for Luxury Interiors Design?
                    </h2>
                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We specialize in ultra-premium interior design tailored for
                        discerning homeowners seeking sophistication, exclusivity
                        and flawless execution in every detail.
                    </p>

                    <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-10"></div>
                </motion.div>

                {/* Grid */}
                <div className="mt-20 grid md:grid-cols-2 gap-12">

                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-12 rounded-2xl bg-[#111827] border border-[#D4AF37]/40 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8 text-[#D4AF37]">
                                What Sets Our Luxury Interiors Apart
                            </h3>

                            {[
                                "Bespoke Design Concepts for Villas & Penthouses",
                                "Premium Imported Materials & Finishes",
                                "Customized Furniture & Lighting Solutions",
                                "Vastu-Aligned Planning with Modern Aesthetics",
                                "Structured Turnkey Execution with Precision"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-[#D4AF37] mt-1" size={20} />
                                    <p className="text-gray-300 text-lg">{item}</p>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-12 rounded-2xl bg-[#0B0F19] border border-[#D4AF37]/40 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <Crown className="text-[#D4AF37]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Designed for Elevated Living
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our luxury interior projects are crafted to reflect
                                refined taste and long-term value. From premium villas
                                in Jubilee Hills to exclusive residences in Kokapet,
                                we deliver interiors that combine architectural intelligence,
                                elegance and timeless sophistication.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}