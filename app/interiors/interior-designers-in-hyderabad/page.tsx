import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
    title: "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
    description:
        "Top interior designers in Hyderabad offering luxury home interiors, modular kitchens, office interiors and turnkey solutions in Kokapet, Gachibowli, Jubilee Hills & Financial District.",
    alternates: {
        canonical:
            "https://yourdomain.com/interiors/interior-designers-in-hyderabad",
    },
    openGraph: {
        title: "Best Interior Designers in Hyderabad",
        description:
            "Luxury residential and commercial interior designers in Hyderabad.",
        url: "https://yourdomain.com/interiors/interior-designers-in-hyderabad",
        type: "website",
    },
}

export default function InteriorDesignersHyderabad() {
    return (
        <main className="bg-white text-gray-800">

            <section className="py-24 px-6 text-center bg-gray-100">
                <h1 className="text-5xl font-bold mb-6">
                    Interior Designers in Hyderabad
                </h1>
                <p className="max-w-3xl mx-auto text-lg">
                    We are a leading interior design company in Hyderabad delivering
                    luxury residential interiors, commercial interiors and complete
                    turnkey solutions across Kokapet, Gachibowli and Jubilee Hills.
                </p>
            </section>

            <section className="py-16 px-6 max-w-6xl mx-auto space-y-6">
                <h2 className="text-3xl font-semibold">
                    Complete Interior Design Services
                </h2>
                <p>
                    Our interior designers specialize in villa interiors, apartment
                    interiors, modular kitchens, wardrobes and office interior
                    projects tailored to modern lifestyles.
                </p>

                <Link
                    href="/interiors/villa-interior-designers-hyderabad"
                    className="text-blue-600 underline"
                >
                    Explore Our Villa Interior Design Services →
                </Link>
            </section>

            <Script
                id="local-business-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Your Company Name",
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