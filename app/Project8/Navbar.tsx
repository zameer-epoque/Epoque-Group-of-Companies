"use client";

import { Menu, Phone, Download } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      <div className="mx-auto max-w-7xl px-6 pt-5">

        <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-lg">

          <div className="flex items-center justify-between px-6 py-4">

            {/* Logo */}

            <a href="/" className="flex items-center gap-3">

              <img
                src="/Urbanads/logo.png"
                alt="Urbanyards Shangrila"
                className="h-12 w-auto"
              />

              <div>
                
              </div>

            </a>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">

              <a
                href="#highlights"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Highlights
              </a>

              <a
                href="#location"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Location
              </a>

              <a
                href="#amenities"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Amenities
              </a>

              <a
                href="#floorplans"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Floor Plans
              </a>

              <a
                href="#gallery"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="font-medium text-slate-700 hover:text-[#0057A8]"
              >
                Contact
              </a>

            </nav>

            {/* CTA */}

            <div className="hidden lg:flex items-center gap-3">

              <a
                href="tel:+919999999999"
                className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-[#003D7A] font-semibold hover:bg-slate-50"
              >
                <Phone size={18} />
                Call Now
              </a>

              <button className="rounded-xl bg-[#EF3B2D] px-6 py-3 text-white font-bold hover:opacity-90">
                Get Pricing
              </button>

            </div>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              <Menu size={28} />
            </button>

          </div>

          {/* Mobile Menu */}

          {open && (
            <div className="border-t lg:hidden">

              <div className="flex flex-col p-6 gap-5">

                <a href="#highlights">Highlights</a>

                <a href="#location">Location</a>

                <a href="#amenities">Amenities</a>

                <a href="#floorplans">Floor Plans</a>

                <a href="#gallery">Gallery</a>

                <a href="#contact">Contact</a>

                <button className="mt-3 rounded-xl bg-[#EF3B2D] py-3 text-white font-bold">
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