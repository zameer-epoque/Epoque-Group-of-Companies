// "use client"

// import { motion } from "framer-motion"
// import Lottie from "lottie-react"
// import { useEffect, useState } from "react"
// import Link from "next/link"

// export default function Hero() {
//   const [animationData, setAnimationData] = useState<object | null>(null)

//   useEffect(() => {
//     const loadAnimation = async () => {
//       try {
//         const res = await fetch("/lottie/mtmbackgroundeffect.json")
//         const data = await res.json()
//         setAnimationData(data)
//       } catch (error) {
//         console.error("Lottie load error:", error)
//       }
//     }

//     loadAnimation()
//   }, [])

//   return (
//     <section
//       className="relative flex items-center justify-center px-6 pt-24 overflow-hidden bg-black text-white"
//       aria-label="Époque Group – Real Estate, Digital Marketing, Interiors & Revenue Consulting in Hyderabad"
//     >
//       {/* Background Animation */}
//       {animationData && (
//         <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
//           <Lottie animationData={animationData} loop autoplay />
//         </div>
//       )}

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 z-10 bg-black/60" />

//       {/* Content */}
//       <div className="relative z-20 max-w-5xl text-center">

//         {/* SEO Optimized H1 */}
//         <motion.h1
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//           className="font-heading text-4xl md:text-5xl xl:text-5xl font-semibold leading-tight"
//         >
//           Real Estate, Digital Marketing & Strategic{" "}
//           <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
//             Business Growth Solutions
//           </span>{" "}
         
//         </motion.h1>

//         {/* Supporting Paragraph */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.4, delay: 0.3 }}
//           className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-300"
//         >
//          Époque Group delivers luxury villas, premium apartments, and gated community developments in Hyderabad, along with performance-driven digital marketing services, premium interior design execution, and revenue growth consulting frameworks engineered to scale modern enterprises and high-value property ventures.
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.6, delay: 0.6 }}
//           className="mt-14 flex flex-col sm:flex-row gap-6 justify-center"
//         >
//           <Link
//             href="/contact"
//             className="px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:scale-105 transition-all duration-300"
//           >
//             Contact Us
//           </Link>

//           <Link
//             href="/realty"
//             className="px-10 py-4 rounded-full font-semibold border border-white/30 hover:border-[#C79A3B] hover:text-[#C79A3B] transition-all duration-300"
//           >
//             Explore Our Divisions
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   )
// }



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
    <section
      className="relative flex items-center justify-center overflow-hidden bg-black px-6 pt-24 text-white"
      aria-label="Real Estate Marketing Agency, SEO Company & Lead Generation Services in Hyderabad"
    >
      {/* Background Animation */}
      {animationData && (
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Lottie animationData={animationData} loop autoplay />
        </div>
      )}

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#C79A3B]/20 blur-[140px]" />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl py-24 text-center">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md"
        >
          Hyderabad’s Premium Real Estate Marketing & SEO Agency
        </motion.div>

        {/* SEO Optimized Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="font-heading text-4xl font-semibold leading-[1.15] md:text-5xl xl:text-6xl"
        >
          Real Estate Marketing,{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            SEO & Lead Generation
          </span>{" "}
          Solutions for Modern Brands
        </motion.h1>

        {/* SEO Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3 }}
          className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          Époque Group is a luxury real estate marketing agency in Hyderabad
          delivering high-converting lead generation systems, SEO services,
          performance marketing campaigns, AI-powered automation, premium
          branding, interior execution, and strategic revenue consulting for
          builders, real estate developers, and high-growth businesses.
        </motion.p>

        {/* Keyword Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "Real Estate SEO",
            "Lead Generation",
            "Luxury Branding",
            "Property Marketing",
            "AI Marketing",
            "Performance Ads",
            "Revenue Growth",
            "Real Estate Funnels",
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
            href="/realty"
            className="rounded-full border border-white/20 px-10 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C79A3B] hover:bg-white/5 hover:text-[#C79A3B]"
          >
            Explore Real Estate Services
          </Link>
        </motion.div>

        {/* Bottom SEO Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1 }}
          className="mt-16 text-sm text-white md:text-base"
        >
          Trusted by real estate developers, luxury interior brands, and
          high-growth businesses across Hyderabad, Bangalore & Delhi.
        </motion.div>
      </div>
    </section>
  )
}