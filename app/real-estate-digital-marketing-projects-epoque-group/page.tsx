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
        canonical:
            "https://epoquegroup.in/real-estate-digital-marketing-projects-epoque-group"
    },
    openGraph: {
        title:
            "Real Estate Marketing Case Studies | Epoque Group Hyderabad",
        description:
            "See how Epoque Group scales real estate brands through SEO, Google Ads and performance marketing strategies.",
        url:
            "https://epoquegroup.in/real-estate-digital-marketing-projects-epoque-group",
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
        image: "/vasavi-group-real-estate-marketing-hyderabad-epoque-group.jpg",
        description:
            "Delivered structured real estate branding, Google Ads and SEO campaigns generating high-intent property leads across Hyderabad micro-markets."
    },
    {
        name: "Etereo Realty Goa",
        image: "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
        description:
            "Executed full-scale digital launch strategy including villa marketing funnels, Meta Ads campaigns and qualified buyer acquisition.",
        link: "https://etereo-1.vercel.app/"
    },
    {
        name: "Orange County Homes",
        image: "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
        description:
            "Built conversion-optimized landing pages and performance marketing systems reducing cost-per-lead significantly."
    },
    {
        name: "GRSV Infra",
        image: "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.png",
        description:
            "Implemented SEO-driven real estate marketing strategy improving search visibility and booking pipeline growth."
    },
    {
        name: "P R Constructions",
        image: "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
        description:
            "Scaled project visibility through structured branding, paid advertising and ROI-focused digital outreach campaigns."
    },
    {
        name: "Marco Express",
        image: "/marco-express-sales-acceleration-outsourced-growth.png",
        description:
            "End-to-end sales acceleration and outsourced revenue support designed to drive consistent growth, pipeline expansion and faster deal closures."
    },
    {
        name: "Om Sree Builders",
        image: "/om-sree-builders-qualified-lead-generation.jpg",
        description:
            "Structured, criteria-based qualified lead generation program focused on delivering high-intent prospects and improving conversion efficiency."
    }
]

export default function ClientsPage() {
    return (
        <main className="bg-black text-white min-h-screen overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 py-24">

                {/* HEADER */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Real Estate Marketing Case Studies in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
                        Epoque Group is a performance-driven real estate marketing agency in Hyderabad,
                        helping builders and developers scale projects using SEO, Google Ads,
                        Meta Ads and structured lead generation strategies.
                    </p>
                </div>

                {/* CLIENT GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

                    {clients.map((client, index) => {

                        const Wrapper: any = client.link ? "a" : "div"

                        return (
                            <div key={index} className="relative group">

                                <Wrapper
                                    {...(client.link && {
                                        href: client.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    })}
                                    className="block"
                                >

                                    {/* Glow Background */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-500"></div>

                                    {/* Card */}
                                    <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-white/10 overflow-hidden transition-all duration-500 group-hover:scale-[1.03] group-hover:border-orange-400/40 group-hover:shadow-[0_0_40px_rgba(255,140,0,0.25)]">

                                        {/* IMAGE */}
                                        <div className="relative w-full aspect-[4/3] overflow-hidden">

                                            <Image
                                                src={client.image}
                                                alt={`${client.name} real estate marketing campaign in Hyderabad by Epoque Group`}
                                                fill
                                                quality={100}
                                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                                priority={index === 0}
                                                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                                            />

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>

                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-8 space-y-5">

                                            <h2 className="text-2xl font-semibold text-orange-400 group-hover:text-yellow-400 transition">
                                                {client.name}
                                            </h2>

                                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition">
                                                {client.description}
                                            </p>

                                            {client.link && (
                                                <span className="inline-block pt-2 text-sm font-medium text-yellow-400">
                                                    View Live Project →
                                                </span>
                                            )}

                                        </div>
                                    </div>

                                </Wrapper>
                            </div>
                        )
                    })}

                </div>

                {/* Divider */}
                <div className="relative my-20">
                    <div className="h-[2px] w-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 rounded-full"></div>
                    <div className="absolute inset-0 h-[6px] bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 blur-md opacity-40"></div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        Want Similar Results for Your Project?
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Partner with Epoque Group and scale your real estate project
                        through structured branding, SEO, Google Ads and
                        high-conversion lead generation systems.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                        hover:scale-105 transition duration-300 shadow-2xl"
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
                            description: client.description,
                            url: client.link || undefined
                        }))
                    })
                }}
            />
        </main>
    )
}