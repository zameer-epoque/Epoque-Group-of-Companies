import ClubhouseSection from "../Project9/ClubhouseSection";
import ContactSection from "../Project9/ContactSection";
import FloorPlansSection from "../Project9/FloorPlansSection";
import GallerySection from "../Project9/GallerySection";
import HeroSection from "../Project9/HeroSection";
import LocationSection from "../Project9/LocationSection";
import Navbar from "../Project9/Navbar";
import ProjectHighlights from "../Project9/ProjectHighlights";
import WhyChooseSection from "../Project9/WhyChooseSection";
import AmenitiesSection from "../Project9/AmenitiesSection";


export default function Page() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />

      <HeroSection />

      <ProjectHighlights />

      <AmenitiesSection/>

      <ClubhouseSection />

      <FloorPlansSection />

      <GallerySection />

      <LocationSection />

      <WhyChooseSection />

      <ContactSection />

      
    </main>
  );
}