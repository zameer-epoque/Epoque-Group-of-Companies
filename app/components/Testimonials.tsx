"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Real Estate Developer",
    review:
      "Époque Group transformed our digital presence with high-converting real estate marketing campaigns, SEO growth strategies, and premium lead generation systems that consistently delivered quality enquiries.",
    color: "#C79A3B",
  },

  {
    name: "Sneha Reddy",
    role: "Interior Brand Owner",
    review:
      "The branding, social media marketing, and creative positioning strategies helped our business achieve premium market visibility and significantly improve customer engagement across digital platforms.",
    color: "#D45B5B",
  },

  {
    name: "Arjun Mehta",
    role: "Startup Founder",
    review:
      "Professional execution, AI-powered marketing systems, and performance-focused lead generation campaigns helped our startup scale faster with measurable business growth and stronger brand authority.",
    color: "#7A2E63",
  },
];

export default function Testimonials() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] py-24 text-white"
      aria-label="Client Testimonials - SEO Company Hyderabad & Digital Marketing Agency India"
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
        

          {/* Heading */}
          <h2 className="relative mt-8 inline-block text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            What Clients{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Say
            </span>

            {/* Gradient Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            /> 
          </h2> <br/>
  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            Client Reviews • SEO • Digital Marketing • Hyderabad
          </div>
          {/* SEO Content */}
          <p className="mx-auto mt-10 max-w-4xl text-lg md:text-xl leading-[2] text-gray-400">
            Businesses across Hyderabad and India trust Époque Group for
            premium SEO services, digital marketing, AI-powered lead generation,
            branding, real estate marketing, and scalable business growth
            solutions engineered for measurable results.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
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
                      background: `radial-gradient(circle at top left, ${item.color}15, transparent 60%)`,
                    }}
                  />

                  {/* Blur Circle */}
                  <div
                    className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl"
                    style={{
                      background: item.color,
                    }}
                  />

                  <div className="relative z-10">

                    {/* Quote */}
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                      style={{
                        color: item.color,
                      }}
                    >
                      <Quote size={28} />
                    </div>

                    {/* Stars */}
                    <div className="mt-8 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill={item.color}
                          color={item.color}
                        />
                      ))}
                    </div>

                    {/* Review */}
                    <p className="mt-6 text-base md:text-lg leading-[2] text-gray-400">
                      “{item.review}”
                    </p>

                    {/* User */}
                    <div className="mt-10">

                      <h3 className="text-2xl font-semibold text-white">
                        {item.name}
                      </h3>

                      <p
                        className="mt-2 text-base font-medium"
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.role}
                      </p>

                    </div>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Hidden SEO */}
        <div className="sr-only">
          SEO company Hyderabad, digital marketing agency India,
          real estate marketing company, AI-powered lead generation,
          branding services Hyderabad, business growth consulting,
          performance marketing agency India.
        </div>

      </div>
    </section>
  );
}