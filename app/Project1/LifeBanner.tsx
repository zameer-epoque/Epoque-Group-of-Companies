"use client";

export default function LifeBanner(): JSX.Element {
    return (
        <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

            {/* Background Image */}
            <img
                src="/banner.jpg"
                alt="The Etereo Life"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>

            {/* Content */}
            {/* <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-wide">
          <span className="font-serif italic">
            The Etereo Life
          </span>
        </h2>

      </div> */}
        </section>
    );
}