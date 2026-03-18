"use client";

import React from "react";

export default function ContactSection() {
    return (
        <section id="contact" className="py-28 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* ===== Heading ===== */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light">
                        Schedule a Private Visit
                    </h2>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mt-4"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Get in touch with our sales team to explore exclusive
                        residences at ETEREO 1, Siolim,North Goa.
                    </p>
                </div>

                {/* ===== Two Column Layout ===== */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* ===== Left Contact Info ===== */}
                    <div>
                        <h3 className="text-2xl font-medium mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 text-gray-700">

                            <div>
                                <p className="text-sm uppercase tracking-wide text-yellow-600">
                                    Phone
                                </p>
                                <p className="text-lg font-medium">
                                    +91 91336 33327
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wide text-yellow-600">
                                    Email
                                </p>
                                <p className="text-lg font-medium">
                                    sales@epoquegroup.in
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wide text-yellow-600">
                                    Project Location
                                </p>
                                <p className="text-lg font-medium">
                                    Siolim, Bardez, North Goa
                                </p>
                            </div>

                            <div>
                                <p className="text-sm uppercase tracking-wide text-yellow-600">
                                    RERA
                                </p>
                                <p className="text-lg font-medium">
                                    PRGO01262580
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ===== Contact Form ===== */}
                    <div className="bg-[#f5f2ec] p-10 shadow-lg">

                        <form
                            className="space-y-6"
                            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                const message = encodeURIComponent(
                                    "Hello, I am interested in ETEREO 1 project. Please share more details."
                                );
                                window.open(
                                    `https://wa.me/919133633327?text=${message}`,
                                    "_blank"
                                );
                            }}
                        >

                            <div>
                                <label className="block text-sm mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-yellow-600 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your phone"
                                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-yellow-600 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-2">
                                    Interested In
                                </label>
                                <select
                                    className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-yellow-600 transition"
                                >
                                    <option>2 BHK</option>
                                    <option>1 BHK</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-yellow-600 text-white py-4 uppercase tracking-wider hover:bg-yellow-700 transition"
                            >
                                Enquire Now
                            </button>

                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}