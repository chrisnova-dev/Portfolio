import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Alex Crypto",
    handle: "Startup-founder",
    // Replace with real photo paths like "/testimonial-1.jpg"
    // If no photo, set image to null and initials will show
    image: "/founder.jpg",
    initials: "AC",
    text: "Chris Nova is one of the most dedicated community managers I've worked with. He kept our Telegram alive 24/7, handled raids perfectly, and always brought energy. Highly recommend him for any Web3 project.",
  },
  {
    name: "Krypto Mike",
    handle: "Project Leader, DeFiX",
    image: "/defix.jpg",
    initials: "KM",
    text: "We hired Chris as our CTO admin and he exceeded expectations. He moderated our community professionally, boosted engagement significantly, and even helped us with our website frontend. A real team player.",
  },
  {
    name: "DeFi Sarah",
    handle: "CMO",
    image: "/defi.jpg",
    initials: "DS",
    text: "Chris ran our raid coordination flawlessly. He organized the team, tracked proofs, and kept everyone motivated. Our engagement numbers went up massively within the first week.",
  },
  {
    name: "Block Builder",
    handle: "CEO, Nova Labs",
    image: "/Novalab.jpg",
    initials: "BB",
    text: "Hired Chris to build our landing page and he delivered a clean, fast, well-coded site. He communicates well, takes feedback seriously, and delivers on time. Will work with him again for sure.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef(null);

  const total = testimonials.length;

  const go = (dir) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + total) % total);
  };

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => go(1), 5000);
    return () => clearInterval(timerRef.current);
  }, [active]);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  };

  const t = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 text-white overflow-hidden"
    >
      {/* Subtle radial glow behind content */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "400px",
          background: "radial-gradient(ellipse, rgba(250,204,21,0.05) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-black text-white mb-16 tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Testimonials
        </motion.h2>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => { clearInterval(timerRef.current); go(-1); }}
            className="absolute left-0 z-20 text-gray-600 hover:text-[#FACC15] transition-colors text-3xl p-2"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            &#8249;
          </button>

          {/* Card */}
          <div className="w-full px-12 md:px-20">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="flex flex-col items-center gap-5"
              >
                {/* Avatar */}
                <div
                  className="w-28 h-28 rounded-full overflow-hidden  flex-shrink-0"
                  style={{ boxShadow: "0 0 30px rgba(250,204,21,0.15)" }}
                >
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-[#111] flex items-center justify-center text-[#FACC15] text-2xl font-black"
                      style={{ fontFamily: "'Syne', sans-serif" }}>
                      {t.initials}
                    </div>
                  )}
                </div>

                {/* Name */}
                <div>
                  <p
                    className="text-[#FACC15] font-black text-sm tracking-[0.2em] uppercase mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-sm">{t.handle}</p>
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FACC15] text-base">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
                  "{t.text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => { clearInterval(timerRef.current); go(1); }}
            className="absolute right-0 z-20 text-gray-600 hover:text-[#FACC15] transition-colors text-3xl p-2"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            &#8250;
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { clearInterval(timerRef.current); setDirection(i > active ? 1 : -1); setActive(i); }}
              style={{
                width: i === active ? "28px" : "8px",
                height: "4px",
                borderRadius: "999px",
                background: i === active ? "#FACC15" : "#333",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}