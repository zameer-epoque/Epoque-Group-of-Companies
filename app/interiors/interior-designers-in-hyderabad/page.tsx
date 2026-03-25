import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import FAQSection from "./FAQSection"

import WhyChooseSection from "./WhyChooseSection"

export const metadata: Metadata = {
    title:
        "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
    description:
        "Top interior designers in Hyderabad offering luxury villa interiors, modular kitchens, office interiors and turnkey solutions in Kokapet, Gachibowli, Jubilee Hills & Financial District.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
    },
    openGraph: {
        title: "Best Interior Designers in Hyderabad",
        description:
            "Luxury residential and commercial interior designers in Hyderabad.",
        url: "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
        type: "website",
    },
}

export default function InteriorDesignersHyderabad() {
    return (
        <main className="bg-[#0a0a0a] text-white">

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">

                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Interior Designers in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg mt-8 text-gray-300 leading-relaxed">
                        We are a premium interior design company in Hyderabad delivering
                        luxury residential interiors, villa interiors and commercial
                        interior solutions across Kokapet, Gachibowli, Jubilee Hills,
                        Financial District and Banjara Hills.
                    </p>

                    {/* ✅ Added SEO Content */}
                    <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
                        As one of the leading interior designers in Hyderabad, we specialize
                        in creating bespoke interiors that combine functionality, aesthetics
                        and long-lasting quality. Our team handles everything from design
                        planning to final installation with precision and professionalism.
                    </p>

                    <div className="mt-12">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Book Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}


            {/* NEW SEO SECTION (ADDED WITHOUT CHANGING STRUCTURE) */}
            <WhyChooseSection />
            <FAQSection />
            {/* FAQ SECTION */}

            {/* <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "How much does interior design cost in Hyderabad?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Interior design costs in Hyderabad typically range from ₹1,200 to ₹2,500 per sq.ft depending on materials and customization."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide turnkey interior solutions?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide complete turnkey interior execution including design planning, 3D visualization and installation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does a home interior project take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A 2BHK project takes 30–45 days, while villas may require 60–90 days depending on scope."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Which areas in Hyderabad do you serve?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We serve Kokapet, Gachibowli, Jubilee Hills, Financial District and Banjara Hills."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide warranty on interior work?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we provide warranty coverage on modular installations and workmanship."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can you customize interiors as per Vastu?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we design interiors aligned with Vastu principles while maintaining modern aesthetics."
                                }
                            }
                        ]
                    })
                }}
            /> */}

        </main>
    )
}