"use client";

export default function Hero() {
    return (
        <div>
            <section className="relative h-screen flex items-center justify-center text-white">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/hero1.jpg"
                        alt="Etereo 1 North Goa"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl">

                    <p className="uppercase tracking-widest text-yellow-400 text-sm mb-4">
                        Ultra Luxury Living | Siolim, North Goa
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Own a Premium Address
                        <span className="block text-yellow-500">
                            Near MOPA International Airport
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-6">
                        Private Pools • EV Enabled Parking • Premium Amenities
                        Designed for High Rental Returns & Appreciation
                    </p>

                    <p className="text-2xl md:text-3xl font-semibold mb-8">
                        Starting From <span className="text-yellow-400">₹1.30 Cr*</span>
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="#contact"
                            className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition"
                        >
                            Book Private Site Visit
                        </a>

                        <a
                            href="/Etereo_CTC.pdf"
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Download Brochure
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-gray-300">
                        RERA No: PRGO01262580 | Possession: Dec 2028
                    </p>

                </div>
            </section>
        </div>
    );
}