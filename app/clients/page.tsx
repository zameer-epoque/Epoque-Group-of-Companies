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
            "Premium real estate developer in Hyderabad. Delivered branding, Google Ads and high-conversion lead generation campaigns.",
        leads: "3,200+"
    },
    {
        name: "Etereo Realty Goa",
        image:
            "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
        description:
            "Luxury villa and gated community developer. Executed SEO, paid ads and full-scale digital launch strategy.",

    },
    {
        name: "Orange County Homes",
        image:
            "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
        description:
            "High-end villa development brand. Built performance funnels and optimized cost-per-lead campaigns.",

    },
    {
        name: "GRSV Infra",
        image:
            "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.jpg",
        description:
            "Infrastructure and residential builder. Implemented structured branding and performance marketing systems.",

    },
    {
        name: "P R Constructions",
        image:
            "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
        description:
            "Residential construction company. Scaled visibility through digital outreach and ROI-driven campaigns.",

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
                <p className="text-gray-400 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
                    Epoque Group is a specialized real estate marketing agency in Hyderabad,
                    helping premium builders like Vasavi Group, Orange County Homes,
                    GRSV Infra and Etereo Realty generate qualified property leads through
                    SEO, Google Ads, Meta Ads and performance-driven digital strategies.
                </p>

                {/* CLIENT GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-3xl bg-[#111111] overflow-hidden hover:-translate-y-2 transition duration-300"
                        >
                            <div className="relative h-60 w-full">
                                <Image
                                    src={client.image}
                                    alt={`${client.name} real estate marketing campaign in Hyderabad by Epoque Group`}
                                    fill
                                    sizes="(max-width:768px) 100vw, 33vw"
                                    priority={index === 0}
                                    className="object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-8 space-y-4">
                                <h2 className="text-2xl font-semibold text-orange-400">
                                    {client.name}
                                </h2>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {client.description}
                                </p>


                            </div>
                        </div>
                    ))}

                </div>

                {/* CONTACT CTA SECTION */}
                <div className="mt-28 text-center">

                    <h2 className="text-4xl font-semibold mb-6">
                        Want Similar Results for Your Project?
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                        Partner with Epoque Group and scale your real estate project
                        through structured branding, SEO, Google Ads and
                        high-conversion lead generation strategies.
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
                        name: "Real Estate Marketing Clients",
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