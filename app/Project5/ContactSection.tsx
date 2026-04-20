"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="bg-[#0f766e] py-24 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-serif mb-6">
          Book Your Dream Home
        </h2>

        <p className="mb-10 opacity-90">
          Fill the form and our team will contact you shortly
        </p>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg text-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 rounded-lg text-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-lg text-black md:col-span-2"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="p-4 rounded-lg text-black md:col-span-2"
          />

          <button className="md:col-span-2 bg-white text-[#0f766e] py-4 rounded-full font-medium hover:bg-gray-100 transition">
            Submit Inquiry
          </button>
        </motion.form>

      </div>
    </section>
  );
}