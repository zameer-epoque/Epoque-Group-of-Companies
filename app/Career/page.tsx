"use client";

import { useState } from "react";

const jobsData = [
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
    const [selectedJob, setSelectedJob] = useState<any>(null);

    return (
        <div className="min-h-screen">

            {/* HERO SECTION */}
            <section className="bg-gradient-to-r from-black to-gray-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Build The Future of Growth With Us
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-gray-300">
                    Join Epoque Group and help businesses worldwide scale using
                    performance marketing, demand generation systems, and real estate
                    growth architecture.
                </p>
            </section>

            {/* ABOUT */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
                <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
                    Epoque Group is a global growth and performance marketing company
                    specializing in qualified lead systems, digital demand engineering,
                    investor acquisition funnels, and scalable business growth models.
                    We work with ambitious brands across real estate, finance, and
                    high-value industries.
                </p>
            </section>

            {/* BENEFITS */}
            <section className="bg-white py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Why Work With Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="p-6 shadow-lg rounded-xl">
                        <h3 className="font-bold text-xl mb-3">Global Opportunities</h3>
                        <p>
                            Work with international clients and expand your career beyond
                            borders.
                        </p>
                    </div>

                    <div className="p-6 shadow-lg rounded-xl">
                        <h3 className="font-bold text-xl mb-3">Performance Rewards</h3>
                        <p>
                            Competitive compensation with performance-based growth bonuses.
                        </p>
                    </div>

                    <div className="p-6 shadow-lg rounded-xl">
                        <h3 className="font-bold text-xl mb-3">Flexible & Remote</h3>
                        <p>
                            Work from anywhere while building systems that scale globally.
                        </p>
                    </div>
                </div>
            </section>

            {/* OPEN POSITIONS */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Current Open Positions
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {jobsData.map((job) => (
                        <div
                            key={job.id}
                            className="border p-6 rounded-xl hover:shadow-xl transition cursor-pointer"
                            onClick={() => setSelectedJob(job)}
                        >
                            <h3 className="text-xl font-bold">{job.title}</h3>
                            <p className="text-gray-600">
                                {job.location} • {job.type}
                            </p>
                            <p className="mt-4 text-gray-700">{job.description}</p>
                            <button className="mt-6 bg-black text-white px-6 py-2 rounded-lg">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* APPLICATION MODAL */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
                    <div className="bg-white p-8 rounded-xl max-w-lg w-full">
                        <h3 className="text-2xl font-bold mb-4">
                            Apply for {selectedJob.title}
                        </h3>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border p-3 rounded"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border p-3 rounded"
                            />
                            <input
                                type="file"
                                className="w-full border p-3 rounded"
                            />
                            <textarea
                                placeholder="Why should we hire you?"
                                className="w-full border p-3 rounded"
                            ></textarea>

                            <button className="w-full bg-black text-white py-3 rounded-lg">
                                Submit Application
                            </button>
                        </form>

                        <button
                            onClick={() => setSelectedJob(null)}
                            className="mt-4 text-red-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* FOOTER CTA */}
            <section className="bg-black text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Ready to Build Scalable Growth Systems?
                </h2>
                <p className="mb-8 text-gray-300">
                    Be part of a team shaping the future of performance marketing and
                    real estate demand engineering.
                </p>
                <a
                    href="/contact"
                    className="bg-white text-black px-8 py-3 rounded-lg font-semibold"
                >
                    Contact Us
                </a>
            </section>

        </div>
    );
}