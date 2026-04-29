"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center px-6 pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/villa.jpg')] bg-cover bg-center opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Luxury 4BHK Triplex Villas in Bachupally
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          APR Praveen’s Hillside – Premium gated community with lake & hill view
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <span className="bg-green-500 px-4 py-2 rounded-full text-sm">
            ₹3.69 Cr Onwards
          </span>
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm">
            15+ Acres
          </span>
          <span className="bg-white text-black px-4 py-2 rounded-full text-sm">
            176 Villas
          </span>
        </div>

        <a
          href="#contact"
          className="mt-8 inline-block bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Book Site Visit
        </a>
      </div>
    </section>
  );
}