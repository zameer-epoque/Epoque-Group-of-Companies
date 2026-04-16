"use client";

import { useRef, useEffect } from "react";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Convert vertical scroll to horizontal
  useEffect(() => {
    const el = scrollRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (el) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el?.addEventListener("wheel", handleWheel);
    return () => el?.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      
      {/* TITLE */}
      <h2 className="text-center text-2xl md:text-4xl mb-10 text-[#b89a7a]">
        Turning Spaces Into Cherished Destinations.
      </h2>

      {/* SCROLL CONTAINER */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scrollbar-hide px-10"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className={`flex-shrink-0 transition-all duration-500 ${
              i === 1
                ? "w-[60vw] scale-100"
                : "w-[30vw] scale-90 opacity-70"
            }`}
          >
            <img
              src={src}
              alt="project"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}