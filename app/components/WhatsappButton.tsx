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


"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919133633327?text=Hello%20Epoch%20Group%20of%20Companies,%20I%20would%20like%20to%20enquire%20about%20your%20professional%20services.%20Kindly%20assist%20me%20with%20more%20details."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Epoch Group of Companies via WhatsApp for digital marketing and web services"
      className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3"
    >

      {/* Text Bubble */}
      <span className=" text-white px-4 py-2 rounded-full shadow-md text-sm font-medium whitespace-nowrap">
        Chat with epoque group 
      </span>

      {/* WhatsApp Circle Button */}
      <div className="bg-green-700 hover:bg-green-800 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-green-400/50">
        <FaWhatsapp size={24} />
      </div>

    </a>
  );
}