import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import WhyChooseSection from "./WhyChooseSection"
import FAQSection from "./FAQSection"

export const metadata: Metadata = {
    title: "Luxury Apartment Launch Marketing in Hyderabad | High-Impact Campaigns",
    description:
        "Premium apartment launch marketing agency in Hyderabad specializing in booking-focused campaigns and high-ticket residential project promotions.",
    alternates: {
        canonical: "https://epoquegroup.in/realty/luxury-apartment-marketing",
    },
}

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
                        Luxury Apartment Launch Marketing in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    {/* Badge */}
                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-lg text-gray-300 backdrop-blur">
                        High-Impact Booking-Focused Campaign Experts
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We design premium apartment launch campaigns targeting IT professionals,
                        corporate leaders, startup founders and global investors.
                        Our strategies are engineered to accelerate bookings, increase
                        pricing power and build strong project visibility.
                    </p>

                    {/* Feature Row */}
                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Launch Phase Strategy</span>
                        <span>✓ High-Budget Paid Campaigns</span>
                        <span>✓ IT Corridor Targeting</span>
                        <span>✓ Conversion-Focused Funnels</span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
              hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Launch Strategy
                        </Link>

                        <Link
                            href="/realty/case-studies"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-[#C79A3B] hover:text-[#C79A3B]
              transition duration-300"
                        >
                            View Launch Case Studies
                        </Link>

                    </div>

                </section>

            </div>

            {/* Why Choose Section */}
            <WhyChooseSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="apartment-launch-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Luxury Apartment Launch Marketing",
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
    )
}