"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center
        px-6 pt-28 overflow-hidden
        bg-black text-white
      "
      aria-label="Époque Group Hero Section"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="
            absolute top-1/3 left-1/2 -translate-x-1/2
            w-[800px] h-[800px]
            bg-gradient-to-r
            from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20
            blur-[180px]
            animate-pulse
          "
        />
      </div>

      <div className="max-w-5xl text-center">

        {/* LOGO FLOAT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo.png"
              alt="Époque Group of Companies logo"
              width={220}
              height={220}
              priority
            />
          </motion.div>
        </motion.div>

        {/* HEADING REVEAL */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            font-heading text-4xl md:text-6xl xl:text-7xl
            font-semibold leading-tight
          "
        >
          Bridging{" "}
          <span
            className="
              bg-gradient-to-r
              from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              bg-clip-text text-transparent
            "
          >
            Creativity, Commerce & Culture
          </span>
        </motion.h1>

        {/* SUPPORT TEXT FADE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="
            mt-8 max-w-3xl mx-auto
            text-lg md:text-xl leading-relaxed
            text-gray-300
          "
        >
          Transforming visions into reality through innovation, design, and
          strategic excellence across luxury real estate, interiors, digital
          experiences, and revenue architecture.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          {/* Primary Button */}
          <a
            href="/contact"
            className="
              relative px-10 py-4 rounded-full font-semibold
              text-black
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              hover:scale-105 transition-all duration-300
              shadow-lg hover:shadow-[0_0_40px_rgba(199,154,59,0.6)]
            "
          >
            Start a Conversation
          </a>

          {/* Secondary Button */}
          <a
            href="/Realty"
            className="
              relative px-10 py-4 rounded-full font-semibold
              border border-white/30
              hover:border-[#C79A3B]
              hover:text-[#C79A3B]
              transition-all duration-300
              hover:scale-105
            "
          >
            Explore Our Divisions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
