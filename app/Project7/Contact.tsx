"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Thank you! Our team will contact you shortly.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Own Your Dream Villa
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Experience luxury living at APR Hillside, Bachupally.
            Limited villas available – schedule your visit today.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-4">
            {[
              "₹3.69 Cr Onwards",
              "4BHK Triplex Villas",
              "Possession by July 2026",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-300"
              >
                <span className="text-green-400">✔</span>
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+919100455529"
              className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919100455529"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Get Price Sheet & Floor Plans
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
            />

            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition shadow-lg"
            >
              {loading ? "Submitting..." : "Get Instant Callback"}
            </button>
          </form>

          {/* Trust */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 Your details are safe. No spam calls.
          </p>
        </motion.div>

      </div>
    </section>
  );
}