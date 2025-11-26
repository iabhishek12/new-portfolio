import React from "react";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

const SocialIcons = ({ className = "" }) => {
  const socials = [
    { icon: Instagram, href: "https://www.instagram.com/hey_abhii17", color: "from-pink-500 to-purple-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/abhishek-singh-7b26582a1", color: "bg-blue-600" },
    { icon: Twitter, href: "#", color: "bg-blue-400" },
    { icon: Github, href: "https://github.com/iabhishek12", color: "bg-gray-800" }
  ];

  return (
    <div className={`flex gap-4 ${className}`}>
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full ${social.color.includes('from') ? `bg-gradient-to-r ${social.color}` : social.color}
              text-white hover:shadow-lg transform hover:scale-110 transition-all duration-300`}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
