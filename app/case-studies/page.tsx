"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const caseStudies = [
  {
    title: "Luxury Real Estate Lead Generation",
    category: "Real Estate Marketing",
    image: "/projects/project1.jpg",
    results: "3.8X More Qualified Leads",
    description:
      "Generated high-intent property inquiries through SEO, landing pages, and performance marketing campaigns for a premium real estate developer.",
  },
  {
    title: "Premium Brand Website Transformation",
    category: "Luxury Branding",
    image: "/projects/project2.jpg",
    results: "65% Increase In Engagement",
    description:
      "Redesigned a high-end business website with conversion-focused UX, SEO architecture, and premium visual branding systems.",
  },
  {
    title: "SEO Growth For Interior Brand",
    category: "SEO & Organic Growth",
    image: "/projects/project3.jpg",
    results: "Top Google Rankings",
    description:
      "Improved organic visibility, local SEO rankings, and qualified traffic for a premium interior and architecture company.",
  },
]

export default function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#C79A3B]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            Success Stories & Results
          </span>

          <h2 className="mt-8 text-4xl font-semibold leading-tight md:text-5xl">
            Real Results Through{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              SEO, Branding & Lead Generation
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Explore how Époque Group helps real estate developers, luxury
            brands, and modern businesses generate leads, improve Google
            rankings, and scale digital growth through premium marketing
            systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#C79A3B]/40"
            >
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-flex rounded-full bg-[#C79A3B]/10 px-4 py-2 text-sm font-medium text-[#C79A3B]">
                  {item.results}
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-snug">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {item.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-[#C79A3B] transition-all duration-300 hover:gap-4"
                >
                  View Project
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl font-semibold md:text-4xl">
            Want Similar Results For Your Brand?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Let Époque Group build a premium SEO, branding, and lead generation
            system tailored for your business growth.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Book Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}