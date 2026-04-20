"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const text = `Hello, I'm interested in Garikipati Towers.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;

    const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white">

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SAME AS YOUR CODE */}

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-8 rounded-2xl md:rounded-3xl space-y-4">

            {/* NAME */}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            {/* PHONE */}
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            {/* EMAIL */}
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            {/* BUTTON */}
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold">
              Submit Enquiry
            </button>

          </div>
        </motion.form>

      </div>
    </section>
  );
}