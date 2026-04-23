"use client"

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function RealEstateBrandingFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "Why is branding important for real estate projects?",
            answer:
                "Strong branding increases buyer trust, improves pricing power and differentiates your project in competitive markets."
        },
        {
            question: "Do you provide logo and brochure design?",
            answer:
                "Yes. We create premium logo systems, brochures, brand guidelines and marketing creatives."
        },
        {
            question: "Can branding mpact booking velocity?",
            answer:
                "Absolutely. Premium positioning improves perceived value and increases buyer confidence during launch."
        },
        {
            question: "Do you handle luxury villa branding?",
            answer:
                "Yes. We specialize in high-end villa and apartment branding systems aligned with launch campaigns."
        }
    ];

    return (
        <>
            <section className="py-4 px-6 bg-[#0f0f11] border-t border-[#C79A3B]/20">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-4xl md:text-5xl font-semibold text-center bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent mb-14">
                        Real Estate Branding FAQs
                    </h2>

                    <div className="space-y-5">
                        {faqs.map((faq, index) => {
                            const isActive = active === index;
                            return (
                                <div key={index} className="rounded-2xl border border-white/10 bg-[#141417]">
                                    <button
                                        onClick={() => setActive(isActive ? null : index)}
                                        className="w-full flex justify-between items-center px-8 py-6"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown className={`transition ${isActive ? "rotate-180 text-[#C79A3B]" : ""}`} />
                                    </button>
                                    <div className={`${isActive ? "max-h-96 pb-6 px-8" : "max-h-0"} overflow-hidden transition-all duration-500`}>
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Script
                id="real-estate-branding-faq-schema"
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
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />
        </>
    );
}