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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    const text = `Hello, I'm interested in Garikipati Towers.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Message: ${form.message}`;

    const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      aria-label="Contact for Luxury Apartments in Hyderabad"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-4">
            Contact for <span className="text-[#5eead4]">Site Visit</span>
          </h2>

          <p className="text-gray-300 mb-6 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Get pricing, floor plans, and availability details for luxury apartments in Hyderabad.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <Phone size={18} className="text-[#5eead4]" />
              <div>
                <p className="text-xs text-gray-400">Call Us</p>
                <a href="tel:+919133633327" className="text-sm md:text-base font-medium hover:underline">
                  +91 9133 633 327
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <Mail size={18} className="text-[#5eead4]" />
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <a href="mailto:sales@epoquegroup.in" className="text-sm md:text-base font-medium hover:underline">
                  sales@epoquegroup.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-lg">
              <MapPin size={18} className="text-[#5eead4]" />
              <div>
                <p className="text-xs text-gray-400">Location</p>
                <p className="text-sm md:text-base font-medium">
                  GMR Aerocity, Hyderabad, Telangana
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-[1px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#5eead4]/40 via-[#a78bfa]/40 to-transparent"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-8 rounded-2xl md:rounded-3xl space-y-4">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400"
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              pattern="[0-9]{10}"
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full p-3 bg-transparent border border-white/30 rounded-lg text-white placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition"
            >
              Submit Enquiry
            </button>

          </div>
        </motion.form>

      </div>
    </section>
  );
}