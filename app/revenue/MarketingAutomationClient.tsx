"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function MarketingAutomationClient() {
    return (
        <section className="bg-black text-white">

            {/* HERO */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Marketing Automation for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Scalable Revenue Growth
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design advanced marketing automation systems that streamline CRM workflows and sales processes.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Automate My Marketing
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "CRM Workflow Automation",
                        desc: "Automated lead assignment and sales tracking."
                    },
                    {
                        title: "Email Automation",
                        desc: "Personalized nurturing sequences."
                    },
                    {
                        title: "Lead Scoring & Segmentation",
                        desc: "Smart targeting based on user behavior."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* FAQ SECTION */}
            <div className="max-w-4xl mx-auto px-6 py-20 space-y-6">
                <h2 className="text-3xl text-center font-semibold">
                    Frequently Asked Questions
                </h2>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        What is marketing automation?
                    </h3>
                    <p className="text-gray-400">
                        Marketing automation uses software tools to automate repetitive
                        marketing tasks such as email campaigns, lead nurturing,
                        CRM updates, and customer segmentation.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How can marketing automation increase revenue?
                    </h3>
                    <p className="text-gray-400">
                        Automation improves lead follow-up speed, nurtures prospects
                        consistently, reduces manual errors, and increases
                        conversion rates through personalized communication.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you integrate with existing CRM systems?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we integrate automation workflows with popular CRM
                        platforms to ensure seamless lead tracking,
                        reporting, and sales coordination.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        How long does it take to implement automation?
                    </h3>
                    <p className="text-gray-400">
                        Implementation typically takes 2–4 weeks depending on
                        business complexity, CRM integrations, and workflow design.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Can automation improve lead quality?
                    </h3>
                    <p className="text-gray-400">
                        Yes, with lead scoring and behavioral tracking,
                        automation filters high-intent prospects and
                        prioritizes them for your sales team.
                    </p>
                </div>

                <div>
                    <h3 className="text-orange-400 font-semibold">
                        Do you provide reporting and performance tracking?
                    </h3>
                    <p className="text-gray-400">
                        Yes, we implement dashboards and tracking systems
                        that monitor conversions, campaign performance,
                        and ROI metrics in real time.
                    </p>
                </div>
            </div>
            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Marketing Automation Service",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group Of Companies"
                        }
                    })
                }}
            />

        </section>
    )
}