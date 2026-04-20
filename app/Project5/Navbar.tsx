"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Amenities", link: "#amenities" },
    { name: "Plans", link: "#plans" },
    { name: "Location", link: "#location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-lg sm:text-xl md:text-3xl font-serif tracking-wide text-[#0f766e]">
          Garikipati Towers
        </h1>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="relative group text-gray-700 font-medium"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0f766e] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <button className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white font-medium shadow-md hover:scale-105 transition">
            Book Visit
          </button>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 z-50 p-2"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-white px-6"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-xl sm:text-2xl font-serif tracking-wide hover:text-[#5eead4] transition"
              >
                {item.name}
              </Link>
            ))}

            <button className="mt-6 px-8 py-3 rounded-full bg-[#0f766e] hover:bg-[#14b8a6] transition text-base active:scale-95">
              Book Visit
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}