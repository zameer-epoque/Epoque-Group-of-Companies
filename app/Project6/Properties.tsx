"use client";

import Image from "next/image";

export default function Properties() {
  const properties = [
    { location: "Hyderabad", image: "/about-property1.jpg" },
    { location: "Vijayawada", image: "/about-property2.jpg" },
    { location: "Vijayawada", image: "/about-property3.jpg" },
    { location: "Vijayawada", image: "/about-property4.jpg" },
    { location: "Hyderabad", image: "/about-property5.jpg" },
    { location: "Hyderabad", image: "/about-property6.jpg" },

    { location: "Hyderabad", image: "/about-property7.jpg" },
    { location: "Hyderabad", image: "/about-property8.jpg" },
    { location: "Hyderabad", image: "/about-property9.jpg" },
    { location: "Hyderabad", image: "/about-property10.jpg" },
    { location: "Sainkapuri", image: "/about-property11.jpg" },
    { location: "Vishakhapatnam", image: "/about-property14.jpg" },

    { location: "Hyderabad", image: "/about-property15.jpg" },
    { location: "Hyderabad", image: "/about-property16.jpg" },
    { location: "Hyderabad", image: "/about-property17.jpg" },
    { location: "Hyderabad", image: "/about-property18.jpg" },
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
              
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Property in ${item.location}`} // ✅ FIXED
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40" />

                {/* LOCATION */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-sm font-medium">
                    {item.location}
                  </p>
                </div>
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