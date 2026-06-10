import Amenities from "../Project8/Amenities";
import ClubhouseExperience from "../Project8/ClubhouseExperience";
import CTA from "../Project8/CTA";

import Gallery from "../Project8/Gallery";
import Hero from "../Project8/Hero";
import Highlights from "../Project8/Highlights";
import LifestyleSection from "../Project8/LifestyleSection";
import Navbar from "../Project8/Navbar";
import SiteVisitCTA from "../Project8/SiteVisitCTA";
import WhyShangrila from "../Project8/WhyShangrila";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <WhyShangrila />
      <Amenities />
      <LifestyleSection/>
      <ClubhouseExperience/>

      <Gallery />
      <SiteVisitCTA />
    </>
  );
}