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

            {/* ================= HERO ================= */}
            <section className="relative max-w-5xl mx-auto px-6 py-28 text-center space-y-8">

                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    Real Estate Branding Agency in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                    We build premium branding systems for real estate developers,
                    luxury villa projects and high-end apartment launches —
                    strengthening positioning, increasing trust and accelerating sales velocity.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-6 px-12 py-5 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                    hover:scale-105 transition duration-300 shadow-xl"
                >
                    Build Your Real Estate Brand
                </Link>

            </section>

            {/* ================= AUTHORITY SECTION ================= */}


            {/* ================= WHY CHOOSE ================= */}
            <WhyChooseRealEstateBrandingSection />

            {/* ================= FAQ ================= */}
            <RealEstateBrandingFAQSection />

            {/* ================= FINAL CTA ================= */}
            <section className="text-center py-4 border-t border-[#C79A3B]/20">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Ready to Elevate Your Real Estate Brand?
                    </h2>

                    <p className="mt-6 text-gray-400">
                        Let’s design a premium branding system that
                        increases authority, trust and booking conversions.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-12 py-5 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Schedule Branding Consultation
                    </Link>

                </div>
            </section>

            {/* ================= SERVICE SCHEMA ================= */}
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