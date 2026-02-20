"use client"

import { motion } from "framer-motion"

export default function BrandingCreativePage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Powerful{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Branding & Creative
                        </span>{" "}
                        Solutions
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We craft strong brand identities, stunning visuals, and
                        high-impact creative assets that position your business
                        as a market leader.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Build Your Brand
                        </a>
                    </div>
                </div>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Logo & Brand Identity",
                        desc: "Memorable logos, typography systems, color palettes, and brand guidelines."
                    },
                    {
                        title: "Corporate & Marketing Collaterals",
                        desc: "Brochures, pitch decks, business profiles, real estate project branding."
                    },
                    {
                        title: "Creative Design & Visuals",
                        desc: "Social media creatives, ad designs, banners, and campaign visuals."
                    },
                    {
                        title: "Video & Motion Graphics",
                        desc: "Brand promos, ad videos, explainer animations, and reels."
                    },
                    {
                        title: "Website UI/UX Design",
                        desc: "Premium user experiences designed to elevate your brand presence."
                    },
                    {
                        title: "Rebranding & Strategy",
                        desc: "Complete brand repositioning to help you scale and dominate your market."
                    }
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20 h-full transition-all duration-300">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* ================= PROCESS SECTION ================= */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-4xl font-semibold mb-16">
                        Our Creative Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">

                        {[
                            "Brand Discovery",
                            "Creative Strategy",
                            "Design Execution",
                            "Launch & Scale"
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
                        Ready to Create a Powerful Brand Presence?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s design a brand that builds trust, attracts attention,
                        and drives long-term growth.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Start Your Branding Project ?
                        </a>
                    </div>

                </div>
            </div>

        </section>
    )
}
