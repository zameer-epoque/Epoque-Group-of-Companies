"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function LeadGenerationFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What are Lead Generation Services?",
            answer:
                "Lead Generation Services focus on attracting, capturing, and converting potential customers into qualified business leads. Through performance marketing, paid ads, landing page optimization, and funnel strategy, we help businesses generate consistent and scalable inquiries.",
        },
        {
            question: "How do you generate high-quality leads in Hyderabad?",
            answer:
                "We combine Google Ads, Meta Ads (Facebook & Instagram), landing page optimization, advanced audience targeting, and conversion tracking systems to generate high-intent leads in Hyderabad’s competitive market.",
        },
        {
            question: "Which industries do you provide lead generation for?",
            answer:
                "We specialize in real estate lead generation, B2B lead generation, education, healthcare, interior design, and high-ticket service industries looking for qualified inbound inquiries.",
        },
        {
            question: "Do you provide exclusive leads?",
            answer:
                "Yes. We generate exclusive leads directly through your campaigns, landing pages, and CRM integrations — ensuring full ownership and control over your data.",
        },
        {
            question: "How do you measure lead quality and performance?",
            answer:
                "We track Cost Per Lead (CPL), conversion rates, lead source attribution, ROI, and sales-qualified lead metrics using advanced analytics dashboards and CRM integrations.",
        },
        {
            question: "How long does it take to start receiving leads?",
            answer:
                "Paid lead generation campaigns can start delivering inquiries within days of launch. However, optimization and scaling typically improve performance over the first 30–60 days.",
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
                            Lead Generation Services – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-orange-400 mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Discover how our performance-driven lead generation strategies
                            help Hyderabad businesses generate qualified inquiries,
                            reduce cost per lead, and scale revenue predictably.
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
                id="lead-generation-faq-schema"
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
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Ready to Generate High-Quality Leads?
                        </span>
                        <br />
                        <span className="text-white">
                            Work with a Performance-Driven Lead Generation Agency in Hyderabad
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                        Partner with experts who build structured lead funnels,
                        high-converting landing pages, and ROI-focused ad campaigns
                        designed to generate consistent, scalable business growth.
                    </p>

                    <div className="mt-14 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
              bg-orange-400 text-black
              hover:bg-orange-500 hover:scale-105
              transition duration-300 shadow-xl"
                        >
                            Get Free Lead Strategy Session
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}