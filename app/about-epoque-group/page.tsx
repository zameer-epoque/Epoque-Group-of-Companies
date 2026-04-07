import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import WhyChooseSection from "./WhyChooseSection"
import AboutFAQSection from "./AboutFAQSection"

export const metadata: Metadata = {
    title:
        "About Epoque Group | Best Digital Marketing & Real Estate Marketing Agency in Hyderabad",
    description:
        "Epoque Group is a leading digital marketing and real estate marketing agency in Hyderabad specializing in SEO, Google Ads, branding, performance marketing and structured revenue growth systems.",
    keywords: [
        "Best digital marketing agency in Hyderabad",
        "Real estate marketing company Hyderabad",
        "SEO agency Hyderabad",
        "Google Ads company Hyderabad",
        "Property lead generation agency",
        "Performance marketing Hyderabad",
    ],
    alternates: {
        canonical: "https://epoquegroup.in/about",
    },
    openGraph: {
        title:
            "About Epoque Group | Hyderabad Digital & Real Estate Marketing Experts",
        description:
            "Performance-driven digital marketing and real estate branding agency helping businesses scale revenue in Hyderabad and across India.",
        url: "https://epoquegroup.in/about",
        type: "website",
    },
}

export default function AboutPage() {
    return (
        <main className="relative bg-[#050505] text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px] rounded-full"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-32 space-y-24">

                {/* HERO */}
                <section className="text-center space-y-8">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        About{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Epoque Group
                        </span>
                    </h1>

                    <p className="text-gray-400 text-xl max-w-4xl mx-auto leading-relaxed">
                        Epoque Group is one of the best digital marketing and real estate
                        marketing agencies in Hyderabad, specializing in Search Engine
                        Optimization (SEO), Google Ads management, Meta advertising,
                        high-intent lead generation, and structured revenue growth systems.
                    </p>
                </section>

                {/* COMPANY STORY */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Our Mission & Vision
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our mission is to build scalable digital growth ecosystems for
                        businesses in Hyderabad and across India. We help brands dominate
                        search engines, generate qualified leads, and convert traffic into
                        measurable revenue.
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our vision is to become the most trusted digital marketing agency
                        in Hyderabad by delivering transparent, performance-driven
                        marketing strategies backed by analytics and conversion science.
                    </p>
                </section>

                {/* EXPERTISE */}
                <section className="space-y-10">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Our Core Expertise
                    </h2>

                    <div className="grid md:grid-cols-2 gap-10 text-gray-400 text-lg leading-relaxed">
                        <ul className="space-y-4 list-disc list-inside">
                            <li>Real Estate Marketing & Luxury Project Launch Campaigns</li>
                            <li>High-Conversion Lead Generation Funnels</li>
                            <li>Search Engine Optimization (SEO)</li>
                            <li>Google Search & Display Advertising</li>
                        </ul>

                        <ul className="space-y-4 list-disc list-inside">
                            <li>Meta (Facebook & Instagram) Advertising</li>
                            <li>Performance Marketing & Revenue Optimization</li>
                            <li>Brand Positioning & Creative Strategy</li>
                            <li>Business & Growth Consulting</li>
                        </ul>
                    </div>
                </section>

                {/* WHY US */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Why Businesses Choose Epoque Group
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        Businesses choose us because we focus on revenue — not vanity
                        metrics. Every campaign is designed around measurable performance,
                        return on investment (ROI), and long-term scalability.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-lg">
                        <ul className="space-y-3">
                            <li>✔ Hyderabad Market Expertise</li>
                            <li>✔ Data-Driven Marketing Frameworks</li>
                            <li>✔ Conversion-Optimized Funnel Systems</li>
                        </ul>

                        <ul className="space-y-3">
                            <li>✔ Advanced SEO & Paid Advertising</li>
                            <li>✔ Transparent Reporting & Analytics</li>
                            <li>✔ Sustainable Revenue Growth Models</li>
                        </ul>
                    </div>
                </section>

                {/* INTERNAL LINKS */}
                <section className="border-t border-white/10 pt-14">
                    <h3 className="text-2xl font-semibold mb-6">
                        Explore Our Services
                    </h3>

                    <div className="flex flex-wrap gap-8 text-[#C79A3B] text-lg">
                        <Link href="/realty" className="hover:text-white transition">
                            Real Estate Marketing
                        </Link>
                        <Link href="/digital/best-digital-marketing-agency-in-hyderabad" className="hover:text-white transition">
                            Digital Marketing
                        </Link>
                        <Link href="/revenue" className="hover:text-white transition">
                            Revenue Consulting
                        </Link>
                        <Link href="/contact" className="hover:text-white transition">
                            Contact Us
                        </Link>
                    </div>
                </section>
{/* ABOUT SEO CONTENT */}
<section className="space-y-10">

  <h2 className="text-3xl md:text-4xl font-semibold">
    Leading Digital Marketing & Revenue Growth Experts in Hyderabad
  </h2>

  <p className="text-gray-400 text-lg leading-relaxed">
    Epoque Group is a performance-driven digital marketing agency in Hyderabad focused on helping 
    businesses generate qualified leads, increase conversions, and scale revenue through strategic 
    marketing systems. In today’s competitive digital landscape, simply running ads or posting content 
    is not enough. Businesses need structured growth frameworks that combine data, creativity, and 
    execution — and that is exactly what we deliver.
  </p>

  <p className="text-gray-400 text-lg leading-relaxed">
    Our approach is built around measurable results. We do not focus on vanity metrics such as impressions 
    or likes. Instead, we prioritize lead quality, conversion rates, and return on investment. This ensures 
    that every marketing effort contributes directly to your business growth.
  </p>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Our Approach to Digital Growth
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      We believe that sustainable growth comes from a combination of strategy, execution, and optimization. 
      Our team works closely with clients to understand their business model, target audience, and revenue goals.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Based on this understanding, we design customized marketing strategies that include SEO, paid advertising, 
      funnel optimization, and automation systems. This ensures that your business attracts the right audience 
      and converts them into loyal customers.
    </p>
  </div>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Why We Focus on Revenue, Not Just Traffic
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      Many digital marketing agencies focus on increasing website traffic, but traffic alone does not guarantee 
      business success. At Epoque Group, we focus on generating high-intent traffic that converts into leads and sales.
    </p>

    <p className="text-gray-400 leading-relaxed">
      By aligning marketing strategies with business objectives, we ensure that every campaign contributes to 
      measurable growth. This approach allows our clients to achieve consistent and scalable results.
    </p>
  </div>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Expertise in Real Estate Marketing
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      We are recognized as one of the leading real estate marketing agencies in Hyderabad. Our team has extensive 
      experience in launching residential and commercial projects, generating high-quality property leads, 
      and optimizing campaigns for maximum conversions.
    </p>

    <p className="text-gray-400 leading-relaxed">
      From luxury apartments to large-scale developments, we create targeted marketing campaigns that attract 
      serious buyers and investors.
    </p>
  </div>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Data-Driven Marketing Strategy
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      Data is at the core of everything we do. We use advanced analytics tools to track campaign performance, 
      user behavior, and conversion metrics. This allows us to continuously optimize strategies and improve results.
    </p>

    <p className="text-gray-400 leading-relaxed">
      By making informed decisions based on data, we help businesses reduce costs, increase efficiency, 
      and maximize return on investment.
    </p>
  </div>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Long-Term Partnership for Growth
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      We believe in building long-term relationships with our clients. Our goal is not just to deliver 
      short-term results but to create sustainable growth systems that continue to generate value over time.
    </p>

    <p className="text-gray-400 leading-relaxed">
      As your business grows, we scale our strategies to match your evolving needs. This ensures that 
      your marketing efforts remain effective and aligned with your goals.
    </p>
  </div>

  {/* SECTION */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Our Commitment to Excellence
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      At Epoque Group, we are committed to delivering high-quality services that drive real business results. 
      Our team stays updated with the latest industry trends, tools, and technologies to ensure that our clients 
      always stay ahead of the competition.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Whether you are looking to improve your online visibility, generate more leads, or scale your revenue, 
      we have the expertise and experience to help you achieve your goals.
    </p>
  </div>

</section>
                {/* WHY CHOOSE SECTION COMPONENT */}
                <WhyChooseSection />

                {/* FAQ COMPONENT */}
                <AboutFAQSection />

            </div>

            {/* ORGANIZATION SCHEMA */}
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "Epoque Group",
                        url: "https://epoquegroup.in",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Hyderabad",
                            addressRegion: "Telangana",
                            addressCountry: "India",
                        },
                    }),
                }}
            />

        </main>
    )
}