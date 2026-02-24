import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Real Estate Marketing Case Studies in Hyderabad | Epoque Group Clients",
    description:
        "Explore real estate marketing case studies by Epoque Group in Hyderabad including Vasavi Group, Orange County Homes, GRSV Infra and more. SEO, Google Ads and high-conversion lead generation campaigns.",
    keywords: [
        "Real estate marketing Hyderabad",
        "Vasavi Group marketing",
        "Orange County Homes marketing",
        "Real estate lead generation Hyderabad",
        "Builders digital marketing Hyderabad",
        "Epoque Group case studies"
    ],
    alternates: {
        canonical: "https://epoquegroup.in/clients"
    },
    openGraph: {
        title:
            "Real Estate Marketing Case Studies | Epoque Group Hyderabad",
        description:
            "See how Epoque Group scales real estate brands through SEO, Google Ads and performance marketing strategies.",
        url: "https://epoquegroup.in/clients",
        siteName: "Epoque Group",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Real Estate Marketing Clients | Epoque Group",
        description:
            "Hyderabad real estate marketing case studies and project growth results."
    }
}

const clients = [
    {
        name: "Vasavi Group",
        image:
            "/vasavi-group-real-estate-marketing-hyderabad-epoque-group.jpg",
        description:
            "Delivered structured real estate branding, Google Ads and SEO campaigns generating high-intent property leads across Hyderabad micro-markets."
    },
    {
        name: "Etereo Realty Goa",
        image:
            "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
        description:
            "Executed full-scale digital launch strategy including villa marketing funnels, Meta Ads campaigns and qualified buyer acquisition."
    },
    {
        name: "Orange County Homes",
        image:
            "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
        description:
            "Built conversion-optimized landing pages and performance marketing systems reducing cost-per-lead significantly."
    },
    {
        name: "GRSV Infra",
        image:
            "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.jpg",
        description:
            "Implemented SEO-driven real estate marketing strategy improving search visibility and booking pipeline growth."
    },
    {
        name: "P R Constructions",
        image:
            "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
        description:
            "Scaled project visibility through structured branding, paid advertising and ROI-focused digital outreach campaigns."
    }
]

export default function ClientsPage() {
    return (
        <main className="bg-black text-white min-h-screen">

            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* H1 */}
                <h1 className="text-5xl font-semibold text-center mb-8">
                    Real Estate Marketing Case Studies in{" "}
                    <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                {/* SEO Intro */}
                <p className="text-gray-400 max-w-3xl mx-auto text-center mb-20 leading-relaxed">
                    Epoque Group is a performance-driven real estate marketing agency in Hyderabad,
                    helping builders and developers scale projects using SEO, Google Ads,
                    Meta Ads and structured lead generation strategies.
                </p>

                {/* CLIENT GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {clients.map((client, index) => (
                        <div key={index} className="relative group">

                            {/* Gradient Hover Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 rounded-3xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>

                            {/* Card Wrapper */}
                            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 transition duration-300 group-hover:scale-[1.03]">

                                <div className="rounded-3xl bg-[#111111] overflow-hidden border border-white/5 h-full transition duration-300 group-hover:border-orange-400/30">

                                    {/* IMAGE */}
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <Image
                                            src={client.image}
                                            alt={`${client.name} real estate marketing campaign in Hyderabad by Epoque Group`}
                                            fill
                                            sizes="(max-width:768px) 100vw, 33vw"
                                            priority={index === 0}
                                            className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                                        />
                                    </div>

                                    {/* CONTENT */}
                                    <div className="p-8 space-y-4">

                                        <h2 className="text-2xl font-semibold text-orange-400 transition duration-300 group-hover:text-yellow-400">
                                            {client.name}
                                        </h2>

                                        <p className="text-gray-400 text-sm leading-relaxed transition duration-300 group-hover:text-gray-300">
                                            {client.description}
                                        </p>

                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>
                {/* PREMIUM GRADIENT DIVIDER */}
                <div className="relative my-12">
                    <div className="h-[2px] w-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full"></div>
                    <div className="absolute inset-0 h-[6px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 blur-md opacity-40"></div>
                </div>
                {/* CONTACT CTA SECTION */}
                <div className="mt-12 text-center">

                    <h2 className="text-4xl font-semibold mb-6">
                        Want Similar Results for Your Project?
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                        Partner with Epoque Group and scale your real estate project
                        through structured branding, SEO, Google Ads and
                        high-conversion lead generation systems.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Book Strategy Consultation
                    </Link>

                </div>

            </div>

            {/* STRUCTURED DATA */}
            <Script
                id="clients-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Real Estate Marketing Case Studies",
                        itemListElement: clients.map((client, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name: client.name,
                            description: client.description
                        }))
                    })
                }}
            />

        </main>
    )
}
