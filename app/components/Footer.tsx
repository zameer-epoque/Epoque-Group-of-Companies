"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  FileText,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] text-white overflow-hidden">

      {/* Premium Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1200px] h-[1200px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[260px]" />
      </div>

      {/* Gradient CTA Section */}
      <div className="relative bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] py-14">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-wide">
            Ready to Build Something Exceptional?
          </h2>

          <Link
            href="/contact"
            className="px-10 py-3 rounded-full bg-black text-white font-semibold tracking-wide hover:scale-105 transition-all duration-500 shadow-xl"
          >
            Start a Conversation →
          </Link>

        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-4">

        {/* BRAND */}
        <div className="space-y-6">
          <div className="relative inline-block group">
            <Image
              src="/logo.png"
              alt="Époque Group logo"
              width={160}
              height={160}
              priority
              className="transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-2xl bg-gradient-to-r from-[#C79A3B]/30 via-[#D45B5B]/30 to-[#7A2E63]/30" />
          </div>

          <p className="text-gray-400 leading-relaxed text-sm">
            Bridging Creativity, Commerce & Culture through real estate,
            interiors, digital innovation, and strategic growth architecture.
          </p>

          <div className="flex gap-6 pt-4">
            <a className="text-gray-500 hover:text-[#C79A3B] hover:-translate-y-1 transition-all duration-500">
              <Linkedin size={22} />
            </a>
            <a className="text-gray-500 hover:text-[#D45B5B] hover:-translate-y-1 transition-all duration-500">
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest mb-8 text-[#C79A3B]">
            Contact Info
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B]" />
          </h3>

          <div className="space-y-6 text-gray-400 text-sm">
            <p className="flex gap-3">
              <MapPin size={18} className="text-[#C79A3B]" />
              Jubilee Hills, Hyderabad
            </p>
            <p className="flex gap-3 hover:text-[#C79A3B] transition duration-300">
              <Phone size={18} />
              +91 9133 633 327
            </p>
            <p className="flex gap-3 hover:text-[#C79A3B] transition duration-300">
              <Mail size={18} />
              sales@epoquegroup.in
            </p>
          </div>
        </div>

        {/* DIVISIONS */}
        <div>
          <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest mb-8 text-[#C79A3B]">
            Our Divisions
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B]" />
          </h3>

          <ul className="space-y-4 text-sm">
            {[
              { label: "Époque Digital", href: "/digital" },
              { label: "Époque Realty", href: "/Realty" },
              { label: "Époque Interiors", href: "/interiors" },
              { label: "Revenue Architects", href: "/revenue" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-500"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-all duration-500"
                  />
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] group-hover:w-full transition-all duration-500" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="relative inline-block text-sm font-semibold uppercase tracking-widest mb-8 text-[#C79A3B]">
            Quick Links
            <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B]" />
          </h3>

          <ul className="space-y-4 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-500"
                >
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-all duration-500"
                  />
                  <span className="relative">
                    {item.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] group-hover:w-full transition-all duration-500" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2026 Époque Group. All Rights Reserved.</span>

          <span className="flex items-center gap-2 tracking-wide">
            <FileText size={14} />
            Designed for Strategic Excellence
          </span>
        </div>
      </div>

    </footer>
  )
}
