"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "How much does luxury interior design cost in Hyderabad?",
            answer:
                "Luxury interior design projects in Hyderabad typically range from ₹1,800 to ₹3,500 per sq.ft depending on materials, customization level, imported finishes and overall project scale.",
        },
        {
            question: "Do you provide complete turnkey luxury interior execution?",
            answer:
                "Yes. We offer full turnkey luxury interior services including concept design, 3D visualization, premium material sourcing, custom furniture manufacturing and final installation.",
        },
        {
            question: "How long does a luxury villa interior project take?",
            answer:
                "Luxury villa interiors generally take 60–90 days depending on customization, approvals, imported material timelines and project complexity.",
        },
        {
            question: "Do you handle bespoke furniture and lighting design?",
            answer:
                "Yes. We design customized furniture, curated lighting concepts and premium décor elements tailored specifically for high-end villas and residences.",
        },
        {
            question: "Which areas in Hyderabad do you serve for luxury interiors?",
            answer:
                "We serve Jubilee Hills, Banjara Hills, Kokapet, Gachibowli, Financial District and other premium residential locations across Hyderabad.",
        },
        {
            question: "Can you design interiors aligned with Vastu principles?",
            answer:
                "Yes. We integrate Vastu-aligned planning while maintaining modern aesthetics and luxury design standards.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-28 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold  bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Luxury Interior Design – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Get clarity on our luxury interior design process,
                            pricing structure, execution timelines and premium
                            customization options in Hyderabad.
                        </p>
                    </div>

                    {/* FAQ ITEMS */}
                    <div className="space-y-8">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl border transition duration-300
                ${active === index
                                        ? "border-[#D4AF37] bg-[#111827]"
                                        : "border-white/10 bg-[#0F172A] hover:border-[#D4AF37]/50"
                                    }`}
                            >
                                <button
                                    onClick={() =>
                                        setActive(active === index ? null : index)
                                    }
                                    className="w-full flex justify-between items-center px-8 py-7 text-left"
                                >
                                    <span
                                        className={`text-lg md:text-xl font-medium ${active === index
                                            ? "text-[#D4AF37]"
                                            : "text-white"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300 ${active === index
                                            ? "rotate-180 text-[#D4AF37]"
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
                id="luxury-interior-faq-schema"
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