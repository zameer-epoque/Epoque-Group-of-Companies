import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";

export const metadata: Metadata = {
    title:
        "Residential Interior Designers in Hyderabad | Luxury Home Interiors",
    description:
        "Epoque Group offers premium residential interior design services in Hyderabad specializing in luxury villa interiors, apartment interiors and turnkey home interior solutions.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
    },
    openGraph: {
        title:
            "Residential Interior Designers in Hyderabad | Epoque Group",
        description:
            "Luxury home and villa interior design services in Hyderabad.",
        url: "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
        type: "website",
    },
};

export default function ResidentialInteriorPage() {
    return (
        <main className="relative bg-[#0B0F19] text-white overflow-hidden">

            {/* Gold Glow */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

            {/* HERO */}
            <section className="relative py-32 px-6 text-center">
                <div className="max-w-5xl mx-auto space-y-8">

                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Residential Interior Designers in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <div className="inline-block px-8 py-4 rounded-full 
            border border-[#D4AF37]/40 bg-[#111827] 
            text-[17px] text-gray-300 tracking-wide">
                        Luxury Home & Villa Interior Specialists
                    </div>

                    <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Epoque Group delivers premium residential interior design
                        services for villas, independent houses and apartments across
                        Hyderabad’s most sought-after neighborhoods.
                    </p>

                    <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
                        We design elegant, functional and timeless interiors tailored
                        to your lifestyle. From bespoke concept development to turnkey
                        execution, every residential project is crafted with precision
                        and luxury detailing.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/contact"
                            className="px-14 py-5 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
              transition-all duration-300 shadow-xl"
                        >
                            Get Residential Interior Consultation
                        </Link>
                    </div>

                </div>
            </section>

            {/* SERVICES SECTION */}

            {/* WHY CHOOSE SECTION */}

            <WhyChooseSection />
            <FAQSection />
            {/* FAQ SCHEMA */}
            <Script
                id="residential-interior-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Residential Interior Design Services",
                        areaServed: "Hyderabad",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in"
                        }
                    }),
                }}
            />

        </main>
    );
}