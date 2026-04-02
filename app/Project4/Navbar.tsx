"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // ✅ FIX (important)
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Highlights", href: "#details" },
    { name: "Features", href: "#features" },
    { name: "Amenities", href: "#amenities" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 
    bg-gradient-to-r from-gray-900/80 via-black/60 to-gray-900/80 
    backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔥 LOGO (Clickable + Glow) */}
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/logo c.jpg"
              alt="Logo"
              width={140}
              height={40}
              className="object-contain drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"
            />
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} className="relative group">
              <span className="text-gray-300 group-hover:text-yellow-400 transition">
                {link.name}
              </span>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* CTA */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-300 
            text-black px-5 py-2 rounded-full font-semibold shadow-md"
          >
            Book Visit
          </motion.a>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gradient-to-b from-black to-gray-900 
            border-t border-white/10 px-6 py-4 space-y-4"
          >
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-300 hover:text-yellow-400 transition"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contact"
              className="block bg-yellow-400 text-black text-center py-2 rounded-full font-semibold"
            >
              Book Visit
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}