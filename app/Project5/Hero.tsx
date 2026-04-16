"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/house1.jpg",
    title: "Explore\nElegance",
    subtitle: "Homes Built on Values. Backed by Vision. Trusted by Thousands.",
  },
  {
    image: "/images/house2.jpg",
    title: "Modern\nLiving",
    subtitle: "Crafting spaces that define comfort and luxury.",
  },
  {
    image: "/images/house3.jpg",
    title: "Premium\nSpaces",
    subtitle: "Where architecture meets lifestyle and elegance.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* IMAGE SLIDER */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].image}
            alt="hero"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-light leading-tight whitespace-pre-line">
            {slides[index].title}
          </h1>

          <button className="mt-6 border border-white px-6 py-3 hover:bg-white hover:text-black transition">
            View Projects
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div className="absolute bottom-20 right-6 md:right-20 max-w-md text-sm md:text-base text-gray-200">
          {slides[index].subtitle}
        </div>
      </div>
    </section>
  );
}