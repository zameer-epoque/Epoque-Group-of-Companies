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

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <nav
        className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between"
        aria-label="Primary Navigation"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="relative group hover:scale-105 transition-transform duration-300"
          aria-label="Époque Group Home"
        >
          <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-40" />
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
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <li key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`text-[15px] font-semibold uppercase tracking-wider transition-all duration-300
                    ${active
                      ? "bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent"
                      : "text-gray-300 group-hover:bg-gradient-to-r group-hover:from-[#C79A3B] group-hover:via-[#D45B5B] group-hover:to-[#7A2E63] group-hover:bg-clip-text group-hover:text-transparent"
                    }
                  `}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>

                {/* UNDERLINE */}
                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </li>
            )
          })}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C79A3B]"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          } bg-black border-t border-white/10`}
      >
        <ul className="flex flex-col px-8 py-10 gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href

            return (
              <li key={item.href} className="relative group w-fit">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`text-base font-semibold uppercase tracking-wider transition-all duration-300
                    ${active
                      ? "bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent"
                      : "text-gray-300 group-hover:bg-gradient-to-r group-hover:from-[#C79A3B] group-hover:via-[#D45B5B] group-hover:to-[#7A2E63] group-hover:bg-clip-text group-hover:text-transparent"
                    }
                  `}
                >
                  {item.label}
                </Link>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-300
                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
