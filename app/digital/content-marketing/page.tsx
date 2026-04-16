import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import ContentMarketingFAQSection from "./ContentMarketingFAQSection";
import WhyChooseContentMarketingSection from "./WhyChooseContentMarketingSection";
 

export const metadata: Metadata = {
  title:
    "Content Marketing Services in Hyderabad | SEO Content Marketing Agency",
  description:
    "Leading content marketing agency in Hyderabad offering SEO content writing, blog marketing, website copywriting, and organic lead generation strategies.",
  keywords: [
    "Content Marketing Services Hyderabad",
    "SEO Content Writing Hyderabad",
    "Blog Writing Services India",
    "Website Content Development Hyderabad",
    "Content Marketing Agency India",
  ],
  alternates: {
    canonical: "https://epoquegroup.in/digital/content-marketing",
  },
  openGraph: {
    title:
      "Content Marketing Agency in Hyderabad | SEO Content Experts",
    description:
      "Grow organic traffic and brand authority with performance-driven content marketing strategies.",
    url: "https://epoquegroup.in/digital/content-marketing",
    type: "website",
  },
};

export default function ContentMarketingPage() {
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
            Content Marketing Agency in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Hyderabad & Across India
            </span>
          </h1>

          <div className="inline-block px-6 py-4 mt-6 rounded-full border border-orange-400/40 bg-white/5 text-[18px] text-gray-300 tracking-wide mb-8 backdrop-blur">
            SEO-Focused Content That Builds Authority & Leads
          </div>

          <p className="mt-4 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Epoque Group is a leading content marketing agency in Hyderabad
            specializing in SEO content writing, blog marketing, website copywriting,
            and long-term organic growth strategies that generate qualified leads
            and increase brand visibility.
          </p>

          <div className="mt-14 flex flex-col md:flex-row justify-center gap-6">

            <Link
              href="/contact"
              className="px-10 py-4 rounded-full font-semibold
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              text-black hover:scale-105 transition duration-300 shadow-2xl"
            >
              Get Free Content Strategy
            </Link>

            <Link
              href="/real-estate-digital-marketing-projects-epoque-group"
              className="px-10 py-4 rounded-full font-semibold border border-white/20
              hover:border-orange-400 hover:text-orange-400
              transition duration-300"
            >
              View Case Studies
            </Link>

          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative py-12 px-6 bg-gradient-to-b from-[#0c0c0d] to-[#101114]">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Content Marketing Services in Hyderabad
            </h2>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed">
              Our content marketing services are designed to increase organic
              rankings, build domain authority, and convert traffic into
              measurable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">

            {[
              "SEO Blog Writing & Keyword Strategy",
              "Website & Landing Page Copywriting",
              "Authority & Thought Leadership Content",
              "Email Marketing Content Funnels",
              "Content Strategy & Editorial Planning",
              "Content Optimization & Performance Reporting",
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
                    Structured SEO-driven content strategies engineered to improve
                    search visibility, audience engagement, and inbound lead generation.
                  </p>

                  <div className="mt-8 h-[3px] w-12 bg-orange-400 group-hover:w-full transition-all duration-500"></div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>



    <section className="relative py-24 px-6 bg-[#0b0b0c] font-sans">
      <div className="max-w-5xl mx-auto">

        {/* ── Hero Heading ── */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent leading-tight mb-6">
            Content Marketing Services in Hyderabad for Organic Growth & Authority
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Paid ads stop the moment you pause your budget. Content compounds. Epoque Group builds strategic,
            SEO-driven content systems for Hyderabad businesses that attract organic traffic, build lasting authority,
            and generate inbound leads — month after month, without recurring ad spend.
          </p>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { num: "3×",   label: "Avg. Organic Traffic Growth" },
            { num: "85%",  label: "Content Retention Rate" },
            { num: "500+", label: "Articles Published" },
            { num: "12+",  label: "Industries Served" },
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
              Why Content Marketing Is the Most Durable Investment in Digital Growth
            </h3>
            <p className="mb-4">
              In the modern digital landscape, content is the foundation of every successful online marketing strategy.
              Businesses that invest in high-quality, SEO-driven content consistently outperform competitors by
              attracting organic traffic, building trust with their audience, and converting visitors into customers —
              without paying for every single click. Content marketing is not just about writing blogs. It is about
              building a strategic system that delivers compounding returns over time and creates sustainable, long-term
              visibility that no algorithm update can fully erase.
            </p>
            <p className="mb-4">
              The difference between businesses that grow organically and those that remain invisible online is almost
              always content. Google rewards websites that consistently publish authoritative, well-structured, and
              genuinely useful content with higher rankings, more impressions, and steadily increasing organic traffic.
              Businesses that neglect content marketing surrender those rankings — and that traffic — to competitors
              who are willing to invest.
            </p>
            <p>
              At Epoque Group, we provide advanced content marketing services in Hyderabad designed to help businesses
              rank higher on search engines, build brand authority, and generate consistent inbound leads. Our approach
              is rooted in data-driven keyword research, strategic content architecture, and high-quality writing that
              satisfies both search engine algorithms and the real human beings searching for what you offer.
            </p>
            <div className="mt-6 bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">Content vs. Paid Ads: The Long Game</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                A Google Ad delivers traffic only while your budget runs. A well-optimized blog post published today
                can rank on page one and generate qualified leads every single day for the next five years — at zero
                additional cost. Over time, a content library becomes one of the most valuable assets a business owns.
                We help you build that asset systematically.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 2 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Our Full-Spectrum Content Marketing Service Stack
            </h3>
            <p className="mb-6">
              We offer a complete range of content marketing services in Hyderabad — from strategy and keyword research
              to writing, publishing, optimization, and performance tracking. Every service is designed to integrate
              with your broader digital marketing efforts and contribute to measurable business outcomes.
            </p>
            <ul className="space-y-3">
              {[
                ["SEO Blog Writing & Long-Form Articles",
                  "Deeply researched, keyword-optimized blog posts and long-form articles that target high-value search queries, answer user intent precisely, and build topical authority across your niche."],
                ["Website Copywriting",
                  "Homepage, about, services, and product page copy that communicates your value proposition clearly, aligns with your brand voice, and is structured to improve both search rankings and conversion rates."],
                ["Landing Page Content",
                  "Conversion-focused copy for campaign landing pages, lead capture pages, and product launch pages — written to drive a single, specific action from highly targeted traffic."],
                ["Thought Leadership & Authority Articles",
                  "In-depth industry analysis, expert opinion pieces, and strategic content that positions your brand as a credible authority — earning backlinks, media mentions, and audience trust over time."],
                ["Email Marketing Content",
                  "Nurture sequences, newsletters, and promotional campaigns written to engage your existing audience, re-activate cold contacts, and drive repeat conversions across the customer lifecycle."],
                ["Content Strategy & Editorial Planning",
                  "A documented content strategy covering your keyword universe, topic clusters, content calendar, publishing cadence, and internal linking architecture — the blueprint your content program runs on."],
                ["Content Optimization & Refresh",
                  "Systematic auditing and updating of your existing content to recover lost rankings, improve on-page SEO signals, update outdated information, and unlock traffic from underperforming pages."],
                ["Social Media Content",
                  "Platform-native content for LinkedIn, Instagram, and Twitter/X that extends your content marketing reach, builds community, and drives traffic back to your core website content."],
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
              SEO Blog Writing & Keyword Strategy: The Engine of Organic Growth
            </h3>
            <p className="mb-4">
              Blogging remains one of the single most effective ways to improve search engine rankings, attract
              qualified organic traffic, and establish domain authority — when done correctly. The operative phrase
              is "when done correctly." Publishing content without a keyword strategy, without proper structure, and
              without genuine depth does not move the needle. It simply adds pages to your site that Google ignores.
            </p>
            <p className="mb-4">
              Our content team begins every engagement with a thorough keyword research process. We identify the search
              terms your target audience is actively using at different stages of the buying journey — from
              informational queries at the awareness stage to high-intent transactional searches immediately before a
              purchase decision. We then map these keywords to a topic cluster architecture, grouping related terms
              around pillar pages that signal deep topical expertise to Google's algorithms.
            </p>
            <p className="mb-4">
              Every blog post we produce is built on this foundation. We research competitor content, identify gaps
              and opportunities, and create articles that are genuinely more comprehensive, more useful, and better
              structured than anything currently ranking for the target keyword. Each piece includes strategic
              placement of primary and secondary keywords, optimized heading structures, schema markup
              recommendations, internal linking to relevant pages, and a clear call to action that moves readers
              further into your conversion funnel.
            </p>
            <p>
              We write for humans first and search engines second — because Google's algorithms have become
              sophisticated enough to reward exactly that approach. Content that genuinely serves the reader,
              answers their questions thoroughly, and provides unique insight consistently outranks thin, keyword-stuffed
              content that was written for bots rather than people.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 4 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Website & Landing Page Copywriting That Converts
            </h3>
            <p className="mb-4">
              Your website is your most important digital asset. It is where potential customers form their first
              impression of your brand, evaluate whether you can solve their problem, and decide whether to reach out
              or move on to a competitor. The copy on your website — every headline, every paragraph, every CTA —
              either builds trust and moves visitors toward conversion, or creates friction and pushes them away.
            </p>
            <p className="mb-4">
              Most business websites are written from the inside out: they talk about the company, its history, its
              features, and its processes. Effective website copy is written from the outside in — it starts with the
              customer's problem, speaks directly to their pain points and goals, and presents your offering as the
              clear solution. This shift in perspective alone can dramatically improve engagement and conversion rates.
            </p>
            <p className="mb-4">
              Our website copywriting service covers every page of your site: the homepage that makes the first
              impression, the services pages that communicate your expertise, the about page that builds trust, and
              the contact page that closes the loop. For product and e-commerce businesses, we write product
              descriptions that balance SEO optimization with persuasive selling copy — driving both rankings and
              purchases.
            </p>
            <p>
              For campaign-specific landing pages, our copy is laser-focused on a single action. We strip away
              distractions, lead with the most compelling benefit, use social proof and trust signals strategically,
              and close with a CTA that is impossible to ignore. Every word on a landing page earns its place or gets
              cut.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {[
                ["SEO-Optimized Copy",
                  "Every page is written with target keywords integrated naturally — improving rankings without sacrificing readability or the persuasive flow that drives conversions."],
                ["Conversion-Focused Structure",
                  "Headlines, subheadings, bullet points, and CTAs are placed strategically to guide readers through the page and toward the desired action with minimal friction."],
              ].map(([t, d]) => (
                <div key={t} className="bg-[#141415] border border-white/5 rounded-xl p-5">
                  <p className="text-white font-medium mb-2">{t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 5 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Authority & Thought Leadership Content: Building Trust at Scale
            </h3>
            <p className="mb-4">
              In competitive markets, ranking on page one is not enough on its own. Prospects who find your content
              need to trust your expertise before they'll hand over their contact details or their money. Thought
              leadership content is how you build that trust at scale — positioning your brand not just as a vendor,
              but as the go-to authority in your space.
            </p>
            <p className="mb-4">
              Thought leadership takes many forms: in-depth industry reports, data-driven analysis pieces, expert
              commentary on emerging trends, comprehensive guides that become the definitive resource on a topic, and
              opinion pieces that demonstrate a genuine, differentiated point of view. All of these serve a dual
              purpose — they build credibility with your audience and they attract high-quality backlinks from other
              websites, which is one of the most powerful signals for improving domain authority and search rankings.
            </p>
            <p className="mb-4">
              Our content team works closely with your subject matter experts to extract genuine insight and present
              it in formats that resonate with both search engines and your target audience. We don't produce generic,
              surface-level content that says nothing new. We dig into the nuances of your industry, your clients'
              real challenges, and your unique perspective — and we turn that into content that stands out in an
              increasingly crowded digital landscape.
            </p>
            <p>
              Over time, a library of authoritative thought leadership content becomes a self-reinforcing asset.
              It attracts backlinks that improve your overall domain authority, which makes every new piece of content
              you publish rank faster and higher. This compounding effect is what separates businesses with strong
              content programs from those still fighting for visibility year after year.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 6 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Content Strategy & Editorial Planning: The Blueprint for Consistent Results
            </h3>
            <p className="mb-4">
              Random acts of content — publishing a blog post when someone has time, writing about whatever topic
              seems interesting this week — produce random results. Consistent, scalable organic growth requires a
              documented content strategy that aligns every piece of content with a specific keyword target, a
              specific stage of the buyer journey, and a specific business goal.
            </p>
            <p className="mb-4">
              Our content strategy process begins with a comprehensive audit of your existing content, your
              competitors' content programs, and your target keyword landscape. From this foundation, we build a
              topic cluster architecture — a structured map of pillar pages and supporting cluster content that
              signals deep expertise across your key service and product areas to Google's algorithms.
            </p>
            <p className="mb-4">
              We then develop a detailed editorial calendar that specifies what content is being produced, when it
              will be published, which keywords it targets, which stage of the funnel it serves, and how it links
              to other content on your site. This calendar is the operational backbone of your content program —
              it ensures nothing falls through the cracks and that your publishing cadence remains consistent even
              during busy periods.
            </p>
            <p>
              Your content strategy is not a static document. We review and update it quarterly based on performance
              data, shifts in search trends, changes in your business priorities, and emerging opportunities in your
              competitive landscape. A living strategy produces living results.
            </p>
            <div className="mt-6 bg-[#141415] border border-white/5 rounded-xl p-6">
              <p className="text-white font-medium mb-2">Topic Clusters: How Google Sees Authority</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Google doesn't just evaluate individual pages — it evaluates the depth of coverage across an entire
                domain. A website with 30 interconnected articles covering every aspect of "real estate investment in
                Hyderabad" signals far more authority than a site with one generic blog post on the same topic. Topic
                clusters are how we build that signal systematically, accelerating ranking timelines for every new
                piece of content we publish.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 7 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Content Optimization & Performance Tracking: Turning Data Into Growth
            </h3>
            <p className="mb-4">
              Publishing content is the beginning of the process, not the end. The most successful content marketing
              programs treat every published piece as a living asset — one that can be continuously improved based
              on real performance data. Our content optimization practice ensures that your existing content
              library keeps working harder over time, not just sitting idle after its publish date.
            </p>
            <p className="mb-4">
              We conduct regular content audits to identify pages that are ranking on page two or three — strong
              candidates for optimization that can be pushed to page one with targeted improvements. We analyze
              which keywords pages are ranking for (including those they weren't originally targeting), identify
              on-page SEO gaps, update outdated statistics and information, improve heading structures, and
              strengthen internal linking to boost page authority.
            </p>
            <p className="mb-4">
              For new content, we track ranking progression from publication through to stable positioning — typically
              a 3–6 month journey for competitive keywords. We monitor organic impressions, click-through rates,
              average positions, time on page, and conversion rates from organic traffic to identify which content
              types and topics are driving the strongest business outcomes for your specific audience.
            </p>
            <p>
              Every client receives a monthly content performance report covering traffic growth, keyword ranking
              movements, top-performing content pieces, and recommendations for the coming period. You always know
              exactly how your content program is performing and what's being done to push it further.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* ── Section 8 ── */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4 border-l-4 border-orange-500 pl-4">
              Why Hyderabad Businesses Choose Epoque Group for Content Marketing
            </h3>
            <p className="mb-4">
              Hyderabad's digital economy is growing at a remarkable pace, with businesses across real estate,
              technology, healthcare, and education investing heavily in online presence. In this environment,
              the quality of your content is often the deciding factor in whether a potential customer chooses
              your brand or a competitor's. Generic, low-quality content — the kind produced by content mills
              at scale — does not build authority or drive rankings in 2025's search landscape. It takes
              genuine expertise, strategic thinking, and high production standards to create content that performs.
            </p>
            <p className="mb-6">
              Epoque Group brings all three. Our content team combines deep SEO technical knowledge with skilled
              writing across a wide range of industries and formats. We understand Hyderabad's business ecosystem
              intimately — the competitive dynamics, the audience behavior patterns, and the local search
              landscape — and we build content strategies that are built for this specific market, not adapted
              from generic templates.
            </p>
            <ul className="space-y-3">
              {[
                "Full-service content team — strategy, writing, SEO optimization, and performance tracking under one roof",
                "Deep keyword research and topic cluster architecture built before a single word is written",
                "Content written by experienced specialists who understand your industry, not generalist freelancers",
                "Transparent monthly reporting tied to traffic, rankings, and lead generation — not vanity metrics",
                "Content refresh and optimization service that unlocks value from your existing content library",
                "No lock-in contracts — we earn continued engagement through measurable, compounding results",
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
              Effective content marketing is never one-size-fits-all. Each industry has its own audience behavior,
              search patterns, competitive intensity, and content format preferences. We tailor our content
              strategies to the specific dynamics of your market — not to a generic template built for someone else's
              business.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "Real Estate & Property",
                "Healthcare & Wellness",
                "EdTech & Coaching",
                "SaaS & B2B Technology",
                "Finance & Wealth Management",
                "E-Commerce & D2C Brands",
                "Legal & Professional Services",
                "Hospitality & Travel",
                "Interior Design & Architecture",
                "Retail & Consumer Brands",
                "Staffing & HR Technology",
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
              Whether you're a SaaS company in HITEC City looking to dominate search results for competitive
              software keywords, a real estate developer in Gachibowli building content that drives project
              inquiries, or a healthcare clinic in Jubilee Hills establishing authority in a specific specialty —
              we have the industry knowledge and content marketing expertise to build a program that delivers
              measurable results for your specific market and audience.
            </p>
          </div>

          {/* ── CTA Block ── */}
          <div className="bg-gradient-to-br from-[#1a1209] to-[#120d0b] border border-orange-900/30 rounded-2xl p-12 text-center mt-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Ready to Build a Content Engine That Grows While You Sleep?
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
              Get a free content strategy consultation from our Hyderabad team. We'll audit your current content,
              identify your highest-value keyword opportunities, and present a custom content roadmap —
              delivered within 48 hours, with zero obligation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium px-10 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Request Your Free Content Audit
            </a>
          </div>

        </div>
      </div>
    </section>
  
      <WhyChooseContentMarketingSection />
      <ContentMarketingFAQSection />

      {/* SERVICE SCHEMA */}
      <Script
        id="content-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Content Marketing Services",
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