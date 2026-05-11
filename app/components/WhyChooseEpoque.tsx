// "use client"

// import { motion } from "framer-motion"
// import {
//     Palette,
//     Target,
//     Layers,
//     Handshake,
// } from "lucide-react"

// const items = [
//     {
//         icon: Palette,
//         title: "Conversion-Led Strategy",
//         desc: "Every campaign begins with structured lead generation architecture—designed to attract high-intent audiences, capture qualified enquiries, and transform traffic into sales-ready prospects."
//     },
//     {
//         icon: Target,
//         title: "Precision Targeting",
//         desc: "We leverage data-driven advertising, audience segmentation, and performance analytics to generate highly qualified leads that strengthen booking pipelines and reduce cost-per-acquisition."
//     },
//     {
//         icon: Layers,
//         title: "End-to-End Lead Systems",
//         desc: "From targeted ad campaigns and SEO funnels to conversion-optimized landing pages and CRM workflows, we build complete lead generation ecosystems that deliver measurable results."
//     },
//     {
//         icon: Handshake,
//         title: "Sales-Ready Partnerships",
//         desc: "We partner with developers and growth-focused businesses to deliver verified, high-intent qualified enquiries that convert into consistent revenue growth."
//     }
// ]

// export default function WhyChooseEpoque() {
//     return (
//         <section
//             className="relative py-24 px-6 bg-[#0E0E0E] text-white overflow-hidden"
//             aria-label="Why Choose Époque - Real Estate, Digital Marketing, Interior Design and Revenue Consulting Experts in Hyderabad"
//         >

//             {/* Ambient Background Glow */}
//             <div className="absolute inset-0 flex justify-center pointer-events-none">
//                 <div className="w-[1100px] h-[1100px] 
//                     bg-gradient-to-r 
//                     from-yellow-400/10 
//                     via-yellow-500/10 
//                     to-yellow-600/10 
//                     blur-[220px]" />
//             </div>

//             <div className="relative max-w-7xl mx-auto">

//                 {/* HEADER */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9 }}
//                     viewport={{ once: true }}
//                     className="max-w-4xl mx-auto text-center mb-24"
//                 >
//                     <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
//                         Why{" "}
//                         <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
//                             Choose Époque
//                         </span>

//                         <motion.span
//                             initial={{ scaleX: 0 }}
//                             whileInView={{ scaleX: 1 }}
//                             transition={{ duration: 0.8 }}
//                             viewport={{ once: true }}
//                             className="absolute left-1/2 -bottom-6 h-[3px] w-full 
//                                 -translate-x-1/2 
//                                 bg-gradient-to-r 
//                                 from-yellow-400 
//                                 via-yellow-500 
//                                 to-yellow-600 
//                                 rounded-full origin-center"
//                         />
//                     </h2>

//                     <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed">
//                         A performance-driven growth platform specializing in structured lead generation and qualified buyer acquisition, delivering high-intent enquiries that convert into measurable revenue across Hyderabad.
//                     </p>
//                 </motion.div>

//                 {/* GRID */}
//                 <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
//                     {items.map((item, index) => {
//                         const Icon = item.icon

//                         return (
//                             <motion.div
//                                 key={item.title}
//                                 initial={{ opacity: 0, y: 80 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ delay: index * 0.15, duration: 0.8 }}
//                                 viewport={{ once: true }}
//                                 className="group relative h-full"
//                             >

//                                 {/* OUTER GRADIENT BORDER */}
//                                 <div className="relative p-[1.5px] rounded-3xl h-full
//                                     bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600
//                                     transition-all duration-500
//                                     shadow-lg shadow-yellow-500/10
//                                     group-hover:shadow-[0_0_45px_rgba(250,204,21,0.6)]">

//                                     {/* INNER CARD */}
//                                     <div className="relative flex flex-col h-full
//                                         rounded-3xl p-8 sm:p-10
//                                         bg-gradient-to-br from-[#141414] to-[#1c1c1c]
//                                         border border-yellow-500/20
//                                         backdrop-blur-xl
//                                         transition-all duration-500
//                                         group-hover:-translate-y-3
//                                         group-hover:border-yellow-400/60">

//                                         {/* Glow */}
//                                         <div className="absolute inset-0 rounded-3xl
//                                             opacity-0 group-hover:opacity-100
//                                             transition duration-700 blur-3xl
//                                             bg-yellow-400/30" />

//                                         <div className="relative z-10">

//                                             {/* ICON */}
//                                             <div className="mb-6 flex justify-center">
//                                                 <div className="flex items-center justify-center
//                                                     w-16 h-16 rounded-full
//                                                     bg-yellow-400/10
//                                                     border border-yellow-400/30
//                                                     text-yellow-400
//                                                     transition-all duration-500
//                                                     group-hover:scale-125
//                                                     group-hover:bg-yellow-400/20
//                                                     group-hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]">
//                                                     <Icon size={36} />
//                                                 </div>
//                                             </div>

//                                             <h3 className="font-heading text-[28px] font-semibold mb-4 tracking-wide text-white flex justify-center">
//                                                 {item.title}
//                                             </h3>

//                                             <p className="text-gray-400 leading-relaxed text-base">
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
  Palette,
  Target,
  Layers,
  Handshake,
} from "lucide-react"

const items = [
  {
    icon: Palette,
    title: "Conversion-Focused Marketing",
    desc:
      "Every campaign is engineered with high-converting lead generation systems, real estate SEO strategies, AI-driven automation, and conversion-focused digital funnels designed to transform traffic into qualified sales-ready enquiries.",
  },
  {
    icon: Target,
    title: "AI-Powered Precision Targeting",
    desc:
      "We combine performance marketing, audience segmentation, Google Ads optimization, and data-driven analytics to generate high-intent real estate leads while maximizing ROI and reducing acquisition costs.",
  },
  {
    icon: Layers,
    title: "End-to-End Growth Ecosystems",
    desc:
      "From real estate digital marketing and SEO funnels to landing page optimization, CRM workflows, automation systems, and luxury branding, we build scalable growth ecosystems that drive measurable business expansion.",
  },
  {
    icon: Handshake,
    title: "Qualified Lead Partnerships",
    desc:
      "We partner with developers, luxury brands, startups, and enterprise businesses to deliver verified qualified leads, conversion-focused marketing systems, and sustainable revenue growth strategies.",
  },
]

export default function WhyChooseEpoque() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-24 text-white"
      aria-label="Why Choose Époque Group - Real Estate Marketing Agency, SEO Services & Lead Generation Experts in Hyderabad"
    >

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div
          className="
            h-[1100px] w-[1100px]
            bg-gradient-to-r
            from-[#C79A3B]/10
            via-[#D45B5B]/10
            to-[#7A2E63]/10
            blur-[220px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-5xl text-center"
        >

          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
            Real Estate SEO • AI Marketing • Lead Generation • Revenue Growth
          </div>

          {/* Heading */}
          <h2 className="relative inline-block font-heading text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Why{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Choose Époque
            </span>

            {/* Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="
                absolute left-1/2 -bottom-6 h-[4px] w-full
                -translate-x-1/2 rounded-full
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
                origin-center
              "
            />

            {/* Glow */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
                absolute left-1/2 -bottom-6 h-[10px] w-full
                -translate-x-1/2 rounded-full opacity-40 blur-md
                bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]
              "
            />
          </h2>

          {/* SEO Text */}
          <p className="mx-auto mt-10 max-w-4xl text-xl leading-relaxed text-gray-400 md:text-2xl">
            Époque Group is a performance-driven real estate marketing agency
            specializing in SEO services, AI-powered lead generation, luxury
            branding, paid advertising, and scalable conversion ecosystems that
            generate measurable business growth and qualified buyer acquisition.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
                className="group relative h-full"
              >

                {/* Border */}
                <div
                  className="
                    relative h-full rounded-[30px] p-[1.3px]
                    bg-gradient-to-br
                    from-[#C79A3B]
                    via-[#D45B5B]
                    to-[#7A2E63]
                    transition-all duration-500
                    group-hover:shadow-[0_0_45px_rgba(199,154,59,0.35)]
                  "
                >

                  {/* Card */}
                  <div
                    className="
                      relative flex h-full flex-col
                      rounded-[30px]
                      border border-white/5
                      bg-gradient-to-br from-[#141414] to-[#1c1c1c]
                      p-8 backdrop-blur-xl
                      transition-all duration-500
                      group-hover:-translate-y-3
                    "
                  >

                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0 rounded-[30px]
                        opacity-0 blur-3xl transition duration-700
                        group-hover:opacity-100
                        bg-[#C79A3B]/20
                      "
                    />

                    <div className="relative z-10">

                      {/* Icon */}
                      <div className="mb-7 flex justify-center">
                        <div
                          className="
                            flex h-16 w-16 items-center justify-center
                            rounded-full border border-[#C79A3B]/30
                            bg-[#C79A3B]/10
                            text-[#FFD369]
                            transition-all duration-500
                            group-hover:scale-125
                            group-hover:bg-[#C79A3B]/20
                            group-hover:shadow-[0_0_25px_rgba(199,154,59,0.35)]
                          "
                        >
                          <Icon size={34} />
                        </div>
                      </div>

                      {/* Title */}
                      <h3
                        className="
                          mb-5 flex justify-center
                          text-center font-heading
                          text-[28px] font-semibold
                          tracking-wide text-white
                        "
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base leading-relaxed text-gray-400">
                        {item.desc}
                      </p>

                    </div>

                  </div>
                </div>

              </motion.div>
            )
          })}

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
            Trusted by real estate developers, luxury interior brands,
            startups, and enterprise businesses seeking premium SEO visibility,
            AI-driven marketing systems, conversion-focused advertising,
            qualified lead generation, and scalable revenue growth.
          </p>
        </motion.div>

      </div>
    </section>
  )
}