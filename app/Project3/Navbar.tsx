"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-black/60 backdrop-blur-md border-b border-white/10 fixed top-0 left-0 z-50">

            <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 flex justify-between items-center">

                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.jpg"
                        alt="Om Sree Delight Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </Link>

                <ul className="hidden md:flex gap-10 text-white font-medium">

                    <li>
                        <Link href="#overview" className="hover:text-[#e7d6b2] transition">
                            Overview
                        </Link>
                    </li>

                    <li>
                        <Link href="#amenities" className="hover:text-[#e7d6b2] transition">
                            Amenities
                        </Link>
                    </li>

                    <li>
                        <Link href="#location" className="hover:text-[#e7d6b2] transition">
                            Location
                        </Link>
                    </li>

                    <li>
                        <Link href="#contact" className="hover:text-[#e7d6b2] transition">
                            Contact
                        </Link>
                    </li>

                </ul>

                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-[#7b3f45] text-white px-6 py-2 rounded hover:bg-[#5c2d31] transition"
                    >
                        Enquire Now
                    </Link>
                </div>

                <div
                    className="md:hidden text-2xl cursor-pointer text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

            {menuOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">

                    <ul className="flex flex-col text-center py-6 gap-6 text-white font-medium">

                        <li>
                            <Link href="#overview" onClick={() => setMenuOpen(false)}>
                                Overview
                            </Link>
                        </li>

                        <li>
                            <Link href="#amenities" onClick={() => setMenuOpen(false)}>
                                Amenities
                            </Link>
                        </li>

                        <li>
                            <Link href="#location" onClick={() => setMenuOpen(false)}>
                                Location
                            </Link>
                        </li>

                        <li>
                            <Link href="#contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>

                        <Link
                            href="#contact"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#7b3f45] text-white px-5 py-2 rounded mx-10 hover:bg-[#5c2d31]"
                        >
                            Enquire Now
                        </Link>

                    </ul>

                </div>
            )}

        </nav>
    );
}