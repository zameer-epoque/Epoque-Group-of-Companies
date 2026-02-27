"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function SalesStrategyFAQ() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is real estate sales strategy consulting?",
            answer:
                "It is a structured approach to improving pricing, buyer targeting and booking conversion systems."
        },
        {
            question: "Can you improve project absorption rate?",
            answer:
                "Yes. We design pricing psychology and launch momentum frameworks to accelerate absorption."
        },
        {
            question: "Do you work with in-house sales teams?",
            answer:
                "Yes. We align marketing, CRM systems and sales team scripts."
        },
        {
            question: "How quickly can we see improvement?",
            answer:
                "With structured execution, booking improvements are visible within the first launch cycle."
        }
    ];

    return (
        <>
            <main className="bg-black text-white min-h-screen px-6 py-28">

                <div className="max-w-4xl mx-auto space-y-14">

                    <h1 className="text-4xl md:text-5xl font-semibold text-center">
                        Real Estate Sales Strategy FAQs
                    </h1>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => {
                            const isActive = active === index;
                            return (
                                <div key={index} className="border border-white/10 rounded-xl bg-[#141417]">
                                    <button
                                        onClick={() => setActive(isActive ? null : index)}
                                        className="w-full flex justify-between items-center px-6 py-5"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronDown className={`${isActive ? "rotate-180 text-[#C79A3B]" : ""}`} />
                                    </button>
                                    <div className={`${isActive ? "max-h-96 p-6" : "max-h-0"} overflow-hidden transition-all duration-500`}>
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </main>

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
                                text: faq.answer
                            }
                        }))
                    })
                }}
            />
        </>
    );
}