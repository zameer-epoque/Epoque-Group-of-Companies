import Amenities from "../Project7/Amenities";
import Contact from "../Project7/Contact";
import Hero from "../Project7/Hero";
import Highlights from "../Project7/Highlights";
import Location from "../Project7/Location";
import Navbar from "../Project7/Navbar";
import Pricing from "../Project7/Pricing";
import Specifications from "../Project7/Specifications";


export default function Page() {
  return (
    <main className="bg-[#0F172A] text-white scroll-smooth">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Highlights */}
      <Highlights />

      {/* Pricing */}
      <Pricing />

      {/* Amenities */}
      <Amenities />
      <Location />
      <Specifications />
      {/* Contact */}
      <Contact />

      {/* 🔥 Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full flex md:hidden z-50">
        <a
          href="tel:+919100455529"
          className="w-1/2 bg-green-500 text-center py-4 font-semibold"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/919100455529"
          target="_blank"
          className="w-1/2 bg-[#25D366] text-center py-4 font-semibold"
        >
          WhatsApp
        </a>
      </div>

    </main>
  );
}