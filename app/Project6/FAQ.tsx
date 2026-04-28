"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">

        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#2F4A8A]">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Everything you need to know about our property services
        </p>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                className="bg-white/80 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-gray-800">
                    {item.q}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-[#3BA64B] text-xl"
                  >
                    ▼
                  </motion.span>
                </button>

                {/* ANSWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-5"
                    >
                      <p className="pb-5 text-gray-600 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-14">
          <a
            href="#form"
            className="bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Still Have Questions? Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}