"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50+",
    title: "Brand Collaborations",
    color: "#C79A3B",
  },

  {
    icon: TrendingUp,
    number: "1200+",
    title: "Qualified Leads",
    color: "#D45B5B",
  },

  {
    icon: ShieldCheck,
    number: "95%",
    title: "Client Retention",
    color: "#7A2E63",
  },

  {
    icon: Sparkles,
    number: "24/7",
    title: "Strategic Support",
    color: "#C79A3B",
  },
];

export default function SEOIntro() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white"
      aria-label="SEO Company Hyderabad, Real Estate Marketing Agency India & AI Lead Generation"
    >
      {/* Premium Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-[950px] w-[950px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
              SEO • AI Lead Generation • Digital Marketing • Hyderabad
            </div>

            {/* Heading */}
            <h2 className="relative mt-8 text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
              Premium{" "}
              <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                Growth
              </span>{" "}
              & Conversion Ecosystem
            </h2>

            {/* Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mt-6 h-[4px] w-40 origin-left rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            />

            {/* SEO Content */}
            <p className="mt-10 text-lg md:text-xl leading-[2] text-gray-400">
              Époque Group is a premium digital marketing and real estate
              marketing agency in Hyderabad helping businesses across India
              scale with AI-powered lead generation, SEO services, branding,
              performance marketing, conversion-focused advertising, social
              media growth, and scalable revenue ecosystems designed for
              measurable business growth.
            </p>

            <p className="mt-8 text-lg md:text-xl leading-[2] text-gray-500">
              We engineer modern marketing systems that generate qualified
              leads, improve Google visibility, strengthen brand authority,
              and create long-term digital growth for startups, developers,
              luxury brands, and enterprises.
            </p>

            {/* SEO Hidden */}
            <div className="sr-only">
              SEO company Hyderabad, digital marketing agency India,
              real estate marketing company, AI-powered lead generation,
              luxury branding agency Hyderabad, Google ranking services,
              performance marketing, conversion optimization, organic SEO.
            </div>

          </motion.div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Border */}
                  <div className="rounded-[30px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

                    {/* Card */}
                    <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1d1d1d] p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_35px_rgba(199,154,59,0.15)]">

                      {/* Glow */}
                      <div
                        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                        style={{
                          background: `radial-gradient(circle at top left, ${item.color}15, transparent 60%)`,
                        }}
                      />

                      <div className="relative z-10">

                        {/* Icon */}
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                          style={{
                            color: item.color,
                          }}
                        >
                          <Icon size={30} />
                        </div>

                        {/* Number */}
                        <h3
                          className="mt-8 text-5xl font-bold"
                          style={{
                            color: item.color,
                          }}
                        >
                          {item.number}
                        </h3>

                        {/* Title */}
                        <p className="mt-4 text-lg font-medium leading-relaxed text-gray-300">
                          {item.title}
                        </p>

                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}