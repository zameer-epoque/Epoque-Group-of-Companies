"use client";

import { motion } from "framer-motion";

export default function Specifications() {
  const specs = [
    {
      title: "Structure",
      desc: "RCC framed structure with M20 grade concrete and TMT steel.",
      icon: "🏗️",
    },
    {
      title: "Super Structure",
      desc: "Clay red bricks for durability and thermal efficiency.",
      icon: "🧱",
    },
    {
      title: "Plastering",
      desc: "Double coat plastering with smooth premium finish.",
      icon: "🪵",
    },
    {
      title: "Painting",
      desc: "Exterior texture & interior premium emulsion paints.",
      icon: "🎨",
    },
    {
      title: "Kitchen / Utility",
      desc: "Provision for purifier, exhaust & water connections.",
      icon: "🍳",
    },
    {
      title: "Wood Work",
      desc: "Imported teak wood frames with PU polished finish.",
      icon: "🚪",
    },
    {
      title: "Windows / Doors",
      desc: "UPVC sliding windows with mosquito mesh.",
      icon: "🪟",
    },
    {
      title: "Power Backup",
      desc: "100% backup for common areas with auto generator.",
      icon: "⚡",
    },
    {
      title: "Electrical",
      desc: "Concealed wiring with modular switches & AC provisions.",
      icon: "🔌",
    },
    {
      title: "TV & Internet",
      desc: "Provision for TV, internet & telephone in all floors.",
      icon: "📡",
    },
    {
      title: "Water Supply",
      desc: "Hydro pneumatic system with overhead tank.",
      icon: "💧",
    },
    {
      title: "Bathroom",
      desc: "Premium CP fittings, showers & sanitary ware.",
      icon: "🚿",
    },
  ];

  return (
    <section
      id="specs"
      className="relative py-24 px-6 bg-[#020617] text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Premium Specifications
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Built with quality, precision & attention to detail
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {specs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 relative transition"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>

              <div className="relative z-10 flex gap-4 items-start">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-xl">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.desc}
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