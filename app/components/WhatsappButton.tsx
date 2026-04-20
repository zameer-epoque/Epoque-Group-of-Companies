// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsappButton() {
//     return (
//         <div className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3">

//             {/* Text Message */}
//             <span className="hidden md:block bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium">
//                 Chat with us
//             </span>

//      <a
//   href="https://wa.me/919133633327?text=Hello%20Epoch%20Group%20of%20Companies,%20I%20would%20like%20to%20enquire%20about%20your%20professional%20services.%20Kindly%20assist%20me%20with%20more%20details."
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Contact Epoch Group of Companies via WhatsApp"
//   className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
// >

//   {/* Text */}
//   <span className="bg-green-500 text-white text-sm font-medium px-3 py-2 rounded-full shadow-md whitespace-nowrap">
//     Chat with Epoch Group
//   </span>

//   {/* Circle Icon */}
//   <div className="bg-green-500 hover:bg-green-800 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110">
//     <FaWhatsapp size={24} />
//   </div>

// </a>
//         </div>
//     );
// }


// "use client";

// import { FaWhatsapp } from "react-icons/fa";

// export default function WhatsappButton() {
//   return (
//    <a
//   href="https://wa.me/919133633327?text=Hello%20%C3%89poque%20Group,%20I%20would%20like%20to%20enquire%20about%20your%20services,%20including%20luxury%20residences,%20premium%20interior%20design,%20digital%20marketing,%20lead%20generation,%20and%20strategic%20revenue%20consulting.%20Kindly%20share%20more%20details%20regarding%20your%20service%20offerings,%20process,%20and%20the%20next%20steps%20to%20proceed."
//   target="_blank"
//   rel="noopener noreferrer"
//   aria-label="Contact Époque Group via WhatsApp for services enquiry"
//   className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3"
// >

//       {/* Text Bubble */}
//       <span className=" text-white px-4 py-2 rounded-full shadow-md text-sm font-medium whitespace-nowrap">
//         Chat with Epoque Group 
//       </span>

//       {/* WhatsApp Circle Button */}
//       <div className="bg-green-700 hover:bg-green-800 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-400/50">
//         <FaWhatsapp size={24} />
//       </div>

//     </a>
//   );
// }


// "use client";

// import Image from "next/image";

// export default function WhatsappButton() {
//   return (
//     <a
//       href="https://wa.me/919133633327?text=Hello%20Epoque%20Group"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
//     >
//       {/* Text Bubble */}
//       <span className="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-300">
//         Chat with Epoque Group
//       </span>

//       {/* Logo Button */}
//       <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-xl border-2 border-green-500 bg-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-400/60">
        
//         <Image
//           src="/new logo.png"   // ✅ NO SPACES
//           alt="Epoque Logo"
//          width={28} height={28}              // ✅ FULL COVER FIX
//           className="object-cover"
//         />

//         {/* Optional Glow Effect */}
//         <div className="absolute inset-0 rounded-full ring-2 ring-green-400 opacity-0 group-hover:opacity-100 transition"></div>

//       </div>
//     </a>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function WhatsappButton() {
//   return (
//     <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group">

//       {/* 💬 Text */}
//       <span className="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-300">
//         Chat with Epoque Group
//       </span>

//       {/* 🌈 Wrapper */}
//       <div className="relative w-16 h-16 flex items-center justify-center">

//         {/* 🔄 ROTATING RING (IMPORTANT FIX HERE) */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             repeat: Infinity,
//             duration: 2,
//             ease: "linear",
//           }}
//           className="absolute inset-0 rounded-full"
//           style={{
//             background: "conic-gradient(red, yellow, lime, red)",
//             padding: "3px",
//           }}
//         >
//           <div className="w-full h-full bg-white rounded-full" />
//         </motion.div>

//         {/* 💥 Glow */}
//         <div
//           className="absolute inset-0 rounded-full blur-md opacity-60"
//           style={{
//             background: "conic-gradient(red, yellow, lime, red)",
//           }}
//         />

//         {/* 🔘 Button */}
//         <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-xl">
//           <Image
//             src="/new logo.png"
//             alt="logo"
//             width={26}
//             height={26}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"

      // ⚽ Bounce animation (added)
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >

      {/* 💬 Text */}
      <span className="bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0 transition-all duration-300">
        Chat with Epoque Group
      </span>

      {/* 🌈 Wrapper */}
      <div className="relative w-16 h-16 flex items-center justify-center">

        {/* 🔄 ROTATING RING */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(red, yellow, lime, red)",
            padding: "3px",
          }}
        >
          <div className="w-full h-full bg-white rounded-full" />
        </motion.div>

        {/* 💥 Glow */}
        <div
          className="absolute inset-0 rounded-full blur-md opacity-60"
          style={{
            background: "conic-gradient(red, yellow, lime, red)",
          }}
        />

        {/* 🔘 Button */}
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-xl">
          <Image
            src="/new logo.png"  
            alt="logo"
            width={26}
            height={26}
          />
        </div>
      </div>
    </motion.div>
  );
}