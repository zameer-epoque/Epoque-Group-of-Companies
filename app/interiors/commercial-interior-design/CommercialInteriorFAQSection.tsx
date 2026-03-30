"use client";

import { useState } from "react";

export default function CommercialInteriorSEOSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#111827]">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold">
          Commercial Interior Design Services in Hyderabad
        </h2>

        {/* SHORT CONTENT (FAST LOAD) */}
        <p className="text-gray-300">
          Epoque Group is one of the top commercial interior designers in Hyderabad,
          offering office interiors, corporate workspace design, and retail interiors.
          We create modern, functional, and high-performance business spaces.
        </p>

        <p className="text-gray-400">
          Our services include space planning, turnkey execution, and customized design
          solutions tailored to your business needs.
        </p>

        {/* BUTTON */}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="text-yellow-400 underline mt-4"
          >
            Read Full Details
          </button>
        )}

        {/* FULL SEO CONTENT (LOAD ONLY WHEN CLICKED) */}
        {showMore && (
          <div className="space-y-8 mt-6">

            <h3 className="text-2xl font-semibold">
              Office Interior Designers in Hyderabad
            </h3>
            <p className="text-gray-300">
              We design office spaces that improve productivity and employee experience
              with modern layouts and ergonomic designs.
            </p>

            <h3 className="text-2xl font-semibold">
              Corporate Interior Design
            </h3>
            <p className="text-gray-400">
              Our corporate interiors reflect brand identity with premium materials
              and professional design execution.
            </p>

            <h3 className="text-2xl font-semibold">
              Retail Interior Design
            </h3>
            <p className="text-gray-300">
              We create attractive retail spaces that enhance customer experience
              and increase business growth.
            </p>

            <h3 className="text-2xl font-semibold">
              Turnkey Interior Solutions
            </h3>
            <p className="text-gray-400">
              Complete project execution from concept to delivery with high-quality standards.
            </p>

            <h3 className="text-2xl font-semibold">
              Commercial Interior Cost in Hyderabad
            </h3>
            <p className="text-gray-300">
              Cost ranges from ₹1500 to ₹4000 per sq.ft depending on project complexity.
            </p>

            <h3 className="text-2xl font-semibold">
              Areas We Serve
            </h3>
            <p className="text-gray-400">
              We serve HITEC City, Gachibowli, Madhapur, Financial District,
              Jubilee Hills and across Hyderabad.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}