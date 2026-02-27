"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function WhyChoosePropertyLeadSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20 overflow-hidden">

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
                        Why Choose Us for Property Lead Generation?
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We build structured real estate performance systems designed
                        to attract serious buyers, reduce CPL and increase bookings.
                    </p>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] mx-auto mt-8"></div>
                </motion.div>

                {/* Grid */}
                <div className="mt-16 grid md:grid-cols-2 gap-12">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="p-12 rounded-2xl bg-[#18181b] border border-[#C79A3B] hover:-translate-y-3 transition duration-500 shadow-xl">

                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Our Lead System Different
                            </h3>

                            {[
                                "High-Intent Buyer Targeting",
                                "Google Search & Meta Scaling Expertise",
                                "NRI & Global Investor Campaigns",
                                "Conversion-Optimized Landing Funnels",
                                "CRM Integration & Lead Tracking"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-[#C79A3B] mt-1" size={20} />
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
                    >
                        <div className="p-12 rounded-2xl bg-[#1c1c1f] border border-[#C79A3B] hover:-translate-y-3 transition duration-500 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="text-[#C79A3B]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Revenue-Focused Performance Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                Our property lead generation campaigns are engineered
                                to maximize booking probability. We focus on qualified
                                buyers, not just lead volume — ensuring better ROI
                                and faster project absorption rates.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}