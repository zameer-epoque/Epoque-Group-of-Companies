import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import WhyChoose from "./WhyChoose"
import Faqsection from "./Faqsection"

export const metadata: Metadata = {
    title:
        "Real Estate Project Launch Marketing in Hyderabad | Pre-Launch & Booking Campaign Experts",
    description:
        "Expert real estate project launch marketing agency in Hyderabad helping builders generate pre-launch buzz, site visits and early bookings.",
    alternates: {
        canonical:
            "https://epoquegroup.in/realty/project-launch-marketing",
    },
}

export default function Page() {
    return (
        <main className="relative bg-black text-white min-h-screen overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#C79A3B]/20 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#7A2E63]/20 blur-[150px] rounded-full"></div>

            <div className="relative max-w-5xl mx-auto px-6 py-32 space-y-24">

                {/* ================= HERO ================= */}
                <section className="text-center space-y-8">

                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Real Estate Project Launch Marketing in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    <div className="inline-block px-8 py-4 rounded-full border border-[#C79A3B]/40 bg-white/5 text-lg text-gray-300 backdrop-blur">
                        Pre-Launch & Booking-Focused Campaign Specialists
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We design structured pre-launch and launch marketing systems
                        that generate site visits, investor traction and early bookings
                        for residential and commercial projects across Hyderabad’s
                        most competitive micro-markets.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm md:text-base">
                        <span>✓ Pre-Launch Buzz Campaigns</span>
                        <span>✓ Booking Acceleration Strategy</span>
                        <span>✓ High-Intent Buyer Targeting</span>
                        <span>✓ CRM & Retargeting Funnels</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                            hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Launch Strategy
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

                {/* ================= AUTHORITY ================= */}
                <WhyChoose />
                <Faqsection />

                {/* ================= CTA ================= */}
                {/* <section className="text-center pt-16">
                    <h2 className="text-3xl font-semibold">
                        Ready to Launch Your Real Estate Project?
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Let’s design a high-impact launch campaign
                        that drives bookings and sales momentum.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-8 px-10 py-4 rounded-full font-semibold text-black 
                        bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] 
                        hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Launch Your Project With Us
                    </Link>
                </section> */}

            </div>

            {/* SERVICE SCHEMA */}
            <Script
                id="project-launch-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Real Estate Project Launch Marketing",
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