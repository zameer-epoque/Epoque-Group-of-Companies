"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "130+", label: "Apartments" },
  { value: "1.5–3 BHK", label: "Configurations" },
  { value: "900–1900", label: "Sq.ft Range" },
  { value: "100%", label: "Vaastu" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-white to-[#f1f5f4] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0f766e]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/Garikipati2.jpg"
                alt="Garikipati Towers"
                width={700}
                height={500}
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* FLOATING BADGE */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-lg px-6 py-3 rounded-xl shadow-lg">
              <p className="text-sm text-gray-600">Premium Living</p>
              <h4 className="font-semibold text-[#0f766e]">Since 2026</h4>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Crafted for <br />
              <span className="text-[#0f766e]">Modern Living</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Garikipati Towers blends architecture, comfort, and nature into a
              seamless lifestyle experience. Every space is designed with purpose,
              elegance, and long-term value in mind.
            </p>

            <p className="text-gray-500">
              From smart layouts to premium amenities, this is where your future
              home begins.
            </p>

            {/* SIGNATURE LINE */}
            <div className="mt-6 w-20 h-[2px] bg-[#0f766e]" />
          </motion.div>
        </div>

        {/* STATS GLASS CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="backdrop-blur-xl bg-white/60 border border-white/30 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#0f766e]">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* PREMIUM STRIP */}
        <div className="mt-24 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />

          <div className="relative z-10 text-center text-white py-16 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Experience Elevated Living
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              A lifestyle crafted with precision, comfort, and sophistication —
              designed for those who expect more from their home.
            </p>

            <button className="mt-8 px-8 py-3 bg-white text-[#0f766e] rounded-full hover:bg-gray-100 transition font-medium">
              Explore Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}