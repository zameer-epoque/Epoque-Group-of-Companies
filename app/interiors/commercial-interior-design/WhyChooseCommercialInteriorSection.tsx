import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import dynamic from "next/dynamic";
import CommercialInteriorFAQSection from "./CommercialInteriorFAQSection";
import WhyChooseCommercialInteriorSection from "./WhyChooseCommercialInteriorSection";

// ✅ Lazy Load SEO Section (Fix Lag)
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
    "Epoque Group is a leading commercial interior design company in Hyderabad specializing in office interiors, corporate spaces, and turnkey commercial solutions.",
  keywords: [
    "commercial interior designers Hyderabad",
    "office interior Hyderabad",
    "corporate interior design Hyderabad",
    "retail interior designers Hyderabad"
  ],
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/commercial-interior-design",
  },
};

export default function CommercialInteriorDesignPage() {
  return (
    <main className="bg-[#0B0F19] text-white">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-6">

          <h1 className="text-4xl md:text-6xl font-semibold">
            Commercial Interior Designers in Hyderabad
          </h1>

          <p className="text-gray-300 max-w-3xl mx-auto">
            Epoque Group delivers premium commercial interior design solutions
            for offices, corporate spaces, and retail environments. We create
            modern, functional and high-performance business interiors.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
          >
            Get Free Consultation
          </Link>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">
          Best Commercial Interior Designers in Hyderabad
        </h2>

        <p className="text-gray-300">
          Epoque Group is one of the top commercial interior designers in Hyderabad,
          offering innovative and functional workspace solutions. We specialize in office
          interiors, corporate environments, and retail spaces designed to enhance
          productivity and brand identity.
        </p>

        <p className="text-gray-400">
          Our approach focuses on space planning, ergonomic design, and modern aesthetics
          to create high-performance business environments tailored to your needs.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Commercial Interior Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold">Office Interiors</h3>
              <p className="text-gray-400">
                Modern office designs that improve productivity and workflow efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Corporate Interiors</h3>
              <p className="text-gray-400">
                Professional interiors designed to reflect your brand identity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Retail Interiors</h3>
              <p className="text-gray-400">
                Attractive spaces designed to enhance customer experience and sales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Our Design Process
        </h2>

        <p className="text-gray-400">
          We follow a structured process including consultation, design planning,
          material selection, execution, and final delivery to ensure high-quality results.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Benefits of Commercial Interior Design
          </h2>

          <ul className="grid md:grid-cols-3 gap-6 text-gray-300">
            <li>✔ Improves productivity</li>
            <li>✔ Enhances brand image</li>
            <li>✔ Better space utilization</li>
            <li>✔ Increases property value</li>
            <li>✔ Improves customer experience</li>
          </ul>
        </div>
      </section>

      {/* COST */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Commercial Interior Cost in Hyderabad
        </h2>

        <p className="text-gray-400 mt-4">
          Interior design cost ranges from ₹1500 to ₹4000 per sq.ft depending on
          materials, customization, and project complexity.
        </p>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Interior Designers Near You in Hyderabad
        </h2>

        <p className="text-gray-400">
          We serve Gachibowli, HITEC City, Madhapur, Financial District,
          Jubilee Hills, and Banjara Hills.
        </p>
      </section>

      {/* 🔥 SEO CONTENT (LAZY LOAD → NO LAG) */}
      <CommercialInteriorSEOSection />

      {/* CTA */}
      <div className="text-center py-10">
        <Link href="/contact" className="text-yellow-400 underline">
          Contact Us for Consultation
        </Link>
      </div>

      {/* EXTRA SECTIONS */}
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