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

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (!form.name || !form.phone) {
            alert("Please fill Name & Phone");
            return;
        }

        setLoading(true);

        try {
            // ✅ WhatsApp Message
            const text = `New Enquiry:
Name: ${form.name}
Phone: ${form.phone}
Apartment: ${form.type}
Message: ${form.message}`;

            const whatsappURL =
                "https://wa.me/919133633327?text=" +
                encodeURIComponent(text);

            window.open(whatsappURL, "_blank");

            alert("✅ Redirecting to WhatsApp...");

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

                <h2 className="text-3xl font-bold mb-6 text-center">
                    Contact Us
                </h2>

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
                        {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                    </button>

                </form>
            </div>
        </section>
    );
}