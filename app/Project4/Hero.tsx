"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/c1.jpg"
          alt="Luxury Villas"
          className="w-full h-full object-cover"
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-6 max-w-4xl">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          4 BHK Luxury Triplex Villas
          <span className="block mt-3 text-yellow-400">
            Premium Living in Tukkuguda
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto"
        >
          4 Acre luxury property located in the heart of Tukkuguda with lake-facing villas,
          world-class amenities, and high investment value near Airport & IT hubs.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            Book Site Visit
          </a>

          <a
            href="#details"
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore Villas
          </a>
        </motion.div>

        {/* INFO BADGES */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          {[
            "4 BHK Villas",
            "4 Acre Property",
            "Lake Facing",
            "₹3.5 Cr*",
            "RERA Approved",
            "42 Triplex Villas + Club House",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg py-3"
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}