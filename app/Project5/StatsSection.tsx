"use client";

import { motion } from "framer-motion";
import {
  Building2,
  LayoutGrid,
  Layers,
  CheckCircle,
  Ruler,
  Home,
} from "lucide-react";

const features = [
  { icon: Layers, title: "7 Floors Residential Tower" },
  { icon: Building2, title: "130 Premium Apartments" },
  { icon: CheckCircle, title: "100% Vaastu Compliant Homes" },
  { icon: Home, title: "1.5, 2 & 3 BHK Flats" },
  { icon: Ruler, title: "900–1900 Sq.ft Area" },
  { icon: LayoutGrid, title: "1 Acre Gated Community" },
];

export default function StatsSection() {
  return (
    <section
      aria-label="Project highlights and apartment specifications"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden"
    >
      {/* LIGHTER GLOW */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-purple-500/20 blur-[90px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-teal-400/20 blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-xs md:text-sm">
            Project Highlights
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Luxury Apartments in Hyderabad <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Smartly Designed Spaces
            </span>
          </h2>

          <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Discover thoughtfully planned homes with modern layouts, premium
            construction quality, and efficient space utilization.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:scale-105 transition duration-300">

                  {/* ICON */}
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 md:mt-16 text-center max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Garikipati Towers offers premium apartments in Hyderabad with spacious
          interiors, modern amenities, and excellent connectivity near GMR Aerocity.
        </div>

      </div>
    </section>
  );
}