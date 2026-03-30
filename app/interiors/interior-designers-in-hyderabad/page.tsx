import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import FAQSection from "./FAQSection"
import WhyChooseSection from "./WhyChooseSection"

export const metadata: Metadata = {
  title:
    "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
  description:
    "Top interior designers in Hyderabad offering luxury villa interiors, modular kitchens, office interiors and turnkey solutions.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
  },
}

export default function InteriorDesignersHyderabad() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-bold">
            Interior Designers in Hyderabad
          </h1>

          <p className="mt-6 text-gray-300">
            Epoque Group is one of the best interior designers in Hyderabad
            offering premium residential and commercial interior design services.
          </p>

          <p className="mt-4 text-gray-400">
            We design luxury home interiors, modular kitchens, villa interiors,
            and office spaces with modern aesthetics and functional planning.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
            >
              Book Free Consultation
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">
          Top Interior Designers in Hyderabad
        </h2>

        <p className="text-gray-300">
          Epoque Group is a leading interior design company in Hyderabad known
          for delivering luxury residential and commercial interiors. We provide
          customized solutions for apartments, villas, offices and retail spaces.
        </p>

        <p className="text-gray-400">
          Our team focuses on space planning, modern design trends, and premium
          materials to create interiors that are both stylish and functional.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Interior Design Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="text-xl font-semibold">Home Interiors</h3>
              <p className="text-gray-400">
                Complete home interior design solutions including living rooms,
                bedrooms and modular kitchens.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Villa Interiors</h3>
              <p className="text-gray-400">
                Luxury villa interiors with premium materials and customized designs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Office Interiors</h3>
              <p className="text-gray-400">
                Professional office interiors designed for productivity and branding.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Our Interior Design Process
        </h2>

        <p className="text-gray-400">
          We follow a structured process including consultation, concept design,
          execution and final delivery to ensure high-quality results.
        </p>
      </section>

      {/* COST */}
      <section className="py-24 px-6 bg-[#111827] text-center">
        <h2 className="text-3xl font-semibold">
          Interior Design Cost in Hyderabad
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Interior design costs in Hyderabad range from ₹1200 to ₹3000 per sq.ft
          depending on materials, customization and project complexity.
        </p>
      </section>

      {/* LOCATION SEO */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">
          Interior Designers Near You in Hyderabad
        </h2>

        <p className="text-gray-400">
          We provide interior design services across Gachibowli, Kokapet,
          Jubilee Hills, Financial District, Banjara Hills and other prime areas.
        </p>
      </section>

      {/* INTERNAL LINK */}
      <div className="text-center py-10">
        <Link href="/contact" className="text-yellow-400 underline">
          Contact Us for Interior Design Services
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
  )
}