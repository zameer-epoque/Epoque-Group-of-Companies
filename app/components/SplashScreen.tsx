"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[150px]" />

            {/* Logo */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
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
