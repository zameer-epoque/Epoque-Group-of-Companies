"use client"

import Script from "next/script"

export default function RealEstateFAQ() {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">

            <h2 className="text-4xl font-semibold text-center mb-16">
                Frequently Asked Questions
            </h2>

            <div className="space-y-10 text-gray-400">

                <div>
                    <h3 className="text-xl text-orange-400 font-semibold">
                        Why is branding important for real estate projects in Hyderabad?
                    </h3>
                    <p className="mt-3">
                        Branding builds buyer trust, improves premium perception,
                        increases pricing power and reduces dependency on heavy discounting.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl text-orange-400 font-semibold">
                        Do you provide branding for luxury villa projects?
                    </h3>
                    <p className="mt-3">
                        Yes. We specialize in villa communities, gated developments
                        and high-value apartment projects.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl text-orange-400 font-semibold">
                        How long does real estate branding take?
                    </h3>
                    <p className="mt-3">
                        Typically 3–6 weeks depending on project size,
                        deliverables and campaign requirements.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl text-orange-400 font-semibold">
                        Do you handle both branding and website development?
                    </h3>
                    <p className="mt-3">
                        Yes. We provide branding, website UI/UX and campaign
                        alignment under one strategic system.
                    </p>
                </div>

            </div>

            {/* FAQ Schema */}
            <Script
                id="real-estate-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "Why is branding important for real estate projects in Hyderabad?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Branding builds buyer trust, improves premium perception, increases pricing power and reduces dependency on heavy discounting."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "Do you provide branding for luxury villa projects?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Yes. We specialize in villa communities, gated developments and high-value apartment projects."
                                }
                            },
                            {
                                "@type": "Question",
                                name: "How long does real estate branding take?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "Typically 3–6 weeks depending on project size, deliverables and campaign requirements."
                                }
                            }
                        ]
                    })
                }}
            />

        </section>
    )
}