"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

                <Image
                    src="/Crown East Logo.jpg"
                    alt="Crown East"
                    width={150}
                    height={60}
                    className="h-10 md:h-14 object-contain w-auto"
                />

                <div className="hidden md:flex items-center space-x-10 text-gray-800 font-medium">
                    <a href="#about" className="hover:text-yellow-600 transition">About</a>
                    <a href="#amenities" className="hover:text-yellow-600 transition">Amenities</a>
                    <a href="#gallery" className="hover:text-yellow-600 transition">Gallery</a>
                    <a href="#contact" className="hover:text-yellow-600 transition">Contact</a>
                </div>

                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold transition shadow-sm"
                    >
                        Enquire Now
                    </a>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)}>
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            <div
                className={`fixed top-0 right-0 w-full h-screen bg-white transform transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={() => setIsOpen(false)}>
                        <X size={30} />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center h-[80%] space-y-8 text-xl font-medium text-gray-800">

                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#amenities" onClick={() => setIsOpen(false)}>Amenities</a>
                    <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-semibold mt-6"
                    >
                        Enquire Now
                    </a>

                </div>
            </div>
        </nav>
    );
}