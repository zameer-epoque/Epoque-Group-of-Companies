"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Spacious Living & Dining",
      desc: "Open-plan layout with natural lighting and ventilation",
    },
    {
      title: "Attached Bathrooms",
      desc: "Elegant bathrooms with premium fittings",
    },
    {
      title: "Modern Modular Kitchen",
      desc: "Designed with storage efficiency and style",
    },
    {
      title: "Private Balconies",
      desc: "Relaxing outdoor spaces with scenic views",
    },
    {
      title: "Premium Finishes",
      desc: "High-quality materials for luxury feel",
    },
    {
      title: "Strong RCC Structure",
      desc: "Earthquake-resistant construction",
    },
    {
      title: "Smart Home Ready",
      desc: "Supports automation & smart devices",
    },
    {
      title: "24/7 Security",
      desc: "CCTV surveillance & gated community",
    },
    {
      title: "Covered Parking",
      desc: "Dedicated parking space for residents",
    },
    {
      title: "Landscaped Garden",
      desc: "Beautiful green outdoor environment",
    },
    {
      title: "Rainwater Harvesting",
      desc: "Eco-friendly water conservation system",
    },
    {
      title: "Power Backup",
      desc: "Uninterrupted electricity supply",
    },
  ];

  return (
    <section
      id="features"
      className="relative py-4 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Luxury Villa Features
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Experience premium lifestyle with thoughtfully designed spaces,
          modern amenities, and high-end finishes that redefine comfort.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto relative z-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="group p-[1px] rounded-xl bg-gradient-to-r from-yellow-400/40 to-transparent"
          >
            <div className="relative flex items-start gap-4 bg-black/70 backdrop-blur-xl 
            border border-white/10 rounded-xl p-5 
            group-hover:border-yellow-400/60 transition duration-300">

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-yellow-400 mt-1"
              >
                <CheckCircle size={26} />
              </motion.div>

              {/* Text */}
              <div>
                <h4 className="text-white font-semibold">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-200 transition">
                  {item.desc}
                </p>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition bg-yellow-400 blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}