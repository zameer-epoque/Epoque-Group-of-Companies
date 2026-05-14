"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const villas = [
    {
      title: "200 Sq Yards Villa",
      east: "3075 Sft",
      west: "3095 Sft",
      price: "₹3.69 Cr*",
    },
    {
      title: "222 Sq Yards Villa",
      east: "3400 Sft",
      west: "3400 Sft",
      price: "₹4.08 Cr*",
      popular: true,
    },
    {
      title: "267 Sq Yards Villa",
      east: "3820 Sft",
      west: "3865 Sft",
      price: "₹4.58 Cr*",
    },
  ];

  return (
    <section
      id="pricing"
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
            💎 Luxury Villa Pricing
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
              Villa Pricing
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              & Details
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
            Choose your perfect luxury villa crafted
            for premium modern lifestyle living.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-3 gap-8">

          {villas.map((villa, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                backdrop-blur-2xl
                p-8
                transition-all
                duration-500

                ${
                  villa.popular
                    ? `
                      border-[#1674c1]/20
                      bg-gradient-to-b
                      from-[#1674c1]/5
                      via-white
                      to-[#ed1024]/5
                      shadow-[0_25px_60px_rgba(22,116,193,0.10)]
                    `
                    : `
                      border-[#e2e8f0]
                      bg-white/90
                      shadow-[0_20px_50px_rgba(15,23,42,0.06)]
                    `
                }

                hover:border-[#1674c1]/30
                hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
              `}
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

              {/* POPULAR TAG */}
              {villa.popular && (
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-[#1674c1]
                    to-[#ed1024]
                    shadow-[0_10px_25px_rgba(22,116,193,0.20)]
                  "
                >
                  Most Popular
                </div>
              )}

              {/* LABEL */}
              <div
                className="
                  relative
                  z-10
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  border
                  border-[#e2e8f0]
                  bg-[#f8fbff]
                  text-sm
                  text-[#1674c1]
                "
              >
                APR Premium Villa
              </div>

              {/* TITLE */}
              <h3
                className="
                  relative
                  z-10
                  mt-7
                  text-3xl
                  font-bold
                  text-[#0f172a]
                "
              >
                {villa.title}
              </h3>

              {/* LINE */}
              <div
                className="
                  relative
                  z-10
                  mt-6
                  h-[1px]
                  w-full
                  bg-gradient-to-r
                  from-[#1674c1]
                  via-[#cbd5e1]
                  to-[#ed1024]
                "
              />

              {/* SIZES */}
              <div
                className="
                  relative
                  z-10
                  mt-7
                  space-y-4
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-[#e2e8f0]
                    bg-[#f8fbff]
                    px-5
                    py-4
                  "
                >
                  <span className="text-[#64748b]">
                    East Facing
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    {villa.east}
                  </span>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-[#e2e8f0]
                    bg-[#f8fbff]
                    px-5
                    py-4
                  "
                >
                  <span className="text-[#64748b]">
                    West Facing
                  </span>

                  <span className="font-semibold text-[#0f172a]">
                    {villa.west}
                  </span>
                </div>
              </div>

              {/* PRICE */}
              <div className="relative z-10 mt-8">
                <h4
                  className="
                    text-5xl
                    font-black
                    bg-gradient-to-r
                    from-[#1674c1]
                    to-[#ed1024]
                    bg-clip-text
                    text-transparent
                  "
                >
                  {villa.price}
                </h4>

                <p className="mt-3 text-[#64748b]">
                  ₹12,000 / sft
                </p>
              </div>

              {/* BUTTON */}
              <a
                href="#contact"
                className="
                  relative
                  z-10
                  group/button
                  overflow-hidden
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
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
                  hover:scale-[1.02]
                "
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover/button:opacity-100 transition"></span>

                <span className="relative z-10">
                  Book Site Visit
                </span>
              </a>

              {/* URGENCY */}
              <p
                className="
                  relative
                  z-10
                  mt-5
                  text-center
                  text-sm
                  text-[#ed1024]
                "
              >
                Limited Villas Available
              </p>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-20
            flex
            flex-wrap
            items-center
            justify-center
            gap-5
          "
        >
          {[
            "Possession By July 2026",
            "HMDA Approved",
            "RERA Approved",
            "Premium Luxury Community",
          ].map((item, i) => (
            <div
              key={i}
              className="
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white/90
                backdrop-blur-xl
                px-6
                py-4
                text-[#475569]
                shadow-[0_10px_30px_rgba(15,23,42,0.06)]
              "
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}