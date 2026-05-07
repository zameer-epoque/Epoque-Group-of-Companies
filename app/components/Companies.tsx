"use client";

import Image from "next/image";

export default function Companies() {
  const logos: string[] = [
    "/newlogoclient1.png",
    "/newlogoclient2.png",
"/newlogoclient3.png",
"/newlogoclient4.png",
 "/newlogoclient5.png",
"/newlogoclient6.png",
"/newlogoclient7.png",
"/newlogoclient8.png",
  ];

  return (
    <section className="w-full bg-black flex justify-center py-[40px] sm:py-[64px] px-[16px]">
      {/* CONTAINER */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[32px]">
        
        {/* TITLE */}
        <h2
          className="
            text-[#F0F0F0]
            text-center
           
            font-black

            text-[20px]
            leading-[28px]

            sm:text-[24px]
            sm:leading-[32px]

            md:text-[28px]
            md:leading-[36px]

            uppercase
          "
        >
          Our Clients
        </h2>

        {/* GRID */}
        <div
          className="
            w-full

            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4

            gap-[16px]
            sm:gap-[24px]
          "
        >
          {logos.map((logo, index) => (
        <div
  key={index}
  className="
    relative
    group

    w-full
    max-w-[260px]

    h-[90px]
    sm:h-[100px]
    md:h-[120px]

    rounded-[18px]

    border
    border-white/10

    bg-[#111111]

    overflow-hidden

    flex
    items-center
    justify-center

    transition-all
    duration-500

    hover:-translate-y-1
    hover:border-white/20
    hover:bg-[#171717]

    px-[10px]
  "
>
              {/* LIGHT EFFECT */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  bg-gradient-to-br
                  from-white/[0.08]
                  via-transparent
                  to-white/[0.03]
                "
              />

              {/* GLOW */}
              <div
                className="
                  absolute

                  w-[120px]
                  h-[60px]

                  bg-white/10
                  blur-3xl

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              />

              {/* IMAGE */}
            <Image
  src={logo}
  alt={`client-logo-${index}`}
  width={220}
  height={80}
  className="
    w-auto

    h-[42px]
    sm:h-[50px]
    md:h-[58px]

    object-contain

    opacity-95
    brightness-110

    transition-all
    duration-500

    group-hover:scale-105
    group-hover:brightness-125

    relative
    z-10
  "
/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}