import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import WhyChooseSEOSection from "../search-engine-optimization/WhyChooseSection";
import FAQSection from "./FAQSection";


export const metadata: Metadata = {
  title:
    "Search Engine Optimization Services in Hyderabad | Best SEO Agency",
  description:
    "Leading SEO agency in Hyderabad offering technical SEO, local SEO, keyword ranking, content optimization, and link building services to grow organic traffic and generate qualified leads.",
  keywords: [
    "SEO services Hyderabad",
    "Search Engine Optimization Hyderabad",
    "Technical SEO agency Hyderabad",
    "Local SEO company Hyderabad",
    "Best SEO agency India",
  ],
  alternates: {
    canonical: "https://epoquegroup.in/digital-marketing/seo-services",
  },
  openGraph: {
    title:
      "Best SEO Agency in Hyderabad | Search Engine Optimization Experts",
    description:
      "Increase rankings, traffic & leads with expert SEO services in Hyderabad.",
    url: "https://epoquegroup.in/digital-marketing/seo-services",
    type: "website",
  },
};

export default function SEOServicePage() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center px-6">

        <div className="relative max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Best Search Engine Optimization Agency in{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Hyderabad & Across India
            </span>
          </h1>

          <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8">
            Hyderabad’s Performance-Driven SEO Experts
          </div>

          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Epoque Group is a leading SEO agency in Hyderabad specializing in
            technical SEO, on-page optimization, keyword research, content
            marketing, and high-authority link building strategies. We help
            startups, real estate brands, eCommerce businesses, and enterprises
            improve Google rankings, increase organic traffic, and generate
            sustainable inbound leads.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>✔ Technical SEO Optimization</span>
            <span>✔ Local SEO Hyderabad</span>
            <span>✔ Keyword Ranking Strategy</span>
            <span>✔ High-Authority Link Building</span>
          </div>

          <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              text-black hover:scale-105 transition duration-300 shadow-xl"
            >
              Get Free SEO Audit
            </Link>

            <Link
              href="/case-studies"
              className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-[#C79A3B] hover:text-[#C79A3B]
              transition duration-300"
            >
              View SEO Case Studies
            </Link>

          </div>

        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
      <section className="relative py-12 px-6 bg-[#0c0c0d]">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Search Engine Optimization Services in Hyderabad
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Our SEO services are designed to improve website visibility,
              strengthen domain authority, and increase qualified organic
              traffic. We implement structured SEO frameworks that combine
              technical excellence with content-driven growth strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">

            {[
              "Technical SEO & Website Optimization",
              "On-Page SEO & Keyword Strategy",
              "Local SEO for Hyderabad Businesses",
              "Content Marketing & SEO Blogging",
              "Backlink Building & Authority Growth",
              "SEO Analytics & Performance Reporting",
            ].map((service, index) => (
              <div key={index} className="group relative">

                <div className="absolute inset-0 rounded-xl bg-[#151516] opacity-0 group-hover:opacity-100 transition duration-500 border border-amber-600"></div>

                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3">

                  <span className="text-sm text-orange-400 tracking-widest uppercase">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                    {service}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    Structured SEO strategies aligned with Google’s algorithm
                    updates to ensure sustainable ranking improvements and
                    long-term organic traffic growth.
                  </p>

                  <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <WhyChooseSEOSection />
      <FAQSection />

      {/* SERVICE SCHEMA */}
      <Script
        id="seo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Search Engine Optimization Services",
            areaServed: "Hyderabad & India",
            provider: {
              "@type": "Organization",
              name: "Epoque Group",
              url: "https://epoquegroup.in",
            },
          }),
        }}
      />

    </div>
  );
}