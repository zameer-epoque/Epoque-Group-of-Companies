export default function OurDivisionsHeader() {
    return (
        <section
            className="relative py-32 px-6 bg-[#1A1A1A]"
            aria-label="Our Divisions - Époque Group"
        >
            <div className="max-w-6xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
                    Our{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                        Divisions
                    </span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    Four pillars of excellence, united by a singular vision — to transform
                    industries and elevate experiences across physical and digital spaces.
                </p>

                {/* GRADIENT DIVIDER */}
                <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 hover:w-40" />
            </div>
        </section>
    )
}
