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

const loopClients = [...clients, ...clients]

export default function ClientsSlider() {
  return (
    <section className="relative overflow-hidden bg-[#050505] py-14 md:py-20">

      {/* PREMIUM BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[900px] w-[900px] rounded-full bg-orange-500/10 blur-[180px]" />
      </div>

      {/* TITLE */}
      <div className="relative z-20 mb-12 px-4 text-center md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-amber-500 bg-clip-text text-transparent">
            Clients Projects
          </span>
        </h2>

        <p className="mt-4 text-sm text-gray-400 md:text-base">
          Trusted by top real estate brands
        </p>
      </div>

      {/* SIDE FADE */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#050505] to-transparent md:w-32" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#050505] to-transparent md:w-32" />

      {/* SLIDER */}
      <div className="relative z-20 overflow-hidden">

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity
          }}
        >

          {loopClients.map((client, i) => {
            const Wrapper = client.link ? Link : "div"

            return (
              <Wrapper
                key={i}
                href={client.link || "#"}
                className="
                  flex
                  min-w-[270px]
                  sm:min-w-[290px]
                  md:min-w-[330px]
                  lg:min-w-[350px]
                "
              >

                {/* CARD */}
                <div className="group relative flex w-full">

                  {/* BORDER */}
                  <div className="relative flex w-full flex-col rounded-[30px] bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 p-[1px] shadow-[0_10px_35px_rgba(251,146,60,0.12)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_55px_rgba(251,146,60,0.32)]">

                    {/* INNER */}
                    <div className="relative flex min-h-[540px] flex-col overflow-hidden rounded-[30px] border border-orange-500/10 bg-gradient-to-br from-[#111111] via-[#181818] to-[#0B0B0B] backdrop-blur-xl">

                      {/* HOVER GLOW */}
                      <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_55%)]" />

                      {/* TOP SHINE */}
                      <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

                      {/* IMAGE */}
                      <div className="relative h-[230px] w-full flex-shrink-0 overflow-hidden">

                        <Image
                          src={client.image}
                          alt={client.title}
                          fill
                          sizes="(max-width:768px) 100vw, 350px"
                          className="object-cover transition duration-700 ease-out group-hover:scale-110"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                      </div>

                      {/* CONTENT */}
                      <div className="relative z-10 flex flex-1 flex-col px-6 py-6">

                        {/* TOP */}
                        <div>

                          {/* TITLE */}
                         <h3 className="
  min-h-[72px]
  text-[22px]
  md:text-[24px]
  font-semibold
  leading-[1.45]
  tracking-[-0.02em]
  text-white
  transition-all
  duration-300
  group-hover:text-orange-300
">
  {client.title}
</h3>


                          {/* LOCATION */}
                        <div className="mt-4 flex items-center gap-2">

  <span className="h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(251,146,60,0.8)]"></span>

  <p className="
    text-[11px]
    md:text-xs
    uppercase
    tracking-[3px]
    font-medium
    text-orange-300
  ">
    {client.location}
  </p>

</div>

                          {/* LINE */}
                          <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 transition-all duration-500 group-hover:w-24" />

                        </div>

                        {/* DESCRIPTION */}
                        <div className="flex flex-1 items-start pt-6">

                          <p className="text-sm leading-[1.9] text-gray-400 md:text-[15px]">
                            {client.description}
                          </p>

                        </div>

                      </div>

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