"use client";

type Spec = {
    title: string;
    items: string[];
    bg: string;
};

export default function Specifications(): JSX.Element {
    const specs: Spec[] = [
        {
            title: "Flooring",
            items: [
                "Tile flooring in living rooms and bedrooms",
                "Anti-skid tile flooring for bathrooms, balconies and terraces",
            ],
            bg: "bg-gray-100",
        },
        {
            title: "Doors & Windows",
            items: [
                "Wooden flush doors for interior",
                "Aluminium windows/external doors",
            ],
            bg: "bg-green-50",
        },
        {
            title: "Kitchen",
            items: [
                "Modular kitchen with stainless steel sink and tap",
                "Provision for washing machine",
                "Hob and chimney",
            ],
            bg: "bg-gray-100",
        },
        {
            title: "Private Terraces",
            items: ["Railings", "Lights and fans"],
            bg: "bg-green-50",
        },
        {
            title: "Electricals",
            items: [
                "Light fixtures and points in kitchen/toilet/bedrooms & living rooms",
                "Concealed PVC conduits with copper wiring and MCB/ELCB",
            ],
            bg: "bg-yellow-50",
        },
        {
            title: "Bathrooms",
            items: [
                "Branded CP & sanitary fittings",
                "Glass partition for shower",
                "Geyser and exhaust fan",
                "Mirror in bathrooms",
            ],
            bg: "bg-gray-100",
        },
        {
            title: "Security & Safety",
            items: [
                "Intercom systems",
                "24 hr round-the-clock security personnel",
                "CCTV surveillance in common areas",
            ],
            bg: "bg-yellow-50",
        },
        {
            title: "Building",
            items: [
                "RCC framed structure conforming to seismic zone",
                "High grade steel bars",
                "Laterite stone masonry for external walls",
                "Damp-proofing and anti-termite treatment",
                "Railings for balconies and staircases",
                "Private swimming pools in select apartments",
            ],
            bg: "bg-gray-100",
        },
    ];

    return (
        <section className="py-24 bg-[#f5f5f5]" id="specifications">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-3xl md:text-4xl italic font-medium">
                        Specifications
                    </h2>
                    <div className="flex-1 h-[2px] bg-yellow-600"></div>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {specs.map((spec, index) => (
                        <div
                            key={index}
                            className={`${spec.bg} p-8 rounded-sm shadow-sm hover:shadow-md transition duration-300`}
                        >
                            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                                {spec.title}
                            </h3>

                            <div className="w-8 h-[2px] bg-yellow-600 mb-4"></div>

                            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                                {spec.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Note */}
                <p className="mt-12 text-sm text-gray-600 text-center">
                    *Additional furniture package available at extra cost
                </p>

            </div>
        </section>
    );
}