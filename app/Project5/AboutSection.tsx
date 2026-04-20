"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "130+", label: "Apartments" },
  { value: "1.5–3 BHK", label: "Configurations" },
  { value: "900–1900", label: "Sq.ft Range" },
  { value: "100%", label: "Vaastu" },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f8f7f4] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/building2.jpg"
              alt="Garikipati Towers"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              Perfectly Proportioned, <br />
              <span className="text-[#0f766e]">Built for You</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Garikipati Towers is more than just a building — it’s a thoughtfully
              designed community crafted for modern living. With premium finishes,
              intelligent layouts, and serene surroundings, every home reflects
              comfort, elegance, and functionality.
            </p>

            <p className="text-gray-500">
              Whether you’re starting a new chapter or upgrading your lifestyle,
              this project offers the perfect blend of luxury and convenience.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-[#0f766e]">
                {item.value}
              </h3>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* HIGHLIGHT STRIP */}
        <div className="mt-20 bg-[#0f766e] text-white rounded-2xl p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">
            Live in the Heart of Comfort
          </h3>

          <p className="max-w-2xl mx-auto opacity-90">
            Smartly planned homes with modern ventilation, premium amenities,
            and a vibrant community designed to enhance your everyday life.
          </p>
        </div>

      </div>
    </section>
  );
}