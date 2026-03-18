"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
    name: string;
    id: string;
};

export default function Navbar(): JSX.Element {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { name: "Amenities", id: "amenities" },
        { name: "Residences", id: "residences" },
        { name: "Specifications", id: "specifications" },
        { name: "Location", id: "location" },
        { name: "Pricing", id: "pricing" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
                        : "bg-transparent py-5"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <img src="/logo.jpeg" alt="Etereo Logo" className="h-20 w-auto" />
                        <div className="leading-tight">
                            <h1 className="text-lg font-semibold tracking-wide text-black">
                                ETEREO 1
                            </h1>
                            <p
                                className={`text-xs ${scrolled ? "text-gray-600" : "text-gray-300"
                                    }`}
                            >
                                Ultra Luxury Residences
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <ul
                        className={`hidden md:flex items-center gap-10 font-medium ${scrolled ? "text-gray-800" : "text-black"
                            }`}
                    >
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="relative group text-sm uppercase tracking-wide transition duration-300"
                                >
                                    {item.name}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href="tel:+91 91336 33327"
                        className="hidden md:inline-block bg-yellow-500 text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-md"
                    >
                        Schedule Visit
                    </a>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setOpen(!open)}>
                            {open ? (
                                <X
                                    size={28}
                                    className={scrolled ? "text-black" : "text-white"}
                                />
                            ) : (
                                <Menu
                                    size={28}
                                    className={scrolled ? "text-black" : "text-white"}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-xl transition-transform duration-500 ${open ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                {navItems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className="uppercase tracking-wide hover:text-yellow-500 transition"
                    >
                        {item.name}
                    </a>
                ))}

                <a
                    href="tel:+91 91336 33327"
                    className="mt-6 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold"
                >
                    Call Now
                </a>
            </div>
        </>
    );
}