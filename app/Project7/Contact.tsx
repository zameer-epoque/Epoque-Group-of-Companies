"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setLoading(true);

    const message = `Hello, I am interested in APR Praveen’s Hillside Villas in Bachupally, Hyderabad.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "N/A"}

Please share price, floor plans & site visit details.`;

    const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-28
        px-6
        bg-[#f8fbff]
      "
    >
      {/* PREMIUM LIGHT BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,116,193,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(237,16,36,0.05),transparent_30%)]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
          relative
          z-10
        "
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-[#dbeafe]
              bg-white/80
              backdrop-blur-xl
              text-[#1674c1]
              text-sm
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            "
          >
            ✨ Luxury Villas In Bachupally
          </div>

          {/* HEADING */}
          <h2
            className="
              mt-7
              text-4xl
              md:text-6xl
              font-black
              leading-tight
              tracking-tight
            "
          >
            <span className="text-[#0f172a]">
              Book Your
            </span>

            <br />

            <span className="bg-gradient-to-r from-[#1674c1] to-[#ed1024] bg-clip-text text-transparent">
              Dream Villa Visit
            </span>
          </h2>

          {/* TEXT */}
          <p
            className="
              mt-7
              text-lg
              leading-relaxed
              text-[#475569]
              max-w-xl
            "
          >
            Experience ultra luxury 4BHK Triplex Villas
            at APR Praveen’s Hillside, Bachupally.
            Get instant price details, floor plans &
            exclusive site visit access.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-5">

            {[
              "₹3.69 Cr Onwards",
              "4BHK Premium Triplex Villas",
              "Possession By July 2026",
            ].map((item, i) => (
              <div
                key={i}
                className="
                  flex
                  items-center
                  gap-4
                  text-[#0f172a]
                "
              >
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    text-white
                    bg-gradient-to-br
                    from-[#1674c1]
                    to-[#ed1024]
                    shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                  "
                >
                  ✓
                </div>

                <span className="text-lg font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-5">

            {/* CALL BUTTON */}
            <a
              href="tel:+919133633327"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-2xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#1674c1]
                to-[#ed1024]
                shadow-[0_15px_40px_rgba(22,116,193,0.20)]
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <span className="relative z-10">
                Call Now
              </span>
            </a>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919133633327"
              target="_blank"
              className="
                group
                relative
                overflow-hidden
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white
                text-[#0f172a]
                font-semibold
                shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                transition-all
                duration-300
                hover:scale-105
                hover:border-[#1674c1]/30
              "
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-[#e2e8f0]
            bg-white/90
            backdrop-blur-2xl
            p-8
            shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          "
        >
          {/* LIGHT GLOW */}
          <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#1674c1]/5 blur-[100px]" />

          {/* TITLE */}
          <h3
            className="
              relative
              z-10
              text-3xl
              font-bold
              text-center
              text-[#0f172a]
            "
          >
            Get Price Sheet
          </h3>

          <p
            className="
              relative
              z-10
              text-center
              text-[#64748b]
              mt-3
              mb-8
            "
          >
            Fill the form to receive floor plans,
            pricing & exclusive offers instantly.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-5"
          >

            {/* NAME */}
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white
                px-5
                py-4
                text-[#0f172a]
                placeholder:text-[#94a3b8]
                outline-none
                transition-all
                focus:border-[#1674c1]
                focus:ring-2
                focus:ring-[#1674c1]/10
              "
            />

            {/* PHONE */}
            <input
              type="tel"
              placeholder="Enter Phone Number"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white
                px-5
                py-4
                text-[#0f172a]
                placeholder:text-[#94a3b8]
                outline-none
                transition-all
                focus:border-[#1674c1]
                focus:ring-2
                focus:ring-[#1674c1]/10
              "
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Enter Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="
                w-full
                rounded-2xl
                border
                border-[#e2e8f0]
                bg-white
                px-5
                py-4
                text-[#0f172a]
                placeholder:text-[#94a3b8]
                outline-none
                transition-all
                focus:border-[#1674c1]
                focus:ring-2
                focus:ring-[#1674c1]/10
              "
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="
                group
                relative
                overflow-hidden
                mt-2
                rounded-2xl
                py-4
                text-lg
                font-semibold
                text-white
                bg-gradient-to-r
                from-[#1674c1]
                to-[#ed1024]
                shadow-[0_15px_40px_rgba(22,116,193,0.20)]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>

              <span className="relative z-10">
                {loading
                  ? "Redirecting..."
                  : "Get Instant Callback"}
              </span>
            </button>
          </form>

          {/* TRUST TEXT */}
          <p
            className="
              relative
              z-10
              text-center
              text-xs
              text-[#64748b]
              mt-5
            "
          >
            🔒 100% Secure Information • No Spam Calls
          </p>

          {/* EXTRA CTA */}
          <a
            href="https://wa.me/919133633327"
            target="_blank"
            className="
              relative
              z-10
              mt-5
              flex
              items-center
              justify-center
              rounded-2xl
              border
              border-[#e2e8f0]
              bg-white
              py-4
              text-[#0f172a]
              transition-all
              duration-300
              hover:border-[#1674c1]/30
              hover:bg-[#f8fbff]
            "
          >
            Chat Directly On WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}