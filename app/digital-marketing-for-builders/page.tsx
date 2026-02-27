"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"
import RealEstateFAQ from "./RealEstateFAQ"
import WhyChooseRealEstateBrandingSection from "../realty/real-estate-branding/WhyChooseRealEstateBrandingSection"

export default function RealEstateBrandingPage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO ================= */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Real Estate Branding Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We help luxury villa developers, apartment builders and
                        gated community projects build premium brand identities
                        that increase authority, trust and faster project sales.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                            hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Brand Your Project
                        </Link>
                    </div>
                </div>
            </div>

            {/* ================= AUTHORITY CONTENT ================= */}
            <div className="max-w-5xl mx-auto px-6 pb-20 text-gray-400 space-y-6 leading-relaxed">

                <h2 className="text-3xl font-semibold text-white">
                    Premium Project Branding for Competitive Hyderabad Markets
                </h2>

                <p>
                    In fast-growing areas like Kokapet, Financial District,
                    Gachibowli and Tellapur, real estate branding directly
                    impacts buyer perception and pricing power.
                </p>

                <p>
                    A strong project identity improves trust, supports premium
                    pricing and shortens sales cycles across digital marketing,
                    on-site sales teams and channel partner networks.
                </p>

                <p>
                    We design complete real estate brand systems including
                    logo architecture, brochure design, campaign creatives
                    and digital positioning frameworks.
                </p>

            </div>

            {/* ================= SERVICES GRID ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Project Logo & Identity Systems",
                        desc: "Luxury villa and apartment branding with structured logo architecture and brand guidelines."
                    },
                    {
                        title: "Real Estate Brochure Design",
                        desc: "Premium print and digital brochures designed to elevate perception and support sales teams."
                    },
                    {
                        title: "Campaign Creative Strategy",
                        desc: "High-converting ad creatives for Meta, Google and outdoor campaigns."
                    },
                    {
                        title: "Site Hoardings & Marketing Collaterals",
                        desc: "On-site branding materials including standees, signage and launch assets."
                    },
                    {
                        title: "Website UI/UX for Projects",
                        desc: "Conversion-focused real estate websites aligned with branding strategy."
                    },
                    {
                        title: "Rebranding for Developers",
                        desc: "Complete developer brand repositioning for long-term authority."
                    }
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20 h-full">
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

            {/* ================= PROCESS ================= */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-16">
                        Our Real Estate Branding Framework
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">
                        {[
                            "Market & Competitor Study",
                            "Project Positioning Strategy",
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
                    Launch Your Real Estate Project with a Powerful Brand
                </h2>
                <p className="mt-6 text-gray-400">
                    Let’s create a premium identity system that increases trust,
                    improves pricing power and accelerates project sales.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                    hover:scale-105 transition duration-300 shadow-xl"
                >
                    Start Your Branding Consultation
                </Link>
            </div>
            <WhyChooseRealEstateBrandingSection />
<RealEstateFAQ />
            {/* ================= SERVICE SCHEMA ================= */}
            <Script
                id="real-estate-branding-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Branding Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

        </section>
    )
}