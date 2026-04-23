

import { motion, Variants } from "framer-motion"
import PremiumCTA from "../../components/PremiumCTA"
import FAQSection from "./FAQSection"
import WhyChooseSection from "./WhyChooseSection"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
}

export default function DigitalClient() {
    return (
        <main className="relative overflow-hidden bg-[#050505] text-white">

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />

            {/* Glow Effects */}
            <div className="absolute -top-40 -left-40 w-[700px] h-[700px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[200px] rounded-full" />
            <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-red-500/10 blur-[200px] rounded-full" />

            {/* ================= HERO ================= */}
            <section className="relative px-6 py-36 text-center">

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="max-w-6xl mx-auto"
                >

                    <h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight">
                        Digital Marketing Agency in{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Hyderabad
                        </span>
                    </h1>

                    <p className="uppercase tracking-[0.4em] text-xs text-gray-500 mt-6">
                        SEO • Google Ads • Performance Marketing • Lead Generation
                    </p>

                    <p className="mt-10 text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Helping Businesses Scale with{" "}
                        <span className="text-white font-medium">
                            Data-Driven SEO, Paid Advertising & Conversion Systems
                        </span>
                    </p>

                    <p className="mt-10 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We design and execute high-performance digital marketing strategies
                        that increase rankings, generate qualified leads, and build long-term
                        brand authority. Our structured growth frameworks ensure measurable
                        ROI and scalable business expansion.
                    </p>

                </motion.div>
            </section>

            {/* ================= CORE SERVICES ================= */}
            {/* <section className="relative py-4 px-6 bg-[#0B0B0B]">

                <div className="max-w-7xl mx-auto">

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent inline-block">
                            Our Digital Marketing Services
                        </h2>

                        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto">
                            Structured digital growth systems built for predictable,
                            measurable, and scalable business performance.
                        </p>
                    </motion.div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                icon: "🔎",
                                title: "Search Engine Optimization",
                                desc: "Comprehensive technical SEO, keyword strategy, content optimization, and authority building frameworks designed to dominate competitive search results.",
                            },
                            {
                                icon: "📊",
                                title: "Google & Meta Advertising",
                                desc: "Performance-driven paid advertising campaigns engineered to generate consistent high-quality leads at optimized acquisition costs.",
                            },
                            {
                                icon: "🚀",
                                title: "Conversion Funnels",
                                desc: "High-converting landing pages, automation workflows, and CRM systems that turn traffic into revenue with predictable scalability.",
                            },
                            {
                                icon: "🏆",
                                title: "Brand Positioning",
                                desc: "Strategic brand messaging and creative direction to build authority, increase visibility, and elevate long-term market positioning.",
                            },
                        ].map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                }}
                                className="group relative"
                            >

                                <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(199,154,59,0.4)]">

                                    <div className="rounded-3xl p-8 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.04]">

                                        <div className="text-5xl mb-6 transition-all duration-500 group-hover:scale-110">
                                            {service.icon}
                                        </div>

                                        <h3 className="text-xl font-semibold mb-4 group-hover:text-[#C79A3B] transition">
                                            {service.title}
                                        </h3>

                                        <div className="w-14 h-[2px] bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] mb-6 rounded-full group-hover:w-24 transition-all duration-500" />

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {service.desc}
                                        </p>

                                    </div>
                                </div>

                            </motion.div>
                        ))}

                    </div>
                </div>
            </section> */}

            {/* ================= SEO SERVICES ================= */}
            {/* ================= DIGITAL MARKETING SERVICES ================= */}
            <section className="relative py-2 px-6 bg-[#080808] overflow-hidden">

                {/* Soft Background Glow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[200px]" />
                </div>

                <div className="relative max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent inline-block">
                            Digital Marketing Services in Hyderabad
                        </h2>

                        <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive digital growth solutions designed to increase visibility,
                            generate qualified leads, and drive measurable revenue growth across
                            search engines, social media platforms, and paid advertising channels.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "Search Engine Optimization (SEO)",
                                desc: "Technical optimization, keyword strategy, and authority-building frameworks to dominate organic search rankings.",
                            },
                            {
                                title: "Google Ads Management",
                                desc: "High-performance search, display, and remarketing campaigns focused on maximizing ROI and lowering acquisition costs.",
                            },
                            {
                                title: "Social Media Marketing",
                                desc: "Meta, Instagram, and LinkedIn campaigns engineered to increase engagement, brand awareness, and qualified leads.",
                            },
                            {
                                title: "Performance Marketing",
                                desc: "Data-driven advertising systems designed to scale revenue predictably through optimized targeting and conversion tracking.",
                            },
                            {
                                title: "Landing Pages & Funnels",
                                desc: "Conversion-optimized landing pages and automated sales funnels built to turn traffic into revenue.",
                            },
                            {
                                title: "Analytics & Reporting",
                                desc: "Advanced tracking, performance dashboards, and data insights to measure growth and optimize campaigns.",
                            },
                        ].map((service, index) => (
                            <div key={index} className="group relative">

                                {/* Gradient Border */}
                                <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(199,154,59,0.4)]">

                                    {/* Card */}
                                    <div className="rounded-2xl p-8 bg-gradient-to-br from-[#111111] to-[#1a1a1a] border border-white/5 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-[1.03]">

                                        {/* Number */}
                                        <span className="text-sm text-[#C79A3B] tracking-widest uppercase font-medium">
                                            0{index + 1}
                                        </span>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold mt-6 mb-4 group-hover:text-[#C79A3B] transition duration-300">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 leading-relaxed text-sm">
                                            {service.desc}
                                        </p>

                                        {/* Animated Line */}
                                        <div className="mt-8 h-[3px] w-14 bg-gradient-to-r from-[#C79A3B] to-[#7A2E63] rounded-full group-hover:w-full transition-all duration-500"></div>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
            <WhyChooseSection />

            <section className="relative py-24 px-6 bg-[#050505] text-white">

  <div className="max-w-5xl mx-auto space-y-10">

    {/* H1 */}
    <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
      Digital Marketing Agency in{" "}
      <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
        Hyderabad
      </span>{" "}
      – Performance-Driven Growth for Ambitious Businesses
    </h2>

    {/* Intro */}
    <p className="text-gray-400 leading-relaxed text-lg">
      Époque Group is a performance-driven digital marketing agency in Hyderabad
      specializing in SEO, paid advertising, social media marketing, lead generation,
      and high-conversion funnel systems. We help businesses scale with structured,
      data-backed strategies designed to generate high-quality enquiries, increase
      organic and paid visibility, and drive measurable, compounding revenue growth.
    </p>

    <p className="text-gray-400 leading-relaxed text-lg">
      Based in Jubilee Hills, Hyderabad, we work with businesses across real estate,
      healthcare, education, e-commerce, interior design, and the IT sector — building
      digital marketing ecosystems that consistently outperform the market and deliver
      a clear, trackable return on every rupee invested.
    </p>

    <p className="text-gray-400 leading-relaxed text-lg">
      Whether you are a startup building your first digital presence, a growing SME
      looking to scale lead generation, or an established brand seeking to dominate
      your category online, Époque Group has the expertise, tools, and track record
      to make it happen.
    </p>

    {/* H2 - WHY DIGITAL MARKETING */}
    <h2 className="text-3xl font-semibold mt-10">
      Why Digital Marketing Is Essential for Business Growth in Hyderabad
    </h2>

    <p className="text-gray-400 leading-relaxed">
      Hyderabad is one of India's fastest-growing business cities, with a digitally
      active population of over 10 million people. The shift in consumer behavior
      toward online research, discovery, and purchase has been dramatic and irreversible.
      Today, over 85 percent of purchase decisions — whether for a home, a healthcare
      service, a product, or a B2B solution — begin with an online search or social
      media interaction.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Businesses in Hyderabad that fail to invest in digital marketing are becoming
      invisible to their most valuable potential customers. Traditional marketing
      methods — print, hoardings, TV, and radio — no longer deliver measurable,
      targeted results at the scale and cost-efficiency that digital platforms provide.
      Digital marketing gives businesses the ability to reach the right person, with
      the right message, at exactly the right moment — and to measure the precise
      impact of every rupee spent.
    </p>

    <p className="text-gray-400 leading-relaxed">
      In Hyderabad's competitive market, the businesses that are winning online share
      three things in common: they appear prominently when their customers search for
      them on Google, they have compelling and consistent presences on social media,
      and they have built conversion systems that turn traffic and enquiries into paying
      customers efficiently. Époque Group helps businesses build all three.
    </p>

    <p className="text-gray-400 leading-relaxed">
      The compounding nature of digital marketing means that every month of consistent
      investment builds on the previous one — organic rankings improve, paid campaigns
      become more efficient, and brand awareness grows — creating an increasingly
      powerful and cost-effective marketing engine over time.
    </p>

    {/* H2 - SERVICES */}
    <h2 className="text-3xl font-semibold mt-10">
      Our Digital Marketing Services in Hyderabad
    </h2>

    <p className="text-gray-400 leading-relaxed">
      We offer a comprehensive suite of digital marketing services, each designed to
      work in concert as part of an integrated strategy that maximizes your overall
      marketing ROI. Every service is fully customized to your business goals, target
      audience, and competitive landscape.
    </p>

    {/* SERVICES */}
    <div className="space-y-10">

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Search Engine Optimization (SEO)
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          SEO is the most powerful long-term digital marketing investment available
          to businesses in Hyderabad. Our SEO services are designed to achieve
          sustainable first-page rankings on Google for the keywords your most
          valuable customers are actively searching — driving a consistent, compounding
          flow of high-intent organic traffic to your website without ongoing ad spend.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Our SEO process begins with a comprehensive technical audit of your existing
          website, followed by in-depth keyword research that identifies the highest-value
          search opportunities in your market. We implement on-page optimization across
          every page of your website, fix all technical issues that may be limiting your
          rankings, create authoritative SEO content that establishes your expertise,
          and build high-quality backlinks from relevant, trusted sources.
        </p>
        <p className="text-gray-400 leading-relaxed">
          We also specialize in local SEO strategies that help Hyderabad businesses
          rank in Google's local map pack for "near me" searches — one of the fastest-growing
          and highest-converting search categories for businesses with a local customer base.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Google Ads & Paid Search Campaigns
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Google Ads is the most powerful tool available for generating immediate,
          high-intent leads from users who are actively searching for exactly what
          your business offers. Our certified Google Ads specialists create and manage
          campaigns that place your business at the top of search results for your most
          valuable keywords — driving qualified traffic and measurable leads from day one.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We manage the full spectrum of Google Ads campaign types — search campaigns
          for intent-driven lead generation, display campaigns for brand awareness,
          YouTube campaigns for video marketing, shopping campaigns for e-commerce,
          and remarketing campaigns to re-engage visitors who have previously shown
          interest in your business.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Every campaign we manage is built on rigorous keyword research, compelling
          ad creative, optimized landing pages, and continuous data-driven refinement
          that improves performance and lowers cost per lead month after month.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Social Media Marketing
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Social media has become one of the most powerful channels for brand building,
          audience engagement, and direct lead generation in Hyderabad. Our social media
          strategies combine creative content production, community management, and
          data-driven paid advertising to build meaningful brand presences that translate
          directly into business results.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We manage end-to-end social media marketing across Instagram, Facebook, LinkedIn,
          and YouTube — developing platform-specific content strategies, producing
          scroll-stopping visual content including Reels and short-form video, managing
          active audience engagement, and running precisely targeted paid campaigns
          that reach your ideal customers with the right message at the right moment.
        </p>
        <p className="text-gray-400 leading-relaxed">
          For B2B businesses in Hyderabad's IT and professional services sector, our
          LinkedIn marketing strategies generate high-quality decision-maker leads
          through thought leadership content, targeted InMail campaigns, and
          conversion-optimized LinkedIn lead generation forms.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Performance Marketing & Meta Ads
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Performance marketing is the discipline of running paid digital campaigns
          with a laser focus on measurable business outcomes — leads, sales, app
          downloads, or revenue — rather than vanity metrics like impressions or
          clicks. Every campaign we design is built around a specific, trackable
          performance objective and optimized relentlessly to achieve it at the
          lowest possible cost.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          Our Meta Ads campaigns on Facebook and Instagram are among the most
          effective lead generation tools available for consumer businesses in
          Hyderabad. Using Meta's powerful audience targeting capabilities —
          including location, demographics, interests, behaviors, lookalike
          audiences, and custom retargeting audiences — we reach your ideal
          customers with precision and generate high volumes of qualified enquiries
          at competitive costs.
        </p>
        <p className="text-gray-400 leading-relaxed">
          We manage campaigns across the full Meta advertising ecosystem including
          lead generation ads, traffic campaigns, conversion campaigns, catalog
          campaigns for e-commerce, and brand awareness campaigns — always with
          a clear focus on the metrics that matter most to your business.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Conversion Funnels & High-Converting Landing Pages
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Driving traffic to your website is only half the challenge. Converting
          that traffic into qualified leads and paying customers requires
          meticulously designed conversion systems — landing pages, lead capture
          flows, and follow-up sequences built specifically to guide visitors
          toward taking the action you want them to take.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We design and build high-performance landing pages that combine
          compelling headlines, persuasive benefit-focused copy, trust-building
          social proof, and frictionless lead capture forms — all optimized for
          maximum conversion rate across both desktop and mobile. Every element
          of our landing pages is informed by conversion rate optimization (CRO)
          principles and tested through systematic A/B experimentation.
        </p>
        <p className="text-gray-400 leading-relaxed">
          We also build complete marketing funnels that nurture prospects through
          the full buyer journey — from initial awareness through consideration to
          final decision — using email sequences, retargeting campaigns, and
          content sequences that keep your brand top of mind and progressively
          build the trust and urgency required to convert.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Real Estate Digital Marketing
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Real estate is one of the most competitive and high-stakes digital
          marketing environments in Hyderabad. Generating qualified property
          enquiries — from buyers who are genuinely interested, financially
          capable, and actively looking — requires specialized strategies that
          go far beyond generic digital marketing approaches.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We have deep expertise in real estate digital marketing across all
          segments of the Hyderabad market — from luxury villa and high-rise
          apartment projects in Gachibowli, Kokapet, Tellapur, and Financial
          District, to mid-segment residential projects and commercial
          developments across the city.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our real estate marketing solutions integrate property-specific SEO,
          Google search and display campaigns, Facebook and Instagram lead
          generation campaigns, YouTube property showcase videos, and retargeting
          systems into comprehensive lead generation ecosystems that deliver a
          consistent flow of serious, qualified property enquiries.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Content Marketing & Brand Authority Building
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Content marketing is the discipline of creating and distributing valuable,
          relevant information that attracts your target audience, builds trust in
          your expertise, and progressively converts readers and viewers into
          customers. It is the foundation of long-term digital brand authority and
          a critical driver of both SEO performance and social media engagement.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We develop comprehensive content marketing strategies for businesses in
          Hyderabad — including blog articles, industry guides, case studies,
          video scripts, infographics, and social media content — all aligned
          with your keyword strategy and designed to demonstrate your expertise,
          answer your audience's most pressing questions, and position your brand
          as the leading authority in your field.
        </p>
        <p className="text-gray-400 leading-relaxed">
          High-quality content not only drives organic traffic and improves
          rankings but also serves as a powerful trust-building tool that shortens
          the sales cycle by educating prospects before they make first contact
          with your business.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-3">
          Website Design & Digital Experience Optimization
        </h3>
        <p className="text-gray-400 leading-relaxed mb-3">
          Your website is your most important digital asset — the hub of your
          entire online presence and the destination to which all your marketing
          activity ultimately drives potential customers. A slow, outdated, or
          poorly designed website undermines every other marketing investment
          you make by failing to convert the traffic it receives into leads.
        </p>
        <p className="text-gray-400 leading-relaxed mb-3">
          We design and develop high-performance business websites and project
          microsites for Hyderabad businesses — combining exceptional visual
          design with conversion-focused architecture, fast loading speeds,
          full mobile optimization, and clean technical SEO foundations.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our website projects are built not just to look impressive but to
          perform — generating enquiries, building brand credibility, and
          supporting all your marketing channels with a digital platform that
          converts visitors into customers.
        </p>
      </div>

    </div>

    {/* H2 - INDUSTRIES */}
    <h2 className="text-3xl font-semibold mt-10">
      Industries We Serve with Digital Marketing in Hyderabad
    </h2>

    <p className="text-gray-400 leading-relaxed mb-6">
      Every industry has a unique buyer journey, competitive landscape, and
      digital marketing opportunity. We customize our strategies based on a
      deep understanding of your specific sector — ensuring every campaign
      is precisely calibrated for your market.
    </p>

    <div className="space-y-8">

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Real Estate</h3>
        <p className="text-gray-400 leading-relaxed">
          Hyderabad's booming real estate market demands sophisticated digital
          marketing strategies that generate genuine buyer and investor enquiries
          across projects in Kokapet, Tellapur, Gachibowli, Financial District,
          Narsingi, Manikonda, and beyond. We are one of Hyderabad's most
          experienced real estate digital marketing agencies, with a track record
          of generating thousands of qualified property leads for developers,
          builders, and brokers across all project segments.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Healthcare & Medical</h3>
        <p className="text-gray-400 leading-relaxed">
          Hospitals, multispecialty clinics, dental practices, diagnostic centers,
          and individual specialists across Hyderabad rely on digital marketing
          to attract new patients and build institutional credibility. We create
          healthcare marketing campaigns that comply with industry guidelines
          while effectively communicating your clinical expertise and driving
          appointment bookings and patient enquiries.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Education & Coaching</h3>
        <p className="text-gray-400 leading-relaxed">
          Schools, colleges, coaching institutes, skill development centers, and
          EdTech platforms in Hyderabad use our digital marketing services to
          attract student enrollments and build institutional brand authority.
          We create campaigns that capture parents and students at the moment
          of active decision-making, driving admission enquiries and walk-ins
          throughout the enrollment cycle.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">E-commerce & Retail</h3>
        <p className="text-gray-400 leading-relaxed">
          Online retailers and D2C brands use our performance marketing and
          e-commerce SEO services to increase product visibility, drive qualified
          traffic, and maximize return on ad spend. We build integrated e-commerce
          marketing strategies that combine Google Shopping ads, Meta catalog
          campaigns, SEO-optimized product pages, and email retargeting to
          sustainably grow online revenue.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Interior Design & Architecture</h3>
        <p className="text-gray-400 leading-relaxed">
          Interior designers and architecture firms in Hyderabad build client
          pipelines through visually compelling digital presences and targeted
          lead generation campaigns. We help interior design businesses rank
          for high-value search terms, showcase their portfolios compellingly
          on Instagram, and run targeted campaigns that reach homeowners and
          commercial clients who are actively planning projects.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">IT & Technology Startups</h3>
        <p className="text-gray-400 leading-relaxed">
          Hyderabad's thriving IT ecosystem is home to hundreds of technology
          companies and startups competing for clients, partners, and talent.
          We help IT and SaaS businesses build authority through content
          marketing and SEO, generate B2B leads through LinkedIn and Google
          Ads, and attract top candidates through employer brand building
          campaigns.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Local Service Businesses</h3>
        <p className="text-gray-400 leading-relaxed">
          From restaurants and gyms to law firms and financial advisors,
          local service businesses across Hyderabad benefit from our local
          SEO, Google Maps optimization, and geo-targeted paid campaigns
          that connect them with customers in their immediate service areas
          at the precise moment of need.
        </p>
      </div>

    </div>

    {/* H2 - OUR APPROACH */}
    <h2 className="text-3xl font-semibold mt-10">
      Our Digital Marketing Approach – Strategy, Execution & Continuous Improvement
    </h2>

    <p className="text-gray-400 leading-relaxed mb-4">
      Great digital marketing requires more than just running ads or publishing
      content. It requires a structured, insight-led approach that aligns every
      tactic to a clear commercial objective and continuously improves performance
      based on real data. Here is how we work:
    </p>

    <div className="space-y-6">

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Discovery & Goal Setting</h3>
        <p className="text-gray-400 leading-relaxed">
          Every engagement begins with a thorough discovery session where we
          learn your business, your market, your customers, and your specific
          growth goals. Clear objective setting ensures every strategy and
          tactic we implement is aligned with what actually matters to your
          business — not just marketing activity for its own sake.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Market & Competitor Research</h3>
        <p className="text-gray-400 leading-relaxed">
          We conduct comprehensive research into your target market, search
          landscape, competitive positioning, and audience behavior. This
          research reveals where the opportunities lie, what your competitors
          are doing well or poorly, and what strategies will give your business
          the greatest competitive advantage in Hyderabad's digital market.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Integrated Strategy Development</h3>
        <p className="text-gray-400 leading-relaxed">
          Based on your goals and our research, we develop a comprehensive
          integrated digital marketing strategy that defines the right mix
          of channels, tactics, content, and budget allocation for your
          specific situation. We present this strategy clearly, explain
          our rationale, and align on expectations before any execution begins.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Execution & Campaign Management</h3>
        <p className="text-gray-400 leading-relaxed">
          Our experienced team executes every element of the strategy with
          precision and attention to detail. From technical SEO implementation
          and ad campaign setup to content production and social media management,
          we handle all execution in-house — ensuring consistent quality and
          brand alignment across every touchpoint.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Performance Monitoring & Optimization</h3>
        <p className="text-gray-400 leading-relaxed">
          We monitor campaign performance continuously, analyzing data across
          all channels to identify what is working, what needs improvement,
          and where new opportunities are emerging. This ongoing optimization
          process is what drives the compounding improvement in results that
          our clients experience over the course of an engagement.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Transparent Reporting</h3>
        <p className="text-gray-400 leading-relaxed">
          Every month, you receive a comprehensive performance report that
          covers all key metrics across every channel we manage — organic
          rankings, traffic, leads, cost per lead, conversion rates, and
          overall ROI. We present these reports in clear, non-technical
          language and are always available to walk you through the numbers
          and discuss strategy.
        </p>
      </div>

    </div>

    {/* H2 - HYDERABAD DIGITAL MARKETING */}
    <h2 className="text-3xl font-semibold mt-10">
      Digital Marketing Trends Shaping Hyderabad's Business Landscape
    </h2>

    <p className="text-gray-400 leading-relaxed mb-4">
      Hyderabad's digital marketing landscape is evolving rapidly, driven by
      changing consumer behavior, platform algorithm updates, and increasing
      competitive intensity across virtually every industry. Businesses that
      stay ahead of these trends are positioning themselves for outsized growth
      in the coming years.
    </p>

    <p className="text-gray-400 leading-relaxed mb-4">
      The explosion of short-form video content on Instagram Reels and YouTube
      Shorts has created powerful new organic reach opportunities for businesses
      willing to invest in video production. Brands that show up consistently with
      high-quality video content are building audiences and generating leads at a
      fraction of the cost of traditional paid advertising.
    </p>

    <p className="text-gray-400 leading-relaxed mb-4">
      Local SEO has become increasingly critical as Google places greater emphasis
      on geographic relevance in search results. Businesses that have invested in
      Google Business Profile optimization, local citation building, and
      hyper-local content strategies are capturing a growing share of high-intent
      "near me" searches across Hyderabad.
    </p>

    <p className="text-gray-400 leading-relaxed mb-4">
      AI-powered advertising tools from Google and Meta are transforming campaign
      management — automating bidding, audience optimization, and creative testing
      at a scale and speed that was previously impossible. Agencies that understand
      how to work effectively with these AI tools while maintaining strategic
      oversight are delivering significantly better results for their clients.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Voice search optimization, conversational AI integration, and first-party
      data strategies are emerging as critical capabilities for businesses preparing
      for the next phase of digital evolution. At Époque Group, we stay at the
      forefront of these developments — continuously updating our strategies and
      capabilities to ensure our clients always have a competitive edge.
    </p>

    {/* H2 - WHY CHOOSE */}
    <h2 className="text-3xl font-semibold mt-10">
      Why Choose Époque Group as Your Digital Marketing Agency in Hyderabad?
    </h2>

    <p className="text-gray-400 leading-relaxed mb-6">
      Hyderabad has hundreds of digital marketing agencies competing for your
      business. Choosing the right partner is one of the most consequential
      decisions you will make for your business's growth. Here is what
      consistently makes Époque Group the choice of businesses that are serious
      about results:
    </p>

    <div className="space-y-6">

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Performance-First Philosophy</h3>
        <p className="text-gray-400 leading-relaxed">
          We measure our success by your business results — not by our own
          activity. Every strategy we recommend, every campaign we launch,
          and every optimization we make is evaluated against its direct
          contribution to your revenue and growth goals. We are accountable
          to outcomes, not outputs.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Deep Hyderabad Market Knowledge</h3>
        <p className="text-gray-400 leading-relaxed">
          As a Hyderabad-based agency, we have an intimate understanding of
          the city's business landscape, consumer behavior, competitive dynamics,
          and digital market characteristics. This local expertise enables us to
          make smarter strategic decisions and create more resonant campaigns
          than agencies that lack genuine roots in the Hyderabad market.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Integrated Full-Service Capability</h3>
        <p className="text-gray-400 leading-relaxed">
          We offer every digital marketing service under one roof — SEO, PPC,
          social media, performance marketing, content, and web design. This
          integrated capability means every channel we manage works in concert
          with the others, creating compounding results that siloed, single-channel
          agencies simply cannot deliver.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Transparent Reporting & Complete Accountability</h3>
        <p className="text-gray-400 leading-relaxed">
          You always know exactly what we are doing, why we are doing it, and
          what results it is delivering. Complete transparency in reporting,
          clear communication, and full accountability for results are
          non-negotiable standards that every Époque Group client can expect.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Senior-Led Strategy & Execution</h3>
        <p className="text-gray-400 leading-relaxed">
          Your account is managed by senior strategists and specialists —
          not junior executives or offshore teams. You benefit from experienced
          professionals who understand your business deeply and bring genuine
          strategic insight to every decision, not just tactical execution.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-[#C79A3B] mb-2">Proven Track Record Across Industries</h3>
        <p className="text-gray-400 leading-relaxed">
          Our portfolio of successfully executed digital marketing campaigns
          across real estate, healthcare, education, e-commerce, and professional
          services in Hyderabad demonstrates our ability to deliver results
          across diverse business contexts. We bring the lessons learned from
          every campaign we have managed to bear on every new client engagement.
        </p>
      </div>

    </div>

    <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
      <li>Data-driven strategies focused on measurable ROI</li>
      <li>High-quality lead generation systems across all channels</li>
      <li>Transparent monthly reporting and real-time analytics access</li>
      <li>Fully customized marketing solutions for each client</li>
      <li>Experienced senior team with proven results in Hyderabad</li>
      <li>No long-term lock-in contracts — we earn your trust through results</li>
      <li>Integrated SEO, PPC, social, and content capabilities under one roof</li>
    </ul>

</div>
   
</section>
            <FAQSection />

            <PremiumCTA />

        </main>
    )
}