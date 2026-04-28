import AboutUs from "../Project6/AboutUs";
import Contact from "../Project6/Contact";
import FAQ from "../Project6/FAQ";
import Hero from "../Project6/Hero";
import Mission from "../Project6/Mission";
import Navbar from "../Project6/Navbar";
import Process from "../Project6/Process";
import Properties from "../Project6/Properties";
import Services from "../Project6/Services";
import ReferralProcess from "../Project6/ReferralProcess";


export default function Page() {
  return (
    <main>
      <Navbar />
     <Hero/>
      <Services />
      <AboutUs />
      <Mission />
      <Properties />
      <ReferralProcess/>
      <Process />
      <FAQ />
      <Contact />
   
    </main>
  );
}