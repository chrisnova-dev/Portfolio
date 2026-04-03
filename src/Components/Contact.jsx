import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({
    contact: "",
    project: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const token = "AAFvvpdOKU4r4W6-3w_-JkUB3w07B8p29yk";
  const chatId = "7104555711";

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const leftSideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  };

  const rightSideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.5, ease: "easeOut" } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    },
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.contact || !form.project || !form.budget || !form.message) {
      setStatus("Please fill all fields");
      return;
    }

    setLoading(true);
    setStatus("");

    const text = `
 New Portfolio Client

📞 Contact: ${form.contact}

🔗 Project: ${form.project}

💰 Budget: ${form.budget}

📝 Message:
${form.message}
`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        },
      );

      const data = await response.json();

      if (data.ok) {
        setStatus("Message sent successfully!");
        setForm({
          contact: "",
          project: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("Something want wrong. Try again later");
      }
    } catch (error) {
      setStatus("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-black text-white items-center overflow-hidden">
      <motion.div 
        className="max-w-4xl flex-col mx-auto grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Left Side: Information */}
        <motion.div variants={leftSideVariants} className="space-y-10">
          <div>
            <h2 className="text-5xl font-bold mb-10">
              <span className="text-[#FACC15]">Contact</span> Me
            </h2>
            <p className="text-xl">
              Building a <span className="text-[#FACC15]">web3 project?</span>
              <br />
              I'd love to hear from you! Reach out to me, and let's build{" "}
              <span className="text-[#FACC15]">something greate together.</span>
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Alternate Contact:</h3>
            <p className="text-lg">
              <span className="text-[#FACC15]">Email:</span>{" "}
              mgbenyapeter@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div variants={rightSideVariants} className="space-y-6">
          <h2 className="text-3xl font-bold">Send Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Telegram / Twitter / Discord / Email"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#FACC15] outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="project"
                value={form.project}
                onChange={handleChange}
                placeholder="Project Link or Username"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#FACC15] outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                placeholder="Budget (Example: $500)"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#FACC15] outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#FACC15] outline-none"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto px-10 py-3 bg-[#FACC15] text-black rounded-full font-bold hover:scale-105 transition"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {status && (
                <p className="mt-4 text-center text-gray-400 ">{status}</p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;