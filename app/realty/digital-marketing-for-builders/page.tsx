"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function BrandingCreativePage() {
    return (
        <section className="bg-black text-white">

            {/* HERO */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Branding & Creative Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We are a strategic branding agency in Hyderabad helping real estate
                        developers, startups and enterprises build powerful brand identities,
                        premium visual systems and high-converting creative assets that drive
                        authority, trust and measurable revenue growth.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Build Your Brand
                        </Link>
                    </div>
                </div>
            </div>

            {/* AUTHORITY CONTENT */}
            <div className="max-w-5xl mx-auto px-6 pb-20 text-gray-400 space-y-6 leading-relaxed">

                <h2 className="text-3xl font-semibold text-white">
                    Strategic Branding That Drives Business Growth
                </h2>

                <p>
                    In competitive Hyderabad markets like Gachibowli, Kokapet,
                    Financial District and Hitech City, branding is more than
                    design — it is positioning, perception and emotional influence.
                </p>

                <p>
                    A strong brand system increases premium perception,
                    shortens sales cycles and improves conversion performance
                    across marketing channels.
                </p>

                <p>
                    Our branding frameworks combine market research,
                    competitor mapping, buyer psychology and performance
                    marketing alignment to create identity systems that
                    directly impact revenue.
                </p>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-10">

                {[
                    {
                        title: "Logo & Brand Identity Design",
                        desc: "Strategic logo systems, typography architecture, color psychology and complete brand guidelines."
                    },
                    {
                        title: "Real Estate Branding",
                        desc: "Luxury villa and apartment project branding for Hyderabad developers."
                    },
                    {
                        title: "Corporate & Marketing Collaterals",
                        desc: "Premium brochures, pitch decks and high-converting marketing assets."
                    },
                    {
                        title: "Creative Campaign Visuals",
                        desc: "Performance ad creatives and social media design systems."
                    },
                    {
                        title: "Website UI/UX Branding",
                        desc: "Conversion-focused website experiences that strengthen authority."
                    },
                    {
                        title: "Rebranding & Positioning Strategy",
                        desc: "Complete repositioning systems for scaling brands across India."
                    }
                ].map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20 h-full">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* PROCESS */}
            <div className="bg-[#111111] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-16">
                        Our Proven Branding Process
                    </h2>

                    <div className="grid md:grid-cols-4 gap-10 text-gray-400">
                        {[
                            "Market Research & Brand Audit",
                            "Positioning & Strategic Framework",
                            "Design Execution & Asset Creation",
                            "Launch & Marketing Alignment"
                        ].map((step, index) => (
                            <div key={index} className="space-y-4">
                                <div className="text-4xl font-bold text-orange-400">
                                    0{index + 1}
                                </div>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* INTERNAL LINKS */}
            <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
                <h3 className="text-2xl font-semibold">Related Services</h3>
                <div className="flex flex-wrap justify-center gap-6 text-orange-400">
                    <Link href="/digital/social-media-marketing">
                        Social Media Marketing
                    </Link>
                    <Link href="/digital/search-engine-optimization">
                        SEO Services
                    </Link>
                    <Link href="/digital/google-ads-ppc">
                        Google Ads / PPC
                    </Link>
                </div>
            </div>

            {/* FAQ */}
            <div className="max-w-4xl mx-auto px-6 py-24 space-y-10">
                <h2 className="text-3xl font-semibold text-center">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6 text-gray-400">

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Why is branding important for Hyderabad businesses?
                        </h3>
                        <p>
                            Strong branding increases perceived value,
                            builds trust and differentiates businesses in
                            competitive Hyderabad markets.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you provide branding for real estate projects?
                        </h3>
                        <p>
                            Yes. We specialize in luxury villa projects,
                            apartment launches and developer positioning strategies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold">
                            Do you offer complete brand strategy?
                        </h3>
                        <p>
                            Yes. We handle research, positioning,
                            identity creation and marketing alignment.
                        </p>
                    </div>

                </div>
            </div>

            {/* CTA */}
            <div className="py-28 px-6 text-center">
                <h2 className="text-4xl font-semibold">
                    Ready to Build a Premium Brand in Hyderabad?
                </h2>
                <p className="mt-6 text-gray-400">
                    Let’s create a high-authority brand system that drives revenue growth.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-10 py-4 rounded-full font-semibold text-black 
          bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
          hover:scale-105 transition duration-300 shadow-xl"
                >
                    Start Your Branding Project
                </Link>
            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="branding-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Branding & Creative Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

            {/* FAQ SCHEMA */}
            <Script
                id="branding-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Why is branding important for Hyderabad businesses?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Branding increases perceived value, builds trust and strengthens competitive positioning."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide branding for real estate projects?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we specialize in luxury villa and apartment project branding in Hyderabad."
                                }
                            }
                        ]
                    })
                }}
            />

        </section>
    )
}