
"use client"

import { motion } from "framer-motion"

export default function LeadGenerationPage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        High-Converting{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Lead Generation
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We build data-driven funnels that attract, nurture, and convert
                        qualified prospects into real customers for your business.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Start Generating Leads
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Landing Page Funnels",
                        desc: "Custom high-converting landing pages designed to capture qualified leads."
                    },
                    {
                        title: "Paid Ads Campaigns",
                        desc: "Google & Social media ads optimized for maximum ROI and conversions."
                    },
                    {
                        title: "CRM & Automation",
                        desc: "Automated follow-ups, WhatsApp integration & email nurturing systems."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20 h-full">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* ================= PROCESS SECTION ================= */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-4xl font-semibold mb-16">
                        Our Lead Generation Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">

                        {[
                            "Audience Research",
                            "Funnel Creation",
                            "Traffic Generation",
                            "Conversion Optimization"
                        ].map((step, index) => (
                            <div key={index} className="space-y-4">
                                <div className="text-4xl font-bold text-orange-400">
                                    0{index + 1}
                                </div>
                                <p>{step}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            <div className="py-28 px-6 text-center">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-4xl font-semibold leading-tight">
                        Ready to Scale Your Business with Qualified Leads?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s build a predictable lead generation system that drives
                        consistent growth and measurable ROI.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Book Free Strategy Call Now
                        </a>
                    </div>

                </div>
            </div>

        </section>
    )
}




