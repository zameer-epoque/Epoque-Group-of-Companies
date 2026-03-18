"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-[#f4f4f4] text-gray-800">

            {/* Top RERA Line */}


            {/* Contact Info */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-8">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600">
                        <Phone size={18} />
                    </div>
                    <p>+91 91336 33327</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600">
                        <Mail size={18} />
                    </div>
                    <p>sales@epoquegroup.in</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600">
                        <Globe size={18} />
                    </div>
                    <p>https://epoquegroup.in/</p>
                </div>

            </div>

            {/* Gold Divider */}
            <div className="h-[2px] bg-yellow-600"></div>

            {/* Address Section */}
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-center gap-4 text-center">

                <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600">
                    <MapPin size={18} />
                </div>

                <p className="text-sm md:text-base">
                    Survey Number 73/9 & 10, Marna Village, Siolim, Bardez, North Goa
                </p>

            </div>

        </footer>
    );
}