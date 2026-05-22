

import ClientsSlider from "./components/ClientsSlider";
import Companies from "./components/Companies";
import FAQ from "./components/FAQ";
import FloatingLogos from "./components/FloatingLogos";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";
import LatestBlogs from "./components/LatestBlogs";

import OurDivisions from "./components/OurDivisions";
import PremiumCTA from "./components/PremiumCTA";
import SEOIntro from "./components/SEOIntro";
import ServiceHighlights from "./components/ServiceHighlights";
import Testimonials from "./components/Testimonials";

import VisionMissionPromise from "./components/VisionMissionPromise";
import WhoWeAre from "./components/whoareyou";
import WhyChooseEpoque from "./components/WhyChooseEpoque";



export default function Home() {
  return (
    <>

<HeroSlider/>
      <Hero />
      <SEOIntro />
{/* <Companies/> */}
<FloatingLogos/>
      <WhoWeAre />
      <VisionMissionPromise />
      <OurDivisions />
      
<ServiceHighlights />

      <ClientsSlider/>
      
<Testimonials />

      <WhyChooseEpoque />
      <FAQ />

<LatestBlogs />

<PremiumCTA/>



    </>
  )
}
