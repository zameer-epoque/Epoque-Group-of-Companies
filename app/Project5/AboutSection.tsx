"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "130+", label: "Luxury Apartments" },
  { value: "1.5, 2 & 3 BHK", label: "Configurations Available" },
  { value: "900–1900 Sq.ft", label: "Area Range" },
  { value: "100%", label: "Vaastu Compliant Homes" },
];

export default function AboutSection() {
  return (
    <section
      aria-label="About Luxury Apartments Project"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white id='about'"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-purple-500/20 blur-[100px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] bg-teal-400/20 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_0_30px_rgba(94,234,212,0.25)]">
              <Image
                src="/Garikipati2.jpg"
                alt="Garikipati Towers luxury apartments in Hyderabad"
                width={700}
                height={500}
                sizes="(max-width:768px) 100vw, 50vw"
                quality={85}
                priority={false}
                className="object-cover w-full h-[220px] sm:h-[280px] md:h-auto group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl md:rounded-3xl" />

            {/* BADGE */}
            <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/10 backdrop-blur-xl px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl border border-white/20 shadow-lg">
              <p className="text-[10px] md:text-xs text-gray-300">Premium Living</p>
              <h4 className="text-sm md:text-base font-semibold text-[#5eead4]">
                Since 2026
              </h4>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            {/* SEO H2 */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 md:mb-6">
              Premium Apartments in Hyderabad <br />
              <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                Designed for Modern Living
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6 max-w-xl mx-auto md:mx-0">
              Garikipati Towers offers luxury apartments in Hyderabad with modern
              architecture, green surroundings, and world-class amenities for a
              comfortable lifestyle.
            </p>

            <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
              Experience a perfect blend of comfort, design, and long-term investment value.
            </p>

            {/* LINE */}
            <div className="mt-5 md:mt-6 w-16 md:w-24 h-[2px] bg-gradient-to-r from-[#5eead4] to-[#a78bfa] mx-auto md:mx-0" />
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-14 md:mt-20">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-md">

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
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