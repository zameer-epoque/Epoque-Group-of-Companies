import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
    title: "About Epoque Group | Real Estate & Digital Marketing Agency in Hyderabad",
    description:
        "Learn about Epoque Group – a leading real estate and digital marketing agency in Hyderabad specializing in branding, lead generation, SEO and revenue growth systems.",
    keywords: [
        "Digital marketing agency Hyderabad",
        "Real estate marketing Hyderabad",
        "Branding agency Hyderabad",
        "Property lead generation company",
        "Revenue consulting Hyderabad"
    ],
    alternates: {
        canonical: "https://epoquegroup.in/about"
    },
    openGraph: {
        title: "About Epoque Group | Hyderabad Marketing Experts",
        description:
            "Epoque Group is a performance-driven real estate and digital marketing agency in Hyderabad helping businesses scale revenue.",
        url: "https://epoquegroup.in/about",
        type: "website"
    }
}

export default function AboutPage() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-24">

            <div className="max-w-6xl mx-auto space-y-16">

                {/* HERO */}
                <section className="space-y-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Epoque Group
                        </span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a Hyderabad-based real estate and digital marketing agency
                        specializing in branding, performance marketing, lead generation,
                        SEO strategies and structured revenue growth systems.
                    </p>
                </section>

                {/* COMPANY STORY */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-3xl font-semibold text-white">
                        Our Mission & Vision
                    </h2>

                    <p>
                        Our mission is simple — to help businesses in Hyderabad and across India
                        build powerful brand authority and scalable revenue systems.
                    </p>

                    <p>
                        We combine strategic thinking, data-driven marketing and high-end creative
                        execution to create measurable business impact.
                    </p>

                    <p>
                        From luxury real estate developers in Kokapet and Financial District
                        to startups in Gachibowli and Hitech City, we deliver structured
                        growth frameworks designed for long-term sustainability.
                    </p>
                </section>

                {/* EXPERTISE */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-semibold text-white">
                        What We Specialize In
                    </h2>

                    <ul className="text-gray-400 list-disc list-inside space-y-3">
                        <li>Real Estate Marketing & Project Launch Campaigns</li>
                        <li>Luxury Villa & Premium Property Branding</li>
                        <li>High-Intent Lead Generation Systems</li>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Google Ads & Performance Marketing</li>
                        <li>Business & Revenue Consulting</li>
                    </ul>
                </section>

                {/* WHY CHOOSE US */}
                <section className="space-y-6 text-gray-400 leading-relaxed">
                    <h2 className="text-3xl font-semibold text-white">
                        Why Businesses Choose Epoque Group
                    </h2>

                    <p>
                        We don’t believe in generic marketing. Every strategy we design
                        is customized based on market positioning, audience behavior
                        and conversion psychology.
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>✔ Hyderabad Market Expertise</li>
                        <li>✔ Revenue-Focused Strategy</li>
                        <li>✔ Structured Funnel Systems</li>
                        <li>✔ Data-Driven Campaign Optimization</li>
                        <li>✔ Transparent Reporting</li>
                    </ul>
                </section>

                {/* INTERNAL LINKS */}
                <section className="border-t border-white/10 pt-12 space-y-4">
                    <h3 className="text-2xl font-semibold">
                        Explore Our Services
                    </h3>

                    <div className="flex flex-wrap gap-6 text-orange-400">
                        <Link href="/realty">Real Estate Marketing</Link>
                        <Link href="/digital">Digital Marketing</Link>
                        <Link href="/revenue">Revenue Consulting</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                </section>

                {/* FAQ */}
                <section className="pt-16 space-y-8">
                    <h2 className="text-3xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-6 text-gray-400">

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Where is Epoque Group located?
                            </h3>
                            <p>
                                We are based in Hyderabad, Telangana, serving clients across India.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you specialize in real estate marketing?
                            </h3>
                            <p>
                                Yes. We specialize in real estate branding, project launches,
                                luxury villa marketing and property lead generation.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-orange-400 font-semibold">
                                Do you work with startups and enterprises?
                            </h3>
                            <p>
                                Yes. We support startups, SMEs and large enterprises
                                with scalable digital growth systems.
                            </p>
                        </div>

                    </div>
                </section>

                {/* CTA */}
                <section className="text-center pt-20">
                    <h2 className="text-3xl font-semibold">
                        Ready to Scale Your Business?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s build a structured growth strategy tailored for your brand.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
            hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get In Touch
                    </Link>
                </section>

            </div>

            {/* ORGANIZATION SCHEMA */}
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Epoque Group",
                        url: "https://epoquegroup.in",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Hyderabad",
                            addressRegion: "Telangana",
                            addressCountry: "India"
                        }
                    })
                }}
            />

            {/* FAQ SCHEMA */}
            <Script
                id="about-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Where is Epoque Group located?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Epoque Group is located in Hyderabad, Telangana, India."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you specialize in real estate marketing?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we specialize in real estate branding, lead generation and project launch marketing."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}