import AboutSection from "../Project5/AboutSection";
import AmenitiesSection from "../Project5/AmenitiesSection";
import ApprovalsSection from "../Project5/ApprovalsSection";
import ContactSection from "../Project5/ContactSection";
import FloorPlanBanner from "../Project5/FloorPlanBanner";
import FloorPlansSection from "../Project5/FloorPlansSection";
import GallerySection from "../Project5/GallerySection";
import HeroSection from "../Project5/HeroSection";
import LocationSection from "../Project5/LocationSection";
import Navbar from "../Project5/Navbar";
import StatsSection from "../Project5/StatsSection";

export default function page() {
  return (
    <>
    <Navbar/>
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <FloorPlansSection />
      <GallerySection />
      <StatsSection/>
      <FloorPlanBanner/>
      <LocationSection/>
      <ApprovalsSection/>
      <ContactSection />
    </>
  );
}