"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function WhyChooseUsPage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO ================= */}
            <div className="relative py-28 px-6 text-center overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Why Choose{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Our Branding Agency
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We specialize in premium real estate branding, digital positioning
                        and conversion-focused marketing systems for developers
                        and luxury projects in Hyderabad.
                    </p>
                </div>
            </div>

            {/* ================= CORE DIFFERENTIATORS ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Hyderabad Market Expertise",
                        desc: "Deep understanding of Kokapet, Financial District, Gachibowli and Tellapur premium real estate markets."
                    },
                    {
                        title: "Luxury Positioning Strategy",
                        desc: "Structured brand systems that increase perceived value and pricing power."
                    },
                    {
                        title: "Conversion-Focused Execution",
                        desc: "Branding aligned with digital ads, channel partners and on-site sales teams."
                    },
                    {
                        title: "Complete Brand Architecture",
                        desc: "Logo systems, brochures, website UI/UX and campaign creatives under one framework."
                    },
                    {
                        title: "Premium Visual Identity",
                        desc: "High-end design standards built for luxury villa and apartment projects."
                    },
                    {
                        title: "Long-Term Developer Authority",
                        desc: "We build brand equity beyond single projects to strengthen developer reputation."
                    }
                ].map((item, index) => (
                    <motion.div
                        key={index}
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

            {/* ================= PROCESS ================= */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-16">
                        Our Strategic Approach
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">
                        {[
                            "Market Research & Competitor Analysis",
                            "Positioning & Brand Strategy",
                            "Creative Identity Development",
                            "Launch & Marketing Alignment"
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

            {/* ================= CTA ================= */}
            <div className="py-28 px-6 text-center">
                <h2 className="text-4xl font-semibold">
                    Ready to Elevate Your Project Brand?
                </h2>

                <p className="mt-6 text-gray-400">
                    Let’s create a premium branding system that builds trust,
                    improves pricing authority and accelerates project sales.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                    hover:scale-105 transition duration-300 shadow-xl"
                >
                    Start Your Consultation
                </Link>
            </div>

            {/* ================= SCHEMA ================= */}
            <Script
                id="why-choose-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Epoque Group",
                        url: "https://epoquegroup.in",
                        description: "Premium real estate branding agency in Hyderabad specializing in luxury villa and apartment project branding."
                    })
                }}
            />

        </section>
    )
}