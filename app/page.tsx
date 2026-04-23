

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
      <WhoWeAre />
      <VisionMissionPromise />
      <OurDivisions />
      <WhyChooseEpoque />
<PremiumCTA/>



    </>
  )
}
