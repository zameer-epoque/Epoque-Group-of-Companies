"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"
import { useEffect, useState } from "react"
import Link from "next/link"

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
    <>
      <section
        className="relative flex items-center justify-center overflow-hidden bg-black px-6 pt-12 text-white"
        aria-label="Real Estate Marketing Agency in Hyderabad for SEO, Lead Generation & Luxury Branding"
      >
        {/* Background Animation */}
        {animationData && (
          <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
            <Lottie animationData={animationData} loop autoplay />
          </div>
        )}

        {/* Gradient Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C79A3B]/20 blur-[140px]" />

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-black/75" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-6xl py-24 text-center md:py-32">

          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md"
          >
            Hyderabad’s Premium Real Estate Marketing & SEO Agency
          </motion.div>

          {/* SEO Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="font-heading text-4xl font-semibold leading-[1.1] md:text-5xl xl:text-6xl"
          >
            Real Estate Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Hyderabad
            </span>{" "}
            for Lead Generation & Luxury Branding
          </motion.h1>

          {/* SEO Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Époque Group is a premium real estate marketing agency in
            Hyderabad helping builders, developers, luxury brands, and
            high-growth businesses generate qualified leads through
            high-performance websites, SEO, branding, Google Ads, AI
            automation, and conversion-focused digital marketing systems.
          </motion.p>

          {/* SEO Keyword Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {[
              "Real Estate Marketing",
              "Lead Generation",
              "Luxury Branding",
              "Property Marketing",
              "SEO Agency Hyderabad",
              "Google Ads",
              "AI Automation",
              "Performance Marketing",
            ].map((item, i) => (
              <span
                key={i}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-200 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.7 }}
            className="mt-14 flex flex-col justify-center gap-6 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">
                Get Free Strategy Consultation
              </span>
            </Link>

            <Link
              href="/case-studies"
              className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C79A3B] hover:bg-white/5 hover:text-[#C79A3B]"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Trust Points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 1 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 md:text-base"
          >
            <span>✔ SEO Optimized Websites</span>
            <span>✔ Real Estate Marketing Experts</span>
            <span>✔ Lead Generation Systems</span>
            <span>✔ Luxury Branding Solutions</span>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="mt-16 text-sm text-gray-300 md:text-base"
          >
            Trusted by real estate developers, luxury interior brands, and
          high-growth businesses across Hyderabad, Bangalore & Delhi.
          </motion.div>
        </div>
      </section>

   
     
    </>
  )
}