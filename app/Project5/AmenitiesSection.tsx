"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Building2,
  ShieldCheck,
  ShoppingCart,
  Trees,
  Baby,
  ParkingCircle,
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Dumbbell, title: "Modern Gym" },
  { icon: Building2, title: "Club House" },
  { icon: ShieldCheck, title: "24/7 Security" },
  { icon: ShoppingCart, title: "Super Market" },
  { icon: Trees, title: "Terrace Garden" },
  { icon: Baby, title: "Kids Play Area" },
  { icon: ParkingCircle, title: "Reserved Parking" },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            Amenities & <span className="text-[#0f766e]">Features</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need, right below your home
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-2xl border bg-[#f9fafb] hover:bg-[#0f766e] transition duration-300 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">

                  {/* ICON */}
                  <div className="p-4 rounded-full bg-[#0f766e]/10 group-hover:bg-white/20 transition">
                    <Icon
                      size={32}
                      className="text-[#0f766e] group-hover:text-white transition"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-lg font-medium text-gray-800 group-hover:text-white transition">
                    {item.title}
                  </h3>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="mt-20 bg-[#0f766e] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-serif mb-4">
            Where Comfort Meets Convenience
          </h3>

          <p className="max-w-xl mx-auto opacity-90">
            Thoughtfully curated amenities designed to elevate your lifestyle —
            from wellness to recreation, everything is within reach.
          </p>

          <button className="mt-6 px-8 py-3 bg-white text-[#0f766e] rounded-full hover:bg-gray-100 transition">
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}