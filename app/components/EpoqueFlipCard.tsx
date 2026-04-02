"use client";
import { useEffect, useState } from "react";
import EpoqueCardFront from "./EpoqueCardFront";
import EpoqueCardBack from "./EpoqueCardBack";

export default function EpoqueFlipCard() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlip(true);
    }, 5000); // auto flip

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[340px] h-[540px] perspective">
      <div
        className={`relative w-full h-full duration-1000 transform ${
          flip ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <EpoqueCardFront />
        </div>

        {/* Back */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden">
          <EpoqueCardBack />
        </div>
      </div>
    </div>
  );
}