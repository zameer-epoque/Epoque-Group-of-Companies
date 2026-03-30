import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";

import CommercialInteriorFAQSection from "./CommercialInteriorFAQSection";
import WhyChooseCommercialInteriorSection from "./WhyChooseCommercialInteriorSection";

// ✅ LAZY LOAD SEO SECTION (MAIN FIX)
const CommercialInteriorSEOSection = dynamic(
  () => import("./CommercialInteriorSEOSection"),
  {
    loading: () => (
      <p className="text-center text-gray-400 py-10">
        Loading content...
      </p>
    ),
  }
);

export const metadata: Metadata = {
  title:
    "Commercial Interior Designers in Hyderabad | Office & Corporate Interiors",
  description:
    "Epoque Group is a leading commercial interior design company in Hyderabad specializing in luxury office interiors, corporate spaces, retail interiors and turnkey commercial interior solutions.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/commercial-interior-design",
  },
};

export default function CommercialInteriorDesignPage() {
  return (
    <main className="relative bg-[#0B0F19] text-white overflow-hidden">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="text-4xl md:text-6xl font-semibold">
            Commercial Interior Designers in Hyderabad
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Epoque Group delivers premium commercial interior design solutions
            for offices, corporate spaces, and retail environments.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
          >
            Get Consultation
          </Link>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">
          Best Commercial Interior Designers in Hyderabad
        </h2>

        <p className="text-gray-300">
          We create modern, functional, and high-performance commercial spaces
          designed to improve productivity and brand identity.
        </p>
      </section>

      {/* ✅ SEO SECTION (LAZY LOADED) */}
      <CommercialInteriorSEOSection />

      {/* OTHER SECTIONS */}
      <WhyChooseCommercialInteriorSection />
      <CommercialInteriorFAQSection />

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Commercial Interior Designers in Hyderabad",
            areaServed: "Hyderabad",
          }),
        }}
      />

    </main>
  );
}