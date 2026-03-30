import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import FAQSection from "./FAQSection";
import WhyChooseSection from "./WhyChooseSection";
import InteriorSEOContentSection from "./InteriorSEOContentSection";

export const metadata: Metadata = {
  title:
    "Best Interior Designers in Hyderabad | Luxury Home & Office Interiors",
  description:
    "Top interior designers in Hyderabad offering luxury villa interiors, modular kitchens, office interiors and turnkey solutions.",
  alternates: {
    canonical:
      "https://epoquegroup.in/interiors/interior-designers-in-hyderabad",
  },
};

export default function InteriorDesignersHyderabad() {
  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Interior Designers in Hyderabad
          </h1>

          <p className="text-gray-300">
            Epoque Group delivers premium interior design solutions for homes,
            villas, and offices with modern aesthetics and functionality.
          </p>

          <p className="text-gray-400">
            We specialize in luxury interiors, modular kitchens, and turnkey
            interior design services tailored to your lifestyle.
          </p>

          <div className="pt-6">
            <Link
              href="/contact"
              className="px-12 py-5 rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 text-black font-semibold shadow-lg hover:scale-105 transition"
            >
              Book Free Consultation 
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-28 px-6 bg-[#0B0F19] overflow-hidden">

        <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-orange-500/20 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Top Interior Designers in{" "}
              <span className="text-yellow-400">Hyderabad</span>
            </h2>

            <p className="text-gray-300">
              Epoque Group is a leading interior design company in Hyderabad,
              offering premium residential and commercial interior solutions.
            </p>

            <p className="text-gray-400">
              We focus on modern design, space planning, and premium materials to
              create interiors that are both stylish and functionalty.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-sm">
              <div className="bg-white/5 p-4 rounded-xl">✔ Luxury Homes</div>
              <div className="bg-white/5 p-4 rounded-xl">✔ Villa Interiors</div>
              <div className="bg-white/5 p-4 rounded-xl">✔ Office Design</div>
              <div className="bg-white/5 p-4 rounded-xl">✔ Turnkey Solutions</div>
            </div>

            <Link
              href="/contact"
              className="inline-block mt-4 px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold"
            >
              Get Free Quote
            </Link>
          </div>

          {/* RIGHT */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Why Choose Epoque Group?
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>✔ Experienced Designers</li>
              <li>✔ Premium Materials</li>
              <li>✔ Customized Designs</li>
              <li>✔ On-Time Delivery</li>
              <li>✔ Transparent Pricing</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-[#111827]">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Interior Design Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Home Interiors",
              "Villa Interiors",
              "Office Interiors",
              "Retail Interiors",
              "Modular Kitchens",
              "Turnkey Solutions",
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-400/40 transition"
              >
                <h3 className="text-xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-400">
                  High-quality {service.toLowerCase()} with modern design,
                  functionality, and premium execution.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      


      
   
 

   
 

      {/* LOCATION SEO */}
     <section className="relative py-28 px-6 bg-[#0B0F19] text-white overflow-hidden">

  {/* Glow Background */}
  <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-orange-500/20 blur-[100px] rounded-full"></div>
  <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-500/20 blur-[100px] rounded-full"></div>

  <div className="max-w-6xl mx-auto text-center space-y-10 relative z-10">

    {/* TITLE */}
    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
      Interior Designers Near You in{" "}
      <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-red-500 bg-clip-text text-transparent">
        Hyderabad
      </span>
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
      Looking for the best interior designers near you in Hyderabad? Epoque Group
      offers premium interior design services across all major locations including
      Gachibowli, Kokapet, Jubilee Hills, Banjara Hills, Madhapur, and Financial District.
      Our expert team delivers customized interior solutions for homes, villas,
      offices, and commercial spaces with modern design and high-quality execution.
    </p>

    <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
      Whether you need luxury home interiors, modular kitchens, or office interior
      design, we provide end-to-end services tailored to your requirements. Our
      local expertise ensures faster execution, better understanding of your needs,
      and seamless project delivery.
    </p>

    {/* LOCATION TAGS */}
    <div className="flex flex-wrap justify-center gap-3 pt-4">
      {[
        "Gachibowli",
        "Madhapur",
        "Jubilee Hills",
        "Banjara Hills",
        "Kokapet",
        "Financial District",
      ].map((area, i) => (
        <span
          key={i}
          className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-yellow-400/40 transition"
        >
          {area}
        </span>
      ))}
    </div>

    {/* CTA */}
   

  </div>
</section>



      {/* EXISTING COMPONENTS */}
      <InteriorSEOContentSection />
      <WhyChooseSection />
      <FAQSection />

      {/* SCHEMA */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Epoque Group",
            areaServed: "Hyderabad",
            url: "https://epoquegroup.in",
          }),
        }}
      />

    </main>
  )
}