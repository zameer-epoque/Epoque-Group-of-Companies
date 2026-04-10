"use client";

import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ApplyPage() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("job") || "Job Role";

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "service_0ngjsts",   // ✅ your service ID
        "template_gxzy7hd", // ✅ your template ID
        formRef.current,
        "zVIYCzNwWz2NlMQs9" // ✅ your public key
      );

      alert("Application sent successfully ✅");
      formRef.current.reset();

    } catch (error) {
      console.error(error);
      alert("Failed to send ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 mt-10">

      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10">

        <h1 className="text-3xl font-bold mb-6 text-center text-orange-400">
          Apply for {jobTitle}
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          {/* Hidden Job Title */}
          <input type="hidden" name="jobTitle" value={jobTitle} />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          {/* Experience */}
          <input
            type="text"
            name="experience"
            placeholder="Experience (e.g. 2 years)"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          {/* ✅ Resume Link Instead of File */}
          <input
            type="text"
            name="resume_link"
            placeholder="Paste Resume Link (Google Drive / Dropbox)"
            className="w-full p-3 rounded-lg bg-black border border-gray-700"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>

        {/* ✅ WhatsApp Option */}
        <button
          onClick={() => {
            const message = `Hi, I am applying for ${jobTitle}`;
            window.open(`https://wa.me/919876543210?text=${message}`);
          }}
          className="mt-4 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-300"
        >
          Apply via WhatsApp
        </button>

      </div>
    </div>
  );
}