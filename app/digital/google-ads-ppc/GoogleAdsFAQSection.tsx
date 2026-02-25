"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function GoogleAdsFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why should I run Google Ads for my business in Hyderabad?",
            answer:
                "Google Ads allows businesses in Hyderabad to instantly appear at the top of search results for high-intent keywords. It generates immediate traffic, qualified leads, and measurable ROI compared to long-term organic strategies like SEO.",
        },
        {
            question: "How much budget is required for Google Ads campaigns?",
            answer:
                "The ideal budget depends on industry competition, keyword cost-per-click (CPC), and campaign objectives. We design structured PPC campaigns that optimize ad spend and maximize return on ad spend (ROAS).",
        },
        {
            question: "What types of Google Ads campaigns do you manage?",
            answer:
                "We manage Search Ads, Display Ads, YouTube Video Ads, Performance Max campaigns, Shopping Ads, and remarketing campaigns tailored to business goals.",
        },
        {
            question: "How do you measure PPC campaign performance?",
            answer:
                "We track conversions, cost-per-click (CPC), cost-per-lead (CPL), return on ad spend (ROAS), click-through rate (CTR), and overall revenue attribution using advanced analytics dashboards.",
        },
        {
            question: "Do you provide conversion tracking setup?",
            answer:
                "Yes. We set up Google Tag Manager, conversion tracking, call tracking, and CRM integrations to ensure every lead and sale is accurately measured.",
        },
        {
            question: "How long does it take to see results from Google Ads?",
            answer:
                "Google Ads campaigns can generate traffic and leads immediately after launch. However, performance optimization typically improves results significantly within the first 30–60 days.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-20 px-6 bg-[#101114] text-white border-t border-orange-400/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                            Google Ads & PPC – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Learn how our Google Ads agency in Hyderabad builds
                            high-performance PPC campaigns that generate qualified
                            traffic, reduce ad waste, and increase business revenue.
                        </p>
                    </div>

                    {/* FAQ Cards */}
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
                                        className={`text-lg md:text-xl font-medium transition 
                    ${active === index ? "text-orange-400" : "text-white"}`}
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300 
                    ${active === index
                                                ? "rotate-180 text-orange-400"
                                                : "text-gray-400"
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`px-8 overflow-hidden transition-all duration-500 
                  ${active === index
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
                id="google-ads-faq-schema"
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
            <section className="relative py-24 text-center bg-[#0d0d0f] border-t border-orange-400/20 text-white overflow-hidden">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-400/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Ready to Scale with Google Ads?
                        </span>
                        <br />
                        <span className="text-white">
                            Work with a Certified PPC Agency in Hyderabad
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                        Partner with PPC experts who build structured paid advertising
                        systems focused on conversions, profitability, and long-term
                        business growth. Let’s launch high-performance campaigns today.
                    </p>

                    <div className="mt-14 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105
              transition duration-300 shadow-2xl"
                        >
                            Get Free PPC Consultation
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}