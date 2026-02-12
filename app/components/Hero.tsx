"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [animationData, setAnimationData] = useState<object | null>(null)

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const res = await fetch("/lottie/mtmbackgroundeffect.json")
        const data = await res.json()
        setAnimationData(data)
      } catch (error) {
        console.error("Lottie load error:", error)
      }
    }

    loadAnimation()
  }, [])

  return (
    <section
      className="
        relative  flex items-center justify-center
        px-6 pt-24 overflow-hidden
        bg-black text-white
      "
      aria-label="Hero Section"
    >
      {/* ✅ LOTTIE BACKGROUND FIXED */}
      {animationData && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Lottie
            animationData={animationData}
            loop
            autoplay
          />
        </div>
      )}

      {/* ✅ Overlay FIXED */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* ✅ Content Layer */}
      <div className="relative z-20 max-w-5xl text-center">

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-12"
        >
          {/* <Image
            src="/logo.png"
            alt="Company logo"
            width={220}
            height={220}
            priority
          /> */}
        </motion.div>

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

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300"
        >
          Transforming visions into reality through innovation, design,
          and strategic excellence.
        </motion.p>

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
            href="/realty"
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
