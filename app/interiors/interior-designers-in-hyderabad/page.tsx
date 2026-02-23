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
        <main className="bg-[#0a0a0a] text-white">

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">

                {/* Glow Effects */}
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

                <div className="text-center mt-10">
                    <Link
                        href="/interiors/villa-interior-designers-hyderabad"
                        className="text-orange-400 underline hover:text-yellow-400 transition"
                    >
                        Explore Our Villa Interior Design Services →
                    </Link>
                </div>

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
                        url: "https://epoquegroup.in/",
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