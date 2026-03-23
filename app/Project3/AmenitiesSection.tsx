"use client";

import {
    FaSwimmingPool,
    FaDumbbell,
    FaBasketballBall,
    FaChild,
    FaTree,
    FaGamepad
} from "react-icons/fa";

export default function AmenitiesSection() {
    return (
        <section className="bg-[#f6f3ee] py-4 px-6 md:px-16" id="amenities">

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">

                    <p className="text-[#7b3f45] italic text-lg mb-3">
                        Designed for comfort, leisure & luxury
                    </p>

                    <h2 className="tracking-[8px] text-[#7b3f45] text-2xl font-semibold">
                        AMENITIES
                    </h2>

                    <div className="w-20 h-[2px] bg-[#7b3f45] mx-auto mt-4"></div>

                </div>

                {/* Amenities Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaSwimmingPool className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Infinity Swimming Pool
                        </h4>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaDumbbell className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Modern Gym
                        </h4>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaGamepad className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Indoor Games
                        </h4>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaBasketballBall className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Basketball Court
                        </h4>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaChild className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Children Play Area
                        </h4>
                    </div>

                    <div className="bg-white border border-gray-200 p-8 text-center hover:shadow-lg transition duration-300">
                        <FaTree className="text-3xl text-[#7b3f45] mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-800">
                            Landscaped Gardens
                        </h4>
                    </div>

                </div>

            </div>

        </section>
    );
}