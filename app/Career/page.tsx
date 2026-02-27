"use client";

import { useState } from "react";

interface Job {
    id: number;
    title: string;
    location: string;
    type: string;
    description: string;
}

const jobsData: Job[] = [
    {
        id: 1,
        title: "Performance Marketing Manager",
        location: "Remote / Global",
        type: "Full-Time",
        description:
            "Lead paid advertising campaigns, optimize funnels, and drive high-intent qualified leads for global clients.",
    },
    {
        id: 2,
        title: "Real Estate Growth Strategist",
        location: "India / Middle East",
        type: "Full-Time",
        description:
            "Build and scale real estate demand systems and investor acquisition funnels.",
    },
    {
        id: 3,
        title: "Conversion Funnel Specialist",
        location: "Remote",
        type: "Contract",
        description:
            "Design landing pages, automate lead nurturing systems and improve ROI across campaigns.",
    },
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    return (
        <div className="min-h-screen bg-black text-white">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-black via-gray-900 to-orange-500/20 py-24 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    Build The Future of Growth With Us
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    Join Epoque Group and help businesses worldwide scale using
                    performance marketing, demand generation systems, and real estate
                    growth architecture.
                </p>
            </section>

            {/* ABOUT */}
            <section className="py-4 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">
                    Who We Are
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
                    Epoque Group is a global growth and performance marketing company
                    specializing in qualified lead systems, digital demand engineering,
                    investor acquisition funnels, and scalable business growth models.
                </p>
            </section>

            {/* BENEFITS */}
            <section className="py-4 px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
                    Why Work With Us
                </h2>

                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {["Global Opportunities", "Performance Rewards", "Flexible & Remote"].map(
                        (title, index) => (
                            <div
                                key={index}
                                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-orange-400 transition duration-300 shadow-lg"
                            >
                                <h3 className="font-bold text-xl mb-4 text-orange-400">
                                    {title}
                                </h3>
                                <p className="text-gray-400">
                                    Work with international clients and grow your career with
                                    performance-driven systems.
                                </p>
                            </div>
                        )
                    )}
                </div>
            </section>

            {/* OPEN POSITIONS */}
            <section className="py-4 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
                    Current Open Positions
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {jobsData.map((job) => (
                        <div
                            key={job.id}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl hover:border-orange-400 hover:shadow-orange-500/10 hover:shadow-2xl transition cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                        >
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {job.title}
                            </h3>
                            <p className="text-gray-400">
                                {job.location} • {job.type}
                            </p>
                            <p className="mt-4 text-gray-400">{job.description}</p>

                            <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-6 py-3 rounded-xl transition">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* APPLICATION MODAL */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 z-50">
                    <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 text-orange-400">
                            Apply for {selectedJob.title}
                        </h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
                            />
                            <input
                                type="file"
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-gray-400"
                            />
                            <textarea
                                placeholder="Why should we hire you?"
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
                            />

                            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold py-3 rounded-xl transition">
                                Submit Application
                            </button>
                        </form>

                        <button
                            onClick={() => setSelectedJob(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* FOOTER CTA */}
            <section className="bg-gradient-to-r from-black to-orange-500/20 py-20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-orange-400">
                    Ready to Build Scalable Growth Systems?
                </h2>
                <p className="mb-8 text-gray-400">
                    Be part of a team shaping the future of performance marketing and
                    real estate demand engineering.
                </p>
                <a
                    href="/contact"
                    className="bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-10 py-4 rounded-xl transition"
                >
                    Contact Us
                </a>
            </section>

        </div>
    );
}