


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
import type { Metadata, Viewport } from "next";
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

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://epoquegroup.in"),

  title: {
    default:
      "Luxury Real Estate & Digital Marketing Agency in Hyderabad | Époque Group",
    template: "%s | Époque Group",
  },

  description:
    "Époque Group is a premium luxury real estate, interior design, and real estate lead generation agency in Hyderabad delivering high-ROI property investment solutions and elite brand growth strategies.",

  keywords: [
    "Luxury real estate Hyderabad",
    "Premium villas Hyderabad",
    "Luxury apartments Jubilee Hills",
    "Ultra luxury homes Hyderabad",
    "Gated community villas Telangana",
    "Luxury property investment India",
    "High ROI real estate Hyderabad",
    "NRI property investment Hyderabad",
    "Luxury interior design Hyderabad",
    "Premium home interiors Hyderabad",
    "Villa interior designers Hyderabad",
    "Turnkey interior solutions Telangana",
    "Real estate lead generation agency",
    "Digital marketing for real estate Hyderabad",
    "Property marketing company Hyderabad",
    "Luxury property advisory Hyderabad",
    "Boutique real estate consultancy India"
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
    title:
      "Luxury Real Estate & Interior Experts in Hyderabad | Époque Group",
    description:
      "Discover ultra luxury homes, premium interiors, and high-performance real estate marketing solutions.",
    url: "https://epoquegroup.in",
    siteName: "Époque Group",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury Real Estate & Interiors in Hyderabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Époque Group | Luxury Real Estate Hyderabad",
    description:
      "Premium properties, luxury interiors & high-conversion real estate marketing.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://epoquegroup.in",
  },
};

/* =========================
   VIEWPORT
========================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://epoquegroup.in/#localbusiness",
    name: "Époque Group",
    image: "https://epoquegroup.in/icon.png",
    url: "https://epoquegroup.in",
    telephone: "+919133633327",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "902, Office No C3, Sattva Magnus Commercial Building, Shaikpet",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500008",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "17.4239",
      longitude: "78.4070",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/epoque.digital/",
      "https://www.facebook.com/EpoqueGroupOfCompanies",
      "https://www.linkedin.com/company/epoquegroupofcompany/",
      "https://x.com/EpoqueGroup",
      "https://www.youtube.com/@epoquegroupofcompanies",
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://epoquegroup.in/#organization",
    name: "Époque Group",
    url: "https://epoquegroup.in",
    logo: "https://epoquegroup.in/icon.png",
  };

  const realEstateSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://epoquegroup.in/#realestate",
    name: "Époque Group",
    url: "https://epoquegroup.in",
    areaServed: {
      "@type": "City",
      name: "Hyderabad",
    },
    serviceType: [
      "Luxury Real Estate Consulting",
      "Property Investment Advisory",
      "Premium Interior Design",
      "Real Estate Lead Generation",
      "Digital Marketing for Real Estate",
    ],
  };

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

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}
            (window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1434477401388550');
            fbq('track', 'PageView');
          `}
        </Script>

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

        {/* Schemas */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="real-estate-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(realEstateSchema),
          }}
        />
      </body>
    </html>
  );
}