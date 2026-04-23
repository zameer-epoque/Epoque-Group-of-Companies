"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/realstate1.png",
    title: "Dominate Digital Growth",
    description: "Scale your business with data-driven marketing strategies.",
  },
  {
    image: "/realstate1.png",
    title: "Real Estate Marketing Experts",
    description: "Generate high-quality property leads that convert.",
  },
  {
    image: "/realstate2.jpg",
    title: "Performance That Drives Revenue",
    description: "We focus on ROI, not vanity metrics.",
  },
  {
    image: "/realstate2.png",
    title: "SEO That Ranks #1",
    description: "Get your business visible where it matters most.",
  },
  {
     image: "/realstate3.png",
    title: "Build Powerful Brands",
    description: "Creative strategies that position you as a leader.",
  },
];

export default function NetflixHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // change every 5 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Images */}
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
            src={slides[index].image}
            alt="hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay (Netflix style) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            key={index + "text"}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {slides[index].title}
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              {slides[index].description}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                Get Started
              </button>
              <button className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg text-white border border-white/30">
                Learn More
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}