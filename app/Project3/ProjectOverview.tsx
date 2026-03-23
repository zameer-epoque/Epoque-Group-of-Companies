"use client";

import {
    FaBuilding,
    FaMapMarkerAlt,
    FaHome,
    FaLayerGroup
} from "react-icons/fa";

export default function ProjectOverview() {

    const data = [
        {
            icon: <FaBuilding />,
            title: "Developer",
            value: "Om Sree Builders & Developers LLP"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Yapral, Near Secunderabad"
        },
        {
            icon: <FaHome />,
            title: "Apartment Type",
            value: "2 & 3 BHK Luxury Apartments"
        },
        {
            icon: <FaLayerGroup />,
            title: "Project Area",
            value: "2.16 Acres"
        },
        {
            icon: <FaBuilding />,
            title: "Total Units",
            value: "105 Premium Apartments"
        },
        {
            icon: <FaLayerGroup />,
            title: "Floors",
            value: "Stilt + 5 Floors"
        }
    ];

    return (
        <section
            id="overview"
            className="py-4 px-6 md:px-16 bg-[#f6f3ee]"
        >
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">

                    <p className="text-[#7b3f45] italic text-lg mb-3">
                        Crafted with elegance & thoughtful planning
                    </p>

                    <h2 className="tracking-[8px] text-[#7b3f45] text-2xl font-semibold">
                        PROJECT OVERVIEW
                    </h2>

                    <div className="w-20 h-[2px] bg-[#7b3f45] mx-auto mt-4"></div>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300"
                        >
                            <div className="text-3xl text-[#7b3f45] mx-auto mb-4">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-lg text-gray-800 mb-2">
                                {item.title}
                            </h4>

                            <p className="text-gray-600 text-sm">
                                {item.value}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}