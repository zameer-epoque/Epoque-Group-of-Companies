"use client"

import { motion } from "framer-motion"
import Script from "next/script"
import Link from "next/link"
import MarketingFAQGrid from "./marketing-automation/MarketingFAQGrid"

export default function MarketingAutomationClient() {
    return (
        <section className="bg-black text-white">

            {/* HERO */}
            <div className="relative overflow-hidden py-28 px-6 text-center">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-500/20 blur-[150px] rounded-full"></div>

                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
                        Marketing Automation for{" "}
                        <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
                            Scalable Revenue Growth
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We design advanced marketing automation systems that streamline CRM workflows and sales processes.
                    </p>

                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 rounded-full font-semibold text-black 
              bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 
              hover:scale-105 transition duration-300 shadow-xl">
                            Automate My Marketing
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES GRID */}
            <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-10">
                {[
                    {
                        title: "CRM Workflow Automation",
                        desc: "Automated lead assignment and sales tracking."
                    },
                    {
                        title: "Email Automation",
                        desc: "Personalized nurturing sequences."
                    },
                    {
                        title: "Lead Scoring & Segmentation",
                        desc: "Smart targeting based on user behavior."
                    }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500"
                    >
                        <div className="p-10 rounded-3xl bg-[#121212] border border-orange-500/20">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {item.title}
                            </h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>



    <section className="max-w-6xl mx-auto px-6 py-8 text-gray-400 space-y-8">

      <h2 className="text-4xl font-bold text-white">
        Marketing Automation Services to Scale Your Business on Autopilot 🚀
      </h2>

      <p>
        In today's fast-paced digital world, manually managing every aspect of your marketing is
        not only inefficient but also unsustainable as your business grows. Marketing automation
        allows businesses to streamline repetitive tasks, deliver personalized experiences at scale,
        and focus their energy on high-impact strategic activities that drive real growth.
      </p>

      <p>
        Marketing automation is the use of software and technology to automate marketing tasks,
        workflows, and campaigns across multiple channels. From email sequences and lead nurturing
        to social media posting and CRM updates, automation eliminates manual work and ensures
        consistent, timely communication with every prospect and customer in your database.
      </p>

      <p>
        Whether you are a small business looking to save time or a growing enterprise aiming to
        scale your customer acquisition and retention efforts, our marketing automation services
        are designed to build intelligent systems that work around the clock — generating leads,
        nurturing prospects, and closing sales even while you sleep.
      </p>

      {/* What is Marketing Automation */}
      <h2 className="text-2xl text-white font-semibold">
        What is Marketing Automation?
      </h2>

      <p>
        Marketing automation refers to the use of technology platforms and software to automate
        repetitive marketing tasks and manage complex multi-channel campaigns with minimal manual
        effort. It enables businesses to send the right message to the right person at the right
        time — automatically — based on user behavior, preferences, and stage in the buyer journey.
      </p>

      <p>
        At its core, marketing automation connects your marketing channels, customer data, and
        communication tools into a unified system that operates intelligently based on predefined
        rules and triggers. When a user visits a specific page, downloads a resource, clicks an
        email, or abandons a cart, your automation system responds with a relevant, personalized
        action — without any manual intervention required.
      </p>

      <p>
        Modern marketing automation platforms go far beyond simple email scheduling. They include
        CRM integration, lead scoring, behavioral tracking, dynamic content personalization,
        multi-channel campaign management, and advanced analytics — all working together to create
        a seamless, highly efficient marketing operation that scales with your business.
      </p>

      <p>
        Businesses that implement marketing automation consistently report higher lead generation
        rates, improved conversion rates, reduced marketing costs, and stronger customer retention.
        Automation is not about replacing the human element of marketing — it is about amplifying
        it by handling the repetitive execution so your team can focus on strategy, creativity,
        and relationship building.
      </p>

      {/* Why Marketing Automation is Important */}
      <h2 className="text-2xl text-white font-semibold">
        Why Marketing Automation is Important for Your Business
      </h2>

      <p>
        Without automation, businesses are forced to choose between scale and personalization.
        Manual marketing processes can only reach so many people with so much consistency before
        the workload becomes unmanageable. Marketing automation solves this fundamental challenge
        by enabling businesses to deliver personalized, timely communications to thousands of
        contacts simultaneously — without proportionally increasing their team size or workload.
      </p>

      <p>
        The speed and consistency that automation provides also gives businesses a significant
        competitive advantage. When a lead fills out a form on your website, an automated system
        can respond within seconds with a personalized welcome email, a follow-up sequence, and
        a task assigned to your sales team — all before a competitor has even noticed the inquiry.
        This speed-to-lead advantage can dramatically improve conversion rates, especially in
        competitive markets where prospects are evaluating multiple options simultaneously.
      </p>

      <p>
        Marketing automation also provides unprecedented visibility into your customer journey.
        By tracking every interaction across email, website, social media, and advertising channels,
        automation platforms give you a complete picture of how leads move through your funnel,
        which touchpoints drive the most conversions, and where prospects are dropping off. These
        insights enable smarter marketing decisions and continuous improvement over time.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Save hundreds of hours per month by automating repetitive marketing tasks</li>
        <li>Deliver personalized experiences to thousands of leads and customers simultaneously</li>
        <li>Respond to leads instantly with automated follow-up sequences</li>
        <li>Improve lead quality through behavioral scoring and segmentation</li>
        <li>Increase revenue through automated upsell, cross-sell, and retention campaigns</li>
        <li>Gain complete visibility into your customer journey and campaign performance</li>
        <li>Scale your marketing efforts without proportionally increasing team size or costs</li>
        <li>Reduce human error and ensure consistent brand messaging across all channels</li>
      </ul>

      {/* Our Services */}
      <h2 className="text-2xl text-white font-semibold">
        Our Marketing Automation Services
      </h2>

      <p>
        We provide end-to-end marketing automation services that cover strategy, platform setup,
        workflow development, integration, and ongoing optimization. Our team has deep expertise
        across leading automation platforms and a proven track record of building systems that
        deliver measurable business results.
      </p>

      <h3 className="text-xl text-orange-400">1. Marketing Automation Strategy & Planning</h3>
      <p>
        Every successful automation program begins with a clear strategy. We work with you to
        define your automation goals, map your customer journey, identify key touchpoints, and
        design a comprehensive automation blueprint that aligns with your business objectives.
        Our strategy process includes audience segmentation planning, workflow mapping, content
        requirements, platform selection, and KPI definition — ensuring that your automation
        system is built on a solid strategic foundation from day one.
      </p>

      <h3 className="text-xl text-orange-400">2. Email Marketing Automation</h3>
      <p>
        Email remains one of the highest-ROI marketing channels available, and automation makes
        it even more powerful. We design and build automated email sequences that nurture leads,
        onboard new customers, drive repeat purchases, and re-engage inactive subscribers. Our
        email automation workflows are crafted with deep attention to timing, segmentation,
        personalization, and persuasive copywriting to maximize open rates, click-through rates,
        and conversions at every stage of the customer lifecycle.
      </p>

      <h3 className="text-xl text-orange-400">3. Lead Nurturing Workflows</h3>
      <p>
        Most leads are not ready to buy immediately. Effective lead nurturing keeps your brand
        top of mind and builds the trust needed to convert prospects into customers over time.
        We build multi-step lead nurturing workflows that deliver educational content, social
        proof, case studies, and targeted offers based on where each lead is in their buying
        journey. These workflows ensure that no lead is left behind and that every prospect
        receives the right information at the right time to move them closer to a purchase decision.
      </p>

      <h3 className="text-xl text-orange-400">4. CRM Integration & Setup</h3>
      <p>
        A well-integrated CRM is the backbone of any marketing automation system. We set up and
        integrate CRM platforms including HubSpot, Salesforce, GoHighLevel, Zoho, and others
        with your marketing automation tools to create a unified view of every contact in your
        database. This integration ensures seamless data flow between marketing and sales,
        enabling better lead handoff, more accurate reporting, and a complete picture of each
        customer's journey from first touch to closed deal.
      </p>

      <h3 className="text-xl text-orange-400">5. Lead Scoring & Segmentation</h3>
      <p>
        Not all leads are equal, and treating them as such wastes resources and reduces conversion
        rates. We implement lead scoring systems that automatically rank leads based on their
        behavior, demographics, and engagement level. High-scoring leads are automatically
        prioritized for sales follow-up while lower-scoring leads continue through nurture
        sequences. Combined with advanced segmentation, this ensures that every contact receives
        messaging tailored to their specific interests, behaviors, and stage in the buying process.
      </p>

      <h3 className="text-xl text-orange-400">6. Multi-Channel Campaign Automation</h3>
      <p>
        Today's customers interact with brands across multiple channels including email, SMS,
        social media, paid advertising, and website. We build multi-channel automation workflows
        that coordinate messaging across all these touchpoints to create a cohesive, consistent
        customer experience. Whether it is a coordinated product launch campaign, a cart
        abandonment sequence, or a post-purchase upsell flow, our multi-channel automations
        ensure that your brand stays present and relevant wherever your customers are.
      </p>

      <h3 className="text-xl text-orange-400">7. SMS & Chat Automation</h3>
      <p>
        SMS marketing consistently achieves open rates above 90%, making it one of the most
        effective channels for time-sensitive communications. We set up SMS automation workflows
        for appointment reminders, promotional offers, follow-up messages, and re-engagement
        campaigns. We also implement chat automation using platforms like ManyChat and Intercom
        to engage website visitors and social media followers with personalized automated
        conversations that capture leads and drive conversions.
      </p>

      <h3 className="text-xl text-orange-400">8. Analytics, Reporting & Optimization</h3>
      <p>
        We configure comprehensive tracking and reporting dashboards that give you complete
        visibility into the performance of your automation workflows. From email open rates and
        click-through rates to lead conversion rates, revenue attribution, and customer lifetime
        value, our reporting systems provide the insights needed to continuously optimize your
        automation programs. Regular performance reviews ensure that your automation system
        evolves with your business and continues to deliver improving results over time.
      </p>

      {/* How It Works */}
      <h2 className="text-2xl text-white font-semibold">
        Our Marketing Automation Process
      </h2>

      <p>
        We follow a proven, structured process for building and deploying marketing automation
        systems that deliver consistent, measurable results. Our process is designed to minimize
        disruption to your existing operations while rapidly deploying automation capabilities
        that generate immediate business value.
      </p>

      <h3 className="text-orange-400">Step 1: Discovery & Audit</h3>
      <p>
        We begin by auditing your existing marketing stack, CRM data, email lists, and current
        automation workflows to understand what is already in place and where the biggest
        opportunities lie. We also conduct a thorough review of your customer journey to identify
        key touchpoints, gaps in communication, and areas where automation can have the greatest
        immediate impact on leads and revenue.
      </p>

      <h3 className="text-orange-400">Step 2: Strategy & Workflow Design</h3>
      <p>
        Based on the discovery audit, we develop a comprehensive automation strategy and design
        detailed workflow maps for every automation we plan to build. These workflow maps are
        reviewed and approved with you before any development begins, ensuring that the final
        system aligns perfectly with your business processes, brand voice, and customer experience
        standards.
      </p>

      <h3 className="text-orange-400">Step 3: Platform Setup & Integration</h3>
      <p>
        We handle the complete technical setup of your chosen marketing automation platform,
        including CRM integration, website tracking, form connections, and third-party tool
        integrations. Our team ensures that all data flows correctly between systems and that
        your automation platform is properly configured to capture and act on the behavioral
        signals that drive your workflows.
      </p>

      <h3 className="text-orange-400">Step 4: Content & Copy Development</h3>
      <p>
        We develop the email copy, SMS messages, landing page content, and other assets required
        to power your automation workflows. Our copywriting team crafts compelling, personalized
        messages that reflect your brand voice and are optimized for engagement and conversion
        at every stage of the customer journey.
      </p>

      <h3 className="text-orange-400">Step 5: Testing & Launch</h3>
      <p>
        Before going live, we conduct thorough end-to-end testing of every workflow, trigger,
        and integration to ensure everything functions correctly. We test all automation sequences
        across different scenarios and audience segments to identify and resolve any issues before
        they impact your leads or customers. Only after comprehensive quality assurance do we
        deploy your automation system to your live audience.
      </p>

      <h3 className="text-orange-400">Step 6: Monitoring & Optimization</h3>
      <p>
        After launch, we continuously monitor the performance of your automation workflows and
        implement data-driven optimizations to improve results over time. We analyze open rates,
        click-through rates, conversion rates, and revenue metrics to identify areas for improvement
        and test new variations that enhance performance. Our goal is to build an automation system
        that gets smarter and more effective with every passing month.
      </p>

      {/* Platforms We Work With */}
      <h2 className="text-2xl text-white font-semibold">
        Marketing Automation Platforms We Work With
      </h2>

      <p>
        We have deep expertise across the leading marketing automation platforms and can recommend
        the best solution for your specific business needs, budget, and technical requirements.
        Our platform-agnostic approach ensures that you get the right tool for your business
        rather than being locked into a solution that does not fit your needs.
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>HubSpot — ideal for inbound marketing and B2B lead nurturing</li>
        <li>GoHighLevel — powerful all-in-one platform for agencies and service businesses</li>
        <li>ActiveCampaign — best-in-class email automation and CRM for SMBs</li>
        <li>Klaviyo — the leading platform for e-commerce email and SMS automation</li>
        <li>Mailchimp — accessible and effective for small businesses and startups</li>
        <li>Salesforce Marketing Cloud — enterprise-grade automation for large organizations</li>
        <li>Zoho CRM & Campaigns — cost-effective solution for growing businesses</li>
        <li>ManyChat — leading platform for Facebook Messenger and Instagram automation</li>
        <li>Zapier & Make — powerful integration tools that connect your entire marketing stack</li>
      </ul>

      {/* Types of Automation */}
      <h2 className="text-2xl text-white font-semibold">
        Types of Marketing Automation We Build
      </h2>

      <h3 className="text-xl text-orange-400">Welcome & Onboarding Sequences</h3>
      <p>
        First impressions matter. We build automated welcome sequences that immediately engage
        new leads and customers with personalized messaging that sets expectations, delivers
        value, and guides them toward their next action. Effective onboarding automation
        dramatically improves early engagement rates and reduces churn for subscription-based
        businesses and SaaS platforms.
      </p>

      <h3 className="text-xl text-orange-400">Lead Nurture Campaigns</h3>
      <p>
        Long-term lead nurturing sequences that deliver educational content, case studies,
        testimonials, and targeted offers over days, weeks, or months to convert cold prospects
        into warm, sales-ready leads. These campaigns are segmented based on lead source,
        industry, and behavior to ensure maximum relevance and engagement.
      </p>

      <h3 className="text-xl text-orange-400">Cart Abandonment Recovery</h3>
      <p>
        For e-commerce businesses, cart abandonment represents one of the largest sources of
        recoverable revenue. We build multi-step cart abandonment sequences that automatically
        follow up with shoppers who leave without completing their purchase, using personalized
        messaging, social proof, and strategic incentives to bring them back and close the sale.
      </p>

      <h3 className="text-xl text-orange-400">Re-engagement Campaigns</h3>
      <p>
        Inactive subscribers and lapsed customers represent significant untapped revenue potential.
        We build automated re-engagement campaigns that identify disengaged contacts and deliver
        targeted messaging designed to rekindle their interest and bring them back into your
        active customer base. These campaigns help maintain list hygiene while recovering revenue
        from contacts that would otherwise be lost.
      </p>

      <h3 className="text-xl text-orange-400">Post-Purchase & Upsell Automation</h3>
      <p>
        The relationship with a customer does not end at the point of purchase — it begins there.
        We build post-purchase automation sequences that thank customers, guide them through
        product onboarding, solicit reviews, and introduce complementary products or services
        through automated upsell and cross-sell campaigns that increase customer lifetime value.
      </p>

      {/* Benefits */}
      <h2 className="text-2xl text-white font-semibold">
        Benefits of Marketing Automation for Business Growth
      </h2>

      <p>
        Marketing automation delivers a wide range of measurable benefits that directly impact
        your bottom line. Businesses that invest in automation consistently outperform their
        competitors in lead generation efficiency, conversion rates, and customer retention metrics.
      </p>

      <p>
        One of the most immediate benefits of automation is the time it frees up for your team.
        Tasks that previously required hours of manual work — sending follow-up emails, updating
        CRM records, segmenting contact lists, scheduling social posts — are handled automatically,
        allowing your team to focus on high-value activities like strategy, creative development,
        and relationship building.
      </p>

      <p>
        Automation also enables a level of personalization at scale that is simply impossible to
        achieve manually. By leveraging behavioral data, purchase history, and demographic information,
        automated systems can deliver highly relevant, individualized experiences to thousands of
        contacts simultaneously — improving engagement and conversion rates across every stage
        of the customer journey.
      </p>

      {/* Why Choose Us */}
      <h2 className="text-2xl text-white font-semibold">
        Why Choose Our Marketing Automation Services?
      </h2>

      <p>
        Our team brings together expertise in marketing strategy, automation technology, CRM
        integration, copywriting, and data analytics to deliver automation systems that are not
        just technically functional but strategically powerful. We do not simply set up workflows
        and walk away — we build automation programs designed for long-term performance and
        continuous improvement.
      </p>

      <p>
        We take a business-first approach to every automation project. Before recommending any
        platform or building any workflow, we take the time to understand your business model,
        customer journey, revenue goals, and existing marketing stack. This ensures that the
        automation system we build is perfectly tailored to your specific situation rather than
        a generic template applied to every client.
      </p>

      <p>
        Our transparent reporting keeps you fully informed of your automation system's performance
        at all times. You will always know how your workflows are performing, what your leads are
        doing, and what impact your automation is having on revenue. We believe that informed
        clients make better partners, and we are committed to providing the visibility and insights
        you need to make confident business decisions.
      </p>

      {/* Industries */}
      <h2 className="text-2xl text-white font-semibold">
        Industries We Serve
      </h2>

      <p>
        Our marketing automation services are designed to deliver results across a wide range of
        industries and business models. We have successfully implemented automation programs for:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>E-commerce brands automating cart recovery, post-purchase, and retention campaigns</li>
        <li>Coaches and consultants nurturing leads and booking high-ticket clients automatically</li>
        <li>Real estate agencies automating lead follow-up and property inquiry management</li>
        <li>SaaS companies onboarding users and reducing churn through lifecycle automation</li>
        <li>Healthcare providers automating appointment reminders and patient communications</li>
        <li>B2B companies building long-term lead nurture programs for extended sales cycles</li>
        <li>Education and online course businesses automating enrollment and student engagement</li>
        <li>Financial services firms managing lead nurturing and client communication workflows</li>
      </ul>

      {/* FAQ */}
    

    </section>


            <MarketingFAQGrid/>
        
           
            {/* SERVICE SCHEMA */}
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Marketing Automation Service",
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