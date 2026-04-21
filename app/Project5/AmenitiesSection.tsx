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
  { icon: Waves, title: "Swimming Pool", desc: "Premium pool for relaxation" },
  { icon: Dumbbell, title: "Modern Gym", desc: "Fully equipped fitness center" },
  { icon: Building2, title: "Club House", desc: "Luxury clubhouse & lounge" },
  { icon: ShieldCheck, title: "24/7 Security", desc: "CCTV & trained guards" },
  { icon: ShoppingCart, title: "Super Market", desc: "Daily needs within reach" },
  { icon: Trees, title: "Terrace Garden", desc: "Green peaceful environment" },
  { icon: Baby, title: "Kids Play Area", desc: "Safe play zone for children" },
  { icon: ParkingCircle, title: "Reserved Parking", desc: "Secure parking spaces" },
];

export default function AmenitiesSection() {
  return (
    <section
      aria-label="Apartment Amenities Section"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#022c22] to-[#0f766e] overflow-hidden text-white"
    >
      {/* BACKGROUND BLOBS (OPTIMIZED) */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-purple-500/20 blur-[100px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] sm:w-[300px] md:w-[380px] h-[220px] sm:h-[300px] md:h-[380px] bg-teal-400/20 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Luxury Apartment Amenities in Hyderabad <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Designed for Modern Lifestyle
            </span>
          </h2>

          <p className="text-gray-300 mt-3 md:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Enjoy world-class amenities including swimming pool, gym, clubhouse,
            kids play area, and 24/7 security in our premium apartments.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {amenities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-xl md:rounded-2xl p-[1px] bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center shadow-md hover:scale-105 transition duration-300">

                  {/* ICON */}
                  <div className="mx-auto w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base font-semibold">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION (SEO BOOST) */}
                  <p className="text-[10px] sm:text-xs text-gray-400 mt-1 hidden sm:block">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}