import React from "react";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact
} from "@fortawesome/free-brands-svg-icons";

import {
  faWind,
  faShieldHalved,
  faRocket,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills = () => {

  const techSkills = [
    { name: "HTML", icon: faHtml5, color: "text-orange-500" },
    { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
    { name: "Tailwind", icon: faWind, color: "text-teal-400" },
    { name: "React", icon: faReact, color: "text-cyan-400" },
  ];

  // const web3Skills = [
  //   { name: "Moderator", icon: faShieldHalved, color: "text-red-400" },
  //   { name: "Shiller", icon: faRocket, color: "text-red-300" },
  //   { name: "Raider", icon: faUser, color: "text-red-200" },
  // ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* TITLE - Adjusted size and font-weight to match image */}
        <h2 className="text-5xl font-bold mb-10 text-center">
          Tech <span className="text-[#FACC15]">Stack</span>
        </h2>

        {/* TECH GRID - Centered 5-column layout for desktop */}
        <div
          className="grid grid-cols-3 md:grid-cols-5 gap-y-16 gap-x-4 text-center mb-28"
          data-aos="fade-up"
        >
          {techSkills.map((skill, i) => (
            <div key={i} className="flex flex-col items-center space-y-4">
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-4xl md:text-5xl ${skill.color}`}
              />
              <p className="text-xl font-bold text-white ">
                {skill.name}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;