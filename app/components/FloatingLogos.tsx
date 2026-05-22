"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  {
    src: "/newlogoclient1.png",
    desktop: {
      size: 95,
      top: "12%",
      left: "6%",
    },
    mobile: {
      size: 65,
      top: "10%",
      left: "2%",
    },
  },

  {
    src: "/newlogoclient2.png",
    desktop: {
      size: 140,
      top: "34%",
      left: "18%",
    },
    mobile: {
      size: 90,
      top: "28%",
      left: "8%",
    },
  },

  {
    src: "/newlogoclient3.png",
    desktop: {
      size: 105,
      top: "20%",
      left: "32%",
    },
    mobile: {
      size: 70,
      top: "15%",
      left: "36%",
    },
  },

  {
    src: "/newlogoclient4.png",
    desktop: {
      size: 180,
      top: "8%",
      left: "47%",
    },
    mobile: {
      size: 110,
      top: "6%",
      left: "58%",
    },
  },

  {
    src: "/newlogoclient5.png",
    desktop: {
      size: 145,
      top: "18%",
      left: "70%",
    },
    mobile: {
      size: 90,
      top: "22%",
      left: "72%",
    },
  },

  {
    src: "/newlogoclient6.png",
    desktop: {
      size: 105,
      top: "18%",
      left: "87%",
    },
    mobile: {
      size: 70,
      top: "40%",
      left: "80%",
    },
  },

  {
    src: "/newlogoclient7.png",
    desktop: {
      size: 135,
      top: "62%",
      left: "14%",
    },
    mobile: {
      size: 90,
      top: "54%",
      left: "5%",
    },
  },

  {
    src: "/newlogoclient8.png",
    desktop: {
      size: 165,
      top: "38%",
      left: "57%",
    },
    mobile: {
      size: 105,
      top: "48%",
      left: "48%",
    },
  },

  {
    src: "/newlogoclient8.jpg",
    desktop: {
      size: 125,
      top: "48%",
      left: "83%",
    },
    mobile: {
      size: 80,
      top: "60%",
      left: "76%",
    },
  },

  {
    src: "/newlogoclient9.jpg",
    desktop: {
      size: 150,
      top: "44%",
      left: "36%",
    },
    mobile: {
      size: 95,
      top: "70%",
      left: "26%",
    },
  },

  {
    src: "/newlogoclient10.png",
    desktop: {
      size: 110,
      top: "74%",
      left: "48%",
    },
    mobile: {
      size: 75,
      top: "82%",
      left: "56%",
    },
  },
];

export default function FloatingBrands() {
  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-24">

      {/* Heading */}
      <div className="text-center mb-10 md:mb-16 px-4 z-10 relative">
       <h2
            className="
              relative
              text-[#F5F5F5]
              text-center
              font-black

              text-[22px]
              sm:text-[28px]
              md:text-[34px]

              tracking-[1px] bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
         
           Trusted Collaborations
          </h2>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[850px]">

        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: `${logo.desktop.size}px`,
              height: `${logo.desktop.size}px`,
              top: logo.desktop.top,
              left: logo.desktop.left,
            }}
            animate={{
              y: [0, -18, 0],
            }}
            transition={{
              duration: 4 + (index % 3),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center justify-center">

              <div className="relative w-[58%] h-[58%]">
                <Image
                  src={logo.src}
                  alt="brand-logo"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full h-[720px]">

        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              width: `${logo.mobile.size}px`,
              height: `${logo.mobile.size}px`,
              top: logo.mobile.top,
              left: logo.mobile.left,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + (index % 2),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative w-full h-full rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] flex items-center justify-center">

              <div className="relative w-[58%] h-[58%]">
                <Image
                  src={logo.src}
                  alt="brand-logo"
                  fill
                  className="object-contain"
                />
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}