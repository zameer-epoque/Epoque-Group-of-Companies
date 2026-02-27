"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"
import RealEstateFAQ from "./RealEstateFAQ"
import WhyChooseRealEstateBrandingSection from "../real-estate-branding/WhyChooseRealEstateBrandingSection"

export default function RealEstateBrandingPage() {
    return (
        <section className="relative bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-32 space-y-24">

                {/* ================= HERO ================= */}
                <section className="text-center space-y-8">

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Real Estate Branding Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & Premium Markets
                        </span>
                    </h1>

                    {/* Badge */}
                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-gray-300 backdrop-blur">
                        Luxury Developer Branding & Identity Experts
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We help luxury villa developers, apartment builders and
                        gated community projects build structured brand systems
                        that increase authority, strengthen pricing confidence
                        and accelerate booking velocity.
                    </p>

                    {/* Feature Strip */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Project Naming & Identity Systems</span>
                        <span>✓ Luxury Positioning Strategy</span>
                        <span>✓ Brochure & Creative Direction</span>
                        <span>✓ Digital Brand Alignment</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                            hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Build Your Real Estate Brand
                        </Link>

                        <Link
                            href="/realty/case-studies"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
                            hover:border-[#C79A3B] hover:text-[#C79A3B]
                            transition duration-300"
                        >
                            View Branding Case Studies
                        </Link>

                    </div>

                </section>

                {/* ================= AUTHORITY CONTENT ================= */}



                {/* ================= SERVICES GRID ================= */}


            </div>

            {/* WHY CHOOSE */}
            <WhyChooseRealEstateBrandingSection />

            {/* FAQ */}
            <RealEstateFAQ />

            {/* SERVICE SCHEMA */}
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