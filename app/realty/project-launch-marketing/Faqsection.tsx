

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

export default function ProjectLaunchFAQSection() {
    const [active, setActive] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is real estate project launch marketing?",
            answer:
                "Project launch marketing is a structured campaign strategy designed to generate awareness, site visits and early bookings during the critical pre-launch and launch phase of a real estate project."
        },
        {
            question: "Do you handle pre-launch buzz campaigns in Hyderabad?",
            answer:
                "Yes. We create investor teaser campaigns, demand-generation funnels and audience segmentation strategies before official bookings open."
        },
        {
            question: "How long should a launch campaign run?",
            answer:
                "The most aggressive marketing usually runs during the first 30–90 days to maximize booking velocity and project momentum."
        },
        {
            question: "Which platforms work best for project launches?",
            answer:
                "Google Search Ads, Meta Ads, YouTube campaigns, high-converting landing pages and CRM automation systems deliver the best results."
        },
        {
            question: "Can you generate NRI and investor leads?",
            answer:
                "Yes. We run global targeting campaigns for NRI investors across UAE, USA, UK and Australia with high-intent segmentation."
        },
        {
            question: "How do you improve booking conversion rates?",
            answer:
                "We combine persuasive copywriting, urgency-driven campaigns, behavioral retargeting and structured CRM follow-up systems."
        },
        {
            question: "Do you provide post-launch remarketing?",
            answer:
                "Yes. We implement remarketing funnels to re-engage interested buyers and accelerate pending booking decisions."
        }
    ];

    return (
        <>
            {/* ================= FAQ SECTION ================= */}
            <section className="relative py-4 px-6 bg-[#0f0f11] text-white overflow-hidden">

                {/* Premium Glow */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C79A3B]/10 blur-[200px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-semibold">
                            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                                Project Launch Marketing FAQs
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Clear answers about pre-launch strategy, booking acceleration,
                            performance marketing and investor targeting.
                        </p>

                        <div className="w-24 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mx-auto"></div>
                    </div>

                    {/* Accordion */}
                    <div className="space-y-5">
                        {faqs.map((faq, index) => {
                            const isActive = active === index;

                            return (
                                <div
                                    key={index}
                                    className={`rounded-2xl border transition-all duration-300 
                  ${isActive
                                            ? "border-[#C79A3B] bg-[#18181c] shadow-lg"
                                            : "border-white/10 bg-[#141417] hover:border-[#C79A3B]/50"
                                        }`}
                                >
                                    <button
                                        onClick={() => setActive(isActive ? null : index)}
                                        className="w-full flex justify-between items-center px-8 py-6 text-left"
                                    >
                                        <span
                                            className={`text-lg md:text-xl font-medium transition-colors 
                      ${isActive ? "text-[#C79A3B]" : "text-white"}`}
                                        >
                                            {faq.question}
                                        </span>

                                        <ChevronDown
                                            size={22}
                                            className={`transition-transform duration-300 
                      ${isActive
                                                    ? "rotate-180 text-[#C79A3B]"
                                                    : "text-gray-400"
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`px-8 overflow-hidden transition-all duration-500 
                    ${isActive
                                                ? "max-h-96 opacity-100 pb-6"
                                                : "max-h-0 opacity-0"
                                            }`}
                                    >
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

            {/* ================= CTA SECTION ================= */}
            <section className="relative py-4 text-center bg-black border-t border-[#C79A3B]/20">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C79A3B]/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-3xl mx-auto px-6 space-y-8">

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Ready to Launch Your Real Estate Project?
                    </h2>

                    <p className="text-gray-400 text-lg">
                        Let’s design a high-impact launch campaign that drives site visits,
                        qualified buyers and faster bookings.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-12 py-5 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Plan Your Launch Campaign
                    </Link>

                </div>
            </section>

            {/* ================= FAQ SCHEMA ================= */}
            <Script
                id="project-launch-faq-schema"
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