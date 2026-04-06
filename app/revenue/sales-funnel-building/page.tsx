"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"
import FAQSection from "./FAQSection"

export default function SalesFunnelClient() {
    return (
        <section className="bg-black text-white overflow-hidden">

            {/* HERO SECTION */}
            <div className="relative py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                        Sales Funnel Building Services for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Predictable Revenue Growth
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        We design high-converting sales funnels that transform traffic
                        into qualified leads and long-term customers.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
                            hover:scale-105 transition duration-300 shadow-xl"
                        >
                            Build My Funnel
                        </Link>
                    </div>
                </div>
            </div>

            {/* ABOUT */}
           {/* 🔥 STRATEGY SECTION */}
<div className="relative py-4 px-6">

  {/* Background glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-orange-500/10 blur-3xl"></div>

  <div className="relative max-w-6xl mx-auto text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
      Strategic Funnel Systems That{" "}
      <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
        Convert
      </span>
    </h2>

    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
      We design intelligent funnel systems powered by consumer psychology,
      automation, and performance tracking to maximize conversions.
    </p>
  </div>

  {/* CARDS */}
  <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

    {[
      {
        title: "Psychology-Driven Strategy",
        desc: "We use proven consumer behavior frameworks to guide users through each stage of the funnel."
      },
      {
        title: "Automation & Systems",
        desc: "Advanced automation ensures leads are nurtured and converted without manual effort."
      },
      {
        title: "Performance Tracking",
        desc: "Every funnel is optimized using real-time analytics and conversion data."
      },
      {
        title: "Scalable Growth",
        desc: "Our systems are built to generate consistent leads and predictable revenue."
      }
    ].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
      >
        <div className="p-8 rounded-3xl bg-[#121212] border border-white/10 h-full">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            {item.title}
          </h3>
          <p className="text-gray-400">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}

  </div>
</div>

{/* 🔥 SERVICES */}
<div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-10">

  {[
    {
      title: "Lead Generation Funnels",
      desc: "Capture and nurture qualified prospects automatically."
    },
    {
      title: "Automation & CRM Setup",
      desc: "Integrated email workflows and CRM systems."
    },
    {
      title: "Conversion Optimization",
      desc: "Continuous testing to improve funnel performance."
    }
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative p-[1px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
    >
      <div className="p-10 rounded-3xl bg-[#121212] border border-white/10 h-full">

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/10 via-yellow-500/10 to-red-500/10 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>

        <h3 className="text-xl font-semibold text-orange-400 mb-4 relative z-10">
          {item.title}
        </h3>

        <p className="text-gray-400 relative z-10">
          {item.desc}
        </p>

      </div>
    </motion.div>
  ))}

</div>

{/* 🔥 WHY CHOOSE (CARD STYLE) */}
<div className="py-24 px-6">

  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-semibold text-white">
      Why Choose Our Funnel Experts?
    </h2>
  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

    {[
      "Revenue-focused funnel systems",
      "Data-driven optimization strategy",
      "High-quality lead generation",
      "Scalable and predictable growth"
    ].map((item, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-orange-400 transition"
      >
        <p className="text-gray-300 font-medium">
          ✔ {item}
        </p>
      </div>
    ))}

  </div>

</div>

            {/* CTA */}
          

          

      
    

    <section className="max-w-6xl mx-auto px-6 py-4 text-gray-400 space-y-8">

      <h1 className="text-4xl font-bold text-white">
        Sales Funnel Building Services for High-Converting Business Growth
      </h1>

      <p>
        In today's competitive digital landscape, businesses cannot rely solely on traffic to generate revenue.
        Without a structured conversion system, most website visitors leave without taking action. This is where
        professional sales funnel building services play a crucial role in transforming traffic into qualified
        leads and paying customers.
      </p>

      <p>
        A well-designed sales funnel is a strategic process that guides potential customers through different
        stages of the buyer journey. From awareness to conversion, every step is optimized to increase engagement,
        build trust, and drive measurable business results. Whether you are a startup, a small business, or a
        growing enterprise, having a high-converting sales funnel is no longer optional — it is a business necessity.
      </p>

      <p>
        Our sales funnel building services are designed to eliminate guesswork and replace random marketing
        activities with a systematic, data-driven approach. We help businesses build funnels that not only attract
        the right audience but also convert them into loyal, high-value customers at scale.
      </p>

      {/* What is a Sales Funnel */}
      <h2 className="text-2xl text-white font-semibold">
        What is a Sales Funnel?
      </h2>

      <p>
        A sales funnel is a structured marketing system designed to move users from initial discovery to final
        purchase. Instead of relying on random interactions, funnels create a predictable path that improves
        conversion rates and customer retention.
      </p>

      <p>
        The funnel typically includes multiple stages such as awareness, interest, consideration, and conversion.
        Each stage is carefully designed to address user intent and guide them toward taking action. Unlike
        traditional marketing methods that broadcast messages to everyone, a sales funnel focuses on delivering
        the right message to the right person at the right time.
      </p>

      <p>
        The concept of a sales funnel has evolved significantly with the rise of digital marketing. Today, funnels
        can be fully automated using advanced tools and technologies, allowing businesses to nurture leads around
        the clock without manual intervention. This automation not only saves time but also ensures consistency
        in messaging and follow-up, which is critical for building trust and driving conversions.
      </p>

      <p>
        A modern sales funnel integrates multiple channels including landing pages, email marketing, social media,
        paid advertising, and CRM systems to create a seamless customer journey from first touch to final purchase.
      </p>

      {/* Key Stages */}
      <h2 className="text-2xl text-white font-semibold">
        Key Stages of a High-Converting Sales Funnel
      </h2>

      <h3 className="text-xl text-orange-400">1. Awareness Stage</h3>
      <p>
        This is where users first discover your business through channels like search engines, social media,
        or paid advertising. The goal is to capture attention and drive traffic to your landing pages. At this
        stage, your content should focus on educating and informing rather than selling. Blog posts, social media
        content, YouTube videos, and paid ads are all effective tools for creating brand awareness.
      </p>
      <p>
        A successful awareness strategy targets specific audience segments based on demographics, interests, and
        behavior. This ensures that the traffic entering your funnel is relevant and has a higher chance of
        converting further down the funnel.
      </p>

      <h3 className="text-xl text-orange-400">2. Interest Stage</h3>
      <p>
        Once users land on your page, engaging content, clear messaging, and value-driven offers keep them
        interested in your services or products. This is where your lead magnets, free resources, webinars,
        and email opt-in forms come into play. The goal is to capture contact information so you can continue
        nurturing the relationship.
      </p>
      <p>
        Effective lead magnets include free eBooks, checklists, templates, mini-courses, and free consultations.
        These offers must provide genuine value to your target audience in exchange for their contact details.
        A compelling lead magnet combined with a well-designed landing page can dramatically increase your
        lead generation rate.
      </p>

      <h3 className="text-xl text-orange-400">3. Consideration Stage</h3>
      <p>
        At this stage, users evaluate your business. Trust-building elements such as testimonials, case studies,
        and detailed service explanations play a crucial role. Prospects are comparing your offerings with
        competitors and looking for reasons to choose you over others.
      </p>
      <p>
        This is where your email nurture sequences, retargeting ads, and educational content work together to
        move leads closer to a purchase decision. Personalized messaging that addresses specific pain points
        and objections significantly improves conversion rates at this stage. Video testimonials, detailed case
        studies, and product demonstrations are particularly effective in building credibility and trust.
      </p>

      <h3 className="text-xl text-orange-400">4. Conversion Stage</h3>
      <p>
        This is where users take action — filling out a form, booking a consultation, or making a purchase.
        A well-optimized funnel ensures minimal friction during this stage. Every element on your conversion
        page must be strategically designed to reduce hesitation and encourage immediate action.
      </p>
      <p>
        Key conversion optimization techniques include clear and compelling calls-to-action, urgency and
        scarcity elements, social proof, money-back guarantees, and simplified checkout processes. A/B testing
        different headlines, button colors, and page layouts helps identify what resonates most with your
        specific audience.
      </p>

      <h3 className="text-xl text-orange-400">5. Retention Stage</h3>
      <p>
        After conversion, businesses must continue engaging customers through email marketing, retargeting,
        and personalized offers to maximize lifetime value. Acquiring a new customer costs significantly more
        than retaining an existing one, making post-purchase engagement a critical component of a profitable
        funnel strategy.
      </p>
      <p>
        Effective retention strategies include onboarding email sequences, loyalty programs, upsell and
        cross-sell campaigns, and regular check-ins. By continuously delivering value to existing customers,
        businesses can increase repeat purchases, generate referrals, and build a community of brand advocates.
      </p>

      {/* Why Important */}
      <h2 className="text-2xl text-white font-semibold">
        Why Sales Funnel Building Services Are Important
      </h2>

      <p>
        Many businesses struggle with low conversions because they lack a structured approach to customer
        acquisition. Sales funnel building services provide a systematic way to attract, nurture, and convert
        leads efficiently. Without a proper funnel in place, businesses waste marketing budgets on traffic that
        never converts and miss out on significant revenue opportunities.
      </p>

      <p>
        Professional funnel building services bring expertise in strategy, design, copywriting, and technology
        together to create a conversion system that works around the clock. Instead of relying on one-off
        marketing campaigns, a well-built funnel creates a consistent pipeline of leads and sales.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Improves conversion rates significantly by creating a structured buyer journey</li>
        <li>Generates high-quality leads that are more likely to convert into paying customers</li>
        <li>Automates marketing and sales processes to save time and reduce manual effort</li>
        <li>Reduces customer acquisition costs through targeted and efficient marketing</li>
        <li>Increases overall ROI by maximizing the value of every visitor and lead</li>
        <li>Provides clear data and insights into customer behavior and funnel performance</li>
        <li>Creates predictable and scalable revenue streams for sustainable business growth</li>
      </ul>

      {/* Our Services */}
      <h2 className="text-2xl text-white font-semibold">
        Our Sales Funnel Building Services
      </h2>

      <p>
        We provide end-to-end funnel solutions designed to maximize business growth. Our approach combines
        strategy, design, technology, and data-driven optimization to deliver funnels that consistently
        perform and scale with your business needs.
      </p>

      <h3 className="text-xl text-orange-400">Funnel Strategy & Planning</h3>
      <p>
        We analyze your target audience, competitors, and business goals to create a customized funnel strategy
        that aligns with your objectives. Our strategy process includes in-depth market research, customer
        persona development, competitive analysis, and funnel mapping. We identify the most effective channels,
        messaging angles, and offers for your specific business before a single page is built.
      </p>

      <h3 className="text-xl text-orange-400">Landing Page Development</h3>
      <p>
        High-converting landing pages are designed with persuasive copy, strong calls-to-action, and optimized
        layouts to maximize engagement and conversions. Every landing page we build is crafted with a deep
        understanding of consumer psychology, conversion principles, and mobile-first design standards. We
        ensure fast load times, clear value propositions, and compelling visual hierarchy to keep visitors
        engaged and drive them to take action.
      </p>

      <h3 className="text-xl text-orange-400">Email Marketing & Automation</h3>
      <p>
        Effective email marketing is the backbone of any high-converting sales funnel. We design and implement
        automated email sequences that nurture leads through every stage of the buyer journey. From welcome
        sequences to sales campaigns, cart abandonment emails, and re-engagement campaigns, our email strategies
        are crafted to maximize open rates, click-through rates, and conversions.
      </p>

      <h3 className="text-xl text-orange-400">Automation & CRM Integration</h3>
      <p>
        We integrate CRM systems and email automation tools to ensure seamless lead nurturing and follow-ups.
        Our team has experience integrating leading platforms including HubSpot, Salesforce, ActiveCampaign,
        Mailchimp, GoHighLevel, and many others. These integrations ensure that every lead is tracked, followed
        up with, and moved through your pipeline with precision and consistency.
      </p>

      <h3 className="text-xl text-orange-400">Paid Advertising & Traffic Generation</h3>
      <p>
        A funnel without traffic is an engine without fuel. We develop and manage paid advertising campaigns
        across Google Ads, Facebook Ads, Instagram Ads, and other platforms to drive qualified traffic into
        your funnel. Our targeting strategies ensure that your ads reach the right audience at the right time,
        maximizing the return on your advertising investment.
      </p>

      <h3 className="text-xl text-orange-400">Conversion Rate Optimization</h3>
      <p>
        Through continuous testing and analysis, we optimize every element of your funnel to improve performance
        and increase conversions. Our CRO process includes heatmap analysis, session recordings, A/B testing,
        user surveys, and funnel analytics. By identifying where users drop off and what prevents them from
        converting, we make data-driven improvements that compound over time.
      </p>

      <h3 className="text-xl text-orange-400">Analytics & Reporting</h3>
      <p>
        We set up comprehensive tracking and reporting systems so you always know exactly how your funnel is
        performing. From Google Analytics and Meta Pixel to custom dashboards, we ensure you have complete
        visibility into key metrics including traffic, lead generation rates, conversion rates, cost per lead,
        and overall ROI. Regular performance reports keep you informed and help guide ongoing optimization efforts.
      </p>

      {/* Types of Funnels */}
      <h2 className="text-2xl text-white font-semibold">
        Types of Sales Funnels We Build
      </h2>

      <p>
        Every business has unique goals and audiences, which is why we offer a variety of funnel types tailored
        to different business models and objectives.
      </p>

      <h3 className="text-xl text-orange-400">Lead Generation Funnels</h3>
      <p>
        Designed to capture contact information from potential customers, lead generation funnels use compelling
        lead magnets and opt-in forms to build your email list and create a pipeline of qualified prospects.
        These funnels are ideal for service-based businesses, consultants, coaches, and B2B companies.
      </p>

      <h3 className="text-xl text-orange-400">Sales Funnels</h3>
      <p>
        Direct sales funnels are built to convert traffic into paying customers through a series of strategically
        designed pages including sales pages, order forms, upsells, and thank-you pages. These funnels are
        optimized for maximum revenue per visitor and include proven persuasion techniques to overcome objections
        and close sales.
      </p>

      <h3 className="text-xl text-orange-400">Webinar Funnels</h3>
      <p>
        Webinar funnels are highly effective for selling high-ticket products and services. They guide prospects
        from a registration page through a webinar presentation to a sales offer. We build both live and automated
        evergreen webinar funnels that work 24/7 to generate leads and close high-value clients.
      </p>

      <h3 className="text-xl text-orange-400">E-commerce Funnels</h3>
      <p>
        E-commerce funnels are designed to maximize the revenue generated from every customer visit. They include
        product pages, upsell and cross-sell sequences, cart abandonment recovery campaigns, and post-purchase
        follow-up sequences. Our e-commerce funnel strategies are proven to increase average order value and
        customer lifetime value significantly.
      </p>

      <h3 className="text-xl text-orange-400">Appointment Funnels</h3>
      <p>
        Appointment funnels are ideal for service-based businesses that want to book consultations, demos, or
        discovery calls. These funnels guide prospects from an ad or landing page to a calendar booking, ensuring
        a steady flow of qualified appointments for your sales team.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Lead Generation Funnels</li>
        <li>Sales Funnels</li>
        <li>Webinar Funnels</li>
        <li>E-commerce Funnels</li>
        <li>Appointment Funnels</li>
        <li>Tripwire Funnels</li>
        <li>Membership Funnels</li>
        <li>Survey Funnels</li>
      </ul>

      {/* Benefits */}
      <h2 className="text-2xl text-white font-semibold">
        Benefits of Using a Professional Sales Funnel
      </h2>

      <p>
        A properly implemented sales funnel helps businesses scale efficiently by creating predictable revenue
        streams. It eliminates guesswork and provides clear insights into customer behavior, allowing businesses
        to make informed decisions about their marketing and sales strategies.
      </p>

      <p>
        With advanced tracking and analytics, businesses can measure performance, identify bottlenecks, and
        continuously improve their marketing strategies. The data collected from a well-instrumented funnel
        provides invaluable insights into what your customers want, how they behave, and what motivates them
        to buy.
      </p>

      <p>
        A professionally built sales funnel also creates a better customer experience. Instead of overwhelming
        prospects with too much information at once, a funnel delivers the right content at the right moment,
        making the buying process feel natural and effortless. This not only increases conversion rates but also
        improves customer satisfaction and brand perception.
      </p>

      <p>
        Perhaps the most significant benefit of a sales funnel is the ability to scale your business without
        proportionally increasing your workload. Once your funnel is built and optimized, it operates
        automatically, generating leads and sales while you focus on other aspects of your business. This
        scalability is what allows businesses to grow from small operations to industry leaders.
      </p>

      {/* Industries We Serve */}
      <h2 className="text-2xl text-white font-semibold">
        Industries We Serve
      </h2>

      <p>
        Our sales funnel building services are suitable for a wide range of industries and business models.
        We have successfully built high-converting funnels for clients across multiple sectors including:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Coaches and consultants looking to scale their client acquisition</li>
        <li>E-commerce brands aiming to increase revenue per visitor</li>
        <li>B2B companies seeking to generate qualified leads for their sales teams</li>
        <li>Real estate professionals booking more property viewings and consultations</li>
        <li>Healthcare and wellness businesses attracting new patients and clients</li>
        <li>SaaS companies growing their free trial sign-ups and paid subscriptions</li>
        <li>Digital product creators selling online courses and memberships</li>
        <li>Professional service firms including law, accounting, and finance</li>
      </ul>

      <p>
        Regardless of your industry, our team has the expertise to build a funnel that fits your specific
        business model, target audience, and revenue goals.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl text-white font-semibold">
        Why Choose Our Sales Funnel Services?
      </h2>

      <p>
        Our team focuses on building data-driven funnel systems that deliver measurable results. We combine
        strategy, design, and technology to create funnels that not only generate leads but also convert them
        into long-term customers.
      </p>

      <p>
        We prioritize performance, scalability, and ROI, ensuring that every funnel we build contributes to
        your business growth. Our approach is not about creating a one-size-fits-all solution — we take the
        time to understand your specific business, audience, and goals before developing a customized funnel
        strategy that delivers real results.
      </p>

      <p>
        What sets us apart is our commitment to long-term partnership rather than one-time transactions. We
        view every funnel we build as an ongoing project that requires continuous monitoring, testing, and
        optimization. As your business grows and market conditions change, we adapt your funnel strategy to
        ensure sustained performance and profitability.
      </p>

      <p>
        Our team stays at the forefront of digital marketing trends and technologies, ensuring that your funnel
        leverages the latest tools and best practices. From AI-powered personalization to advanced retargeting
        strategies and cutting-edge automation, we use every available resource to give your funnel a
        competitive edge.
      </p>

      <p>
        Transparency is core to how we work. You will always have full visibility into your funnel's performance
        through detailed reporting and regular strategy sessions. We believe that an informed client is an
        empowered client, and we are committed to keeping you updated every step of the way.
      </p>

      {/* Process */}
      <h2 className="text-2xl text-white font-semibold">
        Our Sales Funnel Building Process
      </h2>

      <h3 className="text-xl text-orange-400">Step 1: Discovery & Research</h3>
      <p>
        We begin with a thorough discovery process to understand your business, target audience, competitive
        landscape, and revenue goals. This research phase forms the foundation of your entire funnel strategy
        and ensures that every decision we make is grounded in data and insight.
      </p>

      <h3 className="text-xl text-orange-400">Step 2: Strategy Development</h3>
      <p>
        Based on our research findings, we develop a comprehensive funnel strategy that outlines the stages,
        offers, messaging, traffic sources, and technology stack required to achieve your goals. This strategy
        document serves as the blueprint for your entire funnel build.
      </p>

      <h3 className="text-xl text-orange-400">Step 3: Design & Development</h3>
      <p>
        Our design and development team brings the strategy to life by building high-converting landing pages,
        email sequences, automation workflows, and integrations. Every element is crafted with conversion
        optimization principles in mind, ensuring that your funnel is both visually compelling and functionally
        effective.
      </p>

      <h3 className="text-xl text-orange-400">Step 4: Testing & Launch</h3>
      <p>
        Before going live, we conduct thorough quality assurance testing to ensure every part of your funnel
        works correctly across all devices and browsers. We test all integrations, automation triggers, and
        payment processes to eliminate any potential issues that could impact conversions.
      </p>

      <h3 className="text-xl text-orange-400">Step 5: Optimization & Scaling</h3>
      <p>
        After launch, we continuously monitor your funnel's performance and implement data-driven optimizations
        to improve results over time. As your funnel matures and generates consistent results, we work with you
        to scale your traffic and expand your funnel to capture new market segments.
      </p>

     
    </section>
  
          <FAQSection />
            {/* FAQ SCHEMA */}
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
                                name: "What is a sales funnel?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "A sales funnel is a structured marketing system that guides prospects toward purchase."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide complete funnel automation?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes, we build end-to-end funnel systems including automation and CRM integration."
                                }
                            }
                        ]
                    })
                }}
            />

            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Sales Funnel Building Service",
                        description: "Professional sales funnel strategy, automation and conversion optimization services.",
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