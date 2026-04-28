"use client";

import { useState } from "react";

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
    <section id="contact" className="py-16 px-6 bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 📝 LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch With Us
          </h2>

          <p className="mb-6 text-blue-100">
            Ready to manage your property stress-free? Contact us today and get
            a free consultation from our experts.
          </p>

          <div className="space-y-4">
            <p>📞 +91 99999 99999</p>
            <p>📧 info@propertyhandling.com</p>
            <p>📍 Hyderabad, India</p>
          </div>

          {/* 🔥 QUICK ACTION */}
          <div className="mt-6 flex gap-4">
            <a
              href="tel:+919999999999"
              className="bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-green-500 px-5 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* 🟡 FORM */}
        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">
            Request a Callback
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Property Location"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Message (optional)"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              {loading ? "Submitting..." : "Get Callback"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}