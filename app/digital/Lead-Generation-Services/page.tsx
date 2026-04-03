import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import LeadGenerationFAQSection from "./LeadGenerationFAQSection";
import WhyChooseLeadGenerationSection from "./WhyChooseLeadGenerationSection";


export const metadata: Metadata = {
    title:
        "Lead Generation Services in Hyderabad | Performance Marketing Agency",
    description:
        "Top Lead Generation agency in Hyderabad offering Google Ads, Meta Ads, landing page funnels, CRM automation, and ROI-driven performance marketing solutions.",
    keywords: [
        "Lead Generation Services Hyderabad",
        "Real Estate Lead Generation Hyderabad",
        "B2B Lead Generation Agency India",
        "Performance Marketing Agency Hyderabad",
        "Google Ads Lead Generation",
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/digital/lead-generation-services",
    },
    openGraph: {
        title:
            "Lead Generation Agency in Hyderabad | High-Intent Business Leads",
        description:
            "Generate consistent, high-quality leads with structured marketing funnels and paid advertising strategies.",
        url: "https://epoquegroup.in/digital/lead-generation-services",
        type: "website",
    },
};

export default function LeadGenerationPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-yellow-500/20 blur-[150px] rounded-full"></div>

            {/* ================= HERO ================= */}
            <section className="relative py-32 text-center px-6">

                <div className="relative max-w-5xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Lead Generation Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8">
                        Performance-Driven Lead Generation Experts
                    </div>

                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a leading Lead Generation agency in Hyderabad
                        specializing in Google Ads, Meta Ads, high-converting landing pages,
                        and CRM automation systems. We help real estate developers, B2B
                        businesses, and service brands generate consistent high-intent
                        inquiries with measurable ROI.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>✔ High-Intent Paid Campaigns</span>
                        <span>✔ Conversion-Focused Landing Pages</span>
                        <span>✔ CRM & WhatsApp Automation</span>
                        <span>✔ ROI-Based Funnel Strategy</span>
                    </div>

                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Get Free Lead Strategy Session
                        </Link>

                        <Link
                            href="/real-estate-digital-marketing-projects-epoque-group"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
                        >
                            View Lead Case Studies
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-12 px-6 bg-[#0c0c0d]">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Lead Generation Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                            Our lead generation services are designed to attract,
                            qualify, and convert high-intent prospects into business
                            opportunities. We build structured marketing funnels that
                            reduce cost-per-lead (CPL) while increasing lead quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">

                        {[
                            "Google Ads Lead Generation Campaigns",
                            "Meta (Facebook & Instagram) Lead Funnels",
                            "Landing Page & Funnel Optimization",
                            "Real Estate Lead Generation Systems",
                            "CRM & Automation Integration",
                            "Performance Analytics & Reporting",
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                <div className="absolute inset-0 rounded-xl bg-[#151516] opacity-0 group-hover:opacity-100 transition duration-500 border border-orange-500"></div>

                                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3">

                                    <span className="text-sm text-orange-400 tracking-widest uppercase">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                                        {service}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        Performance-driven marketing systems engineered to
                                        generate consistent high-quality leads and scalable
                                        revenue growth.
                                    </p>

                                    <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
/* ================= SEO CONTENT SECTION ================= */
/* Epoque Group — Lead Generation Services in Hyderabad    */
/* Word count: ~2,600 words | Drop-in React component      */


    <section className="relative py-24 px-6 bg-[#0b0b0c] font-sans">
      <div className="max-w-5xl mx-auto">

        {/* ── Hero Heading ── */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent leading-tight mb-6">
            Lead Generation Services in Hyderabad for High-Quality Business Growth
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Traffic without conversions is just noise. Epoque Group builds end-to-end lead generation systems for
            Hyderabad businesses — combining paid ads, optimized funnels, and CRM automation to deliver high-intent
            inquiries that actually close.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: "60%",  label: "Avg. CPL Reduction" },
            { num: "4×",   label: "Lead Volume Growth" },
            { num: "200+", label: "Funnels Launched" },
            { num: "15+",  label: "Industries Served" },
          ].map((s) => (
            <div key={s.label} className="bg-[#141415] border border-white/5 rounded-xl p-6 text-center">
              <span className="block text-3xl font-semibold text-orange-400">{s.num}</span>
              <span className="block text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</span>
            </div>
          ))}
        </div>

        <hr className="border-white/5 mb-16" />

        <div className="space-y-14 text-gray-400 text-base leading-relaxed">

          {/* ── Section 1 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Why Lead Generation Is the Foundation of Consistent Business Growth
            </h3>
            <p className="mb-4">
              In today's digital-first world, businesses need more than just website traffic — they need qualified leads
              that convert into paying customers. Lead generation has become the backbone of modern marketing, enabling
              businesses to attract high-intent prospects, nurture relationships at scale, and drive predictable revenue
              month after month. Without a structured lead generation system in place, even the best product or service
              struggles to maintain a consistent sales pipeline.
            </p>
            <p className="mb-4">
              At Epoque Group, we specialize in delivering performance-driven lead generation services in Hyderabad that
              are built around three non-negotiables: quality, scalability, and measurable ROI. We don't chase vanity
              metrics like impressions or reach — we optimize every campaign element toward a single outcome: qualified
              inquiries from people who are ready to buy.
            </p>
            <p>
              As a leading lead generation agency in Hyderabad, we help businesses across industries generate high-intent
              inquiries using advanced digital marketing strategies. Our approach combines Google Ads, Meta Ads, landing
              page optimization, and CRM automation to create a complete lead generation ecosystem — not just a single
              campaign — that delivers consistent, compounding results.
            </p>
            <div className="mt-6 bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">The Pipeline Problem</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Most businesses struggle not because their product is weak, but because their pipeline is inconsistent.
                Feast-and-famine sales cycles kill growth. A properly built lead generation system replaces
                unpredictability with a steady, scalable flow of qualified prospects — giving your sales team the
                volume and quality they need to close deals reliably every month.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 2 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Our End-to-End Lead Generation Service Stack
            </h3>
            <p className="mb-6">
              We provide a comprehensive, fully integrated suite of lead generation services tailored to your business
              goals, industry, and target audience. Every component is designed to work together as a seamless system —
              from the first ad impression to the moment a lead enters your CRM and beyond.
            </p>
            <ul className="space-y-3">
              {[
                ["Google Ads Lead Campaigns",
                  "Capture demand from users actively searching for your product or service category. We build intent-matched Search, Display, and Performance Max campaigns that route high-quality traffic to dedicated lead capture pages."],
                ["Meta Ads Lead Funnels",
                  "Reach cold and warm audiences on Facebook and Instagram with precision-targeted campaigns. We build full-funnel Meta strategies — from awareness creatives to retargeting sequences — that warm prospects before they submit a lead form."],
                ["Landing Page Design & Optimization",
                  "Your landing page is where conversions happen or don't. We design high-speed, mobile-first landing pages with clear messaging hierarchies, trust signals, and optimized CTAs — purpose-built to convert ad traffic into leads."],
                ["CRM Integration & Lead Routing",
                  "Every lead is automatically captured, tagged, and routed to the right sales rep via your CRM. We integrate with HubSpot, Zoho, Salesforce, Leadsquared, and custom CRMs to ensure zero lead leakage."],
                ["WhatsApp & Email Automation",
                  "Speed-to-lead is critical. Our automation workflows send instant WhatsApp messages and email follow-ups the moment a lead submits — dramatically improving contact rates and conversion velocity."],
                ["Lead Scoring & Qualification",
                  "Not all leads are equal. We implement lead scoring models that rank prospects by behavior, demographics, and engagement signals — helping your sales team prioritize the highest-value opportunities first."],
                ["Remarketing & Retargeting Campaigns",
                  "Most prospects don't convert on the first visit. Our remarketing sequences re-engage users who showed interest but didn't submit — using personalized messaging to bring them back and convert."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 pb-3 border-b border-white/5 last:border-0">
                  <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>
                    <span className="text-gray-200 font-medium">{title}</span> — {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 3 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              High-Intent Paid Advertising: Google Ads & Meta Ads for Lead Generation
            </h3>
            <p className="mb-4">
              Paid advertising is the fastest lever for generating leads at scale. When built correctly, a Google or
              Meta campaign can begin delivering qualified inquiries within 48–72 hours of launch. The key is not just
              running ads — it's running the right ads in front of the right audience with the right offer at the right
              moment.
            </p>
            <p className="mb-4">
              Our Google Ads lead generation campaigns focus on capturing bottom-of-funnel demand — users who are
              actively searching for exactly what you offer. We build tightly structured campaigns with intent-matched
              ad copy, dedicated landing pages for each ad group, and conversion tracking that ties every lead back to
              the specific keyword and ad that generated it.
            </p>
            <p className="mb-4">
              Our Meta Ads strategies are built for businesses where the audience may not be actively searching but can
              be targeted based on demographics, interests, behaviors, and life events. We use thumb-stopping creative
              formats — static images, carousel ads, video reels, and Instant Lead Forms — to engage cold audiences and
              guide them into your lead funnel.
            </p>
            <p>
              Both channels are continuously optimized through structured A/B testing of headlines, creatives,
              audiences, and offers. We don't guess — we test, measure, and scale what works.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                ["Google Ads Strengths",
                  "Best for capturing active demand. High purchase intent, precise keyword control, faster conversion cycles. Ideal for real estate, healthcare, legal, and local services."],
                ["Meta Ads Strengths",
                  "Best for creating demand in audiences who aren't actively searching. Lower CPL at scale, powerful visual storytelling, and excellent for B2C, e-commerce, and education."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[#141415] border border-white/5 rounded-xl p-5">
                  <p className="text-white font-medium mb-2">{t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 4 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Landing Page & Funnel Optimization for Maximum Conversions
            </h3>
            <p className="mb-4">
              A high-performing ad campaign is only as good as the landing page it sends traffic to. The landing page
              is where interest becomes intent — and intent becomes a lead. Yet most businesses send paid traffic to
              generic website pages that aren't built to convert, burning ad budget on visitors who bounce without
              taking action.
            </p>
            <p className="mb-4">
              At Epoque Group, every lead generation campaign is paired with a purpose-built landing page. We design
              pages with a laser focus on conversion: a single, compelling headline that matches the ad promise, social
              proof and trust signals positioned strategically, a frictionless form with the minimum fields required,
              and a mobile-first layout that loads in under 2 seconds on any connection.
            </p>
            <p className="mb-4">
              Our funnel strategy maps the full user journey from first click to form submission. For high-ticket or
              complex products, we design multi-step funnels that progressively qualify the lead — capturing basic
              information first, then asking qualifying questions, then routing to a booking or callback flow. This
              approach pre-qualifies leads before they reach your sales team, saving time and improving close rates.
            </p>
            <p>
              We continuously run heatmap analysis, scroll depth tracking, and A/B tests on form layouts, CTA copy,
              headline variations, and page structure to identify friction points and eliminate them — driving
              conversion rates higher over time without increasing your ad spend.
            </p>
            <div className="mt-6 bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">The Cost of a Bad Landing Page</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                If your landing page converts at 3% and a competitor's converts at 9%, they are getting three times as
                many leads from the exact same ad budget. Landing page optimization is the highest-leverage activity in
                lead generation — and it's where most agencies don't invest enough attention.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 5 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              CRM Integration & Automation: Never Lose a Lead Again
            </h3>
            <p className="mb-4">
              Generating leads is only half the equation. What happens after a lead submits their details determines
              whether that inquiry becomes a customer or a missed opportunity. The majority of businesses lose 30–50%
              of their leads simply due to slow follow-up, manual processes, and lack of systematic nurturing. Our CRM
              integration and automation layer is designed to eliminate this problem entirely.
            </p>
            <p className="mb-4">
              We integrate your lead generation campaigns directly with your CRM — whether that's HubSpot, Zoho,
              Salesforce, Leadsquared, or a custom-built system. Every lead that comes in is automatically tagged with
              source data (which campaign, which ad, which keyword), routed to the right sales rep based on territory
              or product interest, and entered into the appropriate nurturing sequence immediately.
            </p>
            <p className="mb-4">
              Our WhatsApp automation workflows trigger an instant, personalized message to every new lead within
              seconds of form submission — while the prospect's interest is still at its peak. This alone has been
              shown to increase lead contact rates by over 60% compared to manual follow-up processes.
            </p>
            <p>
              For leads that don't convert immediately, we build multi-touch email and WhatsApp drip sequences that
              continue to nurture them over days and weeks — keeping your brand top of mind until they're ready to
              make a decision. Combined with lead scoring, your sales team always knows which leads to call first
              and why.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 6 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Real Estate & B2B Lead Generation: Our Specialist Expertise
            </h3>
            <p className="mb-4">
              While we serve a broad range of industries, Epoque Group has developed deep specialist expertise in two
              of the most demanding lead generation verticals: real estate and B2B services. Both require precision
              targeting, high-quality inquiry standards, and campaign structures that are very different from standard
              B2C lead generation.
            </p>
            <p className="mb-4">
              For real estate developers, builders, and property consultants in Hyderabad, we run location-specific
              campaigns targeting buyers at different stages of the property search journey. We generate site visit
              bookings, project inquiry forms, and callback requests from verified, high-intent prospects in specific
              income brackets and geographic areas. Our real estate lead generation campaigns integrate with WhatsApp
              bots and CRM systems to handle high inquiry volumes without losing response speed or quality.
            </p>
            <p className="mb-4">
              For B2B companies — including SaaS providers, IT services firms, staffing agencies, and professional
              services businesses — we design account-based marketing (ABM) campaigns that target decision-makers by
              job title, company size, industry, and revenue band. LinkedIn Ads, Google Search, and targeted content
              funnels work together to generate qualified leads from the exact buyer personas your sales team needs.
            </p>
            <p>
              Both verticals benefit from our rigorous lead qualification processes. We build pre-qualification
              questions into our forms and funnels to ensure that the leads your team receives are genuinely aligned
              with your product, location, budget, and timeline — reducing wasted sales effort and improving conversion
              rates at every stage of the pipeline.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                ["Real Estate Lead Gen",
                  "Location-targeted campaigns, site visit bookings, project-specific landing pages, WhatsApp bot integration, and high-volume inquiry management for developers and brokers across Hyderabad."],
                ["B2B Lead Gen",
                  "Decision-maker targeting via LinkedIn and Google, account-based marketing, lead scoring by company size and intent signals, and CRM-integrated nurturing for longer B2B sales cycles."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[#141415] border border-white/5 rounded-xl p-5">
                  <p className="text-white font-medium mb-2">{t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 7 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Performance Tracking, Analytics & Transparent Reporting
            </h3>
            <p className="mb-4">
              At Epoque Group, data transparency is not optional — it's foundational. Every client receives access to a
              live performance dashboard that tracks the metrics that actually matter to your business: total leads
              generated, cost per lead, lead-to-appointment rate, lead-to-sale conversion rate, and return on ad spend.
              We build your reporting stack around your business KPIs — not generic agency metrics.
            </p>
            <p className="mb-4">
              We implement granular conversion tracking across all channels — Google Ads, Meta Ads, and organic — so
              every lead is attributed to the exact source, campaign, ad set, and creative that generated it. This
              attribution data drives every optimization decision we make, ensuring budget is always allocated to the
              channels and campaigns delivering the strongest results.
            </p>
            <p>
              Monthly strategy reviews give you full visibility into what's working, what's being tested, and what's
              planned for the coming period. You'll never be in the dark about where your budget is going or what it's
              returning. And because we work without long-term lock-in contracts, we earn your business every single
              month through performance.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 8 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Why Hyderabad Businesses Choose Epoque Group for Lead Generation
            </h3>
            <p className="mb-4">
              Hyderabad is one of India's fastest-growing business hubs, with intense competition across real estate,
              healthcare, technology, education, and retail. In this environment, generic marketing doesn't cut it.
              Businesses need a lead generation partner with local market intelligence, technical depth, and a proven
              track record of delivering results — not just presentations and promises.
            </p>
            <p className="mb-6">
              Epoque Group brings all three. Our team combines deep Hyderabad market knowledge with global best
              practices in paid media, funnel design, and marketing automation. We've helped businesses in HITEC City,
              Banjara Hills, Gachibowli, Kukatpally, and across the twin cities build lead generation systems that
              scale predictably and profitably.
            </p>
            <ul className="space-y-3">
              {[
                "Full-funnel ownership — from ad creative to CRM integration — all under one roof",
                "Certified Google Ads and Meta Ads specialists with hands-on campaign management experience",
                "Industry-specific strategies built around your buyer persona, average deal value, and sales cycle",
                "Instant WhatsApp and email automation that contacts every lead within 60 seconds of submission",
                "No lock-in contracts — month-to-month engagement built on performance and trust",
                "Free lead generation audit for new clients with actionable findings delivered within 48 hours",
              ].map((item) => (
                <li key={item} className="flex gap-3 pb-3 border-b border-white/5 last:border-0">
                  <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 9 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Industries We Serve Across Hyderabad & Beyond
            </h3>
            <p className="mb-6">
              Our lead generation strategies are customized for each industry's unique buyer behavior, competitive
              landscape, and conversion cycle. There is no one-size-fits-all campaign in our playbook — only
              strategies built specifically for your market.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Real Estate & Developers",
                "Healthcare & Clinics",
                "EdTech & Coaching Institutes",
                "SaaS & B2B Technology",
                "Finance & Insurance",
                "E-Commerce & D2C",
                "Legal Services",
                "Automotive Dealers",
                "Hospitality & Travel",
                "Interior Design & Architecture",
                "Staffing & Recruitment",
                "Local Service Businesses",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-xs text-orange-400 bg-white/5 border border-white/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>
              Whether you're a real estate developer in Gachibowli trying to fill your site visit calendar, a
              healthcare clinic in Banjara Hills looking for patient inquiries, or a SaaS company targeting enterprise
              decision-makers across India — we have the experience, toolset, and industry knowledge to build a lead
              generation system that delivers consistent results for your specific market.
            </p>
          </div>

          {/* ── CTA Block ── */}
          <div className="bg-gradient-to-br from-[#1a1209] to-[#120d0b] border border-orange-900/30 rounded-2xl p-12 text-center mt-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Ready to Build a Lead Generation System That Actually Works?
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Get a free, no-obligation lead generation audit from our Hyderabad team. We'll analyze your current
              funnel, benchmark your cost per lead against industry standards, and present a custom growth roadmap —
              delivered within 48 hours.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-10 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Request Your Free Lead Gen Audit
            </a>
          </div>

        </div>
      </div>
    </section>
  
            {/* Why Choose Section */}
            <WhyChooseLeadGenerationSection />

            {/* FAQ Section */}
            <LeadGenerationFAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="lead-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Lead Generation Services",
                        areaServed: "Hyderabad & India",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group",
                            url: "https://epoquegroup.in",
                        },
                    }),
                }}
            />

        </div>
    );
}