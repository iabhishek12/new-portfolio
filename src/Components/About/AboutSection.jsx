import React from 'react';
import SkillBar from './SkillBar';

const AboutSection = ({ darkMode }) => {
  const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'Tailwind CSS / CSS', percentage: 88 },
    { name: 'Python', percentage: 40 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Express.js', percentage: 75 }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-[#e1dad9]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-8 rounded-2xl shadow-lg`}>
            <div className="flex flex-col items-center text-center space-y-4">
              
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center ">
                <img src="../../../src/assets/images/pic 1.jpg" alt=""  className='h-[100px] w-[100px] rounded-full p-2 shadow-2xl shadow-blue-700'/>
              </div>

              <h3 className="text-2xl font-semibold">Web Developer</h3>

              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                My name is Abhishek! I'm a recent BCA graduate with a strong passion for Technology.
                Creative and code-savvy developer skilled in web development.
              </p>

            </div>
          </div>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} darkMode={darkMode} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
