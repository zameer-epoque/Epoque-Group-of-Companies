"use client";

import Image from "next/image";

export default function FloorPlanBanner() {
  return (
    <section className="w-full bg-[#e9e5dc] py-10 px-4 md:px-10">
      
      {/* Top Title */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Typical Floor Plan
        </h2>
        <p className="text-gray-500 mt-2">
          Designed with Purpose
        </p>
      </div>

      {/* Banner Image */}
      <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-300">
        
        <Image
          src="/Garikapatibanner.jpg" // 👉 replace with your image path
          alt="Floor Plan"
          width={1400}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />

        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </section>
  );
}