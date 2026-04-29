"use client";

import { useState } from "react";

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
      className="py-20 px-6 bg-gradient-to-r from-[#0F172A] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Book Your Dream Villa Today
          </h2>

          <p className="text-gray-400 mt-4">
            Limited villas available in APR Praveen’s Hillside, Bachupally.
            Schedule a free site visit now.
          </p>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>✅ Starting from ₹3.69 Cr</p>
            <p>✅ 4BHK Triplex Villas</p>
            <p>✅ Possession by July 2026</p>
          </div>

          {/* Call & WhatsApp */}
          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="tel:+919100455529"
              className="bg-green-500 px-5 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919100455529"
              target="_blank"
              className="bg-[#25D366] px-5 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-[#1E293B] p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Get Details & Price Sheet
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-[#020617] outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="p-3 rounded bg-[#020617] outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-[#020617] outline-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-lg font-semibold"
            >
              {loading ? "Submitting..." : "Get Free Callback"}
            </button>
          </form>

          {/* Trust Line */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            We respect your privacy. No spam calls.
          </p>
        </div>

      </div>
    </section>
  );
}