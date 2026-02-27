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

            {/* ================= HERO ================= */}
            <section className="relative max-w-5xl mx-auto px-6 py-28 text-center space-y-8">

                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    Property Lead Generation Services in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    We build structured real estate performance marketing systems
                    designed to generate high-intent property buyer leads,
                    increase site visits and accelerate booking cycles
                    for developers across Hyderabad.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-6 px-12 py-5 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                    hover:scale-105 transition duration-300 shadow-xl"
                >
                    Get Qualified Buyer Leads
                </Link>

            </section>

            {/* ================= WHY CHOOSE ================= */}
            <WhyChoosePropertyLeadSection />

            {/* ================= FAQ ================= */}
            <PropertyLeadFAQSection />

            {/* ================= FINAL CTA ================= */}
            <section className="text-center py-24 border-t border-[#C79A3B]/20">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Ready to Generate High-Quality Property Leads?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s build a performance-driven marketing system
                        that attracts serious buyers and maximizes bookings.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Schedule Strategy Call
                    </Link>

                </div>
            </section>

            {/* ================= SERVICE SCHEMA ================= */}
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