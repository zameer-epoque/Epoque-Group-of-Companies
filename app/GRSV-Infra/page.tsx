import ContactSection from "../Project5/ContactSection";
import Hero from "../Project5/Hero";
import HorizontalScroll from "../Project5/HorizontalScroll";
import Navbar from "../Project5/Navbar";
import ProjectSlider from "../Project5/ProjectSlider";
import QuoteSection from "../Project5/QuoteSection";
import ServicesSection from "../Project5/ServicesSection";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScroll />
      <ServicesSection />
      <ProjectSlider />
      <QuoteSection />
      <ContactSection />
    </>
  );
}