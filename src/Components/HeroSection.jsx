import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import SocialIcons from "./SocialIcons";
const HeroSection = ({ darkMode }) => {


  return (
    <section id="home" className="min-h-screen flex items-center pt-16 fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-5">
            <p className={`text-2xl font-extrabold  ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hello I'm</p>

            <h1 className="text-5xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Abhishek Kumar singh
              </span>
            </h1>

            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My name is Abhishek! I'm a Web Developer 
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Hire Me
              </button>

             <a
  href={"../assets/ABHISHEK CV 1.docx"}
  download
  className={`px-6 py-3 border-2 ${
    darkMode ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'
  } rounded-lg flex items-center gap-2 transition-all duration-300`}
>
  Download CV <Download size={18} />
</a>
            </div>

            <SocialIcons className="pt-4" />
          </div>

          <div className="flex justify-center">
          
              <div className="  p-4  bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-800 ">
             <img src="../../src/assets/images/pic 1.jpg" alt="" className="h-[350px] w-[350px] rounded-full"/>
          
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
