import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title:
        "SEO Services in Hyderabad | Best Search Engine Optimization Company India",
    description:
        "Leading SEO company in Hyderabad, India offering technical SEO, on-page SEO, local SEO, and Google ranking services to increase organic traffic and revenue.",
    keywords: [
        "SEO services in Hyderabad",
        "Search Engine Optimization company India",
        "Best SEO agency Hyderabad",
        "Local SEO services Hyderabad",
        "Technical SEO experts India",
        "Google ranking services Hyderabad",
    ],
    openGraph: {
        title: "Professional SEO Services in Hyderabad & India",
        description:
            "Rank higher on Google with our expert SEO strategies tailored for Hyderabad and Indian businesses.",
        url: "https://epoquegroup.in/search-engine-optimization",
        type: "website",
    },
};

export default function SEOPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* TOP AMBIENT GLOW */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]
          bg-gradient-to-r from-[#C79A3B]/25 via-[#D45B5B]/20 to-[#7A2E63]/25
          blur-[200px]" />
            </div>

            {/* HERO SECTION */}
            <section className="relative py-28 px-6 text-center">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Search Engine Optimization (SEO) Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Boost your Google rankings, increase organic traffic, and generate
                        high-intent leads with our performance-driven SEO strategies tailored
                        for businesses in Hyderabad and across India.
                    </p>

                    <button className="mt-10 px-10 py-4 rounded-full font-semibold
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
            text-black hover:scale-105 transition duration-300 shadow-xl">
                        Get Free SEO Audit
                    </button>

                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                        Leading SEO Company in Hyderabad
                    </h2>

                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        As a trusted SEO agency in Hyderabad, we help startups, enterprises,
                        and e-commerce brands achieve sustainable growth through structured
                        organic search strategies. Our approach combines technical SEO,
                        content optimization, authority building, and local SEO frameworks
                        designed for long-term rankings and measurable ROI.
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
                        Our Comprehensive SEO Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "On-Page SEO Optimization",
                                desc: "Advanced keyword research, content structuring, meta optimization, and internal linking to improve visibility for Hyderabad-based and Indian businesses.",
                            },
                            {
                                title: "Technical SEO",
                                desc: "Website speed optimization, mobile usability, schema markup, crawl error fixing, and structured data implementation for better indexing.",
                            },
                            {
                                title: "Local SEO in Hyderabad",
                                desc: "Google Business Profile optimization, map ranking strategies, citation building, and geo-targeted SEO for local visibility.",
                            },
                            {
                                title: "Off-Page SEO & Link Building",
                                desc: "Authority backlink acquisition, guest posting, brand mentions, and digital PR to increase domain authority.",
                            },
                            {
                                title: "E-Commerce SEO",
                                desc: "Product optimization, category SEO, structured navigation, and conversion-focused strategies for Indian online stores.",
                            },
                            {
                                title: "SEO Analytics & Reporting",
                                desc: "Transparent monthly reporting, keyword tracking, traffic insights, and performance analysis to ensure measurable growth.",
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
                        <li>✔ 100% White Hat SEO Techniques</li>
                        <li>✔ Hyderabad & India Market Expertise</li>
                        <li>✔ Dedicated SEO Specialists</li>
                        <li>✔ Transparent Monthly Reporting</li>
                        <li>✔ Long-Term Organic Growth Strategy</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our SEO services in Hyderabad focus on sustainable organic growth.
                        We understand the competitive Indian digital landscape and deploy
                        advanced search optimization strategies to help your website rank
                        on the first page of Google.
                    </p>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <div className="space-y-10 text-gray-400">

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                How long does SEO take to show results?
                            </h3>
                            <p className="mt-3">
                                SEO typically takes 3–6 months to deliver noticeable improvements,
                                depending on industry competition in Hyderabad and across India.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Why is Local SEO important in Hyderabad?
                            </h3>
                            <p className="mt-3">
                                Local SEO improves your Google Maps visibility and helps attract
                                nearby customers actively searching for services in Hyderabad.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Do you provide SEO services across India?
                            </h3>
                            <p className="mt-3">
                                Yes, we provide SEO solutions for businesses throughout India,
                                including Hyderabad, Bangalore, Chennai, Mumbai, and Delhi.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center border-t border-white/5">

                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Rank on Page #1 of Google?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let’s build a powerful organic growth strategy for your business.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-12 py-4 rounded-full font-semibold
  bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
  text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Contact SEO Experts
                </Link>


            </section>

        </div>
    );
}
