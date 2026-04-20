"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const plans = [
  {
    title: "1.5 BHK",
    size: "932 Sq.ft",
    image: "/plan1.jpg",
  },
  {
    title: "2 BHK",
    size: "1208 Sq.ft",
    image: "/plan2.jpg",
  },
  {
    title: "3 BHK",
    size: "1647 Sq.ft",
    image: "/plan3.jpg",
  },
];

export default function FloorPlansSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Elegant <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Floor Plans
            </span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Designed for space, comfort & luxury living
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
            >
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_rgba(94,234,212,0.3)] transition duration-500">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-[300px] group-hover:scale-110 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* INFO */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                    {plan.title}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    {plan.size}
                  </p>

                  <button className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-medium hover:scale-105 transition shadow-lg">
                    View Plan
                  </button>
                </div>

                {/* HOVER GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#5eead4]/20 to-[#a78bfa]/20 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="mt-32 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#a78bfa]" />

          <div className="relative z-10 text-center text-white py-20 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Choose Your Perfect Home
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Explore intelligently designed layouts that offer comfort,
              elegance, and a perfect balance of space.
            </p>

            <button className="mt-8 px-10 py-4 rounded-full bg-black/80 backdrop-blur-lg hover:bg-black transition font-medium shadow-xl">
              Download Brochure
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}