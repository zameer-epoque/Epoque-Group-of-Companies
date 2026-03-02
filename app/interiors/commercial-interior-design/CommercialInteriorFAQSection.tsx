"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function CommercialInteriorFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is commercial interior design?",
            answer:
                "Commercial interior design focuses on designing functional and aesthetically refined business spaces such as offices, corporate headquarters, retail stores and hospitality environments that enhance productivity and brand presence.",
        },
        {
            question: "How much does commercial interior design cost in Hyderabad?",
            answer:
                "Commercial interior design costs depend on space size, materials, customization and scope. On average, pricing ranges from ₹1,200 to ₹3,000 per sq.ft depending on design complexity and finishing standards.",
        },
        {
            question: "Do you provide turnkey commercial interior solutions?",
            answer:
                "Yes. We provide complete turnkey commercial interior execution including space planning, 3D visualization, material procurement, civil work, furniture manufacturing and final installation.",
        },
        {
            question: "How long does an office interior project take?",
            answer:
                "Most office interior projects take between 30–60 days depending on layout requirements, approvals, customization and material selection.",
        },
        {
            question: "Which areas in Hyderabad do you serve?",
            answer:
                "We provide commercial interior design services across Gachibowli, Financial District, HITEC City, Jubilee Hills, Banjara Hills and other prime business locations in Hyderabad.",
        },
        {
            question: "Can you design interiors for IT companies and startups?",
            answer:
                "Yes. We specialize in IT office interiors, coworking spaces and corporate environments designed for scalability, productivity and modern business operations.",
        },
    ];

    return (
        <>
            {/* FAQ SECTION */}
            <section className="relative py-4 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20">

                <div className="max-w-5xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Commercial Interior Design – Frequently Asked Questions
                        </h2>

                        <div className="w-20 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>

                        <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                            Learn more about our commercial interior design process,
                            pricing structure, execution timelines and turnkey solutions
                            for office and corporate spaces in Hyderabad.
                        </p>
                    </div>

                    {/* FAQ CARDS */}
                    <div className="space-y-8">

                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`relative rounded-2xl border transition duration-300
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
                                        className={`text-lg md:text-xl font-medium transition
                    ${active === index
                                                ? "text-[#D4AF37]"
                                                : "text-white"
                                            }`}
                                    >
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        size={22}
                                        className={`transition-transform duration-300
                    ${active === index
                                                ? "rotate-180 text-[#D4AF37]"
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
                id="commercial-interior-faq-schema"
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
            <section className="relative py-24 text-center bg-[#0F172A] border-t border-[#D4AF37]/20 text-white overflow-hidden">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Ready to Transform Your Commercial Space?
                        </span>
                        <br />
                        <span className="text-white">
                            Let’s Design a Premium Business Environment.
                        </span>
                    </h2>

                    <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                        Partner with Epoque Group for structured, high-end commercial
                        interior solutions tailored for corporate offices, IT companies,
                        retail showrooms and executive business spaces.
                    </p>

                    <div className="mt-14 flex justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-14 py-5 rounded-full font-semibold
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black
              hover:opacity-90 transition duration-300 shadow-xl"
                        >
                            Get Commercial Interior Consultation
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}