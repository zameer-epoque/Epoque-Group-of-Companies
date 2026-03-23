"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {

    const [form, setForm] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const whatsappMessage =
            `Hello, I am interested in Om Sree Delight.%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;

        window.open(
            `https://wa.me/919133633327?text=${whatsappMessage}`,
            "_blank"
        );
    };

    return (
        <section id="contact" className="bg-[#f6f3ee] py-4 px-6 md:px-16">

            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <p className="text-[#7b3f45] italic mb-3">
                        Get in touch with us
                    </p>

                    <h2 className="tracking-[6px] text-[#7b3f45] text-2xl font-semibold">
                        CONTACT US
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">
                            Reach Us
                        </h3>

                        <div className="space-y-6">

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-[#7b3f45] text-xl" />
                                <p className="text-gray-600">
                                    Yapral, Near Secunderabad, Telangana
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-[#7b3f45] text-xl" />
                                <p className="text-gray-600">
                                    +91 9133633327
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-[#7b3f45] text-xl" />
                                <p className="text-gray-600">
                                    sales@epoquegroup.in
                                </p>
                            </div>

                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 border border-gray-200"
                    >

                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#7b3f45]"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#7b3f45]"
                            />
                        </div>

                        <div className="mb-6">
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                onChange={handleChange}
                                className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#7b3f45]"
                            ></textarea>
                        </div>

                        <button className="bg-[#7b3f45] text-white px-6 py-3 hover:bg-[#5c2d31] transition w-full">
                            Send Enquiry
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}