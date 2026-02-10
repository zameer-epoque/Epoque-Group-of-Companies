import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Époque Digital | Digital Excellence & Performance Marketing",
    description:
        "Époque Digital designs high-performance digital ecosystems that drive qualified leads, measurable conversions, and scalable visibility. From funnel engineering to performance marketing.",
    keywords: [
        "Digital Marketing Agency",
        "Performance Marketing",
        "Lead Generation",
        "Brand Strategy",
        "Époque Digital",
        "SEO & Funnels",
    ],
}

export default function DigitalPage() {
    return (
        <main className="bg-[#0F0F0F] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6">
                {/* Glow */}
                <div className="absolute inset-0 flex justify-center pointer-events-none">
                    <div className="w-[900px] h-[900px] bg-gradient-to-r from-[#C79A3B]/20 via-[#D45B5B]/20 to-[#7A2E63]/20 blur-[200px]" />
                </div>

                <div className="relative max-w-5xl text-center animate-fade-in-up">
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-6">
                        Digital Excellence
                    </p>

                    <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold leading-tight">
                        Époque{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Digital
                        </span>
                    </h1>

                    <p className="mt-8 text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Where <span className="text-white font-medium">Intelligence</span>{" "}
                        meets{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent font-medium">
                            Imagination
                        </span>
                        .
                    </p>

                    <p className="mt-10 text-lg text-gray-400 max-w-3xl mx-auto">
                        We design digital ecosystems that drive qualified leads, measurable
                        conversions, and scalable visibility — turning clicks into
                        conversations and conversations into conversions.
                    </p>
                </div>
            </section>

            {/* STRATEGY SECTION */}
            <section className="py-2 px-6 bg-[#121212]">
                <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-center">
                    <div className="animate-fade-in-left">
                        <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
                            Strategy Beyond Marketing
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            Our focus goes beyond campaigns and creatives. We architect
                            intelligent digital strategies that make businesses
                            future-proof.
                        </p>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            From lead augmentation and digital branding to creative campaigns
                            and performance intelligence, every system we build is designed
                            to scale with precision.
                        </p>
                    </div>

                    <div className="relative animate-fade-in-right">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#C79A3B]/30 via-[#D45B5B]/30 to-[#7A2E63]/30 blur-2xl" />
                        <div className="relative rounded-3xl border border-white/10 p-10 backdrop-blur">
                            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                                Our Philosophy
                            </p>
                            <p className="text-xl leading-relaxed">
                                We don’t chase trends —{" "}
                                <span className="text-white font-medium">we design them</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="font-heading text-4xl md:text-6xl font-semibold">
                            Core{" "}
                            <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                                Services
                            </span>
                        </h2>

                        <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
                            High-impact solutions engineered for growth, visibility, and
                            conversion.
                        </p>
                    </div>

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: "🎯",
                                title: "Lead Augmentation & Funnel Engineering",
                                desc: "Strategic funnel optimization engineered for maximum conversion.",
                                color: "#C79A3B",
                            },
                            {
                                icon: "📝",
                                title: "Brand & Content Strategy",
                                desc: "Compelling narratives that resonate deeply with your audience.",
                                color: "#D45B5B",
                            },
                            {
                                icon: "📊",
                                title: "Performance Marketing",
                                desc: "Data-driven campaigns delivering measurable ROI.",
                                color: "#7A2E63",
                            },
                            {
                                icon: "🎨",
                                title: "Creative Direction & Social Media Science",
                                desc: "Engaging content that builds community and drives action.",
                                color: "#2E5A57",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group relative border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-3"
                                style={{
                                    boxShadow: `0 0 0 rgba(0,0,0,0)`,
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"
                                    style={{
                                        boxShadow: `0 0 40px ${item.color}33`,
                                    }}
                                />
                                <div className="relative">
                                    <div className="text-4xl mb-6">{item.icon}</div>
                                    <h3 className="font-heading text-xl font-semibold mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-4 px-6 bg-[#121212] text-center">
                <h2 className="font-heading text-4xl md:text-6xl font-semibold mb-8">
                    Ready to Build a{" "}
                    <span className="bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                        High-Performance
                    </span>{" "}
                    Digital Engine?
                </h2>

                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                    Let’s transform your digital presence into a scalable system that
                    drives growth, leads, and long-term impact.
                </p>

                <a
                    href="/contact"
                    className="inline-block px-12 py-4 rounded-full font-semibold text-black bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] hover:opacity-90 transition"
                >
                    Start a Conversation
                </a>
            </section>
        </main>
    )
}
