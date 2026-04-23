


import type { Metadata } from "next"
import B2BLeadClient from "../B2BLeadClient"


export const metadata: Metadata = {
    title: "B2B Lead Generation Services | Epoque Group",
    description:
        "Professional B2B lead generation services using LinkedIn outreach, email campaigns and funnel optimization.",
    alternates: {
        canonical: "https://epoquegroup.in/revenue/b2b-lead-generation",
    },
    openGraph: {
        title: "B2B Lead Generation Services",
        description:
            "Generate qualified B2B leads through targeted outreach and performance funnels.",
        url: "https://epoquegroup.in/revenue/b2b-lead-generation",
        siteName: "Epoque Group Of Companies",
        type: "website",
    },
}

export default function Page() {
    return <B2BLeadClient />
}