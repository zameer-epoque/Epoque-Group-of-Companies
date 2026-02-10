export default function VisionMissionPromise() {
    return (
        <section
            className="relative py-6 px-6 bg-[#1A1A1A] overflow-hidden"
            aria-label="Our Vision, Mission and Promise - Époque Group"
        >
            {/* BACKGROUND GRADIENT GLOW */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[180px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* SECTION TITLE */}
                <div className="max-w-4xl mx-auto text-center mb-28 group">
                    <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
                        Our{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Vision, Mission & Promise
                        </span>

                        {/* HOVER UNDERLINE */}
                        <span
                            className="absolute left-1/2 -bottom-4 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] transition-all duration-500 ease-out group-hover:w-full"
                        />
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed font-body">
                        The principles that guide how we think, create, and deliver enduring
                        value across every space we shape.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-14 md:grid-cols-3">
                    {/* VISION */}
                    <div className="group relative border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#C79A3B] hover:shadow-[0_0_40px_rgba(199,154,59,0.2)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            🚀
                        </div>

                        <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                            Our Vision
                        </h3>

                        <p className="text-[#C79A3B] font-medium mb-6">
                            Shaping Tomorrow&apos;s Landscape
                        </p>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            To be the catalyst that transforms ambition into achievement, where
                            creativity fuels commerce and culture defines legacy. We envision a
                            world where every space—digital or physical—becomes a masterpiece
                            of innovation.
                        </p>
                    </div>

                    {/* MISSION */}
                    <div className="group relative border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#D45B5B] hover:shadow-[0_0_40px_rgba(212,91,91,0.2)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            ⭐
                        </div>

                        <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                            Our Mission
                        </h3>

                        <p className="text-[#D45B5B] font-medium mb-6">
                            Excellence Without Boundaries
                        </p>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            We architect experiences that transcend expectations. Through
                            strategic insight, creative prowess, and unwavering commitment, we
                            deliver solutions that don’t just meet today’s needs—they anticipate
                            tomorrow’s possibilities.
                        </p>
                    </div>

                    {/* PROMISE */}
                    <div className="group relative border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#7A2E63] hover:shadow-[0_0_40px_rgba(122,46,99,0.22)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            🤝
                        </div>

                        <h3 className="font-heading text-2xl font-semibold text-white mb-2">
                            Our Promise
                        </h3>

                        <p className="text-[#7A2E63] font-medium mb-6">
                            Your Success, Our Legacy
                        </p>

                        <p className="text-gray-400 leading-relaxed text-sm">
                            Every partnership is a journey of transformation. We invest not
                            just our expertise, but our passion—ensuring your vision becomes a
                            reality that inspires, endures, and evolves with you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
