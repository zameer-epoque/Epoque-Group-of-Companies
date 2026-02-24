"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function B2BLeadClient() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* HERO */}
            <div className="relative py-32 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        B2B Lead Generation for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Qualified Business Opportunities
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We generate high-quality B2B leads using LinkedIn outreach,
                        cold email campaigns and conversion-optimized funnels.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Generate More Leads
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "LinkedIn Outreach",
                        desc: "Target decision-makers with personalized outreach."
                    },
                    {
                        title: "Cold Email Campaigns",
                        desc: "High-converting email sequences for qualified prospects."
                    },
                    {
                        title: "Lead Funnels",
                        desc: "Conversion-focused landing pages and automation."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#111111] border border-white/5">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 pb-24 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        What is B2B lead generation?
                    </h3>
                    <p className="text-gray-400">
                        B2B lead generation is the process of identifying and
                        attracting potential business clients through targeted
                        outreach, campaigns and structured sales funnels.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Which platforms work best for B2B leads?
                    </h3>
                    <p className="text-gray-400">
                        LinkedIn, cold email outreach, Google Ads and
                        account-based marketing strategies are highly effective
                        for generating qualified B2B opportunities.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How long does it take to generate qualified leads?
                    </h3>
                    <p className="text-gray-400">
                        Initial leads can start within a few weeks,
                        but consistent pipeline growth typically
                        builds over 30–60 days of structured campaigns.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you target specific industries?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we create industry-specific targeting strategies
                        based on decision-maker roles, company size,
                        and revenue segments.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide CRM integration?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we integrate campaigns with CRM systems
                        to track conversations, lead status,
                        and pipeline performance.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How do you ensure lead quality?
                    </h3>
                    <p className="text-gray-400">
                        We use qualification filters, intent-based targeting,
                        personalized messaging and funnel optimization
                        to attract high-quality business prospects.
                    </p>
                </div>
            </div>
            {/* SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "B2B Lead Generation Service",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group Of Companies"
                        }
                    })
                }}
            />

        </section>
    )
}