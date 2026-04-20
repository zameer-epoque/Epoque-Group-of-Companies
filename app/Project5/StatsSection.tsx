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
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <p className="text-[#5eead4] uppercase tracking-widest text-sm">
            Thoughtfully Designed
          </p>

          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Perfectly <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Proportioned
            </span>
          </h2>

          <p className="text-gray-300 mt-3">Built for You</p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 text-center shadow-xl hover:shadow-[0_0_40px_rgba(94,234,212,0.3)] transition">

                  {/* ICON */}
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-lg group-hover:scale-110 transition">
                    <Icon size={28} className="text-black" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#5eead4]/20 to-[#a78bfa]/20 blur-2xl rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* DESCRIPTION */}
        <div className="mt-20 text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Garikipati Towers is more than just a building — it’s a thoughtfully
          designed community with spacious interiors and modern layouts,
          offering the perfect setting to live, grow, and enjoy life.
        </div>

      </div>
    </section>
  );
}