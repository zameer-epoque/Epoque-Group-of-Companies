"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const navItems = ["Home", "Digital", "Realty", "Interiors", "Revenue", "Contact"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-black border-b border-white/10">
      <nav
        className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="relative group hover:scale-105 transition-transform duration-300"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
          <Image
            src="/logo.png"
            alt="epoque group logo"
            width={150}
            height={150}
            priority
            className="relative z-10"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-[15px] font-semibold uppercase tracking-wider text-gray-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#C79A3B] group-hover:via-[#D45B5B] group-hover:to-[#7A2E63] group-hover:bg-clip-text group-hover:text-transparent"
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
            <span className="block h-[2px] w-6 bg-white" />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-black border-t border-white/10`}
      >
        <ul className="flex flex-col px-8 py-8 gap-8">
          {navItems.map((item) => (
            <li key={item} className="relative group w-fit">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-base font-semibold uppercase tracking-wider text-gray-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#C79A3B] group-hover:via-[#D45B5B] group-hover:to-[#7A2E63] group-hover:bg-clip-text group-hover:text-transparent"
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
