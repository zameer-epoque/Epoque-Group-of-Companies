"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Globe, BarChart3 } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0b0b0d] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* SEO Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Best Digital Marketing Agency in Hyderabad for SEO, Google Ads & Performance Marketing
                    </h2>

                    <p className="mt-10 text-gray-400 text-lg leading-relaxed">
                        As a leading digital marketing agency in Hyderabad, we specialize in
                        Search Engine Optimization (SEO), Google Ads management, Meta advertising,
                        performance marketing campaigns, and high-converting lead generation funnels.
                        Our structured marketing frameworks are designed to increase organic rankings,
                        drive qualified traffic, reduce cost per acquisition, and maximize return on investment (ROI).
                    </p>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        Businesses across Hyderabad and India trust our data-driven digital marketing
                        strategies to build brand authority, dominate search engine results, and scale
                        predictable revenue growth. Every campaign is optimized using advanced analytics,
                        conversion tracking, and continuous performance improvement systems.
                    </p>

                    <div className="w-28 h-[3px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-12"></div>
                </motion.div>

                {/* Content Grid */}
                <div className="mt-24 grid md:grid-cols-2 gap-16">

                    {/* LEFT SIDE - SEO STRENGTH */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition duration-500">

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5">

                                <div className="flex items-center gap-4 mb-8">
                                    <Globe className="text-[#C79A3B]" size={26} />
                                    <h3 className="text-2xl font-semibold">
                                        Advanced SEO & Organic Growth Strategy
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Our SEO services in Hyderabad focus on technical optimization,
                                    keyword research, content strategy, link building, and local SEO
                                    implementation to improve Google rankings and long-term visibility.
                                </p>

                                {[
                                    "Technical SEO Audits & Website Optimization",
                                    "Keyword Research & Search Intent Mapping",
                                    "On-Page SEO & Structured Content Strategy",
                                    "High-Authority Link Building Campaigns",
                                    "Local SEO for Hyderabad Businesses",
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 mb-5">
                                        <CheckCircle className="text-[#C79A3B]" size={20} />
                                        <p className="text-gray-300 text-lg">{point}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - PERFORMANCE MARKETING */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition duration-500">

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5">

                                <div className="flex items-center gap-4 mb-8">
                                    <TrendingUp className="text-[#C79A3B]" size={26} />
                                    <h3 className="text-2xl font-semibold">
                                        Performance Marketing & Paid Advertising
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    Our Google Ads and Meta Ads campaigns are engineered for measurable
                                    lead generation and revenue growth. We optimize targeting, creative assets,
                                    bidding strategies, and conversion funnels for maximum ROAS.
                                </p>

                                {[
                                    "Google Search, Display & YouTube Ads",
                                    "Meta (Facebook & Instagram) Advertising",
                                    "Conversion Funnel Optimization",
                                    "Cost-Per-Lead (CPL) Reduction Strategies",
                                    "Advanced Analytics & ROI Reporting",
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 mb-5">
                                        <BarChart3 className="text-[#C79A3B]" size={20} />
                                        <p className="text-gray-300 text-lg">{point}</p>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}