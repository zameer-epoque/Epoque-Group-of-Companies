"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      title: "Consultation",
      desc: "We understand your property details and requirements.",
      icon: "📞",
    },
    {
      title: "Inspection",
      desc: "Our team visits and evaluates your property condition.",
      icon: "🏠",
    },
    {
      title: "Execution",
      desc: "We handle tenants, agreements, and management tasks.",
      icon: "⚙️",
    },
    {
      title: "Monitoring",
      desc: "Regular updates, rent collection, and maintenance.",
      icon: "📊",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F4A8A]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3BA64B]/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#2F4A8A]"
        >
          How We Work
        </motion.h2>

        <p className="text-gray-600 mb-14">
          Simple, transparent, and hassle-free process to manage your property.
        </p>

        {/* 🔵 TIMELINE */}
        <div className="relative">

          {/* LINE */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative text-center"
              >
                {/* 🔢 STEP NUMBER */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] text-white flex items-center justify-center font-bold shadow-lg">
                  {i + 1}
                </div>

                {/* ICON */}
                <div className="text-3xl mb-3">{step.icon}</div>

                <h3 className="font-semibold text-lg mb-2 text-[#2F4A8A]">
                  {step.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-14"
        >
          <a
            href="#form"
            className="inline-block bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Start Managing Your Property
          </a>
        </motion.div>

      </div>
    </section>
  );
}