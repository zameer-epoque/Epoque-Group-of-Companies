"use client"

import Script from "next/script"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const clients = [
    {
        name: "Vasavi Group Crown",
        image: "/vasavi-group-real-estate-marketing-hyderabad-epoque-group.jpg",
        description:
            "Executed high-performance lead generation campaigns focused on attracting qualified property buyers across Hyderabad.",
            link: "https://vasavi-group.vercel.app/"
    },
    {
        name: "Etereo Realty Goa",
        image: "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
        description:
            "Built a strategic villa lead generation funnel delivering highly qualified premium buyer enquiries.",
            link: "/ETEREO1" },
    {
        name: "Orange County Homes",
        image: "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
        description:
            "Designed a performance-driven qualified lead generation system reducing CPL and improving conversions."
    },
    {
        name: "GRSV Infra",
        image: "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.png",
        description:
            "Implemented SEO and paid media campaigns strengthening booking pipeline growth."
    },
    {
        name: "P R Constructions",
        image: "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
        description:
            "Delivered a performance-driven real estate lead generation system generating consistent qualified buyer enquiries through targeted digital campaigns."
    },
    {
        name: "Marco Express",
        image: "/marco-express-sales-acceleration-outsourced-growth.png",
        description:
            "End-to-end outsourced revenue growth support and sales acceleration systems."
    },
    {
        name: "Om Sree Builders",
        image: "/om-sree-builders-qualified-lead-generation.jpg",
        description:
            "Structured, criteria-based qualified lead generation delivering high-intent prospects.",
            link: "https://om-sree.vercel.app/"
    }
]

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1] // safe cubic-bezier
        }
    }
}

export default function ClientsPage() {
    return (
        <main className="relative bg-black text-white min-h-screen overflow-hidden">

            {/* Animated Background */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500 rounded-full blur-[180px] opacity-20 animate-pulse" />
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[180px] opacity-20 animate-pulse" />

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Real Estate Marketing in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Performance-driven digital strategies helping developers scale
                        projects through structured branding and high-conversion campaigns.
                    </p>
                </motion.div>

                {/* CLIENT GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-16"
                >
                    {clients.map((client, index) => {
                        const Wrapper: any = client.link ? "a" : "div"

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                className="group"
                            >
                                <Wrapper
                                    {...(client.link && {
                                        href: client.link,
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    })}
                                    className="block"
                                >
                                    <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-orange-400/40 group-hover:shadow-orange-500/20">

                                        {/* IMAGE */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <Image
                                                src={client.image}
                                                alt={client.name}
                                                fill
                                                quality={100}
                                                className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        </div>

                                        {/* CONTENT */}
                                        <div className="p-8">
                                            <h2 className="text-2xl font-semibold text-orange-400 mb-4 group-hover:text-yellow-400 transition">
                                                {client.name}
                                            </h2>

                                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition">
                                                {client.description}
                                            </p>

                                            {client.link && (
                                                <div className="mt-6 text-yellow-400 text-sm font-medium">
                                                    View Live Project →
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                </Wrapper>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mt-32"
                >
                    <h2 className="text-4xl font-semibold mb-6">
                        Ready to Scale Your Project?
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                        Let’s build structured digital systems that drive qualified leads,
                        lower CPL and accelerate revenue growth.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-block px-12 py-4 rounded-full font-semibold text-black 
            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
            hover:scale-110 transition duration-300 shadow-2xl"
                    >
                        Book Strategy Consultation
                    </Link>
                </motion.div>

            </div>

            {/* STRUCTURED DATA */}
            <Script
                id="clients-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        name: "Real Estate Marketing Case Studies",
                        itemListElement: clients.map((client, index) => ({
                            "@type": "ListItem",
                            position: index + 1,
                            name: client.name
                        }))
                    })
                }}
            />
        </main>
    )
}