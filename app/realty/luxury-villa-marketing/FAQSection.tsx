"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "How is luxury villa marketing different from regular property marketing?",
            answer:
                "Luxury villa marketing focuses on premium positioning, high-net-worth audience targeting, refined creative messaging, and high-budget performance campaigns designed for serious buyers and investors.",
        },
        {
            question: "Do you target NRI and international villa buyers?",
            answer:
                "Yes. We run dedicated global campaigns targeting NRI investors in UAE, USA, UK, Australia, and other high-income markets using advanced audience segmentation strategies.",
        },
        {
            question: "Which areas in Hyderabad do you promote luxury villas?",
            answer:
                "We actively market projects in Kokapet, Narsingi, Gandipet, Tellapur, Financial District, Neopolis and other premium micro-markets attracting HNI buyers.",
        },
        {
            question: "How quickly can villa campaigns generate qualified leads?",
            answer:
                "Paid campaigns can start generating qualified inquiries within days, depending on positioning, ad budget, and targeting strategy.",
        },
        {
            question: "Do you manage complete campaign execution?",
            answer:
                "Yes. We handle branding, creative design, ad management, landing page optimization, CRM integration, and full-funnel performance tracking.",
        },
        {
            question: "How do you ensure lead quality for high-ticket villas?",
            answer:
                "We implement strict audience filtering, high-intent keyword targeting, premium creatives, and remarketing funnels to attract serious buyers only.",
        },
        {
            question: "Can you support ultra-luxury villa launches above ₹10 Cr?",
            answer:
                "Absolutely. We design exclusive positioning and private targeting strategies tailored for ultra-premium villa segments.",
        },
        {
            question: "Do you provide monthly performance reporting?",
            answer:
                "Yes. Clients receive structured monthly reports including lead quality analysis, CPL metrics, booking tracking, and campaign optimization insights.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-4 px-6 bg-[#101114] text-white border-t border-[#C79A3B]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Luxury Villa Marketing – Frequently Asked Questions
                        </h2>

                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-6"></div>

                        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Clear answers about our luxury villa marketing strategies,
                            NRI targeting, campaign structure, and booking-focused execution model.
                        </p>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-6">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border transition duration-300
                ${active === index
                                        ? "border-[#C79A3B] bg-[#1b1c20]"
                                        : "border-white/10 bg-[#16171a] hover:border-[#C79A3B]/60"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-8 py-6 text-left"
                                >
                                    <span
                                        className={`text-lg md:text-xl font-medium transition
                    ${active === index
                                                ? "text-[#C79A3B]"
                                                : "text-white"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300
                    ${active === index
                                                ? "rotate-180 text-[#C79A3B]"
                                                : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`px-8 overflow-hidden transition-all duration-500
                  ${active === index
                                            ? "max-h-96 pb-6 opacity-100"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* FAQ SCHEMA */}
            <Script
                id="luxury-villa-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.question,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.answer,
                            },
                        })),
                    }),
                }}
            />

            {/* PREMIUM CTA */}
            <section className="relative py-28 text-center bg-[#0d0d0f] border-t border-[#C79A3B]/20 text-white overflow-hidden">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C79A3B]/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Ready to Market Your Luxury Villa Project?
                        </span>
                        <br />
                        <span className="text-white">
                            Let’s Design a High-Impact Booking Strategy.
                        </span>
                    </h2>

                    <p className="mt-10 text-gray-400 text-lg leading-relaxed">
                        Partner with a premium real estate marketing agency in Hyderabad
                        specializing in luxury villa campaigns, NRI targeting,
                        and conversion-focused performance marketing systems.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Luxury Marketing Consultation
                    </Link>

                </div>
            </section>
        </>
    );
}