// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: "Home", link: "/" },
//     { name: "About", link: "#about" },
//     { name: "Amenities", link: "#amenities" },
//     { name: "Plans", link: "#floorplans" },
//     { name: "Location", link: "#location" },
//   ];

//   // SCROLL EFFECT (OPTIMIZED)
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // SMOOTH SCROLL
//   const handleScrollTo = (id: string) => {
//     setOpen(false);
//     const el = document.querySelector(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <header
//       aria-label="Main Navigation"
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-xl shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center justify-between">

//         {/* LOGO (SEO FIXED) */}
//         <div className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide text-[#0f766e]">
//           Garikipati Towers
//         </div>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex items-center gap-8" role="navigation">
//           {navItems.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => handleScrollTo(item.link)}
//               className="relative group text-gray-700 font-medium"
//             >
//               {item.name}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0f766e] transition-all duration-300 group-hover:w-full"></span>
//             </button>
//           ))}

//           {/* CTA */}
//           <button
//             onClick={() =>
//               window.open("https://wa.me/919133633327", "_blank")
//             }
//             className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#0f766e] to-[#14b8a6] text-white font-medium shadow-md hover:scale-105 transition active:scale-95"
//           >
//             Contact
//           </button>
//         </nav>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle Menu"
//           className="md:hidden text-gray-800 z-50 p-2"
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-white px-6"
//           >
//             {navItems.map((item, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleScrollTo(item.link)}
//                 className="text-xl sm:text-2xl font-serif tracking-wide hover:text-[#5eead4] transition"
//               >
//                 {item.name}
//               </button>
//             ))}

//             {/* CTA */}
//             <button
//               onClick={() =>
//                 window.open(
//                   "https://wa.me/919133633327?text=Hi, I want to book a site visit",
//                   "_blank"
//                 )
//               }
//               className="mt-6 px-8 py-3 rounded-full bg-[#0f766e] hover:bg-[#14b8a6] transition text-base active:scale-95"
//             >
//               Book Visit
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // 👈 control visibility

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Amenities", link: "#amenities" },
    { name: "Plans", link: "#floorplans" },
    { name: "Location", link: "#location" },
  ];

  // 👇 SHOW AFTER SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80); // change value if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

            {/* LOGO */}
            <h2 className="text-white text-2xl font-semibold">
              Garikipati Towers
            </h2>

            {/* DESKTOP */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleScrollTo(item.link)}
                  className="text-gray-200 hover:text-[#5eead4] transition"
                >
                  {item.name}
                </button>
              ))}

              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/919133633327?text=Hi I want details",
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-full bg-[#14b8a6] text-black font-medium"
              >
                Contact
              </button>
            </nav>

            {/* MOBILE BTN */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="md:hidden bg-black/95 flex flex-col items-center gap-6 py-10"
              >
                {navItems.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleScrollTo(item.link)}
                    className="text-lg text-white"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/919133633327",
                      "_blank"
                    )
                  }
                  className="px-6 py-3 rounded-full bg-[#14b8a6] text-black"
                >
                  Book Visit
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}