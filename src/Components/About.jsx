import { motion } from "framer-motion";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: "easeOut" }
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

        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-6">
          I work with <span className="text-[#FACC15] font-semibold">Web3 projects</span> to help them grow and stay active. 
          I’ve been part of different communities where I support teams with 
          <span className="text-[#FACC15] font-semibold"> moderation</span>, 
          <span className="text-[#FACC15] font-semibold"> raiding</span>, and keeping the chat active so new members feel welcome.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed mb-6">
          I also build <span className="text-[#FACC15] font-semibold">clean and simple front-end websites</span>. 
          I enjoy turning ideas into real products that people can actually use.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
          I like working with <span className="text-[#FACC15] font-semibold">early projects</span>, supporting the team, 
          and helping communities grow from the start. If you’re building something interesting, 
          I’d be happy to <span className="text-[#FACC15] font-semibold">be part of it</span>.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;