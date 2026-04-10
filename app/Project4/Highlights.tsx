"use client";

import { motion } from "framer-motion";

export default function Highlights() {
  const items = [
    { title: "Configuration", value: "4 BHK Triplex Villas (G+2)", icon: "🏡" },
    { title: "Project Area", value: "4 Acre Premium Development", icon: "🌳" },
    { title: "Total Units", value: "42 Exclusive Villas", icon: "🏘️" },
    { title: "Club House", value: "Luxury Clubhouse & Amenities", icon: "🏊" },
    { title: "Bedrooms", value: "4 Spacious Bedrooms", icon: "🛏️" },
    { title: "Bathrooms", value: "4 Premium Bathrooms", icon: "🛁" },
    { title: "Parking", value: "2 Covered Car Parks", icon: "🚗" },
    { title: "Size", value: "3750+ Sq.Ft Spacious Villas", icon: "📐" },
    { title: "Facing", value: "Lake Facing Premium Villas", icon: "🌊" },
    { title: "Approval", value: "RERA Approved Project", icon: "✔️" },
    { title: "Price", value: "Starts from ₹3.5 Cr*", icon: "💰" },
    { title: "Location", value: "Tukkuguda – Near Airport", icon: "📍" },
    { title: "Security", value: "24/7 Gated Community & CCTV", icon: "🔐" },
    { title: "Connectivity", value: "Near ORR & IT Corridors", icon: "🛣️" },
    { title: "Investment", value: "High ROI & Appreciation", icon: "📈" },
  ];

  return (
    <section
      id="details"
      className="relative py-4 px-4 md:px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Premium Villa Highlights
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Experience ultra-luxury living in Tukkuguda with lake-facing villas,
          world-class amenities, and high investment value.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="group p-[1px] rounded-2xl bg-gradient-to-br from-yellow-400/40 to-transparent"
          >
            <div className="relative bg-black/70 backdrop-blur-xl border border-white/10 
            rounded-2xl p-5 md:p-6 h-full 
            group-hover:border-yellow-400/60 transition duration-300">

              {/* ICON */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="text-3xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-sm text-gray-400">
                {item.title}
              </h3>

              {/* VALUE */}
              <p className="text-base md:text-lg font-semibold mt-1 group-hover:text-yellow-400 transition">
                {item.value}
              </p>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition bg-yellow-400 blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-20 max-w-5xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-200"
      >
        <div className="bg-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl md:text-3xl font-bold">
              Limited Villas Available 🚨
            </h3>
            <p className="text-gray-400 mt-2">
              Only 42 premium villas in a high-demand location — secure your dream home today.
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 
            text-black px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Book Site Visit
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}