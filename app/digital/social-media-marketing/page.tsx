import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";


import WhyChooseSection from "./WhyChooseSection";


export const metadata: Metadata = {
    title:
        "Social Media Marketing Services in Hyderabad | Best SMM Agency India",
    description:
        "Top Social Media Marketing agency in Hyderabad offering Instagram marketing, Facebook Ads, Meta advertising and lead generation services across India.",
    keywords: [
        "Social Media Marketing Hyderabad",
        "SMM agency Hyderabad",
        "Instagram marketing Hyderabad",
        "Facebook Ads company India",
        "Digital marketing agency Hyderabad",
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
};

export default function SocialMediaMarketing() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

            {/* ================= HERO ================= */}
            <section className="relative py-32 text-center px-6 overflow-hidden">

                {/* Background Glow */}
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[140px] rounded-full"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#7A2E63]/20 blur-[140px] rounded-full"></div>

                <div className="relative max-w-5xl mx-auto">

                    {/* Top Badge */}

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Best Social Media Marketing Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>
                    <div className="inline-block px-6 py-4 mt-2 rounded-full border border-orange-400 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8">
                        Hyderabad’s Performance-Driven Digital Marketing Experts
                    </div>

                    {/* SEO Rich Description */}
                    <p className="mt-2 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a leading Social Media Marketing agency in Hyderabad
                        specializing in Instagram marketing, Facebook Ads management, Meta
                        advertising, and performance-driven lead generation campaigns.
                        We help startups, real estate brands, eCommerce businesses, and
                        enterprises scale through ROI-focused paid social media strategies,
                        advanced audience targeting, and conversion optimization frameworks.
                    </p>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>✔ Instagram Growth Campaigns</span>
                        <span>✔ Meta & Facebook Ads Experts</span>
                        <span>✔ High-Conversion Lead Funnels</span>
                        <span>✔ ROI-Focused Strategy</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold
      bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
      text-black hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Strategy Consultation
                        </Link>

                        <Link
                            href="/real-estate-digital-marketing-projects-epoque-group"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
      hover:border-[#C79A3B] hover:text-[#C79A3B]
      transition duration-300"
                        >
                            View Case Studies
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= ELITE SERVICES SECTION ================= */}
            <section className="relative py-12 px-6 bg-[#0c0c0d] text-white overflow-hidden">

                {/* Subtle top divider glow */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center mb-28">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Social Media Marketing Services <span className="text-white">in Hyderabad & Across India</span>
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                            As a leading Social Media Marketing agency in Hyderabad, we deliver
                            conversion-focused Instagram marketing, Facebook Ads management,
                            and advanced Meta advertising solutions designed to generate qualified
                            leads and measurable ROI. Our performance-driven paid acquisition
                            strategies combine creative content, precision audience targeting,
                            and continuous campaign optimization to help brands increase visibility,
                            boost engagement, and scale revenue sustainably.
                        </p>

                        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                            Whether you're a startup, real estate developer, eCommerce brand,
                            or established enterprise, our data-backed digital marketing frameworks
                            are engineered to dominate competitive markets and build long-term
                            growth systems that convert attention into consistent business results.
                        </p>
                    </div>
                    {/* Premium Grid */}
                    <div className="grid md:grid-cols-3 gap-20 ">

                        {[
                            "Instagram Marketing Strategy",
                            "Facebook & Meta Ads Management",
                            "Brand Positioning & Content Strategy",
                            "Performance Campaign Optimization",
                            "Analytics & ROI Reporting",
                            "Lead Generation Funnels",
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >

                                {/* Hover background layer */}
                                <div className="absolute inset-0 rounded-xl bg-[#151516] 
opacity-0 group-hover:opacity-100 
transition duration-500 
border border-amber-600"></div>

                                {/* Content */}
                                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3">

                                    <span className="text-sm text-orange-400 tracking-widest uppercase">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                                        {service}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        Strategic execution combining creative storytelling,
                                        performance-driven media buying and advanced
                                        audience intelligence systems.
                                    </p>

                                    {/* Bottom line animation */}
                                    <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full group-hover:bg-orange-400 transition-all duration-500"></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <WhyChooseSection />

            {/* FAQ CLIENT COMPONENT */}
            <FAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
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
                            url: "https://epoquegroup.in",
                        },
                    }),
                }}
            />
        </div>
    );
}