

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function PropertyLeadFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do you generate qualified property leads?",
            answer:
                "We use Google Search Ads, Meta campaigns and landing page funnels targeting high-intent buyers actively searching for property."
        },
        {
            question: "Do you target NRI investors?",
            answer:
                "Yes. We run global campaigns targeting NRI buyers across UAE, USA, UK and Australia."
        },
        {
            question: "How quickly can we start receiving leads?",
            answer:
                "Campaigns can start generating inquiries within days depending on targeting strategy and budget allocation."
        },
        {
            question: "How do you improve lead quality?",
            answer:
                "We apply strict filtering, keyword targeting, pricing segmentation and retargeting systems."
        },
        {
            question: "Do you integrate CRM systems?",
            answer:
                "Yes. We connect campaigns with CRM automation to improve follow-up and booking conversion."
        }
    ];

    return (
        <>
            <section className="relative py-4 px-6 bg-[#0f0f11] text-white border-t border-[#C79A3B]/20">

                <div className="max-w-4xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Property Lead Generation FAQs
                        </h2>
                        <p className="mt-6 text-gray-400">
                            Answers about real estate buyer targeting, CPL reduction
                            and conversion systems.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {faqs.map((faq, index) => {
                            const isActive = active === index;
                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition duration-300 
                  ${isActive
                                            ? "border-[#C79A3B] bg-[#18181c]"
                                            : "border-white/10 bg-[#141417] hover:border-[#C79A3B]/60"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : index)}
                                        className="w-full flex justify-between items-center px-8 py-6 text-left"
                                    >
                                        <span className="text-lg font-medium">
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={22}
                                            className={`transition-transform duration-300 
                      ${isActive ? "rotate-180 text-[#C79A3B]" : "text-gray-400"}`}
                                        />
                                    </button>

                                    <div className={`px-8 transition-all duration-500 overflow-hidden 
                    ${isActive ? "max-h-96 pb-6" : "max-h-0"}`}>
                                        <p className="text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* FAQ Schema */}
            <Script
                id="property-lead-faq-schema"
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