












// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "/realstate1.png",
//     title: "Dominate Digital Growth",
//     description: "Scale your business with data-driven marketing strategies.",
//   },
//   {
//     image: "/realstate1.png",
//     title: "Real Estate Marketing Experts",
//     description: "Generate high-quality property leads that convert.",
//   },
//   {
//     image: "/realstate2.jpg",
//     title: "Performance That Drives Revenue",
//     description: "We focus on ROI, not vanity metrics.",
//   },
//   // {
//   //   image: "/realstate2.png",
//   //   title: "SEO That Ranks #1",
//   //   description: "Get your business visible where it matters most.",
//   // },
//   {
//      image: "/realstate5.png",
//     title: "Build Powerful Brands",
//     description: "Creative strategies that position you as a leader.",
//   },
// ];

// export default function NetflixHero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000); // change every 5 sec

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[90vh] w-full overflow-hidden">

//       {/* Background Images */}
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[index].image}
//             alt="hero"
//             fill
//             priority
//             className="object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Dark Gradient Overlay (Netflix style) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6">

//           <motion.div
//             key={index + "text"}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-2xl"
//           >
//             <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
//               {slides[index].title}
//             </h1>

//             <p className="mt-6 text-lg text-gray-300">
//               {slides[index].description}
//             </p>

//             {/* Buttons */}
//             <div className="flex gap-4 mt-8">
//               <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
//                 Get Started
//               </button>
//               <button className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg text-white border border-white/30">
//                 Learn More
//               </button>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     image: "/Herobanner1.png",
//     title: "Dominate Digital Growth",
//     description:
//       "Scale your real estate business with high-converting marketing strategies and performance-driven campaigns.",
//   },
//   {
//     image: "/Herobanner2.jpg",
//     title: "Real Estate Marketing Experts",
//     description:
//       "We generate premium property leads that convert into site visits and sales.",
//   },
//   {
//     image: "/Herobanner4.png",
//     title: "Performance That Drives Revenue",
//     description:
//       "Our strategies focus on ROI, lead quality, and measurable business growth.",
//   },
//   {
//     image: "/Herobanner3.jpg",
//     title: "Build Powerful Brands",
//     description:
//       "We craft strong brand identities that position you as a market leader.",
//   },
// ];

// export default function PremiumHero() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-[95vh] w-full overflow-hidden bg-black">

//       {/* Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.2, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[index].image}
//             alt={slides[index].title}
//             fill
//             priority
//             className="object-cover brightness-95"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Smooth Overlay (FIXED - no black block) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-10" />

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6 w-full">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index + "text"}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-2xl"
//             >

//               {/* Title */}
//               <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]">
//                 {slides[index].title}
//               </h1>

//               {/* Accent Line */}
//               <div className="w-16 h-[3px] bg-white mt-5 mb-5 rounded-full" />

//               {/* Description */}
//               <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
//                 {slides[index].description}
//               </p>

//               {/* Buttons */}
//               <div className="flex gap-4 mt-8 flex-wrap">
// <Link href="/contact" passHref>
//   <motion.a
//     whileHover={{ scale: 1.08 }}
//     whileTap={{ scale: 0.95 }}
//     className="bg-white text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition inline-block"
//   >
//     Get Free Consultation
//   </motion.a>
// </Link>

                

//               </div>

//             </motion.div>
//           </AnimatePresence>

//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               i === index ? "w-8 bg-white" : "w-2 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PremiumHero() {
//  const slides = useMemo(
//   () => [
//     {
//       image: "/Herobanner1.png",
//       title: "Real Estate Digital Marketing in Hyderabad",
//       description:
//         "Boost your real estate business in Hyderabad with SEO, Google Ads, and high-converting digital marketing strategies designed for builders and developers.",
//     },
//     {
//       image: "/Herobanner2.jpg",
//       title: "High-Quality Property Lead Generation",
//       description:
//         "Generate verified leads for villas, apartments, and gated communities in Hyderabad with performance marketing that converts into site visits and sales.",
//     },
//     {
//       image: "/Herobanner4.png",
//       title: "ROI-Driven Real Estate Campaigns",
//       description:
//         "Maximize ROI with data-driven real estate marketing campaigns focused on lead quality, conversion rates, and measurable business growth in Hyderabad.",
//     },
//     {
//       image: "/Herobanner3.jpg",
//       title: "Real Estate Branding & Project Marketing",
//       description:
//         "Build strong real estate brands in Hyderabad with strategic branding, landing pages, and social media marketing for villas and apartment projects.",
//     },
//   ],
//   []
// );

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000); // slightly faster + smoother

//     return () => clearInterval(id);
//   }, [slides.length]);

//   return (
//     <section className="relative h-[95vh] w-full overflow-hidden bg-black">
//       {/* Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[index].image}
//             alt={slides[index].title}
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-10" />

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6 w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index + "text"}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.6 }}
//               className="max-w-2xl"
//             >
//               <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
//                 {slides[index].title}
//               </h1>

//               <div className="w-16 h-[3px] bg-white mt-5 mb-5 rounded-full" />

//               <p className="text-gray-200 text-lg leading-relaxed">
//                 {slides[index].description}
//               </p>

//               <div className="flex gap-4 mt-8 flex-wrap">
//                 <Link href="/contact">
//                   <motion.span
//                     whileHover={{ scale: 1.06 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-white text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition cursor-pointer inline-block"
//                   >
//                     Get Free Consultation
//                   </motion.span>
//                 </Link>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               i === index ? "w-8 bg-white" : "w-2 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PremiumHero() {
  const slides = useMemo(
    () => [
      {
        image: "/Herobanner1.png",
        title: "Real Estate Digital Marketing in Hyderabad",
        description:
          "Boost your real estate business in Hyderabad with SEO, Google Ads, and high-converting digital marketing strategies designed for builders and developers.",
        cta: "Start Your Project Growth",
        link: "/contact",
      },
      {
        image: "/Herobanner2.jpg",
        title: "High-Quality Property Lead Generation",
        description:
          "Generate verified leads for villas, apartments, and gated communities in Hyderabad with performance marketing that converts into site visits and sales.",
        cta: "Get Quality Leads Now",
        link: "/contact",
      },
      {
        image: "/Herobanner4.png",
        title: "ROI-Driven Real Estate Campaigns",
        description:
          "Maximize ROI with data-driven real estate marketing campaigns focused on lead quality, conversion rates, and measurable business growth in Hyderabad.",
        cta: "View Our Marketing Strategy",
        link: "/contact",
      },
      {
        image: "/Herobanner3.jpg",
        title: "Real Estate Branding & Project Marketing",
        description:
          "Build strong real estate brands in Hyderabad with strategic branding, landing pages, and social media marketing for villas and apartment projects.",
        cta: "Explore Our Projects",
        link: "/real-estate-digital-marketing-projects-hyderabad-epoque-group",
       
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section
      className="relative h-[95vh] w-full overflow-hidden bg-black"
      aria-label="Real estate digital marketing services in Hyderabad"
    >
      {/* Hidden SEO Content */}
      <h1 className="sr-only">
        Real Estate Digital Marketing Agency in Hyderabad – Epoque Group
      </h1>

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={`${slides[index].title} - Real Estate Marketing Hyderabad`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index + "text"}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                {slides[index].title}
              </h2>

              <div className="w-16 h-[3px] bg-white mt-5 mb-5 rounded-full" />

              <p className="text-gray-200 text-lg leading-relaxed">
                {slides[index].description}
              </p>

              {/* ✅ Dynamic CTA */}
              <div className="flex gap-4 mt-8 flex-wrap">
                <Link
                  href={slides[index].link}
                  aria-label={slides[index].cta}
                >
                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition cursor-pointer inline-block"
                  >
                    {slides[index].cta}
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}


// "use client";

// import Link from "next/link";
// import { useEffect, useState, useMemo } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";

// export default function PremiumHero() {
//   const slides = useMemo(
//     () => [
//       {
//         video: "/videos/realestatevideo.mp4",
//         title: "Real Estate Marketing Agency in Hyderabad",
//         description:
//           "Generate premium property leads through SEO, Google Ads, branding, and high-converting real estate marketing systems designed for builders and developers.",
//         cta: "Get Free Consultation",
//         link: "/contact",
//       },
//       {
//        video: "/videos/realestatevideo.mp4",
//         title: "High-Quality Property Lead Generation",
//         description:
//           "Generate verified leads for villas, apartments, and gated communities with performance marketing campaigns that convert into real site visits and sales.",
//         cta: "Generate More Leads",
//         link: "/contact",
//       },
//       {
//         image: "/Herobanner4.png",
//         title: " Performance Marketing",
//         description:
//           "Dominate Google rankings with SEO, local search optimization, and conversion-focused campaigns for real estate and luxury businesses.",
//         cta: "Explore SEO Services",
//         link: "/digital/search-engine-optimization",
//       },
//       {
//         image: "/Herobanner3.jpg",
//         title: "Luxury Branding & Project Marketing",
//         description:
//           "Build premium real estate brands with strategic branding, landing pages, social media marketing, and high-end digital experiences.",
//         cta: "View Our Projects",
//         link: "/real-estate-digital-marketing-projects-hyderabad-epoque-group",
//       },
//     ],
//     []
//   );

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(id);
//   }, [slides.length]);

//   return (
//     <section
//       className="relative h-[100vh] w-full overflow-hidden bg-black"
//       aria-label="Real Estate Marketing Agency in Hyderabad"
//     >
//       {/* Hidden SEO H1 */}
//       <h1 className="sr-only">
//         Real Estate Marketing Agency in Hyderabad for SEO, Lead Generation &
//         Luxury Branding
//       </h1>

//       {/* Background Media */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.03 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           {slides[index].video ? (
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="h-full w-full object-cover"
//             >
//               <source src={slides[index].video} type="video/mp4" />
//             </video>
//           ) : (
//             <Image
//               src={slides[index].image!}
//               alt={`${slides[index].title} - Epoque Group`}
//               fill
//               priority
//               sizes="100vw"
//               className="object-cover"
//             />
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 z-10 bg-black/60" />

//       {/* Gradient */}
//       <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-black via-black/60 to-transparent" />

//       {/* Main Content */}
//       <div className="relative z-20 flex h-full items-center">
//         <div className="mx-auto w-full max-w-7xl px-6">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index + "text"}
//               initial={{ opacity: 0, y: 60 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-3xl"
//             >
//               {/* Premium Badge */}
//               <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-md">
//                 Hyderabad’s Premium SEO & Real Estate Marketing Agency
//               </div>

//               {/* Title */}
//               <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl xl:text-7xl">
//                 {slides[index].title}
//               </h2>

//               {/* Accent Line */}
//               <div className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]" />

//               {/* Description */}
//               <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
//                 {slides[index].description}
//               </p>

//               {/* Keywords */}
//               <div className="mt-8 flex flex-wrap gap-3">
//                 {[
//                   "Real Estate ",
//                   "Lead Generation",
//                   "Google Ads",
//                   "Luxury Branding",
//                   "Property Marketing",
//                 ].map((item, i) => (
//                   <span
//                     key={i}
//                     className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur-md"
//                   >
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="mt-10 flex flex-wrap gap-4">
//                 <Link href={slides[index].link}>
//                   <motion.span
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-block cursor-pointer rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] px-8 py-4 font-semibold text-black transition-all duration-300"
//                   >
//                     {slides[index].cta}
//                   </motion.span>
//                 </Link>

//                 <Link href="/case-studies">
//                   <motion.span
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="inline-block cursor-pointer rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#C79A3B] hover:text-[#C79A3B]"
//                   >
//                     View Case Studies
//                   </motion.span>
//                 </Link>
//               </div>

//               {/* Bottom Trust Text */}
//               <div className="mt-12 flex flex-wrap gap-6 text-sm text-gray-400 md:text-base">
//                 <span>✔ SEO Optimized Websites</span>
//                 <span>✔ Property Lead Generation</span>
//                 <span>✔ Google Ranking Strategies</span>
//                 <span>✔ Luxury Brand Positioning</span>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               i === index ? "w-10 bg-white" : "w-2 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }