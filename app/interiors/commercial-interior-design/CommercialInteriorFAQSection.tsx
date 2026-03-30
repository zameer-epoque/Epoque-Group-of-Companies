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
        "Commercial interior design involves planning and designing functional and visually appealing business spaces such as offices, corporate environments, retail stores and commercial buildings. It focuses on improving productivity, brand identity and space efficiency.",
    },
    {
      question: "What is the cost of commercial interior design in Hyderabad?",
      answer:
        "The cost of commercial interior design in Hyderabad typically ranges from ₹1500 to ₹4000 per sq.ft depending on space size, materials, customization and design complexity. Premium office interiors may cost higher based on specifications.",
    },
    {
      question: "Do you provide turnkey commercial interior solutions in Hyderabad?",
      answer:
        "Yes, we provide complete turnkey commercial interior solutions including space planning, concept design, 3D visualization, civil work, furniture, lighting, and final execution. We handle everything from start to finish.",
    },
    {
      question: "How long does a commercial interior project take?",
      answer:
        "Most commercial interior projects take between 4 to 10 weeks depending on project size, approvals, customization and material selection. Large corporate offices may take longer.",
    },
    {
      question: "Which areas do you serve in Hyderabad?",
      answer:
        "We provide commercial interior design services in Gachibowli, HITEC City, Madhapur, Financial District, Jubilee Hills, Banjara Hills and across Hyderabad.",
    },
    {
      question: "Do you design office interiors for startups and IT companies?",
      answer:
        "Yes, we specialize in office interiors for startups, IT companies, coworking spaces and corporate offices. Our designs focus on scalability, productivity and modern workspace trends.",
    },
    {
      question: "Why hire professional commercial interior designers?",
      answer:
        "Hiring professional commercial interior designers ensures better space utilization, improved productivity, strong brand identity, high-quality materials and long-term cost efficiency.",
    },
  ];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-[#0B0F19] text-white border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Commercial Interior Design FAQs – Hyderabad
            </h2>

            <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
              Get answers about commercial interior design services, pricing,
              timelines and turnkey solutions for office and corporate spaces in Hyderabad.
            </p>
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border ${
                  active === index
                    ? "border-[#D4AF37] bg-[#111827]"
                    : "border-white/10 bg-[#0F172A]"
                }`}
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`${
                      active === index ? "rotate-180 text-yellow-400" : ""
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-6 pb-5 text-gray-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SCHEMA (IMPROVED) */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      {/* STRONG CTA */}
      <section className="py-20 text-center bg-[#0F172A]">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Need Commercial Interior Designers in Hyderabad?
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Contact Epoque Group for premium office, corporate and retail interior design solutions.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}