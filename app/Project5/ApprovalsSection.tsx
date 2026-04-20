"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const approvals = [
  {
    image: "/approval1.jpg",
    title: "HMDA Approved",
    code: "011079/BP/HMDA/2903/SMD/2024",
  },
  {
        image: "/approval2.jpg",
    title: "RERA Registered",
    code: "P02400009745",
  },
  {
       image: "/approval3.jpg",
    title: "Badangpet Municipal",
    code: "011079/BP/HMDA/2903/SMD/2024",
  },
  {
    image: "/approval4.jpg",
    title: "Airport Authority NOC",
    code: "HIAL/SOUTH/B/042023/735505",
  },
];

export default function ApprovalsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif">
            Government <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Approvals
            </span>
          </h2>

          <p className="text-gray-300 mt-3 text-sm md:text-lg">
            Verified, trusted and legally approved project
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {approvals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center shadow-lg hover:shadow-[0_0_30px_rgba(94,234,212,0.3)] transition">

                {/* LOGO */}
                <div className="flex justify-center mb-3 md:mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={60}
                    className="object-contain h-[40px] md:h-[60px]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xs sm:text-sm md:text-base font-medium">
                  {item.title}
                </h3>

                {/* CODE */}
                <p className="text-[10px] md:text-xs text-gray-400 mt-1 break-words">
                  {item.code}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}