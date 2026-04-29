"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aprhills1.jpg"
          className="w-full h-full object-cover scale-110"
          alt="Luxury Villa"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#020617]"></div>
      </div>

      {/* 🔥 Animated Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-300"
        >
          ✨ Premium Gated Community
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Experience Luxury Living
          <br />
          <span className="text-green-400">
            4BHK Triplex Villas
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Nestled in Bachupally with serene lake & hill views. Designed for
          modern families seeking comfort, elegance, and exclusivity.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            "₹3.69 Cr Onwards",
            "15+ Acres",
            "176 Villas",
          ].map((item, i) => (
            <div
              key={i}
              className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Book Site Visit
          </a>

          <a
            href="https://wa.me/919100455529"
            target="_blank"
            className="px-8 py-4 rounded-xl border border-white/30 backdrop-blur-md hover:bg-white/10 transition"
          >
            WhatsApp Now
          </a>
        </motion.div>

      </div>

      {/* 🔥 Floating Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute bottom-10 left-10 bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20"
      >
        🌿 45% Open Spaces
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute bottom-10 right-10 bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20"
      >
        🎬 Private Home Theatre
      </motion.div>
    </section>
  );
}