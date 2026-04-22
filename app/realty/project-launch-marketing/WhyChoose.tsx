

import { motion } from "framer-motion";
import { CheckCircle, Rocket } from "lucide-react";

export default function WhyChooseProjectLaunchSection() {
    return (
        <section className="relative py-4 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20 overflow-hidden">

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
                        Why Choose Us for Project Launch Marketing?
                    </h2>

                    <span className="text-[18px] tracking-widest uppercase bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Structured Real Estate Launch Campaign Experts
                    </span>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design aggressive pre-launch and launch marketing systems
                        that generate urgency, drive high-intent site visits,
                        and accelerate booking velocity in competitive Hyderabad markets.
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
                                What Makes Our Launch Strategy Different
                            </h3>

                            {[
                                "Pre-Launch Buzz & Investor Teaser Campaigns",
                                "High-Intent Buyer & NRI Audience Segmentation",
                                "Aggressive Google & Meta Ad Scaling",
                                "Launch-Optimized Landing Page Funnels",
                                "CRM Automation & Follow-Up Systems",
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
                                <Rocket className="text-[#C79A3B]" size={24} />
                                <h3 className="text-2xl font-semibold">
                                    Booking Acceleration Framework
                                </h3>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                We don’t just generate inquiries — we engineer structured
                                launch momentum. From awareness creation to booking conversion,
                                our campaigns are designed to maximize absorption rate
                                during the first 30–90 days of project launch.
                                Every strategy is aligned with pricing, urgency,
                                and serious buyer psychology.
                            </p>

                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}