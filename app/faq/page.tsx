import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQ | Digital Marketing Agency in Hyderabad | Epoque Group",
  description:
    "Frequently asked questions about SEO, digital marketing, real estate marketing, branding and revenue growth services in Hyderabad.",
  alternates: {
    canonical: "https://epoquegroup.in/faq",
  },
}

const faqs = [
  {
    question: "What services does Epoque Group offer in Hyderabad?",
    answer:
      "We provide SEO, digital marketing, real estate marketing, branding, interior marketing and revenue growth strategies for businesses. Our team focuses on performance-driven campaigns that generate measurable ROI. We help startups, SMEs, and enterprises scale faster with smart marketing systems.",
  },
  {
    question: "Do you provide SEO services in Hyderabad?",
    answer:
      "Yes, we offer complete SEO services including on-page SEO, technical SEO, local SEO and keyword strategy. Our goal is to improve your Google rankings and drive organic traffic. We focus on long-term growth and sustainable results.",
  },
  {
    question: "Do you specialize in real estate marketing?",
    answer:
      "Yes, we specialize in real estate project marketing and lead generation. We work with developers and builders for project launches and branding. Our strategies are designed to generate high-quality, conversion-focused leads.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes 2–3 months to show visible improvements. Results depend on competition, website authority and keyword difficulty. We provide monthly reports to track progress and performance growth.",
  },
  {
    question: "Can you help increase business revenue?",
    answer:
      "Yes, we design sales funnels and optimize conversion strategies to boost revenue. Our automation systems and targeted campaigns improve lead quality. We focus on scalable systems that drive long-term business growth.",
  },

  // NEW 20 FAQS START HERE

  {
    question: "Why should I choose Epoque Group for digital marketing?",
    answer:
      "We combine data-driven strategies with creative branding solutions. Our campaigns are designed to generate measurable results and ROI. We focus on growth, performance and long-term brand positioning.",
  },
  {
    question: "Do you offer local SEO services for Hyderabad businesses?",
    answer:
      "Yes, we optimize your Google Business Profile and local listings. Our local SEO strategies help you rank in Hyderabad-based searches. This increases visibility, calls and walk-in customers.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with real estate, interior design, healthcare, startups, education and corporate brands. Our marketing strategies are customized based on industry needs. Every campaign is tailored for maximum impact.",
  },
  {
    question: "Do you provide social media marketing services?",
    answer:
      "Yes, we manage Instagram, Facebook and LinkedIn marketing campaigns. Our team creates engaging content and paid ad strategies. We focus on brand awareness, engagement and lead generation.",
  },
  {
    question: "Can you manage Google Ads campaigns?",
    answer:
      "Yes, we run high-performance Google Ads campaigns for leads and sales. Our team optimizes keywords, ad copies and landing pages. We continuously monitor and improve campaigns for better ROI.",
  },
  {
    question: "Do you offer website development services?",
    answer:
      "Yes, we design and develop SEO-friendly websites. Our websites are mobile-responsive, fast-loading and conversion-optimized. We ensure your online presence reflects your brand identity.",
  },
  {
    question: "What makes your real estate marketing strategy different?",
    answer:
      "We focus on qualified lead generation instead of just traffic. Our strategy includes paid ads, landing pages and CRM integration. We help developers close more bookings with structured funnels.",
  },
  {
    question: "Do you provide branding services?",
    answer:
      "Yes, we create brand identity including logo, messaging and positioning. Our branding approach builds trust and recognition. We help businesses stand out in competitive markets.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track KPIs like traffic, conversions, cost per lead and ROI. Detailed monthly reports are shared with clients. Our performance-focused strategy ensures continuous improvement.",
  },
  {
    question: "Can you handle complete digital marketing for my business?",
    answer:
      "Yes, we offer end-to-end digital marketing solutions. From strategy to execution and optimization, we manage everything. This allows you to focus on business operations while we drive growth.",
  },
  {
    question: "Do you provide interior design marketing services?",
    answer:
      "Yes, we create marketing strategies for interior designers and architects. Our campaigns showcase portfolio work effectively. We focus on generating premium leads for high-value projects.",
  },
  {
    question: "Is your SEO strategy safe and Google compliant?",
    answer:
      "Yes, we follow white-hat SEO practices as per Google guidelines. Our methods focus on long-term sustainable rankings. We never use spammy or black-hat techniques.",
  },
  {
    question: "How do I get started with Epoque Group?",
    answer:
      "You can contact us for a free consultation call. We analyze your business goals and current performance. Based on that, we design a customized growth strategy.",
  },
  {
    question: "Do you provide monthly performance reports?",
    answer:
      "Yes, we provide detailed monthly performance and analytics reports. These reports include traffic, leads and campaign insights. Transparency and measurable growth are our priorities.",
  },
  {
    question: "Can you generate high-quality leads for my business?",
    answer:
      "Yes, we specialize in targeted lead generation campaigns. Our funnel strategies focus on quality over quantity. This helps improve conversions and reduce cost per acquisition.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes, we help startups build strong digital foundations. From branding to performance marketing, we handle complete growth strategy. Our scalable solutions grow with your business.",
  },
  {
    question: "What is included in your digital marketing package?",
    answer:
      "Our packages include SEO, social media, paid ads and analytics tracking. We customize services based on business needs. Every plan is designed to maximize ROI.",
  },
  {
    question: "How much do your digital marketing services cost?",
    answer:
      "Pricing depends on your goals, competition and campaign scope. We offer flexible packages for startups and enterprises. Contact us for a customized quotation.",
  },
  {
    question: "Do you provide content marketing services?",
    answer:
      "Yes, we create SEO-optimized blogs and marketing content. Our content strategy improves rankings and builds authority. We focus on engaging, value-driven content.",
  },
  {
    question: "Why is digital marketing important for businesses in Hyderabad?",
    answer:
      "Digital marketing increases online visibility and brand awareness. It helps businesses attract targeted customers in Hyderabad. With the right strategy, it significantly boosts sales and growth.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8">
          <Link href="/">Home</Link> /{" "}
          <span className="text-white">FAQ</span>
        </div>


        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
          Find answers to common questions about our digital marketing and branding services in Hyderabad.
        </p>

        {/* SEO SAFE Accordion using details/summary */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group border border-white/10 rounded-2xl bg-[#111111] p-6 cursor-pointer"
            >
              <summary className="flex justify-between items-center text-orange-400 font-semibold text-lg list-none">
                {faq.question}
                <span className="transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>

      {/* FAQ Schema */}
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}