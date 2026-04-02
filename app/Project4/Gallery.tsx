"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    "/c1.jpg",
    "/c2.jpg",
    "/c3.jpg",
    "/c4.jpg",
    "/c5.jpg",

      "/ca1 (10).jpg",
      "/ca1 (1).jpg",
      "/ca1 (2).jpg",
      "/ca1 (3).jpg",
      "/ca1 (4).jpg",
      "/ca1 (5).jpg",
      "/ca1 (6).jpg",
      "/ca1 (7).jpg",
      "/ca1 (8).jpg",
      "/ca1 (9).jpg"
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative py-4 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Project Gallery
        </h2>
        <p className="text-gray-400 mt-3">
          Explore the elegance & design of our luxury villas
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setActiveImage(src)}
          >
            {/* Image */}
            <img
              src={src}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-yellow-400 text-sm font-semibold">
                View Image
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={activeImage}
              className="max-h-[80vh] rounded-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}