"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Digital",
    href: "/digital",
    dropdown: [
      { label: "Social Media Marketing", href: "/digital/social-media-marketing" },
      { label: "Search Engine Optimization", href: "/digital/search-engine-optimization" },
      { label: "Google Ads / PPC", href: "/digital/google-ads-ppc" },
      { label: "Content Marketing", href: "/digital/content-marketing" },
      { label: "Branding & Creative Services", href: "/digital/Branding-Creative-Services" },
      { label: "Lead Generation Services", href: "/digital/Lead-Generation-Services" },
    ],
  },
  { label: "Realty", href: "/realty" },
  { label: "Interiors", href: "/interiors" },
  { label: "Revenue", href: "/revenue" },
  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 text-white backdrop-blur-xl border-b border-white/10">

      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Epoque Group Logo"
            width={140}
            height={140}
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {

            if (item.dropdown) {
              return (
                <li key={item.label} className="relative group">

                  <div className="flex items-center gap-1 cursor-pointer uppercase text-sm font-semibold tracking-wider hover:text-[#C79A3B] transition">
                    {item.label}
                    <ChevronDown size={16} />
                  </div>

                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-72 bg-black border border-white/10 rounded-xl shadow-2xl py-4">
                      <ul>
                        {item.dropdown.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              className={`block px-6 py-3 text-[22] transition
                                ${pathname === sub.href
                                  ? "text-[#C79A3B] bg-white/5"
                                  : "text-gray-300 hover:text-[#C79A3B] hover:bg-white/5"
                                }`}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </li>
              )
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`uppercase text-sm font-semibold tracking-wider transition
                    ${pathname === item.href
                      ? "text-[#C79A3B]"
                      : "hover:text-[#C79A3B]"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* ✅ ACCESSIBLE MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>

      </nav>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden bg-black ${open ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col px-6 gap-6">

          {navItems.map((item) => {

            if (item.dropdown) {
              return (
                <li key={item.label}>
                  <button
                    onClick={() => setMobileDropdown(!mobileDropdown)}
                    aria-label="Toggle Digital submenu"
                    aria-expanded={mobileDropdown}
                    className="flex items-center justify-between w-full uppercase text-sm font-semibold tracking-wider"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${mobileDropdown ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${mobileDropdown ? "max-h-96 mt-4" : "max-h-0"
                      }`}
                  >
                    <ul className="flex flex-col gap-4 pl-4">
                      {item.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            className={`block text-sm transition ${pathname === sub.href
                              ? "text-[#C79A3B]"
                              : "text-gray-300 hover:text-[#C79A3B]"
                              }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`uppercase text-sm font-semibold tracking-wider transition ${pathname === item.href
                    ? "text-[#C79A3B]"
                    : "hover:text-[#C79A3B]"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}

        </ul>
      </div>

    </header>
  )
}
