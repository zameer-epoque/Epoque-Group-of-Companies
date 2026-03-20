"use client";

import { useState } from "react";

type FormDataType = {
    name: string;
    phone: string;
    type: string;
    message: string;
};

export default function ContactSection() {
    const [form, setForm] = useState<FormDataType>({
        name: "",
        phone: "",
        type: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!form.name || !form.phone) {
            alert("Please fill Name & Phone");
            return;
        }

        setLoading(true);

        try {
            // ✅ Send data to Google Sheets
            await fetch(
                "https://script.google.com/macros/s/AKfycbyzqLPzO1lLmsclL4KcJ-hJd8ZyYg_QoOFZLeTugOch8XckXvCvvsOg8AHACVX6pca4/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                }
            );

            // ✅ WhatsApp Message
            const text = `*New Enquiry*%0A%0A
*Name:* ${form.name}%0A
*Phone:* ${form.phone}%0A
*Apartment:* ${form.type}%0A
*Message:* ${form.message}`;

            const whatsappURL = `https://wa.me/919133633327?text=${text}`;

            window.open(whatsappURL, "_blank");

            alert("✅ Enquiry sent successfully!");

            // ✅ Reset form
            setForm({
                name: "",
                phone: "",
                type: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            alert("⚠️ Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Contact Us
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid gap-4">

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        className="p-3 border border-gray-600 rounded bg-transparent"
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        className="p-3 border border-gray-600 rounded bg-transparent"
                    />

                    <input
                        type="text"
                        name="type"
                        placeholder="Apartment Type"
                        value={form.type}
                        onChange={handleChange}
                        className="p-3 border border-gray-600 rounded bg-transparent"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        className="p-3 border border-gray-600 rounded bg-transparent"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-white text-black py-3 rounded font-semibold hover:bg-gray-200 transition"
                    >
                        {loading ? "Sending..." : "Send Enquiry"}
                    </button>

                </form>
            </div>
        </section>
    );
}