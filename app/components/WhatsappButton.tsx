"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
    return (
        <div className="fixed bottom-5 right-5 z-[9999] flex items-center gap-3">

            {/* Text Message */}
            <span className="hidden md:block bg-white text-black px-4 py-2 rounded-full shadow-md text-sm font-medium">
                Chat with us
            </span>

     <a
  href="https://wa.me/919133633327?text=Hello%20Epoch%20Group%20of%20Companies,%20I%20would%20like%20to%20enquire%20about%20your%20professional%20services.%20Kindly%20assist%20me%20with%20more%20details."
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact Epoch Group of Companies via WhatsApp for digital marketing and web services"
  className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-green-400/50"
>
  <FaWhatsapp size={22} />
  <span className="text-sm font-medium whitespace-nowrap">
    Chat with Epoch Group
  </span>
</a>

        </div>
    );
}