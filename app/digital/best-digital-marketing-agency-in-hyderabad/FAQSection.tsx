"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What digital marketing services do you offer in Hyderabad?",
            answer:
                "We provide comprehensive digital marketing services including SEO, Google Ads management, Meta advertising, performance marketing, social media management, content marketing, and conversion funnel development tailored for Hyderabad businesses.",
        },
        {
            question: "How can digital marketing help my business grow?",
            answer:
                "Digital marketing increases your online visibility, drives targeted traffic, generates qualified leads, and improves brand authority. Our structured growth systems ensure measurable ROI and scalable revenue growth.",
        },
        {
            question: "Do you specialize in performance marketing?",
            answer:
                "Yes. We build data-driven performance marketing campaigns across Google and Meta platforms, focused on maximizing ROAS, reducing cost-per-lead, and scaling profitable campaigns.",
        },
        {
            question: "How long does it take to see results from SEO?",
            answer:
                "SEO typically delivers noticeable improvements within 3–6 months depending on competition and website authority. We implement long-term ranking strategies designed for sustainable growth.",
        },
        {
            question: "Do you provide Google Ads and paid advertising services?",
            answer:
                "Yes. We manage Google Search, Display, YouTube Ads, and Meta Ads campaigns with advanced targeting, A/B testing, and conversion optimization frameworks.",
        },
        {
            question: "How do you measure digital marketing performance?",
            answer:
                "We track key metrics including traffic growth, conversions, cost-per-lead (CPL), return on ad spend (ROAS), engagement rates, and revenue attribution using advanced analytics dashboards.",
        },
        {
            question: "Do you work with startups and established businesses?",
            answer:
                "Yes. We work with startups, SMEs, and enterprise brands across multiple industries, creating customized digital strategies aligned with business goals.",
        },
        {
            question: "Do you provide monthly reporting and strategy updates?",
            answer:
                "Absolutely. Clients receive detailed monthly performance reports, campaign insights, strategic improvements, and growth recommendations to ensure continuous optimization.",
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
                            Digital Marketing – Frequently Asked Questions
                        </h2>
                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-6"></div>

                        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Get clear answers about our SEO services, Google Ads management,
                            performance marketing strategies, pricing structure, and growth process.
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
            <section className="relative py-28 text-center bg-[#0d0d0f] border-t border-[#C79A3B]/20 text-white overflow-hidden">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C79A3B]/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Ready to Grow Your Business?
                        </span>
                        <br />
                        <span className="text-white">
                            Let’s Build a High-Performance Digital Strategy.
                        </span>
                    </h2>

                    <p className="mt-10 text-gray-400 text-lg leading-relaxed">
                        Partner with a results-driven digital marketing agency in Hyderabad
                        specializing in SEO, paid advertising, and performance marketing.
                        We design structured growth systems that increase visibility,
                        generate qualified leads, and maximize long-term ROI.
                    </p>



                </div>
            </section>
        </>
    );
}