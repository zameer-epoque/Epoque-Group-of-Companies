"use client"

import { useState } from "react"
import Script from "next/script"
import { HelpCircle, ChevronDown } from "lucide-react"

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)

    const faqs = [
        {
            q: "What are turnkey interior solutions?",
            a: "Turnkey interior solutions include complete design, execution, material procurement, and final delivery handled by one company."
        },
        {
            q: "Do you handle full interior execution?",
            a: "Yes, we manage civil, electrical, plumbing, carpentry, and finishing work."
        },
        {
            q: "What is the cost of turnkey interiors in Hyderabad?",
            a: "Costs range between ₹1,500 to ₹3,500 per sq.ft depending on materials and customization."
        },
        {
            q: "How long does the project take?",
            a: "Apartments take 30–60 days and villas take 60–120 days."
        },
        {
            q: "Do you provide 3D interior designs before execution?",
            a: "Yes, we provide detailed 2D layouts and 3D designs."
        },
        {
            q: "Can I customize materials and design?",
            a: "Yes, we offer full customization based on your preferences."
        },
        {
            q: "Do you provide warranty?",
            a: "Yes, we provide warranty on materials and workmanship."
        },
        {
            q: "Is pricing fixed?",
            a: "We provide transparent fixed pricing with no hidden costs."
        },
        {
            q: "Do you handle small projects?",
            a: "Yes, we handle both small and large interior projects."
        },
        {
            q: "How to get started?",
            a: "Contact us for a free consultation and project discussion."
        }
    ]

    return (
        <div className="max-w-4xl mx-auto px-6 py-24">

            <h2 className="text-4xl text-center font-semibold mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqs.map((item, i) => {
                    const isOpen = activeIndex === i

                    return (
                        <div
                            key={i}
                            className="border border-gray-800 rounded-xl overflow-hidden bg-[#111]"
                        >
                            {/* QUESTION */}
                            <button
                                onClick={() => setActiveIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    <HelpCircle className="text-orange-400" size={20} />
                                    <span className="font-semibold text-white">
                                        {item.q}
                                    </span>
                                </div>

                                <ChevronDown
                                    className={`transition-transform duration-300 ${
                                        isOpen ? "rotate-180 text-orange-400" : ""
                                    }`}
                                />
                            </button>

                            {/* ANSWER */}
                            <div
                                className={`px-5 transition-all duration-300 ${
                                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                                } overflow-hidden`}
                            >
                                <p className="text-gray-400">{item.a}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* ✅ AUTO FAQ SCHEMA */}
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: faqs.map((faq) => ({
                            "@type": "Question",
                            name: faq.q,
                            acceptedAnswer: {
                                "@type": "Answer",
                                text: faq.a
                            }
                        }))
                    })
                }}
            />

        </div>
    )
}