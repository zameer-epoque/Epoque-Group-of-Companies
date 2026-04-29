"use client";

import { motion } from "framer-motion";

export default function Amenities() {
  const amenities = [
    { title: "Swimming Pool", icon: "🏊‍♂️" },
    { title: "25,000 Sft Clubhouse", icon: "🏢" },
    { title: "Gym & Fitness Zone", icon: "💪" },
    { title: "Spa & Salon", icon: "💆‍♀️" },
    { title: "Tennis Court", icon: "🎾" },
    { title: "Basketball Court", icon: "🏀" },
    { title: "Jogging Track", icon: "🏃‍♂️" },
    { title: "Children Play Area", icon: "🛝" },
    { title: "Party Lawn", icon: "🎉" },
    { title: "Senior Citizen Park", icon: "🌳" },
    { title: "24/7 Security", icon: "🛡️" },
    { title: "Landscaped Gardens", icon: "🌿" },
  ];

  return (
    <section
      id="amenities"
      className="py-24 px-6 bg-[#020617] relative overflow-hidden"
    >
      {/* Glow Background */}
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
            World-Class Amenities
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Experience luxury, comfort & lifestyle like never before
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08 }}
              className="group relative bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center transition"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition"></div>

              <div className="relative z-10">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Premium Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 rounded-3xl overflow-hidden relative"
        >
          <img
            src="/aprhills4.jpg"
            className="w-full h-[350px] object-cover"
            alt="Amenities"
          />

          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              45% Open Space with Nature 🌿
            </h3>
            <p className="mt-3 text-gray-300 max-w-xl">
              Surrounded by lake views, greenery & peaceful lifestyle designed for modern families
            </p>

            <a
              href="#contact"
              className="mt-6 bg-gradient-to-r from-green-500 to-blue-500 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Schedule Site Visit
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}