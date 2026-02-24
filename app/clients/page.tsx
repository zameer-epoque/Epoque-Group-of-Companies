"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const clients = [
    {
        name: "Vasavi Group",
        image: "/vasavigroup.jpg",
        description:
            "Premium real estate developer in Hyderabad. Delivered branding, Google Ads and high-conversion lead generation campaigns.",
        stats: { leads: 3200, projects: 4 }
    },
    {
        name: "Etereo Realty",
        image: "/goa.jpg",
        description:
            "Luxury villa and gated community developer. Executed SEO, paid ads and full-scale digital launch strategy.",
        stats: { leads: 2100, projects: 3 }
    },
    {
        name: "Orange County Homes",
        image: "/orange-county.jpg",
        description:
            "High-end villa development brand. Built performance funnels and optimized cost-per-lead campaigns.",
        stats: { leads: 1800, projects: 2 }
    },
    {
        name: "GRSV Infra",
        image: "/gsrvinfra.jpg",
        description:
            "Infrastructure and residential builder. Implemented structured branding and performance marketing systems.",
        stats: { leads: 2400, projects: 4 }
    },
    {
        name: "P R Constructions",
        image: "/pr-construct.jpg",
        description:
            "Residential construction company. Scaled visibility through digital outreach and ROI-driven campaigns.",
        stats: { leads: 2000, projects: 4 }
    }
]

function Counter({ value }: { value: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let start = 0
        const duration = 1000
        const increment = value / (duration / 16)

        const counter = setInterval(() => {
            start += increment
            if (start >= value) {
                setCount(value)
                clearInterval(counter)
            } else {
                setCount(Math.floor(start))
            }
        }, 16)

        return () => clearInterval(counter)
    }, [value])

    return <span>{count.toLocaleString()}</span>
}

export default function ClientsPremiumPage() {
    return (
        <section className="bg-black text-white py-24 px-6">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl font-semibold text-center mb-20">
                    Our{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Clients
                    </span>
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="relative group"
                        >
                            {/* Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] rounded-3xl blur opacity-0 group-hover:opacity-80 transition duration-500"></div>

                            <div className="relative bg-[#111111] rounded-3xl overflow-hidden border border-white/10">

                                {/* Image */}
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={client.image}
                                        alt={client.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Always Visible */}
                                <div className="p-8 space-y-5">

                                    <h2 className="text-2xl font-semibold text-[#C79A3B]">
                                        {client.name}
                                    </h2>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {client.description}
                                    </p>

                                    {/* Stats */}
                                    <div className="flex justify-between text-sm text-gray-400 border-t border-white/10 pt-4">

                                        <div>
                                            <div className="text-white font-semibold text-lg">
                                                <Counter value={client.stats.leads} />+
                                            </div>
                                            Leads
                                        </div>

                                        <div>
                                            <div className="text-white font-semibold text-lg">
                                                <Counter value={client.stats.projects} />
                                            </div>
                                            Projects
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}