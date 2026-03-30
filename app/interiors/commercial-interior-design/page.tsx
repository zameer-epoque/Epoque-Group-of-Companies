import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import CommercialInteriorFAQSection from "./CommercialInteriorFAQSection";
import WhyChooseCommercialInteriorSection from "./WhyChooseCommercialInteriorSection";

export const metadata: Metadata = {
  title:
    "Commercial Interior Designers in Hyderabad | Office & Corporate Interiors",
  description:
    "Epoque Group is a leading commercial interior design company in Hyderabad specializing in luxury office interiors, corporate spaces, retail interiors and turnkey commercial interior solutions.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/commercial-interior-design",
  },
  openGraph: {
    title:
      "Commercial Interior Designers in Hyderabad | Epoque Group",
    description:
      "Premium office and corporate interior design services in Hyderabad.",
    url: "https://epoquegroup.in/interiors/commercial-interior-design",
    siteName: "Epoque Group",
    type: "website",
  },
};

export default function CommercialInteriorDesignPage() {
  return (
    <main className="relative bg-[#0B0F19] text-white overflow-hidden">

      {/* Subtle Gold Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[150px] rounded-full"></div>

      {/* HERO SECTION */}
      <section className="relative py-32 px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Commercial Interior Designers in{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Hyderabad
            </span>
          </h1>
          <div className="inline-block px-8 py-4 mt-2 rounded-full 
border border-[#D4AF37]/40 bg-[#111827] 
text-[17px] text-gray-300 tracking-wide">
            Hyderabad’s Premium Commercial Interior Specialists
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Epoque Group delivers premium commercial interior design solutions
            for offices, corporate headquarters, retail outlets and business spaces.
            We create modern, high-performance work environments that enhance productivity
            and strengthen brand identity.
          </p>

          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed">
            From strategic space planning and concept design to complete turnkey execution,
            our commercial interior designers ensure seamless project delivery
            across Gachibowli, Financial District, HITEC City and Jubilee Hills.
          </p>

          {/* PREMIUM GRADIENT BUTTON */}
          <div className="pt-8">
            <Link
              href="/contact"
              className="px-14 py-5 rounded-full font-semibold text-black
                            bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500
              hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]
              transition-all duration-300 shadow-xl"
            >
              Get Commercial Interior Consultation
            </Link>
          </div>

        </div>
      </section>
{/* ABOUT COMMERCIAL INTERIORS */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto space-y-6">

    <h2 className="text-3xl md:text-4xl font-semibold">
      Best Commercial Interior Designers in Hyderabad
    </h2>

    <p className="text-gray-300 leading-relaxed">
      Epoque Group is recognized as one of the best commercial interior designers in Hyderabad,
      delivering innovative and functional design solutions for modern businesses. We specialize
      in creating office interiors, corporate environments, retail outlets and commercial spaces
      that reflect your brand identity and business goals.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Our expert team focuses on space optimization, modern aesthetics, and ergonomic design to
      enhance productivity and employee well-being. Whether you need a complete office setup or
      renovation, we provide end-to-end commercial interior solutions in Hyderabad.
    </p>

  </div>
</section>
{/* SEO CONTENT SECTION */}
<section className="py-24 px-6">
  <div className="max-w-6xl mx-auto space-y-12">

    {/* SECTION 1 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Best Commercial Interior Designers in Hyderabad
      </h2>

      <p className="text-gray-300 leading-relaxed">
        Commercial interior design in Hyderabad has become a key factor for businesses looking to establish a strong brand presence, improve employee productivity and create impactful customer experiences. At Epoque Group, we are recognized as one of the leading commercial interior designers in Hyderabad, delivering innovative and functional design solutions for modern businesses.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our commercial interior design services focus on transforming office spaces, corporate environments, retail outlets and commercial buildings into high-performance workspaces that reflect professionalism, creativity and efficiency.
      </p>
    </div>

    {/* SECTION 2 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Office Interior Design for Productivity & Growth
      </h2>

      <p className="text-gray-300 leading-relaxed">
        Office interior design is essential for improving workflow, employee comfort and productivity. We design modern office interiors with smart layouts, ergonomic furniture and optimized lighting to create efficient work environments.
      </p>

      <p className="text-gray-400 leading-relaxed">
        From open workspaces and executive cabins to meeting rooms and breakout zones, our designs are tailored to meet your business needs while maintaining a professional and modern aesthetic.
      </p>
    </div>

    {/* SECTION 3 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Retail & Commercial Space Interior Design
      </h2>

      <p className="text-gray-300 leading-relaxed">
        Retail interior design plays a crucial role in enhancing customer experience and increasing sales. We design visually appealing retail spaces, showrooms and commercial outlets that attract customers and reflect brand identity.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our designs focus on layout optimization, lighting, branding and customer flow to ensure maximum engagement and business growth.
      </p>
    </div>

    {/* SECTION 4 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Turnkey Commercial Interior Solutions
      </h2>

      <p className="text-gray-300 leading-relaxed">
        Epoque Group provides complete turnkey commercial interior solutions including space planning, design, execution and final delivery. We handle every aspect of the project to ensure a seamless and hassle-free experience.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Our structured approach ensures timely delivery, cost efficiency and premium quality standards across all commercial interior projects.
      </p>
    </div>

    {/* SECTION 5 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Commercial Interior Designers Near You in Hyderabad
      </h2>

      <p className="text-gray-300 leading-relaxed">
        We provide commercial interior design services across Hyderabad including Gachibowli, HITEC City, Madhapur, Financial District, Jubilee Hills and Banjara Hills.
      </p>

      <p className="text-gray-400 leading-relaxed">
        If you are searching for commercial interior designers near me, Epoque Group is your trusted partner for delivering high-quality and professional interior solutions.
      </p>
    </div>

    {/* SECTION 6 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Commercial Interior Design Cost in Hyderabad
      </h2>

      <p className="text-gray-300 leading-relaxed">
        Commercial interior design costs in Hyderabad typically range from ₹1500 to ₹4000 per sq.ft depending on materials, customization and project scope.
      </p>

      <p className="text-gray-400 leading-relaxed">
        We provide transparent pricing and customized solutions based on your budget while ensuring premium quality and long-term durability.
      </p>
    </div>

    {/* SECTION 7 */}
    <div className="space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold">
        Transform Your Commercial Space with Epoque Group
      </h2>

      <p className="text-gray-300 leading-relaxed">
        A well-designed commercial space enhances productivity, improves customer experience and strengthens brand identity. At Epoque Group, we create modern, functional and high-performance interiors tailored for your business.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Contact us today to transform your office or commercial space with premium interior design solutions in Hyderabad.
      </p>
    </div>

  </div>
</section>
      {/* WHY CHOOSE SECTION */}
      <WhyChooseCommercialInteriorSection />

      {/* FAQ SECTION */}
      <CommercialInteriorFAQSection />

      {/* SCHEMA */}
      <Script
        id="commercial-interior-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Interior Design Services",
            areaServed: "Hyderabad",
            provider: {
              "@type": "Organization",
              name: "Epoque Group",
              url: "https://epoquegroup.in"
            }
          }),
        }}
      />

    </main>
  );
}