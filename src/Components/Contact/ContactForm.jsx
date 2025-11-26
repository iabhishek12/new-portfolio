import React, { useState } from "react";

const ContactForm = ({ darkMode }) => {
   const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "96c60646-115d-49e3-b5e4-3bd5994b8355");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <form className="space-y-4" onSubmit={onSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className={`w-full px-4 py-3 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:ring-2 focus:ring-blue-500`}
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className={`w-full px-4 py-3 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:ring-2 focus:ring-blue-500`}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className={`w-full px-4 py-3 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:ring-2 focus:ring-blue-500`}
      />

      <textarea
        name="message"
        rows="5"
    
        placeholder="Message"
        className={`w-full px-4 py-3 rounded-lg ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} focus:ring-2 focus:ring-blue-500`}
      ></textarea>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
      >
        Send Message
      </button>

    </form>
  );
};

export default ContactForm;
