

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function B2BLeadClient() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* HERO */}
            <div className="relative py-32 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[180px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        B2B Lead Generation for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Qualified Business Opportunities
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We generate high-quality B2B leads using LinkedIn outreach,
                        cold email campaigns and conversion-optimized funnels.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Generate More Leads
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "LinkedIn Outreach",
                        desc: "Target decision-makers with personalized outreach."
                    },
                    {
                        title: "Cold Email Campaigns",
                        desc: "High-converting email sequences for qualified prospects."
                    },
                    {
                        title: "Lead Funnels",
                        desc: "Conversion-focused landing pages and automation."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#111111] border border-white/5">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
         
           

            {/* SEO CONTENT SECTION */}

            <section className="max-w-5xl mx-auto px-6 pb-32 space-y-10">

  <h2 className="text-4xl font-semibold text-center">
    B2B Lead Generation Services to Scale Revenue and Build Predictable Growth
  </h2>

  <p className="text-gray-400 leading-relaxed">
    In today’s highly competitive digital landscape, B2B lead generation has become the backbone of sustainable business growth. 
    Companies that rely only on referrals or inconsistent marketing efforts often struggle to maintain a steady flow of opportunities. 
    A structured and data-driven lead generation strategy ensures that your business consistently attracts high-quality prospects 
    and converts them into long-term customers.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Our B2B lead generation services are designed to help organizations build scalable systems that generate qualified leads, 
    improve conversion rates, and maximize return on investment. We combine strategic planning, advanced targeting, 
    and multi-channel execution to create a predictable pipeline of business opportunities.
  </p>

  {/* WHAT IS B2B */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      What is B2B Lead Generation?
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      B2B lead generation is the process of identifying, attracting, and engaging potential business clients who are likely 
      to purchase your products or services. Unlike B2C marketing, which focuses on individual consumers, B2B marketing 
      targets organizations and key decision-makers such as CEOs, managers, and procurement heads.
    </p>

    <p className="text-gray-400 leading-relaxed">
      The goal is not just to generate leads but to ensure those leads are highly relevant and aligned with your ideal 
      customer profile. This increases the chances of conversion and improves overall sales efficiency.
    </p>
  </div>

  {/* IMPORTANCE */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Why B2B Lead Generation is Critical for Growth
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      Without a consistent lead generation system, businesses face unpredictable revenue and slow growth. 
      A strong lead generation strategy ensures that your pipeline remains full and your sales team has 
      continuous opportunities to close deals.
    </p>

    <ul className="list-disc pl-6 text-gray-400 space-y-2">
      <li>Builds a predictable and scalable sales pipeline</li>
      <li>Reduces reliance on referrals and word-of-mouth</li>
      <li>Improves marketing ROI and efficiency</li>
      <li>Enhances customer targeting and segmentation</li>
      <li>Supports long-term business expansion</li>
    </ul>
  </div>

  {/* STRATEGY */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Our Proven B2B Lead Generation Strategy
    </h3>

    <p className="text-gray-400 leading-relaxed mb-6">
      We implement a multi-channel approach that ensures consistent lead flow across different touchpoints. 
      Each strategy is tailored to your industry, audience, and business goals.
    </p>

    <div className="space-y-4 text-gray-400">
      <p><span className="text-white font-medium">LinkedIn Outreach:</span> Connect with decision-makers using personalized messaging.</p>
      <p><span className="text-white font-medium">Cold Email Campaigns:</span> High-converting email sequences designed for engagement.</p>
      <p><span className="text-white font-medium">Paid Advertising:</span> Target high-intent users via Google Ads and LinkedIn Ads.</p>
      <p><span className="text-white font-medium">Landing Pages:</span> Conversion-optimized pages that maximize lead capture.</p>
      <p><span className="text-white font-medium">Automation:</span> CRM integration and workflow automation for scalability.</p>
    </div>
  </div>

  {/* PROCESS */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Our Step-by-Step Lead Generation Process
    </h3>

    <ol className="list-decimal pl-6 text-gray-400 space-y-2">
      <li>Market research and competitor analysis</li>
      <li>Defining ideal customer profiles</li>
      <li>Channel selection and strategy development</li>
      <li>Campaign execution across platforms</li>
      <li>Tracking, analytics, and optimization</li>
      <li>Scaling successful campaigns</li>
    </ol>
  </div>

  {/* INDUSTRIES */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Industries We Serve
    </h3>

    <div className="grid md:grid-cols-2 gap-3 text-gray-400">
      <p>• SaaS & Technology</p>
      <p>• Healthcare & HealthTech</p>
      <p>• FinTech & Financial Services</p>
      <p>• E-commerce</p>
      <p>• Professional Services</p>
      <p>• Startups & Enterprises</p>
    </div>
  </div>

  {/* BENEFITS */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Benefits of Our B2B Lead Generation Services
    </h3>

    <ul className="list-disc pl-6 text-gray-400 space-y-2">
      <li>Consistent pipeline of qualified leads</li>
      <li>Higher conversion rates</li>
      <li>Lower cost per acquisition</li>
      <li>Scalable growth systems</li>
      <li>Improved sales productivity</li>
    </ul>
  </div>

  {/* ADVANCED SEO CONTENT */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Advanced Lead Generation Techniques We Use
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      We leverage advanced techniques such as intent-based targeting, behavioral analytics, and AI-driven 
      personalization to ensure that your campaigns reach the right audience at the right time.
    </p>

    <p className="text-gray-400 leading-relaxed">
      By combining data insights with creative messaging, we create campaigns that not only generate leads 
      but also build trust and authority in your market.
    </p>
  </div>

  {/* LONG FORM EXTRA */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      How We Ensure High-Quality Leads
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      Lead quality is one of the most important factors in B2B marketing. We focus on precision targeting, 
      qualification filters, and continuous optimization to ensure that every lead generated has a high 
      probability of conversion.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Our process includes audience segmentation, message personalization, funnel optimization, and 
      real-time performance tracking.
    </p>
  </div>

  {/* CTA */}
  <div>
    <h3 className="text-2xl font-semibold text-orange-400 mb-4">
      Start Generating High-Quality Leads Today
    </h3>

    <p className="text-gray-400 leading-relaxed mb-4">
      If you are ready to scale your business with a predictable and consistent pipeline, our B2B lead 
      generation services can help. We combine strategy, execution, and optimization to deliver measurable results.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Contact us today to get started and take your business growth to the next level.
    </p>
  </div>
{/* EXTRA SEO CONTENT */}

<div>
  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
    Data-Driven B2B Lead Generation Approach
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    A successful B2B lead generation strategy is built on data, not assumptions. 
    We analyze user behavior, engagement patterns, and historical campaign performance 
    to identify what works best for your target audience. This allows us to continuously 
    refine strategies and improve results over time.
  </p>

  <p className="text-gray-400 leading-relaxed">
    By leveraging analytics and performance metrics, we ensure that every campaign is 
    optimized for maximum efficiency. From click-through rates to conversion tracking, 
    every data point is used to improve lead quality and drive better business outcomes.
  </p>
</div>

<div>
  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
    Multi-Channel Lead Acquisition Strategy
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    Relying on a single marketing channel can limit your growth potential. That’s why 
    we use a multi-channel approach that combines LinkedIn outreach, cold email campaigns, 
    search engine marketing, and paid advertising. This ensures consistent lead flow 
    from multiple sources.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Each channel is strategically aligned to support different stages of the buyer journey, 
    helping your business attract, nurture, and convert prospects effectively.
  </p>
</div>

<div>
  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
    Conversion Optimization for Better Results
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    Generating leads is only the first step. Converting those leads into customers is 
    where real growth happens. We focus on optimizing every element of your funnel, 
    including landing pages, messaging, call-to-actions, and user experience.
  </p>

  <p className="text-gray-400 leading-relaxed">
    Through continuous A/B testing and performance analysis, we identify areas for 
    improvement and implement changes that increase conversion rates and maximize ROI.
  </p>
</div>

<div>
  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
    Scalable Growth Systems for Long-Term Success
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    Our goal is not just to generate short-term results but to build scalable systems 
    that support long-term business growth. We design lead generation frameworks that 
    can be expanded as your business grows.
  </p>

  <p className="text-gray-400 leading-relaxed">
    This includes automation tools, CRM integration, and performance tracking systems 
    that provide real-time insights into your marketing efforts. With the right systems 
    in place, your business can scale efficiently without increasing operational complexity.
  </p>
</div>

<div>
  <h3 className="text-2xl font-semibold text-orange-400 mb-4">
    Why Choose Our B2B Lead Generation Services
  </h3>

  <p className="text-gray-400 leading-relaxed mb-4">
    Choosing the right partner for lead generation can make a significant difference 
    in your business growth. Our team brings expertise, proven strategies, and a 
    results-driven approach to every project.
  </p>

  <p className="text-gray-400 leading-relaxed">
    We focus on delivering measurable outcomes, ensuring that every campaign contributes 
    to your overall revenue goals. With our support, you can build a strong pipeline of 
    qualified leads and achieve consistent growth.
  </p>
</div>
</section>


<div className="max-w-4xl mx-auto px-6 pb-24">
  <h2 className="text-3xl text-center font-semibold mb-12">
    Frequently Asked Questions
  </h2>

  <div className="space-y-5">
    {[
      {
        q: "What is B2B lead generation?",
        a: "B2B lead generation is the process of identifying and attracting potential business clients through targeted outreach, campaigns and structured sales funnels."
      },
      {
        q: "Which platforms work best for B2B leads?",
        a: "LinkedIn, cold email outreach, Google Ads and account-based marketing strategies are highly effective for generating qualified B2B opportunities."
      },
      {
        q: "How long does it take to generate qualified leads?",
        a: "Initial leads can start within a few weeks, but consistent pipeline growth typically builds over 30–60 days of structured campaigns."
      },
      {
        q: "Do you target specific industries?",
        a: "Yes, we create industry-specific targeting strategies based on decision-maker roles, company size, and revenue segments."
      },
      {
        q: "Do you provide CRM integration?",
        a: "Yes, we integrate campaigns with CRM systems to track conversations, lead status, and pipeline performance."
      },
      {
        q: "How do you ensure lead quality?",
        a: "We use qualification filters, intent-based targeting, personalized messaging and funnel optimization to attract high-quality business prospects."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="group relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 
        hover:border-orange-500 transition duration-300 overflow-hidden"
      >
        {/* LEFT GRADIENT LINE */}
        <div className="absolute left-0 top-0 h-full w-1 
        bg-gradient-to-b from-orange-400 to-red-500 opacity-0 
        group-hover:opacity-100 transition duration-300"></div>

        {/* CONTENT */}
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-orange-400 transition">
          {item.q}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {item.a}
        </p>
      </div>
    ))}
  </div>
</div>
            {/* SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "B2B Lead Generation Service",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group Of Companies"
                        }
                    })
                }}
            />

        </section>
    )
}