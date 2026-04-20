"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/g1.jpg",
  "/g2.jpg",
  "/g3.jpg",
  "/g4.jpg",
  "/g5.jpg",
  "/g6.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            Project <span className="text-[#0f766e]">Gallery</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt="Gallery"
                width={500}
                height={400}
                className="object-cover w-full h-full hover:scale-110 transition duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}