import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Playfair_Display } from "next/font/google";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ClientLayout from "./components/ClientLayout";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.epoquegroup.in"),

  title: {
    default: "Époque Group",
    template: "%s | Époque Group",
  },

  description:
    "Époque Group delivers luxury real estate, premium interiors, and digital property solutions with strategic excellence.",

  keywords: [
    "Luxury Real Estate",
    "Premium Interiors",
    "Property Investment",
    "Luxury Homes India",
  ],

  verification: {
    google: "URwvOHIEiyvwiJrVDoHIS0UQfmqLfkd0TJMX_C1k_oA",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Époque Group | Luxury Real Estate & Interiors",
    description:
      "Luxury real estate and premium interiors crafted with timeless elegance.",
    url: "https://www.epoquegroup.in",
    siteName: "Époque Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Époque Group Luxury Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Époque Group | Luxury Real Estate",
    description:
      "Premium real estate and interior excellence.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.epoquegroup.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${poppins.variable}
          ${playfair.variable}
          antialiased
          bg-white
          text-[#1A1A1A]
          transition-colors duration-300
        `}
      >
        <ClientLayout>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientLayout>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJLRVZTZKB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJLRVZTZKB');
          `}
        </Script>

        {/* Organization Schema for Google */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Époque Group",
              "url": "https://www.epoquegroup.in",
              "logo": "https://www.epoquegroup.in/icon.png"
            }
          `}
        </Script>

      </body>
    </html>
  );
}
