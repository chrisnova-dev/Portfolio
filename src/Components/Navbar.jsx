import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faChartLine,
  faEnvelope,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  const NAV_ITEMS = [
    { id: "home", icon: faHouse },
    { id: "about", icon: faUser },
    { id: "skills", icon: faChartLine },
    { id: "posts", icon: faBriefcase },
    { id: "contact", icon: faEnvelope }
  ];

  const handleScroll = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="fixed bottom-8 left-0 w-full flex justify-center z-[100]">
      <nav className="flex items-center gap-3 px-5 py-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">

        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="relative p-4 rounded-full group transition-all duration-300"
          >
            {active === item.id && (
              <div className="absolute inset-0 bg-[#FACC15] rounded-full shadow-[0_0_25px_rgba(250,204,21,0.7)] transition-all duration-300" />
            )}

            <FontAwesomeIcon
              icon={item.icon}
              className={`relative z-10 text-xl ${
                active === item.id
                  ? "text-black"
                  : "text-gray-500 group-hover:text-white"
              }`}
            />

          </button>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;