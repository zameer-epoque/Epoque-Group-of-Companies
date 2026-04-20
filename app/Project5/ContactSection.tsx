"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      {/* GLOW */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/30 blur-[120px]" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-teal-400/30 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-serif leading-tight mb-4 md:mb-6">
            Book Your <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Dream Home
            </span>
          </h2>

          <p className="text-gray-300 mb-6 md:mb-8 text-sm sm:text-base md:text-lg">
            Connect with our team to schedule a site visit and explore premium living spaces.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-3 md:space-y-4">
            {[
              { icon: Phone, text: "+91 98765 43210" },
              { icon: Mail, text: "sales@garikipati.com" },
              { icon: MapPin, text: "GMR Aerocity, Hyderabad" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
                >
                  <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa]">
                    <Icon size={14} className="md:size-18 text-black" />
                  </div>
                  <span className="text-gray-200 text-xs sm:text-sm md:text-base">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl space-y-4 md:space-y-6">

            {/* INPUTS */}
            {["Your Name", "Phone Number", "Email Address"].map((label, i) => (
              <div key={i} className="relative">
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="w-full p-3 md:p-4 bg-transparent border border-white/30 rounded-lg outline-none peer text-white text-sm md:text-base"
                />
                <label className="absolute left-3 md:left-4 top-3 md:top-4 text-white/60 text-xs md:text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#022c22] px-1">
                  {label}
                </label>
              </div>
            ))}

            {/* TEXTAREA */}
            <div className="relative">
              <textarea
                rows={3}
                placeholder=" "
                className="w-full p-3 md:p-4 bg-transparent border border-white/30 rounded-lg outline-none peer text-white text-sm md:text-base"
              />
              <label className="absolute left-3 md:left-4 top-3 md:top-4 text-white/60 text-xs md:text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#022c22] px-1">
                Message
              </label>
            </div>

            {/* BUTTON */}
            <button className="w-full py-3 md:py-4 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black text-sm md:text-base font-semibold active:scale-95 transition shadow-[0_0_15px_rgba(94,234,212,0.5)]">
              Submit Inquiry
            </button>
          </div>
        </motion.form>

      </div>
    </section>
  );
}