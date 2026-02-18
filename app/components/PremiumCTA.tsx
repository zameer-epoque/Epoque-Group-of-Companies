import Link from "next/link"

export default function PremiumCTA() {
    return (
        <section className="py-8 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-200">

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Text */}
                <h3 className="text-black text-lg md:text-2xl font-bold tracking-wide text-center md:text-left">
                    Looking for Villas, Plots, Digital Marketing or Interior Design in Hyderabad?
                </h3>

                {/* Button */}
                <Link
                    href="/contact"
                    className="px-8 py-3 rounded-full bg-black text-white font-semibold text-sm md:text-base shadow-xl hover:bg-white hover:text-black transition-all duration-300"
                >
                    Contact Now →
                </Link>

            </div>

        </section>
    )
}
