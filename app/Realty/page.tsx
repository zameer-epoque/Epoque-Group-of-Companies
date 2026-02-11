"use client"

import { motion } from "framer-motion"
import { Building2, Users, TrendingUp, BarChart3 } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

export default function EpoqueRealtySection(): JSX.Element {
  return (
    <section className="relative bg-black text-white overflow-hidden">

      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#C9A24D]/15 via-[#D16C6C]/15 to-[#7A2E5D]/20 blur-[140px]" />
      </div>

      {/* HERO */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="text-xs tracking-[0.4em] uppercase text-[#C9A24D]">
            Real Estate Collaboration Platform
          </span>

          <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-semibold mt-6 leading-tight">
            Époque{" "}
            <span className="bg-gradient-to-r from-[#C9A24D] via-[#D16C6C] to-[#7A2E5D] bg-clip-text text-transparent">
              Realty
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A structured channel partner ecosystem empowering builders,
            brokers, and investors with intelligence-driven distribution,
            pricing analytics, and high-performance sales enablement.
          </p>
        </motion.div>

      </div>

      {/* CORE GRID */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <Users size={24} />,
              title: "Channel Partner Network",
              desc: "Structured partner alignment, trust-driven collaboration, and transparent distribution systems."
            },
            {
              icon: <TrendingUp size={24} />,
              title: "Conversion Optimization",
              desc: "Lead scoring, buyer intelligence, and deal acceleration frameworks."
            },
            {
              icon: <Building2 size={24} />,
              title: "Builder Representation",
              desc: "Inventory positioning, pricing advisory, and market absorption strategies."
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Market Intelligence",
              desc: "Demand forecasting, pricing benchmarks, and analytics-backed insights."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
                group relative p-6 rounded-xl
                bg-white/5 border border-white/10
                hover:border-[#C9A24D]
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="text-[#C9A24D] mb-4">
                {item.icon}
              </div>

              <h3 className="text-base font-semibold mb-2 group-hover:text-[#C9A24D] transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C9A24D] to-[#D16C6C] group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* WHY SECTION */}
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-semibold mb-6">
              Why Époque Realty?
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              We don’t operate as traditional brokers. We architect structured
              distribution ecosystems that align channel partners, builders,
              and market intelligence into one seamless growth model.
            </p>

            <p className="text-gray-500 leading-relaxed">
              Our approach ensures faster absorption cycles, higher partner
              confidence, and optimized pricing strategies.
            </p>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { stat: "200+", label: "Channel Partners" },
              { stat: "₹500Cr+", label: "Transaction Value Enabled" },
              { stat: "50+", label: "Builder Alliances" },
              { stat: "98%", label: "Partner Satisfaction Index" }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  p-6 rounded-xl bg-white/5 border border-white/10
                  hover:border-[#C9A24D] transition duration-300
                "
              >
                <h3 className="text-2xl font-bold text-[#C9A24D]">
                  {item.stat}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* FINAL STATEMENT */}
      <div className="text-center py-16 border-t border-white/10">
        <p className="text-lg text-gray-400 italic">
          “We don’t just distribute inventory — we engineer structured real estate growth.”
        </p>
      </div>

    </section>
  )
}
