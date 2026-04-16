"use client";

export default function ContactPage() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[60vh] flex items-center justify-center text-center">
        <img
          src="/imagesnew/house2.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />

        <div className="relative z-10 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="py-16 px-6 md:px-12 grid md:grid-cols-3 gap-8 text-center">

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">+91 9133 633 327
            </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-400">sales@e-infra.in</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-400">
            Narsingi, Hyderabad, Telangana
          </p>
        </div>

      </section>

      {/* ================= FORM + MAP ================= */}
      <section className="py-16 px-6 md:px-12 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div>
          <h2 className="text-2xl md:text-3xl mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 bg-gray-900 rounded outline-none"
            />

            <button className="bg-white text-black px-6 py-3 rounded hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* MAP / IMAGE */}
        <div>
          <h2 className="text-2xl md:text-3xl mb-6">
            Our Location
          </h2>

          <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl mb-4">
          Let’s Build Something Great Together
        </h2>
        <p className="text-gray-400 mb-6">
          Contact us today for your next project
        </p>

        <button className="bg-white text-black px-6 py-3 rounded">
          Get Started
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      

    </main>
  );
}