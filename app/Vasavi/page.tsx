import AboutSection from "../Project2/AboutSection";
import AmenitiesSection from "../Project2/AmenitiesSection";
import GallerySection from "../Project2/GallerySection";
import HeroSection from "../Project2/HeroSection";
import Navbar from "../Project2/Navbar";
import ProjectOverview from "../Project2/ProjectOverview";
import Specifications from "../Project2/Specifications";

export default function Page() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <AmenitiesSection />
            <ProjectOverview />
            <GallerySection />
            <Specifications />
            {/* <ContactSection /> */}
            {/* <Footer /> */}
        </>
    );
}