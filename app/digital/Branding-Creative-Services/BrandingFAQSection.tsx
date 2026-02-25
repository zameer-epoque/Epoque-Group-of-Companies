"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function BrandingFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why is branding important for businesses in Hyderabad?",
            answer:
                "Strong branding increases trust, improves premium perception, and differentiates your business in competitive markets like Hyderabad.",
        },
        {
            question: "Do you provide branding for real estate developers?",
            answer:
                "Yes. We specialize in real estate branding including project identity, brochures, campaign creatives, and full brand systems.",
        },
        {
            question: "What industries do you offer branding services for?",
            answer:
                "We provide branding services for real estate, startups, healthcare, retail, hospitality, and corporate businesses.",
        },
        {
            question: "How long does a branding project take?",
            answer:
                "A complete branding project typically takes 2–4 weeks depending on research, strategy, and approval cycles.",
        },
        {
            question: "Do you offer logo design separately?",
            answer:
                "Yes. We provide standalone logo design services as well as complete brand identity packages.",
        },
        {
            question: "Will I receive all brand source files?",
            answer:
                "Yes. After completion, you receive all required source files, brand assets, and usage guidelines.",
        },
    ];

    return (
        <>
            {/* FAQ Section */}
            <section className="relative py-20 px-6 bg-[#101114] text-white border-t border-orange-400/20">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Branding – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Everything you need to know about our branding and creative services.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border transition duration-300 ${active === index
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
                                        className={`text-lg font-medium ${active === index ? "text-orange-400" : "text-white"
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

            {/* CTA Section */}
            <section className="relative py-24 text-center bg-[#0d0d0f] border-t border-orange-400/20 text-white">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-400/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold">
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Ready to Build a Powerful Brand?
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg">
                        Let’s create a premium brand identity that increases authority and drives growth.
                    </p>

                    <div className="mt-14">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Start Your Branding Project
                        </Link>
                    </div>

                </div>
            </section>

            {/* FAQ Schema */}
            <Script
                id="branding-faq-schema"
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
        </>
    );
}