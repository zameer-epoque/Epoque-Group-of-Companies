import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import CommercialInteriorFAQSection from "./CommercialInteriorFAQSection";
import WhyChooseCommercialInteriorSection from "./WhyChooseCommercialInteriorSection";
import CommercialInteriorSEOSection from "./CommercialInteriorSEOSection";

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
          designed to improve productivity, efficiency, and brand identity.
        </p>

        <p className="text-gray-400">
          Our commercial interior design services include office interiors,
          corporate workspaces, retail environments, and turnkey solutions
          tailored to your business requirements.
        </p>
      </section>
<CommercialInteriorSEOSection/>
      {/* WHY CHOOSE */}
      <WhyChooseCommercialInteriorSection />

      {/* FAQ */}
      <CommercialInteriorFAQSection />

      {/* CTA */}
      <section className="py-20 text-center bg-[#111827]">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Transform Your Commercial Space Today
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Get expert commercial interior design solutions in Hyderabad for
          offices, retail spaces, and corporate environments.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold hover:scale-105 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

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