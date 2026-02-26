import type { Metadata } from "next";
import ContactPage from "./contactpage";


export const metadata: Metadata = {
    title: "Contact Époque Group | Digital Marketing Agency in Hyderabad",
    description:
        "Get in touch with Époque Group for digital marketing, SEO, PPC and real estate lead generation services in Hyderabad.",
    alternates: {
        canonical: "https://epoquegroup.in/contact",
    },
};

export default function Page() {
    return <ContactPage />;
}