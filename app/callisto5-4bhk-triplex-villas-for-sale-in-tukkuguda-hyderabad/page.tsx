import Amenities from "../Project4/Amenities";
import CTA from "../Project4/CTA";
import Features from "../Project4/Features";
import Gallery from "../Project4/Gallery";
import Hero from "../Project4/Hero";
import Highlights from "../Project4/Highlights";
import Location from "../Project4/Location";
import Navbar from "../Project4/Navbar";

import Testimonials from "../Project4/Testimonials";


export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Features />
      <Amenities />
      <Location />

      <Gallery />
      <Testimonials />
      <CTA  />
    </>
  );
}