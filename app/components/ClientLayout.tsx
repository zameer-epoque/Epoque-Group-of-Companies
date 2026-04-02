// // "use client"

// // import { useEffect, useState } from "react"
// // import { usePathname } from "next/navigation"
// // import { motion, AnimatePresence } from "framer-motion"
// // import Image from "next/image"

// // function SplashScreen() {
// //     return (
// //         <motion.div
// //             initial={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
// //         >
// //             <motion.div
// //                 initial={{ scale: 0.8, opacity: 0 }}
// //                 animate={{ scale: 1.2, opacity: 0.6 }}
// //                 transition={{ duration: 2 }}
// //                 className="absolute w-[500px] h-[500px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[150px]"
// //             />

// //             <motion.div
// //                 initial={{ scale: 0.7, opacity: 0 }}
// //                 animate={{ scale: 1, opacity: 1 }}
// //                 transition={{ duration: 1, ease: "easeInOut" }}
// //                 className="relative z-10"
// //             >
// //                 <Image
// //                     src="/logo.png"
// //                     alt="Époque Group Logo"
// //                     width={720}
// //                     height={720}
// //                     priority
// //                     className="drop-shadow-2xl"
// //                 />
// //             </motion.div>
// //         </motion.div>
// //     )
// // }

// export default function ClientLayout({
//     children,
// }: {
//     children: React.ReactNode
// }) {
//     const [loading, setLoading] = useState(true)
//     const pathname = usePathname()

//     // Splash screen on first load
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false)
//         }, 1200)

//         return () => clearTimeout(timer)
//     }, [])

//     // Scroll to top on every route change
//     useEffect(() => {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth",
//         })
//     }, [pathname])

//     return (
//         <>
//             <AnimatePresence mode="wait">
//                 {loading && <SplashScreen key="splash" />}
//             </AnimatePresence>

//             {!loading && children}
//         </>
//     )
// }



"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import EpoqueFlipCard from "./EpoqueFlipCard"

function SplashScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Glow Background */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 0.5 }}
                transition={{ duration: 2 }}
                className="absolute w-[600px] h-[600px] 
                bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 
                blur-[150px] rounded-full"
            />

            {/* Instagram Flip Card */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0, y: 60 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 backdrop-blur-xl bg-white/5 p-4 rounded-2xl"
            >
                <EpoqueFlipCard />
            </motion.div>
        </motion.div>
    )
}

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [loading, setLoading] = useState(true)
    const pathname = usePathname()

    // Splash screen on first load
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 12000) // ✅ increased time for flip animation

        return () => clearTimeout(timer)
    }, [])

    // Scroll to top on every route change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [pathname])

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <SplashScreen key="splash" />}
            </AnimatePresence>

            {!loading && children}
        </>
    )
}