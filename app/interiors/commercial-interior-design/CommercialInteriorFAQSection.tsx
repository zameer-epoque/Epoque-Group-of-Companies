
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
        "Commercial interior design focuses on creating functional and visually appealing business spaces such as offices, corporate environments, retail stores, and commercial buildings. It improves productivity, branding, and space efficiency.",
    },
    {
      question: "What is the cost of commercial interior design in Hyderabad?",
      answer:
        "The cost typically ranges from ₹1500 to ₹4000 per sq.ft depending on space size, materials, customization, and design complexity.",
    },
    {
      question: "Do you provide turnkey commercial interior solutions?",
      answer:
        "Yes, we offer complete turnkey solutions including planning, design, execution, furniture, lighting, and final delivery.",
    },
    {
      question: "How long does a commercial interior project take?",
      answer:
        "Most projects take 4 to 10 weeks depending on size, complexity, and customization requirements.",
    },
    {
      question: "Which areas do you serve in Hyderabad?",
      answer:
        "We serve Gachibowli, HITEC City, Madhapur, Financial District, Jubilee Hills, Banjara Hills, and all major commercial hubs.",
    },
    {
      question: "Do you design office interiors for startups and IT companies?",
      answer:
        "Yes, we specialize in startup offices, IT companies, coworking spaces, and corporate workspaces with scalable designs.",
    },
    {
      question: "Why hire professional commercial interior designers?",
      answer:
        "Professional designers ensure better space utilization, strong brand identity, improved productivity, and long-term cost efficiency.",
    },
  ];

  return (
    <>
      {/* FAQ SECTION */}
      <section className="py-12 px-6 bg-[#0B0F19] text-white border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Commercial Interior Design FAQs – Hyderabad
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about commercial interior design,
              pricing, timelines, and turnkey solutions.
            </p>
          </div>

          {/* FAQ ITEMS */}
          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`rounded-xl border transition ${
                  active === index
                    ? "border-yellow-500 bg-[#111827]"
                    : "border-white/10 bg-[#0F172A]"
                }`}
              >
                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`transition-transform ${
                      active === index
                        ? "rotate-180 text-yellow-400"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SCHEMA */}
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

      {/* CTA */}
      
    </>
  );
}