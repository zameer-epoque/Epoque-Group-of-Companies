"use client";

import Image from "next/image";

export default function GallerySection() {
    const images = [
        "/gallery1.jpg",
        "/gallery2.jpg",
        "/gallery3.jpg",
        "/gallery4.jpg",
        "/gallery5.jpg",
        "/gallery6.jpg",
        "/gallery7.jpg",
        "/gallery8.jpg",
        "/gallery9.jpg",
    ];

    return (
        <section id="gallery" className="bg-[#f6f3ee] py-4 px-6 md:px-16">

            <div className="max-w-7xl mx-auto">

                {/* Title */}
                <div className="text-center mb-16">
                    <p className="text-[#7b3f45] italic mb-3">
                        Explore the project
                    </p>

                    <h2 className="tracking-[6px] text-[#7b3f45] text-2xl font-semibold">
                        GALLERY
                    </h2>
                </div>

                {/* Images Grid */}
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden border border-gray-200 group"
                        >
                            <Image
                                src={img}
                                alt="project"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                            />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}