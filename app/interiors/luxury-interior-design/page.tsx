"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function LuxuryInteriorClient() {
    return (
        <section className="bg-black text-white">

            {/* HERO SECTION */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Luxury Interior Designers in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design ultra-premium villa interiors, penthouse interiors
                        and luxury apartment interiors in Kokapet, Financial District,
                        Gachibowli, Jubilee Hills and Banjara Hills.
                    </p>

                    {/* ✅ Added Extra SEO Paragraph */}
                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        As one of the top luxury interior designers in Hyderabad,
                        we focus on delivering bespoke interiors that combine
                        sophistication, comfort and functionality with world-class finishes.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Book Luxury Consultation
                        </Link>
                    </div>
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-gray-400 space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                    High-End Interior Design Company in Hyderabad
                </h2>

                <p>
                    As one of the best luxury interior designers in Hyderabad,
                    we specialize in bespoke interiors for premium villas,
                    penthouses and high-rise apartments.
                </p>

                <p>
                    We use Italian marble, designer lighting, custom furniture
                    and imported finishes to create extraordinary living spaces.
                </p>

                {/* ✅ Added More Relevant Content */}
                <p>
                    Our luxury interior design services include complete space planning,
                    3D visualization, material selection, customized furniture,
                    lighting concepts and turnkey project execution across Hyderabad.
                </p>

                <p>
                    Whether you are renovating your villa or designing a new penthouse,
                    our team ensures flawless craftsmanship, premium finishes and
                    timely delivery of every project.
                </p>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Luxury Villa Interiors",
                        desc: "Bespoke villa interiors with imported finishes."
                    },
                    {
                        title: "Penthouse Interiors",
                        desc: "Modern luxury penthouse interiors with premium materials."
                    },
                    {
                        title: "Luxury Apartment Interiors",
                        desc: "Custom-designed apartment interiors in Hyderabad."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">
                                {item.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ✅ NEW SEO CONTENT SECTION (No Design Change) */}
            <div className="max-w-6xl mx-auto px-6 py-20 text-gray-400 space-y-6">
                <h2 className="text-3xl font-semibold text-white">
                    Why Choose Our Luxury Interior Designers?
                </h2>

                <p>
                    Our team combines creativity, technical expertise and premium materials
                    to deliver interiors that reflect elegance and exclusivity.
                    We understand modern design trends and customize each project
                    according to client preferences and lifestyle.
                </p>

                <p>
                    From concept development to final installation, we ensure
                    seamless coordination, transparent pricing and unmatched
                    attention to detail in every luxury interior project.
                </p>
            </div>

            {/* FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Who are the best luxury interior designers in Hyderabad?
                    </h3>
                    <p className="text-gray-400">
                        We are among the top luxury interior design companies in Hyderabad
                        delivering premium villa and apartment interiors.
                    </p>
                </div>

                {/* ✅ Added Another FAQ */}
                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide complete turnkey luxury interiors?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we offer end-to-end luxury interior solutions including
                        design, material sourcing, execution and final handover.
                    </p>
                </div>
            </div>

            {/* FAQ SCHEMA */}
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
                                name:
                                    "Who are the best luxury interior designers in Hyderabad?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "We provide premium luxury interior design services across Hyderabad."
                                }
                            },
                            {
                                "@type": "Question",
                                name:
                                    "Do you provide complete turnkey luxury interiors?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text:
                                        "Yes, we provide end-to-end luxury interior design services including execution and installation."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Luxury Interior Design in Hyderabad",
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