"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "How much do interior designers charge in Hyderabad?",
            answer:
                "Interior design pricing in Hyderabad depends on materials, customization level and project scope. Luxury interior projects typically range between ₹1,500 to ₹3,000 per sq.ft based on finishes and design complexity.",
        },
        {
            question: "Do you provide turnkey interior solutions?",
            answer:
                "Yes. We provide complete turnkey interior services including space planning, 3D visualization, material selection, furniture manufacturing and final installation.",
        },
        {
            question: "How long does a villa interior project take?",
            answer:
                "A luxury villa interior project usually takes 45–75 days depending on customization, design approvals and material procurement timelines.",
        },
        {
            question: "Which areas in Hyderabad do you serve?",
            answer:
                "We provide interior design services across Jubilee Hills, Kokapet, Gachibowli, Financial District, Banjara Hills and other premium residential locations.",
        },
        {
            question: "Do you offer customized interior designs?",
            answer:
                "Yes. All our interior designs are fully customized based on lifestyle requirements, spatial planning, Vastu preferences and budget expectations.",
        },
        {
            question: "Do you provide warranty on interior work?",
            answer:
                "Yes. We provide warranty coverage on modular installations, fittings and workmanship depending on the selected interior package.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-24 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Interior Design – Frequently Asked Questions
                        </h2>
                        <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Find answers to common questions about our luxury interior
                            design process, pricing structure, execution timelines and
                            turnkey services in Hyderabad.
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
                id="interior-faq-schema"
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