"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function WhyChooseContentMarketingSection() {
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
                        Content Marketing Agency in Hyderabad
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We build SEO-driven content ecosystems that increase organic traffic,
                        strengthen domain authority, and convert readers into qualified leads.
                        Our strategies combine search intent research, storytelling,
                        and performance optimization.
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-10"></div>
                </motion.div>

                {/* Grid */}
                <div className="mt-20 grid md:grid-cols-2 gap-12">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-12 rounded-2xl bg-[#18181b] border border-orange-400 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Our Content Strategy Different
                            </h3>

                            {[
                                "Advanced Keyword & Search Intent Research",
                                "SEO-Optimized Long-Form Content",
                                "Authority & Brand Positioning Frameworks",
                                "Conversion-Focused Copywriting",
                                "Performance Tracking & Content Audits",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-orange-400 mt-1" size={20} />
                                    <p className="text-gray-300 text-lg">{item}</p>
                                </div>
                            ))}

                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-12 rounded-2xl bg-[#1c1c1f] border border-orange-400 transition duration-500 group-hover:-translate-y-3 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="text-orange-400" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Long-Term Organic Growth Systems
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don’t just create blogs — we design structured content
                                ecosystems aligned with Google’s algorithm updates.
                                Every piece of content is built to improve rankings,
                                engagement, and revenue over time.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}