"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const villas = [
    {
      title: "200 Sq Yards Villa",
      east: "3075 Sft",
      west: "3095 Sft",
      price: "₹3.69 Cr*",
    },
    {
      title: "222 Sq Yards Villa",
      east: "3400 Sft",
      west: "3400 Sft",
      price: "₹4.08 Cr*",
      popular: true,
    },
    {
      title: "267 Sq Yards Villa",
      east: "3820 Sft",
      west: "3865 Sft",
      price: "₹4.58 Cr*",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Villa Pricing
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Choose your perfect luxury home
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {villas.map((villa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.07 }}
              className={`relative p-8 rounded-3xl border transition backdrop-blur-xl 
              ${villa.popular
                  ? "bg-gradient-to-b from-green-500/20 to-blue-500/10 border-green-400"
                  : "bg-white/5 border-white/10"
                }`}
            >
              {/* Popular Tag */}
              {villa.popular && (
                <div className="absolute top-4 right-4 bg-green-500 px-3 py-1 text-xs rounded-full">
                  Most Popular
                </div>
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">
                {villa.title}
              </h3>

              {/* Sizes */}
              <div className="text-gray-400 text-sm space-y-1 mb-6">
                <p>East: {villa.east}</p>
                <p>West: {villa.west}</p>
              </div>

              {/* Price */}
              <h4 className="text-3xl font-bold text-green-400 mb-2">
                {villa.price}
              </h4>
              <p className="text-gray-500 text-sm mb-6">
                ₹12,000 / sft
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="block text-center bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Book Site Visit
              </a>

              {/* Urgency */}
              <p className="text-red-400 text-xs mt-4 text-center">
                Limited Villas Available
              </p>
            </motion.div>
          ))}

        </div>

        {/* Bottom Info */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          Possession by July 2026 • HMDA & RERA Approved
        </div>

      </div>
    </section>
  );
}