"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

export default function WhyChooseBrandingSection() {
    return (
        <section className="relative py-12 px-6 bg-[#0f0f11] text-white border-t border-orange-400/20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-400/10 blur-[180px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        Why Choose Epoque Group?
                    </h2>

                    <span className="text-[18px] tracking-widest uppercase bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Branding & Creative Experts in Hyderabad
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We build structured brand identity systems that elevate
                        perception, strengthen positioning, and drive measurable
                        business growth in competitive markets.
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-10"></div>
                </motion.div>

                {/* Grid */}
                <div className="mt-20 grid md:grid-cols-2 gap-12">

                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-12 rounded-2xl bg-[#18181b] border border-orange-400 transition duration-500 hover:-translate-y-3 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Our Branding Different
                            </h3>

                            {[
                                "Strategic Brand Discovery & Market Research",
                                "Premium Visual Identity Systems",
                                "Clear Positioning & Differentiation",
                                "Creative Campaign Alignment",
                                "Scalable Brand Frameworks",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-orange-400 mt-1" size={20} />
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
                    >
                        <div className="p-12 rounded-2xl bg-[#1c1c1f] border border-orange-400 transition duration-500 hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="text-orange-400" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Long-Term Brand Authority Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don’t just design logos — we create premium brand systems
                                aligned with your long-term business goals. Every visual element
                                is built to increase trust, recognition, and revenue potential.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}