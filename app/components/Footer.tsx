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
    <footer className="bg-[#0F0F0F] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-32 grid gap-20 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <Image
            src="/logo.png"
            alt="Époque Group logo"
            width={160}
            height={160}
            priority
            className="transition-transform duration-300 hover:scale-105"
          />

          <p className="mt-8 text-gray-400 text-base leading-relaxed max-w-sm">
            Bridging Creativity, Commerce & Culture. We transform visions into
            reality through innovation, design, and strategic excellence.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-10 flex gap-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-[#C79A3B] transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-[#D45B5B] transition-all duration-300 hover:-translate-y-1"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-8">
            Contact Info
          </h3>

          <div className="space-y-6 text-base text-gray-400">
            <p className="flex items-start gap-4">
              <MapPin size={18} className="mt-1 text-[#C79A3B]" />
              902, Office No C3, Sattva Magnus Commercial Building, Shaikpet,
              Jubilee Hills, Hyderabad
            </p>

            <p className="flex items-center gap-4 hover:text-[#C79A3B] transition">
              <Phone size={18} />
              +91 9133 633 327
            </p>

            <p className="flex items-center gap-4 hover:text-[#C79A3B] transition">
              <Mail size={18} />
              sales@epoquegroup.in
            </p>
          </div>
        </div>

        {/* OUR DIVISIONS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-8">
            Our Divisions
          </h3>

          <ul className="space-y-5 text-base">
            {[
              "Époque Digital",
              "Époque Realty",
              "Époque Interiors",
              "Revenue Architects",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-[#C79A3B] hover:translate-x-2 cursor-pointer"
              >
                <ArrowRight size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-8">
            Quick Links
          </h3>

          <ul className="space-y-5 text-base">
            {[
              { label: "Home", href: "/" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 transition-all duration-300 hover:text-[#C79A3B] hover:translate-x-2"
                >
                  <ArrowRight size={16} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
          <span>© 2026 Époque Group. All Rights Reserved.</span>

          <div className="flex gap-8">
            <Link
              href="/privacy-policy"
              className="hover:text-[#C79A3B] transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="flex items-center gap-2 hover:text-[#C79A3B] transition"
            >
              <FileText size={16} />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
