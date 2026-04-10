"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const jobsData = [
  {
    id: 1,
    title: "Performance Marketing Manager",
    location: "Remote / Global",
    type: "Full-Time",
    salary: "₹8L - ₹15L",
    experience: "2-5 Years",
    description:
      "We are looking for a performance-driven marketer to manage paid campaigns and drive ROI.",
    responsibilities: [
      "Run Facebook & Google Ads",
      "Optimize funnels and landing pages",
      "Track KPIs and ROI",
      "A/B testing campaigns",
    ],
    requirements: [
      "2+ years experience in digital marketing",
      "Strong analytical skills",
      "Experience with Google Ads & Meta Ads",
      "Understanding of conversion funnels",
    ],
    benefits: [
      "Work from home",
      "Flexible timings",
      "Performance bonuses",
      "Growth opportunities",
    ],
  },
     {
    id: 2,
    title: " Manager",
    location: "Remote / Global",
    type: "Full-Time",
    salary: "₹8L - ₹15L",
    experience: "2-5 Years",
    description:
      "We are looking for a performance-driven marketer to manage paid campaigns and drive ROI.",
    responsibilities: [
      "Run Facebook & Google Ads",
      "Optimize funnels and landing pages",
      "Track KPIs and ROI",
      "A/B testing campaigns",
    ],
    requirements: [
      "2+ years experience in digital marketing",
      "Strong analytical skills",
      "Experience with Google Ads & Meta Ads",
      "Understanding of conversion funnels",
    ],
    benefits: [
      "Work from home",
      "Flexible timings",
      "Performance bonuses",
      "Growth opportunities",
    ],
  },
   {
    id: 3,
    title: " Conversion Funnel Specialist",
    location: "Remote / Global",
    type: "Full-Time",
    salary: "₹8L - ₹15L",
    experience: "2-5 Years",
    description:
      "We are looking for a performance-driven marketer to manage paid campaigns and drive ROI.",
    responsibilities: [
      "Run Facebook & Google Ads",
      "Optimize funnels and landing pages",
      "Track KPIs and ROI",
      "A/B testing campaigns",
   
    ],
    requirements: [
      "4+ years experience in digital marketing",
      "Strong analytical skills",
      "Experience with Google Ads & Meta Ads",
      "Understanding of conversion funnels",
    ],
    benefits: [
      "Work from home",
      "Flexible timings",
      "Performance bonuses",
      "Growth opportunities",
    ],
  },
  {
    id: 4,
    title: " Business Development Manager",
    location: "Remote / Global",
    type: "Full-Time",
    salary: "₹8L - ₹15L",
    experience: "2-5 Years",
    description:
      "We are looking for a business development manager to drive growth and partnerships.",
    responsibilities: [
      "Identify new business opportunities",
      "Negotiate partnerships and deals",
      "Develop strategic plans for growth",
      "Manage client relationships",
    ],
    requirements: [
      "3+ years experience in business development",
      "Strong negotiation skills",
      "Experience in B2B sales",
      "Understanding of market dynamics",
    ],
    benefits: [
      "Work from home",
      "Flexible timings",
      "Performance bonuses",
      "Growth opportunities",
    ],
  }
];

export default function JobDetailsPage() {
  const params = useParams();
  const job = jobsData.find((j) => j.id === Number(params.id));

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-28">

      {/* 🔥 Header Card */}
      <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">

        {/* Title + Badge */}
        <div className="flex flex-wrap items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            {job.title}
          </h1>

          <span className="bg-red-500/20 text-red-400 px-4 py-1 rounded-full text-sm">
            🔥 Urgent Hiring
          </span>
        </div>

        {/* Job Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Location", value: job.location },
            { label: "Type", value: job.type },
            { label: "Salary", value: job.salary },
            { label: "Experience", value: job.experience },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:scale-105 transition"
            >
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <Section title="Job Description">
          <p className="text-gray-300">{job.description}</p>
        </Section>

        {/* Responsibilities */}
        <Section title="Responsibilities">
          <List items={job.responsibilities} />
        </Section>

        {/* Requirements */}
        <Section title="Requirements">
          <List items={job.requirements} />
        </Section>

        {/* Benefits */}
        <Section title="Benefits">
          <List items={job.benefits} />
        </Section>

        {/* Apply Box */}
        <div className="mt-10 bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-2">
            Apply for this job
          </h3>
          <p className="text-black font-medium mb-4">
            Quick apply via WhatsApp
          </p>

         <Link
  href={`/jobs/apply?job=${encodeURIComponent(job.title)}`}
  className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition"
>
  Apply Now
</Link>
        </div>

      </div>
    </div>
  );
}

/* 🔹 Reusable Components */

function Section({ title, children }: any) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-orange-300">
        {title}
      </h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-gray-300">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="text-green-400">✔</span>
          {item}
        </li>
      ))}
    </ul>
  );
}