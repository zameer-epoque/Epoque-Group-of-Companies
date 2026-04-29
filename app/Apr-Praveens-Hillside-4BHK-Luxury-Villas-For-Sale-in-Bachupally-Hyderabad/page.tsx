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

     

    </main>
  );
}