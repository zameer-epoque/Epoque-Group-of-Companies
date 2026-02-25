import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ContentMarketingFAQSection from "./ContentMarketingFAQSection";
import WhyChooseContentMarketingSection from "./WhyChooseContentMarketingSection";
 

export const metadata: Metadata = {
  title:
    "Content Marketing Services in Hyderabad | SEO Content Marketing Agency",
  description:
    "Leading content marketing agency in Hyderabad offering SEO content writing, blog marketing, website copywriting, and organic lead generation strategies.",
  keywords: [
    "Content Marketing Services Hyderabad",
    "SEO Content Writing Hyderabad",
    "Blog Writing Services India",
    "Website Content Development Hyderabad",
    "Content Marketing Agency India",
  ],
  alternates: {
    canonical: "https://epoquegroup.in/digital/content-marketing",
  },
  openGraph: {
    title:
      "Content Marketing Agency in Hyderabad | SEO Content Experts",
    description:
      "Grow organic traffic and brand authority with performance-driven content marketing strategies.",
    url: "https://epoquegroup.in/digital/content-marketing",
    type: "website",
  },
};

export default function ContentMarketingPage() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* FULL PAGE PREMIUM ORANGE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-red-500/10 pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

      {/* ================= HERO ================= */}
      <section className="relative py-32 text-center px-6">

        <div className="relative max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Content Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Hyderabad & Across India
            </span>
          </h1>

          <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400/40 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8 backdrop-blur">
            SEO-Focused Content That Builds Authority & Leads
          </div>

          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Epoque Group is a leading content marketing agency in Hyderabad
            specializing in SEO content writing, blog marketing, website copywriting,
            and long-term organic growth strategies that generate qualified leads
            and increase brand visibility.
          </p>

          <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-2xl"
            >
              Get Free Content Strategy
            </Link>

            <Link
              href="/real-estate-digital-marketing-projects-epoque-group"
              className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
            >
              View Case Studies
            </Link>

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#0c0c0d] to-[#101114]">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Content Marketing Services in Hyderabad
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Our content marketing services are designed to increase organic
              rankings, build domain authority, and convert traffic into
              measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">

            {[
              "SEO Blog Writing & Keyword Strategy",
              "Website & Landing Page Copywriting",
              "Authority & Thought Leadership Content",
              "Email Marketing Content Funnels",
              "Content Strategy & Editorial Planning",
              "Content Optimization & Performance Reporting",
            ].map((service, index) => (
              <div key={index} className="group relative">

                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500 border border-orange-500/30"></div>

                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3 bg-[#121212] rounded-xl border border-white/5">

                  <span className="text-sm text-orange-400 tracking-widest uppercase">
                    0{index + 1}
                  </span>

                  <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                    {service}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    Structured SEO-driven content strategies engineered to improve
                    search visibility, audience engagement, and inbound lead generation.
                  </p>

                  <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      <WhyChooseContentMarketingSection />
      <ContentMarketingFAQSection />

      {/* SERVICE SCHEMA */}
      <Script
        id="content-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Content Marketing Services",
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