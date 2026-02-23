import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title:
        "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
    description:
        "Epoque Group is one of the best interior designers in Hyderabad offering luxury home interiors, villa interiors, office interiors and turnkey interior solutions in Kokapet, Gachibowli, Jubilee Hills & Financial District.",
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
    },
    openGraph: {
        title: "Best Interior Designers in Hyderabad | Epoque Group",
        description:
            "Premium residential and commercial interior designers in Hyderabad.",
        url: "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
        siteName: "Epoque Group",
        type: "website",
    },
}

export default function InteriorDesignersHyderabad() {
    return (
        <main className="bg-[#0a0a0a] text-white">

            {/* HERO */}
            <section className="relative py-32 px-6 text-center overflow-hidden">

                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Best Interior Designers in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg mt-8 text-gray-300 leading-relaxed">
                        We create ultra-premium home interiors, villa interiors and office interiors
                        across Kokapet, Gachibowli, Jubilee Hills, Financial District and Madhapur.
                    </p>

                    {/* ✅ Added More SEO Content */}
                    <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
                        As one of the top interior designers in Hyderabad, we focus on creating
                        sophisticated living spaces that blend aesthetics, comfort and functionality.
                        Our expert team handles everything from concept development to final execution,
                        ensuring flawless results for every project.
                    </p>

                    <div className="mt-12">
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Top Interior Design Company in Hyderabad
                </h2>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    Our expert interior designers specialize in residential and commercial
                    interior design projects. From modular kitchens and wardrobes to luxury
                    villa interiors, we create elegant and functional spaces tailored to your lifestyle.
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    Whether building a new home or renovating an apartment, we ensure
                    premium finishes, modern layouts and timely execution.
                </p>

                {/* ✅ Added SEO Paragraphs */}
                <p className="text-gray-300 max-w-3xl mx-auto">
                    We provide customized interior solutions for apartments, independent houses,
                    villas and office spaces across Hyderabad. Our team uses premium materials,
                    advanced design tools and innovative layouts to deliver interiors that are
                    both visually stunning and highly practical.
                </p>

                <p className="text-gray-300 max-w-3xl mx-auto">
                    With years of experience in luxury interior design, we understand
                    client preferences, modern trends and Vastu-friendly planning,
                    making us a trusted choice for interior design services in Hyderabad.
                </p>
            </section>

            {/* SERVICES */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-16 text-center">
                        Our Interior Design Services
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10">

                        {[
                            {
                                title: "Luxury Home & Villa Interiors",
                                desc: "Premium living spaces crafted with imported materials and elegant finishes."
                            },
                            {
                                title: "Modular Kitchen & Wardrobes",
                                desc: "Smart storage kitchens with high-quality fittings and modern design."
                            },
                            {
                                title: "Office & Commercial Interiors",
                                desc: "Corporate interiors designed for productivity and brand presence."
                            },
                            {
                                title: "Turnkey Interior Solutions",
                                desc: "Complete end-to-end interior execution from design to installation."
                            }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                            >
                                <div className="p-8 rounded-3xl bg-[#111111] border border-white/5 backdrop-blur-xl">
                                    <h3 className="text-xl font-semibold mb-4 text-orange-400">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* ✅ Added Service SEO Content */}
                    <div className="mt-16 text-center space-y-6">
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Our turnkey interior design services include space planning,
                            3D visualization, material selection, furniture customization,
                            lighting design and project management.
                        </p>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            We have successfully delivered projects in Kokapet, Gachibowli,
                            Jubilee Hills, Financial District, Madhapur and Banjara Hills,
                            ensuring quality craftsmanship and timely completion.
                        </p>
                    </div>

                </div>
            </section>

            {/* LOCATIONS */}
            <section className="py-24 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-12">
                    Interior Designers Near You in Hyderabad
                </h2>

                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                    <span>Kokapet</span>
                    <span>Gachibowli</span>
                    <span>Jubilee Hills</span>
                    <span>Financial District</span>
                    <span>Madhapur</span>
                    <span>Banjara Hills</span>
                </div>

                {/* ✅ Added Location Content */}
                <p className="text-gray-300 max-w-3xl mx-auto mt-10">
                    If you are searching for interior designers near me in Hyderabad,
                    our team is ready to deliver luxury interior solutions tailored
                    to your space and requirements.
                </p>
            </section>

            {/* FAQ */}
            <section className="py-24 px-6 bg-[#111111]">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="text-3xl font-semibold text-center">
                        Frequently Asked Questions
                    </h2>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            How much do interior designers charge in Hyderabad?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Interior costs depend on project size, materials and customization level.
                            We provide transparent pricing and flexible luxury packages.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-orange-400 font-semibold text-lg">
                            Do you provide turnkey interior solutions?
                        </h3>
                        <p className="text-gray-300 mt-3">
                            Yes, we manage complete end-to-end interior execution from concept to completion.
                        </p>
                    </div>
                </div>
            </section>

            {/* SCHEMA */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: "Epoque Group",
                        url: "https://epoquegroup.in",
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