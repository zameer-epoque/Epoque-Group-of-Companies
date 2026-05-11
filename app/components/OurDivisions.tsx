// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import Link from "next/link"
// import { useRouter } from "next/navigation"

// const divisions = [
//     {
//         id: "01",
//         title: "Époque Digital",
//         description:
//             "SEO-driven digital marketing, performance advertising, and web development solutions designed to scale brands and businesses in Hyderabad and beyond.",
//         image: "/tech.jpg",
//         href: "/digital/best-digital-marketing-agency-in-hyderabad",
//         cta: "Explore Digital Marketing Services",
//         alt: "Digital marketing and SEO services in Hyderabad",
//     },
//     {
//         id: "02",
//         title: "Époque Realty",
//         description:
//             "Luxury villas, gated community , HMDA approved lands, and premium real estate opportunities across Hyderabad’s fastest growing investment corridors.",
//         image: "/reality.jpg",
//         href: "/realty",
//         cta: "Get More Villas ",
//         alt: "Luxury villas and apartments for sale in Hyderabad",
//     },
//     {
//         id: "03",
//         title: "Époque Interiors",
//         description:
//             "Premium residential and commercial interior design solutions crafted to elevate lifestyle spaces and modern work environments.",
//         image: "/interior.jpg",
//         href: "/interiors",
//         cta: "View Interior Projects",
//         alt: "Luxury interior design services in Hyderabad",
//     },
//     {
//         id: "04",
//         title: "Revenue Architects",
//         description:
//             "Strategic revenue growth consulting, sales optimization frameworks, and business scaling systems built for sustainable enterprise expansion.",
//         image: "/architecture.jpg",
//         href: "/revenue",
//         cta: "Discover Revenue Strategy",
//         alt: "Revenue growth consulting and business scaling solutions",
//     },
// ]

// export default function OurDivisions() {
//     const router = useRouter()

//     return (
//         <section
//             className="relative py-20 px-6 bg-black text-white overflow-hidden"
//             aria-label="Our Business Divisions - Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
//         >

//             {/* Background Glow */}
//             <div className="absolute inset-0 flex justify-center pointer-events-none">
//                 <div className="w-[1200px] h-[1200px] bg-yellow-500/10 blur-[250px]" />
//             </div>

//             <div className="relative max-w-7xl mx-auto">

//                 {/* SECTION TITLE */}
//                 <div className="text-center mb-16">
//                     <h2 className="relative inline-block text-4xl md:text-5xl font-semibold tracking-wide">
//                         Our{" "}
//                         <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
//                             Divisions
//                         </span>

//                         <span
//                             className="
//                                 absolute left-0 -bottom-3 h-[3px] w-full
//                                 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
//                                 bg-[length:200%_100%]
//                                 animate-gradientMove
//                                 rounded-full
//                             "
//                         />
//                     </h2>

//                     {/* SEO Supporting Line */}
//                     <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
//                         From luxury villas and plots in Hyderabad to digital marketing,
//                         interior design execution, and revenue growth consulting —
//                         Époque Group delivers integrated business and property solutions.
//                     </p>
//                 </div>

//                 {/* GRID */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                     {divisions.map((item, index) => (
//                         <motion.div
//                             key={item.id}
//                             initial={{ opacity: 0, y: 60, scale: 0.95 }}
//                             whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                             transition={{ delay: index * 0.15, duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="group perspective"
//                         >
//                             <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 transition-all duration-500 group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-600">

//                                 <Link
//                                     href={item.href}
//                                     className="relative block h-[460px] sm:h-[500px] rounded-xl overflow-hidden bg-black transform-style-3d transition-all duration-700 hover:rotate-y-2 hover:-translate-y-2"
//                                 >

//                                     {/* Image */}
//                                     <Image
//                                         src={item.image}
//                                         alt={item.alt}
//                                         fill
//                                         sizes="(max-width: 768px) 100vw, 50vw"
//                                         className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
//                                     />

//                                     {/* Overlay */}
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

//                                     {/* Content */}
//                                     <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">

//                                         <motion.div
//                                             initial={{ opacity: 0, x: -20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: 0.2 }}
//                                             className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur rounded-full"
//                                         >
//                                             <span className="text-yellow-400 text-sm font-semibold">
//                                                 {item.id}
//                                             </span>
//                                         </motion.div>

//                                         <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
//                                             {item.title}
//                                         </h3>

//                                         <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
//                                             {item.description}
//                                         </p>

//                                         {/* CTA */}
//                                         <div
//                                             onClick={(e) => {
//                                                 e.preventDefault()
//                                                 e.stopPropagation()
//                                                 router.push(item.href)
//                                             }}
//                                             className="
//                                                 mt-6 inline-flex items-center gap-3
//                                                 px-5 py-2.5 rounded-full
//                                                 bg-gradient-to-r from-yellow-400/20 to-red-400/20
//                                                 border border-red-400/40
//                                                 backdrop-blur-md
//                                                 text-red-400
//                                                 hover:from-yellow-400/40 hover:to-red-500/40
//                                                 hover:shadow-[0_0_30px_rgba(255,0,0,0.5)]
//                                                 hover:scale-105
//                                                 transition-all duration-300
//                                                 cursor-pointer
//                                             "
//                                         >
//                                             <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">
//                                                 {item.cta}
//                                             </span>

//                                             <svg
//                                                 className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 stroke="currentColor"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     strokeWidth="2"
//                                                     d="M9 5l7 7-7 7"
//                                                 />
//                                             </svg>
//                                         </div>

//                                     </div>

//                                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition duration-700" />

//                                 </Link>
//                             </div>
//                         </motion.div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     )
// }




"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

const divisions = [
  {
    id: "01",
    title: "Époque Digital",
    description:
      "AI-powered digital marketing, real estate SEO services, performance advertising, web development, social media marketing, and lead generation systems designed to scale brands, developers, and businesses across Hyderabad and beyond.",
    image: "/tech.jpg",
    href: "/digital/best-digital-marketing-agency-in-hyderabad",
    cta: "Explore SEO & Marketing Services",
    alt: "Best digital marketing agency and SEO services in Hyderabad",
  },
  {
    id: "02",
    title: "Époque Realty",
    description:
      "Luxury villas, HMDA approved plots, gated communities, premium apartments, and high-growth real estate investment opportunities across Hyderabad’s fastest developing investment corridors.",
    image: "/reality.jpg",
    href: "/realty",
    cta: "Explore Luxury Properties",
    alt: "Luxury villas, gated communities and HMDA plots in Hyderabad",
  },
  {
    id: "03",
    title: "Époque Interiors",
    description:
      "Premium residential and commercial interior design solutions crafted for luxury villas, apartments, offices, retail environments, and modern lifestyle spaces with elegant execution.",
    image: "/interior.jpg",
    href: "/interiors",
    cta: "View Interior Solutions",
    alt: "Luxury interior design company in Hyderabad",
  },
  {
    id: "04",
    title: "Revenue Architects",
    description:
      "Strategic revenue consulting, conversion optimization, AI automation systems, customer acquisition frameworks, and scalable business growth solutions engineered for modern enterprises.",
    image: "/architecture.jpg",
    href: "/revenue",
    cta: "Discover Revenue Growth",
    alt: "Revenue growth consulting and lead generation systems",
  },
]

export default function OurDivisions() {
  const router = useRouter()

  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
      aria-label="Real Estate Marketing Agency, Luxury Villas, SEO Services and Revenue Growth Consulting in Hyderabad"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[1200px] w-[1200px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[250px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >

          {/* Badge */}
         

          {/* Title */}
          <h2 className="relative inline-block text-5xl font-semibold tracking-tight md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Divisions
            </span>

            <span
              className="
                absolute left-0 -bottom-4 h-[4px] w-full
                rounded-full
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                bg-[length:200%_100%]
                animate-gradientMove
              "
            />

            <span
              className="
                absolute left-0 -bottom-4 h-[10px] w-full
                rounded-full blur-md opacity-40
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              "
            />
          </h2>

          {/* SEO Text */}
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Époque Group delivers integrated real estate marketing, SEO
            services, AI-powered lead generation, luxury interior execution,
            performance marketing campaigns, and strategic revenue consulting
            frameworks designed to accelerate business growth and property sales.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {divisions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="group perspective"
            >

              {/* Border */}
              <div className="relative rounded-[28px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1.2px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.25)]">

                <Link
                  href={item.href}
                  className="relative block h-[480px] overflow-hidden rounded-[28px] bg-black transition-all duration-700 hover:-translate-y-2"
                >

                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width:768px)100vw,50vw"
                    className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">

                    {/* Number */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md"
                    >
                      <span className="text-sm font-semibold text-[#FFD369]">
                        {item.id}
                      </span>
                    </motion.div>

                    {/* Heading */}
                    <h3 className="mb-5 text-3xl font-semibold sm:text-4xl">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-7 text-base leading-relaxed text-gray-300 sm:text-lg">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        router.push(item.href)
                      }}
                      className="
                        mt-2 inline-flex w-fit items-center gap-3
                        rounded-full border border-[#D45B5B]/30
                        bg-gradient-to-r from-[#C79A3B]/20 to-[#D45B5B]/20
                        px-6 py-3
                        text-[#FFD369]
                        backdrop-blur-md
                        transition-all duration-300
                        hover:scale-105
                        hover:border-[#D45B5B]
                        hover:shadow-[0_0_30px_rgba(212,91,91,0.35)]
                      "
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider sm:text-sm">
                        {item.cta}
                      </span>

                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>

                  </div>

                  {/* Shimmer */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] opacity-0 transition duration-700 group-hover:opacity-100 animate-shimmer" />

                </Link>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom SEO Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <p className="text-base leading-relaxed text-gray-500 md:text-lg">
            Trusted by real estate developers, luxury brands, startups, and
            enterprise businesses seeking premium digital visibility,
            conversion-focused marketing systems, AI automation, SEO growth,
            high-quality lead generation, and scalable business expansion.
          </p>
        </motion.div>

      </div>
    </section>
  )
}