import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";
import ResidentialInteriorSEOSection from "./ResidentialInteriorSEOSection";

export const metadata: Metadata = {
    title:
        "Residential Interior Designers in Hyderabad | Luxury Home Interiors",
    description:
        "Epoque Group offers premium residential interior design services in Hyderabad specializing in luxury villa interiors, apartment interiors and turnkey home interior solutions.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
    },
    openGraph: {
        title:
            "Residential Interior Designers in Hyderabad | Epoque Group",
        description:
            "Luxury home and villa interior design services in Hyderabad.",
        url: "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
        type: "website",
    },
};

export default function ResidentialInteriorPage() {
    return (
       <main className="relative bg-[#0B0F19] text-white overflow-hidden">

  {/* Gold Glow */}
  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>
  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

  {/* HERO */}
  <section className="relative py-32 px-6 text-center">
    <div className="max-w-5xl mx-auto space-y-10">

      {/* TITLE */}
      <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
        Residential Interior Designers in{" "}
        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
          Hyderabad
        </span>
      </h1>

      {/* TAG */}
      <div className="inline-block px-8 py-4 rounded-full 
      border border-[#D4AF37]/40 bg-[#111827] 
      text-[17px] text-gray-300 tracking-wide">
        Luxury Home • Villa • Apartment Interiors
      </div>

      {/* MAIN DESCRIPTION */}
      <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
        Epoque Group is a leading residential interior designer in Hyderabad,
        delivering premium interior solutions for villas, apartments, and
        independent homes. We create elegant, modern, and functional living
        spaces designed to enhance your lifestyle and comfort.
      </p>

      {/* EXTRA DESCRIPTION */}
      <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
        From concept design and space planning to turnkey execution, our expert
        designers ensure every detail is crafted with precision, luxury, and
        high-quality materials to create timeless interiors.
      </p>

      {/* SERVICES HIGHLIGHT */}
      <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm text-gray-300">
        <span className="px-4 py-2 border border-white/10 rounded-full">
          Villa Interiors
        </span>
        <span className="px-4 py-2 border border-white/10 rounded-full">
          Apartment Interiors
        </span>
        <span className="px-4 py-2 border border-white/10 rounded-full">
          Modular Kitchens
        </span>
        <span className="px-4 py-2 border border-white/10 rounded-full">
          Bedroom Designs
        </span>
        <span className="px-4 py-2 border border-white/10 rounded-full">
          Turnkey Solutions
        </span>
      </div>

      {/* STATS / TRUST */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 text-center">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400">100+</h3>
          <p className="text-gray-400 text-sm">Projects Completed</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400">10+</h3>
          <p className="text-gray-400 text-sm">Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400">50+</h3>
          <p className="text-gray-400 text-sm">Design Concepts</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-yellow-400">100%</h3>
          <p className="text-gray-400 text-sm">Client Satisfaction</p>
        </div>
      </div>

      {/* CTA */}
      <div className="pt-10">
        <Link
          href="/contact"
          className="px-14 py-5 rounded-full font-semibold text-black
          bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
          hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
          transition-all duration-300 shadow-xl"
        >
          Get Residential Interior Consultation
        </Link>
      </div>

    </div>
  </section>


            {/* SERVICES SECTION */}

            {/* WHY CHOOSE SECTION */}
<ResidentialInteriorSEOSection/>
            <WhyChooseSection />
            <FAQSection />
            {/* FAQ SCHEMA */}
            <Script
                id="residential-interior-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Residential Interior Design Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    }),
                }}
            />

        </main>
    );
}