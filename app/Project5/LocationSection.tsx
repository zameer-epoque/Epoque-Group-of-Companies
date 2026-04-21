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
    <section
      id="location"
      aria-label="Location advantages near GMR Aerocity Hyderabad"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden"
    >
      {/* LIGHTER GLOW */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-purple-500/20 blur-[90px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-teal-400/20 blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-xs md:text-sm">
            Prime Location
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Apartments Near GMR Aerocity Hyderabad <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Excellent Connectivity
            </span>
          </h2>

          <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Located near Rajiv Gandhi International Airport, this project offers
            seamless access to business hubs, schools, and major infrastructure.
          </p>
        </div>

        {/* CARD */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-10 shadow-lg">

          {/* ADDRESS */}
          <div className="flex items-start gap-3 mb-6 md:mb-10 text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <MapPin size={18} className="text-[#5eead4] mt-1 shrink-0" />
            <p>
              Opp. Adani Aerospace Park & Telangana IT SEZ, Behind Airport Novotel Hotel & GMR Aerocity, Hyderabad
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

            {/* LEFT */}
            <div className="space-y-3">
              {locationsLeft.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-start gap-3 border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200 text-xs sm:text-sm md:text-base">
                    {item.name}
                  </span>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-medium">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="space-y-3">
              {locationsRight.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex justify-between items-start gap-3 border-b border-white/10 pb-2"
                >
                  <span className="text-gray-200 text-xs sm:text-sm md:text-base">
                    {item.name}
                  </span>

                  <span className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-gradient-to-r from-[#a78bfa] to-[#5eead4] text-black font-medium">
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/919133633327?text=Hi, I want location details",
                "_blank"
              )
            }
            className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition shadow-lg"
          >
            Get Location Details
          </button>
        </div>

      </div>
    </section>
  );
}