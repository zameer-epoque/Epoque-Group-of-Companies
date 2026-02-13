"use client"

import { motion, Variants } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
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
        <section
            className="relative bg-black text-white overflow-hidden"
            aria-label="Contact Époque Group - Real Estate, Interiors and Business Consulting in Hyderabad"
        >

            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-orange-500/25 to-red-500/25 blur-[180px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-500/20 to-orange-500/20 blur-[180px] rounded-full"></div>

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
                        Get in touch with our Hyderabad team for luxury real estate,
                        villa and plot advisory, premium interior design services,
                        or strategic business consulting solutions.
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
                        <div className="group relative h-full">
                            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]">
                                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20 transition-all duration-500 group-hover:-translate-y-2">
                                    <h2 className="text-2xl font-semibold mb-8 text-orange-400">
                                        Office Address – Hyderabad
                                    </h2>

                                    <div className="flex items-start gap-4 text-gray-400">
                                        <MapPin className="text-orange-400 mt-1" size={22} />
                                        <p>
                                            902, Office No C3, Sattva Magnus Commercial Building,
                                            Shaikpet, Jubilee Hills, Hyderabad, Telangana, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="group relative h-full">
                            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(249,115,22,0.6)]">
                                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20 transition-all duration-500 group-hover:-translate-y-2 space-y-6">
                                    <h2 className="text-2xl font-semibold text-orange-400">
                                        Get in Touch
                                    </h2>

                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Phone className="text-orange-400" size={22} />
                                        <span>+91 9133 633 327</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-400">
                                        <Mail className="text-orange-400" size={22} />
                                        <span>sales@epoquegroup.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-500 leading-relaxed">
                            Époque Group operates from Jubilee Hills, Hyderabad,
                            delivering luxury villas and plots advisory, interior
                            design execution, DPR consulting, and enterprise growth
                            systems across India.
                        </p>
                    </motion.div>

                    {/* FORM */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="group relative"
                    >
                        <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500 transition-all duration-500 group-hover:shadow-[0_0_45px_rgba(249,115,22,0.6)]">
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20 transition-all duration-500">

                                <h2 className="text-2xl font-semibold mb-10 text-orange-400">
                                    Send Us a Message
                                </h2>

                                <form className="space-y-8">

                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-3">
                                            Your Name
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-3">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-3">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-3">
                                            Project Details
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us about your real estate, interior design, or consulting requirement..."
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent focus:outline-none focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.5)] transition resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-full font-semibold text-black bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 hover:scale-105 transition duration-300 shadow-xl"
                                    >
                                        Submit Inquiry
                                    </button>

                                </form>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
