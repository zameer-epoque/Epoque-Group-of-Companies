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

        {/* FAST LOADING SHORT CONTENT */}
        <p className="text-gray-300 leading-relaxed">
          Epoque Group is one of the top commercial interior designers in Hyderabad,
          offering office interiors, corporate workspace design, and retail interiors.
          We create modern, functional, and high-performance business spaces that improve
          productivity and brand identity.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Our services include office interiors, corporate design, retail showrooms,
          and turnkey commercial interior solutions across Hyderabad.
        </p>

        {/* READ MORE BUTTON */}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-4 text-yellow-400 underline"
          >
            Read Full SEO Content
          </button>
        )}

        {/* HEAVY CONTENT LOADS ONLY WHEN CLICKED */}
        {showMore && (
          <div className="space-y-8 mt-6">

            <h3 className="text-2xl font-semibold">
              Office Interior Designers in Hyderabad
            </h3>
            <p className="text-gray-300">
              Office interiors are designed to improve workflow, employee productivity,
              and workspace efficiency. We create modern office layouts including cabins,
              workstations, and meeting rooms.
            </p>

            <h3 className="text-2xl font-semibold">
              Corporate Interior Design Solutions
            </h3>
            <p className="text-gray-400">
              Our corporate interiors reflect professionalism and brand identity using
              premium materials, lighting, and modern design concepts.
            </p>

            <h3 className="text-2xl font-semibold">
              Retail Interior Designers in Hyderabad
            </h3>
            <p className="text-gray-300">
              We design retail stores and showrooms that attract customers, improve
              product visibility, and increase sales performance.
            </p>

            <h3 className="text-2xl font-semibold">
              Turnkey Commercial Interior Solutions
            </h3>
            <p className="text-gray-400">
              Complete end-to-end interior execution from concept design to final delivery
              with high-quality standards and timely completion.
            </p>

            <h3 className="text-2xl font-semibold">
              Benefits of Commercial Interior Design
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>✔ Improves productivity</li>
              <li>✔ Enhances brand identity</li>
              <li>✔ Better space utilization</li>
              <li>✔ Increases business efficiency</li>
            </ul>

            <h3 className="text-2xl font-semibold">
              Commercial Interior Cost in Hyderabad
            </h3>
            <p className="text-gray-300">
              Pricing ranges from ₹1500 to ₹4000 per sq.ft depending on design,
              materials, and customization.
            </p>

            <h3 className="text-2xl font-semibold">
              Areas We Serve
            </h3>
            <p className="text-gray-400">
              We serve HITEC City, Gachibowli, Madhapur, Financial District,
              Jubilee Hills, and Banjara Hills.
            </p>

            <h3 className="text-2xl font-semibold">
              Hire Commercial Interior Designers in Hyderabad
            </h3>
            <p className="text-gray-300">
              Contact Epoque Group to transform your commercial space into a modern,
              efficient, and visually appealing environment.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}