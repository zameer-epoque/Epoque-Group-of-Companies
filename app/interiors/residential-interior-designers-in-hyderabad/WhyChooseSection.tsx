"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0F172A] text-white border-t border-[#D4AF37]/20 overflow-hidden">

            {/* Gold Glow */}
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
                        Why Choose Epoque Group for Residential Interiors?
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design luxury residential interiors that combine architectural
                        precision, premium craftsmanship and timeless aesthetics for
                        elevated everyday living.
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
                                What Makes Our Residential Designs Different
                            </h3>

                            {[
                                "Customized Villa & Apartment Interior Concepts",
                                "Premium Imported Materials & Finishes",
                                "Space-Optimized Modern Layout Planning",
                                "Vastu-Aligned Residential Design Solutions",
                                "Structured Turnkey Project Execution"
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
                                <Home className="text-[#D4AF37]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Designed for Refined Living
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our residential interior projects are crafted for homeowners
                                who value elegance, comfort and long-term durability.
                                From premium villas in Jubilee Hills to modern apartments
                                in Gachibowli, we create homes that reflect sophistication
                                and personal identity.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}