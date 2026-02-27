// "use client"

// import { useEffect, useState } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { ChevronDown } from "lucide-react"

// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-epoque-group" },
//   {
//     label: "Digital",
//     href: "/digital",
//     dropdown: [
//       { label: "Digital Marketing Hyderabad", href: "/digital/best-digital-marketing-agency-in-hyderabad" },
//       { label: "Social Media Marketing", href: "/digital/social-media-marketing-hyderabad-india" },
//       { label: "Search Engine Optimization", href: "/digital/search-engine-optimization" },
//       { label: "Google Ads / PPC", href: "/digital/google-ads-ppc" },
//       { label: "Content Marketing", href: "/digital/content-marketing" },
//       { label: "Branding & Creative Services", href: "/digital/Branding-Creative-Services" },
//       { label: "Lead Generation Services", href: "/digital/Lead-Generation-Services" },
//     ],
//   },

//   {
//     label: "REALTY",
//     href: "/realty",
//     dropdown: [
//       { label: "Real Estate Sales Strategy", href: "/realty/real-estate-sales-strategy" },
//       { label: "Luxury Villa Marketing", href: "/realty/luxury-villa-marketing" },
//       { label: "Property Lead Generation", href: "/realty/property-lead-generation" },
//       { label: "Real Estate Branding", href: "/realty/real-estate-branding" },
//       { label: "Project Launch Marketing", href: "/realty/project-launch-marketing" },
//       { label: "Digital Marketing for Builders", href: "/realty/digital-marketing-for-builders" },
//     ],
//   },

//   {
//     label: "Interiors",
//     href: "/interiors",
//     dropdown: [
//       { label: "Interior Designers in Hyderabad", href: "/interiors/interior-designers-in-hyderabad" },
//       { label: "Luxury Interior Design", href: "/interiors/luxury-interior-design" },
//       { label: "Commercial Interior Design", href: "/interiors/commercial-interior-design" },
//       { label: "Residential Interior Design", href: "/interiors/residential-interior-designers-in-hyderabad" },

//       { label: "Turnkey Interior Solutions", href: "/interiors/turnkey-interior-solutions" },
//     ],
//   },
//   {
//     label: "Revenue",
//     href: "/revenue/sales-funnel-building",
//     dropdown: [
//       { label: "Sales Funnel Building", href: "/revenue/sales-funnel-building" },
//       { label: "Conversion Rate Optimization", href: "/revenue/conversion-rate-optimization" },
//       { label: "Marketing Automation", href: "/revenue/marketing-automation" },
//       { label: "Revenue Growth Consulting", href: "/revenue/revenue-growth-consulting" },
//       { label: "B2B Lead Generation", href: "/revenue/b2b-lead-generation" },
//     ],
//   },
//   { label: "Our Clients", href: "/real-estate-digital-marketing-projects-epoque-group" },
//   { label: "Faq", href: "/faq" },
//   { label: "Contact", href: "/contact" },
// ]

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
//   const pathname = usePathname()

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : ""
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [open])

//   const isActiveParent = (item: any) => {
//     if (!item.dropdown) return pathname === item.href
//     return pathname.startsWith(item.href)
//   }

//   return (
//     <header className="fixed top-0 w-full z-50 bg-black/95 text-white backdrop-blur-xl border-b border-white/10">
//       <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

//         {/* LOGO */}
//         <Link href="/">
//           <Image
//             src="/logo.png"
//             alt="Epoque Group Logo"
//             width={140}
//             height={140}
//             priority
//           />
//         </Link>

//         {/* DESKTOP MENU */}
//         <ul className="hidden md:flex items-center gap-12">
//           {navItems.map((item) => {

//             if (item.dropdown) {
//               return (
//                 <li key={item.label} className="relative group">

//                   <div
//                     className={`flex items-center gap-1 cursor-pointer uppercase text-sm font-semibold tracking-wider transition
//                     ${isActiveParent(item)
//                         ? "text-[#C79A3B]"
//                         : "hover:text-[#C79A3B]"
//                       }`}
//                   >
//                     {item.label}
//                     <ChevronDown size={16} />
//                   </div>

//                   {/* DESKTOP DROPDOWN */}
//                   <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                     <div className="w-72 bg-black border border-white/10 rounded-xl shadow-2xl py-4">
//                       <ul>
//                         {item.dropdown.map((sub) => (
//                           <li key={sub.href}>
//                             <Link
//                               href={sub.href}
//                               className={`block px-6 py-3 text-sm transition
//                               ${pathname === sub.href
//                                   ? "text-[#C79A3B] bg-white/5"
//                                   : "text-gray-300 hover:text-[#C79A3B] hover:bg-white/5"
//                                 }`}
//                             >
//                               {sub.label}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>

//                 </li>
//               )
//             }

//             return (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={`uppercase text-sm font-semibold tracking-wider transition
//                   ${pathname === item.href
//                       ? "text-[#C79A3B]"
//                       : "hover:text-[#C79A3B]"
//                     }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             )
//           })}
//         </ul>

//         {/* MOBILE HAMBURGER */}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-label={open ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={open}
//           className="md:hidden flex flex-col gap-1"
//         >
//           <span className="w-6 h-[2px] bg-white" />
//           <span className="w-6 h-[2px] bg-white" />
//           <span className="w-6 h-[2px] bg-white" />
//         </button>

//       </nav>

//       {/* MOBILE MENU */}
//       <div
//         className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden bg-black
//         ${open ? "max-h-[1000px] opacity-100 py-6" : "max-h-0 opacity-0"}`}
//       >
//         <ul className="flex flex-col px-6 gap-6">

//           {navItems.map((item) => {

//             if (item.dropdown) {
//               return (
//                 <li key={item.label}>
//                   <button
//                     onClick={() =>
//                       setMobileDropdown(
//                         mobileDropdown === item.label ? null : item.label
//                       )
//                     }
//                     aria-expanded={mobileDropdown === item.label}
//                     className="flex items-center justify-between w-full uppercase text-sm font-semibold tracking-wider"
//                   >
//                     {item.label}
//                     <ChevronDown
//                       size={18}
//                       className={`transition-transform duration-300
//                       ${mobileDropdown === item.label ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   <div
//                     className={`transition-all duration-500 overflow-hidden
//                     ${mobileDropdown === item.label ? "max-h-96 mt-4" : "max-h-0"}`}
//                   >
//                     <ul className="flex flex-col gap-4 pl-4">
//                       {item.dropdown.map((sub) => (
//                         <li key={sub.href}>
//                           <Link
//                             href={sub.href}
//                             onClick={() => {
//                               setOpen(false)
//                               setMobileDropdown(null)
//                             }}
//                             className={`block text-sm transition
//                             ${pathname === sub.href
//                                 ? "text-[#C79A3B]"
//                                 : "text-gray-300 hover:text-[#C79A3B]"
//                               }`}
//                           >
//                             {sub.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               )
//             }

//             return (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   onClick={() => setOpen(false)}
//                   className={`uppercase text-sm font-semibold tracking-wider transition
//                   ${pathname === item.href
//                       ? "text-[#C79A3B]"
//                       : "hover:text-[#C79A3B]"
//                     }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             )
//           })}

//         </ul>
//       </div>
//     </header>
//   )
// }



"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

interface SimpleDropdownItem {
  label: string
  href: string
}

interface GroupDropdownItem {
  title: string
  items: SimpleDropdownItem[]
}

type DropdownItem = SimpleDropdownItem | GroupDropdownItem

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-epoque-group" },

  {
    label: "Digital",
    href: "/digital",
    dropdown: [
      { label: "Digital Marketing Hyderabad", href: "/digital/best-digital-marketing-agency-in-hyderabad" },
      { label: "Social Media Marketing", href: "/digital/social-media-marketing-hyderabad-india" },
      { label: "Search Engine Optimization", href: "/digital/search-engine-optimization" },
      { label: "Google Ads / PPC", href: "/digital/google-ads-ppc" },
      { label: "Content Marketing", href: "/digital/content-marketing" },
      { label: "Branding & Creative Services", href: "/digital/branding-creative-services" },
      { label: "Lead Generation Services", href: "/digital/lead-generation-services" },
    ],
  },

  {
    label: "REALTY",
    href: "/realty",
    dropdown: [
      { label: "Real Estate Sales Strategy", href: "/realty/real-estate-sales-strategy" },
      { label: "Luxury Villa Marketing", href: "/realty/luxury-villa-marketing" },
      { label: "Property Lead Generation", href: "/realty/property-lead-generation" },
      { label: "Real Estate Branding", href: "/realty/real-estate-branding" },
      { label: "Project Launch Marketing", href: "/realty/project-launch-marketing" },
      { label: "Digital Marketing for Builders", href: "/realty/digital-marketing-for-builders" },
    ],
  },

  {
    label: "Interiors",
    href: "/interiors",
    dropdown: [
      { label: "Interior Designers in Hyderabad", href: "/interiors/interior-designers-in-hyderabad" },
      { label: "Luxury Interior Design", href: "/interiors/luxury-interior-design" },
      { label: "Commercial Interior Design", href: "/interiors/commercial-interior-design" },
      { label: "Residential Interior Design", href: "/interiors/residential-interior-designers-in-hyderabad" },
      { label: "Turnkey Interior Solutions", href: "/interiors/turnkey-interior-solutions" },
    ],
  },

  {
    label: "Revenue",
    href: "/revenue/sales-funnel-building",
    dropdown: [
      { label: "Sales Funnel Building", href: "/revenue/sales-funnel-building" },
      { label: "Conversion Rate Optimization", href: "/revenue/conversion-rate-optimization" },
      { label: "Marketing Automation", href: "/revenue/marketing-automation" },
      { label: "Revenue Growth Consulting", href: "/revenue/revenue-growth-consulting" },
      { label: "B2B Lead Generation", href: "/revenue/b2b-lead-generation" },
    ],
  },

  {
    label: "Explore",
    href: "/company",
    dropdown: [
      { label: "Our Clients", href: "/real-estate-digital-marketing-projects-epoque-group" },
      { label: "Blogs", href: "/blog-epoque-group" },
      { label: "FAQ", href: "/faq" },
      { label: "Career", href: "/Career" },
      { label: "Blogs", href: "/blog-epoque-group" },


    ],
  },



  { label: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  const isActiveParent = (item: NavItem) => {
    if (!item.dropdown) return pathname === item.href
    return pathname.startsWith(item.href)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-black/95 text-white backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={140} height={140} priority />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              {!item.dropdown ? (
                <Link
                  href={item.href}
                  className={`uppercase text-sm font-semibold transition ${pathname === item.href ? "text-[#C79A3B]" : "hover:text-[#C79A3B]"
                    }`}
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <div
                    className={`flex items-center gap-1 cursor-pointer uppercase text-sm font-semibold ${isActiveParent(item) ? "text-[#C79A3B]" : "hover:text-[#C79A3B]"
                      }`}
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </div>

                  <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-72 bg-black border border-white/10 rounded-xl shadow-2xl py-4">
                      <ul>
                        {item.dropdown.map((sub, i) => {
                          if ("items" in sub) {
                            return (
                              <div key={i}>
                                <h4 className="text-[#C79A3B] text-xs font-semibold px-6 pt-3 uppercase">
                                  {sub.title}
                                </h4>

                                {sub.items.map((inner, j) => (
                                  <li key={j}>
                                    <Link
                                      href={inner.href}
                                      className="block px-6 py-3 text-sm text-gray-300 hover:text-[#C79A3B] hover:bg-white/5"
                                    >
                                      {inner.label}
                                    </Link>
                                  </li>
                                ))}
                              </div>
                            )
                          }

                          return (
                            <li key={i}>
                              <Link
                                href={sub.href}
                                className="block px-6 py-3 text-sm text-gray-300 hover:text-[#C79A3B] hover:bg-white/5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
          <span className="w-6 h-[2px] bg-white" />
        </button>

      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-black border-t border-white/10 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              {!item.dropdown ? (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block uppercase text-sm font-semibold py-2"
                >
                  {item.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === index ? null : index
                      )
                    }
                    className="flex justify-between items-center w-full uppercase text-sm font-semibold py-2"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition ${mobileDropdown === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {mobileDropdown === index && (
                    <ul className="pl-4 mt-2 space-y-2">
                      {item.dropdown.map((sub, i) => {
                        if ("items" in sub) {
                          return (
                            <div key={i}>
                              <p className="text-[#C79A3B] text-xs uppercase mt-2">
                                {sub.title}
                              </p>

                              {sub.items.map((inner, j) => (
                                <li key={j}>
                                  <Link
                                    href={inner.href}
                                    onClick={() => setOpen(false)}
                                    className="block text-sm text-gray-400 py-1"
                                  >
                                    {inner.label}
                                  </Link>
                                </li>
                              ))}
                            </div>
                          )
                        }

                        return (
                          <li key={i}>
                            <Link
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className="block text-sm text-gray-400 py-1"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}