"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What real estate services do you provide?",
    a: "We provide real estate branding, luxury villa marketing, apartment launch campaigns, sales strategy consulting and property lead generation services."
  },
  {
    q: "Do you specialize in Hyderabad real estate markets?",
    a: "Yes, we specialize in Hyderabad real estate marketing with deep market insights and local targeting strategies."
  },
  {
    q: "Do you handle both branding and performance marketing?",
    a: "Yes, we handle complete branding and performance marketing including ads, funnels, and lead generation."
  },
  {
    q: "Do you work with luxury villa and apartment developers?",
    a: "Yes, we work with builders, developers, and real estate companies for high-end projects."
  },
  {
    q: "How soon can campaigns generate leads?",
    a: "Paid campaigns can start generating leads within days, while SEO takes 1–3 months for strong results."
  }
]

export default function FAQAccordion() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="bg-black py-24 px-6">

      {/* 🔥 HEADING SECTION */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          Get clear answers about our real estate marketing, funnel systems, and lead generation services.
        </p>

        {/* Glow line */}
        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full"></div>

      </div>

      {/* FAQ LIST */}
      <div className="max-w-4xl mx-auto space-y-6">

        {faqs.map((item, i) => (
          <div
            key={i}
            className={`rounded-2xl border transition duration-300 
            ${active === i 
              ? "border-yellow-500 bg-gradient-to-r from-[#1a1a1a] to-[#111]" 
              : "border-white/10 bg-[#121212] hover:border-white/20"
            }`}
          >

            {/* HEADER */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-6 text-left"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.q}
              </h3>

              <motion.div
                animate={{ rotate: active === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-gray-400" />
              </motion.div>
            </button>

            {/* CONTENT */}
            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-400 leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}

      </div>

    </section>
  )
}