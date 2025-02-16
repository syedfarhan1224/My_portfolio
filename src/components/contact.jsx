import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";



function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7i33ty9",   
        "template_5dbbl1m", 
        formData,
        "OTC_CiBfks9nF-kQx")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message Sent Successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again!");
        }
      );
  };

  return (
    <div id="contact" className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Get in Touch</h2>
      <p className="text-center text-gray-400 mt-2">
        A MERN Stack Developer.
      </p>

      {/* Contact Form */}
      <div className="mt-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3 bg-gray-800 p-6 md:p-10 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-6">Say Something</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 rounded-lg outline-none h-28"
              required
            />
            <button
              type="submit"
              className="w-full bg-emerald-600 py-3 rounded-lg text-lg font-semibold hover:opacity-85 transition duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:w-1/3 space-y-6">
          <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg shadow-lg">
            <FaMapMarkerAlt size={24} className="text-emerald-500" />
            <p className="text-gray-300">Baldia Town, Karachi</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg shadow-lg">
            <FaPhoneAlt size={24} className="text-emerald-500" />
            <p className="text-gray-300">+92 3171224398</p>
          </div>
          <div className="flex items-center gap-4 bg-gray-800 p-5 rounded-lg shadow-lg">
            <FaEnvelope size={24} className="text-emerald-500" />
            <p className="text-gray-300">
              <a href="mailto:syedfarhan1224398@gmail.com" className="hover:underline">
                syedfarhan1224398@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
