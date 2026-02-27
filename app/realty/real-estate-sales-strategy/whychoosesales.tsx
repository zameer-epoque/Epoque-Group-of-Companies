import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title:
        "Why Choose Our Real Estate Sales Strategy | Hyderabad Developers",
    description:
        "Discover why developers choose our structured real estate sales consulting strategy for booking acceleration and absorption optimization.",
};

export default function whychoosesales() {
    return (
        <main className="bg-black text-white min-h-screen px-6 py-28">

            <div className="max-w-5xl mx-auto space-y-16">

                <section className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-semibold">
                        Why Developers Trust Our Sales Strategy
                    </h1>

                    <p className="text-gray-400 text-lg">
                        We combine buyer psychology, pricing frameworks and CRM optimization
                        to improve conversion performance.
                    </p>
                </section>

                <section className="space-y-6 text-gray-400">
                    <ul className="list-disc list-inside space-y-4">
                        <li>Booking-focused pricing strategy frameworks</li>
                        <li>High-intent buyer segmentation systems</li>
                        <li>CRM optimization & follow-up automation</li>
                        <li>Sales team script & objection handling training</li>
                        <li>Launch phase absorption planning</li>
                    </ul>
                </section>

                <div className="text-center pt-10">
                    <Link
                        href="/contact"
                        className="inline-block px-10 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
                    >
                        Discuss Sales Strategy
                    </Link>
                </div>

            </div>
        </main>
    );
}