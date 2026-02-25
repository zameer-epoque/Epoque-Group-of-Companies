"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";
import Link from 'next/link'
export default function AboutFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Who is Epoque Digital?",
            answer:
                "Epoque Digital is a performance-driven digital marketing agency in Hyderabad specializing in SEO, Google Ads management, Meta advertising, and conversion-focused marketing systems. We help startups, SMEs, and enterprise brands scale through structured digital growth strategies.",
        },
        {
            question: "What makes your digital marketing agency different?",
            answer:
                "We focus on revenue-driven digital marketing instead of vanity metrics. Our strategies combine data analytics, conversion tracking, advanced targeting, and continuous optimization to maximize ROI and deliver measurable business growth.",
        },
        {
            question: "How experienced is your team in digital marketing?",
            answer:
                "Our team consists of SEO specialists, paid media experts, performance marketers, and creative strategists with hands-on experience managing competitive campaigns across multiple industries in Hyderabad and across India.",
        },
        {
            question: "Do you work with startups and established brands?",
            answer:
                "Yes. We work with startups, local businesses, real estate firms, healthcare brands, IT companies, and enterprise organizations looking to improve search rankings, generate qualified leads, and increase revenue.",
        },
        {
            question: "What industries do you specialize in?",
            answer:
                "We provide digital marketing services for real estate, healthcare, education, IT services, eCommerce, and local Hyderabad businesses seeking sustainable online growth.",
        },
        {
            question: "What is your approach to digital marketing strategy?",
            answer:
                "Our approach begins with research and market analysis, followed by structured planning, performance execution, advanced tracking implementation, and ongoing optimization to ensure consistent and scalable growth.",
        },
        {
            question: "Do you provide transparent reporting?",
            answer:
                "Yes. We provide detailed monthly reports including traffic growth, keyword rankings, cost-per-lead metrics, conversion tracking data, and ROI performance insights.",
        },
        {
            question: "Why should businesses in Hyderabad choose your agency?",
            answer:
                "We understand the competitive Hyderabad market and build localized digital marketing strategies tailored to specific business goals. Our focus is long-term authority building and predictable revenue growth.",
        },
    ];

    return (
        <>
            <section className="relative py-4 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            About Our Digital Marketing Agency – Frequently Asked Questions
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Learn more about our experience, expertise, digital marketing process,
                            and how we help businesses in Hyderabad achieve measurable growth.
                        </p>

                        <div className="w-24 h-[3px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto mt-10"></div>
                    </div>

                    {/* FAQ Items */}
                    <div className="space-y-6">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border transition duration-300
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
                                        className={`text-lg md:text-xl font-medium
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
            <div className="mt-10 flex justify-center">
                <Link
                    href="/contact"
                    className="px-12 py-4 rounded-full font-semibold
    bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
    text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Get Free Strategy Consultation
                </Link>
            </div>
            {/* FAQ SCHEMA FOR SEO */}
            <Script
                id="about-faq-schema"
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