import Image from "next/image"

export default function Hero(): JSX.Element {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 bg-black overflow-hidden"
      aria-label="Époque Group Hero Section"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[160px]" />
      </div>

      <div className="max-w-5xl text-center">

        {/* LOGO */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logo.png"
            alt="Époque Group of Companies logo"
            width={220}
            height={220}
            priority
          />
        </div>

        {/* MAIN SEO HEADING */}
        <h1 className="font-heading text-4xl md:text-6xl xl:text-7xl font-semibold leading-tight text-white">
          Bridging{" "}
          <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
            Creativity, Commerce & Culture
          </span>
        </h1>

        {/* SUPPORTING SEO CONTENT */}
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed font-body">
          Transforming visions into reality through innovation, design, and
          strategic excellence across luxury real estate, interiors, digital
          experiences, and revenue architecture.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/contact"
            className="px-10 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:opacity-90 transition"
          >
            Start a Conversation
          </a>

          <a
            href="/realty"
            className="px-10 py-4 rounded-full font-semibold text-white border border-white/20 hover:border-[#C79A3B] transition"
          >
            Explore Our Divisions
          </a>
        </div>
      </div>
    </section>
  )
}
