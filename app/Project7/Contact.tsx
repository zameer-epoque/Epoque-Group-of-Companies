"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    // 🔥 WhatsApp Message
    const message = `Hello, I am interested in APR Hillside Villas.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}

Please share more details.`;

    const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setLoading(false);
  };

  return (
    <section className="relative py-24 px-6 bg-[#020617]">
      <div className="max-w-xl mx-auto">

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
            className="p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="p-4 rounded-xl bg-black/30 border border-white/10"
          />

          <button className="bg-green-500 py-4 rounded-xl font-semibold">
            {loading ? "Redirecting..." : "Send via WhatsApp"}
          </button>

        </form>

      </div>
    </section>
  );
}