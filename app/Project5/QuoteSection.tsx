"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 text-center">
      
      {/* QUOTE ICON */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[#b89a7a] text-5xl mb-6"
      >
        “
      </motion.div>

      {/* MAIN TEXT */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-6xl font-light leading-tight max-w-4xl mx-auto"
      >
        Where dreams take shape, spaces come{" "}
        <span className="text-gray-500">alive</span>
      </motion.h2>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
      >
        <div>
          <h3 className="text-3xl md:text-5xl text-[#b89a7a] font-light">
            20+
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            years on the market
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl text-[#b89a7a] font-light">
            6+
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            successful projects
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-5xl text-[#b89a7a] font-light">
            7+
          </h3>
          <p className="text-sm mt-2 text-gray-400">
            upcoming projects
          </p>
        </div>
      </motion.div>
    </section>
  );
}