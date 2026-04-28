"use client";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 📝 LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Manage Your Property in India <br />
            <span className="text-blue-600">From Anywhere</span>
          </h1>

          <p className="text-gray-600 mb-6">
            We take care of tenants, rent collection, maintenance & legal —
            so you can enjoy stress-free income.
          </p>

          {/* ✅ BENEFITS */}
          <div className="space-y-2 mb-6 text-gray-700">
            <p>✔ Tenant Management</p>
            <p>✔ Monthly Rent Collection</p>
            <p>✔ Property Maintenance</p>
            <p>✔ Legal Support</p>
          </div>

          {/* 🔥 CTA BUTTONS */}
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Get Free Consultation
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* 🟡 RIGHT FORM */}
        <div className="bg-white p-6 rounded-xl shadow-xl">
          <h2 className="text-xl font-semibold mb-4">
            Get Callback in 10 Minutes
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Property Location"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg"
            >
              Get Callback
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}