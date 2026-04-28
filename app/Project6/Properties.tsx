"use client";

import Image from "next/image";

export default function Properties() {
  const properties = [
    { image: "/about-property1.jpg" },
    { image: "/about-property2.jpg" },
    { image: "/about-property3.jpg" },
    { image: "/about-property4.jpg" },
    { image: "/about-property5.jpg" },
    { image: "/about-property6.jpg" },

    { image: "/about-property7.jpg" },
    { image: "/about-property8.jpg" },
    { image: "/about-property9.jpg" },
    { image: "/about-property10.jpg" },
    { image: "/about-property11.jpg" },
    { image: "/about-property14.jpg" },

    { image: "/about-property15.jpg" },
    { image: "/about-property16.jpg" },
    { image: "/about-property17.jpg" },
    { image: "/about-property18.jpg" },
  ];

  return (
    <section className="relative py-10 px-6 overflow-hidden" id="properties">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2F4A8A] to-[#3BA64B]" />
      <div className="absolute inset-0 bg-black/40" />

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10 text-white">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Properties We Manage
        </h2>

        <p className="text-center text-white/80 mb-12">
          Trusted by property owners across multiple cities in India.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {properties.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-105 transition duration-300"
            >
              
              {/* IMAGE ONLY */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt="Property Image"
                  fill
                  quality={100}
                  priority={i < 4}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block bg-white text-[#2F4A8A] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Manage Your Property Now
          </a>
        </div>

      </div>
    </section>
  );
}