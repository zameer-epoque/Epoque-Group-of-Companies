"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  FileText,
} from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] text-white overflow-hidden">

      {/* Premium Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1200px] h-[1200px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[260px]" />
      </div>

      {/* Gradient CTA Section */}
      <div className="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-wide">
            Ready to Build Something Exceptional?
          </h2>

          <Link
            href="/contact"
            className="px-10 py-3 rounded-full bg-black text-white font-semibold tracking-wide hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          >
            Start a Conversation →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid gap-16 md:grid-cols-4">

        {/* BRAND */}
        <div className="space-y-6">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={170}
            height={170}
            priority
            className="transition-all duration-700 hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(249,115,22,0.5)]"
          />

          <p className="text-gray-400 leading-relaxed text-sm tracking-wide">
            Bridging Creativity, Commerce & Culture through real estate,
            interiors, digital innovation, and strategic growth architecture.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-8 text-orange-400">
            Contact Info
          </h3>

          <div className="space-y-6 text-gray-400 text-sm">
            <p className="flex gap-3 items-start hover:text-white transition duration-300">
              <MapPin size={18} className="text-orange-400 mt-1" />
              902, Office No C3, Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills, Hyderabad
            </p>
            <p className="flex gap-3 items-center hover:text-white transition duration-300">
              <Phone size={18} className="text-orange-400" />
              +91 9133 633 327
            </p>
            <p className="flex gap-3 items-center hover:text-white transition duration-300">
              <Mail size={18} className="text-orange-400" />
              sales@epoquegroup.in
            </p>
          </div>
        </div>

        {/* DIVISIONS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-8 text-orange-400">
            Our Divisions
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/digital" className="hover:text-orange-400 transition">Digital</Link></li>
            <li><Link href="/Realty" className="hover:text-orange-400 transition">Realty</Link></li>
            <li><Link href="/interiors" className="hover:text-orange-400 transition">Interiors</Link></li>
            <li><Link href="/revenue" className="hover:text-orange-400 transition">Revenue</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-8 text-orange-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-orange-400 transition">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Connect */}
      <div className="relative border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-sm uppercase tracking-widest text-orange-400 mb-10">
            Connect With Us
          </h3>

          <div className="flex justify-center flex-wrap gap-6">

            <a href="https://www.linkedin.com/company/epoquegroupofcompany"
              className="p-4 rounded-full bg-[#111827] hover:bg-[#0A66C2] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(10,102,194,0.6)]">
              <Linkedin size={20} />
            </a>

            <a href="https://www.instagram.com/epoque.digital/"
              className="p-4 rounded-full bg-[#111827] hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 transition-all duration-500 hover:scale-110">
              <Instagram size={20} />
            </a>

            <a href="https://www.facebook.com/EpoqueGroupOfCompanies"
              className="p-4 rounded-full bg-[#111827] hover:bg-[#1877F2] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(24,119,242,0.6)]">
              <Facebook size={20} />
            </a>

            <a href="#"
              className="p-4 rounded-full bg-[#111827] hover:bg-[#FF0000] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,0,0,0.6)]">
              <Youtube size={20} />
            </a>

            <a href="#"
              className="p-4 rounded-full bg-[#111827] hover:bg-[#25D366] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.6)]">
              <FaWhatsapp size={20} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 tracking-wide">
          <span>© 2026 Epoque Group of Companies. All Rights Reserved.</span>

          <span className="flex items-center gap-2">
            <FileText size={14} />
            Designed for Epoque Group of Companies
          </span>
        </div>
      </div>

    </footer>
  )
}
