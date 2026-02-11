"use client"

import type { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"



export default function PrivacyPolicyPage() {
    return (
        <main className="relative bg-black text-white overflow-hidden transition-colors duration-500">

            {/* Luxury Background Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C79A3B]/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7A2E63]/10 rounded-full blur-[150px]" />

            {/* HERO SECTION */}
            <section className="relative py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C79A3B]/5 via-[#D45B5B]/5 to-[#7A2E63]/5 blur-3xl" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <p className="uppercase tracking-[0.4em] text-sm text-[#C79A3B] mb-6">
                        Legal & Compliance
                    </p>

                    <h1 className="text-5xl md:text-6xl font-semibold mb-8">
                        Privacy{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        Your trust is fundamental to everything we build. This Privacy Policy
                        outlines how Époque Group collects, uses, and protects your information
                        across all our divisions and digital platforms.
                    </p>
                </motion.div>
            </section>

            {/* POLICY CONTENT */}
            <section className="relative px-6 pb-32">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* INTRODUCTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#C79A3B]/40 transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            1. Introduction
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Époque Group operates across digital marketing, real estate
                            collaboration platforms, interior design solutions, and strategic
                            business consulting. As a lead generation and growth architecture
                            company, we collect certain data to enhance performance, improve
                            service delivery, and create measurable outcomes for our clients.
                        </p>
                    </motion.div>

                    {/* DATA COLLECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#C79A3B]/40 transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            2. Information We Collect
                        </h2>

                        <ul className="space-y-4 text-gray-400">
                            <li>• Personal identification information (Name, Email, Phone)</li>
                            <li>• Business information submitted through contact forms</li>
                            <li>• Website usage data (Analytics & Performance Tracking)</li>
                            <li>• Marketing preferences & communication consent</li>
                            <li>• Lead interaction & campaign engagement data</li>
                        </ul>
                    </motion.div>

                    {/* HOW WE USE DATA */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#C79A3B]/40 transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            3. How We Use Your Information
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-4">
                            As a strategic lead generation company, we use collected information
                            to:
                        </p>

                        <ul className="space-y-4 text-gray-400">
                            <li>• Provide digital marketing and funnel optimization services</li>
                            <li>• Deliver real estate & interior consultation support</li>
                            <li>• Improve campaign targeting & conversion performance</li>
                            <li>• Conduct analytics & performance reporting</li>
                            <li>• Respond to inquiries and business requests</li>
                        </ul>
                    </motion.div>

                    {/* DATA SECURITY */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#C79A3B]/40 transition-all duration-500"
                    >
                        <h2 className="text-2xl font-semibold mb-6 text-[#C79A3B]">
                            4. Data Security
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            We implement modern security protocols, encrypted systems, and
                            secure hosting environments to protect your information from
                            unauthorized access, misuse, or disclosure.
                        </p>
                    </motion.div>

                    {/* CONTACT CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="border-t border-white/10 pt-16 text-center"
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Questions About Your Data?
                        </h3>

                        <p className="text-gray-400 mb-8">
                            If you have any questions regarding this Privacy Policy or how
                            your data is handled, please contact our team.
                        </p>

                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:scale-105 hover:shadow-2xl transition-all duration-300"
                        >
                            Contact Époque Group
                        </Link>
                    </motion.div>

                </div>
            </section>
        </main>
    )
}
