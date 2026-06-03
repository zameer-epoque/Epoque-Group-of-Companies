"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    purchaseTime: "",
    budget: "",
    configuration: "",
    purchaseFor: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
Hello, I am interested in Om Sree Delight.

Name: ${form.name}
Phone: ${form.phone}
City: ${form.city}
Purchase Timeline: ${form.purchaseTime}
Budget: ${form.budget}
Configuration: ${form.configuration}
Purchase For: ${form.purchaseFor}
`;

    window.open(
      `https://wa.me/919133633327?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="bg-[#f6f3ee] py-10 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#7b3f45] italic mb-3">
            Get in touch with us
          </p>

          <h2 className="tracking-[6px] text-[#7b3f45] text-2xl font-semibold">
            CONTACT US
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Reach Us
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#7b3f45] text-xl" />
                <p className="text-gray-700">
                  Yapral, Near Secunderabad, Telangana
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[#7b3f45] text-xl" />
                <p className="text-gray-700">
                  +91 9133633327
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#7b3f45] text-xl" />
                <p className="text-gray-700">
                  sales@epoquegroup.in
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-[#7b3f45]"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-[#7b3f45]"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                value={form.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:border-[#7b3f45]"
              />
            </div>

            <div className="mb-4">
              <select
                name="purchaseTime"
                value={form.purchaseTime}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:border-[#7b3f45]"
              >
                <option value="">
                  When are you planning to purchase?
                </option>
                <option value="Immediately">
                  Immediately
                </option>
                <option value="Within 3 Months">
                  Within 3 Months
                </option>
                <option value="Within 6 Months">
                  Within 6 Months
                </option>
                <option value="Just Exploring">
                  Just Exploring
                </option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:border-[#7b3f45]"
              >
                <option value="">
                  What is your budget range?
                </option>
                <option value="₹90 Lakhs - ₹1.2 Cr">
                  ₹90 Lakhs - ₹1.2 Cr
                </option>
                <option value="₹1.2 Cr - ₹1.5 Cr">
                  ₹1.2 Cr - ₹1.5 Cr
                </option>
                <option value="₹1.5 Cr - ₹2.5 Cr">
                  ₹1.5 Cr - ₹2.5 Cr
                </option>
                <option value="₹2.5 Cr Above">
                  ₹2.5 Cr Above
                </option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="configuration"
                value={form.configuration}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:border-[#7b3f45]"
              >
                <option value="">
                  Which configuration are you interested in?
                </option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </select>
            </div>

            <div className="mb-6">
              <select
                name="purchaseFor"
                value={form.purchaseFor}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white text-black focus:outline-none focus:border-[#7b3f45]"
              >
                <option value="">
                  Are you purchasing for?
                </option>
                <option value="Home">Home</option>
                <option value="Investment">
                  Investment
                </option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7b3f45] text-white py-3 rounded-md font-medium hover:bg-[#5c2d31] transition-all"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}