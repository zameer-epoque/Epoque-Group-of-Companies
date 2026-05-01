import AboutSection from "../Project3/AboutSection";
import AmenitiesSection from "../Project3/AmenitiesSection";
import BannerSection from "../Project3/BannerSection";
import ContactSection from "../Project3/ContactSection";
import GallerySection from "../Project3/GallerySection";
import HeroSection from "../Project3/HeroSection";
import LocationSection from "../Project3/LocationSection";
import Navbar from "../Project3/Navbar";
import ProjectOverview from "../Project3/ProjectOverview";


export default function Page() {
    return (
        <main>

            <Navbar />

            {/* Add spacing because navbar is fixed */}
            <div className="pt-28">

                <HeroSection />
                <AboutSection />
                <AmenitiesSection />
                <GallerySection />
                <BannerSection />
                <ProjectOverview />
                <LocationSection />
                <ContactSection />


            </div>

        </main>
    );
}