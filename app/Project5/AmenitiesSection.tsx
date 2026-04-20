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
    <section className="relative py-32 bg-gradient-to-br from-[#0f172a] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* BACKGROUND LIGHT BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            World-Class <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Amenities
            </span>
          </h2>
          <p className="text-gray-300 mt-4 text-lg">
            Designed to elevate your everyday lifestyle
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
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-[#5eead4]/30 via-[#a78bfa]/30 to-transparent hover:from-[#5eead4] hover:via-[#a78bfa] transition"
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full text-center shadow-xl hover:shadow-[0_0_40px_rgba(94,234,212,0.3)] transition duration-500">

                  {/* ICON */}
                  <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-lg group-hover:scale-110 transition">
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-6 text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  {/* GLOW EFFECT */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#5eead4]/20 to-[#a78bfa]/20 blur-2xl rounded-3xl" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PREMIUM CTA */}
        <div className="mt-32 relative rounded-3xl overflow-hidden">

          {/* GRADIENT BG */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5eead4] via-[#14b8a6] to-[#a78bfa]" />

          <div className="relative z-10 text-center text-white py-20 px-6">
            <h3 className="text-3xl md:text-5xl font-serif mb-4">
              Live Beyond Expectations
            </h3>

            <p className="max-w-2xl mx-auto opacity-90 text-lg">
              Experience a lifestyle enriched with luxury, comfort, and
              beautifully designed spaces for every moment of your life.
            </p>

            <button className="mt-8 px-10 py-4 rounded-full bg-black/80 backdrop-blur-lg hover:bg-black transition font-medium shadow-xl">
              Schedule Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}