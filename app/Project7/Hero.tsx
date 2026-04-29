"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden"
    >
      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <img
          src="/aprhills1.jpg"
          className="w-full h-full object-cover scale-110"
          alt="Luxury Villa"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#020617]"></div>
      </div>

      {/* 🔥 Animated Glow */}
      <div className="absolute w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 max-w-6xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-300"
        >
          ✨ Premium Gated Community
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Experience Luxury Living
          <br />
          <span className="text-green-400">
            4BHK Triplex Villas
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Nestled in Bachupally with serene lake & hill views. Designed for
          modern families seeking comfort, elegance, and exclusivity.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {[
            "₹3.69 Cr Onwards",
            "15+ Acres",
            "176 Villas",
          ].map((item, i) => (
            <div
              key={i}
              className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:scale-105 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Book Site Visit
          </a>

          <a
  href="https://wa.me/919133633327"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl bg-gradient-to-r from-[#25D366] to-[#1ebe5d] text-white font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
>
  {/* Glow Effect */}
  <span className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#1ebe5d] opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></span>

  {/* Button Content */}
  <span className="relative z-10 flex items-center gap-2">
    {/* WhatsApp Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-5 h-5 fill-white"
    >
      <path d="M16 .4C7.3.4.3 7.4.3 16c0 2.8.7 5.5 2.1 7.9L.2 31.8l8.2-2.1c2.3 1.3 4.9 2 7.6 2 8.7 0 15.7-7 15.7-15.7S24.7.4 16 .4zm0 28.7c-2.4 0-4.7-.6-6.8-1.8l-.5-.3-4.9 1.3 1.3-4.8-.3-.5c-1.3-2.1-2-4.6-2-7.1 0-7.2 5.9-13.1 13.1-13.1S29.1 8.8 29.1 16 23.2 29.1 16 29.1zm7.3-9.8c-.4-.2-2.5-1.2-2.9-1.4-.4-.2-.6-.2-.9.2-.2.4-1 1.4-1.2 1.6-.2.2-.4.2-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.4 3.7 5.9 5.2.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 2.5-1 2.8-1.9.4-.9.4-1.7.3-1.9-.1-.2-.3-.3-.7-.5z"/>
    </svg>

    WhatsApp Now
  </span>
</a>
        </motion.div>

      </div>

      {/* 🔥 Floating Cards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute bottom-10 left-10 bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20"
      >
        🌿 45% Open Spaces
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute bottom-10 right-10 bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20"
      >
        🎬 Private Home Theatre
      </motion.div>
    </section>
  );
}