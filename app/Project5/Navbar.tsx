"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Amenities", link: "#amenities" },
    { name: "Floor Plans", link: "#plans" },
    { name: "Location", link: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <h1 className="text-2xl font-semibold tracking-wide text-[#0f766e]">
            Garikipati
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="text-gray-700 hover:text-[#0f766e] transition font-medium"
              >
                {item.name}
              </Link>
            ))}

            <button className="ml-4 px-6 py-2 rounded-full bg-[#0f766e] text-white hover:bg-[#0d5c57] transition">
              Book Visit
            </button>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-10">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-[#0f766e]"
                >
                  {item.name}
                </Link>
              ))}

              <button className="mt-4 px-8 py-3 rounded-full bg-[#0f766e] text-white hover:bg-[#0d5c57] transition">
                Book Visit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}