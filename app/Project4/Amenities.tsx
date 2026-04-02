"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Amenities() {
  const items = [
    { title: "Swimming Pool", desc: "Luxury clubhouse pool for relaxation & leisure", icon: "🏊" },
    { title: "Clubhouse", desc: "Premium indoor space for community & events", icon: "🏛️" },
    { title: "Children Play Area", desc: "Safe & fun environment for kids", icon: "🛝" },
    { title: "Landscaped Gardens", desc: "Green spaces for peaceful living", icon: "🌿" },
    { title: "24/7 Security", desc: "Gated security with surveillance systems", icon: "🔒" },
    { title: "Gated Community", desc: "Privacy-focused premium layout", icon: "🏘️" },
    { title: "Wide Internal Roads", desc: "Smooth connectivity inside the community", icon: "🛣️" },
    { title: "Street Lighting", desc: "Well-lit roads for safety & aesthetics", icon: "💡" },
    { title: "Peaceful Environment", desc: "Away from city noise, ideal for families", icon: "🌅" },
  ];

  return (
    <section
      id="amenities"
      className="relative py-4 px-4 md:px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          World-Class Amenities
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Enjoy a premium lifestyle with thoughtfully designed amenities
          that offer comfort, security, and relaxation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 max-w-6xl mx-auto relative z-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-yellow-400/40 to-transparent"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-5 md:p-6 h-full 
            border border-white/10 group-hover:border-yellow-400/60 transition duration-300">

              {/* ICON */}
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.2 }}
                className="text-3xl mb-4"
              >
                {item.icon}
              </motion.div>

              {/* TITLE */}
              <h3 className="text-base md:text-lg font-semibold group-hover:text-yellow-400 transition">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-200 transition">
                {item.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition bg-yellow-400 blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA STRIP */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 max-w-5xl mx-auto rounded-2xl p-[1px] bg-gradient-to-r from-yellow-400 to-yellow-200"
      >
        <div className="bg-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>
            <h3 className="text-xl md:text-3xl font-bold flex items-center gap-2">
              <Sparkles className="text-yellow-400" />
              Experience Premium Lifestyle Living
            </h3>
            <p className="text-gray-400 mt-2">
              Book your villa today before prices increase
            </p>
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-300 
            text-black px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Schedule Visit

            {/* Shine Effect */}
            <span className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-20 blur-md"></span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}