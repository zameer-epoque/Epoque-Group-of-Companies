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
        "Luxury interior design cost in Hyderabad typically ranges from ₹1800 to ₹4000 per sq.ft depending on materials, customization, imported finishes and project scale. High-end villa interiors may cost higher based on premium specifications.",
    },
    {
      question: "Do you provide turnkey luxury interior design services?",
      answer:
        "Yes, we provide complete turnkey luxury interior solutions including concept design, 3D visualization, premium material selection, custom furniture manufacturing and final execution.",
    },
    {
      question: "How long does a luxury villa interior project take?",
      answer:
        "Luxury villa interior projects generally take 60–90 days depending on customization level, approvals, imported materials and design complexity.",
    },
    {
      question: "Do you design custom furniture and lighting?",
      answer:
        "Yes, we create bespoke furniture designs, premium lighting concepts and luxury décor elements tailored specifically for villas and high-end homes.",
    },
    {
      question: "Which areas in Hyderabad do you serve for luxury interiors?",
      answer:
        "We provide luxury interior design services in Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Financial District and across Hyderabad.",
    },
    {
      question: "Do you follow Vastu in luxury interior design?",
      answer:
        "Yes, we integrate Vastu principles with modern luxury interior design to create balanced, aesthetic and functional living spaces.",
    },
    {
      question: "Why choose luxury interior designers in Hyderabad?",
      answer:
        "Luxury interior designers ensure premium quality materials, elegant design concepts, efficient space planning and long-term durability, creating sophisticated and high-value living environments.",
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
              Luxury Interior Design FAQs – Hyderabad
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
              Get answers about luxury interior design services, pricing,
              timelines and turnkey execution for villas and premium homes in Hyderabad.
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
        id="luxury-faq-schema"
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

      {/* EXTRA CTA (SEO + CONVERSION BOOST) */}
      <section className="py-20 text-center bg-[#0F172A]">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Looking for Luxury Interior Designers in Hyderabad?
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Contact Epoque Group for premium villa and high-end residential interior design solutions.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
          >
            Get Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}