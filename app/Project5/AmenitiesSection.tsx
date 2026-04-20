"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Building2,
  ShieldCheck,
  ShoppingCart,
  Trees,
  Baby,
  ParkingCircle,
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Dumbbell, title: "Modern Gym" },
  { icon: Building2, title: "Club House" },
  { icon: ShieldCheck, title: "24/7 Security" },
  { icon: ShoppingCart, title: "Super Market" },
  { icon: Trees, title: "Terrace Garden" },
  { icon: Baby, title: "Kids Play Area" },
  { icon: ParkingCircle, title: "Reserved Parking" },
];

export default function AmenitiesSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#0f172a] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight">
            World-Class <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Amenities
            </span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
            Designed to elevate your everyday lifestyle
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-8 text-center shadow-lg">

                  {/* ICON */}
                  <div className="mx-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-md">
                    <Icon size={20} className="md:size-28 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 md:mt-6 text-xs sm:text-sm md:text-lg font-medium md:font-semibold">
                    {item.title}
                  </h3>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}