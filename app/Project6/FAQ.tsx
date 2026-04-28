"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do you manage my property if I live abroad?",
      a: "We handle everything from tenant management to maintenance and provide regular updates via phone and email.",
    },
    {
      q: "How is rent collected and transferred?",
      a: "We collect rent from tenants and transfer it directly to your bank account every month.",
    },
    {
      q: "What if there is a maintenance issue?",
      a: "Our team handles all maintenance issues quickly and keeps you informed with updates.",
    },
    {
      q: "Do you provide legal support?",
      a: "Yes, we assist with agreements, documentation, and handling disputes if needed.",
    },
    {
      q: "Which cities do you operate in?",
      a: "We currently serve Hyderabad, Vijayawada, Vizag, and surrounding areas.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow">
              
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-5 flex justify-between items-center"
              >
                <span className="font-medium">{item.q}</span>
                <span>{openIndex === i ? "-" : "+"}</span>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-12">
          <a
            href="#form"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Still Have Questions? Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}