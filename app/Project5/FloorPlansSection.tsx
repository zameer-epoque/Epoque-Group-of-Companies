"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const plans = [
  {
    title: "1.5 BHK",
    size: "932 Sq.ft",
    image: "/Garikipati4.jpg",
  },
  {
    title: "3 BHK",
    size: "1647 Sq.ft",
    image: "/Garikipati5.jpg",
  },
  {
    title: "2 BHK",
    size: "1208 Sq.ft",
    image: "/Garikipati6.jpg",
  },
];

export default function FloorPlansSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white id='floorplans'>">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight">
            Elegant <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Floor Plans
            </span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base md:text-lg">
            Designed for space, comfort & luxury living
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
            >
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg">

                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    width={500}
                    height={350}
                    className="object-cover w-full h-[220px] sm:h-[260px] md:h-[300px] group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>

                {/* INFO */}
                <div className="p-4 sm:p-5 md:p-6 text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
                    {plan.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm mt-1">
                    {plan.size}
                  </p>

                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
       
      </div>
    </section>
  );
}