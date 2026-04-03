import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import GoogleAdsFAQSection from "./GoogleAdsFAQSection";
import WhyChooseGoogleAdsSection from "./WhyChooseGoogleAdsSection";

export const metadata: Metadata = {
    title:
        "Google Ads & PPC Services in Hyderabad | Certified PPC Agency",
    description:
        "Performance-driven Google Ads agency in Hyderabad offering PPC management, search ads, display campaigns, YouTube ads, and ROI-focused paid advertising solutions.",
    keywords: [
        "Google Ads Services Hyderabad",
        "PPC Agency Hyderabad",
        "Google Ads Management India",
        "Pay Per Click Advertising Hyderabad",
        "Search Ads Agency Hyderabad",
    ],
    alternates: {
        canonical:
            "https://epoquegroup.in/digital/google-ads-ppc",
    },
    openGraph: {
        title:
            "Google Ads & PPC Agency in Hyderabad | High-ROI Campaigns",
        description:
            "Scale your business with performance-driven Google Ads and PPC campaigns.",
        url: "https://epoquegroup.in/digital/google-ads-ppc",
        type: "website",
    },
};

export default function GoogleAdsPage() {
    return (
        <div className="relative bg-black text-white overflow-hidden">

            {/* FULL PAGE PREMIUM ORANGE GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-red-500/10 pointer-events-none"></div>

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-red-500/20 blur-[150px] rounded-full"></div>

            {/* ================= HERO ================= */}
            <section className="relative py-32 text-center px-6">

                <div className="relative max-w-5xl mx-auto">

                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                        Google Ads & PPC Agency in{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Hyderabad & Across India
                        </span>
                    </h1>

                    <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400/40 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8 backdrop-blur">
                        ROI-Focused Pay Per Click Advertising Experts
                    </div>

                    <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Epoque Group is a leading Google Ads agency in Hyderabad
                        specializing in high-converting search campaigns, display ads,
                        YouTube advertising, and performance-driven PPC strategies.
                        We help businesses generate instant traffic, qualified leads,
                        and measurable ROI through data-backed paid advertising systems.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                        <span>✔ Search & Display Ads</span>
                        <span>✔ YouTube Advertising</span>
                        <span>✔ Conversion Tracking Setup</span>
                        <span>✔ ROI & ROAS Optimization</span>
                    </div>

                    <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-2xl"
                        >
                            Get Free PPC Audit
                        </Link>

                        <Link
                            href="/real-estate-digital-marketing-projects-epoque-group"
                            className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
                        >
                            View PPC Case Studies
                        </Link>

                    </div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-4 px-6 bg-gradient-to-b from-[#0c0c0d] to-[#101114]">

                <div className="max-w-7xl mx-auto">

                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Google Ads & PPC Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
                            Our PPC services are designed to generate immediate visibility,
                            high-intent traffic, and measurable conversions. We build
                            structured paid advertising campaigns focused on reducing
                            cost-per-click (CPC) while maximizing return on ad spend (ROAS).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">

                        {[
                            "Google Search Ads Management",
                            "Display & Remarketing Campaigns",
                            "YouTube Video Advertising",
                            "Shopping & Performance Max Campaigns",
                            "Conversion Tracking & Analytics Setup",
                            "ROAS & Campaign Optimization",
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition duration-500 border border-orange-500/30"></div>

                                <div className="relative p-10 transition duration-500 group-hover:-translate-y-3 bg-[#121212] rounded-xl border border-white/5">

                                    <span className="text-sm text-orange-400 tracking-widest uppercase">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl font-medium mt-6 mb-6 group-hover:text-orange-400 transition">
                                        {service}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-base">
                                        High-performance PPC strategies engineered to increase
                                        qualified traffic, reduce ad waste, and deliver
                                        measurable business growth.
                                    </p>

                                    <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
/* ================= SEO CONTENT SECTION ================= */
/* Epoque Group — Google Ads & PPC Services in Hyderabad   */
/* Word count: ~2,400 words | Drop-in React component       */

    <section className="relative py-24 px-6 bg-[#0b0b0c] font-sans">
      <div className="max-w-5xl mx-auto">

        {/* ── Hero Heading ── */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent leading-tight mb-6">
            Best Google Ads & PPC Services in Hyderabad for High ROI Growth
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            In today's hyper-competitive digital landscape, every rupee of ad spend must deliver measurable returns.
            Epoque Group helps Hyderabad businesses scale fast with precision-targeted, data-driven Google Ads campaigns —
            built to convert, not just click.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: "3.5×", label: "Avg. ROAS Delivered" },
            { num: "98%", label: "Client Retention Rate" },
            { num: "150+", label: "Campaigns Managed" },
            { num: "12+", label: "Industries Served" },
          ].map((s) => (
            <div key={s.label} className="bg-[#141415] border border-white/5 rounded-xl p-6 text-center">
              <span className="block text-3xl font-semibold text-orange-400">{s.num}</span>
              <span className="block text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</span>
            </div>
          ))}
        </div>

        <hr className="border-white/5 mb-16" />

        {/* ── Body Content ── */}
        <div className="space-y-14 text-gray-400 text-base leading-relaxed">

          {/* Section 1 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Why Google Ads Is the Fastest Path to Qualified Leads
            </h3>
            <p className="mb-4">
              Unlike organic SEO — which can take 6–12 months to build traction — Google Ads delivers instant, measurable
              visibility at the exact moment your audience is searching for what you offer. For businesses in Hyderabad
              competing in fast-moving sectors like real estate, healthcare, and SaaS, speed-to-visibility is not just an
              advantage; it's a necessity.
            </p>
            <p className="mb-4">
              Google Ads operates on a pay-per-click (PPC) model, meaning you only pay when a real user clicks your ad.
              With precise audience controls, keyword targeting, and bidding strategies, you can reach high-intent buyers
              efficiently — whether they're searching on desktop in Banjara Hills or browsing YouTube from Gachibowli.
            </p>
            <p>
              At Epoque Group, our Google Ads specialists in Hyderabad go beyond basic campaign setup. We build systems —
              not just ads — to ensure your investment compounds into sustainable pipeline growth over time.
            </p>
            {/* Callout box */}
            <div className="mt-6 bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">The Epoque Difference</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Most agencies launch your campaign and call it done. We treat every campaign as a growth experiment —
                iterating on keywords, bids, ad copy, and landing pages every week to push performance forward. Our clients
                don't just see results in the first month; they see improving results every month.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Section 2 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Our Google Ads & PPC Service Stack
            </h3>
            <p className="mb-6">
              We offer a full-spectrum PPC management service designed to handle everything from initial strategy and
              account setup to ongoing optimization and transparent reporting. Here's what's included when you partner with
              Epoque Group:
            </p>
            <ul className="space-y-3">
              {[
                ["Google Search Ads", "Capture demand from users actively searching for your products or services. We build tightly themed ad groups with strong Quality Scores to lower your cost-per-click and boost ad rank."],
                ["Google Display Network Campaigns", "Build brand awareness across 35 lakh+ websites in Google's display ecosystem. We use custom intent audiences and contextual targeting to reach the right users at the right moment."],
                ["YouTube Video Ads", "Engage audiences with compelling video content before they watch, browse, or search. Ideal for brand storytelling, product demos, and remarketing sequences."],
                ["Google Shopping Ads", "For e-commerce businesses, Shopping ads display your products directly in search results with pricing, images, and reviews — driving high-purchase-intent traffic straight to product pages."],
                ["Performance Max Campaigns", "Leverage Google's AI-powered, goal-based campaigns to serve ads across all Google channels simultaneously, using your creative assets and conversion goals to maximize output."],
                ["Remarketing & RLSA Campaigns", "Re-engage users who visited your site but didn't convert. Remarketing keeps your brand top-of-mind and significantly improves conversion rates at lower acquisition costs."],
                ["Local Service Ads", "For location-based businesses in Hyderabad, Local Service Ads appear at the very top of Google Search results, generating verified phone calls and messages from nearby customers."],
              ].map(([title, desc]) => (
                <li key={title} className="flex gap-3 pb-3 border-b border-white/5 last:border-0">
                  <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span><span className="text-gray-200 font-medium">{title}</span> — {desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-white/5" />

          {/* Section 3 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Keyword Research & Competitive Targeting Strategy
            </h3>
            <p className="mb-4">
              The foundation of any high-performing PPC campaign is a bulletproof keyword strategy. Our team conducts deep,
              industry-specific keyword research to identify the search terms that drive qualified traffic — not just volume.
              We evaluate keyword intent, competition level, cost-per-click trends, and seasonal demand patterns before
              allocating a single rupee of your budget.
            </p>
            <p className="mb-4">
              We segment keywords into three intent tiers: awareness keywords for upper-funnel branding, consideration
              keywords for mid-funnel nurturing, and transactional keywords for bottom-funnel conversions. Each tier is
              managed with different bidding strategies and ad messaging tailored to where the user is in their buying
              journey.
            </p>
            <p>
              Equally critical is our negative keyword strategy. We continuously build and refine a negative keyword list
              to prevent your ads from appearing on irrelevant searches — protecting your budget from wasted clicks and
              inflating your conversion rate efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                ["Keyword Mapping Framework", "Every keyword is mapped to a dedicated ad group, matched ad copy, and a conversion-optimized landing page — creating a continuous, relevant thread from search query to conversion."],
                ["Competitor Analysis", "We analyze competitor ad strategies using auction insights and third-party tools to identify gaps, underserved keywords, and positioning opportunities you can exploit."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[#141415] border border-white/5 rounded-xl p-5">
                  <p className="text-white font-medium mb-2">{t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Section 4 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Conversion-Focused Ad Copy & Creative Testing
            </h3>
            <p className="mb-4">
              A high-intent keyword means nothing without ad copy that earns the click. Our copywriters craft ad headlines
              and descriptions that speak directly to user pain points, highlight your unique value proposition, and include
              a clear, urgent call-to-action — all within Google's character limits.
            </p>
            <p className="mb-4">
              We use Responsive Search Ads (RSAs) to provide Google's AI with multiple headline and description variants,
              allowing the algorithm to learn and serve the highest-performing combinations for each query and audience
              segment. This dynamic approach results in consistently higher click-through rates than static ad copies.
            </p>
            <p>
              For display and video campaigns, our design team produces thumb-stopping creatives that align with your brand
              identity while driving measurable engagement. We run structured A/B tests on visuals, messaging angles, and
              CTA styles to continuously raise the performance ceiling.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Section 5 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Landing Page Optimization & Conversion Rate Improvement
            </h3>
            <p className="mb-4">
              The most common reason Google Ads campaigns underperform is not the ads themselves — it's the landing page.
              A user who clicks your ad has expressed high intent. If your landing page fails to convert that intent into
              action within the first few seconds, the ad spend is wasted. Epoque Group addresses this with a rigorous
              conversion rate optimization (CRO) process.
            </p>
            <p className="mb-4">
              We analyze user behavior through heatmaps, session recordings, and funnel analytics to identify where
              visitors drop off. We then implement targeted improvements: tightening page load speed, restructuring the
              content hierarchy, strengthening CTA placement and messaging, simplifying form fields, and ensuring mobile
              responsiveness across all devices.
            </p>
            <p className="mb-6">
              Our landing pages are built on the principle of message match — every page mirrors the keyword, audience, and
              promise of the ad that brought the visitor there. This continuity dramatically reduces bounce rates and
              increases conversion rates.
            </p>
            <div className="bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">CRO by the Numbers</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                A 1% improvement in conversion rate on a campaign spending ₹1,00,000/month can generate 10–15 additional
                leads at zero extra cost. Across a year, compounding CRO improvements can double your effective lead volume
                without increasing your ad budget.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* Section 6 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Advanced Bid Management & ROAS Optimization
            </h3>
            <p className="mb-4">
              PPC is not a set-and-forget channel. Auction dynamics, competitor bids, Quality Scores, and audience behavior
              shift constantly. Our team performs weekly performance reviews and acts on data signals in real time to keep
              your campaigns running at peak efficiency.
            </p>
            <p className="mb-4">
              We implement smart bidding strategies — including Target CPA, Target ROAS, and Maximize Conversions —
              informed by robust conversion tracking data. These automated strategies are powerful, but they require clean,
              accurate data inputs to function correctly. We ensure your conversion tracking, Google Analytics 4
              integration, and CRM connections are correctly configured before enabling any smart bidding.
            </p>
            <p>
              We also monitor and improve Ad Quality Scores across all campaigns. A higher Quality Score reduces your
              cost-per-click and improves ad placement — giving you more impressions and clicks for the same budget. Our
              structured account architecture — tight ad groups, relevant ad copy, and optimized landing pages — naturally
              drives Quality Scores upward.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Section 7 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Transparent Reporting & Performance Accountability
            </h3>
            <p className="mb-4">
              Every client at Epoque Group receives access to a real-time performance dashboard and a detailed monthly
              report covering all key metrics: impressions, clicks, click-through rate, conversion volume, cost per
              conversion, and return on ad spend. We don't hide behind vanity metrics — our reports are built around the
              numbers that actually move your business forward.
            </p>
            <p>
              We schedule regular strategy calls to review campaign performance, discuss market changes, and align upcoming
              optimizations with your evolving business goals. You'll always know exactly where your budget is going and
              what it's returning.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Section 8 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Industries We Serve in Hyderabad & Beyond
            </h3>
            <p className="mb-6">
              Our PPC expertise spans a wide range of high-growth industries, each with unique audience behaviors and
              competitive dynamics. We bring sector-specific knowledge to every campaign — not generic templates.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Real Estate", "Healthcare & Clinics", "E-Commerce", "EdTech & Coaching",
                "SaaS & B2B Tech", "Finance & Insurance", "Local Services", "Restaurants & F&B",
                "Retail & D2C", "Legal Services", "Automotive", "Hospitality & Travel",
              ].map((tag) => (
                <span key={tag} className="px-4 py-1.5 text-xs text-orange-400 bg-white/5 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <p>
              For each industry, we develop bespoke campaign structures based on buyer intent cycles, average deal values,
              competitive bidding landscapes, and regulatory considerations. A real estate developer in Hyderabad needs a
              very different PPC approach than a D2C skincare brand — and we build campaigns accordingly.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Section 9 */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Why Hyderabad Businesses Choose Epoque Group
            </h3>
            <p className="mb-4">
              Hyderabad's business environment is evolving rapidly — from the tech corridors of HITEC City and Madhapur to
              the emerging retail clusters of Kukatpally and Miyapur. As digital adoption accelerates, competition for
              online attention is intensifying. Businesses that invest in high-performance PPC now will build compounding
              advantages over competitors still relying on organic-only strategies.
            </p>
            <p className="mb-6">
              Epoque Group is not a generic digital marketing agency. We are a performance-first PPC team with deep roots
              in Hyderabad's business ecosystem. Our certified Google Ads professionals combine local market intelligence
              with global best practices to build campaigns that are both contextually relevant and technically superior.
            </p>
            <ul className="space-y-3">
              {[
                "Google Ads Certified team with hands-on experience across 150+ campaigns",
                "Industry-specific strategies built around your buyer persona and conversion funnel",
                "No long-term lock-in contracts — we earn your business every month with results",
                "Dedicated account manager with direct communication and full transparency",
                "In-house copywriting, design, and CRO — all under one roof",
                "Free PPC audit for new clients with actionable findings and zero obligation",
              ].map((item) => (
                <li key={item} className="flex gap-3 pb-3 border-b border-white/5 last:border-0">
                  <span className="mt-2 w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── CTA Block ── */}
          <div className="bg-gradient-to-br from-[#1a1209] to-[#120d0b] border border-orange-900/30 rounded-2xl p-12 text-center mt-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Ready to Turn Ad Spend Into Measurable Revenue?
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Get a free, no-obligation PPC audit from our Hyderabad team. We'll analyze your current campaigns,
              benchmark against competitors, and present a custom growth roadmap — within 48 hours.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-10 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Request Your Free PPC Audit
            </a>
          </div>

        </div>
      </div>
    </section>
  
            <WhyChooseGoogleAdsSection />

            <GoogleAdsFAQSection />

            {/* SERVICE SCHEMA */}
            <Script
                id="ppc-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Google Ads & PPC Services",
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