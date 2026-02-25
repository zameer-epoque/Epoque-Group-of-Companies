"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function SEOFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why is SEO important for businesses in Hyderabad?",
            answer:
                "Hyderabad is one of India’s fastest-growing business hubs. Search Engine Optimization (SEO) helps businesses rank higher on Google, increase qualified organic traffic, build brand authority, and generate consistent inbound leads. Unlike paid ads, SEO provides long-term visibility and sustainable growth.",
        },
        {
            question: "How long does it take to see SEO results?",
            answer:
                "SEO is a long-term digital growth strategy. Most businesses start seeing noticeable improvements in 3–6 months depending on competition, keyword difficulty, website structure, and domain authority. Competitive industries may take longer but deliver stronger long-term ROI.",
        },
        {
            question: "Do you provide Local SEO services in Hyderabad?",
            answer:
                "Yes. We provide complete Local SEO services including Google Business Profile optimization, location-based keyword targeting, citation building, review management, and map pack ranking strategies to dominate Hyderabad-specific searches.",
        },
        {
            question: "What SEO services do you offer?",
            answer:
                "We offer Technical SEO, On-Page SEO, Keyword Research, Competitor Analysis, Content Strategy, High-Authority Link Building, Local SEO, E-commerce SEO, and Enterprise SEO solutions tailored to business goals.",
        },
        {
            question: "How do you measure SEO performance?",
            answer:
                "We track keyword rankings, organic traffic growth, click-through rates, conversion metrics, domain authority, backlink profile, and revenue attribution using Google Analytics, Search Console, and advanced SEO dashboards.",
        },
        {
            question: "Do you provide monthly SEO performance reports?",
            answer:
                "Yes. Clients receive detailed monthly reports covering ranking improvements, traffic growth, technical enhancements, backlink acquisition, competitor analysis, and actionable growth insights.",
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
                            Search Engine Optimization – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-orange-400 mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                            Learn how our SEO agency in Hyderabad improves Google rankings,
                            increases organic traffic, and builds sustainable digital growth
                            systems for long-term business success.
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
                id="seo-faq-schema"
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
                            Ready to Dominate Google Rankings?
                        </span>
                        <br />
                        <span className="text-white">
                            Partner with a Leading SEO Agency in Hyderabad
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                        Work with SEO experts who combine technical excellence, keyword
                        strategy, and authority-building frameworks to deliver measurable
                        organic growth. Let’s build a long-term search engine optimization
                        system that drives traffic, leads, and sustainable revenue.
                    </p>

                    <div className="mt-14 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
              bg-orange-400 text-black
              hover:bg-orange-500 hover:scale-105
              transition duration-300 shadow-xl"
                        >
                            Get Free SEO Audit
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}