import Image from "next/image"
import Link from "next/link"

const divisions = [
    {
        id: "01",
        title: "Époque Digital",
        description:
            "Crafting digital experiences that captivate, convert, and inspire. From web platforms to immersive applications, we build the future of your online presence.",
        image: "/digital.jpg",
        accent: "#C79A3B",
        href: "/digital",
    },
    {
        id: "02",
        title: "Époque Realty",
        description:
            "Redefining real estate through innovation and insight. We connect vision with value, transforming properties into legacies.",
        image: "/assets/realty-card.jpg",
        accent: "#D45B5B",
        href: "/realty",
    },
    {
        id: "03",
        title: "Époque Interiors",
        description:
            "Where spaces become stories. Our designs blend aesthetics with functionality, creating environments that elevate life and work.",
        image: "/assets/interiors-card.jpg",
        accent: "#7A2E63",
        href: "/interiors",
    },
    {
        id: "04",
        title: "Revenue Architects",
        description:
            "Engineering growth through strategic frameworks. We design revenue models and operational systems that scale with precision and purpose.",
        image: "/assets/revenue-card.jpg",
        accent: "#2E5A57",
        href: "/revenue",
    },
]

export default function OurDivisions() {
    return (
        <section
            className="relative py-40 px-6 bg-[#1A1A1A]"
            aria-label="Our Divisions - Époque Group"
        >
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <div className="text-center mb-24">
                    <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-semibold text-white mb-6">
                        Our{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Divisions
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Four pillars of excellence, united by a singular vision — to transform
                        industries and elevate experiences.
                    </p>

                    <div className="mx-auto mt-10 h-1 w-28 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63]" />
                </div>

                {/* CARDS GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {divisions.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="group relative h-[420px] sm:h-[480px] rounded-xl overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
                        >
                            {/* IMAGE */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover scale-110 transition-transform duration-700 group-hover:scale-100"
                                priority={false}
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                            {/* CONTENT */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <span
                                    className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold bg-white/10 backdrop-blur"
                                    style={{ color: item.accent }}
                                >
                                    {item.id}
                                </span>

                                <h3 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed opacity-0 max-h-0 transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
                                    {item.description}
                                </p>

                                {/* PROGRESS BARS */}
                                <div className="mt-6 flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="h-1 flex-1 bg-white/20 overflow-hidden rounded-full"
                                        >
                                            <div
                                                className="h-full w-0 group-hover:w-full transition-all duration-700"
                                                style={{
                                                    background: `linear-gradient(90deg, ${item.accent}, #C79A3B)`,
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium opacity-0 translate-x-[-10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                                    style={{ color: item.accent }}
                                >
                                    Explore More →
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
