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
    <section className="relative py-4 px-6 overflow-hidden" id="faq">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-4xl mx-auto text-white">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-white/80 mb-12">
          Everything you need to know about our property services
        </p>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <motion.div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-md"
              >
                {/* QUESTION */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-medium text-white">
                    {item.q}
                  </span>

                  {/* ICON */}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="text-white text-xl"
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
                      <p className="pb-5 text-white/80 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#form"
            className="inline-block bg-white text-[#2F4A8A] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Still Have Questions? Get Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
}