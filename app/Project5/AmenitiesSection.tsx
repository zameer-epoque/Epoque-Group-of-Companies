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
    <section id="amenities" className="relative py-28 bg-gradient-to-b from-white to-[#eef5f4] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0f766e]/10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Luxury <span className="text-[#0f766e]">Amenities</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Designed for comfort, crafted for lifestyle
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/40 to-transparent hover:from-[#0f766e]/40 transition"
              >
                <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 rounded-3xl p-8 h-full text-center shadow-md hover:shadow-2xl transition duration-500">

                  {/* ICON */}
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-[#0f766e]/10 group-hover:bg-[#0f766e] transition">
                    <Icon
                      size={30}
                      className="text-[#0f766e] group-hover:text-white transition"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-lg font-medium text-gray-800 group-hover:text-[#0f766e] transition">
                    {item.title}
                  </h3>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#0f766e]/10 to-transparent blur-xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PREMIUM CTA STRIP */}
        <div className="mt-28 relative rounded-3xl overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]" />

          <div className="relative z-10 text-center text-white py-16 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Elevate Your Everyday Living
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Experience thoughtfully designed spaces that bring together comfort,
              wellness, and modern lifestyle — all within your reach.
            </p>

            <button className="mt-8 px-10 py-3 bg-white text-[#0f766e] rounded-full hover:bg-gray-100 transition font-medium shadow-lg">
              Schedule Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}