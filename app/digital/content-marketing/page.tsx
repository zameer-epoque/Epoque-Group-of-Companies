import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title:
        "Content Marketing Services in Hyderabad | Content Marketing Agency India",
    description:
        "Leading content marketing agency in Hyderabad, India offering SEO content writing, blog marketing, website copywriting, and lead generation strategies.",
    keywords: [
        "Content marketing services in Hyderabad",
        "Content marketing agency India",
        "SEO content writing Hyderabad",
        "Blog writing services India",
        "Website content development Hyderabad",
        "Digital content marketing India",
    ],
    openGraph: {
        title: "Professional Content Marketing Services in Hyderabad & India",
        description:
            "Grow your brand visibility and organic traffic with strategic content marketing services in Hyderabad and across India.",
        url: "https://epoquegroup.in/content-marketing",
        type: "website",
    },
};

export default function ContentMarketingPage() {
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
                        Content Marketing Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Attract, engage, and convert your target audience with
                        high-performance content marketing strategies designed
                        to increase organic traffic, brand authority, and lead generation.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-10 py-4 rounded-full font-semibold
  bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
  text-black hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Free Content Strategy
                    </Link>

                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                        Leading Content Marketing Agency in Hyderabad
                    </h2>

                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        As a trusted content marketing company in Hyderabad, we help
                        startups, enterprises, and growing brands across India
                        develop powerful SEO-focused content frameworks.
                        Our approach combines storytelling, keyword strategy,
                        and conversion optimization to drive measurable business growth.
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
                        Our Content Marketing Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "SEO Content Writing",
                                desc: "Keyword-optimized blog posts, landing pages, and website content to improve search rankings in Hyderabad and across India.",
                            },
                            {
                                title: "Blog Marketing",
                                desc: "High-quality content strategies that increase organic visibility, engagement, and brand authority in competitive markets.",
                            },
                            {
                                title: "Website Copywriting",
                                desc: "Conversion-focused website copy designed to build trust and generate leads for startups and enterprises.",
                            },
                            {
                                title: "Email Marketing Content",
                                desc: "Persuasive email campaigns that nurture leads, improve engagement, and increase customer retention.",
                            },
                            {
                                title: "Social Media Content Creation",
                                desc: "Strategic captions, scripts, and creative frameworks for Instagram, Facebook, and LinkedIn marketing.",
                            },
                            {
                                title: "Content Strategy & Planning",
                                desc: "Data-driven content calendars, keyword mapping, and performance analysis for sustainable digital growth.",
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
                        <li>✔ SEO-Focused Content Strategy</li>
                        <li>✔ Hyderabad Market Understanding</li>
                        <li>✔ Research-Based High-Quality Writing</li>
                        <li>✔ Brand Authority Building</li>
                        <li>✔ Lead Generation Driven Approach</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our content marketing services in Hyderabad combine SEO,
                        storytelling, and performance strategy to build sustainable
                        brand visibility. We help Indian businesses grow organically
                        with structured content ecosystems.
                    </p>

                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-4xl mx-auto">

                    <h2 className="text-3xl font-semibold text-center mb-14">
                        Content Marketing FAQs
                    </h2>

                    <div className="space-y-10 text-gray-400">

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Why is content marketing important for SEO?
                            </h3>
                            <p className="mt-3">
                                High-quality content improves keyword rankings,
                                attracts organic traffic, and builds long-term brand authority.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Do you provide services across India?
                            </h3>
                            <p className="mt-3">
                                Yes, we offer content marketing solutions for businesses
                                throughout India including Hyderabad, Bangalore, Mumbai,
                                Chennai, and Delhi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                How long does content marketing take to show results?
                            </h3>
                            <p className="mt-3">
                                Typically 3–6 months are required to see measurable organic growth,
                                depending on competition and industry.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center border-t border-white/5">

                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Build Brand Authority with Content?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let our Hyderabad content marketing experts grow your visibility and leads.
                </p>

                <Link
                    href="/contact"
                    className="inline-block mt-10 px-12 py-4 rounded-full font-semibold
  bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
  text-black hover:scale-105 transition duration-300 shadow-xl"
                >
                    Talk to Content Experts
                </Link>


            </section>

        </div>
    );
}
