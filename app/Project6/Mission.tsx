"use client";

import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="relative py-4 px-6 overflow-hidden" id="mission">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 GLOW EFFECT */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10 text-white">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 text-lg leading-relaxed mb-12"
        >
          Our mission is to make property ownership completely stress-free for
          our clients by providing reliable, transparent, and professional
          property management services. We aim to help property owners —
          especially NRIs — manage their assets from anywhere in the world
          with confidence and peace of mind.
        </motion.p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Transparency",
              desc: "Clear communication and honest updates at every step.",
              icon: "🔍",
            },
            {
              title: "Reliability",
              desc: "Trusted services you can depend on anytime.",
              icon: "✅",
            },
            {
              title: "Customer Focus",
              desc: "Your satisfaction and peace of mind are our priority.",
              icon: "❤️",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg"
            >
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="font-semibold text-lg mb-2 text-white">
                {item.title}
              </h3>

              <p className="text-white/80 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
      
    </section>
  );
}