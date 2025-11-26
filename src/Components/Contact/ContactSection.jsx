import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-[#e1dad9]'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Do you have a project in mind? Contact me here
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo darkMode={darkMode}/>
          <ContactForm darkMode={darkMode}/>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
