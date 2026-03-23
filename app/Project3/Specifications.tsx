"use client";

import {
    FaBuilding,
    FaDoorOpen,
    FaPaintRoller,
    FaBolt,
    FaWater,
    FaShieldAlt
} from "react-icons/fa";

export default function Specifications() {

    const specs = [
        {
            icon: <FaBuilding />,
            title: "Super Structure",
            text: "RCC framed structure designed to withstand wind and earthquake loads."
        },
        {
            icon: <FaDoorOpen />,
            title: "Doors",
            text: "Main door teak wood frame with designer shutter. Internal doors with flush shutters."
        },
        {
            icon: <FaPaintRoller />,
            title: "Painting",
            text: "Exterior with weather proof paint and interior with premium emulsion paint."
        },
        {
            icon: <FaBolt />,
            title: "Electrical",
            text: "Concealed copper wiring with modular switches and adequate power points."
        },
        {
            icon: <FaWater />,
            title: "Water Supply",
            text: "Centralized water supply with overhead tank and underground sump."
        },
        {
            icon: <FaShieldAlt />,
            title: "Security",
            text: "24/7 security with CCTV surveillance and intercom facility."
        }
    ];

    return (
        <section className="bg-gray-100 py-4 px-6 md:px-16">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">
                    Specifications
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

                    {specs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300 group"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100 text-red-700 mb-4 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h4 className="font-semibold text-lg mb-2 text-gray-800">
                                {item.title}
                            </h4>

                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}