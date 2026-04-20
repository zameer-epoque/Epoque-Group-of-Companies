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
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

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
            <div className="overflow-hidden rounded-3xl shadow-[0_0_60px_rgba(94,234,212,0.3)]">
              <Image
                src="/Garikipati2.jpg"
                alt="Garikipati Towers"
                width={700}
                height={500}
                className="object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* OVERLAY LIGHT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />

            {/* FLOATING BADGE */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/20 shadow-xl">
              <p className="text-xs text-gray-300">Premium Living</p>
              <h4 className="font-semibold text-[#5eead4]">Since 2026</h4>
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
              <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                Modern Living
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Garikipati Towers blends architecture, comfort, and nature into a
              seamless lifestyle experience. Every space is designed with purpose,
              elegance, and long-term value in mind.
            </p>

            <p className="text-gray-400">
              From smart layouts to premium amenities, this is where your future
              home begins.
            </p>

            {/* SIGNATURE LINE */}
            <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-[#5eead4] to-[#a78bfa]" />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-center shadow-lg group-hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition">

                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                  {item.value}
                </h3>

                <p className="text-gray-300 mt-2">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="mt-32 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#a78bfa]" />

          <div className="relative z-10 text-center text-white py-20 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Experience Elevated Living
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              A lifestyle crafted with precision, comfort, and sophistication —
              designed for those who expect more from their home.
            </p>

            <button className="mt-8 px-10 py-4 rounded-full bg-black/80 backdrop-blur-lg hover:bg-black transition font-medium shadow-xl">
              Explore Project
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}