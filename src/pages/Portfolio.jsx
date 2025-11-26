import React, { useState, useEffect } from "react";

import Navigation from "../Components/Navigation";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/About/AboutSection";
import ProjectsSection from "../Components/Projects/ProjectsSection";
import ContactSection from "../Components/Contact/ContactSection";
import Footer from "../Layout/Footer";

const Portfolio = () => {

  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollY = window.scrollY + 100;

      sections.forEach(section => {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollToSection = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-[#e1dad9] text-gray-900"}`}>

      <Navigation
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      <ProjectsSection darkMode={darkMode} />
      <ContactSection darkMode={darkMode} />

      <Footer darkMode={darkMode} scrollToSection={scrollToSection} />

    </div>
  );
};

export default Portfolio;
