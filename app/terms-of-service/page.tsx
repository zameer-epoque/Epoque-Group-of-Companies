"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"



export default function TermsOfServicePage() {
    return (
        <main className="relative bg-black text-white overflow-hidden transition-colors duration-500">

            {/* Luxury Glow Background */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C79A3B]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7A2E63]/10 rounded-full blur-[150px]" />

            {/* HERO */}
            <section className="relative py-36 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C79A3B]/5 via-[#D45B5B]/5 to-[#7A2E63]/5 blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <p className="uppercase tracking-[0.5em] text-xs text-[#C79A3B] mb-6">
                        Legal Framework
                    </p>

                    <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">
                        Terms of{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Service
                        </span>
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-400 leading-relaxed">
                        These Terms govern the use of Époque Group’s digital platforms,
                        consulting services, marketing systems, and strategic business solutions.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="relative px-6 pb-36">
                <div className="max-w-5xl mx-auto space-y-14">

                    {[
                        {
                            title: "1. Acceptance of Terms",
                            content:
                                "By accessing or using our website, digital systems, marketing funnels, consulting services, or collaboration platforms, you agree to comply with and be bound by these Terms of Service. If you do not agree, you should not use our services.",
                        },
                        {
                            title: "2. Services Provided",
                            content:
                                "Époque Group operates across multiple verticals including:",
                            list: [
                                "Digital Marketing & Lead Generation Systems",
                                "Real Estate Channel Partner Ecosystems",
                                "Interior Design & Visualization Services",
                                "Strategic Business Consulting & Revenue Architecture",
                                "DPR Development & Institutional Project Advisory",
                            ],
                        },
                        {
                            title: "3. Client Responsibilities",
                            list: [
                                "Provide accurate and lawful information",
                                "Maintain confidentiality of access credentials",
                                "Use services in compliance with applicable laws",
                                "Avoid misuse of marketing or performance systems",
                            ],
                        },
                        {
                            title: "4. Payment & Commercial Terms",
                            content:
                                "Fees, retainers, and project-based payments are defined under specific service agreements. Late payments may result in suspension of services. All fees are non-refundable unless specified in writing.",
                        },
                        {
                            title: "5. Intellectual Property",
                            content:
                                "All branding, strategies, digital frameworks, designs, and proprietary systems developed by Époque Group remain protected intellectual property unless explicitly transferred under contract.",
                        },
                        {
                            title: "6. Limitation of Liability",
                            content:
                                "While we strive to deliver measurable results, we do not guarantee specific financial outcomes, revenue benchmarks, or lead volumes. Performance may vary based on market conditions and execution.",
                        },
                        {
                            title: "7. Confidentiality",
                            content:
                                "All shared data, strategic documents, and business insights are handled with strict confidentiality. We do not disclose sensitive client information without consent.",
                        },
                        {
                            title: "8. Termination of Services",
                            content:
                                "Either party may terminate services as per agreed contractual terms. Upon termination, outstanding balances remain payable.",
                        },
                        {
                            title: "9. Governing Law",
                            content:
                                "These Terms are governed by the laws of India. Any disputes arising shall be subject to jurisdiction in Hyderabad, Telangana.",
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-[#C79A3B]/40 transition-all duration-500 hover:shadow-2xl"
                        >
                            <h2 className="text-3xl font-semibold mb-6 text-[#C79A3B]">
                                {section.title}
                            </h2>

                            {section.content && (
                                <p className="text-gray-400 leading-relaxed text-lg mb-4">
                                    {section.content}
                                </p>
                            )}

                            {section.list && (
                                <ul className="space-y-3 text-gray-400 text-lg">
                                    {section.list.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#C79A3B]">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}

                    {/* FINAL CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-20 text-center"
                    >
                        <h3 className="text-3xl font-semibold mb-6">
                            Need Clarification?
                        </h3>

                        <p className="text-gray-400 text-lg mb-8">
                            For questions regarding our service agreements or legal policies,
                            reach out to our team directly.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 rounded-full font-semibold text-black text-lg bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            Contact Époque Group
                        </Link>
                    </motion.div>

                </div>
            </section>
        </main>
    )
}
