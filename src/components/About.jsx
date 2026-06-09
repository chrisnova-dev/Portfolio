import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-8">
          About <span className="text-[#FACC15]">Me</span>
        </motion.h2>

        {/* First paragraph — always visible */}
        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-6">
          I work with <span className="text-[#FACC15] font-semibold">Web3 projects</span> to help them grow and stay active.
          I've been part of different communities where I support teams with
          <span className="text-[#FACC15] font-semibold"> moderation</span>,
          <span className="text-[#FACC15] font-semibold"> raiding</span>, and keeping the chat active so new members feel welcome.
        </motion.p>

        {/* Hidden paragraphs + fade overlay */}
        <div className="relative">
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="extra"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I also build <span className="text-[#FACC15] font-semibold">clean and simple front-end websites</span>.
                  I enjoy turning ideas into real products that people can actually use.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  I like working with <span className="text-[#FACC15] font-semibold">early projects</span>, supporting the team,
                  and helping communities grow from the start. If you're building something interesting,
                  I'd be happy to <span className="text-[#FACC15] font-semibold">be part of it</span>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fade overlay when collapsed */}
          {!expanded && (
            <div
              className="pointer-events-none"
              style={{
                height: "50px",
                background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.9))",
              }}
            />
          )}
        </div>

        {/* Read More / Show Less button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-bold text-[#FACC15] hover:opacity-75 transition-opacity flex items-center gap-2 mx-auto"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {expanded ? "Show Less ↑" : "Read More ↓"}
        </button>

      </motion.div>
    </section>
  );
};

export default About;