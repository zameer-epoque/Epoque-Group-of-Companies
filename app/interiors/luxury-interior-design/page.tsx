import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";
import LuxuryInteriorSEOSection from "./LuxuryInteriorSEOSection";

export const metadata: Metadata = {
  title:
    "Luxury Interior Designers in Hyderabad | Villa & Premium Home Interiors",
  description:
    "Epoque Group offers luxury interior design services in Hyderabad for villas, apartments and premium homes with turnkey execution.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/luxury-interior-design",
  },
};

export default function LuxuryInteriorDesignPage() {
  return (
    <main className="bg-[#0B0F19] text-white">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-5xl md:text-6xl font-semibold">
            Luxury Interior Design in Hyderabad
          </h1>

          <p className="text-gray-300">
            Epoque Group is a leading luxury interior designer in Hyderabad
            delivering high-end villa interiors, premium apartments and bespoke
            residential design solutions.
          </p>

          <p className="text-gray-400">
            We create elegant interiors using premium materials, modern concepts
            and precision craftsmanship tailored for luxury living.
          </p>

          <div className="pt-6">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
            >
              Book Luxury Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-2 px-6 max-w-6xl mx-auto space-y-6">
  <h2 className="text-3xl font-semibold">
    Luxury Interior Designers in Hyderabad
  </h2>

  <p className="text-gray-300 leading-relaxed">
    Epoque Group is a leading luxury interior designer in Hyderabad,
    specializing in high-end villa interiors, premium apartments,
    and bespoke residential spaces. We design elegant interiors that
    combine modern aesthetics with functionality, ensuring every space
    reflects comfort, sophistication, and your personal lifestyle.
    Our team focuses on delivering customized interior solutions that
    enhance both visual appeal and practical living.
  </p>

  <p className="text-gray-400 leading-relaxed">
    With a strong focus on quality and innovation, we use premium
    materials, modern design concepts, and expert craftsmanship to
    create timeless luxury interiors. From concept development to
    complete turnkey execution, we ensure every detail is carefully
    planned and executed to deliver interiors that truly represent
    exclusivity, elegance, and long-lasting value.
  </p>
</section>

      {/* SERVICES */}
     <section className="py-8 px-6 bg-[#111827]">
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-3xl font-semibold text-center mb-10">
      Our Luxury Interior Design Services in Hyderabad
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* VILLA */}
      <div>
        <h3 className="text-xl font-semibold">
          Luxury Villa Interior Design
        </h3>
        <p className="text-gray-400 leading-relaxed">
          We specialize in luxury villa interior design in Hyderabad,
          creating spacious, elegant, and high-end living environments.
          Our designs include premium materials, custom furniture,
          designer lighting, and modern layouts that enhance comfort,
          aesthetics, and overall lifestyle experience.
        </p>
      </div>

      {/* APARTMENT */}
      <div>
        <h3 className="text-xl font-semibold">
          Premium Apartment Interior Design
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Our premium apartment interiors are designed to maximize space,
          functionality, and elegance. Whether it is a 2BHK, 3BHK, or
          penthouse, we deliver modern interiors with smart storage,
          stylish finishes, and customized designs tailored for urban
          luxury living in Hyderabad.
        </p>
      </div>

      {/* TURNKEY */}
      <div>
        <h3 className="text-xl font-semibold">
          Turnkey Luxury Interior Solutions
        </h3>
        <p className="text-gray-400 leading-relaxed">
          We offer complete turnkey interior design services in Hyderabad,
          handling everything from concept design to final execution.
          Our team ensures seamless project delivery with high-quality
          materials, expert craftsmanship, and on-time completion for a
          hassle-free experience.
        </p>
      </div>

    </div>
  </div>
</section>

     {/* PROCESS */}
<section className="py-12 px-6 max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Our Luxury Interior Design Process in Hyderabad
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-[#111827] p-8 rounded-2xl border border-white/10 hover:border-yellow-500/40 transition">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">
        Consultation & Concept Design
      </h3>
      <p className="text-gray-400 leading-relaxed">
        At Epoque Group, we begin with a detailed consultation to understand your lifestyle,
        preferences, and vision. Our team develops concept designs, 3D visualizations,
        and space planning strategies to bring your ideas to life.
      </p>
    </div>

    <div className="bg-[#111827] p-8 rounded-2xl border border-white/10 hover:border-yellow-500/40 transition">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">
        Execution & Final Delivery
      </h3>
      <p className="text-gray-400 leading-relaxed">
        After design approval, we handle material selection, furniture customization,
        and complete turnkey execution. Our team ensures high-quality craftsmanship,
        smooth coordination, and timely project completion.
      </p>
    </div>

  </div>
</section>


{/* COST */}
<section className="py-12 px-6 bg-[#111827]">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-semibold">
      Luxury Interior Design Cost in Hyderabad
    </h2>

    <div className="mt-10 bg-[#0B0F19] border border-white/10 rounded-2xl p-10 shadow-lg">

      <p className="text-gray-300 leading-relaxed">
        The cost of luxury interior design in Hyderabad depends on various factors such as
        project size, materials, customization, and design complexity. Typically,
        pricing ranges from ₹1800 to ₹4000 per square foot.
      </p>

      <p className="text-gray-400 mt-4 leading-relaxed">
        High-end villas and premium apartments may include designer finishes,
        imported materials, and custom furniture, which can increase the overall cost.
        We provide transparent pricing and tailored solutions based on your needs.
      </p>

      <div className="mt-6 text-yellow-400 font-semibold text-lg">
        ₹1800 – ₹4000 / sq.ft (Estimated Range)
      </div>

    </div>

  </div>
</section>


{/* LOCATION */}
<section className="py-12 px-6 max-w-6xl mx-auto">
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-semibold">
      Luxury Interior Designers Near You in Hyderabad
    </h2>
  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">
        Prime Locations We Serve
      </h3>
      <p className="text-gray-400 leading-relaxed">
        We provide luxury interior design services across Jubilee Hills,
        Banjara Hills, Gachibowli, Kokapet, Financial District,
        and other premium residential areas in Hyderabad.
      </p>
    </div>

    <div className="bg-[#111827] p-8 rounded-2xl border border-white/10">
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">
        Local Expertise & Custom Design
      </h3>
      <p className="text-gray-400 leading-relaxed">
        Our team understands the lifestyle and architectural preferences
        of Hyderabad homeowners, allowing us to deliver customized luxury
        interiors that match modern trends and personal taste.
      </p>
    </div>

  </div>
</section>
      {/* EXISTING COMPONENTS */}
      <LuxuryInteriorSEOSection/>
      <WhyChooseSection />
      <FAQSection />

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Epoque Group",
            areaServed: "Hyderabad",
            url: "https://epoquegroup.in",
          }),
        }}
      />

    </main>
  );
}