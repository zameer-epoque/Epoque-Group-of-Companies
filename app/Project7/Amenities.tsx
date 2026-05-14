"use client";

import { motion } from "framer-motion";

export default function Amenities() {
  const amenities = [
    { title: "Swimming Pool", icon: "🏊‍♂️" },
    { title: "25,000 Sft Clubhouse", icon: "🏢" },
    { title: "Gym & Fitness Zone", icon: "💪" },
    { title: "Spa & Salon", icon: "💆‍♀️" },
    { title: "Tennis Court", icon: "🎾" },
    { title: "Basketball Court", icon: "🏀" },
    { title: "Jogging Track", icon: "🏃‍♂️" },
    { title: "Children Play Area", icon: "🛝" },
    { title: "Party Lawn", icon: "🎉" },
    { title: "Senior Citizen Park", icon: "🌳" },
    { title: "24/7 Security", icon: "🛡️" },
    { title: "Landscaped Gardens", icon: "🌿" },
  ];

  return (
    <section
      id="amenities"
      className="
        relative
        overflow-hidden
        py-28
        px-6
        bg-[#f8fbff]
      "
    >
      {/* PREMIUM LIGHT GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,116,193,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(237,16,36,0.06),transparent_30%)]" />

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

        {/* TOP TAG */}
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
            ✨ Premium Lifestyle Amenities
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
              World-Class
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>

          <p
            className="
              text-[#475569]
              mt-6
              text-lg
              md:text-xl
              max-w-2xl
              mx-auto
              leading-relaxed
            "
          >
            Experience luxury, comfort & premium lifestyle
            designed for elite modern living.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
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

              {/* ICON */}
              <div
                className="
                  relative
                  z-10
                  w-20
                  h-20
                  mx-auto
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
                  mt-6
                  text-xl
                  font-semibold
                  text-[#0f172a]
                "
              >
                {item.title}
              </h3>

              {/* LINE */}
              <div
                className="
                  relative
                  z-10
                  mt-4
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
        </div>

        {/* PREMIUM BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            mt-24
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#e2e8f0]
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          {/* IMAGE */}
          <img
            src="/aprhills4.jpg"
            className="
              w-full
              h-[420px]
              object-cover
            "
            alt="Amenities"
          />

          {/* OVERLAY */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#020617]/80
              via-[#020617]/50
              to-black/20
            "
          />

          {/* CONTENT */}
          <div
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-6
            "
          >
            <div
              className="
                px-5
                py-2
                rounded-full
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                text-white
                text-sm
                mb-6
              "
            >
              🌿 Nature Inspired Community
            </div>

            <h3
              className="
                text-4xl
                md:text-6xl
                font-black
                leading-tight
                max-w-4xl
              "
            >
              <span className="text-white">
                45% Open Space
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#93c5fd] to-[#60a5fa] bg-clip-text text-transparent">
                With Luxury Nature Living
              </span>
            </h3>

            <p
              className="
                mt-6
                text-[#e2e8f0]
                max-w-2xl
                text-lg
                leading-relaxed
              "
            >
              Surrounded by lake views, greenery &
              peaceful atmosphere crafted for modern luxury families.
            </p>

            {/* BUTTON */}
            <a
              href="#contact"
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                overflow-hidden
                px-9
                py-4
                rounded-2xl
                font-semibold
                text-lg
                text-white
                bg-gradient-to-r
                from-[#1674c1]
                to-[#ed1024]
                shadow-[0_15px_40px_rgba(22,116,193,0.25)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Schedule Site Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}