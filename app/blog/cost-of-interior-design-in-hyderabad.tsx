import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Cost of Interior Design in Hyderabad (2026 Updated Guide)",
    description:
        "Know the latest interior design cost in Hyderabad for 1BHK, 2BHK, 3BHK and villas. Detailed pricing breakdown and packages.",
    keywords: [
        "Interior Design Cost Hyderabad",
        "2BHK Interior Cost Hyderabad",
        "Home Interior Price Hyderabad",
    ],
}

export default function BlogPage() {
    return (
        <article className="bg-black text-gray-300">

            {/* HERO SECTION */}
            <section className="relative h-[60vh] flex items-center justify-center text-center">
                <Image
                    src="/blog/interior-cost.jpg"
                    alt="Interior Design Cost in Hyderabad"
                    fill
                    className="object-cover opacity-40"
                />
                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Cost of Interior Design in Hyderabad (2026 Guide)
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Complete price breakdown for 1BHK, 2BHK & 3BHK interior projects.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-5xl mx-auto px-6 py-16 space-y-12">

                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        What is the Average Interior Cost in Hyderabad?
                    </h2>
                    <p>
                        Interior design cost in Hyderabad ranges between ₹1,200 to ₹4,000 per sq.ft depending on materials, customization and execution complexity.
                    </p>
                </div>

                {/* PRICE CARDS */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gold transition">
                        <h3 className="text-xl font-semibold text-white">Basic</h3>
                        <p className="mt-3 text-2xl font-bold text-yellow-500">₹1,200 – ₹1,600/sq.ft</p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gold transition">
                        <h3 className="text-xl font-semibold text-white">Standard</h3>
                        <p className="mt-3 text-2xl font-bold text-yellow-500">₹1,800 – ₹2,500/sq.ft</p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gold transition">
                        <h3 className="text-xl font-semibold text-white">Premium</h3>
                        <p className="mt-3 text-2xl font-bold text-yellow-500">₹2,800 – ₹4,000+/sq.ft</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-white mb-4">
                        Interior Cost Based on Flat Type
                    </h2>

                    <ul className="space-y-3 list-disc list-inside">
                        <li>1BHK: ₹4L – ₹7L</li>
                        <li>2BHK: ₹6L – ₹12L</li>
                        <li>3BHK: ₹10L – ₹18L</li>
                    </ul>
                </div>

                {/* INTERNAL LINKING */}
                <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                    <h3 className="text-xl text-white font-semibold">
                        Looking for Professional Interior Designers?
                    </h3>
                    <p className="mt-3">
                        Explore our{" "}
                        <Link
                            href="/interiors/interior-designers-in-hyderabad"
                            className="text-yellow-500 underline"
                        >
                            Interior Designers in Hyderabad
                        </Link>{" "}
                        service page for complete turnkey solutions.
                    </p>
                </div>

            </section>

            {/* CTA SECTION */}
            <section className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black py-16 text-center">
                <h2 className="text-3xl font-bold">
                    Get Free Interior Cost Estimate Today
                </h2>
                <p className="mt-4 text-lg">
                    Book your free consultation & receive customized quote within 24 hours.
                </p>
                <Link
                    href="/contact"
                    className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                    Book Free Consultation
                </Link>
            </section>

        </article>
    )
}