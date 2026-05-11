// "use client"

// import { motion } from "framer-motion"

// export default function VisionMissionPromise() {
//     return (
//         <section
//             className="relative py-8 px-6 overflow-hidden bg-[#0E0E0E] text-white"
//             aria-label="Our Vision, Mission and Promise - Époque Group Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
//         >

//             {/* PREMIUM BACKGROUND GLOW */}
//             <div className="pointer-events-none absolute inset-0 flex justify-center">
//                 <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
//             </div>

//             <div className="relative max-w-7xl mx-auto">

//                 {/* SECTION HEADER */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9 }}
//                     viewport={{ once: true }}
//                     className="max-w-4xl mx-auto text-center mb-24"
//                 >
//                     <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-6xl font-semibold leading-tight tracking-tight">
//                         Our{" "}
//                         <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
//                             Vision, Mission & Promise
//                         </span>

//                         <motion.span
//                             initial={{ scaleX: 0 }}
//                             whileInView={{ scaleX: 1 }}
//                             transition={{ duration: 1, ease: "easeOut" }}
//                             viewport={{ once: true }}
//                             className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
//                         />

//                         <motion.span
//                             initial={{ scaleX: 0 }}
//                             whileInView={{ scaleX: 1 }}
//                             transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
//                             viewport={{ once: true }}
//                             className="absolute left-1/2 -bottom-5 h-[10px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] blur-md opacity-50"
//                         />
//                     </h2>

//                     {/* SEO Optimized Intro */}
//                     <p className="mt-12 text-xl md:text-2xl leading-relaxed text-gray-400">
//                         The guiding philosophy behind Époque Group’s high-performance lead generation frameworks, engineered to capture qualified, sales-ready enquiries through data-driven marketing systems and conversion-focused strategies.
//                     </p>
//                 </motion.div>

//                 {/* GRID */}
//                 <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-3 items-stretch">

//                     {[
//                         {
                           
//                             title: "Our Vision",
//                             subtitle: "Redefining Lead Generation Excellence",
//                             desc: "To become Hyderabad’s most trusted lead generation partner, delivering consistent high-intent, qualified enquiries that transform marketing investments into measurable sales growth and scalable revenue systems.",
//                             color: "#facc15",
//                         },
//                         {
                         
//                             title: "Our Mission",
//                             subtitle: "Structured Qualified Buyer Acquisition",
//                             desc: "We design performance-driven digital marketing systems focused on generating qualified leads, optimizing conversion funnels, and building predictable sales pipelines for real estate and growth-focused enterprises.",
//                             color: "#eab308",
//                         },
//                         {
                      
//                             title: "Our Promise",
//                             subtitle: "High-Intent Leads. Measurable Results.",
//                             desc: "We commit to delivering verified, qualified enquiries through data-backed campaigns, transparent reporting, and conversion-focused strategies that directly accelerate revenue growth.",
//                             color: "#eab308",
//                         }
//                     ].map((item, index) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.2, duration: 0.7 }}
//                             viewport={{ once: true }}
//                             className="group relative h-full"
//                         >
//                             <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-yellow-400/80 via-yellow-500 to-yellow-600/80 transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(250,204,21,0.4)] h-full">

//                                 <div className="relative flex flex-col h-full rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#141414] to-[#1c1c1c] border border-yellow-500/15 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2">

//                                     <div
//                                         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500"
//                                         style={{
//                                             background: `radial-gradient(circle at 20% 10%, ${item.color}15, transparent 60%)`,
//                                         }}
//                                     />

//                                     <div className="relative z-10 flex flex-col h-full">

//                                         {/* <div className="text-5xl mb-6 transition-all duration-500 group-hover:scale-105">
//                                             {item.icon}
//                                         </div> */}

//                                         <h3 className="font-heading text-2xl sm:text-3xl font-semibold mb-2 tracking-tight">
//                                             {item.title}
//                                         </h3>

//                                         <p
//                                             className="text-base sm:text-lg font-medium mb-5 tracking-wide"
//                                             style={{ color: item.color }}
//                                         >
//                                             {item.subtitle}
//                                         </p>

//                                         <div className="w-10 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6 rounded-full transition-all duration-500 group-hover:w-16" />

//                                         <p className="text-base sm:text-lg leading-relaxed text-gray-400 mt-auto">
//                                             {item.desc}
//                                         </p>

//                                     </div>

//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}

//                 </div>

//             </div>
//         </section>
//     )
// }


// "use client"

// import { motion } from "framer-motion"

// export default function VisionMissionPromise() {
//     return (
//         <section
//             className="relative py-8 px-6 overflow-hidden bg-[#0E0E0E] text-white"
//             aria-label="Our Vision, Mission and Promise - Époque Group Real Estate, Digital Marketing, Interiors and Revenue Consulting in Hyderabad"
//         >

//             {/* PREMIUM BACKGROUND GLOW */}
//             <div className="pointer-events-none absolute inset-0 flex justify-center">
//                 <div className="w-[1000px] h-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
//             </div>

//             <div className="relative max-w-7xl mx-auto">

//                 {/* SECTION HEADER */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 60 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.9 }}
//                     viewport={{ once: true }}
//                     className="max-w-4xl mx-auto text-center mb-24"
//                 >
//                     <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-6xl font-semibold leading-tight tracking-tight">
//                         Our{" "}
//                         <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
//                             Vision, Mission & Promise
//                         </span>

//                         <motion.span
//                             initial={{ scaleX: 0 }}
//                             whileInView={{ scaleX: 1 }}
//                             transition={{ duration: 1, ease: "easeOut" }}
//                             viewport={{ once: true }}
//                             className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
//                         />

//                         <motion.span
//                             initial={{ scaleX: 0 }}
//                             whileInView={{ scaleX: 1 }}
//                             transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
//                             viewport={{ once: true }}
//                             className="absolute left-1/2 -bottom-5 h-[10px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] blur-md opacity-50"
//                         />
//                     </h2>

//                     {/* SEO Optimized Intro */}
//                     <p className="mt-12 text-xl md:text-2xl leading-relaxed text-gray-400">
//                         The guiding philosophy behind Époque Group’s high-performance lead generation frameworks, engineered to capture qualified, sales-ready enquiries through data-driven marketing systems and conversion-focused strategies.
//                     </p>
//                 </motion.div>

//                 {/* GRID */}
//                 <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-3 items-stretch">

//                     {[
//                         {
//                             title: "Our Vision",
//                             subtitle: "Redefining Lead Generation Excellence",
//                             desc: "To become Hyderabad’s most trusted lead generation partner, delivering consistent high-intent, qualified enquiries that transform marketing investments into measurable sales growth and scalable revenue systems.",
//                             color: "#facc15",
//                         },
//                         {
//                             title: "Our Mission",
//                             subtitle: "Structured Qualified Buyer Acquisition",
//                             desc: "We design performance-driven digital marketing systems focused on generating qualified leads, optimizing conversion funnels, and building predictable sales pipelines for real estate and growth-focused enterprises.",
//                             color: "#eab308",
//                         },
//                         {
//                             title: "Our Promise",
//                             subtitle: "High-Intent Leads. Measurable Results.",
//                             desc: "We commit to delivering verified, qualified enquiries through data-backed campaigns, transparent reporting, and conversion-focused strategies that directly accelerate revenue growth.",
//                             color: "#eab308",
//                         }
//                     ].map((item, index) => (
//                         <motion.div
//                             key={item.title}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.2, duration: 0.7 }}
//                             viewport={{ once: true }}
//                             className="group relative flex"
//                         >
//                             <div className="relative w-full p-[1px] rounded-[32px] bg-gradient-to-br from-yellow-400/80 via-yellow-500 to-yellow-600/80 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]">

//                                 <div className="relative flex flex-col justify-between h-full min-h-[420px] rounded-[32px] p-8 sm:p-10 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1c1c1c] border border-yellow-500/15 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">

//                                     {/* Glow Effect */}
//                                     <div
//                                         className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-500"
//                                         style={{
//                                             background: `radial-gradient(circle at top left, ${item.color}18, transparent 60%)`,
//                                         }}
//                                     />

//                                     {/* Premium Blur Circle */}
//                                     <div
//                                         className="absolute -top-20 -right-20 w-44 h-44 rounded-full blur-3xl opacity-20"
//                                         style={{
//                                             background: item.color,
//                                         }}
//                                     />

//                                     <div className="relative z-10 flex flex-col h-full">

//                                         <div className="space-y-5">

//                                             <h3 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight leading-snug">
//                                                 {item.title}
//                                             </h3>

//                                             <p
//                                                 className="text-base sm:text-lg font-medium tracking-wide leading-relaxed"
//                                                 style={{ color: item.color }}
//                                             >
//                                                 {item.subtitle}
//                                             </p>

//                                             <div className="w-12 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all duration-500 group-hover:w-20" />

//                                         </div>

//                                         <p className="text-base sm:text-lg leading-[1.9] text-gray-400 mt-8">
//                                             {item.desc}
//                                         </p>

//                                     </div>

//                                 </div>
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

export default function VisionMissionPromise() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B0B0B] px-6 py-16 text-white"
      aria-label="Real Estate Marketing Agency, Lead Generation, SEO & Revenue Growth Consulting in Hyderabad"
    >
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0 flex justify-center">
        <div className="h-[1000px] w-[1000px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[220px]" />
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
            Real Estate Marketing • SEO • Lead Generation • Revenue Growth
          </div>

          {/* Heading */}
          <h2 className="relative inline-block font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
              Vision, Mission & Promise
            </span>

            {/* Line */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[4px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]"
            />

            {/* Glow */}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="absolute left-1/2 -bottom-5 h-[10px] w-[90%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] opacity-50 blur-md"
            />
          </h2>

          {/* SEO Content */}
          <p className="mx-auto mt-12 max-w-4xl text-xl leading-relaxed text-gray-400 md:text-2xl">
            Époque Group builds high-converting real estate marketing systems,
            AI-powered lead generation frameworks, SEO growth strategies,
            performance marketing campaigns, and revenue-focused digital
            ecosystems engineered to generate qualified enquiries and scalable
            business growth for modern brands, builders, and developers.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">

          {[
            {
              title: "Our Vision",
              subtitle: "Redefining Real Estate Marketing & Lead Generation",
              desc:
                "To become the leading real estate marketing agency in Hyderabad by delivering AI-powered lead generation systems, SEO visibility, luxury branding, and high-converting digital marketing solutions that create measurable business growth.",
              color: "#facc15",
            },
            {
              title: "Our Mission",
              subtitle: "Building High-Converting Growth Systems",
              desc:
                "We create performance-driven marketing ecosystems focused on real estate SEO, conversion optimization, paid advertising, buyer acquisition funnels, and scalable lead generation strategies for developers, enterprises, and growth-focused businesses.",
              color: "#eab308",
            },
            {
              title: "Our Promise",
              subtitle: "Qualified Leads. Transparent Growth.",
              desc:
                "We promise data-driven execution, verified lead generation, transparent campaign reporting, AI-enhanced automation, and conversion-focused strategies engineered to maximize revenue growth and long-term brand authority.",
              color: "#ca8a04",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="group relative flex"
            >
              {/* Border */}
              <div className="relative w-full rounded-[32px] bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] p-[1.2px] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.25)]">

                {/* Card */}
                <div className="relative flex h-full min-h-[430px] flex-col justify-between overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-[#141414] via-[#191919] to-[#1c1c1c] p-8 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 sm:p-10">

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-[32px] opacity-0 transition duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(circle at top left, ${item.color}18, transparent 60%)`,
                    }}
                  />

                  {/* Blur Circle */}
                  <div
                    className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl"
                    style={{
                      background: item.color,
                    }}
                  />

                  <div className="relative z-10 flex h-full flex-col">

                    {/* Top */}
                    <div className="space-y-5">

                      <h3 className="font-heading text-3xl font-semibold tracking-tight leading-snug">
                        {item.title}
                      </h3>

                      <p
                        className="text-lg font-medium leading-relaxed tracking-wide"
                        style={{ color: item.color }}
                      >
                        {item.subtitle}
                      </p>

                      <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] transition-all duration-500 group-hover:w-24" />

                    </div>

                    {/* Content */}
                    <p className="mt-8 text-base leading-[1.95] text-gray-400 sm:text-lg">
                      {item.desc}
                    </p>

                  </div>

                </div>
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
            Trusted by luxury real estate developers, startups, interior brands,
            and enterprise businesses seeking premium marketing systems,
            high-intent lead generation, AI-driven automation, SEO growth, and
            scalable revenue consulting frameworks.
          </p>
        </motion.div>

      </div>
    </section>
  )
}