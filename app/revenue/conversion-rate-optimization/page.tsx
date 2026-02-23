import type { Metadata } from "next"
import CROClient from "../CROClient"

export const metadata: Metadata = {
  title: "Conversion Rate Optimization Services | Increase Website Conversions",
  description:
    "Professional Conversion Rate Optimization (CRO) services to improve website conversions, optimize user experience and maximize ROI.",
  alternates: {
    canonical:
      "https://epoquegroup.in/revenue/conversion-rate-optimization",
  },
  openGraph: {
    title: "Conversion Rate Optimization Services",
    description:
      "Increase conversions with data-driven CRO strategies and UX improvements.",
    url: "https://epoquegroup.in/revenue/conversion-rate-optimization",
    siteName: "Epoque Group Of Companies",
    type: "website",
  },
}

export default function Page() {
  return <CROClient />
}