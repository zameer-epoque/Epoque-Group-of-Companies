import {
    Palette,
    Target,
    Layers,
    Handshake,
} from "lucide-react"

export default function WhyChooseEpoque() {
    return (
        <section
            className="relative py-6 px-6 bg-black"
            aria-label="Why Choose Époque Group"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="max-w-4xl mx-auto text-center mb-28">
                    <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-tight">
                        Why{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Choose Époque
                        </span>
                    </h2>

                    <p className="mt-10 text-xl md:text-2xl text-gray-400 leading-relaxed">
                        Where strategic insight, creative excellence, and executional
                        precision come together to deliver enduring value.
                    </p>
                </div>

                {/* GRID */}
                <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

                    {/* ITEM 1 */}
                    <div className="group border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#C79A3B] hover:shadow-[0_0_40px_rgba(199,154,59,0.18)]">
                        <Palette
                            size={32}
                            className="mb-6 text-[#C79A3B] transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Design-Led Thinking
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                            Every solution begins with design intelligence—where aesthetics,
                            functionality, and human experience align to create timeless
                            outcomes.
                        </p>
                    </div>

                    {/* ITEM 2 */}
                    <div className="group border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#D45B5B] hover:shadow-[0_0_40px_rgba(212,91,91,0.18)]">
                        <Target
                            size={32}
                            className="mb-6 text-[#D45B5B] transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Strategic Expertise
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                            We combine market insight, data-driven strategy, and creative
                            foresight to architect solutions that accelerate growth and
                            long-term success.
                        </p>
                    </div>

                    {/* ITEM 3 */}
                    <div className="group border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#7A2E63] hover:shadow-[0_0_40px_rgba(122,46,99,0.2)]">
                        <Layers
                            size={32}
                            className="mb-6 text-[#7A2E63] transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            End-to-End Solutions
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                            From ideation to execution, we manage every layer of the process—
                            ensuring clarity, quality, and cohesion across all touchpoints.
                        </p>
                    </div>

                    {/* ITEM 4 */}
                    <div className="group border border-white/10 rounded-2xl p-10 transition-all duration-300 hover:-translate-y-3 hover:border-[#2E5A57] hover:shadow-[0_0_40px_rgba(46,90,87,0.2)]">
                        <Handshake
                            size={32}
                            className="mb-6 text-[#2E5A57] transition-transform duration-300 group-hover:scale-110"
                        />
                        <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                            Trusted Partnerships
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-base">
                            We believe true success is built through long-term partnerships—
                            working as collaborators invested in your vision, growth, and
                            legacy.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
