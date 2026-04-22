"use client";

import Image from "next/image";

export default function FloorPlanBanner() {
  return (
    <section
      id="floor-plan"
      aria-label="Apartment Floor Plan in Hyderabad"
      className="w-full bg-[#e9e5dc] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10"
    >
      {/* TITLE */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-800 leading-tight">
          Luxury Apartment Floor Plan <br />
          <span className="text-[#0f766e]">in Hyderabad</span>
        </h2>

        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Explore spacious 1.5, 2 & 3 BHK layouts designed for comfort,
          ventilation, and modern living.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-300">

        <Image
          src="/Garikapatibanner.png"
          alt="Garikipati Towers floor plan layout showing 1.5 2 and 3 BHK apartments in Hyderabad"
          width={1400}
          height={800}
          sizes="(max-width:768px) 100vw, (max-width:1200px) 90vw, 1200px"
          quality={90}
          priority
          className="w-full h-auto object-cover"
        />

        {/* LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* OPTIONAL CTA */}
        

      </div>
    </section>
  );
}