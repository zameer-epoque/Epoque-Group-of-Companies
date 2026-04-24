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

"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/Herobanner1.png",
    title: "Dominate Digital Growth",
    description:
      "Scale your real estate business with high-converting marketing strategies and performance-driven campaigns.",
  },
  {
    image: "/Herobanner2.jpg",
    title: "Real Estate Marketing Experts",
    description:
      "We generate premium property leads that convert into site visits and sales.",
  },
  {
    image: "/Herobanner4.png",
    title: "Performance That Drives Revenue",
    description:
      "Our strategies focus on ROI, lead quality, and measurable business growth.",
  },
  {
    image: "/Herobanner3.jpg",
    title: "Build Powerful Brands",
    description:
      "We craft strong brand identities that position you as a market leader.",
  },
];

export default function PremiumHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-black">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt={slides[index].title}
            fill
            priority
            className="object-cover brightness-95"
          />
        </motion.div>
      </AnimatePresence>

      {/* Smooth Overlay (FIXED - no black block) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black/80 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <AnimatePresence mode="wait">
            <motion.div
              key={index + "text"}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_5px_25px_rgba(0,0,0,0.9)]">
                {slides[index].title}
              </h1>

              {/* Accent Line */}
              <div className="w-16 h-[3px] bg-white mt-5 mb-5 rounded-full" />

              {/* Description */}
              <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">
                {slides[index].description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4 mt-8 flex-wrap">
<Link href="/contact" passHref>
  <motion.a
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-black px-7 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition inline-block"
  >
    Get Free Consultation
  </motion.a>
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