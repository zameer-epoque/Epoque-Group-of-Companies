export default function WhoWeAre() {
    return (
        <section
            className="relative py-6 px-6 bg-[#1A1A1A] overflow-hidden"
            aria-label="Who We Are - Époque Group"
        >
            {/* BACKGROUND GRADIENT GLOW */}
            <div className="pointer-events-none absolute inset-0 flex justify-center">
                <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/10 via-[#D45B5B]/10 to-[#7A2E63]/10 blur-[180px]" />
            </div>

            <div className="relative max-w-7xl mx-auto">

                {/* SECTION HEADING */}
                <div className="max-w-5xl mx-auto text-center mb-28 group">
                    <h2 className="relative inline-block font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight tracking-tight">
                        Who{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            We Are
                        </span>

                        {/* HOVER UNDERLINE */}
                        <span
                            className="
                  absolute
                  left-1/2
                  -bottom-4
                  h-[3px]
                  w-0
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-[#C79A3B]
                  via-[#D45B5B]
                  to-[#7A2E63]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
                        />
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed font-body">
                        <span className="text-white font-medium">Époque Group</span> is a
                        collective of visionaries, creators, and strategists united by one
                        mission — to transform ideas into{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent font-medium">
                            iconic realities
                        </span>{" "}
                        through innovation, design, and strategic excellence.
                    </p>
                </div>

                {/* VALUES GRID */}
                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* ITEM 1 */}
                    <div className="group relative border border-white/10 rounded-2xl p-9 transition-all duration-300 hover:border-[#C79A3B] hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(199,154,59,0.18)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            ✨
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Innovation First
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We push boundaries with forward-thinking solutions that redefine
                            industries and create lasting global impact.
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="group relative border border-white/10 rounded-2xl p-9 transition-all duration-300 hover:border-[#D45B5B] hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(212,91,91,0.18)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            🎨
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Creative Excellence
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Every project is crafted where artistry meets strategy, delivering
                            experiences that captivate, inspire, and endure.
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="group relative border border-white/10 rounded-2xl p-9 transition-all duration-300 hover:border-[#7A2E63] hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(122,46,99,0.22)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            🎯
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Strategic Vision
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            We see beyond the present, shaping intelligent strategies that help
                            businesses grow, scale, and thrive.
                        </p>
                    </div>

                    {/* ITEM 4 */}
                    <div className="group relative border border-white/10 rounded-2xl p-9 transition-all duration-300 hover:border-[#2E5A57] hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(46,90,87,0.22)]">
                        <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                            🌍
                        </div>
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Global Impact
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            From local communities to international markets, we bridge culture,
                            commerce, and creativity with precision.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
