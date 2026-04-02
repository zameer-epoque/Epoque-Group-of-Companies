"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "2 BHK",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    // ✅ WhatsApp Message with Property Type
    const text = `Hello, I am interested in your project.%0A%0A
Property: ${form.property}%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Message: ${form.message || "N/A"}`;

    const whatsappURL = `https://wa.me/919133633327?text=${text}`;

    window.open(whatsappURL, "_blank");

    setForm({ name: "", phone: "", property: "2 BHK", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-r from-yellow-400 via-transparent to-yellow-400"></div>

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
          Book Your Dream Property
        </h2>
        <p className="text-gray-400 mt-3">
          Select your property & connect instantly on WhatsApp
        </p>
      </div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-200 relative z-10"
      >
        <div className="bg-black rounded-2xl p-8 space-y-5 border border-white/10">

          {/* Property Select */}
          <select
            name="property"
            value={form.property}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
            focus:border-yellow-400 outline-none text-white"
          >
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="Luxury Villa">Luxury Villa</option>
          </select>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
            focus:border-yellow-400 outline-none text-white"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
            focus:border-yellow-400 outline-none text-white"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 
            focus:border-yellow-400 outline-none text-white"
          />

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 
            text-black py-3 rounded-full font-semibold shadow-lg"
          >
            Send via WhatsApp
          </motion.button>

          {/* Divider */}


    </div>
      </motion.form>
    </section>
  );
}