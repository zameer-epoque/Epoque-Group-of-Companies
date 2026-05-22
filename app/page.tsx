

import ClientsSlider from "./components/ClientsSlider";
import Companies from "./components/Companies";
import FloatingLogos from "./components/FloatingLogos";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";

import OurDivisions from "./components/OurDivisions";
import PremiumCTA from "./components/PremiumCTA";

import VisionMissionPromise from "./components/VisionMissionPromise";
import WhoWeAre from "./components/whoareyou";
import WhyChooseEpoque from "./components/WhyChooseEpoque";



export default function Home() {
  return (
    <>

<HeroSlider/>
      <Hero />
{/* <Companies/> */}
<FloatingLogos/>
      <WhoWeAre />
      <VisionMissionPromise />
      <OurDivisions />
      <ClientsSlider/>
      <WhyChooseEpoque />
<PremiumCTA/>



    </>
  )
}
