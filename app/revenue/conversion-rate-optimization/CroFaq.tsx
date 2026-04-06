"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is Conversion Rate Optimization (CRO)?",
    a: "CRO is the process of improving your website experience to increase the percentage of visitors who take desired actions such as purchases or form submissions."
  },
  {
    q: "How long does CRO take to show results?",
    a: "Initial improvements can be seen within a few weeks, but structured A/B testing and funnel optimization typically require 30–90 days."
  },
  {
    q: "Do you conduct A/B testing?",
    a: "Yes, we run structured A/B and multivariate tests to identify high-performing variations and maximize conversion performance."
  },
  {
    q: "Can CRO increase revenue without increasing traffic?",
    a: "Absolutely. By improving conversion rates, businesses can generate more revenue from the same amount of website traffic."
  },
  {
    q: "What tools do you use for CRO?",
    a: "We use analytics platforms, heatmaps, user behavior tracking, and testing tools to optimize landing pages and sales funnels."
  },
  {
    q: "Do you provide performance tracking reports?",
    a: "Yes, we provide detailed performance reports including conversion rate improvements and ROI insights."
  }
]

export default function CroFaq() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section className="bg-black py-24 px-6">

      {/* 🔥 HEADING */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Everything you need to know about CRO services and optimization strategies
        </p>

        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full"></div>
      </div>

      {/* 🔥 FAQ LIST */}
      <div className="max-w-4xl mx-auto space-y-6">

        {faqs.map((item, i) => (
          <div
            key={i}
            className={`relative rounded-2xl border transition duration-300 
            ${active === i
              ? "border-orange-400 bg-gradient-to-r from-[#1a1a1a] to-[#111]"
              : "border-white/10 bg-[#121212] hover:border-white/20"
            }`}
          >

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/10 via-yellow-500/10 to-red-500/10 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

            {/* HEADER */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-6 text-left relative z-10"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.q}
              </h3>

              <motion.div
                animate={{ rotate: active === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-orange-400" />
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
                  className="px-6 pb-6 relative z-10"
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