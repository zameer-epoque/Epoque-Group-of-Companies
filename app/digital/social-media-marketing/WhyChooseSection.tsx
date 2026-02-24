"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp } from "lucide-react";

export default function WhyChooseSection() {
    return (
        <section className="relative py-12 px-6 bg-[#0f0f11] text-white border-t border-orange-400/20 overflow-hidden">

            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-400/10 blur-[180px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight py-2">
                        Why Choose Epoque Group?
                    </h2> <span className="text-[20px] tracking-widest text-orange-400 uppercase ">
                        Social Media Marketing Agency in Hyderabad
                    </span>



                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
  As a leading Social Media Marketing agency in Hyderabad, we specialize in
  Instagram marketing, Facebook Ads management, Meta performance campaigns,
  paid social media advertising, and high-conversion lead generation funnels.
  Our strategies combine creative content production with precision targeting
  and advanced analytics to maximize engagement, reduce cost per lead, and
  increase revenue. Every campaign is continuously optimized to ensure
  scalable growth and sustainable business performance.
</p>

                    <div className="w-24 h-[2px] bg-orange-400 mx-auto mt-10"></div>
                </motion.div>

                <div className="mt-20 grid md:grid-cols-2 gap-12">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative p-12 rounded-2xl bg-[#18181b] border border-orange-400 group-hover:-translate-y-3 transition duration-500 shadow-xl">
                            <h3 className="text-2xl font-semibold mb-8">
                                What Makes Us Different
                            </h3>

                            {[
                                "Hyderabad Market Expertise",
                                "Advanced Instagram & Meta Ads Targeting",
                                "Performance-Focused Paid Campaigns",
                                "Creative + Data Driven Strategy",
                                "Transparent ROI Reporting",
                            ].map((point, index) => (
                                <div key={index} className="flex items-start gap-4 mb-5">
                                    <CheckCircle className="text-orange-400 mt-1" size={20} />
                                    <p className="text-gray-300 text-lg">{point}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="relative p-18 rounded-2xl bg-[#1c1c1f] border border-orange-400 group-hover:-translate-y-3 transition duration-500 shadow-xl">

                            <div className="flex items-center gap-3 mb-6">
                                <TrendingUp className="text-orange-400" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Growth-Focused Strategy
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We design performance-driven marketing ecosystems that align directly with your business objectives.
                                From advanced audience targeting to continuous campaign optimization, every strategy is built
                                to maximize ROI, accelerate revenue growth, and ensure sustainable long-term scalability.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}