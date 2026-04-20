"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, Eye } from "lucide-react";

const images = [
  "/Garikipati1.jpg",
  "/Garikipati2.jpg",
  "/Garikipati3.jpg",
  "/Garikipati4.jpg",
  "/Garikipati5.jpg",
  "/Garikipati6.jpg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight">
            Visual <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Gallery
            </span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
            Experience the lifestyle before you move in
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:columns-3 gap-3 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl md:rounded-3xl cursor-pointer group"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt="Gallery"
                width={500}
                height={400}
                className="w-full h-[140px] sm:h-[180px] md:h-auto object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

              {/* ICON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="p-2 md:p-4 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-xl">
                  <Eye className="text-black" size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 px-4"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white"
              >
                <X size={28} />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="max-w-5xl w-full"
              >
                <Image
                  src={selected}
                  alt="Selected"
                  width={1200}
                  height={800}
                  className="rounded-2xl md:rounded-3xl object-cover w-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-16 md:mt-32 relative rounded-2xl md:rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#a78bfa]" />

          <div className="relative z-10 text-center text-white py-12 md:py-20 px-4 md:px-6">
            <h3 className="text-xl sm:text-2xl md:text-5xl font-serif mb-3 md:mb-4">
              Discover Every Detail
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-sm sm:text-base md:text-lg">
              Walk through beautifully crafted spaces.
            </p>

            <button className="mt-5 md:mt-8 px-6 py-3 md:px-10 md:py-4 rounded-full bg-black/80 backdrop-blur-lg text-sm md:text-base font-medium active:scale-95 transition shadow-xl">
              Book Site Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}