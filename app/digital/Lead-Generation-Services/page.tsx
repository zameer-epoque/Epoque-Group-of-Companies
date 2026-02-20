"use client"

import { motion } from "framer-motion"
import Script from "next/script"

export default function LeadGenerationPage() {
    return (
        <section className="bg-black text-white">

            {/* ================= HERO SECTION ================= */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Lead Generation Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design high-converting lead generation systems that attract,
                        qualify and convert prospects into real customers. From real estate
                        developers to growing businesses in Hyderabad, we build predictable
                        revenue-focused funnels.
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

            {/* ================= SEO CONTENT SECTION ================= */}
            <div className="max-w-5xl mx-auto px-6 pb-16 text-gray-400 space-y-6 leading-relaxed">
                <h2 className="text-3xl font-semibold text-white">
                    High-Intent Lead Generation Systems That Scale
                </h2>

                <p>
                    In competitive markets like Hyderabad, simply running ads
                    is not enough. Businesses need structured lead funnels,
                    audience targeting precision, and automated nurturing systems.
                    We build data-driven strategies that reduce cost-per-lead
                    while improving conversion quality.
                </p>

                <p>
                    Whether you are targeting buyers in Gachibowli,
                    Kokapet, Financial District or scaling across India,
                    our performance marketing approach ensures predictable
                    lead flow and measurable ROI.
                </p>
            </div>

            {/* ================= SERVICES SECTION ================= */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Landing Page Funnels",
                        desc: "Conversion-optimized landing pages built to capture high-quality leads."
                    },
                    {
                        title: "Google & Meta Ads Campaigns",
                        desc: "Paid advertising campaigns engineered for maximum ROI and scalability."
                    },
                    {
                        title: "CRM & Automation Systems",
                        desc: "WhatsApp, email nurturing and automated follow-up systems to increase conversions."
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
                        Our Proven Lead Generation Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">

                        {[
                            "Audience Research & Buyer Intent Mapping",
                            "Funnel & Landing Page Creation",
                            "Traffic & Paid Ads Scaling",
                            "Conversion Optimization & Automation"
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
                            What is lead generation in digital marketing?
                        </h3>
                        <p>
                            Lead generation is the process of attracting and converting
                            potential customers into inquiries using paid ads, SEO,
                            landing pages and automation systems.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you provide real estate lead generation in Hyderabad?
                        </h3>
                        <p>
                            Yes, we specialize in real estate and high-ticket lead
                            generation campaigns targeting Hyderabad’s premium markets.
                        </p>
                    </div>
                </div>
            </div>

            {/* ================= CTA SECTION ================= */}
            <div className="py-28 px-6 text-center">
                <div className="max-w-3xl mx-auto">

                    <h2 className="text-4xl font-semibold leading-tight">
                        Ready to Build a Predictable Lead System?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s create a scalable lead generation strategy that
                        drives consistent growth and measurable ROI.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
                        >
                            Book Free Strategy Call
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
                                name: "What is lead generation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Lead generation is the process of attracting and converting potential customers into inquiries using paid ads, SEO and landing pages."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* ================= SERVICE SCHEMA ================= */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Lead Generation Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group"
                        }
                    })
                }}
            />

        </section>
    )
}