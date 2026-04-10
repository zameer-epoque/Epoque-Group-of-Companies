// // "use client";

// // import { useState } from "react";

// // interface Job {
// //     id: number;
// //     title: string;
// //     location: string;
// //     type: string;
// //     description: string;
// // }

// // const jobsData: Job[] = [
// //     {
// //         id: 1,
// //         title: "Performance Marketing Manager",
// //         location: "Remote / Global",
// //         type: "Full-Time",
// //         description:
// //             "Lead paid advertising campaigns, optimize funnels, and drive high-intent qualified leads for global clients.",
// //     },
// //     {
// //         id: 2,
// //         title: "Real Estate Growth Strategist",
// //         location: "India / Middle East",
// //         type: "Full-Time",
// //         description:
// //             "Build and scale real estate demand systems and investor acquisition funnels.",
// //     },
// //     {
// //         id: 3,
// //         title: "Conversion Funnel Specialist",
// //         location: "Remote",
// //         type: "Contract",
// //         description:
// //             "Design landing pages, automate lead nurturing systems and improve ROI across campaigns.",
// //     },
// // ];

// // export default function CareersPage() {
// //     const [selectedJob, setSelectedJob] = useState<Job | null>(null);

// //     return (
// //         <div className="min-h-screen bg-black text-white">

// //             {/* HERO SECTION */}
// //             <section className="bg-gradient-to-r from-black via-gray-900 to-orange-500/20 py-24 px-6 text-center">
// //                 <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
// //                     Build The Future of Growth With Us
// //                 </h1>
// //                 <p className="max-w-3xl mx-auto text-lg text-gray-300">
// //                     Join Epoque Group and help businesses worldwide scale using
// //                     performance marketing, demand generation systems, and real estate
// //                     growth architecture.
// //                 </p>
// //             </section>

// //             {/* ABOUT */}
// //             <section className="py-4 px-6 max-w-6xl mx-auto text-center">
// //                 <h2 className="text-3xl font-bold mb-6 text-orange-400">
// //                     Who We Are
// //                 </h2>
// //                 <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
// //                     Epoque Group is a global growth and performance marketing company
// //                     specializing in qualified lead systems, digital demand engineering,
// //                     investor acquisition funnels, and scalable business growth models.
// //                 </p>
// //             </section>

// //             {/* BENEFITS */}
// //             <section className="py-4 px-6">
// //                 <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
// //                     Why Work With Us
// //                 </h2>

// //                 <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
// //                     {["Global Opportunities", "Performance Rewards", "Flexible & Remote"].map(
// //                         (title, index) => (
// //                             <div
// //                                 key={index}
// //                                 className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-orange-400 transition duration-300 shadow-lg"
// //                             >
// //                                 <h3 className="font-bold text-xl mb-4 text-orange-400">
// //                                     {title}
// //                                 </h3>
// //                                 <p className="text-gray-400">
// //                                     Work with international clients and grow your career with
// //                                     performance-driven systems.
// //                                 </p>
// //                             </div>
// //                         )
// //                     )}
// //                 </div>
// //             </section>

// //             {/* OPEN POSITIONS */}
// //             <section className="py-4 px-6 max-w-6xl mx-auto">
// //                 <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
// //                     Current Open Positions
// //                 </h2>

// //                 <div className="grid md:grid-cols-2 gap-10">
// //                     {jobsData.map((job) => (
// //                         <div
// //                             key={job.id}
// //                             className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl hover:border-orange-400 hover:shadow-orange-500/10 hover:shadow-2xl transition cursor-pointer"
// //                             onClick={() => setSelectedJob(job)}
// //                         >
// //                             <h3 className="text-2xl font-bold mb-2 text-white">
// //                                 {job.title}
// //                             </h3>
// //                             <p className="text-gray-400">
// //                                 {job.location} • {job.type}
// //                             </p>
// //                             <p className="mt-4 text-gray-400">{job.description}</p>

// //                             <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-6 py-3 rounded-xl transition">
// //                                 Apply Now
// //                             </button>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </section>

// //             {/* APPLICATION MODAL */}
// //             {selectedJob && (
// //                 <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 z-50">
// //                     <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
// //                         <h3 className="text-2xl font-bold mb-6 text-orange-400">
// //                             Apply for {selectedJob.title}
// //                         </h3>

// //                         <form className="space-y-4">
// //                             <input
// //                                 type="text"
// //                                 placeholder="Full Name"
// //                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
// //                             />
// //                             <input
// //                                 type="email"
// //                                 placeholder="Email"
// //                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
// //                             />
// //                             <input
// //                                 type="file"
// //                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-gray-400"
// //                             />
// //                             <textarea
// //                                 placeholder="Why should we hire you?"
// //                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
// //                             />

// //                             <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold py-3 rounded-xl transition">
// //                                 Submit Application
// //                             </button>
// //                         </form>

// //                         <button
// //                             onClick={() => setSelectedJob(null)}
// //                             className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 text-lg"
// //                         >
// //                             ✕
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}

// //             {/* FOOTER CTA */}
// //             <section className="bg-gradient-to-r from-black to-orange-500/20 py-20 text-center">
// //                 <h2 className="text-3xl font-bold mb-6 text-orange-400">
// //                     Ready to Build Scalable Growth Systems?
// //                 </h2>
// //                 <p className="mb-8 text-gray-400">
// //                     Be part of a team shaping the future of performance marketing and
// //                     real estate demand engineering.
// //                 </p>
// //                 <a
// //                     href="/contact"
// //                     className="bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-10 py-4 rounded-xl transition"
// //                 >
// //                     Contact Us
// //                 </a>
// //             </section>

// //         </div>
// //     );
// // }

// "use client";

// import { useState } from "react";

// interface Job {
//     id: number;
//     title: string;
//     location: string;
//     type: string;
//     description: string;
// }

// const jobsData: Job[] = [
//     {
//         id: 1,
//         title: "Performance Marketing Manager",
//         location: "Remote / Global",
//         type: "Full-Time",
//         description:
//             "Lead paid advertising campaigns, optimize funnels, and drive high-intent qualified leads for global clients.",
//     },
//     {
//         id: 2,
//         title: "Real Estate Growth Strategist",
//         location: "India / Middle East",
//         type: "Full-Time",
//         description:
//             "Build and scale real estate demand systems and investor acquisition funnels.",
//     },
//     {
//         id: 3,
//         title: "Conversion Funnel Specialist",
//         location: "Remote",
//         type: "Contract",
//         description:
//             "Design landing pages, automate lead nurturing systems and improve ROI across campaigns.",
//     },
// ];

// export default function CareersPage() {
//     const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//     return (
//         <div className="min-h-screen bg-black text-white">

//             {/* HERO SECTION */}
//             <section className="bg-gradient-to-r from-black via-gray-900 to-orange-500/20 py-24 px-6 text-center">
//                 <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
//                     Build The Future of Growth With Us
//                 </h1>
//                 <p className="max-w-3xl mx-auto text-lg text-gray-300">
//                     Join Epoque Group and help businesses worldwide scale using
//                     performance marketing, demand generation systems, and real estate
//                     growth architecture.
//                 </p>
//             </section>

//             {/* ABOUT */}
//             <section className="py-4 px-6 max-w-6xl mx-auto text-center">
//                 <h2 className="text-3xl font-bold mb-6 text-orange-400">
//                     Who We Are
//                 </h2>
//                 <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto">
//                     Epoque Group is a global growth and performance marketing company
//                     specializing in qualified lead systems, digital demand engineering,
//                     investor acquisition funnels, and scalable business growth models.
//                 </p>
//             </section>

//             {/* BENEFITS */}
//             <section className="py-4 px-6">
//                 <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
//                     Why Work With Us
//                 </h2>

//                 <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//                     {["Global Opportunities", "Performance Rewards", "Flexible & Remote"].map(
//                         (title, index) => (
//                             <div
//                                 key={index}
//                                 className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-orange-400 transition duration-300 shadow-lg"
//                             >
//                                 <h3 className="font-bold text-xl mb-4 text-orange-400">
//                                     {title}
//                                 </h3>
//                                 <p className="text-gray-400">
//                                     Work with international clients and grow your career with
//                                     performance-driven systems.
//                                 </p>
//                             </div>
//                         )
//                     )}
//                 </div>
//             </section>

//             {/* OPEN POSITIONS */}
//             <section className="py-4 px-6 max-w-6xl mx-auto">
//                 <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
//                     Current Open Positions
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-10">
//                     {jobsData.map((job) => (
//                         <div
//                             key={job.id}
//                             className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-8 rounded-2xl hover:border-orange-400 hover:shadow-orange-500/10 hover:shadow-2xl transition cursor-pointer"
//                             onClick={() => setSelectedJob(job)}
//                         >
//                             <h3 className="text-2xl font-bold mb-2 text-white">
//                                 {job.title}
//                             </h3>
//                             <p className="text-gray-400">
//                                 {job.location} • {job.type}
//                             </p>
//                             <p className="mt-4 text-gray-400">{job.description}</p>

//                             <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-6 py-3 rounded-xl transition">
//                                 Apply Now
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* APPLICATION MODAL */}
//             {selectedJob && (
//                 <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center px-4 z-50">
//                     <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl max-w-lg w-full relative shadow-2xl">
//                         <h3 className="text-2xl font-bold mb-6 text-orange-400">
//                             Apply for {selectedJob.title}
//                         </h3>

//                         <form className="space-y-4">
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
//                             />
//                             <input
//                                 type="file"
//                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg text-gray-400"
//                             />
//                             <textarea
//                                 placeholder="Why should we hire you?"
//                                 className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-orange-400"
//                             />

//                             <button className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold py-3 rounded-xl transition">
//                                 Submit Application
//                             </button>
//                         </form>

//                         <button
//                             onClick={() => setSelectedJob(null)}
//                             className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 text-lg"
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* FOOTER CTA */}
//             <section className="bg-gradient-to-r from-black to-orange-500/20 py-20 text-center">
//                 <h2 className="text-3xl font-bold mb-6 text-orange-400">
//                     Ready to Build Scalable Growth Systems?
//                 </h2>
//                 <p className="mb-8 text-gray-400">
//                     Be part of a team shaping the future of performance marketing and
//                     real estate demand engineering.
//                 </p>
//                 <a
//                     href="/contact"
//                     className="bg-gradient-to-r from-orange-400 to-orange-600 hover:opacity-90 text-black font-semibold px-10 py-4 rounded-xl transition"
//                 >
//                     Contact Us
//                 </a>
//             </section>

//         </div>
//     );
// }


"use client";

import Link from "next/link";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  description: string;
  salary?: string;
  hot?: boolean;
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Performance Marketing Manager",
    location: "Remote / Global",
    type: "Full-Time",
    salary: "₹80K - ₹1.5L",
    hot: true,
    description:
      "Lead paid advertising campaigns, optimize funnels, and drive high-intent qualified leads.",
  },
  {
    id: 2,
    title: "Real Estate Growth Strategist",
    location: "India / Middle East",
    type: "Full-Time",
    salary: "₹60K - ₹1.2L",
    hot: false,
    description:
      "Build and scale real estate demand systems and investor funnels.",
  },
  {
    id: 3,
    title: "Conversion Funnel Specialist",
    location: "Remote",
    type: "Contract",
    salary: "₹40K - ₹90K",
    hot: false,
    description:
      "Design landing pages and improve ROI across campaigns.",
  },
  {
    id: 4,
    title: "Business Development Manager",
    location: "Hyderabad (Toli Chowki)",
    type: "Full-Time | Day Shift",
    salary: "₹55K - ₹1.35L + Incentives",
    hot: true,
    description:
      "Generate leads, meet clients, close deals, and drive revenue growth with strong incentives.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10 blur-3xl"></div>

        <h1 className="text-5xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
         Build The Future of Growth With Us  
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-400">
         Join Epoque Group and help businesses worldwide scale using performance marketing, demand generation systems, and real estate growth architecture.
        </p>
      </section>

      {/* JOBS */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 text-orange-400">
          Open Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {jobsData.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`}>

              <div className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-orange-500/30 to-pink-500/20 hover:scale-[1.02] transition duration-300 cursor-pointer">

                <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl p-8 h-full border border-gray-800 group-hover:border-orange-400 transition relative">

                  {/* 🔥 HOT TAG */}
                  {job.hot && (
                    <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-full shadow-lg animate-pulse">
                      🔥 Hot Job
                    </span>
                  )}

                  {/* 💰 SALARY */}
                  {job.salary && (
                    <span className="inline-block mb-3 px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                      💰 {job.salary}
                    </span>
                  )}

                  {/* STATUS */}
                  <span className="inline-block mb-3 ml-2 px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full">
                    Hiring Now
                  </span>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold mb-2">
                    {job.title}
                  </h3>

                  {/* LOCATION */}
                  <p className="text-gray-400 text-sm mb-3">
                    {job.location} • {job.type}
                  </p>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 mb-6">
                    {job.description}
                  </p>

                  {/* BUTTON */}
                  <div className="text-center bg-yellow-400 
                  hover:scale-105 transition py-3 rounded-xl text-black font-semibold">
                    View Details →
                  </div>

                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-orange-400">
          Ready to Grow With Us?
        </h2>

        <p className="text-gray-400 mb-8">
          Let’s build scalable systems together.
        </p>

        <a
          href="https://wa.me/919133633327?text=Hi%20Epoque%20Group%2C%20I%20want%20to%20connect%20with%20your%20team."
          target="_blank"
          className="bg-gradient-to-r from-orange-400 to-orange-600 
          hover:scale-105 transition px-10 py-4 rounded-xl text-black font-semibold"
        >
          Contact on WhatsApp 🚀
        </a>
      </section>

    </div>
  );
}