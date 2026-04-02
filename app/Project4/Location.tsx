"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Location() {
  const points = [
    "8 mins to Airport",
    "5 mins from Tukkuguda Exit",
    "Near IT hubs & Fab City",
    "Close to schools & hospitals",
  ];

  return (
    <section
      id="location"
      className="relative py-4 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Location Advantages
        </h2>
        <p className="text-gray-400 mt-3">
          Strategically located for convenience & future growth
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

        {/* Points */}
        <div className="space-y-5">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}   // ✅ FIX
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10 hover:border-yellow-400/60 transition"
            >
              <MapPin className="text-yellow-400" size={20} />
              <p className="text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}   // ✅ FIX
          className="rounded-2xl overflow-hidden border border-white/10"
        >
          <iframe
            src="https://maps.google.com/maps?q=tukkuguda%20hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] md:h-full"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}