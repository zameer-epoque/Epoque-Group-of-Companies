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
    <footer
      className="relative bg-[#0B0B0F] text-white overflow-hidden"
      aria-label="Epoque Group Footer - Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[220px]" />
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-semibold text-black tracking-wide leading-snug">
            Looking for Villas, Plots, Digital Growth or Interior Design in Hyderabad?
          </h2>

          <Link
            href="/contact"
            className="px-8 md:px-10 py-3 rounded-full bg-black text-white text-sm md:text-base font-semibold tracking-wide hover:scale-105 transition-all duration-500 shadow-xl"
          >
            Talk to Our Experts →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid gap-12 md:gap-16 sm:grid-cols-2 md:grid-cols-4">

        {/* BRAND */}
        <div className="space-y-6 text-center sm:text-left">
          <Image
            src="/logo.png"
            alt="Epoque Group Hyderabad Real Estate and Digital Marketing Company Logo"
            width={150}
            height={150}
            priority
            className="mx-auto sm:mx-0 transition-all duration-700 hover:scale-105"
          />

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Epoque Group is a Hyderabad-based enterprise specializing in
            luxury villas, HMDA approved plots, premium interior design,
            digital marketing services, and structured revenue consulting.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Hyderabad Office
          </h3>

          <div className="space-y-5 text-gray-400 text-sm md:text-base">

            {/* CLICKABLE MAP ADDRESS */}
            <a
              href="https://maps.app.goo.gl/acFCSESy77kyZh7e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-start hover:text-white transition cursor-pointer"
            >
              <MapPin size={18} className="text-orange-400 mt-1" />
              902, Office No C3, Sattva Magnus Commercial Building,
              Shaikpet, Jubilee Hills, Hyderabad, Telangana, India
            </a>

            <a
              href="tel:+919133633327"
              className="flex gap-3 items-center hover:text-white transition"
            >
              <Phone size={18} className="text-orange-400" />
              +91 9133 633 327
            </a>

            <a
              href="mailto:sales@epoquegroup.in"
              className="flex gap-3 items-center hover:text-white transition"
            >
              <Mail size={18} className="text-orange-400" />
              sales@epoquegroup.in
            </a>

          </div>
        </div>

        {/* DIVISIONS */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Our Services
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm md:text-base">
            <li><Link href="/realty" className="hover:text-orange-400 transition">Real Estate – Villas & Plots</Link></li>
            <li><Link href="/digital" className="hover:text-orange-400 transition">Digital Marketing & SEO</Link></li>
            <li><Link href="/interiors" className="hover:text-orange-400 transition">Luxury Interior Design</Link></li>
            <li><Link href="/revenue" className="hover:text-orange-400 transition">Business Consulting</Link></li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400 text-sm md:text-base">
            <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
            <li><Link href="/contact" className="hover:text-orange-400 transition">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-orange-400 transition">Terms</Link></li>
          </ul>
        </div>
      </div>

      {/* GOOGLE MAP EMBED */}


      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs md:text-sm text-gray-500">
          © 2026 Epoque Group of Companies | Real Estate, Interiors & Digital Marketing in Hyderabad
        </div>
      </div>

    </footer>
  )
}
