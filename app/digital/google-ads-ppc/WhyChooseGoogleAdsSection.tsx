"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function WhyChooseGoogleAdsSection() {
    return (
        <section className="relative py-12 px-6 bg-[#0f0f11] text-white border-t border-orange-400/20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-400/10 blur-[180px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Heading Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight py-2">
                        Why Choose Epoque Group?
                    </h2>

                    <span className="text-[20px] tracking-widest uppercase bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Google Ads & PPC Agency in Hyderabad
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        As a performance-driven Google Ads agency in Hyderabad,
                        we build data-backed PPC strategies designed to maximize
                        conversions, reduce cost-per-click (CPC), and increase
                        return on ad spend (ROAS). Our structured paid advertising
                        systems help businesses generate high-intent traffic,
                        qualified leads, and measurable revenue growth.
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-10"></div>
                </motion.div>

                {/* Grid Section */}
                <div className="mt-20 grid md:grid-cols-2 gap-12">

                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative p-12 rounded-2xl bg-[#18181b] border border-orange-400 group-hover:-translate-y-3 transition duration-500 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Our PPC Campaigns Different
                            </h3>

                            {[
                                "Advanced Keyword & Competitor Research",
                                "High-Converting Ad Copy & Creative Strategy",
                                "Conversion Tracking & Analytics Setup",
                                "Budget Optimization & Smart Bidding",
                                "Transparent ROAS & Performance Reporting",
                            ].map((point, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-orange-400 mt-1" size={20} />
                                    <p className="text-gray-300 text-lg">{point}</p>
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
                        className="group relative"
                    >
                        <div className="relative p-12 rounded-2xl bg-[#1c1c1f] border border-orange-400 group-hover:-translate-y-3 transition duration-500 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="text-orange-400" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Scalable High-ROI Growth Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don’t just run ads — we engineer scalable paid acquisition
                                systems aligned with your revenue goals. From search and
                                display campaigns to YouTube ads and Performance Max,
                                every PPC strategy is optimized for higher conversion rates,
                                improved quality scores, and long-term advertising profitability.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}