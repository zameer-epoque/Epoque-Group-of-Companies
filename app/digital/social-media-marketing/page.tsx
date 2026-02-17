import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title:
        "Social Media Marketing Services in Hyderabad | Digital Marketing Agency India",
    description:
        "Top Social Media Marketing agency in Hyderabad, India. We provide Instagram marketing, Facebook ads, branding, lead generation & paid advertising services for businesses in India.",
    keywords: [
        "Social Media Marketing in Hyderabad",
        "SMM agency India",
        "Instagram marketing Hyderabad",
        "Facebook ads India",
        "Digital marketing company Hyderabad",
    ],
    openGraph: {
        title: "Best Social Media Marketing Services in Hyderabad",
        description:
            "Grow your business with expert Social Media Marketing services in Hyderabad & across India.",
        url: "https://epoquegroup.in/social-media-marketing",
        type: "website",
    },
};

export default function SocialMediaMarketing() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* TOP AMBIENT GLOW */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px]
          bg-gradient-to-r from-[#C79A3B]/25 via-[#D45B5B]/20 to-[#7A2E63]/25
          blur-[200px]" />
            </div>

            {/* HERO SECTION */}
            <section className="relative py-28 text-center px-6">
                <div className="max-w-6xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Social Media Marketing Services in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad & India
                        </span>
                    </h1>

                    <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
                        We help businesses grow with high-performance Instagram marketing,
                        Facebook ads, audience targeting, and brand positioning strategies
                        built for scalable revenue growth.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block mt-10 px-10 py-4 rounded-full font-semibold
  bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
  text-black hover:scale-105 transition duration-300 shadow-xl"
                    >
                        Get Free Consultation
                    </Link>


                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="relative py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl md:text-4xl font-semibold mb-10">
                        Premium Social Media Marketing Agency in Hyderabad
                    </h2>

                    <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-relaxed">
                        Our Social Media Marketing services are structured for startups,
                        enterprises, and growing brands across Hyderabad and India.
                        We combine creative storytelling, performance marketing, and
                        data-driven insights to generate qualified leads and increase ROI.
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
                        Our Social Media Marketing Services
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Instagram Marketing",
                                desc: "Reels, influencer strategies, paid campaigns, and brand storytelling designed to scale visibility and engagement.",
                            },
                            {
                                title: "Facebook & Meta Ads",
                                desc: "Conversion-driven paid advertising strategies engineered to generate high-quality leads and measurable ROI.",
                            },
                            {
                                title: "Social Media Branding",
                                desc: "Creative content frameworks, brand positioning, and audience growth strategies for long-term authority.",
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

            {/* WHY SECTION */}
            <section className="py-24 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                    <ul className="space-y-6 text-lg text-gray-400">
                        <li>✔ Hyderabad Market Expertise</li>
                        <li>✔ Advanced Audience Targeting</li>
                        <li>✔ Data-Driven Performance Campaigns</li>
                        <li>✔ Transparent Reporting</li>
                        <li>✔ ROI-Focused Growth Strategy</li>
                    </ul>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        As a trusted Social Media Marketing company in Hyderabad,
                        we design strategic paid and organic growth frameworks
                        that connect brands with high-value customers through
                        precision targeting and performance analytics.
                    </p>

                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 text-center border-t border-white/5">

                <h2 className="text-3xl md:text-4xl font-semibold">
                    Ready to Scale Your Brand in Hyderabad?
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Let’s build a powerful, conversion-driven social media presence.
                </p>

                <button className="mt-10 px-12 py-4 rounded-full font-semibold
          bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
          text-black hover:scale-105 transition duration-300 shadow-xl">
                    Contact Our Experts
                </button>

            </section>

        </div>
    );
}
