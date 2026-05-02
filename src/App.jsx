import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import About from "./components/About";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#FACC15]/30">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Posts />

      <Contact />

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Chris Nova. All rights reserved.
      </footer>

    </div>
  );
};

export default App;