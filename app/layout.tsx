


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
  metadataBase: new URL("https://epoquegroup.in"),

  title: {
    default:
      "Best Digital Marketing & Real Estate Lead Generation Agency in Hyderabad | Interior Branding Experts ",
    template: "%s | Époque Group",
  },

  description:
    "Époque Group delivers luxury real estate, premium interiors, and digital property solutions with strategic excellence.",

  keywords: [
    // Luxury Real Estate - Hyderabad Focus
    "Luxury real estate in Hyderabad",
    "Premium villas in Hyderabad",
    "Luxury apartments in Jubilee Hills",
    "High-end residential projects Hyderabad",
    "Ultra luxury homes in Hyderabad",
    "Gated community villas Hyderabad",
    "Luxury property investment Hyderabad",
    "Best luxury real estate company Hyderabad",
    "Premium residential developers Telangana",
    "Luxury flats near Hitech City",

    // Investment Intent Keywords
    "Luxury property investment in India",
    "High ROI real estate Hyderabad",
    "Best areas to invest in Hyderabad real estate",
    "Premium property for NRI investment",
    "Luxury homes for sale in Hyderabad",
    "Pre-launch luxury projects Hyderabad",
    "Exclusive luxury residences India",

    // Interior Design + Premium Segment
    "Luxury interior design company Hyderabad",
    "Premium home interiors Hyderabad",
    "High-end villa interior designers",
    "Luxury apartment interior design India",
    "Modern luxury home interiors",
    "Turnkey interior solutions Hyderabad",
    "Premium residential interior experts",

    // Brand Authority Keywords
    "Luxury lifestyle property developers",
    "Elite real estate developers India",
    "Boutique luxury real estate firm",
    "Exclusive real estate consultancy Hyderabad",
    "Luxury property management services",

    // Combination Keywords (Low Competition High Conversion)
    "Luxury real estate and interior solutions",
    "Premium villa design and construction Hyderabad",
    "Luxury property advisory Hyderabad",
    "Custom luxury home development India"
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
    url: "https://epoquegroup.in",
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
    description: "Premium real estate and interior excellence.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://epoquegroup.in",
  },
};

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
    telephone: "+919133633327"
    ,
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
    name: "Époque Group",
    url: "https://epoquegroup.in",
    logo: "https://epoquegroup.in/icon.png",
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
        {/* Meta Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
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

        {/* Local Business Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {/* Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}