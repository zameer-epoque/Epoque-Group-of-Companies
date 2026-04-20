"use client";"use client";

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

        {/* LEFT CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4">
            Get in <span className="text-[#5eead4]">Touch</span>
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Contact us for site visit, pricing details and availability.
          </p>

          <div className="space-y-4">

            {/* PHONE */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa]">
                <Phone size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <p className="text-sm md:text-base font-medium">
                  +91 9133 633 327
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa]">
                <Mail size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm md:text-base font-medium">
                  sales@epoquegroup.in
                </p>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa]">
                <MapPin size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm md:text-base font-medium leading-snug">
                  GMR Aerocity, Hyderabad, Telangana
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-8 rounded-2xl md:rounded-3xl space-y-4">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border border.white/30 rounded-lg text-white"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white"
            />

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold">
              Submit Enquiry
            </button>

          </div>
        </motion.form>

      </div>
    </section>
  );
}