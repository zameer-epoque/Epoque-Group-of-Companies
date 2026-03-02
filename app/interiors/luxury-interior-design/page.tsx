import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";

export const metadata: Metadata = {
    title:
        "Luxury Interior Design in Hyderabad | Premium Villa & Home Interiors",
    description:
        "Epoque Group offers luxury interior design services in Hyderabad specializing in high-end villa interiors, premium apartments, bespoke home interiors and turnkey luxury execution.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/luxury-interior-design",
    },
    openGraph: {
        title:
            "Luxury Interior Design in Hyderabad | Epoque Group",
        description:
            "Premium luxury villa and residential interior design services in Hyderabad.",
        url: "https://epoquegroup.in/interiors/luxury-interior-design",
        type: "website",
    },
};

export default function LuxuryInteriorDesignPage() {
    return (
        <main className="relative bg-[#0B0F19] text-white overflow-hidden">

            {/* Subtle Gold Glow */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="relative max-w-4xl mx-auto space-y-8">

                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Luxury Interior Design in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <div className="inline-block px-8 py-4 rounded-full 
            border border-[#D4AF37]/40 bg-[#111827] 
            text-[17px] text-gray-300 tracking-wide">
                        Premium Villa & High-End Residential Interior Specialists
                    </div>

                    <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
                        Epoque Group delivers ultra-premium luxury interior design services
                        in Hyderabad for villas, penthouses and high-end residences.
                        We create sophisticated living spaces that reflect elegance,
                        exclusivity and timeless design.
                    </p>

                    <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
                        From bespoke concept development and curated material selection
                        to turnkey execution and precision craftsmanship, our luxury
                        interior projects are designed for discerning homeowners who
                        expect perfection in every detail.
                    </p>

                    <div className="pt-8">
                        <Link
                            href="/contact"
                            className="px-14 py-5 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
              transition-all duration-300 shadow-xl"
                        >
                            Book Luxury Interior Consultation
                        </Link>
                    </div>

                </div>
            </section>

            <WhyChooseSection />
            <FAQSection />



            {/* FAQ SCHEMA */}
            <Script
                id="luxury-interior-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How much does luxury interior design cost in Hyderabad?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Luxury interior design projects typically range from ₹1,800 to ₹3,500 per sq.ft depending on materials, customization and design complexity.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide turnkey luxury interior execution?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide complete turnkey luxury interior execution including bespoke design planning, premium material sourcing and final installation.",
                                },
                            },
                            {
                                "@type": "Question",
                                name: "How long does a luxury villa interior project take?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Luxury villa interior projects typically take 60–90 days depending on scale, customization and finishing standards.",
                                },
                            },
                        ],
                    }),
                }}
            />

        </main>
    );
}