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
    <nav className="fixed w-full top-0 z-50">

      {/* 🔥 GRADIENT BACKGROUND */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled
            ? "bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] opacity-95"
            : "bg-transparent"
        }`}
      />

      {/* 🔥 GLASS LAYER */}
      <div className="relative backdrop-blur-md">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* 🔵 LOGO */}
          <h1 className="text-xl font-bold text-white tracking-wide">
            PropertyHandling
          </h1>

          {/* 🟣 DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">

            {menu.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ y: -2 }}
                className="relative text-white font-medium group"
              >
                {item.name}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </motion.a>
            ))}

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              className="bg-white text-[#3BA64B] px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              WhatsApp
            </a>

            {/* CTA */}
            <a
              href="#form"
              className="bg-black/20 border border-white px-5 py-2 rounded-lg text-white hover:bg-black/30 transition"
            >
              Get Quote
            </a>
          </div>

          {/* 📱 MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-white"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B] px-6 pb-6 space-y-4 text-white"
          >
            {menu.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setOpen(false)}
                className="block"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://wa.me/919999999999"
              className="block text-center bg-white text-[#3BA64B] py-3 rounded-lg"
            >
              WhatsApp
            </a>

            <a
              href="#form"
              className="block text-center bg-black/20 border border-white py-3 rounded-lg"
            >
              Get Quote
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}