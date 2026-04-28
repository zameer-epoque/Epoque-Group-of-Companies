"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Services", link: "#services" },
    { name: "Process", link: "#how" },
    { name: "Reviews", link: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* 🔵 LOGO */}
        <h1 className="text-xl font-bold text-[#2F4A8A] tracking-wide">
          PropertyHandling
        </h1>

        {/* 🟣 DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">

          {menu.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              whileHover={{ y: -2 }}
              className="relative text-gray-700 font-medium group"
            >
              {item.name}

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3BA64B] transition-all group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* 🔥 WHATSAPP CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            className="bg-[#3BA64B] text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            WhatsApp
          </a>

          {/* 🔥 MAIN CTA */}
          <a
            href="#form"
            className="bg-[#2F4A8A] text-white px-5 py-2 rounded-lg shadow hover:scale-105 transition"
          >
            Get Quote
          </a>
        </div>

        {/* 📱 MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[#2F4A8A]"
        >
          ☰
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg px-6 pb-6 space-y-4"
        >
          {menu.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="block text-gray-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://wa.me/919999999999"
            className="block text-center bg-[#3BA64B] text-white py-3 rounded-lg"
          >
            WhatsApp
          </a>

          <a
            href="#form"
            className="block text-center bg-[#2F4A8A] text-white py-3 rounded-lg"
          >
            Get Quote
          </a>
        </motion.div>
      )}
    </nav>
  );
}