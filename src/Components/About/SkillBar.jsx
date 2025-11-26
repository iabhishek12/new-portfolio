import React, { useEffect, useState } from "react";

const SkillBar = ({ skill, darkMode }) => {
  const [width, setWidth] = useState("0%");

  useEffect(() => {
    setTimeout(() => {
      setWidth(`${skill.percentage}%`);
    }, 200); // small delay for animation trigger
  }, [skill.percentage]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium">{skill.name}</span>
        <span className="text-blue-500">{skill.percentage}%</span>
      </div>

      <div
        className={`h-3 ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        } rounded-full overflow-hidden`}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-2000 ease-in-out"
          style={{ width }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
