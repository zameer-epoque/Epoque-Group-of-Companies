"use client";

import {
    FaSchool,
    FaHospital,
    FaBriefcase,
    FaRunning,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function LocationSection() {

    const features = [
        {
            icon: <FaSchool />,
            title: "Educational Institutions",
            items: [
                "Indus Universal School",
                "DPS International",
                "PPS Nacharam",
                "St. Mary's School"
            ]
        },
        {
            icon: <FaHospital />,
            title: "Hospitals",
            items: [
                "Yashoda Hospital",
                "Rainbow Children's",
                "Apollo Hospital",
                "Lucid Hospital"
            ]
        },
        {
            icon: <FaBriefcase />,
            title: "Work Places",
            items: [
                "ECL",
                "ECIL",
                "Infosys",
                "Capgemini"
            ]
        },
        {
            icon: <FaRunning />,
            title: "Leisure & Entertainment",
            items: [
                "Radha Mall",
                "Sainikpuri Club",
                "Asian Cinemas"
            ]
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Excellent Connectivity",
            items: [
                "Yapral Junction",
                "Outer Ring Road",
                "Airport via ORR"
            ]
        }
    ];

    return (
        <section className="bg-[#f7f5ef] py-16 px-6 md:px-16" id="location">

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <h2 className="text-center text-2xl font-semibold text-[#7a3d3d] mb-10">
                    LOCATION KEY FEATURES
                </h2>

                {/* Horizontal Scroll */}
                <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-[260px] bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 flex-shrink-0"
                        >
                            <div className="text-3xl text-[#7a3d3d] mb-4">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold mb-3 text-gray-800">
                                {item.title}
                            </h4>

                            <ul className="text-sm text-gray-600 space-y-1">
                                {item.items.map((sub, i) => (
                                    <li key={i}>{sub}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}