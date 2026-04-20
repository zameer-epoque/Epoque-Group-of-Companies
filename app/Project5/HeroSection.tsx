"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/Garikipati1.jpg",
  "/Garikipati2.jpg",
  "/Garikipati3.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-white">

      {/* BACKGROUND SLIDER */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Luxury Apartments"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#022c22]/80 to-black/90" />

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#5eead4]/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
          Inspired by Nature <br />
          <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
            & Luxury Living
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Premium 1.5, 2 & 3 BHK Apartments at GMR Aerocity
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold">
            Book Site Visit
          </button>

        </div>

      </div>

    </section>
  );
}