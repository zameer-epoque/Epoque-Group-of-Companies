"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        overflow-hidden
        bg-[#f8fbff]
      "
    >
      {/* PREMIUM LIGHT BACKGROUND */}
      <div className="absolute inset-0">

        {/* IMAGE */}
        <img
          src="/aprhills1.jpg"
          className="w-full h-full object-cover scale-110"
          alt="Luxury Villa"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#f8fbff]/85 to-[#f8fbff]" />

        {/* PREMIUM LIGHT GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,116,193,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(237,16,36,0.06),transparent_30%)]" />

        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.04]
            bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            inline-flex
            items-center
            gap-2
            mb-6
            px-5
            py-2.5
            rounded-full
            bg-white/80
            backdrop-blur-xl
            border
            border-[#dbeafe]
            text-sm
            text-[#1674c1]
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          "
        >
          ✨ Premium Gated Community
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl
            md:text-7xl
            font-black
            leading-tight
            tracking-tight
          "
        >
          <span className="text-[#0f172a]">
            Experience Luxury Living
          </span>

          <br />

          <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
            4BHK Triplex Villas
          </span>

          <br />

          <span className="text-[#334155] text-3xl md:text-5xl font-bold">
            In Bachupally Hyderabad
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="
            mt-7
            text-lg
            md:text-xl
            text-[#475569]
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Nestled in Bachupally with serene lake & hill views.
          Designed for modern families seeking comfort,
          elegance, and exclusivity.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          {[
            "₹3.69 Cr Onwards",
            "Ready To Move In October 2026",
            "90+ Villas Left",
          ].map((item, i) => (
            <div
              key={i}
              className="
                px-6
                py-4
                rounded-2xl
                bg-white/90
                backdrop-blur-xl
                border
                border-[#e2e8f0]
                text-[#0f172a]
                font-semibold
                shadow-[0_15px_40px_rgba(15,23,42,0.06)]
                hover:scale-105
                hover:border-[#1674c1]/30
                transition-all
                duration-300
              "
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >
          {/* PRIMARY BUTTON */}
          <a
            href="#contact"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              px-9
              py-4
              rounded-2xl
              font-semibold
              text-lg
              text-white
              overflow-hidden
              bg-gradient-to-r
              from-[#1674c1]
              to-[#ed1024]
              shadow-[0_15px_40px_rgba(22,116,193,0.20)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

            <span className="relative z-10">
              Book Site Visit
            </span>
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="https://wa.me/919133633327"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-3
              px-9
              py-4
              rounded-2xl
              bg-white/90
              border
              border-[#e2e8f0]
              text-[#0f172a]
              font-semibold
              text-lg
              backdrop-blur-xl
              overflow-hidden
              shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              transition-all
              duration-300
              hover:scale-105
              hover:border-[#1674c1]/30
            "
          >
            <span className="relative z-10">
              WhatsApp Now
            </span>
          </a>
        </motion.div>
      </div>

      {/* FLOATING CARD LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="
          hidden
          md:block
          absolute
          bottom-10
          left-10
          px-6
          py-4
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          border
          border-[#e2e8f0]
          text-[#0f172a]
          shadow-[0_15px_40px_rgba(15,23,42,0.06)]
        "
      >
        🌿 45% Open Spaces
      </motion.div>

      {/* FLOATING CARD RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="
          hidden
          md:block
          absolute
          bottom-10
          right-10
          px-6
          py-4
          rounded-2xl
          bg-white/90
          backdrop-blur-xl
          border
          border-[#e2e8f0]
          text-[#0f172a]
          shadow-[0_15px_40px_rgba(15,23,42,0.06)]
        "
      >
        🎬 Private Home Theatre
      </motion.div>
    </section>
  );
}