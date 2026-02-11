"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    fetch("/lottie/mtmbackgroundeffect.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
  }, [])

  return (
    <section
      className="
        relative min-h-screen flex items-center justify-center
        px-6 pt-28 overflow-hidden
        bg-black text-white
      "
      aria-label="Époque Group Hero Section"
    >
      {/* LOTTIE BACKGROUND */}
      {animationData && (
        <div className="absolute inset-0 -z-20 opacity-25 pointer-events-none">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="max-w-5xl text-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-12"
        >
          <Image
            src="/logo.png"
            alt="Époque Group of Companies logo"
            width={220}
            height={220}
            priority
          />
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="font-heading text-4xl md:text-6xl xl:text-7xl font-semibold leading-tight"
        >
          Bridging{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Creativity, Commerce & Culture
          </span>
        </motion.h1>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300"
        >
          Transforming visions into reality through innovation, design,
          and strategic excellence.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="/contact"
            className="
              px-10 py-4 rounded-full font-semibold text-black
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              hover:scale-105 transition-all duration-300
            "
          >
            Start a Conversation
          </a>

          <a
            href="/Realty"
            className="
              px-10 py-4 rounded-full font-semibold
              border border-white/30
              hover:border-[#C79A3B]
              hover:text-[#C79A3B]
              transition-all duration-300
            "
          >
            Explore Our Divisions
          </a>
        </motion.div>
      </div>
    </section>
  )
}
