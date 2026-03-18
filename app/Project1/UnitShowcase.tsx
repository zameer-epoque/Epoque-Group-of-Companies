"use client";

type Unit = {
    title: string;
    image: string;
    desc: string;
};

export default function UnitShowcase(): JSX.Element {
    const twoBHK: Unit[] = [
        {
            title: "2 BHK – Living Room",
            image: "/units/2bhk-living.jpg",
            desc: "Spacious living area designed with premium finishes and natural lighting for a refined lifestyle experience.",
        },
        {
            title: "2 BHK – Dining & Kitchen",
            image: "/units/2bhk-kitchen.jpg",
            desc: "Modern modular kitchen seamlessly connected with dining space for comfort and functionality.",
        },
        {
            title: "2 BHK – Master Bedroom",
            image: "/units/2bhk-bedroom.jpg",
            desc: "Elegant master bedroom with generous space, large windows, and luxurious detailing.",
        },
        {
            title: "2 BHK – Master Toilet",
            image: "/units/2bhk-toilet.jpg",
            desc: "Premium sanitary fittings with contemporary design and high-quality finishes.",
        },
    ];

    const oneBHK: Unit[] = [
        {
            title: "1 BHK – Living Room",
            image: "/units/1bhk-living.jpg",
            desc: "Thoughtfully designed living space combining comfort and sophistication.",
        },
        {
            title: "1 BHK – Dining & Kitchen",
            image: "/units/1bhk-kitchen.jpg",
            desc: "Efficiently planned kitchen with premium fittings and ample storage.",
        },
        {
            title: "1 BHK – Bedroom",
            image: "/units/1bhk-bedroom.jpg",
            desc: "Cozy yet luxurious bedroom crafted for relaxation and privacy.",
        },
    ];

    const renderSection = (data: Unit[], heading: string): JSX.Element => (
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">
                {heading}
            </h2>
            <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="group overflow-hidden rounded-sm shadow-md hover:shadow-xl transition duration-500 bg-white"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-80 object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <h3 className="text-xl font-medium mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="py-28 bg-[#f5f2ec]" id="residences">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light">
                        Residence Interiors
                    </h2>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mt-4"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
                        Discover thoughtfully designed interiors crafted to deliver
                        luxury, elegance and comfort in every corner.
                    </p>
                </div>

                {renderSection(twoBHK, "2 BHK Residences")}
                {renderSection(oneBHK, "1 BHK Residences")}

            </div>
        </section>
    );
}