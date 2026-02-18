import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    
    <nav className="sticky top-0 z-50 bg-white-100 backdrop-blur-md flex justify-center py-6 border-b border-gray-100 shadow-xl">
      <ul className="flex gap-4 md:gap-8 text-gray-600 font-medium">
        <li>
          <a href="#home" className="hover:text-[#0047BB] border-b-2 border-transparent hover:border-[#0047BB] pb-1 transition-all">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-[#0047BB] border-b-2 border-transparent hover:border-[#0047BB] pb-1 transition-all">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-[#0047BB] border-b-2 border-transparent hover:border-[#0047BB] pb-1 transition-all">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-[#0047BB] border-b-2 border-transparent hover:border-[#0047BB] pb-1 transition-all">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#0047BB] border-b-2 border-transparent hover:border-[#0047BB] pb-1 transition-all">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;