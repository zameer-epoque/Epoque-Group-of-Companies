"use client";

import { motion } from "framer-motion";

export default function Properties() {
  const properties = [
    {
      title: "2BHK Apartment",
      location: "Hyderabad",
      image: "/properties/p1.jpg",
      status: "Managed",
    },
    {
      title: "Independent House",
      location: "Vijayawada",
      image: "/properties/p2.jpg",
      status: "Rented",
    },
    {
      title: "Residential Plot",
      location: "Vizag",
      image: "/properties/p3.jpg",
      status: "Monitored",
    },
    {
      title: "Luxury Villa",
      location: "Gachibowli",
      image: "/properties/p4.jpg",
      status: "Managed",
    },
    {
      title: "Commercial Space",
      location: "Kukatpally",
      image: "/properties/p5.jpg",
      status: "Leased",
    },
    {
      title: "Farm Land",
      location: "Amaravati",
      image: "/properties/p6.jpg",
      status: "Secured",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#2F4A8A]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3BA64B]/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2F4A8A]">
          Properties We Manage
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Trusted by property owners across multiple cities in India.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

              {/* CONTENT */}
              <div className="p-5 bg-white">
                <h3 className="font-semibold text-lg text-[#2F4A8A]">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>

                {/* STATUS BADGE */}
                <span className="inline-block mt-3 text-xs bg-[#3BA64B]/10 text-[#3BA64B] px-3 py-1 rounded-full font-medium">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        <div className="text-center mt-16">
          <a
            href="#form"
            className="inline-block bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Manage Your Property Now
          </a>
        </div>

      </div>
    </section>
  );
}