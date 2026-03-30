"use client";

import { motion } from "framer-motion";
import { CheckCircle, Home } from "lucide-react";

export default function WhyChooseSection() {
  return (
    <section className="relative py-20 px-6 bg-[#0F172A] text-white border-t border-[#D4AF37]/20 overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Why Choose Interior Designers in Hyderabad – Epoque Group
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Epoque Group is one of the best interior designers in Hyderabad,
            delivering luxury home interiors, villa interiors and modern office
            interiors with a focus on quality, functionality and aesthetics.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            We combine innovative design concepts, premium materials and
            structured execution to create interiors that enhance lifestyle,
            comfort and long-term value.
          </p>

          <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-10"></div>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-10 rounded-2xl bg-[#111827] border border-[#D4AF37]/40 shadow-xl">

              <h3 className="text-2xl font-semibold mb-6 text-[#D4AF37]">
                What Makes Our Interior Design Services Unique
              </h3>

              {[
                "Luxury home, villa and apartment interior expertise",
                "Customized designs based on lifestyle and space planning",
                "Premium materials and high-end finishing quality",
                "Vastu-compliant interior design solutions",
                "Complete turnkey interior execution in Hyderabad",
                "On-time delivery with transparent pricing",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 mb-4">
                  <CheckCircle className="text-[#D4AF37] mt-1" size={18} />
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-10 rounded-2xl bg-[#0B0F19] border border-[#D4AF37]/40 shadow-xl">

              <div className="flex items-center gap-3 mb-5">
                <Home className="text-[#D4AF37]" size={22} />
                <h3 className="text-2xl font-semibold">
                  Luxury Interiors for Modern Living
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                From premium villas in Jubilee Hills to modern apartments in
                Gachibowli and Kokapet, we create interiors that reflect
                elegance, comfort and functionality.
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Our interior design approach ensures optimal space utilization,
                modern aesthetics and long-lasting durability, making your home
                both stylish and practical.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}