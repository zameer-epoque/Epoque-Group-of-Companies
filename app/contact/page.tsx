"use client"

import { motion, Variants } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const
        }
    }
}

export default function ContactPage() {
    return (
        <section className="relative bg-black text-white overflow-hidden">

            {/* Background Glow */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#C79A3B]/20 to-[#D45B5B]/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#7A2E63]/20 to-[#C79A3B]/20 blur-3xl rounded-full"></div>

            <div className="relative max-w-7xl mx-auto px-6 py-28">

                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="font-heading text-5xl md:text-6xl font-semibold leading-tight">
                        Contact{" "}
                        <span className="bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] bg-clip-text text-transparent">
                            Époque Group
                        </span>
                    </h1>

                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        Let’s collaborate on transformative real estate, luxury interiors,
                        and strategic growth consulting. Our team is ready to assist your
                        next ambitious project.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="space-y-12"
                    >
                        {/* ADDRESS */}
                        <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-500">
                            <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                                Office Address
                            </h2>

                            <div className="flex items-start gap-4 text-gray-400">
                                <MapPin className="text-[#C79A3B] mt-1" size={22} />
                                <p>
                                    902, Office No C3, Sattva Magnus Commercial Building,
                                    Shaikpet, Jubilee Hills, Hyderabad, India
                                </p>
                            </div>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition duration-500 space-y-6">
                            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                                Get in Touch
                            </h2>

                            <div className="flex items-center gap-4 text-gray-400">
                                <Phone className="text-[#C79A3B]" size={22} />
                                <span>+91 9133 633 327</span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400">
                                <Mail className="text-[#C79A3B]" size={22} />
                                <span>sales@epoquegroup.in</span>
                            </div>
                        </div>

                        {/* SEO TEXT */}
                        <p className="text-gray-500 leading-relaxed">
                            Serving clients across India from our Hyderabad headquarters,
                            Époque Group delivers structured real estate advisory,
                            architectural interiors, DPR preparation, and enterprise-level
                            consulting solutions with strategic excellence.
                        </p>
                    </motion.div>

                    {/* RIGHT SIDE – FORM */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
                    >
                        <h2 className="text-2xl font-semibold mb-10 bg-gradient-to-r from-[#C79A3B] to-[#D45B5B] bg-clip-text text-transparent">
                            Send Us a Message
                        </h2>

                        <form className="space-y-8">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-[#C79A3B] transition"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-[#C79A3B] transition"
                            />

                            <input
                                type="tel"
                                placeholder="Phone (Optional)"
                                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-[#C79A3B] transition"
                            />

                            <textarea
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-[#C79A3B] transition resize-none"
                            />

                            <button
                                type="submit"
                                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C79A3B] via-[#D45B5B] to-[#7A2E63] text-black font-semibold hover:scale-105 transition duration-300 shadow-xl"
                            >
                                Send Message
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
