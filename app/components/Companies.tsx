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
    <section className="w-full bg-black flex justify-center py-[50px] sm:py-[70px] px-[16px]">
      {/* CONTAINER */}
      <div className="w-full max-w-[1400px] flex flex-col items-center gap-[40px]">
        
        {/* TITLE */}
        <h2
          className="
            text-[#F5F5F5]
            text-center
            font-black

            text-[22px]
            sm:text-[28px]
            md:text-[34px]

            tracking-[1px]
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
            sm:grid-cols-2
            lg:grid-cols-4

            gap-[12px]
            sm:gap-[22px]
            md:gap-[28px]
          "
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="
                relative
                group

                w-full

                h-[90px]
                sm:h-[135px]
                md:h-[145px]

                rounded-[18px]
                sm:rounded-[22px]

                border
                border-white/[0.08]

                bg-[#0E0E0E]

                overflow-hidden

                flex
                items-center
                justify-center

                px-[10px]
                sm:px-[24px]

                transition-all
                duration-500

                hover:border-[#C89B3C]/40
                hover:bg-[#151515]
                hover:-translate-y-[3px]
              "
            >
              {/* BACKGROUND LIGHT */}
              <div
                className="
                  absolute
                  inset-0

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  bg-gradient-to-br
                  from-[#C89B3C]/[0.08]
                  via-transparent
                  to-white/[0.03]
                "
              />

              {/* INNER GLOW */}
              <div
                className="
                  absolute

                  w-[80px]
                  h-[40px]

                  sm:w-[140px]
                  sm:h-[70px]

                  bg-[#C89B3C]/10
                  blur-3xl

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              />

              {/* LOGO */}
              <div
                className="
                  relative
                  w-full
                  h-full

                  flex
                  items-center
                  justify-center
                "
              >
                <Image
                  src={logo}
                  alt={`client-logo-${index}`}
                  fill
                  className="
                    object-contain

                    p-[12px]
                    sm:p-[20px]

                    transition-all
                    duration-500

                    group-hover:scale-[1.04]
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}