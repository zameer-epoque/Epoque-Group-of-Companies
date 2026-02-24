"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why is social media marketing important in Hyderabad?",
            answer:
                "Hyderabad is a fast-growing and competitive business ecosystem. Strategic social media marketing increases brand authority, builds trust, and generates high-quality leads across industries.",
        },
        {
            question: "Do you run paid ads on Instagram and Facebook?",
            answer:
                "Yes. We manage high-performance Meta advertising campaigns including Instagram and Facebook Ads optimized for ROI-driven scaling.",
        },
        {
            question: "Which social media platforms do you manage?",
            answer:
                "We manage Instagram, Facebook, LinkedIn and YouTube with structured content planning, creative production and paid campaign execution.",
        },
        {
            question: "Can social media marketing generate real business leads?",
            answer:
                "Absolutely. With conversion tracking and funnel optimization, social media marketing consistently generates qualified leads.",
        },
        {
            question: "How do you measure campaign performance?",
            answer:
                "We track CPL, ROAS, engagement rates, conversions and revenue attribution using advanced analytics dashboards.",
        },
        {
            question: "Do you provide monthly performance reports?",
            answer:
                "Yes. Clients receive detailed monthly reports covering performance metrics, ad spend analysis and growth insights.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-12 px-6 bg-[#101114] text-white border-t border-orange-400/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            Social Media Marketing – Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-[2px] bg-orange-400 mx-auto mt-6"></div>
                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Get clear answers about our Instagram marketing, Meta Ads management,
                            lead generation strategy, pricing, and campaign performance process.
                        </p>
                    </div>

                    {/* FAQ CARDS */}
                    <div className="space-y-8">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border transition duration-300 
        ${active === index
                                        ? "border-orange-400 bg-[#1b1c20]"
                                        : "border-white/10 bg-[#16171a] hover:border-orange-400/60"
                                    }`}
                            >

                                <button
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-8 py-7 text-left"
                                >
                                    <span
                                        className={`text-lg md:text-xl font-medium transition ${active === index
                                            ? "text-orange-400"
                                            : "text-white"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300 ${active === index
                                            ? "rotate-180 text-orange-400"
                                            : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`px-8 overflow-hidden transition-all duration-500 ${active === index
                                        ? "max-h-96 pb-7 opacity-100"
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
                id="faq-schema"
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
            <section className="relative py-12 text-center bg-[#0d0d0f] border-t border-orange-400/20 text-white overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-400/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Ready to Scale Your Brand
                        </span>
                        <br />
                        <span className="text-white">
                            with Expert Social Media Marketing in Hyderabad?
                        </span>
                    </h2>

                    {/* SEO Optimized Content */}
                    <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                        Partner with a results-driven Social Media Marketing agency in Hyderabad
                        that specializes in Instagram marketing, Facebook Ads management, and
                        advanced Meta advertising campaigns. We design structured lead generation
                        systems that increase brand visibility, generate qualified leads, and
                        maximize return on investment through data-backed performance strategies.
                    </p>


                    {/* CTA Buttons */}
                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
      bg-orange-400 text-black
      hover:bg-orange-500 hover:scale-105
      transition duration-300 shadow-xl"
                        >
                            Get Free Strategy Consultation
                        </Link>



                    </div>

                    {/* Trust Line */}


                </div>
            </section>
        </>
    );
}