"use client";

import { useRef, useEffect } from "react";

const images = [
  "/imagesnew/img1.jpg",
  "/imagesnew/img2.jpg",
  "/imagesnew/img3.jpg",
  "/imagesnew/img4.jpg",
];

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (!el) return;

      // Only apply on desktop
      if (window.innerWidth > 768) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <section className="bg-black text-white py-16 md:py-20">
      
      {/* TITLE */}
      <h2 className="text-center text-xl md:text-4xl mb-8 md:mb-12 text-[#b89a7a] px-4">
        Turning Spaces Into Cherished Destinations.
      </h2>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-5 md:gap-10 overflow-x-auto px-4 md:px-10 scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`flex-shrink-0 transition-all duration-500 
              ${
                i === 1
                  ? "w-[80vw] md:w-[50vw] scale-100"
                  : "w-[70vw] md:w-[30vw] scale-90 opacity-70"
              }`}
          >
            <img
              src={src}
              alt="project"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}