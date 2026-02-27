import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import WhyChooseRealEstateBrandingSection from "./WhyChooseRealEstateBrandingSection";
import RealEstateBrandingFAQSection from "./RealEstateBrandingFAQSection";

export const metadata: Metadata = {
    title:
        "Real Estate Branding Agency in Hyderabad | Luxury Property Branding Experts",
    description:
        "Premium real estate branding agency in Hyderabad specializing in project identity, developer positioning, luxury branding systems and high-conversion visual strategies.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/real-estate-branding",
    },
    openGraph: {
        title:
            "Real Estate Branding Services in Hyderabad",
        description:
            "Strategic branding solutions for developers, luxury villa projects and real estate launches.",
        url:
            "https://epoquegroup.in/realty/real-estate-branding",
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
                        Real Estate Branding Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & Premium Growth Markets
                        </span>
                    </h1>

                    {/* Badge */}
                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-lg text-gray-300 backdrop-blur">
                        Luxury Developer Branding & Positioning Experts
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We build structured real estate branding systems for developers,
                        luxury villa projects and premium apartment launches —
                        strengthening authority, increasing buyer trust and
                        accelerating booking velocity in competitive Hyderabad markets.
                    </p>

                    {/* Feature Row */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Project Identity & Logo Architecture</span>
                        <span>✓ Luxury Positioning Strategy</span>
                        <span>✓ Brochure & Campaign Creative Systems</span>
                        <span>✓ Website & Funnel Branding Alignment</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                            hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Build Your Real Estate Brand
                        </Link>

                        <Link
                            href="/realty/case-studies"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
                            hover:border-[#C79A3B] hover:text-[#C79A3B]
                            transition duration-300"
                        >
                            View Branding Case Studies
                        </Link>

                    </div>

                </section>



            </div>

            {/* WHY CHOOSE */}
            <WhyChooseRealEstateBrandingSection />

            {/* FAQ */}
            <RealEstateBrandingFAQSection />

            {/* FINAL CTA */}
            <section className="relative text-center py-28 border-t border-[#C79A3B]/20 bg-[#0d0d0f] overflow-hidden">

                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C79A3B]/10 blur-[150px] rounded-full"></div>

                <div className="relative max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Ready to Elevate Your Real Estate Brand?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s design a premium branding system that increases
                        authority, buyer trust and long-term developer positioning.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Schedule Branding Consultation
                    </Link>

                </div>
            </section>

            {/* SERVICE SCHEMA */}
            <Script
                id="real-estate-branding-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Branding Services",
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