import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import WhyChooseSection from "./WhyChooseSection"
import AboutFAQSection from "./AboutFAQSection"

export const metadata: Metadata = {
    title:
        "About Epoque Group | Best Digital Marketing & Real Estate Marketing Agency in Hyderabad",
    description:
        "Epoque Group is a leading digital marketing and real estate marketing agency in Hyderabad specializing in SEO, Google Ads, branding, performance marketing and structured revenue growth systems.",
    keywords: [
        "Best digital marketing agency in Hyderabad",
        "Real estate marketing company Hyderabad",
        "SEO agency Hyderabad",
        "Google Ads company Hyderabad",
        "Property lead generation agency",
        "Performance marketing Hyderabad",
    ],
    alternates: {
        canonical: "https://epoquegroup.in/about",
    },
    openGraph: {
        title:
            "About Epoque Group | Hyderabad Digital & Real Estate Marketing Experts",
        description:
            "Performance-driven digital marketing and real estate branding agency helping businesses scale revenue in Hyderabad and across India.",
        url: "https://epoquegroup.in/about",
        type: "website",
    },
}

export default function AboutPage() {
    return (
        <main className="relative bg-[#050505] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-32 space-y-24">

                {/* HERO */}
                <section className="text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Epoque Group
                        </span>
                    </h1>

                    <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
                        Epoque Group is one of the best digital marketing and real estate
                        marketing agencies in Hyderabad, specializing in Search Engine
                        Optimization (SEO), Google Ads management, Meta advertising,
                        high-intent lead generation, and structured revenue growth systems.
                    </p>
                </section>

                {/* COMPANY STORY */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Our Mission & Vision
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our mission is to build scalable digital growth ecosystems for
                        businesses in Hyderabad and across India. We help brands dominate
                        search engines, generate qualified leads, and convert traffic into
                        measurable revenue.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our vision is to become the most trusted digital marketing agency
                        in Hyderabad by delivering transparent, performance-driven
                        marketing strategies backed by analytics and conversion science.
                    </p>
                </section>

                {/* EXPERTISE */}
                <section className="space-y-10">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Our Core Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 text-gray-400 text-lg leading-relaxed">
                        <ul className="space-y-4 list-disc list-inside">
                            <li>Real Estate Marketing & Luxury Project Launch Campaigns</li>
                            <li>High-Conversion Lead Generation Funnels</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Google Search & Display Advertising</li>
                        </ul>

                        <ul className="space-y-4 list-disc list-inside">
                            <li>Meta (Facebook & Instagram) Advertising</li>
                            <li>Performance Marketing & Revenue Optimization</li>
                            <li>Brand Positioning & Creative Strategy</li>
                            <li>Business & Growth Consulting</li>
                        </ul>
                    </div>
                </section>

                {/* WHY US */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Why Businesses Choose Epoque Group
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Businesses choose us because we focus on revenue — not vanity
                        metrics. Every campaign is designed around measurable performance,
                        return on investment (ROI), and long-term scalability.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-lg">
                        <ul className="space-y-3">
                            <li>✔ Hyderabad Market Expertise</li>
                            <li>✔ Data-Driven Marketing Frameworks</li>
                            <li>✔ Conversion-Optimized Funnel Systems</li>
                        </ul>

                        <ul className="space-y-3">
                            <li>✔ Advanced SEO & Paid Advertising</li>
                            <li>✔ Transparent Reporting & Analytics</li>
                            <li>✔ Sustainable Revenue Growth Models</li>
                        </ul>
                    </div>
                </section>

                {/* INTERNAL LINKS */}
                <section className="border-t border-white/10 pt-14">
                    <h3 className="text-2xl font-semibold mb-6">
                        Explore Our Services
                    </h3>

                    <div className="flex flex-wrap gap-8 text-[#C79A3B] text-lg">
                        <Link href="/realty" className="hover:text-white transition">
                            Real Estate Marketing
                        </Link>
                        <Link href="/digital" className="hover:text-white transition">
                            Digital Marketing
                        </Link>
                        <Link href="/revenue" className="hover:text-white transition">
                            Revenue Consulting
                        </Link>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact Us
                        </Link>
                    </div>
                </section>

                {/* WHY CHOOSE SECTION COMPONENT */}
                <WhyChooseSection />

                {/* FAQ COMPONENT */}
                <AboutFAQSection />

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
                            addressCountry: "India",
                        },
                    }),
                }}
            />

        </main>
    )
}