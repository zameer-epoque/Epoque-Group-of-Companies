"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  // SHOW AFTER SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Highlights",
      link: "#highlights",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Amenities",
      link: "#amenities",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="
            fixed
            top-0
            left-0
            w-full
            z-50
            px-4
            pt-4
          "
        >
          {/* NAVBAR CONTAINER */}
          <div
            className="
              max-w-7xl
              mx-auto
              rounded-[24px]
              border
              border-[#e2e8f0]
              bg-white/90
              backdrop-blur-2xl
              shadow-[0_15px_50px_rgba(15,23,42,0.08)]
            "
          >
            <div
              className="
                px-6
                py-4
                flex
                items-center
                justify-between
              "
            >
              {/* LOGO */}
              <a
                href="#home"
                className="flex items-center gap-3"
              >
                <img
                  src="/logo123.webp"
                  alt="APR Hillside Logo"
                  className="
                    h-14
                    w-auto
                    object-contain
                  "
                />

                <div className="hidden sm:block">
                

                 
                </div>
              </a>

              {/* DESKTOP MENU */}
              <nav
                className="
                  hidden
                  md:flex
                  items-center
                  gap-2
                "
              >
                {navItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="
                      px-5
                      py-3
                      rounded-xl
                      text-[#475569]
                      font-medium
                      transition-all
                      duration-300
                      hover:text-[#1674c1]
                      hover:bg-[#f8fbff]
                    "
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* RIGHT SIDE */}
              <div className="flex items-center gap-4">

                {/* CALL BUTTON */}
                <a
                  href="tel:+919133633327"
                  className="
                    hidden
                    lg:flex
                    items-center
                    justify-center
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-[#e2e8f0]
                    bg-white
                    text-[#0f172a]
                    font-semibold
                    transition-all
                    duration-300
                    hover:border-[#1674c1]/30
                    hover:bg-[#f8fbff]
                  "
                >
                  Call Now
                </a>

                {/* CTA BUTTON */}
                <a
                  href="#contact"
                  className="
                    hidden
                    md:inline-flex
                    items-center
                    justify-center
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    text-white
                    bg-gradient-to-r
                    from-[#1674c1]
                    to-[#ed1024]
                    shadow-[0_15px_35px_rgba(22,116,193,0.20)]
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Book Visit
                </a>

                {/* MOBILE BUTTON */}
                <button
                  onClick={() => setOpen(!open)}
                  className="
                    md:hidden
                    w-11
                    h-11
                    rounded-xl
                    border
                    border-[#e2e8f0]
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-[#0f172a]
                    text-xl
                  "
                >
                  {open ? "✕" : "☰"}
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0,
                  }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    md:hidden
                    overflow-hidden
                    border-t
                    border-[#e2e8f0]
                  "
                >
                  <div className="p-6 flex flex-col gap-3">

                    {navItems.map((item, i) => (
                      <a
                        key={i}
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="
                          px-5
                          py-4
                          rounded-2xl
                          bg-[#f8fbff]
                          border
                          border-[#e2e8f0]
                          text-[#0f172a]
                          font-medium
                          transition-all
                          duration-300
                          hover:border-[#1674c1]/30
                        "
                      >
                        {item.name}
                      </a>
                    ))}

                    {/* MOBILE BUTTON */}
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="
                        mt-3
                        inline-flex
                        items-center
                        justify-center
                        rounded-2xl
                        py-4
                        text-white
                        font-semibold
                        bg-gradient-to-r
                        from-[#1674c1]
                        to-[#ed1024]
                        shadow-[0_15px_35px_rgba(22,116,193,0.20)]
                      "
                    >
                      Book Site Visit
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}