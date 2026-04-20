"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

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
    <section className="relative py-28 bg-gradient-to-b from-white to-[#eef5f4] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0f766e]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">
            Visual <span className="text-[#0f766e]">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Experience the lifestyle before you move in
          </p>
        </div>

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt="Gallery"
                width={500}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-110 transition duration-700"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />

              {/* HOVER TEXT */}
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm">View Image</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FULLSCREEN MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl w-full px-6"
              >
                <Image
                  src={selected}
                  alt="Selected"
                  width={1000}
                  height={700}
                  className="rounded-2xl object-cover w-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA STRIP */}
        <div className="mt-28 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />

          <div className="relative z-10 text-center text-white py-16 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Discover Every Detail
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Walk through beautifully crafted spaces designed to inspire your
              future lifestyle.
            </p>

            <button className="mt-8 px-10 py-3 bg-white text-[#0f766e] rounded-full hover:bg-gray-100 transition font-medium shadow-lg">
              Book Site Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}