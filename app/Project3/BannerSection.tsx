"use client";

import Image from "next/image";

export default function BannerSection() {
    return (
        <section className="relative h-[90vh] w-full">

            {/* Only Background Image */}
            <Image
                src="/banner.jpg"
                alt="Banner"
                fill
                priority
                className="object-cover"
            />

        </section>
    );
}