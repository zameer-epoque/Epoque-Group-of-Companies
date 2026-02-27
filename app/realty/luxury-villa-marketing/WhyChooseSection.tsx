"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

export default function WhyChooseLuxuryVillaMarketingSection() {
    return (
        <section className="relative py-12 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C79A3B]/10 blur-[180px] rounded-full"></div>

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
                        Why Choose Us for Luxury Villa Marketing?
                    </h2>

                    <span className="text-[18px] tracking-widest uppercase bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Premium Real Estate Campaign Experts in Hyderabad
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design structured, high-performance marketing systems
                        specifically for ultra-luxury villa projects targeting
                        HNIs, CXOs, entrepreneurs, and global NRI investors.
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] mx-auto mt-10"></div>
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
                        <div className="p-12 rounded-2xl bg-[#18181b] border border-[#C79A3B] transition duration-500 hover:-translate-y-3 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Our Villa Campaigns Different
                            </h3>

                            {[
                                "Luxury Brand Positioning & Messaging Strategy",
                                "HNI & NRI Audience Targeting Frameworks",
                                "High-Budget Google & Meta Campaign Management",
                                "Conversion-Focused Landing Page Systems",
                                "Booking-Optimized Funnel Architecture",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-[#C79A3B] mt-1" size={20} />
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
                        <div className="p-12 rounded-2xl bg-[#1c1c1f] border border-[#C79A3B] transition duration-500 hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles className="text-[#C79A3B]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Revenue-Driven Luxury Growth Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don’t just generate inquiries — we build structured
                                villa marketing systems aligned with pricing strategy,
                                booking velocity, and long-term developer brand authority.
                                Every campaign is engineered for serious, high-ticket buyers.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}