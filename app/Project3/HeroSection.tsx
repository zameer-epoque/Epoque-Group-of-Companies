"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center">

      {/* Background Image */}
      <Image
        src="/omsreehero.jpg"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 w-full flex items-center h-full">

        <div className="text-white max-w-2xl">

          <p className="text-[#e7d6b2] tracking-[4px] mb-3 text-sm">
            PREMIUM LIVING IN YAPRAL
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold mb-4">
            Om Sree <span className="text-[#e7d6b2]">Delight</span>
          </h1>

          <p className="flex items-center gap-2 text-lg mb-6 text-gray-200">
            <FaMapMarkerAlt /> Yapral, Near Secunderabad
          </p>

          <p className="text-gray-300 mb-10">
            Premium gated community offering luxurious 2 & 3 BHK apartments
            with world-class amenities designed for modern living.
          </p>

          <div className="flex gap-6 mb-10 flex-wrap">

            <div className="border border-[#e7d6b2] px-6 py-3">
              <p className="font-semibold text-lg">2 & 3 BHK</p>
              <span className="text-sm text-gray-300">Luxury Apartments</span>
            </div>

            <div className="border border-[#e7d6b2] px-6 py-3">
              <p className="font-semibold text-lg">2.16 Acres</p>
              <span className="text-sm text-gray-300">Project Area</span>
            </div>

            <div className="border border-[#e7d6b2] px-6 py-3">
              <p className="font-semibold text-lg">105 Units</p>
              <span className="text-sm text-gray-300">Total Apartments</span>
            </div>

          </div>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#contact"
              className="bg-[#7b3f45] hover:bg-[#5c2d31] text-white px-7 py-3 font-semibold transition"
            >
              Enquire Now
            </a>

            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 border border-[#e7d6b2] px-7 py-3 hover:bg-[#e7d6b2] hover:text-black transition"
            >
              <FaPhoneAlt />
              Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}