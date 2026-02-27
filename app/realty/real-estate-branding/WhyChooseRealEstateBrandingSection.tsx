"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";

export default function WhyChooseRealEstateBrandingSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20 overflow-hidden">

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C79A3B]/10 blur-[180px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold">
                        Why Developers Choose Our Branding Strategy
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg">
                        We design structured identity systems that
                        increase project credibility and buyer confidence.
                    </p>
                </motion.div>

                <div className="mt-16 grid md:grid-cols-2 gap-12">

                    <div className="p-12 rounded-2xl bg-[#18181b] border border-[#C79A3B] shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6">
                            Our Branding Strengths
                        </h3>

                        {[
                            "Luxury Logo & Visual Identity Systems",
                            "Project Naming & Positioning Strategy",
                            "Premium Brochure & Creative Assets",
                            "Brand Guidelines & Visual Consistency",
                            "Launch Campaign Brand Alignment"
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-5">
                                <CheckCircle className="text-[#C79A3B] mt-1" size={20} />
                                <p className="text-gray-300 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-12 rounded-2xl bg-[#1c1c1f] border border-[#C79A3B] shadow-xl">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="text-[#C79A3B]" size={24} />
                            <h3 className="text-2xl font-semibold">
                                Authority-Driven Brand Framework
                            </h3>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            Our branding process ensures your project
                            stands apart in competitive Hyderabad markets —
                            increasing perceived value, pricing confidence
                            and booking conversion rates.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}