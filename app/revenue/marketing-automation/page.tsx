import type { Metadata } from "next"
import MarketingAutomationClient from "../MarketingAutomationClient"


export const metadata: Metadata = {
    title: "Marketing Automation Services | CRM & Email Automation Solutions",
    description:
        "Professional marketing automation services including CRM workflows, email automation, lead nurturing and sales automation to scale business growth.",
    alternates: {
        canonical: "https://epoquegroup.in/revenue/marketing-automation",
    },
    openGraph: {
        title: "Marketing Automation Services | Epoque Group Of Companies",
        description:
            "Automate your marketing, CRM and sales processes with advanced automation systems.",
        url: "https://epoquegroup.in/revenue/marketing-automation",
        siteName: "Epoque Group Of Companies",
        type: "website",
    },
}

export default function Page() {
    return <MarketingAutomationClient />
}