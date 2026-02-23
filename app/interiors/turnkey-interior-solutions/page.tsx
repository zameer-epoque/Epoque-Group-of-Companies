import type { Metadata } from "next"
import TurnkeyInteriorClient from "../TurnkeyInteriorClient"

export const metadata: Metadata = {
    title:
        "Turnkey Interior Solutions in Hyderabad | End-to-End Interior Execution Company",
    description:
        "Epoque Group provides complete turnkey interior solutions in Hyderabad including design, material procurement, project management, execution and supervision for villas, apartments and commercial spaces.",
    keywords: [
        "Turnkey Interior Solutions Hyderabad",
        "Interior Execution Company Hyderabad",
        "End to End Interior Contractors Hyderabad",
        "Interior Project Management Hyderabad",
        "Turnkey Interior Company in Kokapet",
        "Interior Contractors in Gachibowli",
        "Villa Interior Execution Hyderabad",
        "Office Interior Execution Hyderabad"
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/turnkey-interior-solutions",
    },
    openGraph: {
        title: "Turnkey Interior Solutions in Hyderabad | Epoque Group",
        description:
            "Complete end-to-end interior design and execution services across Hyderabad for villas, apartments and offices.",
        url:
            "https://epoquegroup.in/interiors/turnkey-interior-solutions",
        siteName: "Epoque Group",
        type: "website",
    },
}

export default function Page() {
    return <TurnkeyInteriorClient />
}