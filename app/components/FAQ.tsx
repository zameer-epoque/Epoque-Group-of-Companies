"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What services does Époque Group provide in Hyderabad & India?",
    a: "Époque Group provides premium digital marketing, SEO services, AI-powered lead generation, branding, social media marketing, performance advertising, real estate marketing, web development, and business growth consulting solutions across Hyderabad and India.",
  },
  {
    q: "Do you specialize in real estate marketing?",
    a: "Yes. We specialize in luxury real estate marketing, qualified lead generation, buyer acquisition systems, builder branding, property campaign management, and conversion-focused marketing ecosystems for developers and real estate businesses.",
  },
  {
    q: "Why choose Époque Group over other marketing agencies?",
    a: "Époque Group combines premium branding, SEO expertise, AI-driven automation, performance marketing, creative storytelling, and revenue-focused digital systems to help businesses generate measurable growth and long-term authority.",
  },
  {
    q: "Do you provide SEO services for businesses in India?",
    a: "Yes. We provide advanced SEO services including local SEO, technical SEO, on-page optimization, keyword strategy, Google ranking improvements, content optimization, and long-term organic growth strategies for businesses across India.",
  },
  {
    q: "Can Époque Group help generate qualified business leads?",
    a: "Absolutely. Our AI-powered lead generation systems are designed to attract high-intent customers, improve conversion rates, and generate scalable business growth through strategic marketing funnels and performance campaigns.",
  },
  {
    q: "Do you provide branding and social media management?",
    a: "Yes. We provide luxury branding, social media strategy, content creation, creative campaigns, Instagram marketing, Facebook advertising, and complete brand positioning solutions for modern businesses and startups.",
  },
];

export default function FAQ() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white"
      aria-label="FAQ - SEO Services, Real Estate Marketing & Lead Generation Company in Hyderabad India"
    >
      {/* Premium Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[180px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            SEO • AI Lead Generation • Digital Growth • Hyderabad
          </div>

          <h2 className="relative mt-8 inline-block text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Questions
            </span>

            {/* Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            />
          </h2>

          <p className="mx-auto mt-10 max-w-4xl text-lg md:text-xl leading-relaxed text-gray-400">
            Explore answers about our SEO services, AI-powered lead generation,
            luxury branding, digital marketing, real estate marketing, and
            performance growth solutions designed for businesses across
            Hyderabad and India.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="space-y-7">

          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Border */}
              <div className="rounded-[30px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

                {/* Card */}
                <div className="relative overflow-hidden rounded-[30px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#181818] to-[#1d1d1d] p-8 md:p-10 transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(199,154,59,0.12)]">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.08),transparent_60%)]" />

                  <div className="relative z-10 flex items-start gap-5">

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                      <Plus className="text-[#C79A3B]" size={22} />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-semibold leading-snug text-white">
                        {faq.q}
                      </h3>

                      <p className="mt-5 text-base md:text-lg leading-[1.9] text-gray-400">
                        {faq.a}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom SEO */}
        <div className="sr-only">
          SEO company Hyderabad, digital marketing agency India,
          real estate lead generation, AI marketing systems,
          local SEO services, branding agency Hyderabad,
          performance marketing company India.
        </div>

      </div>
    </section>
  );
}