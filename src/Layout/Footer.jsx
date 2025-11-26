import React from "react";
import SocialIcons from "../Components/SocialIcons";

const Footer = ({ darkMode, scrollToSection }) => {
  return (
    <footer className={`${darkMode ? "bg-gray-900" : "bg-gray-800"} text-white py-12`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {['Home', 'About', 'Projects', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <SocialIcons />
        </div>

        <p className="text-center text-gray-400">
          Copyright © Abhishek - All rights reserved 2025-26
        </p>

      </div>

    </footer>
  );
};

export default Footer;
