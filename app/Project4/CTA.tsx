"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTA() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    property: "4 BHK Villa",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    if (form.phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    // ✅ WhatsApp Message (Clean Format)
    const text = `Hello, I am interested in your Luxury Villa Project.

Property: ${form.property}
Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message || "N/A"}`;

    const whatsappURL = `https://wa.me/919133633327?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");

    setForm({ name: "", phone: "", property: "4 BHK Villa", message: "" });
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
          Book Your Dream Villa
        </h2>
        <p className="text-gray-400 mt-3">
          Get instant details & schedule a site visit on WhatsApp
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
         {/* Property Select */}
<select
  name="property"
  value={form.property}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 
  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 
  outline-none text-white transition"
>
  <option className="bg-black text-white" value="4 BHK Villa">4 BHK Villa</option>
  <option className="bg-black text-white" value="Lake Facing Villa">Lake Facing Villa</option>
  <option className="bg-black text-white" value="Triplex Villa">Triplex Villa</option>
</select>

{/* Name */}
<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={form.name}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 
  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 
  outline-none text-white transition placeholder-gray-400"
/>

{/* Phone */}
<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={form.phone}
  onChange={handleChange}
  required
  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 
  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 
  outline-none text-white transition placeholder-gray-400"
/>

{/* Message */}
<textarea
  name="message"
  placeholder="Your Message (optional)"
  value={form.message}
  onChange={handleChange}
  rows={4}
  className="w-full px-4 py-3 rounded-lg bg-black/70 border border-white/10 
  focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 
  outline-none text-white transition placeholder-gray-400"
/>

{/* Submit */}
<motion.button
  type="submit"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-full flex items-center justify-center gap-2 
  bg-gradient-to-r from-yellow-400 to-yellow-300 
  text-black py-3 rounded-full font-semibold shadow-lg 
  hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] transition"
>
  <FaWhatsapp />
  Send via WhatsApp
</motion.button>
        </div>
      </motion.form>
    </section>
  );
}