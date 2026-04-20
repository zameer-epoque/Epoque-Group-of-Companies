"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const plans = [
  {
    title: "1.5 BHK",
    size: "932 Sq.ft",
    image: "/plan1.jpg",
  },
  {
    title: "2 BHK",
    size: "1208 Sq.ft",
    image: "/plan2.jpg",
  },
  {
    title: "3 BHK",
    size: "1647 Sq.ft",
    image: "/plan3.jpg",
  },
];

export default function FloorPlansSection() {
  return (
    <section id="plans" className="bg-[#f8f7f4] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">
            Floor <span className="text-[#0f766e]">Plans</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Smart layouts designed for maximum comfort
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <Image
                src={plan.image}
                alt={plan.title}
                width={500}
                height={350}
                className="object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold">{plan.title}</h3>
                <p className="text-gray-500">{plan.size}</p>

                <button className="mt-4 px-6 py-2 border rounded-full hover:bg-[#0f766e] hover:text-white transition">
                  View Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}