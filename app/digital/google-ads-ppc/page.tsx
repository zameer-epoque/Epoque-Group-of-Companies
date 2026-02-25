import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import GoogleAdsFAQSection from "./GoogleAdsFAQSection";
import WhyChooseGoogleAdsSection from "./WhyChooseGoogleAdsSection";

export const metadata: Metadata = {
    title:
        "Google Ads & PPC Services in Hyderabad | Certified PPC Agency",
    description:
        "Performance-driven Google Ads agency in Hyderabad offering PPC management, search ads, display campaigns, YouTube ads, and ROI-focused paid advertising solutions.",
    keywords: [
        "Google Ads Services Hyderabad",
        "PPC Agency Hyderabad",
        "Google Ads Management India",
        "Pay Per Click Advertising Hyderabad",
        "Search Ads Agency Hyderabad",
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/digital/google-ads-ppc",
    },
    openGraph: {
        title:
            "Google Ads & PPC Agency in Hyderabad | High-ROI Campaigns",
        description:
            "Scale your business with performance-driven Google Ads and PPC campaigns.",
        url: "https://epoquegroup.in/digital/google-ads-ppc",
        type: "website",
    },
};

export default function GoogleAdsPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* FULL PAGE PREMIUM ORANGE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-red-500/10 pointer-events-none"></div>

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

            {/* ================= HERO ================= */}
            <section className="relative py-32 text-center px-6">

                <div className="relative max-w-5xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Google Ads & PPC Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400/40 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8 backdrop-blur">
                        ROI-Focused Pay Per Click Advertising Experts
                    </div>

                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a leading Google Ads agency in Hyderabad
                        specializing in high-converting search campaigns, display ads,
                        YouTube advertising, and performance-driven PPC strategies.
                        We help businesses generate instant traffic, qualified leads,
                        and measurable ROI through data-backed paid advertising systems.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>✔ Search & Display Ads</span>
                        <span>✔ YouTube Advertising</span>
                        <span>✔ Conversion Tracking Setup</span>
                        <span>✔ ROI & ROAS Optimization</span>
                    </div>

                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-2xl"
                        >
                            Get Free PPC Audit
                        </Link>

                        <Link
                            href="/real-estate-digital-marketing-projects-epoque-group"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
                        >
                            View PPC Case Studies
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-20 px-6 bg-gradient-to-b from-[#0c0c0d] to-[#101114]">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Google Ads & PPC Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                            Our PPC services are designed to generate immediate visibility,
                            high-intent traffic, and measurable conversions. We build
                            structured paid advertising campaigns focused on reducing
                            cost-per-click (CPC) while maximizing return on ad spend (ROAS).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">

                        {[
                            "Google Search Ads Management",
                            "Display & Remarketing Campaigns",
                            "YouTube Video Advertising",
                            "Shopping & Performance Max Campaigns",
                            "Conversion Tracking & Analytics Setup",
                            "ROAS & Campaign Optimization",
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500 border border-orange-500/30"></div>

                                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3 bg-[#121212] rounded-xl border border-white/5">

                                    <span className="text-sm text-orange-400 tracking-widest uppercase">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                                        {service}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        High-performance PPC strategies engineered to increase
                                        qualified traffic, reduce ad waste, and deliver
                                        measurable business growth.
                                    </p>

                                    <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <WhyChooseGoogleAdsSection />
            <GoogleAdsFAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="ppc-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Google Ads & PPC Services",
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