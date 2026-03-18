"use client";

type Amenity = {
    title: string;
    image: string;
    description: string;
};

export default function Amenities() {
    const amenities: Amenity[] = [
        {
            title: "Pickleball Court",
            image: "/amenities/lifestyle4.jpg",
            description:
                "Enjoy an active lifestyle with a professionally designed pickleball court within the community.",
        },
        {
            title: "Luxury Gym",
            image: "/amenities/lifestyle2.jpg",
            description:
                "State-of-the-art fitness center equipped with premium machines for strength and wellness.",
        },
        {
            title: "Yoga Studio",
            image: "/amenities/lifestyle3.jpg",
            description:
                "A serene space designed for mindfulness, relaxation, and holistic well-being.",
        },
        {
            title: "Café Lounge",
            image: "/amenities/lifestyle7.jpg",
            description:
                "An elegant social space perfect for informal meetings and leisure moments.",
        },
        {
            title: "Jogging Track",
            image: "/amenities/lifestyle5.jpg",
            description:
                "Dedicated jogging pathways surrounded by lush greenery for a refreshing start to your day.",
        },
        {
            title: "Children’s Play Area",
            image: "/amenities/lifestyle6.jpg",
            description:
                "Safe and vibrant play zones designed to create joyful childhood experiences.",
        },
    ];

    return (
        <section id="amenities" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Section Title */}
                <p className="uppercase tracking-widest text-yellow-600 text-sm mb-3">
                    Lifestyle Amenities
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Curated for Elevated Living
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                    Thoughtfully crafted amenities designed to enhance comfort,
                    wellness and recreation in the heart of North Goa.
                </p>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

                    {amenities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 group border-2 border-yellow-400"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-60 w-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-left">
                                <h3 className="text-xl font-semibold mb-3 text-yellow-600">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}