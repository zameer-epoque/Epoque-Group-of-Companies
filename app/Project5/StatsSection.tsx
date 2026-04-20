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
  { icon: Layers, title: "7 Floors" },
  { icon: Building2, title: "130 Apartments" },
  { icon: CheckCircle, title: "100% Vaastu" },
  { icon: Home, title: "1.5, 2, 3 BHK" },
  { icon: Ruler, title: "900–1900 Sq.ft" },
  { icon: LayoutGrid, title: "1 Acre Project" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-xs md:text-sm">
            Thoughtfully Designed
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight">
            Perfectly{" "}
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Proportioned
            </span>
          </h2>

          <p className="text-gray-300 mt-2 text-sm sm:text-base md:text-lg">
            Built for You
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 text-center shadow-lg">

                  {/* ICON */}
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-md">
                    <Icon size={20} className="md:size-28 text-black" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 md:mt-6 text-xs sm:text-sm md:text-lg font-medium md:font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DESCRIPTION */}
        <div className="mt-12 md:mt-20 text-center max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed px-2">
          Garikipati Towers is a thoughtfully designed community offering
          spacious interiors and modern layouts for a comfortable lifestyle.
        </div>

      </div>
    </section>
  );
}