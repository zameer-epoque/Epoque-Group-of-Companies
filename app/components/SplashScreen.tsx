"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505]"
        >
            {/* Base Mesh Gradient */}
            <div className="absolute inset-0 
                bg-[radial-gradient(circle_at_20%_30%,rgba(199,154,59,0.35),transparent_40%),
                    radial-gradient(circle_at_80%_20%,rgba(122,46,99,0.35),transparent_45%),
                    radial-gradient(circle_at_50%_80%,rgba(212,91,91,0.25),transparent_50%),
                    radial-gradient(circle_at_60%_50%,rgba(255,215,0,0.15),transparent_60%)] 
                animate-[pulse_6s_ease-in-out_infinite]"
            />

            {/* Floating Gold Glow */}
            <motion.div
                animate={{
                    x: [0, 40, -30, 0],
                    y: [0, -30, 40, 0]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute w-[700px] h-[700px] 
                bg-gradient-to-r from-[#C79A3B]/40 via-[#D45B5B]/30 to-[#7A2E63]/40 
                blur-[200px] rounded-full"
            />

            {/* Subtle Dark Overlay for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

            {/* Logo Animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
            >
                <Image
                    src="/logo.png"
                    alt="Époque Group Logo"
                    width={180}
                    height={180}
                    priority
                />
            </motion.div>
        </motion.div>
    )
}
