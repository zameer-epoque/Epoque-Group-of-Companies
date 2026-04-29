"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          APR Hillside
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#highlights" className="hover:text-white">Highlights</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#amenities" className="hover:text-white">Amenities</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-gradient-to-r from-green-500 to-blue-500 px-5 py-2 rounded-lg font-semibold text-white"
        >
          Book Visit
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#020617] px-6 pb-6 flex flex-col gap-4 text-gray-300">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#highlights" onClick={() => setOpen(false)}>Highlights</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#amenities" onClick={() => setOpen(false)}>Amenities</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <a
            href="#contact"
            className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 rounded-lg text-center"
          >
            Book Visit
          </a>
        </div>
      )}
    </header>
  );
}