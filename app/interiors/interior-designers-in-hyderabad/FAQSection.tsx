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
        "Interior design cost in Hyderabad usually ranges from ₹1200 to ₹3000 per sq.ft depending on materials, customization, design complexity and project size. Luxury interiors may cost higher based on premium finishes.",
    },
    {
      question: "Do you provide turnkey interior solutions?",
      answer:
        "Yes, we provide complete turnkey interior design services including space planning, 3D visualization, material selection, execution, furniture installation and final handover.",
    },
    {
      question: "How long does a home or villa interior project take?",
      answer:
        "A 2BHK or 3BHK interior project typically takes 30–45 days, while villa interiors may take 60–90 days depending on customization and design scope.",
    },
    {
      question: "Which areas in Hyderabad do you serve?",
      answer:
        "We provide interior design services across Gachibowli, Kokapet, Jubilee Hills, Financial District, Banjara Hills, HITEC City and other major areas in Hyderabad.",
    },
    {
      question: "Do you offer customized interior designs?",
      answer:
        "Yes, we provide fully customized interior design solutions based on your lifestyle, budget, space requirements and Vastu preferences.",
    },
    {
      question: "Do you provide warranty on interior work?",
      answer:
        "Yes, we offer warranty on modular furniture, fittings and workmanship depending on the materials and package selected.",
    },
    {
      question: "Why should I hire professional interior designers?",
      answer:
        "Professional interior designers ensure better space planning, modern design execution, high-quality materials, cost efficiency and long-term durability for your home or office interiors.",
    },
  ];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Interior Design FAQs – Hyderabad
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
              Find answers to common questions about interior design services,
              pricing, timelines and turnkey solutions in Hyderabad.
            </p>
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition ${
                  active === index
                    ? "border-[#D4AF37] bg-[#111827]"
                    : "border-white/10 bg-[#0F172A] hover:border-[#D4AF37]/50"
                }`}
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5"
                >
                  <span
                    className={`text-lg font-medium ${
                      active === index ? "text-[#D4AF37]" : "text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      active === index
                        ? "rotate-180 text-[#D4AF37]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SCHEMA (SEO BOOST) */}
      <Script
        id="faq-schema"
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