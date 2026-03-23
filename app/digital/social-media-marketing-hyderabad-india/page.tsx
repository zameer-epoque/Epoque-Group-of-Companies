import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";

export const metadata: Metadata = {
  title:
    "Social Media Marketing Services in Hyderabad | Best SMM Agency",
  description:
    "Top social media marketing agency in Hyderabad offering Instagram marketing, Facebook Ads, content creation, and lead generation services.",
  keywords: [
    "Social Media Marketing Hyderabad",
    "Instagram Marketing Hyderabad",
    "Facebook Ads Agency Hyderabad",
    "SMM services India",
  ],
  alternates: {
    canonical:
      "https://epoquegroup.in/digital/social-media-marketing-hyderabad-india",
  },
  openGraph: {
    title:
      "Best Social Media Marketing Agency in Hyderabad | SMM Experts",
    description:
      "Grow your brand with expert social media marketing services in Hyderabad.",
    url:
      "https://epoquegroup.in/digital/social-media-marketing-hyderabad-india",
    type: "website",
  },
};

export default function SocialMediaPage() {
  return (
    <div className="relative bg-black text-white overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

      {/* HERO */}
      <section className="relative py-32 text-center px-6">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Best Social Media Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Hyderabad & Across India
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
            Epoque Group is a leading social media marketing agency in Hyderabad
            specializing in Instagram marketing, Facebook Ads, content creation,
            and lead generation strategies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span>✔ Instagram Marketing</span>
            <span>✔ Facebook Ads</span>
            <span>✔ Content Strategy</span>
            <span>✔ Lead Generation</span>
          </div>

          <div className="mt-10 flex gap-6 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] text-black font-semibold"
            >
              Get Free Audit
            </Link>

            <Link
              href="/real-estate-digital-marketing-projects-epoque-group"
              className="px-8 py-3 rounded-full border border-white/20"
            >
              View Case Studies
            </Link>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 bg-[#0c0c0d]">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-10">
            Social Media Marketing Services in Hyderabad
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Instagram Marketing",
              "Facebook Ads",
              "Content Creation",
              "Lead Generation",
              "Influencer Marketing",
              "Analytics & Reporting",
            ].map((item, i) => (
              <div key={i} className="p-6 border border-white/10 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-gray-400">
                  Performance-driven strategies to grow your business using social media.
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WhyChooseSection />
      <FAQSection />

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Social Media Marketing Services",
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