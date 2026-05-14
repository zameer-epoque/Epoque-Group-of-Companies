"use client";

import { motion } from "framer-motion";

export default function Highlights() {
  const highlights = [
    {
      title: "Private Home Theatre",
      desc: "Experience cinema in your own villa",
      icon: "🎬",
    },
    {
      title: "Premium Red Brick",
      desc: "Stronger, cooler & long-lasting construction",
      icon: "🧱",
    },
    {
      title: "45% Open Space",
      desc: "Green, breathable & peaceful environment",
      icon: "🌿",
    },
    {
      title: "40 Ft Wide Roads",
      desc: "Spacious internal road planning",
      icon: "🛣️",
    },
    {
      title: "Lake & Hill View",
      desc: "Serene views for a peaceful lifestyle",
      icon: "🏞️",
    },
    {
      title: "HMDA & RERA Approved",
      desc: "Safe & legally secure investment",
      icon: "📜",
    },
  ];

  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        py-28
        px-6
        bg-[#f8fbff]
      "
    >
      {/* PREMIUM LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,116,193,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(237,16,36,0.05),transparent_30%)]" />

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

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-[#dbeafe]
              bg-white/80
              backdrop-blur-xl
              text-[#1674c1]
              text-sm
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          >
            ✨ APR Premium Living
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2
            className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            <span className="text-[#0f172a]">
              Project
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              Highlights
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-[#475569]
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Crafted for luxury, elegance & timeless
            premium lifestyle experience.
          </p>
        </motion.div>

        {/* HIGHLIGHTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#e2e8f0]
                bg-white/90
                backdrop-blur-2xl
                p-8
                transition-all
                duration-500
                hover:border-[#1674c1]/30
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
              "
            >
              {/* HOVER EFFECT */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-br
                  from-[#1674c1]/5
                  via-transparent
                  to-[#ed1024]/5
                "
              />

              {/* ICON BOX */}
              <div
                className="
                  relative
                  z-10
                  w-20
                  h-20
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-4xl
                  bg-gradient-to-br
                  from-[#1674c1]/10
                  to-[#ed1024]/10
                  border
                  border-[#e2e8f0]
                "
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  mt-7
                  text-2xl
                  font-bold
                  text-[#0f172a]
                "
              >
                {item.title}
              </h3>

              {/* DESC */}
              <p
                className="
                  relative
                  z-10
                  mt-4
                  text-[#64748b]
                  leading-relaxed
                "
              >
                {item.desc}
              </p>

              {/* LINE */}
              <div
                className="
                  relative
                  z-10
                  mt-6
                  w-16
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#1674c1]
                  to-[#ed1024]
                "
              />
            </motion.div>
          ))}
        </div>

        {/* PREMIUM STATS */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-24
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-7
          "
        >
          {[
            { value: "15+", label: "Acres" },
            { value: "176", label: "Luxury Villas" },
            { value: "2000+", label: "Happy Families" },
            { value: "2.5M+", label: "Sq.ft Developed" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#e2e8f0]
                bg-white/90
                backdrop-blur-2xl
                p-8
                text-center
                transition-all
                duration-500
                hover:border-[#1674c1]/30
                hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]
              "
            >
              {/* HOVER */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#1674c1]/5
                  to-[#ed1024]/5
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              />

              {/* VALUE */}
              <h3
                className="
                  relative
                  z-10
                  text-5xl
                  font-black
                  bg-gradient-to-r
                  from-[#1674c1]
                  to-[#ed1024]
                  bg-clip-text
                  text-transparent
                "
              >
                {stat.value}
              </h3>

              {/* LABEL */}
              <p
                className="
                  relative
                  z-10
                  mt-3
                  text-[#64748b]
                  text-lg
                "
              >
                {stat.label}
              </p>

              {/* LINE */}
              <div
                className="
                  relative
                  z-10
                  mt-5
                  mx-auto
                  w-14
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#1674c1]
                  to-[#ed1024]
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}