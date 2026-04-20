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
    <section
      id="plans"
      className="relative py-28 bg-gradient-to-b from-[#f8f7f4] to-[#eef5f4] overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0f766e]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif">
            Elegant <span className="text-[#0f766e]">Floor Plans</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Designed for space, comfort, and functionality
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
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={plan.image}
                  alt={plan.title}
                  width={500}
                  height={350}
                  className="object-cover w-full h-[320px] group-hover:scale-110 transition duration-700"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>

              {/* FLOATING INFO */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-white/80 border border-white/40 rounded-xl p-4 flex justify-between items-center shadow-lg">

                <div>
                  <h3 className="font-semibold text-lg text-[#0f766e]">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-gray-600">{plan.size}</p>
                </div>

                <button className="px-4 py-2 text-sm rounded-full bg-[#0f766e] text-white hover:bg-[#14b8a6] transition">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA STRIP */}
        <div className="mt-28 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />

          <div className="relative z-10 text-center text-white py-16 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Find Your Perfect Layout
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Explore thoughtfully designed floor plans tailored for modern
              families, offering space, privacy, and elegance.
            </p>

            <button className="mt-8 px-10 py-3 bg-white text-[#0f766e] rounded-full hover:bg-gray-100 transition font-medium shadow-lg">
              Download Full Plans
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}