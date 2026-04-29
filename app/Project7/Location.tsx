"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="relative py-24 px-6 bg-[#020617] text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Prime Location Advantage
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Seamless connectivity to IT hubs, schools, hospitals & more
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT - MAP */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 group"
          >
            <img
              src="/location-map.png"
              alt="Location Map"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md px-5 py-2 rounded-xl text-sm border border-white/20">
              📍 Bachupally, Hyderabad
            </div>

            {/* Map CTA */}
            <a
              href="https://maps.app.goo.gl/E1R1sz9GRekLg4dT6"
              target="_blank"
              className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition"
            >
              View Map
            </a>
          </motion.div>

          {/* RIGHT - DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Nearby Essentials
            </h3>

            {/* Sections */}
            <div className="space-y-6">

              <div>
                <h4 className="text-green-400 font-semibold mb-2">
                  🎓 Education
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Kennedy High School – 2 km</li>
                  <li>Silver Oaks School – 2 km</li>
                  <li>VNR VJIET – 2 km</li>
                  <li>DPS – 3 km</li>
                </ul>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold mb-2">
                  🏥 Healthcare
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>Mam’s Hospital – 2 km</li>
                  <li>SLG Hospital – 3 km</li>
                  <li>Usha Mullapudi – 6 km</li>
                </ul>
              </div>

              <div>
                <h4 className="text-yellow-400 font-semibold mb-2">
                  🛍 Lifestyle
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>GSM Mall – 15 mins</li>
                  <li>Nexus Mall – 20 mins</li>
                  <li>South India Mall – 20 mins</li>
                </ul>
              </div>

            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="mt-10 inline-block w-full text-center bg-gradient-to-r from-green-500 to-blue-500 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition shadow-lg"
            >
              Schedule Site Visit
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}