"use client";

import { useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Page() {

    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What real estate services do you provide?",
            answer:
                "We provide real estate branding, luxury villa marketing, apartment launch campaigns, sales strategy consulting and property lead generation services.",
        },
        {
            question: "Do you specialize in Hyderabad real estate markets?",
            answer:
                "Yes. We work extensively in Kokapet, Financial District, Narsingi, Tellapur and other premium residential corridors.",
        },
        {
            question: "Do you handle both branding and performance marketing?",
            answer:
                "Yes. We integrate branding systems with Google Ads, Meta Ads and CRM-driven funnel strategies.",
        },
        {
            question: "Do you work with luxury villa and apartment developers?",
            answer:
                "Absolutely. Our frameworks are built specifically for high-ticket residential projects.",
        },
        {
            question: "How soon can campaigns generate leads?",
            answer:
                "Paid campaigns can begin generating qualified inquiries within days depending on targeting and positioning.",
        },
    ];

    return (
        <main className="relative bg-black text-white min-h-screen overflow-hidden">

            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>

            <section className="max-w-5xl mx-auto px-6 py-32">

                <h1 className="text-4xl md:text-6xl font-semibold text-center mb-16 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                    Frequently Asked Questions
                </h1>

                <div className="space-y-6">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition duration-300
              ${active === index
                                    ? "border-[#C79A3B] bg-[#1b1c20]"
                                    : "border-white/10 bg-[#16171a]"
                                }`}
                        >
                            <button
                                onClick={() =>
                                    setActive(active === index ? null : index)
                                }
                                className="w-full flex justify-between items-center px-8 py-6 text-left"
                            >
                                <span className="text-lg font-medium">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`transition-transform duration-300 ${active === index ? "rotate-180 text-[#C79A3B]" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`px-8 transition-all duration-500 overflow-hidden ${active === index
                                        ? "max-h-96 pb-6 opacity-100"
                                        : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-400">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                <div className="text-center mt-20">
                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Contact Our Team
                    </Link>
                </div>

            </section>

            {/* FAQ Schema */}
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

        </main>
    );
}