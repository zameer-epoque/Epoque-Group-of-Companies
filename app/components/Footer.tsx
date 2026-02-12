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
        <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[220px]" />
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-semibold text-black tracking-wide leading-snug">
            Ready to Build Something Exceptional?
          </h2>

          <Link
            href="/contact"
            className="px-8 md:px-10 py-3 rounded-full bg-black text-white text-sm md:text-base font-semibold tracking-wide hover:scale-105 transition-all duration-500 shadow-xl"
          >
            Start a Conversation →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid gap-12 md:gap-16 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND */}
        <div className="space-y-6 text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={150}
            height={150}
            priority
            className="mx-auto sm:mx-0 transition-all duration-700 hover:scale-105"
          />

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Bridging Creativity, Commerce & Culture through real estate,
            interiors, digital innovation, and strategic growth architecture.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Contact Info
          </h3>

          <div className="space-y-5 text-gray-400 text-sm md:text-base">
            <p className="flex gap-3 items-start hover:text-white transition">
              <MapPin size={18} className="text-orange-400 mt-1" />
              902, Office No C3, Sattva Magnus Commercial Building, Shaikpet, Jubilee Hills, Hyderabad
            </p>

            <p className="flex gap-3 items-center hover:text-white transition">
              <Phone size={18} className="text-orange-400" />
              +91 9133 633 327
            </p>

            <p className="flex gap-3 items-center hover:text-white transition">
              <Mail size={18} className="text-orange-400" />
              sales@epoquegroup.in
            </p>
          </div>
        </div>

        {/* DIVISIONS */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Our Divisions
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm md:text-base">
            <li><Link href="/digital" className="hover:text-orange-400 transition">Digital</Link></li>
            <li><Link href="/realty" className="hover:text-orange-400 transition">Realty</Link></li>
            <li><Link href="/interiors" className="hover:text-orange-400 transition">Interiors</Link></li>
            <li><Link href="/revenue" className="hover:text-orange-400 transition">Revenue</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm md:text-base">
            <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-orange-400 transition">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Section */}
      <div className="relative border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-xs md:text-sm uppercase tracking-widest text-orange-400 mb-8">
            Connect With Us
          </h3>

          <div className="flex justify-center flex-wrap gap-5">
            {[
              { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/epoquegroupofcompany" },
              { icon: <Instagram size={18} />, link: "https://www.instagram.com/epoque.digital/" },
              { icon: <Facebook size={18} />, link: "https://www.facebook.com/EpoqueGroupOfCompanies" },
              { icon: <Youtube size={18} />, link: "#" },
              { icon: <FaWhatsapp size={18} />, link: "#" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="p-3 md:p-4 rounded-full bg-[#111827] hover:scale-110 transition-all duration-500 hover:shadow-lg"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-gray-500">
          <span className="text-center md:text-left">
            © 2026 Epoque Group of Companies. All Rights Reserved.
          </span>

          <span className="flex items-center gap-2">
            <FileText size={14} />
            Designed for Epoque Group of Companies
          </span>
        </div>
      </div>

    </footer>
  )
}
