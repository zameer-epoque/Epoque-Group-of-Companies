


// import Image from "next/image"
// import {
//   Linkedin,
//   Instagram,
//   Facebook,
//   MapPin,
//   Phone,
//   Mail,
//   Youtube,
// } from "lucide-react"
// import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"

// export default function Footer() {
//   return (
//     <footer
//       className="relative bg-[#0B0B0F] text-white overflow-hidden"
//       aria-label="Epoque Group Footer - Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
//     >

//       {/* ===== TOP YELLOW GRADIENT LINE ===== */}
//       <div className="absolute top-0 left-0 w-full h-[4px] 
//       bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 
//       shadow-[0_0_20px_rgba(255,200,0,0.6)]" />

//       {/* Background Glow */}
//       <div className="absolute inset-0 flex justify-center pointer-events-none">
//         <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[220px]" />
//       </div>

//       {/* Main Footer */}
//       <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 grid gap-12 md:gap-16 sm:grid-cols-2 md:grid-cols-4">

//         {/* BRAND */}
//         <div className="space-y-6 text-center sm:text-left">
//           <Image
//             src="/logo.png"
//             alt="Epoque Group Logo"
//             width={150}
//             height={150}
//             priority
//             className="mx-auto sm:mx-0 transition-all duration-700 hover:scale-105"
//           />

//           <p className="text-white/80 text-sm md:text-base leading-relaxed">
//          Époque Group is a Hyderabad-based Lead Augmentation enterprise specializing in performance-driven marketing, structured lead conversion systems, and the delivery of high intent, qualified enquiries.
//           </p>

//           {/* ===== SOCIAL MEDIA ===== */}
//           <div className="flex justify-center sm:justify-start gap-4 pt-4">

//             {/* Instagram */}
//             <a
//               href="https://www.instagram.com/epoque.digital/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//     bg-white/10 hover:bg-pink-600 active:bg-pink-600 
//     hover:scale-110 active:scale-95
//     transition-all duration-300"
//             >
//               <Instagram size={26} />
//             </a>

//             {/* Facebook */}
//             <a
//               href="https://www.facebook.com/EpoqueGroupOfCompanies"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//     bg-white/10 hover:bg-blue-600 active:bg-blue-600
//     hover:scale-110 active:scale-95
//     transition-all duration-300"
//             >
//               <Facebook size={26} />
//             </a>

//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/company/epoquegroupofcompany/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//     bg-white/10 hover:bg-blue-700 active:bg-blue-700
//     hover:scale-110 active:scale-95
//     transition-all duration-300"
//             >
//               <Linkedin size={26} />
//             </a>

//             {/* X (Twitter) */}
//             <a
//               href="https://x.com/EpoqueGroup"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="X (Twitter)"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//     bg-white/10 hover:bg-gray-800 active:bg-gray-800
//     hover:scale-110 active:scale-95
//     transition-all duration-300"
//             >
//               <FaXTwitter size={26} />
//             </a>

//             {/* YouTube */}
//             <a
//               href="https://youtube.com/@epoquegroupofcompanies/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//     bg-white/10 hover:bg-red-600 active:bg-red-600
//     hover:scale-110 active:scale-95
//     transition-all duration-300"
//             >
//               <Youtube size={26} />
//             </a>

//             <a
//               href="https://wa.me/919133633327?text=Hello%20%C3%89poque%20Group,%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details."
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="WhatsApp"
//               className="w-10 h-10 flex items-center justify-center rounded-full 
//   bg-white/10 hover:bg-green-600 active:bg-green-600
//   hover:scale-110 active:scale-95
//   transition-all duration-300"
//             >
//               <FaWhatsapp size={26} />
//             </a>

//           </div>

//         </div>

//         {/* CONTACT */}
//         <div>
//           <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
//             Hyderabad Office
//           </h3>

//           <div className="space-y-5 text-white/80 text-sm md:text-base">

//             <a
//               href="https://maps.app.goo.gl/acFCSESy77kyZh7e6"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex gap-3 items-start hover:text-white transition"
//             >
//               <MapPin size={62} className="text-orange-400 mt-1" />
//               902, Office No C4, Sattva Magnus Commercial Building,
//               Shaikpet, Jubilee Hills, Hyderabad, Telangana, India
//             </a>

//             <a
//               href="tel:+919133633327"
//               className="flex gap-3 items-center hover:text-white transition"
//             >
//               <Phone size={18} className="text-orange-400" />
//               +91 9133 633 327
//             </a>

//             <a
//               href="mailto:sales@epoquegroup.in"
//               className="flex gap-3 items-center hover:text-white transition"
//             >
//               <Mail size={18} className="text-orange-400" />
//               sales@epoquegroup.in
//             </a>

//           </div>
//         </div>

//         {/* SERVICES */}
//         <div>
//           <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
//             Our Services
//           </h3>

//           <ul className="space-y-4 text-white/80 text-sm md:text-base">
//             <li>
//               <a href="/realty" className="hover:text-orange-400 transition">
//                Real Estate – Premium & Luxury Residences
//               </a>
//             </li>
//             <li>
//               <a href="/digital/best-digital-marketing-agency-in-hyderabad" className="hover:text-orange-400 transition">
//                 Digital Marketing & SEO
//               </a>
//             </li>
//             <li>
//               <a href="/interiors" className="hover:text-orange-400 transition">
//                 Luxury Interior Design
//               </a>
//             </li>
//             <li>
//               <a href="/revenue" className="hover:text-orange-400 transition">
//                 Business Consulting
//               </a>
//             </li>
//           </ul>


//         </div>

//         {/* QUICK LINKS */}
//         <div>
//           <h3 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-6 text-orange-400">
//             Quick Links
//           </h3>

//           <ul className="space-y-4 text-white/80 text-sm md:text-base">
//             <li>
//               <a href="/" className="hover:text-orange-400 transition">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/contact" className="hover:text-orange-400 transition">
//                 Contact Us
//               </a>
//             </li>
//             <li>
//               <a href="/privacy-policy" className="hover:text-orange-400 transition">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a href="/terms-of-service" className="hover:text-orange-400 transition">
//                 Terms
//               </a>
//             </li>
//           </ul>


//         </div>

//       </div>

//       {/* Bottom Bar */}
//       <div className="relative border-t border-white/10 py-6">
//         <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/80">
//   © 2026{" "}
//   <a 
//     href="https://epoquegroup.in/" 
//     target="_blank" 
//     rel="noopener noreferrer"
//     className="hover:underline"
//   >
//     Epoque Group of Companies
//   </a>{" "}
//   | Real Estate, Interiors & Digital Marketing in Hyderabad
// </div>
//       </div>

//     </footer>
//   )
// }


import Image from "next/image"
import {
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Youtube,
} from "lucide-react"
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#0B0B0F] text-white"
      aria-label="Époque Group Footer - Real Estate Marketing Agency, SEO Services, Luxury Interiors and Revenue Consulting in Hyderabad"
    >

      {/* TOP LINE */}
      <div
        className="
          absolute left-0 top-0 h-[4px] w-full
          bg-gradient-to-r
          from-[#C79A3B]
          via-[#D45B5B]
          to-[#7A2E63]
          shadow-[0_0_25px_rgba(199,154,59,0.45)]
        "
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div
          className="
            h-[1000px] w-[1000px]
            bg-gradient-to-r
            from-[#C79A3B]/10
            via-[#D45B5B]/10
            to-[#7A2E63]/10
            blur-[220px]
          "
        />
      </div>

      {/* Main Footer */}
      <div
        className="
          relative mx-auto grid max-w-7xl
          gap-14 px-6 py-16
          sm:grid-cols-2
          md:grid-cols-4
          md:gap-16 md:py-24
        "
      >

        {/* BRAND */}
        <div className="space-y-6 text-center sm:text-left">

          <Image
            src="/logo.png"
            alt="Époque Group Real Estate Marketing and Luxury Branding Company"
            width={160}
            height={160}
            priority
            className="mx-auto transition-all duration-700 hover:scale-105 sm:mx-0"
          />

          <p className="text-sm leading-relaxed text-white/75 md:text-base">
            Époque Group is a Hyderabad-based real estate marketing agency
            specializing in AI-powered lead generation, SEO services,
            luxury branding, digital marketing, premium interiors,
            conversion-focused advertising, and scalable revenue growth
            systems for modern businesses and developers.
          </p>

          {/* SEO KEYWORDS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "Real Estate SEO",
              "Lead Generation",
              "Luxury Branding",
              "AI Marketing",
              "Performance Ads",
            ].map((item, i) => (
              <span
                key={i}
                className="
                  rounded-full border border-white/10
                  bg-white/5 px-3 py-1
                  text-xs text-white/70
                  backdrop-blur-md
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* SOCIAL */}
          <div className="flex justify-center gap-4 pt-5 sm:justify-start">

            {[
              {
                href: "https://www.instagram.com/epoque.digital/",
                icon: <Instagram size={22} />,
                color: "hover:bg-pink-600",
                label: "Instagram",
              },
              {
                href: "https://www.facebook.com/EpoqueGroupOfCompanies",
                icon: <Facebook size={22} />,
                color: "hover:bg-blue-600",
                label: "Facebook",
              },
              {
                href: "https://www.linkedin.com/company/epoquegroupofcompany/",
                icon: <Linkedin size={22} />,
                color: "hover:bg-blue-700",
                label: "LinkedIn",
              },
              {
                href: "https://x.com/EpoqueGroup",
                icon: <FaXTwitter size={20} />,
                color: "hover:bg-neutral-800",
                label: "Twitter",
              },
              {
                href: "https://youtube.com/@epoquegroupofcompanies/",
                icon: <Youtube size={22} />,
                color: "hover:bg-red-600",
                label: "YouTube",
              },
              {
                href: "https://wa.me/919133633327?text=Hello%20Époque%20Group,%20I%20am%20interested%20in%20your%20services.",
                icon: <FaWhatsapp size={22} />,
                color: "hover:bg-green-600",
                label: "WhatsApp",
              },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full bg-white/10
                  transition-all duration-300
                  hover:scale-110 active:scale-95
                  ${social.color}
                `}
              >
                {social.icon}
              </a>
            ))}

          </div>

        </div>

        {/* CONTACT */}
        <div>

          <h3
            className="
              mb-6 text-sm font-semibold uppercase tracking-[0.2em]
              text-[#FFD369] md:text-base
            "
          >
            Hyderabad Office
          </h3>

          <div className="space-y-5 text-sm text-white/75 md:text-base">

            <a
              href="https://maps.app.goo.gl/acFCSESy77kyZh7e6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition hover:text-white"
            >
              <MapPin
                size={58}
                className="mt-1 text-[#FFD369]"
              />

              <span>
                902, Office No C4, Sattva Magnus Commercial Building,
                Shaikpet, Jubilee Hills, Hyderabad, Telangana, India
              </span>
            </a>

            <a
              href="tel:+919133633327"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={18} className="text-[#FFD369]" />
              +91 9133 633 327
            </a>

            <a
              href="mailto:sales@epoquegroup.in"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={18} className="text-[#FFD369]" />
              sales@epoquegroup.in
            </a>

          </div>

        </div>

        {/* SERVICES */}
        <div>

          <h3
            className="
              mb-6 text-sm font-semibold uppercase tracking-[0.2em]
              text-[#FFD369] md:text-base
            "
          >
            Our Services
          </h3>

          <ul className="space-y-4 text-sm text-white/75 md:text-base">

            <li>
              <a
                href="/realty"
                className="transition hover:text-[#FFD369]"
              >
                Luxury Villas & Premium Real Estate
              </a>
            </li>

            <li>
              <a
                href="/digital/best-digital-marketing-agency-in-hyderabad"
                className="transition hover:text-[#FFD369]"
              >
                Digital Marketing & SEO Services
              </a>
            </li>

            <li>
              <a
                href="/interiors"
                className="transition hover:text-[#FFD369]"
              >
                Luxury Interior Design Solutions
              </a>
            </li>

            <li>
              <a
                href="/revenue"
                className="transition hover:text-[#FFD369]"
              >
                Revenue Growth Consulting
              </a>
            </li>

            <li>
              <a
                href="/digital/real-estate-marketing-agency"
                className="transition hover:text-[#FFD369]"
              >
                Real Estate Lead Generation
              </a>
            </li>

          </ul>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3
            className="
              mb-6 text-sm font-semibold uppercase tracking-[0.2em]
              text-[#FFD369] md:text-base
            "
          >
            Quick Links
          </h3>

          <ul className="space-y-4 text-sm text-white/75 md:text-base">

            <li>
              <a href="/" className="transition hover:text-[#FFD369]">
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="transition hover:text-[#FFD369]"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="transition hover:text-[#FFD369]"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="/privacy-policy"
                className="transition hover:text-[#FFD369]"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="/terms-of-service"
                className="transition hover:text-[#FFD369]"
              >
                Terms & Conditions
              </a>
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10 py-6">

        <div
          className="
            mx-auto max-w-7xl
            px-6 text-center
            text-sm text-white/70
          "
        >
          © 2026{" "}

          <a
            href="https://epoquegroup.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#FFD369]"
          >
            Époque Group of Companies
          </a>

          {" "}• Real Estate Marketing, Luxury Interiors,
          SEO Services & Lead Generation Agency in Hyderabad
        </div>

      </div>

    </footer>
  )
}