"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28 px-4 md:px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]" />
      <div className="absolute inset-0 bg-black/40" />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-56 md:w-72 h-56 md:h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-56 md:w-72 h-56 md:h-72 bg-white/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10 text-white">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Manage Your Property <br />
            <span className="text-white">
              From Anywhere
            </span>
          </h1>

          <p className="text-white/80 mb-6 text-sm md:text-base">
            We handle tenants, rent collection, maintenance & legal —
            so you enjoy stress-free income.
          </p>

          {/* FEATURES */}
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
                className="flex items-center justify-center md:justify-start gap-2 text-white/90 text-sm md:text-base"
              >
                <span>✔</span> {item}
              </motion.p>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white text-[#2F4A8A] px-6 py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base text-center"
            >
              Get Free Consultation
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/919133633327"
              target="_blank"
              className="bg-[#3BA64B] px-6 py-3 rounded-xl font-semibold shadow-lg text-sm md:text-base text-center"
            >
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="/about-property13.jpg"
              alt="Property"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -bottom-5 left-4 md:left-6 bg-white/90 backdrop-blur-lg p-3 md:p-4 rounded-xl shadow-lg text-gray-900"
          >
            <p className="text-xs md:text-sm text-gray-500">
              Trusted Clients
            </p>
            <h4 className="font-bold text-[#2F4A8A] text-lg md:text-xl">
              500+
            </h4>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}