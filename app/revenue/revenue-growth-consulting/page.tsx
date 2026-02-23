import type { Metadata } from "next"
import RevenueGrowthClient from "../RevenueGrowthClient"

export const metadata: Metadata = {
    title: "Revenue Growth Consulting Services | Epoque Group",
    description:
        "Strategic revenue growth consulting services to optimize sales funnels, pricing strategy and scalable business growth.",
    alternates: {
        canonical:
            "https://epoquegroup.in/revenue/revenue-growth-consulting",
    },
    openGraph: {
        title: "Revenue Growth Consulting Services",
        description:
            "Scale your business with structured revenue growth strategies.",
        url: "https://epoquegroup.in/revenue/revenue-growth-consulting",
        siteName: "Epoque Group Of Companies",
        type: "website",
    },
}

export default function Page() {
    return <RevenueGrowthClient />
}