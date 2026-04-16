"use client";

import { motion } from "framer-motion";

const services = [
  "Highrise Apartments",
  "Luxury Villas",
  "Commercial",
  "Open Plots",
];

export default function ServicesSection() {
  return (
    <section className="bg-[#a88463] py-24 px-6 md:px-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* LEFT TITLE */}
        <div>
          <h2 className="text-3xl md:text-5xl font-light text-black">
            Things we do
          </h2>
        </div>

        {/* RIGHT SERVICES */}
        <div className="space-y-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              {/* LINE */}
              <div className="border-t border-black/40 mb-4"></div>

              {/* TEXT */}
              <h3 className="text-2xl md:text-4xl font-light text-white group-hover:text-black transition duration-300">
                {item}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}