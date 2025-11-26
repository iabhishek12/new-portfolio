import React from "react";
import { Users, Award, Briefcase } from "lucide-react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = ({ darkMode }) => {
  const projects = [
    {
      icon: Users,
      title: "Completed",
      description: "5+ Finished Projects",
      buttonText: "View Projects",
      iconColor: "text-blue-700"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "5+ Certificates",
      iconColor: "text-purple-500"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "2+ months Internship in Web Development",
      p:"Learning MERN Stack in Qspiders Delhi",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} darkMode={darkMode} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
