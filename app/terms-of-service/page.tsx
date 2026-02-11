import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Terms of Service | Époque Group",
    description:
        "Read the official Terms of Service of Époque Group. Learn about service conditions, digital marketing agreements, consulting policies, and platform usage guidelines.",
    keywords: [
        "Terms of Service",
        "Lead Generation Terms",
        "Digital Marketing Agreement",
        "Business Consulting Terms",
        "Époque Group Legal",
    ],
}

export default function TermsOfServicePage() {
    return (
        <main className="bg-white text-[#1A1A1A] dark:bg-[#0F0F14] dark:text-white transition-colors duration-500">

            {/* HERO */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-3xl" />

                <div className="relative max-w-4xl mx-auto">
                    <p className="uppercase tracking-[0.4em] text-sm text-[#C79A3B] mb-6">
                        Legal Framework
                    </p>

                    <h1 className="text-5xl md:text-6xl font-semibold mb-8">
                        Terms of{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Service
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        These Terms govern the use of Époque Group’s digital platforms,
                        consulting services, marketing systems, and strategic business
                        solutions.
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className="px-6 pb-32">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* ACCEPTANCE */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            By accessing or using our website, digital systems, marketing
                            funnels, consulting services, or collaboration platforms, you
                            agree to comply with and be bound by these Terms of Service.
                            If you do not agree, you should not use our services.
                        </p>
                    </div>

                    {/* SERVICES PROVIDED */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            2. Services Provided
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
                            Époque Group operates across multiple verticals including:
                        </p>

                        <ul className="space-y-3 text-gray-700 dark:text-gray-400">
                            <li>• Digital Marketing & Lead Generation Systems</li>
                            <li>• Real Estate Channel Partner Ecosystems</li>
                            <li>• Interior Design & Visualization Services</li>
                            <li>• Strategic Business Consulting & Revenue Architecture</li>
                            <li>• DPR Development & Institutional Project Advisory</li>
                        </ul>
                    </div>

                    {/* CLIENT RESPONSIBILITIES */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            3. Client Responsibilities
                        </h2>

                        <ul className="space-y-3 text-gray-700 dark:text-gray-400">
                            <li>• Provide accurate and lawful information</li>
                            <li>• Maintain confidentiality of access credentials</li>
                            <li>• Use services in compliance with applicable laws</li>
                            <li>• Avoid misuse of marketing or performance systems</li>
                        </ul>
                    </div>

                    {/* PAYMENT TERMS */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            4. Payment & Commercial Terms
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            Fees, retainers, and project-based payments are defined under
                            specific service agreements. Late payments may result in
                            suspension of services. All fees are non-refundable unless
                            specified in writing.
                        </p>
                    </div>

                    {/* INTELLECTUAL PROPERTY */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            5. Intellectual Property
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            All branding, strategies, digital frameworks, designs, and
                            proprietary systems developed by Époque Group remain protected
                            intellectual property unless explicitly transferred under contract.
                        </p>
                    </div>

                    {/* LIMITATION */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            6. Limitation of Liability
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            While we strive to deliver measurable results, we do not guarantee
                            specific financial outcomes, revenue benchmarks, or lead volumes.
                            Performance may vary based on market conditions and client
                            execution.
                        </p>
                    </div>

                    {/* CONFIDENTIALITY */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            7. Confidentiality
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            All shared data, strategic documents, and business insights are
                            handled with strict confidentiality. We do not disclose sensitive
                            client information without consent.
                        </p>
                    </div>

                    {/* TERMINATION */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            8. Termination of Services
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            Either party may terminate services as per agreed contractual
                            terms. Upon termination, outstanding balances remain payable.
                        </p>
                    </div>

                    {/* GOVERNING LAW */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            9. Governing Law
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            These Terms are governed by the laws of India. Any disputes
                            arising shall be subject to jurisdiction in Hyderabad, Telangana.
                        </p>
                    </div>

                    {/* FINAL CTA */}
                    <div className="border-t border-black/10 dark:border-white/10 pt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-6">
                            Need Clarification?
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            For questions regarding our service agreements or legal policies,
                            reach out to our team directly.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:opacity-90 transition-all duration-300"
                        >
                            Contact Époque Group
                        </Link>
                    </div>

                </div>
            </section>
        </main>
    )
}
