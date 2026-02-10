import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./globals.css"



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Époque Group | Luxury Real Estate & Interiors",
    template: "%s | Époque Group",
  },
  description:
    "Époque Group delivers luxury real estate, premium interiors, and digital property solutions with strategic excellence.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${playfair.variable} bg-[#1A1A1A] text-white antialiased`}
      >
        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
      </body>
    </html>
  )
}
