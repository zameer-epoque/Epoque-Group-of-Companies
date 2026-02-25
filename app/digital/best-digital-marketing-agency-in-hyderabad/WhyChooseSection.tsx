"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, BarChart3 } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-28 px-6 bg-[#0b0b0d] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px] rounded-full"></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Why We’re Considered the Best Digital Marketing Agency in Hyderabad
                    </h2>

                    <p className="mt-10 text-gray-400 text-lg leading-relaxed">
                        We combine strategic thinking, advanced analytics, and creative execution
                        to build scalable digital growth systems. From SEO and performance marketing
                        to paid advertising and funnel optimization, our approach is engineered
                        for measurable business impact and long-term revenue growth.
                    </p>

                    <div className="w-24 h-[3px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-10"></div>
                </motion.div>

                {/* Content Grid */}
                <div className="mt-24 grid md:grid-cols-2 gap-14">

                    {/* Left Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] group-hover:shadow-[0_0_50px_rgba(199,154,59,0.4)] transition duration-500">

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 group-hover:-translate-y-4 transition duration-500">

                                <h3 className="text-2xl font-semibold mb-10">
                                    What Sets Us Apart
                                </h3>

                                {[
                                    "Data-Driven Digital Growth Frameworks",
                                    "Advanced SEO & Performance Marketing Expertise",
                                    "High-ROI Google & Meta Advertising Campaigns",
                                    "Conversion-Focused Funnel & Landing Page Systems",
                                    "Transparent Reporting & Revenue Attribution",
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 mb-6">
                                        <CheckCircle className="text-[#C79A3B] mt-1" size={20} />
                                        <p className="text-gray-300 text-lg">{point}</p>
                                    </div>
                                ))}

                            </div>
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
                        <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] group-hover:shadow-[0_0_50px_rgba(199,154,59,0.4)] transition duration-500">

                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 group-hover:-translate-y-4 transition duration-500">

                                <div className="flex items-center gap-4 mb-6">
                                    <TrendingUp className="text-[#C79A3B]" size={26} />
                                    <h3 className="text-2xl font-semibold">
                                        Revenue-Driven Strategy
                                    </h3>
                                </div>

                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Our marketing systems are designed around one core objective —
                                    measurable revenue growth. Every campaign is backed by
                                    conversion tracking, real-time optimization, and advanced
                                    performance analytics to ensure maximum ROI and scalable results.
                                </p>

                                <div className="flex items-center gap-4 mt-10">
                                    <BarChart3 className="text-[#C79A3B]" size={24} />
                                    <p className="text-gray-300 text-lg">
                                        Performance Tracking • ROI Optimization • Scalable Growth
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}