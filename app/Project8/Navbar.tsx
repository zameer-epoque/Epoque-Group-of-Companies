
"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-4">
        <div className="rounded-2xl border border-white/20 bg-white/95 backdrop-blur-xl shadow-xl">

          <div className="flex items-center justify-between px-5 py-4">

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/Urbanads/logo.png"
                alt="Urbanyards Shangrila"
                className="h-10 md:h-12 w-auto"
              />
            </a>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">

              <button
                onClick={() => handleScroll("highlights")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Highlights
              </button>

              <button
                onClick={() => handleScroll("location")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Location
              </button>

              <button
                onClick={() => handleScroll("amenities")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Amenities
              </button>

              <button
                onClick={() => handleScroll("floorplans")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Floor Plans
              </button>

              <button
                onClick={() => handleScroll("gallery")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Gallery
              </button>

              <button
                onClick={() => handleScroll("contact")}
                className="font-medium text-slate-700 hover:text-[#0057A8] transition"
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleScroll("contact")}
                className="rounded-xl bg-[#EF3B2D] px-6 py-3 text-white font-bold hover:opacity-90 transition"
              >
                Get Pricing
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[#003D7A]"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="lg:hidden border-t border-slate-200 bg-white">
              <div className="flex flex-col p-6">

                <button
                  onClick={() => handleScroll("highlights")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Highlights
                </button>

                <button
                  onClick={() => handleScroll("location")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Location
                </button>

                <button
                  onClick={() => handleScroll("amenities")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Amenities
                </button>

                <button
                  onClick={() => handleScroll("floorplans")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Floor Plans
                </button>

                <button
                  onClick={() => handleScroll("gallery")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Gallery
                </button>

                <button
                  onClick={() => handleScroll("contact")}
                  className="py-3 text-left text-slate-800 font-semibold"
                >
                  Contact
                </button>

                <button
                  onClick={() => handleScroll("contact")}
                  className="mt-4 rounded-xl bg-[#EF3B2D] py-3 text-white font-bold"
                >
                  Get Pricing
                </button>

              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

