"use client"

import { motion } from "framer-motion"

const faqs = [
  {
    q: "What is marketing automation?",
    a: "Marketing automation uses software tools to automate repetitive marketing tasks such as email campaigns, lead nurturing, CRM updates, and customer segmentation."
  },
  {
    q: "How can marketing automation increase revenue?",
    a: "Automation improves lead follow-up speed, nurtures prospects consistently, and increases conversion rates through personalized communication."
  },
  {
    q: "Do you integrate with existing CRM systems?",
    a: "Yes, we integrate automation workflows with popular CRM platforms to ensure seamless lead tracking and reporting."
  },
  {
    q: "How long does it take to implement automation?",
    a: "Implementation typically takes 2–4 weeks depending on complexity and integrations."
  },
  {
    q: "Can automation improve lead quality?",
    a: "Yes, automation uses lead scoring and behavior tracking to prioritize high-intent prospects."
  },
  {
    q: "Do you provide reporting and performance tracking?",
    a: "Yes, we provide real-time dashboards to monitor conversions, campaigns, and ROI."
  }
]

export default function MarketingFAQSingle() {
  return (
    <section className="bg-black py-24 px-6">

      {/* 🔥 HEADING */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>

        <p className="text-gray-400 mt-4">
          Learn more about marketing automation, workflows, and performance systems
        </p>

        <div className="mt-6 w-20 h-1 mx-auto bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full"></div>
      </div>

      {/* 🔥 SINGLE STACK */}
      <div className="max-w-4xl mx-auto space-y-6">

        {faqs.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500"
          >

            <div className="p-8 rounded-2xl bg-[#121212] border border-white/10">

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/10 via-yellow-500/10 to-red-500/10 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

              <h3 className="text-xl font-semibold text-white mb-3 relative z-10">
                {item.q}
              </h3>

              <p className="text-gray-400 leading-relaxed relative z-10">
                {item.a}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}