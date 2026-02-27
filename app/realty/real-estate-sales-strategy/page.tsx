import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import SalesStrategyFAQ from "./SalesStrategyFAQ";

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

            {/* Glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

            <section className="relative max-w-5xl mx-auto px-6 py-28 text-center space-y-8">

                <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                    Real Estate Sales Strategy in{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Hyderabad
                    </span>
                </h1>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    We design structured sales frameworks for developers,
                    improving absorption rates, optimizing pricing strategy,
                    and accelerating booking cycles in competitive markets.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-6 px-12 py-5 rounded-full font-semibold text-black 
          bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
          hover:scale-105 transition duration-300 shadow-xl"
                >
                    Build Your Sales Strategy
                </Link>

            </section>

            {/* Authority Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-6 text-gray-400">
                <h2 className="text-2xl font-semibold text-white">
                    Structured Sales Acceleration Framework
                </h2>

                <p>
                    In fast-growing micro-markets like Kokapet, Financial District
                    and Narsingi, pricing psychology, funnel management and
                    buyer follow-up systems determine project success.
                </p>

                <p>
                    We align marketing, CRM, sales team training and buyer
                    segmentation to maximize booking conversion.
                </p>
            </section>

          <SalesStrategyFAQ/>
  

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