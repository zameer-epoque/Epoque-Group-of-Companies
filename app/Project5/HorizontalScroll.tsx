"use client";

const images = [
  "/imagesnew/img1.jpg",
  "/imagesnew/img2.jpg",
  "/imagesnew/img3.jpg",
  "/imagesnew/img4.jpg",
];

export default function HorizontalScroll() {
  return (
    <section className="bg-black text-white py-16 md:py-20 overflow-hidden">
      
      <h2 className="text-center text-xl md:text-4xl mb-8 md:mb-12 text-[#b89a7a] px-4">
        Turning Spaces Into Cherished Destinations.
      </h2>

      <div className="flex gap-5 md:gap-10 overflow-x-auto px-4 md:px-10 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85vw] md:w-[30vw] snap-center"
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