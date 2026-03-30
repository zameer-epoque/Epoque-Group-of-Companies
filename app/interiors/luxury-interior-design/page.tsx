import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";

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
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">
          Luxury Interior Designers in Hyderabad
        </h2>

        <p className="text-gray-300">
          Epoque Group specializes in luxury interior design for villas,
          penthouses and premium apartments in Hyderabad. Our designs focus
          on elegance, comfort and timeless aesthetics.
        </p>

        <p className="text-gray-400">
          We combine innovative concepts, high-end materials and expert
          craftsmanship to deliver interiors that reflect sophistication and
          exclusivity.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Luxury Interior Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold">Luxury Villa Interiors</h3>
              <p className="text-gray-400">
                High-end villa interiors with premium materials and custom design concepts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Premium Apartment Interiors</h3>
              <p className="text-gray-400">
                Elegant interiors designed for modern luxury apartments and penthouses.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Turnkey Interior Solutions</h3>
              <p className="text-gray-400">
                Complete interior execution from concept to final delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Our Luxury Interior Design Process
        </h2>

        <p className="text-gray-400">
          We follow a structured process including consultation, concept design,
          material selection, execution and final delivery to ensure perfection.
        </p>
      </section>

      {/* COST */}
      <section className="py-24 px-6 bg-[#111827] text-center">
        <h2 className="text-3xl font-semibold">
          Luxury Interior Design Cost in Hyderabad
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Luxury interior design costs typically range from ₹1800 to ₹4000 per sq.ft
          depending on materials, customization and design complexity.
        </p>
      </section>

      {/* LOCATION SEO */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Luxury Interior Designers Near You in Hyderabad
        </h2>

        <p className="text-gray-400">
          We provide luxury interior design services across Jubilee Hills,
          Banjara Hills, Gachibowli, Kokapet and Financial District.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center py-10">
        <Link href="/contact" className="text-yellow-400 underline">
          Contact Us for Luxury Interior Design
        </Link>
      </div>

      {/* EXISTING COMPONENTS */}
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