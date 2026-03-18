"use client";

export default function LifeBanner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src="/banner.jpg"
        alt="The Etereo Life"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

    </section>
  );
}