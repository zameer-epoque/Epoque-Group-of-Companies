"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-6">

      {/* 🔵 BACKGROUND GRADIENT GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F4A8A]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3BA64B]/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* 📝 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Manage Your Property <br />
            <span className="text-[#2F4A8A]">
              From Anywhere
            </span>
          </h1>

          <p className="text-gray-600 mb-6">
            We handle tenants, rent collection, maintenance & legal —
            so you enjoy stress-free income.
          </p>

          {/* ✅ FEATURES */}
          <div className="space-y-2 mb-6">
            {[
              "Tenant Management",
              "Rent Collection",
              "Maintenance",
              "Legal Support",
            ].map((item, i) => (
              <motion.p
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="text-[#3BA64B]">✔</span> {item}
              </motion.p>
            ))}
          </div>

          {/* 🔥 CTA BUTTONS */}
          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#2F4A8A] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              Get Free Consultation
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-[#3BA64B] text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* 🟡 RIGHT IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500">
            <img
              src="/hero-property.jpg"
              alt="Property"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 🟢 FLOATING BADGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg"
          >
            <p className="text-sm text-gray-500">Trusted Clients</p>
            <h4 className="font-bold text-[#2F4A8A]">500+</h4>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}