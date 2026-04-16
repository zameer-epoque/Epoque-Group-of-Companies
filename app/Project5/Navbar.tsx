"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LEFT MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            MENU <ChevronDown size={16} />
          </div>
          <Link href="/Project5/about" className="hover:text-gray-300">ABOUT US</Link>
          <Link href="#" className="hover:text-gray-300">PROJECTS</Link>
        </div>

        {/* LOGO CENTER */}
        <div className="text-center">
          <h1 className="text-xl font-bold tracking-widest">
            <span className="text-yellow-400">GSRV</span>-INFRA
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-sm font-medium">
            +91 9133 633 327
          </span>
          <button className="bg-[#b89a7a] hover:bg-[#a88766] px-5 py-2 rounded-full text-sm font-semibold transition">
            CONTACT
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 space-y-4">
          <Link href="#" className="block">ABOUT US</Link>
          <Link href="#" className="block">PROJECTS</Link>
          <Link href="#" className="block">SERVICES</Link>
          <Link href="#" className="block">CONTACT</Link>

          <div className="pt-4 border-t border-gray-700">
            <p className="mb-3">+91 9133 633 327</p>
            <button className="w-full bg-[#b89a7a] py-2 rounded-full">
              CONTACT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}