"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* 🔵 LOGO */}
        <h1 className="text-xl font-bold text-blue-600">
          PropertyHandling
        </h1>

        {/* 🟣 DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#how" className="hover:text-blue-600">How It Works</a>
          <a href="#testimonials" className="hover:text-blue-600">Reviews</a>

          {/* 🔥 CTA BUTTON */}
          <a
            href="#form"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Quote
          </a>
        </div>

        {/* 📱 MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-4 shadow">
          <a href="#services" className="block">Services</a>
          <a href="#how" className="block">How It Works</a>
          <a href="#testimonials" className="block">Reviews</a>

          <a
            href="#form"
            className="block text-center bg-blue-600 text-white py-3 rounded-lg"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
}