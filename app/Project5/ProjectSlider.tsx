"use client";

import { useRef } from "react";

const projects = [
  {
    image: "/images/p1.jpg",
    type: "HIGHRISE",
    name: "NIVASA",
  },
  {
    image: "/images/p2.jpg",
    type: "TRIPLEX VILLAS",
    name: "LA CASA",
  },
  {
    image: "/images/p3.jpg",
    type: "HIGHRISE",
    name: "MOONGLADE",
  },
  {
    image: "/images/p4.jpg",
    type: "COMMERCIAL",
    name: "ONE DOWNTOWN",
  },
  {
    image: "/images/p5.jpg",
    type: "PLOTS",
    name: "DREAMTOWN",
  },
  {
    image: "/images/p6.jpg",
    type: "VILLAS",
    name: "COMING SOON",
  },
];

export default function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black py-20">
      
      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-10 scrollbar-hide"
      >
        {projects.map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-white text-black rounded-lg overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="p-4">
              <p className="text-xs text-gray-500">{item.type}</p>
              <h3 className="text-lg font-semibold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>
    </section>
  );
}