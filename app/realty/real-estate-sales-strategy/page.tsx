import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SalesStrategyFAQ from "./SalesStrategyFAQ";
import WhyChooseSalesStrategySection from "./whychoosesales";

export const metadata: Metadata = {
    title:
        "Real Estate Sales Strategy Services in Hyderabad | Developer Sales Consulting",
    description:
        "Strategic real estate sales consulting in Hyderabad helping developers improve booking velocity, pricing confidence and project absorption rates.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/real-estate-sales-strategy",
    },
    openGraph: {
        title:
            "Real Estate Sales Strategy Experts in Hyderabad",
        description:
            "Structured sales strategy frameworks designed for faster bookings and higher conversion rates.",
        url:
            "https://epoquegroup.in/realty/real-estate-sales-strategy",
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
                        Real Estate Sales Strategy in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & High-Growth Markets
                        </span>
                    </h1>

                    {/* Badge */}
                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-lg text-gray-300 backdrop-blur">
                        Developer-Focused Sales Acceleration Framework
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We design structured real estate sales systems that
                        increase booking velocity, improve pricing confidence
                        and optimize absorption rates for luxury apartment
                        and villa projects.
                    </p>

                    {/* Feature Highlights */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Pricing Psychology Strategy</span>
                        <span>✓ Funnel Optimization</span>
                        <span>✓ CRM & Sales Alignment</span>
                        <span>✓ Booking Acceleration Systems</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
              hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Sales Strategy Consultation
                        </Link>

                        <Link
                            href="/realty/case-studies"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-[#C79A3B] hover:text-[#C79A3B]
              transition duration-300"
                        >
                            View Success Case Studies
                        </Link>

                    </div>

                </section>

                {/* ================= AUTHORITY CONTENT ================= */}
                <section className="space-y-6 text-gray-400">

                    <h2 className="text-2xl font-semibold text-white">
                        Structured Sales Acceleration Framework
                    </h2>

                    <p>
                        In competitive micro-markets like Kokapet, Financial District,
                        Narsingi and Tellapur, developer success depends on
                        pricing confidence, buyer segmentation and structured follow-up systems.
                    </p>

                    <p>
                        We align marketing strategy, CRM workflows, channel partner
                        coordination and on-site sales training to maximize
                        booking conversion and reduce sales cycle time.
                    </p>

                    <p>
                        Our consulting framework is built for premium
                        residential projects where positioning, urgency
                        and buyer trust directly impact absorption rates.
                    </p>

                </section>

            </div>
            <WhyChooseSalesStrategySection />
            {/* FAQ Section */}
            <SalesStrategyFAQ />

            {/* SERVICE SCHEMA */}
            <Script
                id="sales-strategy-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Sales Strategy Services",
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