"use client"

import { motion, Variants } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null)
    const [loading, setLoading] = useState(false)

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formRef.current) return

        try {
            setLoading(true)

            await emailjs.sendForm(
                "service_93wx9l2",
                "template_ge5ir2l1",
                formRef.current,
                "zVIYCzNwWz2NlMQs9"
            )

            alert("Message sent successfully ✅")
            formRef.current.reset()
        } catch (error) {
            console.error(error)
            alert("Failed to send message ❌")
        } finally {
            setLoading(false)
        }
    }

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
                        Connect with our Hyderabad office for luxury villas,
                        HMDA plots, premium interiors, digital marketing,
                        and strategic revenue consulting.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* LEFT SIDE */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="space-y-12"
                    >

                        {/* ADDRESS CARD */}
                        <div className="group relative">
                            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500">
                                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20">

                                    <h2 className="text-2xl font-semibold mb-8 text-orange-400">
                                        Office Address – Hyderabad
                                    </h2>

                                    <div className="flex items-start gap-4 text-gray-400">
                                        <MapPin className="text-orange-400 mt-1" size={22} />
                                        <p>
                                            <a
                                                href="https://maps.app.goo.gl/ZJbPj6fDZFsumDEj6"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block w-full text-gray-400 hover:text-white transition-colors duration-300"
                                            >
                                                902, Office No C3, Sattva Magnus Commercial Building,
                                                Shaikpet, Jubilee Hills, Hyderabad, Telangana, India, 500008
                                            </a>
                                        </p>
                                    </div>

                                    <div className="mt-8 rounded-2xl overflow-hidden border border-orange-500/20">
                                        <iframe
                                            src="https://www.google.com/maps?q=Epoque+Group+Of+Companies+Shaikpet+Hyderabad&output=embed"
                                            width="100%"
                                            height="300"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            title="Epoque Group Hyderabad Location"
                                            className="w-full"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="group relative">
                            <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500">
                                <div className="p-10 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20 space-y-6">

                                    <h2 className="text-2xl font-semibold text-orange-400">
                                        Get in Touch
                                    </h2>

                                    <a
                                        href="tel:+919133633327"
                                        className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <Phone className="text-orange-400" size={22} />
                                        +91 9133 633 327
                                    </a>

                                    <a
                                        href="mailto:sales@epoquegroup.in"
                                        className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors duration-300"
                                    >
                                        <Mail className="text-orange-400" size={22} />
                                        sales@epoquegroup.in
                                    </a>

                                </div>
                            </div>
                        </div>

                    </motion.div>

                    {/* RIGHT SIDE – FORM */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="group relative"
                    >
                        <div className="relative p-[1.5px] rounded-3xl bg-gradient-to-br from-orange-400 via-yellow-500 to-red-500">
                            <div className="p-12 rounded-3xl bg-gradient-to-br from-[#121212] to-[#1c1c1c] border border-orange-500/20">

                                <h2 className="text-2xl font-semibold mb-10 text-orange-400">
                                    Send Us a Message
                                </h2>

                                <form
                                    ref={formRef}
                                    onSubmit={sendEmail}
                                    autoComplete="on"
                                    className="space-y-8"
                                >

                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm text-white mb-3">
                                            Full Name *
                                        </label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            autoComplete="name"
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm text-white mb-3">
                                            Phone Number *
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            required
                                            pattern="[6-9]{1}[0-9]{9}"
                                            title="Enter a valid 10-digit Indian phone number"
                                            placeholder="Enter your phone number"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-white mb-3">
                                            Email Address *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            placeholder="Enter your email address"
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                                        />
                                    </div>

                                    {/* Service */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm text-white mb-3">
                                            Service Interested In *
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            autoComplete="off"
                                            required
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-black text-white focus:outline-none focus:border-orange-400 transition"
                                        >
                                            <option value="">Select a Service</option>
                                            <option value="Real Estate">Real Estate – Villas & Plots</option>
                                            <option value="Interior Design">Luxury Interior Design</option>
                                            <option value="Digital Marketing">Digital Marketing & SEO</option>
                                            <option value="Revenue Consulting">Business & Revenue Consulting</option>
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm text-white mb-3">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            autoComplete="off"
                                            required
                                            placeholder="Tell us about your project requirements..."
                                            className="w-full px-5 py-4 rounded-xl border border-white/20 bg-transparent resize-none placeholder-gray-500 focus:outline-none focus:border-orange-400 transition"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full py-4 rounded-full font-semibold text-black 
                    bg-gradient-to-r from-orange-400 via-yellow-300 to-red-300 
                    transition duration-300 shadow-xl 
                    ${loading
                                                ? "opacity-60 cursor-not-allowed"
                                                : "hover:scale-105 active:scale-95"}`}
                                    >
                                        {loading ? "Sending..." : "Submit Inquiry"}
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
