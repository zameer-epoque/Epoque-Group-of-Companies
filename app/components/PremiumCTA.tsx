// import Link from "next/link"

// export default function PremiumCTA() {
//     return (
//         <section className="py-6 bg-gradient-to-r from-yellow-200 via-amber-300 to-orange-200">

//             <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

//                 {/* Text */}
//                 <h3 className="text-black text-lg md:text-[20px] font-bold tracking-wide text-center md:text-left">
//                    Discover Premium Luxury Residences, Digital Marketing, and Interior Design Services in Hyderabad.
//                 </h3>

//                 {/* Button */}
//                 <Link
//                     href="/contact"
//                     className="px-8 py-3 rounded-full bg-black text-white font-semibold text-sm md:text-base shadow-xl hover:bg-white hover:text-black transition-all duration-300"
//                 >
//                     Contact Now →
//                 </Link>

//             </div>

//         </section>
//     )
// }


import Link from "next/link"

export default function PremiumCTA() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-r
        from-[#e6b650]
        via-[#e6b650]
        to-[#e6b650]
        py-8
      "
      aria-label="Real Estate Marketing Agency and Luxury Property Services in Hyderabad"
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-black/20 blur-3xl" />
      </div>

      <div
        className="
          relative mx-auto flex max-w-7xl
          flex-col items-center justify-between
          gap-8 px-6 md:flex-row
        "
      >

        {/* Left Content */}
        <div className="max-w-4xl">

          {/* Badge */}
          <div
            className="
              mb-4 inline-flex
              rounded-full border border-white/20
              bg-white/10 px-4 py-2
              text-xs font-medium uppercase tracking-[0.2em]
              text-white backdrop-blur-md
            "
          >
            Real Estate • SEO • Lead Generation • Luxury Interiors
          </div>

          {/* Heading */}
          <h3
            className="
              text-center text-2xl font-bold
              leading-snug text-white
              md:text-left md:text-[34px]
            "
          >
            Discover Luxury Real Estate,{" "}
            <span className="text-[#FFD369]">
              AI-Powered Digital Marketing
            </span>{" "}
            & Premium Interior Design Solutions in Hyderabad
          </h3>

          {/* SEO Text */}
          <p
            className="
              mt-4 max-w-3xl
              text-center text-base leading-relaxed
              text-white/80 md:text-left md:text-lg
            "
          >
            Époque Group delivers real estate marketing, SEO services,
            performance advertising, luxury villas, interior execution,
            lead generation systems, and revenue growth solutions engineered
            for modern businesses and high-value property brands.
          </p>

        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="
            group relative overflow-hidden
            rounded-full border border-white/10
            bg-black px-9 py-4
            text-sm font-semibold text-white
            shadow-2xl transition-all duration-300
            hover:scale-105 hover:bg-white hover:text-black
            md:text-base
          "
        >

          {/* Shine */}
          <span
            className="
              absolute inset-0
              bg-gradient-to-r
              from-transparent via-white/20 to-transparent
              opacity-0 transition duration-700
              group-hover:translate-x-full group-hover:opacity-100
            "
          />

          <span className="relative z-10 flex items-center gap-2">
            Get Free Consultation
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>

        </Link>

      </div>
    </section>
  )
}