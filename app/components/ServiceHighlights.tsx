"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Building2,
  Palette,
  Users,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc:
      "AI-powered digital marketing campaigns designed to improve visibility, increase engagement, and generate scalable business growth across Hyderabad and India.",
    color: "#C79A3B",
  },

  {
    icon: Search,
    title: "SEO Optimization",
    desc:
      "Advanced SEO services focused on Google rankings, organic traffic growth, local SEO, technical optimization, and long-term search visibility.",
    color: "#D45B5B",
  },

  {
    icon: Building2,
    title: "Real Estate Marketing",
    desc:
      "Luxury real estate lead generation systems, buyer acquisition funnels, builder branding, and performance campaigns engineered for conversions.",
    color: "#7A2E63",
  },

  {
    icon: Palette,
    title: "Interior Branding",
    desc:
      "Premium branding, visual storytelling, creative identity systems, and luxury marketing solutions for interior and lifestyle businesses.",
    color: "#C79A3B",
  },

  {
    icon: Users,
    title: "Lead Generation",
    desc:
      "High-intent lead generation systems powered by automation, conversion strategies, funnel optimization, and AI-driven customer targeting.",
    color: "#D45B5B",
  },

  {
    icon: BarChart3,
    title: "Growth Strategy",
    desc:
      "Performance-focused growth consulting, analytics, conversion optimization, and scalable digital ecosystems for modern businesses.",
    color: "#7A2E63",
  },
];

export default function ServiceHighlights() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white"
      aria-label="SEO Services, Digital Marketing & Real Estate Marketing Agency Hyderabad"
    >
      {/* Premium Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-[950px] w-[950px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            SEO • Digital Marketing • AI Lead Generation • Hyderabad
          </div>

          {/* Heading */}
          <h2 className="relative mt-8 inline-block text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            Services{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              We Provide
            </span>

            {/* Gradient Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            />
          </h2>

          {/* SEO Content */}
          <p className="mx-auto mt-10 max-w-4xl text-lg md:text-xl leading-[2] text-gray-400">
            Époque Group provides premium SEO services, AI-powered lead
            generation, real estate marketing, branding, social media
            management, digital advertising, and performance-driven growth
            solutions for businesses across Hyderabad and India.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

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
                <div className="rounded-[32px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1d1d1d] p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.15)]">

                    {/* Hover Glow */}
                    <div
                      className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at top left, ${service.color}15, transparent 60%)`,
                      }}
                    />

                    {/* Blur Circle */}
                    <div
                      className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl"
                      style={{
                        background: service.color,
                      }}
                    />

                    <div className="relative z-10">

                      {/* Icon */}
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                        style={{
                          color: service.color,
                        }}
                      >
                        <Icon size={30} />
                      </div>

                      {/* Title */}
                      <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">
                        {service.title}
                      </h3>

                      {/* Line */}
                      <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] transition-all duration-500 group-hover:w-24" />

                      {/* Description */}
                      <p className="mt-6 text-base md:text-lg leading-[1.95] text-gray-400">
                        {service.desc}
                      </p>

                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Hidden SEO */}
        <div className="sr-only">
          SEO company Hyderabad, digital marketing agency India,
          real estate marketing company, lead generation services,
          luxury branding agency Hyderabad, performance marketing,
          Google ranking optimization, AI-powered marketing systems.
        </div>

      </div>
    </section>
  );
}