"use client";

import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/* ================= CLIENT DATA ================= */
const clients = [
  {
    title: "Radhey Constructions",
    location: "Hyderabad",
    image: "/client1.jpg",
    description:
      "Premium villas and apartments with world-class design and high investment value.",
    link: "https://radheyconstructions.com/",
  },
  {
    title: "Vasavi Group",
    location: "Hyderabad",
    image:
      "/vasavi-group-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Executed high-performance lead generation campaigns focused on attracting qualified property buyers across Hyderabad.",
    link: "/Vasavi",
  },
  {
    title: "Om Sree Builders",
    location: "Hyderabad",
    image: "/om-sree-builders-qualified-lead-generation.jpg",
    description:
      "Structured, criteria-based qualified lead generation delivering high-intent prospects.",
    link: "/om-sree-delight-2bhk-3bhk-luxury-apartments-for-sale-in-yapral-hyderabad",
  },
  {
    title: "PR Constructions Sunridge Homes",
    location: "Hyderabad",
    image:
      "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
    description:
      "Delivered consistent qualified buyer enquiries through targeted digital campaigns.",
  },
  {
    title: "Orange County Homes - Callisto5 Villas",
    location: "Hyderabad",
    image:
      "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
    description:
      "Designed a performance-driven qualified lead generation system reducing CPL and improving conversions.",
    link: "/callisto5-4bhk-triplex-villas-for-sale-in-tukkuguda-hyderabad",
  },
  {
    title: "GRSV Infra",
    location: "Hyderabad",
    image:
      "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.png",
    description:
      "Implemented SEO and paid media campaigns strengthening booking pipeline growth.",
  },
  {
    title: "Etereo Realty Etereo 1",
    location: "Goa",
    image:
      "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
    description:
      "Built a strategic villa lead generation funnel delivering highly qualified premium buyer enquiries.",
    link: "/ETEREO1",
  },
  {
    title: "Macro Express",
    location: "Mumbai & Nagpur",
    image: "/marco-express-sales-acceleration-outsourced-growth.png",
    description:
      "End-to-end outsourced revenue growth support and sales acceleration systems.",
  },
  {
    title: "Property Handling",
    location: "Hyderabad",
    image: "/client2.jpg",
    description:
      "Comprehensive real estate solutions including buying, selling, and investment advisory.",
    link: "/property-management-service-in-hyderabad",
  },
  {
    title: "Garikipati Towers",
    location: "Hyderabad",
    image:
      "/garikipati-towers-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Premium real estate developer offering luxury villas and apartments.",
    link: "/Garikipati-Towers-1.5-2-3-BHK-Luxury-Apartments-For-Sale-in-Hyderabad",
  },
  {
    title: "Apr Praveens Hillside Luxury Villas",
    location: "Hyderabad",
    image:
      "/APR-Hills-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Executed high-performance lead generation campaigns across Hyderabad.",
    link: "/Apr-Praveens-Hillside-4BHK-Luxury-Villas-For-Sale-in-Bachupally-Hyderabad",
  },
];

/* ================= PAGE ================= */
export default function ClientsPage() {
  return (
    <>
      {/* SEO META */}
      <Head>
        <title>
          Real Estate Marketing Projects in Hyderabad | Epoque Group
        </title>

        <meta
          name="description"
          content="Explore real estate marketing projects in Hyderabad by Epoque Group. We help builders and developers generate high-quality leads using SEO, Google Ads, and performance marketing."
        />

        <link
          rel="canonical"
          href="https://epoquegroup.in/real-estate-digital-marketing-projects-hyderabad-epoque-group"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Real Estate Marketing Projects in Hyderabad | Epoque Group" />
        <meta property="og:description" content="High-performance real estate marketing strategies in Hyderabad." />
        <meta property="og:url" content="https://epoquegroup.in/real-estate-digital-marketing-projects-hyderabad-epoque-group" />
        <meta property="og:image" content="https://epoquegroup.in/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Marketing Projects in Hyderabad | Epoque Group" />
        <meta name="twitter:image" content="https://epoquegroup.in/og-image.jpg" />
      </Head>

      <main className="relative bg-black text-white min-h-screen overflow-hidden py-28">

        {/* HEADER */}
        <header className="text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Real Estate Marketing Projects in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Hyderabad
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Explore our <strong>real estate marketing projects in Hyderabad</strong> where we help 
            builders generate <strong>high-quality property leads</strong> using 
            <strong> SEO, Google Ads, and social media marketing</strong>. 
            Our strategies focus on <strong>ROI, lead generation, and conversions</strong>.
          </p>
        </header>

        {/* GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-4 md:px-6 max-w-7xl mx-auto">
  {clients.map((client, index) => {
    const isExternal = client.link?.startsWith("http");

    return (
      <motion.article
        key={index}
        whileHover={{ scale: 1.03 }}
        className="group"
      >
        {client.link ? (
          <Link
            href={client.link}
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
            aria-label={`${client.title} project details`}
          >
            <Card client={client} />
          </Link>
        ) : (
          <div>
            <Card client={client} />
          </div>
        )}
      </motion.article>
    );
  })}
</section>

        {/* CTA */}
        <div className="text-center mt-32 max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Ready to Generate High-Quality Property Leads?
          </h2>

          <p className="text-gray-400 text-lg mb-8">
            Partner with <strong>Epoque Group</strong> for 
            <strong> real estate marketing in Hyderabad</strong>. 
            We deliver <strong>qualified leads</strong>, increase site visits, 
            and boost conversions for villas and apartments.
          </p>

          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold"
          >
            Get Free Marketing Strategy
          </Link>
        </div>

        {/* SCHEMA */}
        <Script
          id="schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Epoque Group",
                url: "https://epoquegroup.in",
              },
              {
                "@type": "ItemList",
                itemListElement: clients.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.title,
                })),
              },
            ]),
          }}
        />
      </main>
    </>
  );
}

/* ================= CARD ================= */
function Card({ client }: { client: any }) {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-xl transition duration-300 group-hover:border-orange-400/40">

      {/* IMAGE */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={client.image}
          alt={`${client.title} real estate project in ${client.location} by Epoque Group`}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          {client.link && (
            <span className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full">
              View Project
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-500 group-hover:text-yellow-400 transition">
          {client.title}
        </h3>

        <p className="text-orange-400 text-sm mt-1">
          {client.location}
        </p>

        <p className="text-gray-400 text-sm mt-3 leading-relaxed">
          {client.description}
        </p>

        {/* MOBILE BUTTON (IMPORTANT) */}
        {client.link && (
          <div className="mt-4 sm:hidden">
            <span className="text-yellow-400 text-sm font-medium">
              View Project →
            </span>
          </div>
        )}
      </div>
    </div>
  );
}