"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locationsLeft = [
  { name: "Prestige Group", time: "1 Min" },
  { name: "Vaishnavi Group", time: "1 Min" },
  { name: "Srinidhi Luxury Park 1 & 2", time: "2 Mins" },
  { name: "IRA Elevate & IRA Float", time: "2 Mins" },
  { name: "GMR Interchange", time: "2 Mins" },
  { name: "Amity University", time: "2 Mins" },
  { name: "Bureau of Immigration & CISF", time: "3 Mins" },
  { name: "SRR Projects", time: "3 Mins" },
  { name: "Casa Grand", time: "3 Mins" },
];

const locationsRight = [
  { name: "GMR Business Park", time: "3 Mins" },
  { name: "RGI Airport", time: "3 Mins" },
  { name: "Proposed Metro Station", time: "3 Mins" },
  { name: "World Trade Centre", time: "3 Mins" },
  { name: "Delhi Public School", time: "5 Mins" },
  { name: "Sancta Maria School", time: "5 Mins" },
  { name: "Trendset Builders", time: "5 Mins" },
  { name: "Outer Ring Road (ORR)", time: "7 Mins" },
];

export default function LocationSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden id='location'">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-xs md:text-sm">
            Where City
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight">
            Access <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Meets
            </span>
          </h2>

          <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg">
            Suburban Peace
          </p>
        </div>

        {/* CARD */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 shadow-xl">

          {/* ADDRESS */}
          <div className="flex items-start gap-3 mb-6 md:mb-10 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <MapPin size={16} className="text-[#5eead4] mt-1 shrink-0" />
            <p>
              Opp. Adani Aerospace Park & Telangana IT SEZ, Behind Airport Novotel Hotel & GMR AeroCity
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">

            {/* LEFT */}
            <div className="space-y-3 md:space-y-4">
              {locationsLeft.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex justify-between items-start gap-3 border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200 text-xs sm:text-sm md:text-base leading-snug">
                    {item.name}
                  </span>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-medium whitespace-nowrap">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-3 md:space-y-4">
              {locationsRight.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="flex justify-between items-start gap-3 border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200 text-xs sm:text-sm md:text-base leading-snug">
                    {item.name}
                  </span>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-gradient-to-r from-[#a78bfa] to-[#5eead4] text-black font-medium whitespace-nowrap">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}