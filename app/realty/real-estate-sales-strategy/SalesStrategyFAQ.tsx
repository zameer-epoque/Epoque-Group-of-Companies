"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function SalesStrategyFAQ() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is real estate sales strategy consulting?",
            answer:
                "Real estate sales strategy consulting focuses on improving booking velocity, pricing confidence, funnel optimization and structured sales execution for developers.",
        },
        {
            question: "How can sales strategy improve project absorption rate?",
            answer:
                "By aligning pricing psychology, lead qualification, CRM workflows and follow-up systems, we reduce friction in the buyer journey and accelerate conversions.",
        },
        {
            question: "Do you help structure in-house sales teams?",
            answer:
                "Yes. We assist developers with sales scripting, follow-up processes, performance tracking frameworks and channel partner coordination.",
        },
        {
            question: "Which Hyderabad micro-markets do you specialize in?",
            answer:
                "We work extensively in Kokapet, Financial District, Narsingi, Tellapur, Gachibowli and other high-growth premium residential corridors.",
        },
        {
            question: "Can you improve booking velocity during slow market cycles?",
            answer:
                "Yes. Through urgency positioning, offer structuring, remarketing systems and buyer segmentation, we help revive momentum during slower absorption phases.",
        },
        {
            question: "Do you align marketing and sales systems together?",
            answer:
                "Absolutely. We integrate marketing funnels with CRM workflows to ensure no qualified lead is lost between inquiry and booking.",
        },
        {
            question: "Is this suitable for luxury apartment and villa projects?",
            answer:
                "Yes. Our frameworks are built specifically for high-ticket residential projects requiring structured sales positioning.",
        },
        {
            question: "How quickly can sales strategy changes impact results?",
            answer:
                "Most structured adjustments in pricing positioning and funnel management can start improving booking trends within weeks.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-10 px-6 bg-[#101114] text-white border-t border-[#C79A3B]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Real Estate Sales Strategy – Frequently Asked Questions
                        </h2>

                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-6"></div>

                        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Clear insights into pricing optimization, absorption rate strategy,
                            CRM alignment and booking acceleration systems for developers in Hyderabad.
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
                id="sales-strategy-faq-schema"
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
                            Ready to Accelerate Your Project Bookings?
                        </span>
                        <br />
                        <span className="text-white">
                            Let’s Build a Structured Sales Framework.
                        </span>
                    </h2>

                    <p className="mt-10 text-gray-400 text-lg leading-relaxed">
                        Partner with a strategic real estate sales consulting team
                        in Hyderabad focused on pricing confidence, booking velocity
                        and structured developer growth systems.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Sales Strategy Consultation
                    </Link>

                </div>
            </section>
        </>
    );
}