"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"

export default function RevenueGrowthClient() {
    return (
        <section className="bg-black text-white relative overflow-hidden">

            {/* HERO */}
            <div className="relative py-32 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-green-500/20 blur-[180px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Revenue Growth Consulting for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Scalable Business Expansion
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We help businesses unlock new revenue streams,
                        optimize sales systems and build predictable growth engines.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Scale My Business
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "Revenue Audits",
                        desc: "Identify growth gaps and revenue leakage."
                    },
                    {
                        title: "Sales Funnel Optimization",
                        desc: "Increase conversion rates and deal velocity."
                    },
                    {
                        title: "Pricing Strategy",
                        desc: "Optimize pricing models for higher profitability."
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



            {/* LONG-FORM SEO CONTENT SECTION */}
            <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

                {/* Section 1 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        What Is{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Revenue Growth Consulting?
                        </span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Revenue growth consulting is a specialized advisory service that helps businesses systematically
                        identify, unlock and scale their revenue-generating potential. Unlike general business consulting,
                        revenue growth consulting is laser-focused on one outcome: helping your company generate more
                        money — faster, more predictably and more profitably.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        At Epoque Group Of Companies, our revenue growth consultants work directly with founders, CEOs,
                        sales directors and marketing leaders to diagnose what is limiting your revenue today and engineer
                        a clear, actionable path to greater financial performance. Whether you are a startup trying to
                        find product-market fit and initial traction, or an established company looking to break through
                        a revenue plateau, our consulting framework is built to deliver measurable results within
                        defined timeframes.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Revenue growth is rarely about doing more of everything. More often, it is about doing the right
                        things with precision — focusing on the channels, strategies and levers that will produce
                        disproportionate returns. That is exactly what our consulting engagements are designed to uncover
                        and execute.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Why Businesses Need a{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Revenue Growth Strategy
                        </span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Most businesses are leaving significant revenue on the table — not because they lack ambition, but
                        because they lack the structured systems, clear visibility and expert guidance needed to capture it.
                        Revenue growth is not something that happens by accident. It is the result of deliberate strategy,
                        rigorous execution and continuous optimization.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Without a clear revenue growth strategy, businesses often find themselves stuck in reactive cycles:
                        chasing the wrong customers, running marketing campaigns with no measurable return, pricing their
                        products below their actual market value or losing customers they could have easily retained with
                        better systems. These are not problems unique to small businesses. Enterprise companies face the
                        exact same challenges at greater scale.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        A structured revenue growth strategy provides your business with three critical advantages. First,
                        it gives you clarity on exactly where your growth is going to come from and why. Second, it
                        creates alignment across your sales, marketing, product and customer success teams around shared
                        revenue goals. Third, it establishes the measurement systems needed to track progress, identify
                        what is working and double down on the highest-return activities.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        At Epoque Group Of Companies, we believe every business — regardless of stage or size — deserves
                        access to the quality of strategic thinking that has historically been reserved for the largest
                        corporations. Our revenue growth consulting service exists to level that playing field.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Our Revenue Growth{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Consulting Process
                        </span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Every engagement begins with a comprehensive Revenue Audit — a deep-dive diagnostic process where
                        our consultants examine every dimension of your current revenue model. We analyse your acquisition
                        channels and their respective ROI, your sales funnel conversion rates at each stage, your pricing
                        architecture and positioning relative to the market, your customer retention and churn data, your
                        average order value and revenue per customer, and your competitive landscape.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        This audit phase is not superficial. We go granular — reviewing your actual data, interviewing your
                        key stakeholders and mapping your full customer journey from first touch to renewal or repurchase.
                        The goal is to build a precise picture of where your revenue is today and, more importantly, where
                        the highest-leverage opportunities exist to grow it.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Following the audit, we develop a customised Revenue Growth Roadmap — a prioritised, phased plan
                        that identifies the specific initiatives, in the specific sequence, that will generate the greatest
                        revenue impact for your business. This roadmap is not a generic playbook. It is built for your
                        business, your market, your team and your current stage of growth.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Implementation is where many consulting engagements fall short — strategy is delivered in a
                        slide deck, and execution is left entirely to the client. We operate differently. Our consultants
                        work alongside your team during the implementation phase, providing hands-on support, weekly
                        check-ins, decision-making guidance and real-time course correction as results come in.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Finally, we establish performance tracking infrastructure — dashboards, KPI frameworks and
                        reporting cadences — that allow you to monitor the impact of every initiative and sustain your
                        growth momentum long after our engagement concludes.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Key Pillars of{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Scalable Revenue Growth
                        </span>
                    </h2>

                    <h3 className="text-xl font-semibold text-orange-400">1. Sales Funnel Optimisation</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Your sales funnel is the engine of your revenue generation. Even marginal improvements in
                        conversion rates at each stage of the funnel can produce dramatic revenue gains. A 10% improvement
                        in lead-to-opportunity conversion, combined with a 10% improvement in opportunity-to-close rate,
                        can increase your closed revenue by more than 20% without acquiring a single additional lead.
                        Our consultants perform granular funnel analysis to identify exactly where prospects are dropping
                        off and implement targeted interventions to improve conversion at every stage.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-400 pt-4">2. Pricing Strategy and Optimisation</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Pricing is one of the most powerful — and most underutilised — revenue growth levers available to
                        any business. Most companies set prices early in their development and rarely revisit them
                        strategically. The result is chronic under-pricing that erodes margins, signals low value to the
                        market and makes scaling unnecessarily hard. Our pricing strategy work covers value-based pricing
                        methodology, tiered pricing architecture, packaging and bundling optimisation, and competitive
                        positioning — giving your business the pricing model it deserves for the value it delivers.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-400 pt-4">3. Customer Retention and Lifetime Value</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Acquiring a new customer costs five to seven times more than retaining an existing one. Yet most
                        businesses invest the majority of their growth budget in acquisition and relatively little in
                        retention. This is a fundamental misallocation. Improving your customer retention rate by just
                        5% can increase profitability by 25% to 95% according to research from Bain & Company. Our
                        consultants design retention systems, loyalty mechanisms, customer success frameworks and
                        re-engagement campaigns that dramatically increase the lifetime value of every customer you acquire.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-400 pt-4">4. New Market and Channel Expansion</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Sustainable growth requires diversification — across customer segments, geographies, channels and
                        revenue streams. Over-reliance on a single customer segment or acquisition channel creates fragility.
                        Our consultants identify and validate expansion opportunities that are aligned with your existing
                        strengths, evaluate the revenue potential and resource requirements of each opportunity, and build
                        phased entry strategies that minimise risk while maximising upside.
                    </p>

                    <h3 className="text-xl font-semibold text-orange-400 pt-4">5. Predictable Revenue System Design</h3>
                    <p className="text-gray-400 leading-relaxed">
                        The ultimate goal of revenue growth consulting is not a single spike in revenue — it is the
                        creation of a predictable, compounding revenue growth engine. This means building systematic
                        processes for lead generation, qualification, nurturing, closing and expansion that produce
                        consistent results month over month. It means creating the reporting infrastructure that gives
                        you real-time visibility into your revenue trajectory. And it means developing the team
                        capabilities and playbooks needed to sustain and accelerate growth independently.
                    </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        Who We Work{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            With
                        </span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Our revenue growth consulting services are designed for ambitious businesses at pivotal stages
                        of their growth journey. We work with early-stage startups that have achieved initial product-market
                        fit and are ready to build their first scalable go-to-market engine. We work with growth-stage
                        companies that are scaling rapidly and need to professionalise their revenue operations to sustain
                        momentum. We work with established SMEs that have hit a revenue plateau and need fresh strategic
                        thinking to break through to the next level.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        We have deep experience across B2B SaaS, professional services, e-commerce, fintech, healthtech
                        and consumer brands. While the specific tactics vary by industry and business model, the
                        underlying principles of revenue growth — clarity, focus, optimisation, systems — apply universally.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        The ideal client for our revenue growth consulting is a founder or senior executive who knows
                        their business has significant untapped growth potential, who is willing to make data-driven
                        decisions and challenge existing assumptions, and who is committed to doing the work required
                        to build something great. If that sounds like you, we would love to have a conversation.
                    </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-5">
                    <h2 className="text-3xl font-semibold">
                        What Results Can You{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Expect?
                        </span>
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Results vary based on your current baseline, industry, team execution capability and the specific
                        growth levers we activate. That said, businesses that engage with our revenue growth consulting
                        typically see measurable improvements within the first 30 to 60 days of implementation — often
                        in the form of improved lead quality, faster sales cycles or better conversion rates at specific
                        funnel stages.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Over a 3 to 6 month engagement, clients regularly see revenue growth of 20% to 60% depending on
                        their starting point and the scope of strategic changes implemented. Pricing optimisation alone
                        can deliver immediate margin improvements of 10% to 30% without any increase in sales volume.
                        Retention improvements can increase annual recurring revenue significantly by reducing churn
                        that was previously accepted as inevitable.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Beyond the quantitative results, clients consistently report a qualitative shift in how their
                        business operates: clearer strategic priorities, better-aligned teams, more confident decision-making
                        and a greater sense of control over their growth trajectory. These outcomes compound over time,
                        creating sustainable competitive advantages that extend well beyond our engagement.
                    </p>
                </div>

                {/* CTA Band */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                >
                    <div className="p-12 rounded-3xl bg-[#111111] text-center space-y-6">
                        <h2 className="text-3xl font-semibold">
                            Ready to Accelerate Your Revenue Growth?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            Book a free 30-minute strategy call with one of our revenue growth consultants.
                            We will identify the top 3 revenue opportunities in your business — at no cost and no obligation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-10 py-4 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                            hover:scale-105 transition duration-300 shadow-xl">
                            Book My Free Strategy Call
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* FAQ SECTION */}
   <div className="max-w-4xl mx-auto px-6 pb-24">
  <h2 className="text-3xl text-center font-semibold mb-10">
    Frequently Asked Questions
  </h2>

  <div className="space-y-4">
    {[
      {
        q: "What is revenue growth consulting?",
        a: "Revenue growth consulting focuses on identifying opportunities to increase sales, improve margins and build scalable growth systems."
      },
      {
        q: "How do you identify revenue gaps in my business?",
        a: "We audit marketing channels, sales funnels, pricing and customer journey to find revenue leaks."
      },
      {
        q: "Can you help increase profit margins?",
        a: "Yes, by optimising pricing, reducing CAC and improving conversions."
      },
      {
        q: "How long does it take to see results?",
        a: "Initial results in 30–60 days, long-term growth in 3–6 months."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/10 transition duration-300"
      >
        <h3 className="text-orange-400 font-semibold">
          {item.q}
        </h3>
        <p className="text-gray-400 mt-1 text-sm">
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
                        name: "Revenue Growth Consulting Service",
                        description: "Revenue growth consulting helping businesses unlock new revenue streams, optimise sales funnels, improve pricing strategy and build scalable growth systems.",
                        provider: {
                            "@type": "Organization",
                            name: "Epoque Group Of Companies"
                        },
                        serviceType: "Revenue Growth Consulting",
                        areaServed: "Worldwide",
                        hasOfferCatalog: {
                            "@type": "OfferCatalog",
                            name: "Revenue Growth Services",
                            itemListElement: [
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Revenue Audits" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sales Funnel Optimisation" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pricing Strategy" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Market Expansion" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Retention & LTV" } },
                                { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth System Design" } }
                            ]
                        }
                    })
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "What is revenue growth consulting?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Revenue growth consulting focuses on identifying opportunities to increase sales, improve margins and build scalable growth systems within a business."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How long does it take to see measurable growth?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Initial improvements can be visible within 30 to 60 days, while structured growth systems typically show consistent scaling over 3 to 6 months."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you work with startups and established companies?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we tailor strategies for startups, SMEs and enterprise businesses depending on growth stage and revenue goals."
                                }
                            }
                        ]
                    })
                }}
            />

        </section>
    

  
         
           
    )
}