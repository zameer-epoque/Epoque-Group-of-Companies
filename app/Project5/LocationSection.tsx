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
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden">

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-sm">
            Where City
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Access <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Meets
            </span>
          </h2>

          <p className="text-gray-300 mt-2 text-lg">
            Suburban Peace
          </p>
        </div>

        {/* CARD */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl">

          {/* ADDRESS */}
          <div className="flex items-center gap-3 mb-10 text-gray-300">
            <MapPin size={18} className="text-[#5eead4]" />
            <p>
              Opp. Adani Aerospace Park & Telangana IT SEZ,  
              Behind Airport Novotel Hotel & GMR AeroCity
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="space-y-4">
              {locationsLeft.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200">{item.name}</span>

                  <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-medium">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-4">
              {locationsRight.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-center border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200">{item.name}</span>

                  <span className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-[#a78bfa] to-[#5eead4] text-black font-medium">
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