"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  { src: "/Garikipati1.jpg", alt: "Luxury apartments in GMR Aerocity" },
  { src: "/Garikipati2.jpg", alt: "Modern premium flats with amenities" },
  { src: "/Garikipati3.jpg", alt: "High-end residential project exterior view" },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Luxury Apartments Hero Section"
      className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#022c22]/80 to-black/90" />

      {/* GLOW EFFECT */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#5eead4]/10 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">

        {/* SEO HEADING */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-serif leading-tight">
          Luxury Apartments in GMR Aerocity <br />
          <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
            Inspired by Nature & Premium Living
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
          Discover premium 1.5, 2 & 3 BHK apartments with world-class amenities,
          modern architecture, and a peaceful lifestyle in Hyderabad.
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            aria-label="Book a site visit"
            className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition"
          >
            Book Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}