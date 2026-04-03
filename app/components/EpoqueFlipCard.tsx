"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EpoqueCardFront from "./EpoqueCardFront";
import EpoqueCardBack from "./EpoqueCardBack";

export default function EpoqueFlipCard() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFlip(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center   relative overflow-hidden">

      {/* 🔥 Animated BG */}
      <div className="absolute inset-0 bg-animate blur-3xl opacity-30"/>

      <div className="w-[360px] h-[560px] perspective">

        <motion.div
          animate={{ rotateY: flip ? 180 : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.05 }}
          className="relative w-full h-full transform-style glow rounded-[32px]"
        >

          {/* FRONT */}
          <div className="absolute w-full h-full backface-hidden">
            <EpoqueCardFront />
          </div>

          {/* BACK */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden">
            <EpoqueCardBack />
          </div>

        </motion.div>

      </div>
    </div>
  );
}