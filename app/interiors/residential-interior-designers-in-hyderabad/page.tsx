import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
    title:
        "Residential Interior Designers in Hyderabad | Luxury Home Interiors",
    description:
        "Looking for residential interior designers in Hyderabad? We specialize in luxury home interiors, villa interiors, apartment interiors and modular kitchens in Kokapet, Gachibowli, Jubilee Hills & Financial District.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
    },
    openGraph: {
        title: "Residential Interior Designers in Hyderabad",
        description:
            "Premium residential interior design services in Hyderabad for villas, apartments and luxury homes.",
        url: "https://epoquegroup.in/interiors/residential-interior-designers-in-hyderabad",
        type: "website",
    },
}

export default function ResidentialInteriorHyderabad() {
    return (
        <main className="bg-[#0a0a0a] text-white">

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">

                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Residential Interior Designers in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg mt-8 text-gray-300 leading-relaxed">
                        We design elegant and functional residential interiors for villas,
                        apartments and independent houses across Kokapet, Gachibowli,
                        Jubilee Hills, Financial District and Banjara Hills.
                    </p>

                    {/* ✅ Added SEO Paragraph */}
                    <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
                        Our expert residential interior designers in Hyderabad focus on
                        creating personalized living spaces that combine modern aesthetics,
                        smart space planning and premium craftsmanship for long-lasting quality.
                    </p>

                    <div className="mt-12">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Book Residential Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* ABOUT RESIDENTIAL SERVICES */}
            <section className="py-24 px-6 max-w-6xl mx-auto space-y-8 text-center">

                <h2 className="text-3xl md:text-4xl font-semibold">
                    Luxury Home Interior Design Services
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    Our residential interior designers in Hyderabad specialize in
                    transforming homes into luxurious living spaces. From modern
                    apartments to premium villas, we create customized interiors
                    that reflect your personality and lifestyle.
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    We focus on space planning, premium materials, custom furniture,
                    modular kitchens, wardrobe solutions and elegant lighting designs
                    to deliver high-end residential interiors.
                </p>

                {/* ✅ Added More SEO Content */}
                <p className="text-gray-300 max-w-3xl mx-auto">
                    Whether you are building a new home or renovating an existing apartment,
                    our team ensures flawless execution, transparent pricing and timely
                    project completion across Hyderabad.
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    We provide end-to-end residential interior solutions including
                    concept design, 3D visualization, material selection,
                    furniture customization and final installation.
                </p>

            </section>

            {/* RESIDENTIAL SERVICES GRID */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {[
                        {
                            title: "Villa Interior Design",
                            desc: "Complete villa interior solutions including living rooms, bedrooms, dining spaces and luxury finishes."
                        },
                        {
                            title: "Apartment Interior Design",
                            desc: "Modern apartment interiors optimized for comfort, storage and elegant aesthetics."
                        },
                        {
                            title: "Modular Kitchen Design",
                            desc: "Contemporary modular kitchens with smart layouts and premium fittings."
                        },
                        {
                            title: "Bedroom & Wardrobe Interiors",
                            desc: "Custom wardrobes, false ceilings and lighting concepts for stylish bedrooms."
                        }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                        >
                            <div className="p-8 rounded-3xl bg-[#111111] border border-white/5">
                                <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* ✅ Added Supporting Content */}
                <div className="mt-16 text-center space-y-6">
                    <p className="text-gray-300 max-w-4xl mx-auto">
                        Our residential interior projects are executed in Kokapet,
                        Gachibowli, Jubilee Hills, Financial District,
                        Banjara Hills and Madhapur with premium quality standards.
                    </p>
                    <p className="text-gray-300 max-w-4xl mx-auto">
                        We combine creativity, innovation and technical expertise
                        to deliver elegant interiors that enhance comfort,
                        functionality and long-term value.
                    </p>
                </div>
            </section>

            {/* LOCATION COVERAGE */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">
                    Residential Interior Designers Near You
                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                    <span>Kokapet</span>
                    <span>Gachibowli</span>
                    <span>Jubilee Hills</span>
                    <span>Financial District</span>
                    <span>Banjara Hills</span>
                    <span>Madhapur</span>
                </div>

                {/* ✅ Added Local SEO Content */}
                <p className="text-gray-300 max-w-3xl mx-auto mt-10">
                    If you are searching for residential interior designers near me in Hyderabad,
                    our team is ready to transform your home into a luxurious and
                    comfortable living space.
                </p>

                <div className="mt-12">
                    <Link
                        href="/interiors/interior-designers-in-hyderabad"
                        className="text-orange-400 underline hover:text-yellow-400 transition"
                    >
                        View All Interior Design Services →
                    </Link>
                </div>
            </section>
            {/* FAQ SECTION */}
            <section className="py-24 px-6 bg-[#111111]">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            How much does residential interior design cost in Hyderabad?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Residential interior costs typically range from ₹1,200 to ₹2,500 per sq.ft
                            depending on materials, customization and project size.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            Do you provide turnkey residential interior solutions?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Yes, we provide complete turnkey services including design planning,
                            3D visualization, material selection, furniture customization
                            and final installation.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            How long does a residential interior project take?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            A typical apartment project takes 30–45 days,
                            while villas may take 60–90 days depending on scope.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            Do you customize designs as per client preferences?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Yes, every residential interior project is fully customized
                            based on lifestyle, design vision and space requirements.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            Which areas in Hyderabad do you serve?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            We serve Kokapet, Gachibowli, Jubilee Hills,
                            Financial District, Banjara Hills and Madhapur.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            Do you provide warranty on residential interior work?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Yes, we provide warranty coverage on modular installations,
                            fittings and workmanship depending on selected materials.
                        </p>
                    </div>
                </div>
            </section>
            {/* LOCAL BUSINESS SCHEMA */}
            <Script
                id="residential-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "How much does residential interior design cost in Hyderabad?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Residential interior costs typically range from ₹1,200 to ₹2,500 per sq.ft depending on materials and customization."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide turnkey residential interior solutions?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide complete turnkey services including design, visualization and installation."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How long does a residential interior project take?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Apartment interiors take 30–45 days while villas may take 60–90 days depending on scope."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you customize designs as per client preferences?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, all residential interior projects are fully customized based on client requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Which areas in Hyderabad do you serve?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "We serve Kokapet, Gachibowli, Jubilee Hills, Financial District, Banjara Hills and Madhapur."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide warranty on residential interior work?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we provide warranty coverage on modular installations and workmanship."
                                }
                            }
                        ]
                    })
                }}
            />

        </main>
    )
}