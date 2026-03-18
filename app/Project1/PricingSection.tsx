"use client";

type PricingItem = {
    title: string;
    size: string;
    pool: string;
    price: string;
    inclusive?: boolean;
    highlight?: boolean;
};

export default function PricingSection() {
    const pricingData: PricingItem[] = [
        {
            title: "2 BHK Simplex",
            size: "1015 Sq. Ft.",
            pool: "With Private Pool",
            price: "₹2.39 Cr",
            inclusive: true,
        },
        {
            title: "2 BHK Simplex",
            size: "951 Sq. Ft.",
            pool: "Without Pool",
            price: "₹2.31 Cr",
        },
        {
            title: "2 BHK Duplex",
            size: "1559 Sq. Ft.",
            pool: "With Private Pool",
            price: "₹3.38 Cr",
            inclusive: true,
        },
        {
            title: "1 BHK",
            size: "536 Sq. Ft.",
            pool: "Without Pool",
            price: "₹1.40 Cr",
        },
        {
            title: "1 BHK",
            size: "787 Sq. Ft.",
            pool: "With Private Pool",
            price: "₹2.04 Cr",
            highlight: true,
        },
    ];

    return (
        <section id="pricing" className="py-12 bg-[#f5f2ec]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
                        Inventory & Pricing
                    </h2>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Limited collection of ultra-luxury residences crafted
                        for refined living and long-term value.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {pricingData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative bg-white p-10 rounded-sm transition duration-500 ${item.highlight
                                    ? "shadow-2xl border-t-4 border-yellow-600 scale-105"
                                    : "shadow-md hover:shadow-xl"
                                }`}
                        >
                            {item.highlight && (
                                <span className="absolute top-0 left-0 w-full text-center bg-yellow-600 text-white text-xs py-1 tracking-wider">
                                    FEATURED RESIDENCE
                                </span>
                            )}

                            <h3 className="text-2xl font-light mb-4 tracking-wide">
                                {item.title}
                            </h3>

                            <p className="text-gray-500 mb-6">
                                {item.size}
                                <br />
                                <span className="text-gray-700 font-medium">
                                    {item.pool}
                                </span>
                            </p>

                            <div className="w-10 h-[2px] bg-yellow-600 mb-6"></div>

                            <p className="text-3xl font-light text-gray-900">
                                {item.price}
                            </p>

                            {item.inclusive && (
                                <p className="text-sm text-gray-500 mt-2">
                                    All Inclusive Pricing
                                </p>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}