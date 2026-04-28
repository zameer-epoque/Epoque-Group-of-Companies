import AboutUs from "../Project6/AboutUs";
import Contact from "../Project6/Contact";
import FAQ from "../Project6/FAQ";
import Mission from "../Project6/Mission";
import Navbar from "../Project6/Navbar";
import Process from "../Project6/Process";
import Properties from "../Project6/Properties";
import Services from "../Project6/Services";


export default function Page() {
  return (
    <main>
      <Navbar />
     
      <Services />
      <AboutUs />
      <Mission />
      <Properties />
      <Process />
      <FAQ />
      <Contact />
   
    </main>
  );
}