import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import WhyChoosePropertyLeadSection from "./WhyChoosePropertyLeadSection";
import PropertyLeadFAQSection from "./PropertyLeadFAQSection";

export const metadata: Metadata = {
    title:
        "Property Lead Generation Services in Hyderabad | Real Estate Performance Marketing",
    description:
        "High-converting property lead generation agency in Hyderabad specializing in Google Ads, Meta Ads, landing page funnels and NRI targeting for real estate developers.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/property-lead-generation",
    },
    openGraph: {
        title:
            "Property Lead Generation Agency in Hyderabad",
        description:
            "Structured performance marketing campaigns designed to generate qualified real estate buyer leads and increase bookings.",
        url:
            "https://epoquegroup.in/realty/property-lead-generation",
        type: "website",
    },
};

export default function Page() {
    return (
        <main className="relative bg-black text-white min-h-screen overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

            <div className="relative max-w-5xl mx-auto px-6 py-32 space-y-20">

                {/* ================= HERO ================= */}
                <section className="text-center space-y-8">

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Property Lead Generation Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & High-Growth Markets
                        </span>
                    </h1>

                    {/* Badge */}
                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-lg text-gray-300 backdrop-blur">
                        Real Estate Performance Marketing Experts
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We build structured real estate performance marketing systems
                        using Google Ads, Meta Ads, landing page funnels and CRM
                        integration to generate high-intent buyer leads and
                        accelerate project bookings.
                    </p>

                    {/* Feature Highlights */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Google & Meta Ads Management</span>
                        <span>✓ Landing Page Funnel Optimization</span>
                        <span>✓ NRI & HNI Targeting</span>
                        <span>✓ Qualified Buyer Lead Generation</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
              hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Qualified Buyer Leads
                        </Link>

                        <Link
                            href="/realty/case-studies"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-[#C79A3B] hover:text-[#C79A3B]
              transition duration-300"
                        >
                            View Lead Generation Case Studies
                        </Link>

                    </div>

                </section>

                {/* ================= AUTHORITY SECTION ================= */}


            </div>

            {/* WHY CHOOSE */}
            <WhyChoosePropertyLeadSection />

            {/* FAQ */}
            <PropertyLeadFAQSection />

            {/* FINAL CTA */}
            <section className="text-center py-28 border-t border-[#C79A3B]/20 bg-[#0d0d0f]">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Ready to Generate High-Quality Property Leads?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s build a performance-driven marketing system
                        that attracts serious buyers and maximizes project bookings.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Schedule Strategy Call
                    </Link>

                </div>
            </section>

            {/* SERVICE SCHEMA */}
            <Script
                id="property-lead-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Property Lead Generation Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    })
                }}
            />

        </main>
    );
}