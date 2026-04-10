"use client"

import QRCode from "react-qr-code"
import { Globe, Phone, Mail } from "lucide-react"
import { FaInstagram } from "react-icons/fa";

export default function EpoqueCardBack() {
  return (
    <div className="w-full h-full rounded-2xl p-[1.5px] 
      bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 shadow-[0_25px_70px_rgba(0,0,0,0.6)]">

      <div className="w-full h-full rounded-2xl px-6 py-6 
        bg-black/80 backdrop-blur-xl flex flex-col items-center justify-between text-center text-white">

        {/* 🔥 Brand */}
        <div>
          <img src="/logo.png" alt="" />
        </div>

        {/* 🔥 Tagline */}
        <p className="text-[15px] text-yellow-400 leading-relaxed max-w-[240px]">
          Performance-driven marketing & high-quality lead systems
        </p>

        {/* 🔥 QR Codes */}
        <div className="flex gap-6 items-center justify-center">

         

        <div className="flex flex-col items-center gap-1">
  <div className="bg-white p-2 rounded-xl shadow-md">
    <QRCode value="https://instagram.com/epoque.digital" size={75} />
  </div>

  <div className="flex items-center gap-1 text-[10px] text-gray-400">
    <FaInstagram className="text-pink-500 text-xs" />
    <span>Instagram</span>
  </div>
</div>

        </div>

        {/* 🔥 Contact */}
        <div className="space-y-2 text-xs text-gray-300">

          <p className="font-medium text-white tracking-wide">
           902, C 3, 9th Floor, Sattva Magnus Commercial Building Shaikpet, Jubilee Hills, Hyderabad, Telangana 500008
          </p>
         

        <div className="flex items-center justify-center gap-2 text-yellow-400 animate-pulse font-semibold">
  <Phone size={13} className="animate-pulse" />
  <span className="drop-shadow-[0_0_8px_rgba(255,255,0,0.8)]">
    +91 9133 633 327
  </span>
</div>

          <div className="flex items-center justify-center gap-2">
            <Mail size={13} />
            <span>sales@epoquegroup.in</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Globe size={13} />
            <span>epoquegroup.in</span>
          </div>

        </div>

        {/* 🔥 Services (Minimal Clean) */}
        <div className="text-[20px] text-orange-400 leading-relaxed">
          Real Estate • Digital Marketing • Interiors • Consulting
        </div>

      </div>
    </div>
  )
}