import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Our Clients | Real Estate Marketing Agency in Hyderabad | Epoque Group",
    description:
        "Explore Epoque Group’s successful real estate marketing projects in Hyderabad. We help builders and developers with branding, SEO, Google Ads, Meta Ads and high-quality real estate lead generation strategies.",
    keywords: [
        "Real Estate Marketing Hyderabad",
        "Real Estate Lead Generation Hyderabad",
        "Property Marketing Agency Hyderabad",
        "Google Ads for Builders",
        "Villa Project Marketing Hyderabad",
        "Real Estate SEO Services",
        "Digital Marketing for Developers Hyderabad"
    ],
    alternates: {
        canonical: "https://epoquegroup.in/clients"
    },
    openGraph: {
        title: "Our Clients | Real Estate Digital Marketing Projects | Epoque Group",
        description:
            "Discover how Epoque Group helps Hyderabad real estate brands scale through branding, SEO and performance marketing strategies.",
        url: "https://epoquegroup.in/clients",
        siteName: "Epoque Group",
        type: "website"
    }
}

const clients = [
    {
        name: "Vasavi Group",
        description:
            "Premium real estate developer in Hyderabad. We supported branding, performance marketing and qualified lead generation campaigns."
    },
    {
        name: "Etereo Realty",
        description:
            "Luxury villa and gated community developer. We executed paid ads, SEO and full-scale project launch marketing strategies."
    },
    {
        name: "Orange County Homes",
        description:
            "Premium villa development brand. We handled digital campaigns, landing page funnels and high-intent lead acquisition."
    },
    {
        name: "GRSV Infra",
        description:
            "Infrastructure and residential developer. Delivered branding, campaign strategy and real estate growth marketing."
    },
    {
        name: "P R Constructions",
        description:
            "Residential construction company. Implemented revenue-focused digital outreach and performance marketing solutions."
    }
]

export default function ClientsPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <div className="max-w-6xl mx-auto px-6 py-24">

                {/* HERO SECTION */}
                <h1 className="text-4xl md:text-5xl font-semibold text-center mb-8">
                    Our Clients & Real Estate Marketing Success Stories
                </h1>

                <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                    Epoque Group is a specialized real estate marketing agency in Hyderabad,
                    helping premium builders generate high-quality property leads,
                    increase site visits and improve booking conversions through
                    performance-driven digital marketing strategies.
                </p>

                {/* CLIENT GRID */}
                <div className="grid md:grid-cols-2 gap-10">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-2xl p-8 bg-[#111111] hover:border-orange-400 transition"
                        >
                            <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                                {client.name}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {client.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* INDUSTRY AUTHORITY SECTION */}
                <div className="mt-24 max-w-5xl mx-auto text-gray-400 space-y-6 leading-relaxed">
                    <h2 className="text-3xl font-semibold text-white text-center">
                        Trusted Real Estate Marketing Partner in Hyderabad
                    </h2>

                    <p>
                        With in-depth understanding of Hyderabad’s real estate market including
                        Gachibowli, Kokapet, Financial District, Narsingi, Tellapur,
                        Kompally and Shamshabad, we create hyper-local marketing campaigns
                        that attract serious homebuyers and NRI investors.
                    </p>

                    <p>
                        Our expertise covers luxury villa marketing, residential apartment
                        project launches, plotted developments and infrastructure branding.
                        We focus on measurable ROI, optimized cost-per-lead and scalable growth.
                    </p>
                </div>

                {/* CASE STUDY SECTION */}
                <div className="mt-24 max-w-5xl mx-auto text-gray-400 space-y-6">
                    <h2 className="text-3xl font-semibold text-white text-center">
                        Real Estate Marketing Case Highlights
                    </h2>

                    <div className="space-y-6 mt-8">
                        <div>
                            <h3 className="text-xl text-orange-400 font-semibold">
                                Luxury Villa Campaign – Hyderabad
                            </h3>
                            <p>
                                Generated qualified buyer inquiries using Google Ads and Meta Ads,
                                improving lead quality and reducing cost-per-lead within 60 days.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl text-orange-400 font-semibold">
                                Residential Apartment Launch
                            </h3>
                            <p>
                                Executed branding, landing page optimization and performance marketing,
                                resulting in increased site visits and improved booking pipeline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ SECTION */}
                <div className="mt-24 max-w-4xl mx-auto text-gray-400 space-y-6">
                    <h2 className="text-3xl font-semibold text-white text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6 mt-8">
                        <div>
                            <h3 className="text-xl text-orange-400 font-semibold">
                                Do you specialize in real estate marketing?
                            </h3>
                            <p>
                                Yes, we specialize in real estate digital marketing in Hyderabad,
                                including lead generation, SEO, Google Ads and project launch campaigns.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl text-orange-400 font-semibold">
                                How do you generate real estate leads?
                            </h3>
                            <p>
                                We use data-driven Google Ads, Meta Ads, SEO and landing page funnels
                                to generate high-intent property leads.
                            </p>
                        </div>
                    </div>
                </div>

                {/* INTERNAL LINKS */}
                <div className="mt-24 text-center">
                    <h2 className="text-3xl font-semibold mb-6">
                        Explore Our Services
                    </h2>

                    <div className="flex flex-wrap justify-center gap-6 text-[#C79A3B]">
                        <Link href="/digital">Digital Marketing</Link>
                        <Link href="/realty">Real Estate Marketing</Link>
                        <Link href="/real-estate-lead-generation">Lead Generation</Link>
                        <Link href="/google-ads-for-builders">Google Ads for Builders</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </div>

            </div>

            {/* LOCAL BUSINESS + FAQ SCHEMA */}
            <Script
                id="schema-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Epoque Group",
                        url: "https://epoquegroup.in",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Hyderabad",
                            addressRegion: "Telangana",
                            addressCountry: "India"
                        },
                        areaServed: "Hyderabad"
                    })
                }}
            />
        </main>
    )
}