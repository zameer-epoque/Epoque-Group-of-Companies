"use client";

import { useState } from "react";

type FormDataType = {
    name: string;
    phone: string;
    type: string;
    message: string;
};

export default function ContactForm() {
    const [form, setForm] = useState<FormDataType>({
        name: "",
        phone: "",
        type: "",
        message: "",
    });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        const data: FormDataType = {
            name: form.name,
            phone: form.phone,
            type: form.type,
            message: form.message,
        };

        try {
            await fetch(
                "https://script.google.com/macros/s/AKfycbyzqLPzO1lLmsclL4KcJ-hJd8ZyYg_QoOFZLeTugOch8XckXvCvvsOg8AHACVX6pca4/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
        } catch (error: unknown) {
            console.log(error);
        }

        const text = `New Enquiry:
Name: ${form.name}
Phone: ${form.phone}
Apartment: ${form.type}
Message: ${form.message}`;

        const whatsappURL =
            "https://wa.me/919133633327?text=" + encodeURIComponent(text);

        window.open(whatsappURL, "_blank");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                }
            />

            <input
                type="text"
                placeholder="Apartment Type"
                value={form.type}
                onChange={(e) =>
                    setForm({ ...form, type: e.target.value })
                }
            />

            <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                }
            />

            <button type="submit">Submit</button>
        </form>
    );
}