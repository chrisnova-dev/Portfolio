import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";


const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-20 gap-12 bg-black text-white"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* VIDEO*/}
      <div className="flex-1 w-full max-w-xl order-1 md:order-2">
        <div className="aspect-[18/10] rounded-[1.5rem] overflow-hidden  shadow-[0_0_40px_rgba(250,204,21,0.2)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="./gojo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Hi, I'm <br />
          <span className="text-[#FACC15]">Chris</span> Nova
        </h1>

        {/* TYPEWRITER */}
        <h2 className="text-xl md:text-2xl text-[#FACC15] s font-medium">
          <Typewriter
            options={{
              strings: [
                "Front-End Developer",
                "Web3 Community Manager",
                "Telegram Moderator",
                "Community Builder",
                "Early Project Supporter",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

        <p className="text-gray-400 max-w-md">
          I help web3 projects grow and stay active. From community management
          to building clean front-end websites.
        </p>

        <div className="flex justify-center md:justify-start pt-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all text-sm tracking-wide"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Hero;
