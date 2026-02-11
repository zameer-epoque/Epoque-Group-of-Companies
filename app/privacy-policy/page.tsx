import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Privacy Policy | Époque Group",
    description:
        "Read the official Privacy Policy of Époque Group. Learn how we collect, use, and protect your personal data across digital marketing, real estate, interiors, and strategic consulting services.",
    keywords: [
        "Privacy Policy",
        "Lead Generation Company Privacy",
        "Digital Marketing Privacy",
        "Époque Group Policy",
        "Data Protection Policy",
    ],
}

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white text-[#1A1A1A] dark:bg-[#0F0F14] dark:text-white transition-colors duration-500">

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-3xl" />

                <div className="relative max-w-4xl mx-auto">
                    <p className="uppercase tracking-[0.4em] text-sm text-[#C79A3B] mb-6">
                        Legal & Compliance
                    </p>

                    <h1 className="text-5xl md:text-6xl font-semibold mb-8">
                        Privacy{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Your trust is fundamental to everything we build. This Privacy Policy
                        outlines how Époque Group collects, uses, and protects your information
                        across all our divisions and digital platforms.
                    </p>
                </div>
            </section>

            {/* POLICY CONTENT */}
            <section className="px-6 pb-32">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* INTRODUCTION */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            1. Introduction
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            Époque Group operates across digital marketing, real estate
                            collaboration platforms, interior design solutions, and strategic
                            business consulting. As a lead generation and growth architecture
                            company, we collect certain data to enhance performance, improve
                            service delivery, and create measurable outcomes for our clients.
                        </p>
                    </div>

                    {/* DATA COLLECTION */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            2. Information We Collect
                        </h2>

                        <ul className="space-y-4 text-gray-700 dark:text-gray-400">
                            <li>• Personal identification information (Name, Email, Phone)</li>
                            <li>• Business information submitted through contact forms</li>
                            <li>• Website usage data (Analytics & Performance Tracking)</li>
                            <li>• Marketing preferences & communication consent</li>
                            <li>• Lead interaction & campaign engagement data</li>
                        </ul>
                    </div>

                    {/* HOW WE USE DATA */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            3. How We Use Your Information
                        </h2>

                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
                            As a strategic lead generation company, we use collected information
                            to:
                        </p>

                        <ul className="space-y-4 text-gray-700 dark:text-gray-400">
                            <li>• Provide digital marketing and funnel optimization services</li>
                            <li>• Deliver real estate & interior consultation support</li>
                            <li>• Improve campaign targeting & conversion performance</li>
                            <li>• Conduct analytics & performance reporting</li>
                            <li>• Respond to inquiries and business requests</li>
                        </ul>
                    </div>

                    {/* DATA SECURITY */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            4. Data Security
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            We implement modern security protocols, encrypted systems, and
                            secure hosting environments to protect your information from
                            unauthorized access, misuse, or disclosure. Your data integrity
                            and confidentiality remain our priority.
                        </p>
                    </div>

                    {/* THIRD PARTY */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            5. Third-Party Tools & Integrations
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            We may use analytics platforms, CRM systems, advertising networks,
                            and marketing automation tools to optimize campaigns. These tools
                            operate under their respective privacy policies and data protection
                            frameworks.
                        </p>
                    </div>

                    {/* USER RIGHTS */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            6. Your Rights
                        </h2>

                        <ul className="space-y-4 text-gray-700 dark:text-gray-400">
                            <li>• Request access to your stored data</li>
                            <li>• Request correction of inaccurate information</li>
                            <li>• Request deletion of personal data</li>
                            <li>• Withdraw marketing communication consent</li>
                        </ul>
                    </div>

                    {/* COOKIES */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            7. Cookies & Tracking Technologies
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            Our websites use cookies and tracking tools to enhance user
                            experience, measure performance, and improve lead generation
                            effectiveness. You may disable cookies through your browser settings.
                        </p>
                    </div>

                    {/* UPDATES */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            8. Policy Updates
                        </h2>
                        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                            We reserve the right to update this Privacy Policy as required.
                            Continued use of our platforms signifies acceptance of any changes.
                        </p>
                    </div>

                    {/* CONTACT CTA */}
                    <div className="border-t border-black/10 dark:border-white/10 pt-16 text-center">
                        <h3 className="text-2xl font-semibold mb-6">
                            Questions About Your Data?
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            If you have any questions regarding this Privacy Policy or how
                            your data is handled, please contact our team.
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
