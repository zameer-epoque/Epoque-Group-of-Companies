"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2 } from "lucide-react";

export default function WhyChooseCommercialInteriorSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20 overflow-hidden">

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
                    <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Why Choose Epoque Group for Commercial Interiors?
                    </h2>

                    <span className="text-[16px] tracking-widest uppercase text-[#D4AF37]">
                        Premium Commercial Interior Designers in Hyderabad
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design modern, high-performance commercial interiors
                        aligned with brand identity, business workflow and
                        long-term scalability. Our structured approach ensures
                        professional execution and premium finishing standards.
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
                                What Makes Our Commercial Interiors Different
                            </h3>

                            {[
                                "Strategic Space Planning & Workflow Optimization",
                                "Corporate Brand-Aligned Design Concepts",
                                "Premium Materials & High-End Finishes",
                                "Turnkey Commercial Execution",
                                "Transparent Budgeting & Timely Delivery",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle
                                        className="text-[#D4AF37] mt-1"
                                        size={20}
                                    />
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
                        <div className="p-12 rounded-2xl bg-[#0F172A] border border-[#D4AF37]/40 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="text-[#D4AF37]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Business-Focused Interior Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We design commercial interiors that enhance productivity,
                                employee collaboration and client experience. From IT offices
                                in HITEC City to executive corporate spaces in Financial District,
                                every project is engineered to reflect authority, professionalism
                                and long-term operational efficiency.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}