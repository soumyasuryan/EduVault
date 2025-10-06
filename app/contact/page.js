"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 bg-white rounded-lg shadow-md text-black w-[90%]">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Contact Us</h1>

      {/* Contact Info with Icons */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=soumyasuryan86@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 text-lg text-red-600 hover:underline"
>
  <SiGmail size={28} /> soumyasuryan86@gmail.com
</a>

        <a
          href="https://github.com/soumyasuryan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg text-gray-800 hover:underline"
        >
          <FaGithub size={28} /> github.com/soumyasuryan
        </a>
      </div>

      {/* Contact Form */}
      {submitted ? (
        <p className="text-green-600 text-center">✅ Thank you! We’ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="Write your message..."
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
