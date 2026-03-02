"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-2 px-6 bg-[#0F172A] text-white border-t border-[#D4AF37]/20 overflow-hidden">

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
                        Why Choose Epoque Group for Interior Design?
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We combine luxury aesthetics, functional space planning and
                        premium execution standards to deliver sophisticated home
                        and villa interiors in Hyderabad’s prime residential areas.
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
                                What Makes Our Interiors Stand Out
                            </h3>

                            {[
                                "Luxury Villa & Apartment Interior Expertise",
                                "Premium Materials & Elegant Finishing Standards",
                                "Customized Layout & Lifestyle-Based Planning",
                                "Vastu-Aligned Design Approach",
                                "Structured Turnkey Interior Execution",
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
                        <div className="p-12 rounded-2xl bg-[#0B0F19] border border-[#D4AF37]/40 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <Home className="text-[#D4AF37]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Luxury Living, Designed with Precision
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                From premium villas in Jubilee Hills to high-end apartments
                                in Kokapet and Gachibowli, we design interiors that reflect
                                sophistication, comfort and long-term value. Every project
                                is carefully executed to meet the expectations of discerning homeowners.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}