import { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
    title:
        "Social Media Marketing Services in Hyderabad | Best SMM Agency India",
    description:
        "Top Social Media Marketing agency in Hyderabad offering Instagram marketing, Facebook Ads, paid advertising and lead generation services across India.",
    keywords: [
        "Social Media Marketing in Hyderabad",
        "SMM agency Hyderabad",
        "Instagram marketing Hyderabad",
        "Facebook Ads company India",
        "Digital marketing company Hyderabad",
    ],
    alternates: {
        canonical: "https://epoquegroup.in/social-media-marketing",
    },
    openGraph: {
        title: "Best Social Media Marketing Services in Hyderabad",
        description:
            "Grow your brand with expert Social Media Marketing services in Hyderabad & across India.",
        url: "https://epoquegroup.in/social-media-marketing",
        type: "website",
    },
}

export default function SocialMediaMarketing() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative py-28 text-center px-6">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Social Media Marketing Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We help businesses scale revenue through performance-driven
                        Instagram marketing, Facebook Ads, Meta advertising,
                        content strategy and audience targeting frameworks.
                        Our campaigns are engineered for high-intent leads,
                        measurable ROI and long-term brand authority.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-10 py-4 rounded-full font-semibold
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
            text-black hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Free Consultation
                    </Link>

                </div>
            </section>

            {/* AUTHORITY CONTENT */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-5xl mx-auto text-gray-400 space-y-8 leading-relaxed">

                    <h2 className="text-3xl font-semibold text-white">
                        High-Performance Social Media Marketing for Hyderabad Brands
                    </h2>

                    <p>
                        Hyderabad is one of India’s fastest-growing business hubs.
                        Whether you operate in Gachibowli, Financial District,
                        Hitech City, Banjara Hills or Jubilee Hills,
                        social media visibility directly impacts brand credibility
                        and customer acquisition.
                    </p>

                    <p>
                        Our Social Media Marketing services combine creative storytelling,
                        advanced audience targeting, conversion-focused paid advertising
                        and structured analytics to deliver consistent growth.
                    </p>

                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-28 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                        Our Social Media Marketing Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Instagram Marketing",
                                desc: "Reels strategy, influencer collaborations, content calendars and paid campaigns designed to scale engagement and visibility.",
                            },
                            {
                                title: "Facebook & Meta Ads",
                                desc: "Conversion-driven advertising campaigns optimized for lead generation and high ROI.",
                            },
                            {
                                title: "Brand Positioning & Content Strategy",
                                desc: "Structured content frameworks that strengthen brand authority and audience loyalty.",
                            },
                            {
                                title: "Performance Campaign Scaling",
                                desc: "Data-driven ad optimization to reduce cost-per-lead and increase revenue efficiency.",
                            },
                            {
                                title: "Social Media Analytics & Reporting",
                                desc: "Transparent monthly reports with actionable insights and growth metrics.",
                            },
                            {
                                title: "Lead Generation Funnels",
                                desc: "Integrated landing pages and CRM automation systems for maximum conversion rates.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative p-[1.5px] rounded-3xl
                bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                hover:shadow-[0_0_50px_rgba(199,154,59,0.6)]
                transition-all duration-500"
                            >
                                <div className="rounded-3xl p-10
                bg-gradient-to-br from-[#111111] to-[#1a1a1a]
                border border-white/5
                group-hover:-translate-y-3
                group-hover:scale-[1.04]
                transition-all duration-500">

                                    <h3 className="text-xl font-semibold mb-6 group-hover:text-[#C79A3B] transition">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <ul className="space-y-6 text-lg text-gray-400">
                        <li>✔ Hyderabad Market Expertise</li>
                        <li>✔ Advanced Audience Targeting Systems</li>
                        <li>✔ ROI-Focused Paid Advertising</li>
                        <li>✔ Creative + Performance Hybrid Strategy</li>
                        <li>✔ Transparent Growth Reporting</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Unlike generic agencies, we combine branding psychology
                        with performance marketing systems to ensure your social
                        media investment drives real business growth.
                    </p>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-10 text-gray-400">

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Why is social media marketing important in Hyderabad?
                            </h3>
                            <p className="mt-3">
                                Social media increases brand visibility, builds trust
                                and generates qualified leads in competitive markets.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Do you run paid ads on Instagram and Facebook?
                            </h3>
                            <p className="mt-3">
                                Yes, we manage performance-driven Meta advertising
                                campaigns optimized for conversions and ROI.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center border-t border-white/5">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Scale Your Brand in Hyderabad?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let’s build a high-performance social media strategy for your business.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-12 py-4 rounded-full font-semibold
          bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
          text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Contact Our Experts
                </Link>
            </section>

            {/* SCHEMA */}
            <Script
                id="smm-service-schema"
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
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

        </div>
    )
}