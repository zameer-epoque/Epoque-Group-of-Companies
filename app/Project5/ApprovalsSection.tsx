"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const approvals = [
  {
    image: "/approval1.jpg",
    title: "HMDA Approved Layout",
    code: "011079/BP/HMDA/2903/SMD/2024",
  },
  {
    image: "/approval2.jpg",
    title: "RERA Registered Project",
    code: "P02400009745",
  },
  {
    image: "/approval3.jpg",
    title: "Badangpet Municipal Approval",
    code: "011079/BP/HMDA/2903/SMD/2024",
  },
  {
    image: "/approval4.jpg",
    title: "Airport Authority NOC Clearance",
    code: "HIAL/SOUTH/B/042023/735505",
  },
];

export default function ApprovalsSection() {
  return (
    <section
      aria-label="Government Approvals for Real Estate Project"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] text-white overflow-hidden"
    >
      {/* GLOW (OPTIMIZED) */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-purple-500/20 blur-[100px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-teal-400/20 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Government Approved <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Legal Certifications
            </span>
          </h2>

          <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            This project is fully approved by HMDA, RERA, municipal authorities,
            and airport authorities ensuring a safe and legally secure investment.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {approvals.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative p-[1px] rounded-xl md:rounded-2xl bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-md hover:scale-105 transition duration-300">

                {/* LOGO */}
                <div className="flex justify-center mb-3 md:mb-4">
                  <Image
                    src={item.image}
                    alt={`${item.title} certification logo`}
                    width={80}
                    height={60}
                    sizes="(max-width:768px) 80px, 120px"
                    quality={80}
                    className="object-contain h-[40px] md:h-[60px]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xs sm:text-sm md:text-base font-semibold">
                  {item.title}
                </h3>

                {/* CODE */}
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1 break-words">
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