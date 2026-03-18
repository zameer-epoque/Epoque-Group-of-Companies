"use client";

import { useState } from "react";
import Amenities from "../Project1/Amenities";
import AmenitiesServices from "../Project1/AmenitiesServices";
import ContactSection from "../Project1/ContactSection";
import Footer from "../Project1/Footer";
import Hero from "../Project1/Hero";
import LifeBanner from "../Project1/LifeBanner";
import LocationSection from "../Project1/LocationSection";
import Navbar from "../Project1/Navbar";
import PricingSection from "../Project1/PricingSection";
import Specifications from "../Project1/Specifications";
import UnitShowcase from "../Project1/UnitShowcase";


export default function App(): JSX.Element {
  return (
    <div className="font-sans text-gray-800">

      {/* Navbar */}
      <Navbar />
      <Hero />

      <UnitShowcase />
      <Amenities />
      <AmenitiesServices />
      <Specifications />

      <PricingSection />
      <LifeBanner />
      <LocationSection />
      <ContactSection />
      <Footer />

    </div>
  );
}