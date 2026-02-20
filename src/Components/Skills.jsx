import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHtml5, faCss3Alt, faJs, faReact, } from '@fortawesome/free-brands-svg-icons';

import { faWind, faShieldHalved, faRocket, faUser,} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillList = [
    { name: 'HTML', icon: faHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: faCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: faJs, color: 'text-yellow-400' },
    { name: 'React', icon: faReact, color: 'text-cyan-400' },
    { name: 'Tailwind CSS', icon: faWind, color: 'text-teal-400' },
    { name: 'Web3 Moderation', icon: faShieldHalved, color: 'text-slate-700' },
    { name: 'Shiller', icon: faRocket, color: 'text-slate-700' },
    { name: 'Raider', icon: faUser, color: 'text-slate-700' },
  ];



  return (
    <section id="skills" className="py-16 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">My Skills</h2>
        <div className="flex flex-wrap gap-4 skills-track">
          {skillList.map((skill, index)  => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-300 rounded-md hover:scale-105 transition-transform"
            >
              <FontAwesomeIcon
              icon={skill.icon}
              className={`text-xl ${skill.color}`}
              />
              <span className="font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;