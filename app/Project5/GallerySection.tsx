// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import { X, Eye } from "lucide-react";

// const images = [
//   "/Garikipati1.jpg",
//   "/Garikipati2.jpg",
//   "/Garikipati3.jpg",
//   "/Garikipati4.jpg",
//   "/Garikipati5.jpg",
//   "/Garikipati6.jpg",
// ];

// export default function GallerySection() {
//   const [selected, setSelected] = useState<string | null>(null);

//   return (
//     <section
//       id="gallery"
//       aria-label="Luxury Apartment Gallery Hyderabad"
//       className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white"
//     >
//       {/* LIGHTER GLOW */}
//       <div className="absolute top-[-60px] left-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-purple-500/20 blur-[90px]" />
//       <div className="absolute bottom-[-60px] right-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-teal-400/20 blur-[90px]" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

//         {/* TITLE */}
//         <div className="text-center mb-12 md:mb-20">
//           <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
//             Apartment Gallery in Hyderabad <br />
//             <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
//               Experience Luxury Living
//             </span>
//           </h2>

//           <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
//             Explore real images of our premium apartments, interiors, amenities,
//             and lifestyle spaces.
//           </p>
//         </div>

//         {/* GRID (FIXED) */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-6">
//           {images.map((src, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className="relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group"
//               onClick={() => setSelected(src)}
//             >
//               <Image
//                 src={src}
//                 alt={`Luxury apartment gallery image ${i + 1} in Hyderabad`}
//                 width={500}
//                 height={400}
//                 sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 300px"
//                 quality={80}
//                 className="w-full h-[140px] sm:h-[180px] md:h-[220px] object-cover group-hover:scale-105 transition duration-500"
//               />

//               {/* OVERLAY */}
//               <div className="absolute inset-0 bg-black/50 opacity-70 group-hover:opacity-90 transition" />

//               {/* ICON */}
//               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//                 <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-lg">
//                   <Eye className="text-black" size={18} />
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* MODAL */}
//         <AnimatePresence>
//           {selected && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
//             >
//               <button
//                 onClick={() => setSelected(null)}
//                 className="absolute top-4 right-4 text-white"
//               >
//                 <X size={28} />
//               </button>

//               <motion.div
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.95 }}
//                 className="max-w-5xl w-full"
//               >
//                 <Image
//                   src={selected}
//                   alt="Full size apartment gallery image"
//                   width={1200}
//                   height={800}
//                   sizes="100vw"
//                   quality={90}
//                   className="rounded-xl md:rounded-2xl object-cover w-full"
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* CTA */}
//         <div className="mt-16 md:mt-24 text-center">
//           <button
//             onClick={() =>
//               window.open(
//                 "https://wa.me/919133633327?text=Hi, I want to book a site visit",
//                 "_blank"
//               )
//             }
//             className="px-6 py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition shadow-lg"
//           >
//             Book Site Visit
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Eye } from "lucide-react";

const images = [
  "/Garikipati1.jpg",
  "/Garikipati2.jpg",
  "/Garikipati3.jpg",
  "/Garikipati4.jpg",
  "/Garikipati5.jpg",
  "/Garikipati6.jpg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  // ✅ ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="gallery"
      aria-label="Luxury Apartment Gallery Hyderabad"
      className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#020617] via-[#022c22] to-[#0f766e] overflow-hidden text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-60px] left-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-purple-500/20 blur-[90px]" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[220px] md:w-[350px] h-[220px] md:h-[350px] bg-teal-400/20 blur-[90px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Apartment Gallery in Hyderabad <br />
            <span className="bg-gradient-to-r from-[#5eead4] to-[#a78bfa] text-transparent bg-clip-text">
              Experience Luxury Living
            </span>
          </h2>

          <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore real images of our premium apartments, interiors, amenities,
            and lifestyle spaces.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer group"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Luxury apartment gallery image ${i + 1} in Hyderabad`}
                width={500}
                height={400}
                sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 300px"
                quality={80}
                className="w-full h-[140px] sm:h-[180px] md:h-[220px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 opacity-70 group-hover:opacity-90 transition" />

              {/* ICON */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <div className="p-2 rounded-full bg-gradient-to-br from-[#5eead4] to-[#a78bfa] shadow-lg">
                  <Eye className="text-black" size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 px-4"
              onClick={() => setSelected(null)} // ✅ click outside close
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black"
              >
                <X size={28} />
              </button>

              {/* IMAGE BOX */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()} // ✅ prevent close when clicking image
              >
                <Image
                  src={selected}
                  alt="Full size apartment gallery image"
                  width={1200}
                  height={800}
                  sizes="100vw"
                  quality={90}
                  className="rounded-xl md:rounded-2xl object-cover w-full"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-16 md:mt-24 text-center">
          <button
            onClick={() =>
              window.open(
                "https://wa.me/919133633327?text=Hi, I want to book a site visit",
                "_blank"
              )
            }
            className="px-6 py-3 md:px-10 md:py-4 rounded-full bg-gradient-to-r from-[#5eead4] to-[#14b8a6] text-black font-semibold hover:scale-105 transition shadow-lg"
          >
            Book Site Visit
          </button>
        </div>

      </div>
    </section>
  );
}