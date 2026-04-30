// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//   });

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (!form.name || !form.phone) {
//       alert("Please fill required fields");
//       return;
//     }

//     setLoading(true);

//     // ✅ WhatsApp Message
//     const message = `Hello, I am interested in APR Hillside Villas.

// Name: ${form.name}
// Phone: ${form.phone}
// Email: ${form.email || "N/A"}

// Please share more details.`;

//     const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(message)}`;

//     // Open WhatsApp
//     window.open(whatsappUrl, "_blank");

//     setLoading(false);
//   };

//   return (
//     <section
//       id="contact"
//       className="relative py-24 px-6 bg-[#020617] overflow-hidden"
//     >
//       {/* 🔥 Background Glow */}
//       <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
//       <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//             Own Your Dream Villa
//           </h2>

//           <p className="text-gray-400 mt-6 text-lg">
//             Experience luxury living at APR Hillside, Bachupally.
//             Limited villas available – schedule your visit today.
//           </p>

//           <div className="mt-8 space-y-4">
//             {[
//               "₹3.69 Cr Onwards",
//               "4BHK Triplex Villas",
//               "Possession by July 2026",
//             ].map((item, i) => (
//               <div key={i} className="flex items-center gap-3 text-gray-300">
//                 <span className="text-green-400">✔</span>
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="tel:+919133633327"
//               className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
//             >
//               Call Now
//             </a>

//             <a
//               href="https://wa.me/919133633327"
//               target="_blank"
//               className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition"
//             >
//               WhatsApp
//             </a>
//           </div>
//         </motion.div>

//         {/* FORM */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl"
//         >
//           <h3 className="text-2xl font-semibold mb-6 text-center">
//             Get Price Sheet & Floor Plans
//           </h3>

//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//             <input
//               type="text"
//               placeholder="Your Name"
//               required
//               value={form.name}
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//               className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
//             />

//             <input
//               type="tel"
//               placeholder="Phone Number"
//               required
//               value={form.phone}
//               onChange={(e) =>
//                 setForm({ ...form, phone: e.target.value })
//               }
//               className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
//             />

//             <input
//               type="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={(e) =>
//                 setForm({ ...form, email: e.target.value })
//               }
//               className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none transition"
//             />

//             <button
//               type="submit"
//               className="mt-2 bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition shadow-lg"
//             >
//               {loading ? "Redirecting..." : "Get Instant Callback"}
//             </button>
//           </form>

//           {/* Trust */}
//           <p className="text-xs text-gray-400 mt-4 text-center">
//             🔒 Your details are safe. No spam calls.
//           </p>

//           {/* Extra WhatsApp CTA */}
//           <a
//             href="https://wa.me/919133633327"
//             target="_blank"
//             className="block text-center mt-4 border border-white/20 py-3 rounded-xl hover:bg-white/10 transition"
//           >
//             Or Chat Directly on WhatsApp
//           </a>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<{
    name: string;
    phone: string;
    email: string;
  }>({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

    const whatsappUrl = `https://wa.me/919133633327?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");

    setLoading(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-24 px-6 bg-[#020617] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Book Your Villa Visit in Bachupally, Hyderabad
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Enquire about APR Praveen’s Hillside luxury villas in Bachupally.
            Get price details, floor plans, and schedule a site visit today.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "₹3.69 Cr Onwards",
              "4BHK Triplex Villas",
              "Possession by July 2026",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-300">
                <span className="text-green-400">✔</span>
                {item}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+919133633327"
              aria-label="Call APR Hillside Villas sales team"
              className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919133633327"
              target="_blank"
              aria-label="WhatsApp enquiry for APR Hillside Villas"
              className="px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:bg-white/10 transition"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Get Price Sheet & Floor Plans
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none"
              />
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                required
                value={form.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, phone: e.target.value })
                }
                className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email (optional)"
                value={form.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="p-4 rounded-xl bg-black/30 border border-white/10 focus:border-green-400 outline-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition shadow-lg"
            >
              {loading ? "Redirecting..." : "Get Instant Callback"}
            </button>

          </form>

          {/* TRUST */}
          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 Your details are safe. No spam calls.
          </p>

          {/* EXTRA CTA */}
          <a
            href="https://wa.me/919133633327"
            target="_blank"
            className="block text-center mt-4 border border-white/20 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Chat Directly on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}