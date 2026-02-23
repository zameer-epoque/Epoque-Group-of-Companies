import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
    title:
        "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
    description:
        "Looking for the best interior designers in Hyderabad? We provide luxury home interiors, commercial interiors, modular kitchens, office interiors and turnkey interior solutions in Kokapet, Gachibowli, Jubilee Hills & Financial District.",
    keywords: [
        "Interior Designers in Hyderabad",
        "Best Interior Designers Hyderabad",
        "Luxury Interior Designers Hyderabad",
        "Home Interiors Hyderabad",
        "Office Interior Designers Hyderabad",
        "Modular Kitchen Hyderabad",
        "Interior Company in Kokapet",
        "Interior Designers in Gachibowli",
        "Jubilee Hills Interior Design",
        "Financial District Interior Company"
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
    },
    openGraph: {
        title: "Best Interior Designers in Hyderabad",
        description:
            "Luxury residential and commercial interior designers in Hyderabad.",
        url: "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
        siteName: "Your Company Name",
        type: "website",
    },
}

export default function InteriorDesignersHyderabad() {
    return (
        <main className="bg-white text-gray-800">

            {/* HERO */}
            <section className="py-24 px-6 text-center bg-gray-100">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Best Interior Designers in Hyderabad
                </h1>
                <p className="max-w-3xl mx-auto text-lg leading-relaxed">
                    We are a leading interior design company in Hyderabad offering luxury
                    home interiors, villa interiors, apartment interiors and office
                    interior solutions across Kokapet, Gachibowli, Jubilee Hills,
                    Financial District and Madhapur.
                </p>
            </section>

            {/* ABOUT */}
            <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
                <h2 className="text-3xl font-semibold">
                    Top Interior Design Company in Hyderabad
                </h2>

                <p>
                    Our expert interior designers in Hyderabad specialize in
                    residential and commercial interior design projects. From
                    modular kitchens and wardrobe designs to luxury villa interiors,
                    we create functional and aesthetic spaces tailored to your lifestyle.
                </p>

                <p>
                    Whether you are building a new home in Kokapet or renovating
                    an apartment in Gachibowli, our team ensures premium finishes,
                    modern layouts and timely project execution.
                </p>
            </section>

            {/* SERVICES */}
            <section className="py-16 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-10 text-center">
                        Our Interior Design Services in Hyderabad
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        <div>
                            <h3 className="text-xl font-bold mb-3">
                                Luxury Home & Villa Interiors
                            </h3>
                            <p>
                                Premium living room, bedroom, dining and villa interiors
                                designed with imported materials and elegant finishes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">
                                Modular Kitchen & Wardrobes
                            </h3>
                            <p>
                                Modern modular kitchens with smart storage solutions
                                and high-quality hardware systems.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">
                                Office & Commercial Interiors
                            </h3>
                            <p>
                                Functional office interiors for startups and corporate
                                spaces in Financial District & Gachibowli.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-3">
                                Turnkey Interior Solutions
                            </h3>
                            <p>
                                Complete end-to-end interior execution including
                                design, 3D visualization, material selection and installation.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* LOCATIONS */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-semibold mb-6">
                    Interior Designers Near You in Hyderabad
                </h2>

                <ul className="grid md:grid-cols-2 gap-4 list-disc pl-6">
                    <li>Interior Designers in Kokapet</li>
                    <li>Interior Designers in Gachibowli</li>
                    <li>Interior Designers in Jubilee Hills</li>
                    <li>Interior Designers in Financial District</li>
                    <li>Interior Designers in Madhapur</li>
                    <li>Interior Designers in Banjara Hills</li>
                </ul>
            </section>

            {/* FAQ */}
            <section className="py-16 px-6 bg-gray-100 max-w-5xl mx-auto space-y-8">
                <h2 className="text-3xl font-semibold text-center">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="font-semibold">
                        How much do interior designers charge in Hyderabad?
                    </h3>
                    <p>
                        Interior design costs depend on project size, material selection
                        and customization. We provide transparent pricing and tailored packages.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold">
                        Do you provide turnkey interior solutions?
                    </h3>
                    <p>
                        Yes, we offer complete end-to-end interior execution from
                        design to final installation.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Looking for Interior Designers in Hyderabad?
                </h2>
                <p className="mb-8">
                    Contact us today for a free consultation and transform your
                    home or office into a luxurious space.
                </p>
                <Link
                    href="/contact"
                    className="bg-black text-white px-8 py-3 rounded-lg"
                >
                    Get Free Consultation
                </Link>
            </section>

            {/* LOCAL BUSINESS SCHEMA */}
            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Epoque Group Of Companies",
                        areaServed: "Hyderabad",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Hyderabad",
                            addressCountry: "India"
                        }
                    })
                }}
            />

        </main>
    )
}