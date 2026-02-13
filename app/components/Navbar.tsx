"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Digital", href: "/digital" },
  { label: "Realty", href: "/realty" },
  { label: "Interiors", href: "/interiors" },
  { label: "Revenue", href: "/revenue" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className="
        fixed top-0 w-full z-50
        bg-black/95 text-white
        backdrop-blur-xl
        border-b border-white/10
        transition-all duration-500 ease-in-out
      "
    >
      <nav className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="relative group hover:scale-105 transition-transform duration-500"
        >
          {/* Glow */}
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-40" />

          <Image
            src="/logo.png"
            alt="Époque Group logo"
            width={150}
            height={150}
            priority
            className="relative z-10"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`
                    relative text-[15px] font-semibold uppercase tracking-wider
                    text-white
                    transition-all duration-300 ease-in-out
                  `}
                >
                  {item.label}

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[2px] w-full
                      bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                      transition-transform duration-500 ease-out
                      ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                      origin-left
                    `}
                  />

                  {/* GLOW */}
                  <span
                    className={`
                      absolute left-0 -bottom-2 h-[6px] w-full
                      bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                      blur-md opacity-0
                      transition-all duration-500
                      ${active ? "opacity-60 scale-x-100" : "group-hover:opacity-40 group-hover:scale-x-100"}
                      scale-x-0 origin-left
                    `}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden focus:outline-none"
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
        className={`
          md:hidden overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
          bg-black
          border-t border-white/10
        `}
      >
        <ul className="flex flex-col px-8 py-10 gap-8">
          {navItems.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  text-base font-semibold uppercase tracking-wider
                  text-white
                  transition-all duration-300
                  group-hover:text-[#C79A3B]
                "
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
