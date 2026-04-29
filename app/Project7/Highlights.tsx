"use client";

import { motion } from "framer-motion";

export default function Highlights() {
  const highlights = [
    {
      title: "Private Home Theatre",
      desc: "Experience cinema in your own villa",
      icon: "🎬",
    },
    {
      title: "Premium Red Brick",
      desc: "Stronger, cooler & long-lasting construction",
      icon: "🧱",
    },
    {
      title: "45% Open Space",
      desc: "Green, breathable & peaceful environment",
      icon: "🌿",
    },
    {
      title: "40 Ft Wide Roads",
      desc: "Spacious internal road planning",
      icon: "🛣️",
    },
    {
      title: "Lake & Hill View",
      desc: "Serene views for a peaceful lifestyle",
      icon: "🏞️",
    },
    {
      title: "HMDA & RERA Approved",
      desc: "Safe & legally secure investment",
      icon: "📜",
    },
  ];

  return (
    <section
      id="highlights"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Project Highlights
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Crafted for luxury, comfort & timeless living
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.07 }}
              className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transition"
            >
              {/* Glow hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* 🔥 Floating Stats (Premium Style) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { value: "15+", label: "Acres" },
            { value: "176", label: "Luxury Villas" },
            { value: "2000+", label: "Happy Families" },
            { value: "2.5M+", label: "Sq.ft Developed" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-xl text-center border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-green-400">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}