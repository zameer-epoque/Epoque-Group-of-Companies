"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Companies() {
  const logos: string[] = [
    "/companies/clientslogo1.jpg",
   "/companies/clientslogo2.jpg",
   "/companies/clientslogo3.jpg",
   "/companies/clientslogo4.jpg",
  "/companies/clientslogo5.jpg",
    "/companies/clientslogo6.jpg",
  
  ]

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;

    // SMOOTH SPEED
    const speed = 1;

    const autoScroll = () => {
      if (!isPaused) {
        el.scrollLeft += speed;

        // SMOOTH INFINITE LOOP
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="w-full bg-black flex justify-center py-[40px] sm:py-[64px] overflow-hidden">
      {/* CONTAINER */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[24px] px-[16px] sm:px-[24px] lg:px-0">
        {/* TITLE */}
        <h2
          className="
            text-[#F0F0F0]
            text-center
            font-montserrat
            font-black
            text-[18px]
            leading-[26px]
            sm:text-[22px]
            sm:leading-[30px]
            md:text-[24px]
            md:leading-[32px]
            uppercase
          "
        >
          OUR CLIENTS
        </h2>

        {/* SCROLLER WRAPPER */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-10 h-full w-[20px] sm:w-[40px] bg-gradient-to-r from-[#0F1112] to-transparent pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-10 h-full w-[20px] sm:w-[40px] bg-gradient-to-l from-[#0F1112] to-transparent pointer-events-none" />

          {/* TRACK */}
          <div
            ref={scrollRef}
            className="
              flex
              items-center
              gap-x-[28px]
              sm:gap-x-[40px]
              overflow-x-hidden
              whitespace-nowrap
              scrollbar-hide
              py-[16px]
            "
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-center
                  min-w-[100px]
                  sm:min-w-[140px]
                  md:min-w-[160px]
                  relative
                  group
                  flex-shrink-0
                "
              >
                {/* LOGO */}
              <Image
  src={logo}
  alt={`company-logo-${index}`}
  width={220}
  height={60}
  className="
    h-[28px]
    sm:h-[32px]
    md:h-[40px]

    w-auto
    max-w-[140px]
    sm:max-w-[180px]
    md:max-w-[220px]

    object-contain

    opacity-90
    brightness-110

    transition-all
    duration-300

    hover:scale-110
    hover:opacity-100
    hover:brightness-125

    relative
    z-10
  "
/>

                {/* GLOW EFFECT */}
                <div
                  className="
                    absolute
                    w-[60px]
                    h-[30px]
                    bg-white/10
                    blur-2xl
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}