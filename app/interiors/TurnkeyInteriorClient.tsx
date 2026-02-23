"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function TurnkeyInteriorClient() {
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

                    {/* ✅ Added Strong SEO Line */}
                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        Our turnkey interior execution services ensure seamless coordination,
                        premium quality materials and timely delivery for villas,
                        apartments and commercial spaces.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition shadow-xl">
                            Get Turnkey Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* SEO CONTENT */}
            <div className="max-w-5xl mx-auto px-6 pb-16 text-gray-400 space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                    End-to-End Interior Execution Company in Hyderabad
                </h2>

                <p>
                    Our turnkey interior services ensure complete project management
                    from concept design to final handover. We handle civil work,
                    electrical, plumbing, carpentry, ceiling works, painting and finishing.
                </p>

                <p>
                    With strict quality control, experienced supervisors and
                    structured project timelines, we ensure hassle-free interior
                    execution for villas, apartments and corporate offices.
                </p>

                {/* ✅ Added Extra SEO Content */}
                <p>
                    As a trusted turnkey interior contractor in Hyderabad,
                    we manage budgeting, vendor coordination, site supervision
                    and material procurement to deliver high-end interiors
                    without delays or cost overruns.
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

            {/* ✅ NEW WHY CHOOSE US SECTION */}
            <div className="py-24 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-semibold">
                        Why Choose Our Turnkey Interior Services?
                    </h2>

                    <p className="text-gray-400">
                        We provide complete transparency, professional project management
                        and premium craftsmanship in every turnkey interior project.
                        Our experienced team ensures smooth execution from start to finish.
                    </p>

                    <p className="text-gray-400">
                        We have successfully delivered turnkey interior projects in
                        Kokapet, Gachibowli, Jubilee Hills, Financial District,
                        Banjara Hills and Madhapur.
                    </p>
                </div>
            </div>

            {/* ✅ FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        What are turnkey interior solutions?
                    </h3>
                    <p className="text-gray-400">
                        Turnkey interior solutions include complete design,
                        material procurement, execution, supervision and final delivery
                        handled by a single interior contractor.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you handle complete interior execution?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we manage the entire interior project including
                        civil work, electrical, plumbing, carpentry and finishing.
                    </p>
                </div>
            </div>

            {/* FAQ SCHEMA */}
            <Script
                id="turnkey-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What are turnkey interior solutions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Turnkey interior solutions include complete design, procurement and execution handled by a single contractor."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you handle complete interior execution?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we manage the entire interior execution from concept to completion."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* SERVICE SCHEMA */}
            <Script
                id="turnkey-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Turnkey Interior Solutions in Hyderabad",
                        areaServed: {
                            "@type": "City",
                            name: "Hyderabad"
                        },
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