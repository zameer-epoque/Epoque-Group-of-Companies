// "use client"

// import { motion } from "framer-motion"
// import {
//     Building2,
//     Megaphone,
//     Palette,
//     TrendingUp
// } from "lucide-react"

// export default function WhoWeAre() {
//     return (
//         <section
//             className="relative py-14 px-6 overflow-hidden bg-black text-white"
//             aria-label="Who We Are - Époque Group Real Estate, Digital, Interiors and Revenue Experts in Hyderabad"
//         >

//             {/* Background Glow */}
//             <div className="pointer-events-none absolute inset-0 flex justify-center">
//                 <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 blur-[220px]" />
//             </div>

//             <div className="relative max-w-7xl mx-auto">

//                 {/* Header (UNCHANGED) */}
//                 {/* Your header code remains exactly same */}

//                 {/* Cards Grid */}
//                 <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">

//                     {[
//                         {
//                             icon: Building2,
//                             title: "Real Estate Excellence",
//                             desc: "Delivering premium villas, gated community, and investment-driven real estate opportunities across Hyderabad’s fastest growing corridors.",
//                             color: "#facc15",
//                         },
//                         {
//                             icon: Megaphone,
//                             title: "Digital Marketing",
//                             desc: "Performance-driven SEO, paid advertising, and brand growth strategies engineered to scale modern businesses and digital-first enterprises.",
//                             color: "#eab308",
//                         },
//                         {
//                             icon: Palette,
//                             title: "Interior Design",
//                             desc: "Luxury residential and commercial interior solutions crafted to elevate lifestyle, workspace functionality, and design identity.",
//                             color: "#ca8a04",
//                         },
//                         {
//                             icon: TrendingUp,
//                             title: "Revenue Growth",
//                             desc: "Strategic revenue consulting frameworks designed to optimize sales systems, scale operations, and accelerate sustainable business growth.",
//                             color: "#a16207",
//                         },
//                     ].map((item, index) => {
//                         const Icon = item.icon

//                         return (
//                             <motion.div
//                                 key={item.title}
//                                 initial={{ opacity: 0, y: 60 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.15, duration: 0.7 }}
//                                 viewport={{ once: true }}
//                                 className="group relative h-full"
//                             >

//                                 {/* Gradient Border */}
//                                 <div className="relative p-[1.5px] rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.5)] transition-all duration-500 h-full">

//                                     {/* Card */}
//                                     <div className="relative flex flex-col justify-between h-full rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-yellow-500/20 transition-all duration-500 group-hover:-translate-y-3">

//                                         {/* Glow */}
//                                         <div
//                                             className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
//                                             style={{
//                                                 background: `radial-gradient(circle at top left, ${item.color}30, transparent 70%)`,
//                                             }}
//                                         />

//                                         <div className="relative z-10">

//                                             {/* NEW ICON */}
//                                             <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
//                                                 <Icon
//                                                     size={48}
//                                                     strokeWidth={1.5}
//                                                     className="text-yellow-400"
//                                                 />
//                                             </div>

//                                             <h2 className="font-heading text-2xl sm:text-3xl font-semibold mb-4">
//                                                 {item.title}
//                                             </h2>

//                                             <p className="text-base sm:text-lg leading-relaxed text-gray-400">
//                                                 {item.desc}
//                                             </p>

//                                         </div>

//                                     </div>
//                                 </div>

//                             </motion.div>
//                         )
//                     })}

//                 </div>

//             </div>
//         </section>
//     )
// }


"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Megaphone,
  Palette,
  TrendingUp,
} from "lucide-react"

export default function WhoWeAre() {
  return (
    <section
      className="relative overflow-hidden bg-black px-6 py-16 text-white"
      aria-label="Real Estate Marketing Agency, SEO Services, Luxury Interiors & Revenue Growth Consulting in Hyderabad"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[1000px] w-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            Luxury Real Estate Marketing & Business Growth Experts
          </span>

          <h2 className="font-heading text-4xl font-semibold leading-tight md:text-5xl">
            Scaling Modern Brands Through{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Marketing, SEO & Revenue Systems
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Époque Group is a premium real estate marketing agency in Hyderabad
            specializing in lead generation, SEO services, AI-driven marketing,
            luxury branding, interior execution, and revenue growth consulting
            for builders, developers, startups, and high-growth businesses.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: Building2,
              title: "Real Estate Marketing",
              desc:
                "Luxury real estate marketing solutions, gated community promotions, property branding, lead generation funnels, and SEO strategies designed for builders and developers across Hyderabad and emerging investment corridors.",
              color: "#facc15",
            },
            {
              icon: Megaphone,
              title: "Digital Marketing & SEO",
              desc:
                "Performance-driven SEO services, Google Ads, AI marketing automation, social media advertising, and conversion-focused digital campaigns engineered to generate high-quality business leads.",
              color: "#eab308",
            },
            {
              icon: Palette,
              title: "Luxury Interior Solutions",
              desc:
                "Premium residential and commercial interior design execution crafted for luxury homes, offices, villas, and modern workspaces with elegant aesthetics and functional design systems.",
              color: "#ca8a04",
            },
            {
              icon: TrendingUp,
              title: "Revenue Growth Consulting",
              desc:
                "Strategic business growth consulting frameworks focused on sales optimization, customer acquisition, conversion systems, revenue scaling, and sustainable long-term brand expansion.",
              color: "#a16207",
            },
          ].map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                {/* Gradient Border */}
                <div className="relative h-full rounded-[28px] bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1.5px] transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(199,154,59,0.35)]">

                  {/* Card */}
                  <div className="relative flex h-full flex-col justify-between rounded-[28px] border border-white/5 bg-gradient-to-br from-[#111111] to-[#1A1A1A] p-8 transition-all duration-500 group-hover:-translate-y-3">

                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-[28px] opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at top left, ${item.color}30, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">

                      {/* Icon */}
                      <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                        <Icon
                          size={50}
                          strokeWidth={1.5}
                          className="text-[#FFD369]"
                        />
                      </div>

                      {/* Heading */}
                      <h3 className="font-heading mb-5 text-2xl font-semibold sm:text-3xl">
                        {item.title}
                      </h3>

                      {/* Content */}
                      <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                </div>
              </motion.div>
            )
          })}

        </div>

        {/* Bottom SEO Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-5xl text-center"
        >
          <p className="text-base leading-relaxed text-gray-500 md:text-lg">
            Trusted by real estate developers, luxury brands, startups, and
            enterprise businesses looking for high-converting marketing systems,
            premium digital visibility, AI-powered lead generation, and scalable
            business growth solutions.
          </p>
        </motion.div>

      </div>
    </section>
  )
}