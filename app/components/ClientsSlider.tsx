"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const clients = [
  {
    title: "Radhey Constructions",
    location: "Hyderabad",
    image: "/client1.jpg",
    description:
      "Premium villas and apartments with world-class design and high investment value.",
    link: "https://radheyconstructions.com/"
  },
  {
    title: "Vasavi Group",
    location: "Hyderabad",
    image: "/vasavi-group-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Executed high-performance lead generation campaigns focused on attracting qualified property buyers across Hyderabad.",
    link: "/Vasavi"
  },
  {
    title: "Om Sree Builders",
    location: "Hyderabad",
    image: "/om-sree-builders-qualified-lead-generation.jpg",
    description:
      "Structured, criteria-based qualified lead generation delivering high-intent prospects.",
    link: "/om-sree-delight-2bhk-3bhk-luxury-apartments-for-sale-in-yapral-hyderabad"
  },
  {
    title: "PR Constructions  Sunridge Homes",
    location: "Hyderabad",
    image: "/pr-constructions-property-marketing-hyderabad-epoque-group.jpg",
    description:
      "Delivered consistent qualified buyer enquiries through targeted digital campaigns."
  },
  {
    title: "Orange County Homes - Callisto5 Villas",
    location: "Hyderabad",
    image: "/orange-county-homes-digital-marketing-hyderabad-epoque-group.jpg",
    description:
      "Designed a performance-driven qualified lead generation system reducing CPL and improving conversions.",
    link: "/callisto5-4bhk-triplex-villas-for-sale-in-tukkuguda-hyderabad"
  },
  {
    title: "GRSV Infra",
    location: "Hyderabad",
    image: "/grsv-infra-real-estate-lead-generation-hyderabad-epoque-group.png",
    description:
      "Implemented SEO and paid media campaigns strengthening booking pipeline growth."
  },
  {
    title: "Etereo Realty Etereo 1",
    location: "Goa",
    image: "/etereo-realty-villa-marketing-hyderabad-epoque-group.jpg",
    description:
      "Built a strategic villa lead generation funnel delivering highly qualified premium buyer enquiries.",
    link: "/ETEREO1"
  },
  {
    title: "Macro Express",
    location: "Mumbai & Nagpur",
    image: "/marco-express-sales-acceleration-outsourced-growth.png",
    description:
      "End-to-end outsourced revenue growth support and sales acceleration systems."
  },
  {
    title: "Property Handling",
    location: "Hyderabad",
    image: "/client2.jpg",
    description:
      "Comprehensive real estate solutions including buying, selling, and investment advisory.",
    link: "/property-management-service-in-hyderabad"
  },
  {
    title: "Garikipati Towers",
    location: "Hyderabad",
    image: "/garikipati-towers-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Premium real estate developer offering luxury villas and apartments.",
    link: "/Garikipati-Towers-1.5-2-3-BHK-Luxury-Apartments-For-Sale-in-Hyderabad"
  },
  {
    title: "Apr Praveens Hillside Luxury Villas",
    location: "Hyderabad",
    image: "/APR-Hills-real-estate-marketing-hyderabad-epoque-group.jpg",
    description:
      "Executed high-performance lead generation campaigns across Hyderabad.",
    link: "/Apr-Praveens-Hillside-4BHK-Luxury-Villas-For-Sale-in-Bachupally-Hyderabad"
  }
]


// 🔁 duplicate for seamless loop
const loopClients = [...clients, ...clients]

export default function ClientsSlider() {
  return (
    <section className="bg-black py-8 overflow-hidden relative">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white">
          Our <span className="text-orange-400">Clients</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Trusted by top real estate brands
        </p>
      </div>

      {/* GRADIENT FADE EDGES (🔥 PREMIUM LOOK) */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          whileHover={{ animationPlayState: "paused" }} // 🧠 pause on hover
        >
          {loopClients.map((client, i) => {
            const Wrapper = client.link ? Link : "div"

            return (
              <Wrapper
                key={i}
                href={client.link || "#"}
                className="min-w-[320px] group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition duration-500 hover:scale-105 hover:border-orange-400/40">

                  {/* IMAGE */}
                  <div className="relative h-[240px] w-full overflow-hidden">
                    <Image
                      src={client.image}
                      alt={client.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-orange-400 group-hover:text-yellow-400 transition">
                      {client.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
                      <p className="text-sm text-gray-400 uppercase tracking-wide">
                        {client.location}
                      </p>
                    </div>
                  </div>

                </div>
              </Wrapper>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}