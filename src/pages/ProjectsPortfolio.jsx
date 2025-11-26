import React from 'react';

export default function ProjectsPortfolio() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website built with HTML, CSS, and JavaScript, showcasing my skills, projects, and achievements. It provides an interactive and visually appealing way to present my work.",
      image: "../../src/assets/images/portfolio.png",
      link: "/"
    },
    {
      id: 2,
      title: "React E-Commerce",
      description: "A fully responsive E-Commerce web application built to showcase frontend skills, featuring dynamic product listings, smooth navigation, and an engaging user interface. It highlights modern web design and interactive UI components.",
      image: "../../src/assets/images/shopme.png",
      link: "https://shopme-react.netlify.app/"
    },
    {
      id: 3,
      title: "World Atlas",
      description: "A responsive World Atlas React app that displays country details using the REST Countries API with dynamic search and region-based filters. Built using React Hooks like useState, useEffect etc. for efficient state and data management. Features a clean, interactive UI for exploring global information seamlessly.",
      image: "../../src/assets/images/worldatlas.png",
      link: "https://github.com/iabhishek12/my-atlas"
    },
    {
      id: 4,
      title: "Employee Management System",
      description: "A React-based Employee Management System that allows users to create, read, update, and delete (CRUD) employee records. It provides an interactive interface for efficiently managing employee data with login authentication and real OTP verification and authentication.",
      image: "https://picsum.photos/400/250?random=3",
      link: "https://github.com/iabhishek12/Employee-Management-system"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="text-center my-8 px-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-2">
          My Projects
        </h1>
        <p className="text-gray-600 text-lg">
          A collection of my web development projects — click below to explore!
        </p>
      </header>

      {/* Projects Grid */}
      <section className="w-11/12 max-w-6xl mx-auto pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x250?text=Project+Image';
                }}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-200 mt-auto w-full">
        © 2025 Abhishek Singh — All Rights Reserved
      </footer>
    </div>
  );
}