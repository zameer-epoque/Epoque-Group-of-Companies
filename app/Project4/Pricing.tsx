"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      title: "2 BHK Villa",
      price: "₹65 Lakhs*",
      highlight: "Best Value",
      features: [
        "Spacious Layout",
        "Modern Kitchen",
        "Private Balcony",
        "Covered Parking",
      ],
    },
    {
      title: "3 BHK Villa",
      price: "₹85 Lakhs*",
      highlight: "Premium Choice",
      features: [
        "Extra Bedroom",
        "Luxury Interiors",
        "Larger Living Area",
        "Premium Community",
      ],
    },
  ];

  return (
    <section className="relative py-4 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white text-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* Heading */}
      <div className="relative z-10 mb-14">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Pricing Plans
        </h2>
        <p className="text-gray-400 mt-3">
          Choose the perfect villa that suits your lifestyle
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-200 group"
          >
            <div className="bg-black rounded-2xl p-8 backdrop-blur-xl border border-white/10 
            group-hover:border-yellow-400/60 transition duration-300">

              {/* Badge */}
              <div className="inline-block mb-4 px-4 py-1 text-xs bg-yellow-400 text-black rounded-full font-semibold">
                {plan.highlight}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {plan.title}
              </h3>

              {/* Price */}
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mt-2">
                {plan.price}
              </h2>

              {/* Features */}
              <div className="mt-6 space-y-2 text-gray-300 text-sm">
                {plan.features.map((f, idx) => (
                  <p key={idx}>✔ {f}</p>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 bg-gradient-to-r from-yellow-400 to-yellow-300 
                text-black px-6 py-2 rounded-full font-semibold shadow-lg"
              >
                Book Site Visit
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 mt-8 relative z-10">
        *Prices are indicative and may change without prior notice.
      </p>
    </section>
  );
}