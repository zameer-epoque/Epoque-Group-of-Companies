"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function ContentMarketingFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why is content marketing important for SEO?",
            answer:
                "Content marketing improves keyword rankings, increases organic traffic, and builds long-term brand authority in competitive markets like Hyderabad.",
        },
        {
            question: "How long does content marketing take to show results?",
            answer:
                "Most businesses begin seeing measurable improvements in 3–6 months depending on competition and content consistency.",
        },
        {
            question: "Do you provide SEO blog writing services?",
            answer:
                "Yes. We create keyword-optimized blog articles designed to rank higher on Google and generate inbound leads.",
        },
        {
            question: "What industries do you work with?",
            answer:
                "We work with real estate developers, B2B companies, startups, eCommerce brands, and enterprises across India.",
        },
        {
            question: "Do you conduct keyword research before writing?",
            answer:
                "Absolutely. Every content strategy begins with advanced keyword research and competitor analysis.",
        },
        {
            question: "Can content marketing generate leads?",
            answer:
                "Yes. SEO-driven content attracts high-intent traffic and converts visitors into qualified leads through structured funnel strategies.",
        },
    ];

    return (
        <>
            {/* FAQ Section */}
            <section className="relative py-20 px-6 bg-[#101114] text-white border-t border-orange-400/20">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            Content Marketing – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Learn how our content marketing strategies increase
                            search rankings, brand authority, and organic lead generation.
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

            {/* CTA */}
            <section className="relative py-24 text-center bg-[#0d0d0f] border-t border-orange-400/20 text-white">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-400/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold">
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Ready to Scale with Content Marketing?
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg">
                        Partner with Hyderabad’s performance-driven content marketing experts
                        and build sustainable organic growth systems.
                    </p>

                    <div className="mt-14">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Content Audit
                        </Link>
                    </div>

                </div>
            </section>

            {/* FAQ Schema */}
            <Script
                id="content-faq-schema"
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