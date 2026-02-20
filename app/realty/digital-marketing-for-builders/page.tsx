"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function BrandingCreativePage() {
    return (
        <section className="bg-black text-white">

            {/* HERO */}
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
                        We are a strategic branding agency in Hyderabad helping real estate
                        developers, startups and enterprises build powerful brand identities,
                        premium visual systems and high-converting creative assets that drive
                        authority, trust and long-term growth.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Build Your Brand
                        </Link>
                    </div>
                </div>
            </div>

            {/* AUTHORITY SECTION */}
            <div className="max-w-5xl mx-auto px-6 pb-16 text-gray-400 space-y-6 leading-relaxed">

                <h2 className="text-3xl font-semibold text-white">
                    Strategic Branding That Drives Revenue
                </h2>

                <p>
                    In competitive markets like Gachibowli, Kokapet and Financial District,
                    branding is not just visual design — it is positioning, perception and
                    psychological influence. Businesses in Hyderabad must differentiate
                    themselves to attract high-value customers.
                </p>

                <p>
                    Our branding services combine market research, competitive analysis,
                    brand psychology and performance marketing alignment to create
                    brand systems that directly impact revenue.
                </p>

                <p>
                    Whether you are launching a luxury real estate project,
                    scaling a tech startup, or repositioning an enterprise brand,
                    we create structured identity systems that elevate authority
                    and accelerate growth.
                </p>
            </div>

            {/* SERVICES */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Logo & Brand Identity Design",
                        desc: "Strategic logo systems, typography architecture, color psychology and complete brand guidelines for long-term market positioning."
                    },
                    {
                        title: "Corporate & Real Estate Branding",
                        desc: "Brochures, investor decks, project profiles and high-end marketing collateral designed for Hyderabad developers."
                    },
                    {
                        title: "Creative Campaign Visuals",
                        desc: "High-converting ad creatives, social media visuals and paid campaign assets."
                    },
                    {
                        title: "Video & Motion Branding",
                        desc: "Brand films, explainer videos, property walkthroughs and promotional animations."
                    },
                    {
                        title: "Website UI/UX Branding",
                        desc: "Conversion-focused website experiences that strengthen digital authority."
                    },
                    {
                        title: "Rebranding & Positioning Strategy",
                        desc: "Complete repositioning frameworks for businesses scaling across India."
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

            {/* PROCESS */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-16">
                        Our Proven Branding Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">
                        {[
                            "Brand Research & Market Analysis",
                            "Positioning & Strategic Framework",
                            "Design Execution & Asset Creation",
                            "Launch & Performance Alignment"
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

            {/* INTERNAL LINKING */}
            <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
                <h3 className="text-2xl font-semibold">Related Services</h3>
                <div className="flex flex-wrap justify-center gap-6 text-orange-400">
                    <Link href="/social-media-marketing">Social Media Marketing</Link>
                    <Link href="/search-engine-optimization">SEO Services</Link>
                    <Link href="/digital/google-ads-ppc">Google Ads / PPC</Link>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-6 py-24 space-y-10">
                <h2 className="text-3xl font-semibold text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 text-gray-400">
                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Why is branding important for Hyderabad businesses?
                        </h3>
                        <p>
                            Strong branding increases perceived value, builds trust and
                            differentiates businesses in competitive Hyderabad markets.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you provide branding for real estate projects?
                        </h3>
                        <p>
                            Yes. We specialize in real estate branding including luxury
                            villa projects, apartment launches and developer positioning.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-28 px-6 text-center">
                <h2 className="text-4xl font-semibold">
                    Ready to Build a Premium Brand?
                </h2>
                <p className="mt-6 text-gray-400">
                    Let’s create a powerful brand system that drives authority and revenue.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-black 
          bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
          hover:scale-105 transition duration-300 shadow-xl"
                >
                    Start Your Branding Project
                </Link>
            </div>

            {/* SCHEMA */}
            <Script
                id="branding-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Branding & Creative Services",
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