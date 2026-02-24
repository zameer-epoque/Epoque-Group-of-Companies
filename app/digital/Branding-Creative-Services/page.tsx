"use client"

import { motion } from "framer-motion"
import Script from "next/script"

export default function BrandingCreativePage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Branding & Creative Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We build powerful brand identities, high-converting creative assets,
                        and premium visual systems that position your business as a market leader
                        in Hyderabad and beyond. From real estate developers to growing enterprises,
                        we create brands that inspire trust, authority, and long-term growth.
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

            {/* ================= SEO CONTENT SECTION ================= */}
            <div className="max-w-5xl mx-auto px-6 pb-16 text-gray-400 space-y-6 leading-relaxed">
                <h2 className="text-3xl font-semibold text-white">
                    Strategic Branding That Drives Business Growth
                </h2>

                <p>
                    In today’s competitive Hyderabad market, branding is more than just
                    a logo. It is your reputation, positioning, perception, and emotional
                    connection with your audience. Our branding and creative services
                    are designed to build clarity, authority, and differentiation.
                </p>

                <p>
                    Whether you are a real estate developer in Kokapet,
                    a startup in Gachibowli, or a growing enterprise in
                    Financial District, we create brand systems that align
                    with your long-term revenue strategy.
                </p>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Logo & Brand Identity",
                        desc: "Strategic logo systems, typography, color palettes and brand guidelines designed for long-term market recognition."
                    },
                    {
                        title: "Corporate & Marketing Collaterals",
                        desc: "Premium brochures, pitch decks, business profiles and real estate project branding assets."
                    },
                    {
                        title: "Creative Design & Campaign Visuals",
                        desc: "High-impact ad creatives, social media designs and performance marketing visuals."
                    },
                    {
                        title: "Video & Motion Graphics",
                        desc: "Brand promos, explainer videos, real estate walkthroughs and animation reels."
                    },
                    {
                        title: "Website UI/UX Design",
                        desc: "Conversion-focused digital experiences that elevate brand perception."
                    },
                    {
                        title: "Rebranding & Positioning Strategy",
                        desc: "Complete brand transformation frameworks for scaling businesses."
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
                        Our Proven Creative Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">

                        {[
                            "Brand Discovery & Research",
                            "Creative Strategy & Positioning",
                            "Design & Asset Development",
                            "Launch, Optimization & Scale"
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

            {/* ================= FAQ SECTION ================= */}
            <div className="max-w-4xl mx-auto px-6 py-24 space-y-10">
                <h2 className="text-3xl font-semibold text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 text-gray-400">
                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Why is branding important for businesses in Hyderabad?
                        </h3>
                        <p>
                            Strong branding increases trust, improves premium perception,
                            and differentiates your business in competitive markets.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you provide branding for real estate developers?
                        </h3>
                        <p>
                            Yes, we specialize in real estate branding including project
                            identity, brochures, and campaign creative systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            What industries do you offer branding services for?
                        </h3>
                        <p>
                            We provide branding services for real estate, startups, retail,
                            healthcare, hospitality, and corporate businesses looking to
                            build a strong market presence.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            How long does a branding project take?
                        </h3>
                        <p>
                            A complete branding project typically takes 2 to 4 weeks
                            depending on research, strategy development, and design approvals.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you offer logo design separately?
                        </h3>
                        <p>
                            Yes, we offer standalone logo design services as well as
                            complete brand identity packages including brand guidelines.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Will I receive all source files after project completion?
                        </h3>
                        <p>
                            Yes, after project completion you will receive all required
                            source files, brand assets, and usage guidelines for future marketing.
                        </p>
                    </div>
                </div>
            </div>
            {/* ================= CTA SECTION ================= */}
            <div className="py-28 px-6 text-center">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-4xl font-semibold leading-tight">
                        Ready to Build a Powerful Brand in Hyderabad?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s design a brand that builds authority, attracts attention,
                        and drives sustainable business growth.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Start Your Branding Project
                        </a>
                    </div>

                </div>
            </div>

            {/* ================= FAQ SCHEMA ================= */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Why is branding important for businesses?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Branding builds trust, improves perception, and strengthens competitive positioning."
                                }
                            }
                        ]
                    })
                }}
            />

        </section>
    )
}