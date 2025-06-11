"use client";

import { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitStatus, setSubmitStatus] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("");
        setSubmitStatus("");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            console.log("Form submitted:", formData);
            setFormData({
                fullName: "",
                email: "",
                message: "",
            });
            setSubmitStatus("success");
            setSubmitMessage(
                "Thank you for your message. We will get back to you shortly!"
            );
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
            setSubmitMessage("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="flex flex-col lg:flex-row w-full py-16 relative">
            {/* Left sidebar with contact info */}
            <div className="bg-[#433185] text-white p-10 lg:w-1/3 flex flex-col justify-center relative h-[680px]">
                <div className="space-y-12 max-w-xs mx-auto">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                        <div className="text-yellow-400">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path>
                                <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Phones</h3>
                            <p>800-233-0000</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-4">
                        <div className="text-yellow-400">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p>info@merilife.com</p>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-center gap-4">
                        <div className="text-yellow-400">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M10 15.5v-8l6 4-6 4zm12-3A10 10 0 1 1 12 2a10 10 0 0 1 10 10.5zm-2 0a8 8 0 1 0-8 8 8 8 0 0 0 8-8z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">Website</h3>
                            <p>www.merilife.com/myclip</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-[75%] -translate-y-1/2 w-[459px] h-[536px] mb-8 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.013422263041!2d72.89587917504558!3d20.40235110899896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cfdefec7df75%3A0x1cac2ceee90518f2!2sMeril%20Life%20Sciences%20Pvt.%20Ltd!5e1!3m2!1sen!2sin!4v1749637247228!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                </div>
            </div>

            {/* Right content area */}
            <div className="">
                <div className="absolute top-[10%] right-[10%] w-[390px]">
                    {/* Map */}

                    {/* Contact Form */}
                    <div className="max-w-3xl mx-auto">
                        <div className="text-[#F7941D] text-sm font-medium mb-1">
                            Be Part of India's TEER Revolution
                        </div>
                        <h2 className="text-[#3C2E7E] text-4xl font-bold mb-2">
                            Contact Us
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Join the growing network of heart teams adopting
                            MyClip™ across India and beyond.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3C2E7E]"
                                    placeholder="Type Here..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3C2E7E]"
                                    placeholder="Type Here..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#3C2E7E]"
                                    placeholder="Type Here..."
                                ></textarea>
                            </div>

                            {submitMessage && (
                                <div
                                    className={`p-4 rounded-md ${
                                        submitStatus === "success"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {submitMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-3 bg-[#3C2E7E] text-white font-medium rounded-md hover:bg-[#2A1F58] transition duration-300 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
