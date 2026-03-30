import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CommercialInteriorFAQSection from "./CommercialInteriorFAQSection";
import WhyChooseCommercialInteriorSection from "./WhyChooseCommercialInteriorSection";

export const metadata: Metadata = {
  title:
    "Commercial Interior Designers in Hyderabad | Office & Corporate Interiors",
  description:
    "Epoque Group is a leading commercial interior design company in Hyderabad specializing in luxury office interiors, corporate spaces, retail interiors and turnkey commercial interior solutions.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/commercial-interior-design",
  },
  openGraph: {
    title:
      "Commercial Interior Designers in Hyderabad | Epoque Group",
    description:
      "Premium office and corporate interior design services in Hyderabad.",
    url: "https://epoquegroup.in/interiors/commercial-interior-design",
    siteName: "Epoque Group",
    type: "website",
  },
};

export default function CommercialInteriorDesignPage() {
  return (
    <main className="relative bg-[#0B0F19] text-white overflow-hidden">

      {/* Subtle Gold Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Commercial Interior Designers in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Hyderabad
            </span>
          </h1>
          <div className="inline-block px-8 py-4 mt-2 rounded-full 
border border-[#D4AF37]/40 bg-[#111827] 
text-[17px] text-gray-300 tracking-wide">
            Hyderabad’s Premium Commercial Interior Specialists
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Epoque Group delivers premium commercial interior design solutions
            for offices, corporate headquarters, retail outlets and business spaces.
            We create modern, high-performance work environments that enhance productivity
            and strengthen brand identity.
          </p>

          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
            From strategic space planning and concept design to complete turnkey execution,
            our commercial interior designers ensure seamless project delivery
            across Gachibowli, Financial District, HITEC City and Jubilee Hills.
          </p>

          {/* PREMIUM GRADIENT BUTTON */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="px-14 py-5 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
              transition-all duration-300 shadow-xl"
            >
              Get Commercial Interior Consultation
            </Link>
          </div>

        </div>
      </section>
{/* ABOUT COMMERCIAL INTERIORS */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto space-y-6">

    <h2 className="text-3xl md:text-4xl font-semibold">
      Best Commercial Interior Designers in Hyderabad
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Epoque Group is recognized as one of the best commercial interior designers in Hyderabad,
      delivering innovative and functional design solutions for modern businesses. We specialize
      in creating office interiors, corporate environments, retail outlets and commercial spaces
      that reflect your brand identity and business goals.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Our expert team focuses on space optimization, modern aesthetics, and ergonomic design to
      enhance productivity and employee well-being. Whether you need a complete office setup or
      renovation, we provide end-to-end commercial interior solutions in Hyderabad.
    </p>

  </div>
</section>
      {/* WHY CHOOSE SECTION */}
      <WhyChooseCommercialInteriorSection />

      {/* FAQ SECTION */}
      <CommercialInteriorFAQSection />

      {/* SCHEMA */}
      <Script
        id="commercial-interior-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Interior Design Services",
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