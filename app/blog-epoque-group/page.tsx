import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Luxury Villa Marketing Strategy in Hyderabad | Real Estate SEO & Lead Generation",
  description:
    "Discover premium luxury villa marketing strategies in Hyderabad including SEO, AI lead generation, branding, Google Ads, Meta Ads, NRI targeting, and conversion-focused real estate growth systems.",
  keywords: [
    "Luxury Villa Marketing Hyderabad",
    "Real Estate Marketing Agency Hyderabad",
    "Real Estate SEO India",
    "Luxury Real Estate Lead Generation",
    "Digital Marketing Hyderabad",
    "Google Ads for Builders",
    "SEO Company Hyderabad",
  ],

  alternates: {
    canonical:
      "https://epoquegroup.in/blog/luxury-villa-marketing-strategy-hyderabad",
  },

  openGraph: {
    title:
      "Luxury Villa Marketing Strategy in Hyderabad",
    description:
      "Premium guide for luxury villa marketing, SEO, AI lead generation and real estate growth systems.",
    images: ["/blog1.jpg"],
  },
};

const points = [
  "AI-Powered Lead Generation",
  "Luxury Branding Positioning",
  "Google & Meta Advertising",
  "NRI Buyer Targeting",
  "SEO & Organic Visibility",
  "Conversion Funnel Optimization",
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">

      {/* Premium Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="h-[1200px] w-[1200px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[250px]" />
      </div>

      <article className="relative max-w-7xl mx-auto px-4 py-28">

        {/* HERO */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* Badge */}
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
              Real Estate Marketing • SEO • Hyderabad
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
              Luxury Villa Marketing Strategy in{" "}
              <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                Hyderabad
              </span>
            </h1>

            {/* Description */}
            <p className="mt-10 text-lg md:text-xl leading-[2] text-gray-400">
              Luxury real estate marketing in Hyderabad requires premium
              positioning, AI-powered lead generation, SEO visibility,
              conversion-focused advertising, and strategic digital ecosystems
              engineered to attract HNI and NRI buyers.
            </p>

            {/* Points */}
            <div className="mt-10 grid sm:grid-cols-2 gap-5">

              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#C79A3B]"
                  />

                  <span className="text-gray-300">
                    {point}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] px-8 py-4 text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                Schedule Strategy Call
                <ArrowUpRight size={18} />
              </Link>

              <Link
                href="/realty/luxury-villa-marketing"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              >
                Explore Services
              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="rounded-[40px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

              <div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-[#111]">

                <div className="relative h-[500px]">

                  <Image
                    src="/blog1.jpg"
                    alt="Luxury Villa Marketing Hyderabad"
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONTENT */}
        <section className="mt-28 grid gap-14">

          {[
            {
              title: "Understanding Luxury Buyer Psychology",
              content:
                "Luxury villa buyers evaluate projects based on exclusivity, long-term value, architecture, location, infrastructure growth, developer credibility, and lifestyle positioning. Premium buyers in Hyderabad expect curated digital experiences and trust-driven communication systems.",
            },

            {
              title: "SEO & Organic Visibility for Real Estate",
              content:
                "Real estate SEO helps luxury villa projects rank higher on Google search results for high-intent keywords like villas in Hyderabad, gated communities, luxury homes, and investment properties. Structured SEO improves long-term lead generation and organic authority.",
            },

            {
              title: "Performance Marketing & Paid Advertising",
              content:
                "Google Ads, Meta Ads, YouTube campaigns, and AI-powered retargeting systems help attract high-net-worth buyers and increase qualified site visits. Advanced funnel optimization reduces CPL while improving lead quality.",
            },

            {
              title: "NRI Targeting & International Campaigns",
              content:
                "NRI investors from UAE, USA, UK, and Australia represent a major luxury villa audience for Hyderabad developers. Dedicated international ad campaigns and webinar funnels significantly improve qualified buyer acquisition.",
            },

            {
              title: "Luxury Branding & Conversion Systems",
              content:
                "Premium branding, high-end brochures, luxury landing pages, cinematic walkthroughs, WhatsApp automation, and conversion-focused nurturing systems increase trust and accelerate booking velocity.",
            },
          ].map((item, index) => (
            <section
              key={index}
              className="group relative"
            >
              {/* Border */}
              <div className="rounded-[32px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

                {/* Card */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1d1d1d] p-10">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.08),transparent_60%)]" />

                  <div className="relative z-10">

                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                      {item.title}
                    </h2>

                    <div className="mt-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#D45B5B]" />

                    <p className="mt-8 text-lg md:text-xl leading-[2] text-gray-400">
                      {item.content}
                    </p>

                  </div>

                </div>

              </div>
            </section>
          ))}

        </section>

        {/* CTA */}
        <section className="relative mt-32 text-center">

          <div className="rounded-[40px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1px]">

            <div className="rounded-[40px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1d1d1d] px-8 py-20">

              <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
                Ready To Scale Your{" "}
                <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                  Luxury Villa Project?
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg md:text-xl leading-[2] text-gray-400">
                Build a premium real estate growth ecosystem with SEO,
                AI-powered lead generation, performance marketing,
                and conversion-focused branding systems.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 mt-12 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] px-10 py-5 text-black font-semibold transition-all duration-300 hover:scale-105"
              >
                Schedule Strategy Call
                <ArrowUpRight size={20} />
              </Link>

            </div>

          </div>

        </section>

      </article>

      {/* SCHEMA */}
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Luxury Villa Marketing Strategy in Hyderabad",
            description:
              "Premium guide for luxury villa marketing, SEO, lead generation and digital growth systems.",
            author: {
              "@type": "Organization",
              name: "Epoque Group",
            },
            publisher: {
              "@type": "Organization",
              name: "Epoque Group",
            },
          }),
        }}
      />

    </main>
  );
}