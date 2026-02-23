import type { Metadata } from "next"
import TurnkeyInteriorClient from "../TurnkeyInteriorClient"


export const metadata: Metadata = {
    title:
        "Turnkey Interior Solutions in Hyderabad | End-to-End Interior Execution",
    description:
        "Complete turnkey interior solutions in Hyderabad including design, material procurement, execution and supervision for villas, apartments and offices.",
    keywords: [
        "Turnkey Interior Solutions Hyderabad",
        "Interior Execution Company Hyderabad",
        "End to End Interior Contractors Hyderabad",
        "Interior Project Management Hyderabad"
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/interiors/turnkey-interior-solutions",
    },
    openGraph: {
        title: "Turnkey Interior Solutions in Hyderabad",
        description:
            "End-to-end interior design and execution services across Hyderabad.",
        url:
            "https://epoquegroup.in/interiors/turnkey-interior-solutions",
        type: "website",
    },
}

export default function Page() {
    return <TurnkeyInteriorClient />
}