"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Villa Owner",
      text: "Amazing project with great location and premium quality construction. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      role: "Investor",
      text: "Best investment decision. High appreciation value and excellent amenities.",
    },
    {
      name: "Arjun Reddy",
      role: "Home Buyer",
      text: "Peaceful environment and top-class facilities. Perfect for family living.",
    },
  ];

  return (
    <section className="relative py-4 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-4">
          Trusted by homeowners & investors
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}   // ✅ FIX
            transition={{ delay: i * 0.1 }}
            className="group p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400/40 to-transparent"
          >
            <div className="bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full 
            group-hover:border-yellow-400/60 transition duration-300 relative">

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed">
                "{item.text}"
              </p>

              {/* User */}
              <div className="mt-5">
                <h4 className="text-yellow-400 font-semibold">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition bg-yellow-400 blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}