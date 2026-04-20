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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(94,234,212,0.3)]">
              <Image
                src="/Garikipati2.jpg"
                alt="Garikipati Towers"
                width={700}
                height={500}
                className="object-cover w-full h-[250px] sm:h-[300px] md:h-auto group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl md:rounded-3xl" />

            {/* BADGE */}
            <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/10 backdrop-blur-xl px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl border border-white/20 shadow-xl">
              <p className="text-[10px] md:text-xs text-gray-300">Premium Living</p>
              <h4 className="text-sm md:text-base font-semibold text-[#5eead4]">
                Since 2026
              </h4>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight mb-4 md:mb-6">
              Crafted for <br />
              <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                Modern Living
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
              Garikipati Towers blends architecture, comfort, and nature into a
              seamless lifestyle experience.
            </p>

            <p className="text-gray-400 text-sm sm:text-base">
              Designed with elegance, comfort, and long-term value in mind.
            </p>

            {/* LINE */}
            <div className="mt-4 md:mt-6 w-16 md:w-24 h-[2px] bg-gradient-to-r from-[#5eead4] to-[#a78bfa] mx-auto md:mx-0" />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 md:mt-24">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent group"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-8 text-center shadow-lg">

                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                  {item.value}
                </h3>

                <p className="text-gray-300 mt-1 text-xs sm:text-sm md:text-base">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}