"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Turnkey Interior Solutions in Hyderabad | End-to-End Interior Execution",
    description:
        "Complete turnkey interior solutions in Hyderabad including design, material procurement, execution and supervision for villas, apartments and offices.",
    keywords: [
        "Turnkey Interior Solutions Hyderabad",
        "Interior Execution Company Hyderabad",
        "End to End Interior Contractors Hyderabad",
        "Interior Project Management Hyderabad"
    ],
    openGraph: {
        title: "Turnkey Interior Solutions in Hyderabad",
        description:
            "End-to-end interior design and execution services across Hyderabad.",
        url: "https://yourdomain.com/interiors/turnkey-interior-solutions",
        type: "website"
    }
}

export default function TurnkeyInteriorPage() {
    return (
        <section className="bg-black text-white">

            {/* HERO */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Turnkey Interior Solutions in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We provide complete end-to-end interior solutions including
                        design, execution, supervision and material procurement
                        across Hyderabad.
                    </p>

                    <div className="mt-10">
                        <a href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition shadow-xl">
                            Get Turnkey Quote
                        </a>
                    </div>
                </div>
            </div>

            {/* SEO CONTENT */}
            <div className="max-w-5xl mx-auto px-6 pb-16 text-gray-400 space-y-6 leading-relaxed">
                <h2 className="text-3xl font-semibold text-white">
                    End-to-End Interior Execution Company in Hyderabad
                </h2>

                <p>
                    Our turnkey interior services ensure complete project management
                    from concept design to final handover. We handle civil work,
                    electrical, plumbing, carpentry and finishing.
                </p>

                <p>
                    With strict quality control and on-time delivery,
                    we ensure hassle-free interior execution for villas,
                    apartments and commercial spaces.
                </p>
            </div>

            {/* PROCESS */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-16">
                        Our Turnkey Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">
                        {[
                            "Design & Planning",
                            "Material Procurement",
                            "Execution & Supervision",
                            "Final Delivery"
                        ].map((step, index) => (
                            <div key={index}>
                                <div className="text-4xl font-bold text-orange-400">
                                    0{index + 1}
                                </div>
                                <p className="mt-4">{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SCHEMA */}
            <Script
                id="turnkey-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Turnkey Interior Solutions in Hyderabad",
                        areaServed: { "@type": "City", name: "Hyderabad" },
                        provider: { "@type": "Organization", name: "Your Company Name" }
                    })
                }}
            />

        </section>
    )
}