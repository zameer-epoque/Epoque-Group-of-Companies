// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// const images = [
//   { src: "/Garikipati1.jpg", alt: "Luxury apartments in GMR Aerocity" },
//   { src: "/Garikipati2.jpg", alt: "Modern premium flats with amenities" },
//   { src: "/Garikipati3.jpg", alt: "High-end residential project exterior view" },
// ];

// export default function HeroSection() {
//   const [index, setIndex] = useState(0);

//   // AUTO SLIDE
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       aria-label="Luxury Apartments Hero Section"
//       className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden text-white"
//     >
//       {/* BACKGROUND SLIDER */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={images[index].src}
//             alt={images[index].alt}
//             fill
//             priority
//             sizes="100vw"
//             quality={85}
//             className="object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#022c22]/80 to-black/90" />

//       {/* GLOW EFFECT */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#5eead4]/10 blur-[120px]" />

//       {/* CONTENT */}
//       <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mt-4 sm:mt-6 md:mt-10">

//         {/* SEO HEADING */}
//         <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl font-serif leading-tight ">
//           Luxury Apartments in GMR Aerocity <br />
//           <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
//             Inspired by Nature & Premium Living
//           </span>
//         </h1>

//         {/* DESCRIPTION */}
//         <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
//           Discover premium 1.5, 2 & 3 BHK apartments with world-class amenities,
//           modern architecture, and a peaceful lifestyle in Hyderabad.
//         </p>

//         {/* CTA */}
//        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
//   <a
//     href="https://wa.me/919133633327?text=Hi%20I%20am%20interested%20in%20booking%20a%20site%20visit"
//     target="_blank"
//     rel="noopener noreferrer"
//     aria-label="Book a site visit"
//     className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition text-center"
//   >
//     Book Site Visit
//   </a>
// </div>
//       </div>
//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/Garikipati1.jpg",
    alt: "Luxury apartments in GMR Aerocity Hyderabad exterior",
  },
  {
    src: "/Garikipati2.jpg",
    alt: "Modern premium flats with amenities in Hyderabad",
  },
  {
    src: "/Garikipati3.jpg",
    alt: "High-end residential project exterior view in Hyderabad",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState<number>(0);

  // ✅ AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Luxury Apartments Hero Section Hyderabad"
      className="relative min-h-[85vh] md:min-h-[95vh] w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* BACKGROUND SLIDER */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#022c22]/80 to-black/90" />

      {/* RESPONSIVE GLOW */}
      <div className="absolute top-[-80px] md:top-0 left-1/2 -translate-x-1/2 
        w-[260px] sm:w-[360px] md:w-[520px] lg:w-[700px] 
        h-[260px] sm:h-[360px] md:h-[520px] lg:h-[700px] 
        bg-[#5eead4]/10 blur-[80px] md:blur-[120px]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto mt-18 sm:mt-22 md:mt-30">

        {/* HEADING */}
        <h1 className="
          font-serif leading-tight
          text-2xl 
          sm:text-3xl 
          md:text-4xl 
          lg:text-5xl 
          xl:text-6xl 
          2xl:text-7xl
        ">
          Luxury Apartments in GMR Aerocity <br />
          <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
            Inspired by Nature & Premium Living
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-4 sm:mt-5 md:mt-6
          text-sm 
          sm:text-base 
          md:text-lg 
          lg:text-xl
          text-gray-300 
          max-w-xl sm:max-w-2xl mx-auto
        ">
          Discover premium 1.5, 2 & 3 BHK apartments with world-class amenities,
          modern architecture, and a peaceful lifestyle in Hyderabad.
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919133633327?text=Hi%20I%20am%20interested%20in%20booking%20a%20site%20visit"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a site visit via WhatsApp"
            className="
              px-6 sm:px-8 md:px-10 
              py-3 md:py-3 
              text-sm sm:text-base md:text-lg
              rounded-full 
              bg-gradient-to-r from-[#5eead4] to-[#14b8a6] 
              text-black font-semibold 
              hover:scale-105 transition 
              text-center
              shadow-lg
            "
          >
            Book Site Visit
          </a>
        </div>

      </div>
    </section>
  );
}