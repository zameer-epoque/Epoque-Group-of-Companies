"use client";

export default function AmenitiesServices() {
    const amenities: string[] = [
        "Private pool for select apartments",
        "Intercom at the main gate",
        "100% power back-up (optional)",
        "Well-designed open spaces with lush landscaping",
        "24/7 security",
        "Covered car park for each apartment",
        "Car drop-off points",
        "CCTV surveillance system",
    ];

    const services: string[] = [
        "Property Management",
        "Rental Management",
        "Concierge",
        "Housekeeping",
        "Security Guards",
    ];

    return (
        <section className="py-20 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-3xl font-semibold mb-10 italic">
                    Amenities
                </h2>

                <div className="grid md:grid-cols-3 gap-y-6 gap-x-10 mb-20">
                    {amenities.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">

                            <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600 font-bold text-sm">
                                ✓
                            </div>

                            <p className="text-gray-700 group-hover:text-black transition">
                                {item}
                            </p>

                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-semibold italic mb-6">
                            Services
                        </h2>

                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <div key={index} className="flex items-center gap-4 group">

                                    <div className="w-10 h-10 flex items-center justify-center border border-yellow-600 rounded-full text-yellow-600 font-bold text-sm">
                                        ✓
                                    </div>

                                    <p className="text-lg text-gray-700 group-hover:text-black transition">
                                        {service}
                                    </p>

                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <img
                            src="/amenities/lifestyle9.jpg"
                            alt="Luxury Living Goa"
                            className="rounded-lg shadow-lg w-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}