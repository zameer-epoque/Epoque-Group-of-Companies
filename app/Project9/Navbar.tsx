"use client";

import { useState } from "react";
import { Menu, X,Phone } from "lucide-react";


const navLinks = [

  { title: "Highlights", href: "#highlights" },
  { title: "Amenities", href: "#amenities" },
  { title: "Clubhouse", href: "#clubhouse" },
  { title: "Floor Plans", href: "#floorplans" },
  { title: "Gallery", href: "#gallery" },
  { title: "Location", href: "#location" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-[#C38762]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
         <a href="#overview">
  <img
    src="/MK1-Logo.png"
    alt="MK One"
    className="h-14 w-auto"
  />
</a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-white text-sm uppercase tracking-[2px] hover:text-[#C38762] transition duration-300"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
    

<div className="hidden lg:flex items-center gap-5">
  <a
    href="tel:+919133633327"
    className="flex items-center gap-2 text-white hover:text-[#C38762] transition"
  >
    <Phone size={18} />
    <span>+91 9133 633 327</span>
  </a>

  
</div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t border-[#C38762]/20">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white py-4 border-b border-zinc-800 uppercase tracking-wider hover:text-[#C38762]"
              >
                {item.title}
              </a>
            ))}

             <a
    href="tel:+919133633327"
    className="flex items-center gap-2 text-white hover:text-[#C38762] transition"
  >
    <Phone size={18} />
    <span>+91 9133 633 327</span>
  </a>
          </div>
        </div>
      )}
    </header>
  );
}