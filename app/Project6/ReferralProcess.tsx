"use client";

import { motion } from "framer-motion";

export default function ProcessReferral() {
  const steps = [
    {
      no: "01",
      title: "Consultation & Inspection",
      desc: "We understand your needs and inspect the property.",
    },
    {
      no: "02",
      title: "Assessment & Plan",
      desc: "We create a custom action plan for your property.",
    },
    {
      no: "03",
      title: "Execution",
      desc: "We manage tenants and handle all operations.",
    },
    {
      no: "04",
      title: "Monitoring",
      desc: "Regular updates, rent collection & maintenance.",
    },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* 🔥 REFERRAL TOP BAR */}
      <div className="bg-[#3BA64B] text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-xl md:text-2xl font-semibold mb-6">
            Property Management Referral Plan
          </h2>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            {[
              {
                title: "For Tenants",
                desc: "Refer an NRI friend & earn rewards on annual property management.",
              },
              {
                title: "For Clients",
                desc: "Earn referral benefits for every successful signup.",
              },
              {
                title: "Not a Client?",
                desc: "Join & get exciting referral bonuses.",
              },
            ].map((item, i) => (
              <div key={i} className="border-t border-white/30 pt-4">
                <p className="font-semibold">{item.title}</p>
                <p className="text-white/80">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* 🔥 MAIN GRADIENT SECTION */}
      <div className="relative py-4 px-6">

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]"></div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 text-white">

          {/* 🖼 IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/about-property12.jpg" // replace
              alt="Process"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          {/* 📝 CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Do We Work?
            </h2>

            <p className="text-white/80 mb-10">
              Simple, transparent, and hassle-free process to manage your property.
            </p>

            {/* 🔥 STEPS */}
            <div className="grid sm:grid-cols-2 gap-5">

              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
                >
                  <h3 className="text-white font-bold text-lg mb-2">
                    {step.no}
                  </h3>

                  <h4 className="font-semibold mb-1">
                    {step.title}
                  </h4>

                  <p className="text-white/70 text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* 🔥 CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-white text-[#2F4A8A] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Start Managing Your Property
              </a>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
}