import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

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
            <section className="py-24 px-6 max-w-6xl mx-auto space-y-12">

                <h2 className="text-3xl md:text-4xl font-semibold text-center">
                    Complete Interior Design Services in Hyderabad
                </h2>

                {/* ✅ Added Intro Paragraph */}
                <p className="text-gray-300 max-w-4xl mx-auto text-center">
                    Our interior design services cover residential, commercial and luxury
                    interior projects across Hyderabad. We focus on smart space planning,
                    premium materials, modern layouts and customized design concepts
                    tailored to each client’s needs.
                </p>

                <div className="grid md:grid-cols-2 gap-10">

                    <div className="p-8 bg-[#111111] rounded-3xl border border-white/5">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">
                            Luxury Villa Interiors
                        </h3>
                        <p className="text-gray-300">
                            Bespoke villa interiors crafted with premium materials,
                            Italian marble, designer lighting and custom furniture.
                        </p>
                    </div>

                    <div className="p-8 bg-[#111111] rounded-3xl border border-white/5">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">
                            Modular Kitchens & Wardrobes
                        </h3>
                        <p className="text-gray-300">
                            Modern modular kitchens with smart storage systems
                            and high-quality hardware fittings.
                        </p>
                    </div>

                    <div className="p-8 bg-[#111111] rounded-3xl border border-white/5">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">
                            Office & Commercial Interiors
                        </h3>
                        <p className="text-gray-300">
                            Functional and elegant corporate interiors designed
                            for productivity and brand identity.
                        </p>
                    </div>

                    <div className="p-8 bg-[#111111] rounded-3xl border border-white/5">
                        <h3 className="text-xl font-semibold text-orange-400 mb-4">
                            Turnkey Interior Solutions
                        </h3>
                        <p className="text-gray-300">
                            End-to-end interior execution including design,
                            3D visualization, material selection and installation.
                        </p>
                    </div>

                </div>

                {/* ✅ Added Detailed Service Paragraph */}
                <div className="text-center mt-10 space-y-6">
                    <p className="text-gray-300 max-w-4xl mx-auto">
                        Our turnkey interior design approach ensures a seamless process
                        from concept development and 3D visualization to execution and handover.
                        We coordinate design, carpentry, electrical work, painting,
                        ceiling installation and furnishing to deliver flawless results.
                    </p>

                    <p className="text-gray-300 max-w-4xl mx-auto">
                        We have successfully completed interior design projects in
                        Kokapet, Gachibowli, Jubilee Hills, Financial District,
                        Banjara Hills and Madhapur, delivering high-end luxury interiors
                        with attention to detail and timely completion.
                    </p>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/interiors/villa-interior-designers-hyderabad"
                        className="text-orange-400 underline hover:text-yellow-400 transition"
                    >
                        Explore Our Villa Interior Design Services →
                    </Link>
                </div>

            </section>

            {/* NEW SEO SECTION (ADDED WITHOUT CHANGING STRUCTURE) */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-semibold">
                    Why Choose Our Interior Designers in Hyderabad?
                </h2>

                <p className="text-gray-300 max-w-4xl mx-auto">
                    Our experienced team combines creativity, technical expertise
                    and project management skills to deliver interiors that exceed expectations.
                    We use premium materials, modern technology and innovative layouts
                    to create luxurious and functional living spaces.
                </p>

                <p className="text-gray-300 max-w-4xl mx-auto">
                    Whether you are renovating your apartment or building a new villa,
                    our interior designers ensure personalized attention,
                    transparent pricing and timely project completion.
                </p>
            </section>
{/* FAQ SECTION */}
<section className="py-24 px-6 bg-[#111111]">
    <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-center">
            Frequently Asked Questions
        </h2>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                How much does interior design cost in Hyderabad?
            </h3>
            <p className="text-gray-300 mt-3">
                Interior design costs in Hyderabad typically range from
                ₹1,200 to ₹2,500 per sq.ft depending on materials,
                customization level and project complexity.
            </p>
        </div>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                Do you provide turnkey interior solutions?
            </h3>
            <p className="text-gray-300 mt-3">
                Yes, we provide complete turnkey interior execution including
                design planning, 3D visualization, material selection,
                manufacturing and installation.
            </p>
        </div>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                How long does a home interior project take?
            </h3>
            <p className="text-gray-300 mt-3">
                A standard 2BHK interior project takes around 30–45 days,
                while larger villas may require 60–90 days
                depending on customization and scope.
            </p>
        </div>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                Which areas in Hyderabad do you serve?
            </h3>
            <p className="text-gray-300 mt-3">
                We serve Kokapet, Gachibowli, Jubilee Hills,
                Financial District, Banjara Hills and surrounding areas.
            </p>
        </div>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                Do you provide warranty on interior work?
            </h3>
            <p className="text-gray-300 mt-3">
                Yes, we provide warranty coverage on modular installations,
                hardware fittings and workmanship depending on the package selected.
            </p>
        </div>

        <div>
            <h3 className="text-orange-400 font-semibold text-lg">
                Can you customize interiors as per Vastu?
            </h3>
            <p className="text-gray-300 mt-3">
                Yes, we design interiors aligned with Vastu principles
                while maintaining modern aesthetics and functionality.
            </p>
        </div>
    </div>
</section>
<Script
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
/>

        </main>
    )
}