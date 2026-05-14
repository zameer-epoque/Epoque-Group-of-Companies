"use client";

import { motion } from "framer-motion";

export default function Specifications() {
  const specs = [
    {
      title: "Structure",
      desc: "RCC framed structure with M20 grade concrete and TMT steel.",
      icon: "🏗️",
    },
    {
      title: "Super Structure",
      desc: "Clay red bricks for durability and thermal efficiency.",
      icon: "🧱",
    },
    {
      title: "Plastering",
      desc: "Double coat plastering with smooth premium finish.",
      icon: "🪵",
    },
    {
      title: "Painting",
      desc: "Exterior texture & interior premium emulsion paints.",
      icon: "🎨",
    },
    {
      title: "Kitchen / Utility",
      desc: "Provision for purifier, exhaust & water connections.",
      icon: "🍳",
    },
    {
      title: "Wood Work",
      desc: "Imported teak wood frames with PU polished finish.",
      icon: "🚪",
    },
    {
      title: "Windows / Doors",
      desc: "UPVC sliding windows with mosquito mesh.",
      icon: "🪟",
    },
    {
      title: "Power Backup",
      desc: "100% backup for common areas with auto generator.",
      icon: "⚡",
    },
    {
      title: "Electrical",
      desc: "Concealed wiring with modular switches & AC provisions.",
      icon: "🔌",
    },
    {
      title: "TV & Internet",
      desc: "Provision for TV, internet & telephone in all floors.",
      icon: "📡",
    },
    {
      title: "Water Supply",
      desc: "Hydro pneumatic system with overhead tank.",
      icon: "💧",
    },
    {
      title: "Bathroom",
      desc: "Premium CP fittings, showers & sanitary ware.",
      icon: "🚿",
    },
  ];

  return (
    <section
      id="specs"
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
            🏡 Luxury Construction Standards
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
              Premium
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              Specifications
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              text-[#475569]
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Built with world-class materials,
            elegant finishes & premium quality standards.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {specs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
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
                rounded-[30px]
                border
                border-[#e2e8f0]
                bg-white/90
                backdrop-blur-2xl
                p-7
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

              {/* CONTENT */}
              <div className="relative z-10 flex gap-5 items-start">

                {/* ICON */}
                <div
                  className="
                    flex-shrink-0
                    w-16
                    h-16
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    text-3xl
                    bg-gradient-to-br
                    from-[#1674c1]/10
                    to-[#ed1024]/10
                    border
                    border-[#e2e8f0]
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-[#0f172a]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[#64748b]
                      leading-relaxed
                    "
                  >
                    {item.desc}
                  </p>

                  {/* LINE */}
                  <div
                    className="
                      mt-5
                      w-14
                      h-[3px]
                      rounded-full
                      bg-gradient-to-r
                      from-[#1674c1]
                      to-[#ed1024]
                    "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-24
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-[#e2e8f0]
            bg-white/90
            backdrop-blur-2xl
            p-10
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          {/* LIGHT GLOW */}
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#1674c1]/5 blur-[100px]" />

          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#ed1024]/5 blur-[100px]" />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              gap-8
            "
          >
            {/* TEXT */}
            <div>
              <h3
                className="
                  text-3xl
                  md:text-4xl
                  font-black
                  leading-tight
                "
              >
                <span className="text-[#0f172a]">
                  Crafted With
                </span>

                <br />

                <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
                  Luxury & Precision
                </span>
              </h3>

              <p
                className="
                  mt-4
                  max-w-2xl
                  text-[#64748b]
                  leading-relaxed
                "
              >
                Every villa is designed with premium
                specifications, superior craftsmanship
                and long-lasting quality standards.
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="#contact"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                rounded-2xl
                px-9
                py-4
                text-lg
                font-semibold
                text-white
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
                Download Specifications
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}