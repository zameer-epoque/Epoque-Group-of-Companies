"use client";

import { motion } from "framer-motion";
import { CheckCircle, Crown } from "lucide-react";

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
            Why Choose Luxury Interior Designers in Hyderabad – Epoque Group
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            Epoque Group is one of the leading luxury interior designers in Hyderabad,
            specializing in premium villa interiors, penthouses and high-end residential spaces.
            We deliver bespoke design solutions that reflect elegance, exclusivity and
            modern lifestyle requirements.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Our expertise combines architectural planning, luxury materials and precision
            craftsmanship to create interiors that enhance comfort, functionality and long-term value.
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
                What Makes Our Luxury Interiors Unique
              </h3>

              {[
                "Bespoke luxury design concepts for villas and penthouses",
                "Premium imported materials and high-end finishes",
                "Customized furniture, lighting and décor solutions",
                "Vastu-compliant interior planning with modern aesthetics",
                "Complete turnkey luxury interior execution in Hyderabad",
                "On-time delivery with transparent pricing structure",
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
                <Crown className="text-[#D4AF37]" size={22} />
                <h3 className="text-2xl font-semibold">
                  Designed for Premium Living
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed">
                From luxury villas in Jubilee Hills to premium residences in
                Gachibowli, Kokapet and Financial District, we create interiors
                that reflect sophistication, comfort and timeless elegance.
              </p>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Our designs focus on optimal space utilization, modern aesthetics
                and long-term durability, ensuring your home remains elegant and
                functional for years.
              </p>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}