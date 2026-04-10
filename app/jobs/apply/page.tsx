"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("job");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    experience: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const message = `Hi, I am applying for ${jobTitle}%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Email: ${form.email}%0A
Experience: ${form.experience}`;

    window.open(`https://wa.me/919876543210?text=${message}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-orange-400">
          Apply for {jobTitle}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g. 2 years)"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}