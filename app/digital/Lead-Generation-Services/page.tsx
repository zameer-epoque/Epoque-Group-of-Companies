import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LeadGenerationFAQSection from "./LeadGenerationFAQSection";
import WhyChooseLeadGenerationSection from "./WhyChooseLeadGenerationSection";


export const metadata: Metadata = {
    title:
        "Lead Generation Services in Hyderabad | Performance Marketing Agency",
    description:
        "Top Lead Generation agency in Hyderabad offering Google Ads, Meta Ads, landing page funnels, CRM automation, and ROI-driven performance marketing solutions.",
    keywords: [
        "Lead Generation Services Hyderabad",
        "Real Estate Lead Generation Hyderabad",
        "B2B Lead Generation Agency India",
        "Performance Marketing Agency Hyderabad",
        "Google Ads Lead Generation",
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/digital/lead-generation-services",
    },
    openGraph: {
        title:
            "Lead Generation Agency in Hyderabad | High-Intent Business Leads",
        description:
            "Generate consistent, high-quality leads with structured marketing funnels and paid advertising strategies.",
        url: "https://epoquegroup.in/digital/lead-generation-services",
        type: "website",
    },
};

export default function LeadGenerationPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/20 blur-[150px] rounded-full"></div>

            {/* ================= HERO ================= */}
            <section className="relative py-32 text-center px-6">

                <div className="relative max-w-5xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Lead Generation Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8">
                        Performance-Driven Lead Generation Experts
                    </div>

                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a leading Lead Generation agency in Hyderabad
                        specializing in Google Ads, Meta Ads, high-converting landing pages,
                        and CRM automation systems. We help real estate developers, B2B
                        businesses, and service brands generate consistent high-intent
                        inquiries with measurable ROI.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>✔ High-Intent Paid Campaigns</span>
                        <span>✔ Conversion-Focused Landing Pages</span>
                        <span>✔ CRM & WhatsApp Automation</span>
                        <span>✔ ROI-Based Funnel Strategy</span>
                    </div>

                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Lead Strategy Session
                        </Link>

                        <Link
                            href="/real-estate-digital-marketing-projects-epoque-group"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
                        >
                            View Lead Case Studies
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-12 px-6 bg-[#0c0c0d]">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Lead Generation Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                            Our lead generation services are designed to attract,
                            qualify, and convert high-intent prospects into business
                            opportunities. We build structured marketing funnels that
                            reduce cost-per-lead (CPL) while increasing lead quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">

                        {[
                            "Google Ads Lead Generation Campaigns",
                            "Meta (Facebook & Instagram) Lead Funnels",
                            "Landing Page & Funnel Optimization",
                            "Real Estate Lead Generation Systems",
                            "CRM & Automation Integration",
                            "Performance Analytics & Reporting",
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                <div className="absolute inset-0 rounded-xl bg-[#151516] opacity-0 group-hover:opacity-100 transition duration-500 border border-orange-500"></div>

                                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3">

                                    <span className="text-sm text-orange-400 tracking-widest uppercase">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                                        {service}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        Performance-driven marketing systems engineered to
                                        generate consistent high-quality leads and scalable
                                        revenue growth.
                                    </p>

                                    <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <WhyChooseLeadGenerationSection />

            {/* FAQ Section */}
            <LeadGenerationFAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="lead-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Lead Generation Services",
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