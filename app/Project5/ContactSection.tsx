"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0f766e] to-[#115e59] overflow-hidden text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Book Your <br />
            <span className="text-[#5eead4]">Dream Home</span>
          </h2>

          <p className="opacity-90 mb-8 text-lg">
            Connect with our team to schedule a site visit and explore premium
            living spaces tailored for you.
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>sales@garikipati.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>GMR Aerocity, Hyderabad</span>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl space-y-6"
        >

          {/* INPUT GROUP */}
          <div className="relative">
            <input
              type="text"
              required
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg outline-none peer"
            />
            <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0f766e] px-2">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              required
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg outline-none peer"
            />
            <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0f766e] px-2">
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              required
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg outline-none peer"
            />
            <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0f766e] px-2">
              Email Address
            </label>
          </div>

          <div className="relative">
            <textarea
              rows={4}
              className="w-full p-4 bg-transparent border border-white/30 rounded-lg outline-none peer"
            />
            <label className="absolute left-4 top-4 text-white/70 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#0f766e] px-2">
              Message
            </label>
          </div>

          {/* BUTTON */}
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-white to-gray-200 text-[#0f766e] font-semibold hover:scale-105 transition shadow-lg">
            Submit Inquiry
          </button>
        </motion.form>

      </div>
    </section>
  );
}