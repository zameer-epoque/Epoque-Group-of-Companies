import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title:
        "Google Ads Services in Hyderabad | PPC Advertising Agency India",
    description:
        "Performance-driven Google Ads and PPC advertising agency in Hyderabad, India offering Search Ads, Display Ads, YouTube Ads, remarketing and ROI-focused paid campaigns.",
    keywords: [
        "Google Ads services in Hyderabad",
        "PPC advertising agency India",
        "Google Ads company Hyderabad",
        "Paid ads management India",
        "YouTube ads Hyderabad",
        "Search engine marketing India",
        "Performance marketing agency Hyderabad"
    ],
    openGraph: {
        title: "Professional Google Ads & PPC Services in Hyderabad",
        description:
            "Scale your business with high-converting Google Ads and PPC advertising services in Hyderabad and across India.",
        url: "https://yourwebsite.com/google-ads-ppc",
        type: "website",
    },
};

export default function GoogleAdsPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* TOP GOLD AMBIENT GLOW */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]
          bg-gradient-to-r from-[#C79A3B]/25 via-[#D45B5B]/20 to-[#7A2E63]/25
          blur-[200px]" />
            </div>

            {/* HERO SECTION */}
            <section className="relative py-28 px-6 text-center">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Google Ads & PPC Advertising Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Generate instant leads, increase conversions, and maximize ROI
                        with strategic Google Ads management and performance marketing
                        campaigns tailored for businesses in Hyderabad and across India.
                    </p>

                    <button className="mt-10 px-10 py-4 rounded-full font-semibold
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
            text-black hover:scale-105 transition duration-300 shadow-xl">
                        Get Free PPC Audit
                    </button>

                </div>
            </section>

            {/* ABOUT PPC */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                        Performance-Driven PPC Agency in Hyderabad
                    </h2>

                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        As a leading Google Ads agency in Hyderabad, we build
                        data-driven paid advertising systems designed to scale
                        revenue efficiently. Our PPC strategies focus on keyword
                        precision, audience targeting, smart bidding, and
                        conversion rate optimization for measurable growth.
                    </p>

                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="relative py-28 px-6 border-t border-white/5">

                {/* Bottom Glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px]
            bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/15 to-[#7A2E63]/20
            blur-[220px]" />
                </div>

                <div className="relative max-w-6xl mx-auto">

                    <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                        Our Google Ads & PPC Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Google Search Ads",
                                desc: "Target high-intent customers actively searching for your services in Hyderabad and across India with precision keyword bidding strategies.",
                            },
                            {
                                title: "Display & Remarketing Ads",
                                desc: "Re-engage website visitors and increase brand recall using advanced remarketing campaigns across the Google Display Network.",
                            },
                            {
                                title: "YouTube Advertising",
                                desc: "Reach millions of potential customers in India through targeted YouTube video advertising campaigns optimized for engagement and conversions.",
                            },
                            {
                                title: "Conversion Tracking & Analytics",
                                desc: "Advanced tracking setup, performance monitoring, and detailed ROI analysis to eliminate wasted ad spend.",
                            },
                            {
                                title: "Landing Page Optimization",
                                desc: "High-converting landing pages designed specifically for PPC campaigns to improve lead generation and sales.",
                            },
                            {
                                title: "Ecommerce PPC Management",
                                desc: "Google Shopping campaigns and product-based advertising strategies for online stores in Hyderabad and across India.",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative p-[1.5px] rounded-3xl
                  bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                  hover:shadow-[0_0_50px_rgba(199,154,59,0.6)]
                  transition-all duration-500"
                            >
                                <div className="rounded-3xl p-10
                  bg-gradient-to-br from-[#111111] to-[#1a1a1a]
                  border border-white/5
                  group-hover:-translate-y-3
                  group-hover:scale-[1.04]
                  transition-all duration-500">

                                    <h3 className="text-xl font-semibold mb-6 group-hover:text-[#C79A3B] transition">
                                        {service.title}
                                    </h3>

                                    <div className="w-14 h-[2px]
                    bg-gradient-to-r from-[#C79A3B] to-[#D45B5B]
                    mb-6 rounded-full group-hover:w-24 transition-all duration-500" />

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>

                                </div>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <ul className="space-y-6 text-gray-400 text-lg">
                        <li>✔ Certified Google Ads Specialists</li>
                        <li>✔ Hyderabad Market Expertise</li>
                        <li>✔ ROI-Focused Campaign Strategy</li>
                        <li>✔ Transparent Reporting & Analytics</li>
                        <li>✔ Continuous A/B Testing & Optimization</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our PPC advertising services in Hyderabad are engineered
                        to scale businesses faster through precision targeting,
                        smart automation, and high-converting ad creatives.
                        We focus on sustainable growth with measurable ROI.
                    </p>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Google Ads & PPC FAQs
                    </h2>

                    <div className="space-y-10 text-gray-400">

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                How quickly can Google Ads generate results?
                            </h3>
                            <p className="mt-3">
                                Google Ads can start generating traffic and leads
                                immediately after launch, making it ideal for
                                Hyderabad-based businesses seeking instant growth.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                Is PPC better than SEO?
                            </h3>
                            <p className="mt-3">
                                PPC delivers immediate results, while SEO provides
                                long-term organic growth. Combining both strategies
                                ensures maximum online visibility across India.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                What is the minimum Google Ads budget in India?
                            </h3>
                            <p className="mt-3">
                                Budget varies by industry competition, but even small
                                businesses in Hyderabad can start with optimized,
                                performance-focused campaigns.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                Do you provide keyword research for PPC campaigns?
                            </h3>
                            <p className="mt-3">
                                Yes, we conduct detailed keyword research, competitor analysis,
                                and audience targeting to ensure your ads reach high-intent
                                customers and maximize return on investment.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                How do you improve conversion rates in Google Ads?
                            </h3>
                            <p className="mt-3">
                                We optimize ad copy, landing pages, bidding strategies,
                                and audience segmentation to reduce cost-per-click and
                                improve overall campaign conversions.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-orange-400">
                                Do you manage remarketing campaigns?
                            </h3>
                            <p className="mt-3">
                                Yes, we create advanced remarketing campaigns to re-target
                                previous website visitors and increase lead conversions
                                across search, display, and YouTube networks.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center border-t border-white/5">

                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Scale with Google Ads?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let our Hyderabad PPC experts drive more traffic, leads, and revenue.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-12 py-4 rounded-full font-semibold
  bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
  text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Talk to PPC Expert
                </Link>


            </section>

        </div>
    );
}
