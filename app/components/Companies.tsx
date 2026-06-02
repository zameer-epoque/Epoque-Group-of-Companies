// "use client";

// import Image from "next/image";

// export default function Companies() {
//   const logos: string[] = [
//     "/newlogoclient1.png",
//     "/newlogoclient2.png",
//     "/newlogoclient3.png",
//     "/newlogoclient4.png",
//     "/newlogoclient5.png",
//     "/newlogoclient6.png",
//     "/newlogoclient7.png",
//     "/newlogoclient8.png",
//     "/newlogoclient8.jpg",
//     "/newlogoclient9.jpg",
//     "/newlogoclient10.png",
//     "/newlogoclient11.png",
//   ];

//   return (
//     <section className="w-full bg-black flex justify-center py-[50px] sm:py-[70px] px-[16px] overflow-hidden">
//       {/* CONTAINER */}
//       <div className="w-full max-w-[1400px] flex flex-col items-center gap-[40px]">
        
//         {/* TITLE */}
//         <div className="relative">
//           <div className="absolute inset-0 blur-3xl bg-[#C89B3C]/20" />

//           <h2
//             className="
//               relative
//               text-[#F5F5F5]
//               text-center
//               font-black

//               text-[22px]
//               sm:text-[28px]
//               md:text-[34px]

//               tracking-[1px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
         
//             Our Clients
//           </h2>
//         </div>

//         {/* GRID */}
//         <div
//           className="
//             w-full

//             grid
//             grid-cols-2
//             sm:grid-cols-2
//             lg:grid-cols-4

//             gap-[12px]
//             sm:gap-[22px]
//             md:gap-[28px]
//           "
//         >
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="
//                 relative
//                 group

//                 w-full

//                 h-[90px]
//                 sm:h-[135px]
//                 md:h-[145px]

//                 rounded-[18px]
//                 sm:rounded-[22px]

//                 border
//                 border-white/[0.08]

//                 bg-[#0E0E0E]

//                 overflow-hidden

//                 flex
//                 items-center
//                 justify-center

//                 px-[10px]
//                 sm:px-[24px]

//                 transition-all
//                 duration-700
//                 ease-out

//                 hover:border-[#C89B3C]/50
//                 hover:bg-[#161616]
//                 hover:-translate-y-[6px]
//                 hover:shadow-[0_0_35px_rgba(200,155,60,0.15)]
//               "
//             >
//               {/* TOP LIGHT */}
//               <div
//                 className="
//                   absolute
//                   top-0
//                   left-[-100%]

//                   w-[60%]
//                   h-full

//                   bg-gradient-to-r
//                   from-transparent
//                   via-white/10
//                   to-transparent

//                   skew-x-[-25deg]

//                   group-hover:left-[150%]

//                   transition-all
//                   duration-1000
//                 "
//               />

//               {/* BACKGROUND LIGHT */}
//               <div
//                 className="
//                   absolute
//                   inset-0

//                   opacity-0
//                   group-hover:opacity-100

//                   transition-all
//                   duration-700

//                   bg-gradient-to-br
//                   from-[#C89B3C]/[0.12]
//                   via-transparent
//                   to-white/[0.03]
//                 "
//               />

//               {/* GOLD GLOW */}
//               <div
//                 className="
//                   absolute

//                   w-[90px]
//                   h-[50px]

//                   sm:w-[150px]
//                   sm:h-[80px]

//                   bg-[#C89B3C]/15
//                   blur-3xl

//                   opacity-0
//                   scale-50

//                   group-hover:opacity-100
//                   group-hover:scale-100

//                   transition-all
//                   duration-700
//                 "
//               />

//               {/* BORDER GLOW */}
//               <div
//                 className="
//                   absolute
//                   inset-0

//                   rounded-[18px]
//                   sm:rounded-[22px]

//                   border
//                   border-transparent

//                   group-hover:border-[#C89B3C]/30

//                   transition-all
//                   duration-500
//                 "
//               />

//               {/* LOGO */}
//               <div
//                 className="
//                   relative
//                   w-full
//                   h-full

//                   flex
//                   items-center
//                   justify-center
//                 "
//               >
//                 <Image
//                   src={logo}
//                   alt={`client-logo-${index}`}
//                   fill
//                   className="
//                     object-contain

//                     p-[12px]
//                     sm:p-[20px]

//                     transition-all
//                     duration-700

//                     group-hover:scale-[1.08]
//                     group-hover:brightness-110
//                   "
//                 />
//               </div>

//               {/* BOTTOM LINE */}
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0

//                   h-[2px]
//                   w-0

//                   bg-gradient-to-r
//                   from-[#C89B3C]
//                   via-[#E5C36A]
//                   to-[#C89B3C]

//                   group-hover:w-full

//                   transition-all
//                   duration-700
//                 "
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { useEffect, useRef, useState } from "react";

export default function Companies() {
  const logos = [
    "/newlogoclient1.jpg",
     "/newlogoclient2.png",
    "/newlogoclient3.png",
     "/newlogoclient4.png",
     "/newlogoclient5.png",
     "/newlogoclient6.png",
     "/newlogoclient7.png",
     "/newlogoclient8.png",
     "/newlogoclient8.jpg",
     "/newlogoclient9.jpg",
    "/newlogoclient10.png",
    "/newlogoclient11.png",
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

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
            md:text-[32px]
            md:leading-[32px]
     bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent
            tracking-[1px]
          "
        >
          Our Trusted Collaborations
        </h2>
     
        {/* SCROLLER WRAPPER */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT FADE */}
          <div className="absolute left-0 top-0 z-10 h-full w-[50px] sm:w-[80px] bg-gradient-to-r from-[#0F1112] to-transparent pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute right-0 top-0 z-10 h-full w-[50px] sm:w-[80px] bg-gradient-to-l from-[#0F1112] to-transparent pointer-events-none" />

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
                <img
                  src={logo}
                  alt={`company-logo-${index}`}
                  className="
                    h-[62px]
                    sm:h-[62px]
                    md:h-[70px]
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