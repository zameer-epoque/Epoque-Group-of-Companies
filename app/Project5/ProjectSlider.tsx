"use client";

import { useRef } from "react";

const projects = [
  { image: "/imagesnew/p1.jpg", type: "HIGHRISE", name: "NIVASA" },
  { image: "/imagesnew/p2.jpg", type: "TRIPLEX VILLAS", name: "LA CASA" },
  { image: "/imagesnew/p3.jpg", type: "HIGHRISE", name: "MOONGLADE" },
  { image: "/imagesnew/p4.jpg", type: "COMMERCIAL", name: "ONE DOWNTOWN" },
  { image: "/imagesnew/p5.jpg", type: "PLOTS", name: "DREAMTOWN" },
  { image: "/imagesnew/p6.jpg", type: "VILLAS", name: "COMING SOON" },
];

export default function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.clientWidth * 0.8; // dynamic scroll

    container.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black py-16 md:py-20">

      {/* SLIDER */}
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-10 
                   snap-x snap-mandatory scroll-smooth"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        {projects.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[80vw] md:w-[300px] 
                       bg-white text-black rounded-lg overflow-hidden 
                       snap-center transition-transform duration-300 hover:scale-105"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] md:h-[220px] object-cover"
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
      <div className="flex justify-center gap-6 mt-8 md:mt-10">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition"
        >
          →
        </button>
      </div>
    </section>
  );
}