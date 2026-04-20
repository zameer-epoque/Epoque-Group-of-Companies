"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <Image
          src="/hero.jpg"
          alt="Luxury Apartments"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

      {/* LIGHT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0f766e]/20 blur-[120px]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-5xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-wide">
          Inspired by Nature <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5eead4] to-[#14b8a6]">
            & Luxury Living
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Premium 1.5, 2 & 3 BHK Apartments at GMR Aerocity, Hyderabad
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white font-medium shadow-lg hover:scale-105 transition">
            Book Site Visit
          </button>

          <button className="px-8 py-3 rounded-full border border-white/50 backdrop-blur-lg hover:bg-white hover:text-black transition">
            Download Brochure
          </button>
        </div>
      </motion.div>

      {/* FLOATING INFO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-10 md:bottom-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 flex gap-8 text-white shadow-xl"
      >
        <div>
          <p className="text-xs opacity-70">Starting Price</p>
          <h3 className="font-semibold text-lg">₹49 Lakhs*</h3>
        </div>

        <div>
          <p className="text-xs opacity-70">Location</p>
          <h3 className="font-semibold text-lg">Shamshabad</h3>
        </div>

        <div>
          <p className="text-xs opacity-70">Status</p>
          <h3 className="font-semibold text-lg text-[#5eead4]">
            Pre Launch
          </h3>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-4 flex flex-col items-center text-white">
        <div className="w-[2px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-full h-1/2 bg-white"
          />
        </div>
        <span className="text-xs mt-2 opacity-70 tracking-widest">
          SCROLL
        </span>
      </div>
    </section>
  );
}