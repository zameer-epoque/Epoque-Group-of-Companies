"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const plans = [
  {
    title: "1.5 BHK Apartment",
    size: "932 Sq.ft",
    image: "/Garikipati4.jpg",
  },
  {
    title: "3 BHK Apartment",
    size: "1647 Sq.ft",
    image: "/Garikipati5.jpg",
  },
  {
    title: "2 BHK Apartment",
    size: "1208 Sq.ft",
    image: "/Garikipati6.jpg",
  },
];

export default function FloorPlansSection() {
  return (
    <section
      id="floorplans"
      aria-label="Apartment Floor Plans in Hyderabad"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white"
    >
      {/* GLOW (OPTIMIZED) */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-purple-500/20 blur-[100px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-teal-400/20 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Luxury Apartment Floor Plans in Hyderabad <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Smart & Spacious Layouts
            </span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore 1.5, 2 & 3 BHK floor plans designed for maximum space,
            ventilation, and modern living comfort.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
            >
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] transition duration-300">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={`${plan.title} floor plan layout in Hyderabad`}
                    width={500}
                    height={350}
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 400px"
                    quality={85}
                    className="object-cover w-full h-[220px] sm:h-[260px] md:h-[280px] group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* INFO */}
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                    {plan.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {plan.size}
                  </p>

                  {/* CTA */}
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}