import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navigation = ({ darkMode, setDarkMode, activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? 'bg-gray-800/95' : 'bg-[#fff]'} backdrop-blur-sm shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className={`text-2xl font-bold ${darkMode ? 'text-[#fff]' : 'text-gray-800'}`}>
            Portfolio
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors duration-300 ${
                  activeSection === section
                    ? 'text-blue-500 font-semibold'
                    : darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'projects', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => {
                  scrollToSection(section);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md capitalize ${
                  activeSection === section
                    ? 'bg-blue-500 text-white'
                    : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
