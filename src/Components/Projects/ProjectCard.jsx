import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = ({ icon: Icon, title, description, buttonText, darkMode, iconColor,p }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 flex flex-col justify-center items-center  hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300`}>
      <div className={`${iconColor} mb-4`}>
        <Icon size={48} />
      </div>

      <h3 className="text-2xl font-semibold mb-2">{title}</h3>

      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
        {description} 
      </p>
      <p>{p}</p>

      {buttonText && (
        <NavLink to={"projects"}>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          {buttonText}
        </button>
        </NavLink>
      )}
    </div>
  );
};

export default ProjectCard;
