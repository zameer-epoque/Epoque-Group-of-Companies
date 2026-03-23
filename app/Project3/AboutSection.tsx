"use client";

import { FaBuilding, FaHome, FaLayerGroup } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="py-16 px-6 md:px-16 bg-[#f6f3ee]">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="overflow-hidden rounded-xl shadow-xl group">
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                        alt="project"
                        className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div>

                    {/* Title */}
                    <p className="text-[#7b3f45] italic mb-3 text-lg">
                        A lifestyle crafted for modern living
                    </p>

                    <h2 className="tracking-[6px] text-[#7b3f45] text-3xl font-semibold mb-6">
                        ABOUT OM SREE DELIGHT
                    </h2>

                    <p className="text-gray-600 mb-10 leading-relaxed">
                        Om Sree Delight is a premium gated community located in Yapral near
                        Secunderabad. The project is thoughtfully designed to provide
                        luxurious and comfortable living spaces with modern amenities,
                        landscaped surroundings, and excellent connectivity to the city.
                        Built with high quality standards, it offers an ideal blend of
                        elegance, convenience, and lifestyle.
                    </p>

                    {/* Highlights */}
                    <div className="grid grid-cols-3 gap-6">

                        <div className="text-center bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <FaBuilding className="text-3xl text-[#7b3f45] mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-800">2 Blocks</h4>
                            <p className="text-sm text-gray-500">Premium Towers</p>
                        </div>

                        <div className="text-center bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <FaHome className="text-3xl text-[#7b3f45] mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-800">105 Units</h4>
                            <p className="text-sm text-gray-500">Luxury Apartments</p>
                        </div>

                        <div className="text-center bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
                            <FaLayerGroup className="text-3xl text-[#7b3f45] mx-auto mb-3" />
                            <h4 className="font-semibold text-gray-800">Stilt + 5</h4>
                            <p className="text-sm text-gray-500">Floor Structure</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}