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
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Visual <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Gallery
            </span>
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Experience the lifestyle before you move in
          </p>
        </div>

        {/* GRID */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group"
              onClick={() => setSelected(src)}
            >
              {/* IMAGE */}
              <Image
                src={src}
                alt="Gallery"
                width={500}
                height={400}
                className="w-full h-auto object-cover group-hover:scale-110 transition duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

              {/* CENTER ICON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="p-4 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-xl">
                  <Eye className="text-black" />
                </div>
              </div>

              {/* BOTTOM TEXT */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm opacity-0 group-hover:opacity-100 transition">
                  View Image
                </p>
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
              className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50"
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
                className="max-w-5xl w-full px-6"
              >
                <Image
                  src={selected}
                  alt="Selected"
                  width={1200}
                  height={800}
                  className="rounded-3xl object-cover w-full shadow-[0_0_40px_rgba(94,234,212,0.3)]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-32 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#a78bfa]" />

          <div className="relative z-10 text-center text-white py-20 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Discover Every Detail
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Walk through beautifully crafted spaces designed to inspire your
              future lifestyle.
            </p>

            <button className="mt-8 px-10 py-4 rounded-full bg-black/80 backdrop-blur-lg hover:bg-black transition font-medium shadow-xl">
              Book Site Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}