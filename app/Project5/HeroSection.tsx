"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero.jpg" // use your building image
        alt="Luxury Apartments"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
          Inspired by Nature <br />
          <span className="text-[#5eead4]">& Luxury Living</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-90">
          Premium 1.5, 2 & 3 BHK Apartments at GMR Aerocity, Hyderabad
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#0f766e] hover:bg-[#0d5c57] rounded-full text-white transition">
            Book Site Visit
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Download Brochure
          </button>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 flex flex-col items-center text-white">
        <div className="w-[2px] h-10 bg-white/40 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-full h-1/2 bg-white"
          />
        </div>
        <span className="text-xs mt-2 opacity-70">Scroll</span>
      </div>
    </section>
  );
}