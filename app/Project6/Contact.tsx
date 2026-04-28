"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      alert("Thank you! We will contact you shortly.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="relative py-4 px-6 overflow-hidden text-white">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

      {/* 🔥 DARK OVERLAY (IMPORTANT FIX) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔥 GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Manage Your Property
          </h2>

          <p className="mb-6 text-white/80">
            Talk to our experts and get a free consultation. We handle everything
            while you relax.
          </p>

          <div className="space-y-4 text-white/80">
            <p>📞 +91 99999 99999</p>
            <p>📧 info@propertyhandling.com</p>
            <p>📍 Hyderabad, India</p>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a
              href="tel:+919999999999"
              className="bg-white text-[#2F4A8A] px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-[#3BA64B] px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 p-6 rounded-2xl shadow-2xl"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">
            Request a Callback
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none"
              required
            />

            <input
              type="text"
              placeholder="Property Location"
              className="w-full p-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none"
            />

            <textarea
              placeholder="Message (optional)"
              className="w-full p-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-[#2F4A8A] py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              {loading ? "Submitting..." : "Get Callback"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}